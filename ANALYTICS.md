# Analytics Tab — Data Inventory & Feature Plan

## 1. Что у нас есть (источники данных)

### Таблицы (только `air_initiative`)

| Таблица | Строк | Обновление | Назначение |
|---|---|---|---|
| `air_initiative_sensors` | ~173 | Hourly | Справочник датчиков |
| `air_initiative_sensor_measurements` | ~43M/год | Hourly (данные 15-мин) | Сырой временной ряд |
| `air_initiative_sensor_current_measurements` | ~173×N | Hourly | Snapshot последнего значения |
| `air_initiative_sensor_daily_measurements` | ~173×days×params | Hourly (пересчёт -3 дня) | Дневные агрегаты avg/min/max/count |

### Параметры

| Параметр | Единица | Источник | Примечание |
|---|---|---|---|
| `pm25` | µg/m³ | aai | Главный показатель |
| `pm10` | µg/m³ | aai | Крупные частицы |
| `pm01` | µg/m³ | aai | Мелкие частицы |
| `co2` | ppm | aai | Углекислый газ |
| `tvoc` | ppb | aai | Летучие органические вещества |
| `temperature` | °C | aai | Температура |
| `humidity` | % | aai | Влажность |
| `pollen_*` | p/m³ | pollen | 42 типа пыльцы (1 сенсор) |

### Географическое измерение

- **173 датчика** сети AAI + 1 пыльцевой
- **8 районов** Алматы (FK: `district_id` → `address.CityDistrict`)
- ~27 датчиков вне районов (БКАД, область)
- PostGIS Point для spatial-запросов

### Временная гранулярность

| Уровень | Интервал | Источник |
|---|---|---|
| Raw | 15 мин (aai) | `sensor_measurements` |
| Hourly | 1 ч | Можно агрегировать из raw |
| Daily | 24 ч (Asia/Almaty) | `sensor_daily_measurements` |
| Calendar | Суточное среднее по городу | `/ecology/api/air-quality-calendar/` |

---

## 2. Текущие API-эндпоинты

```
GET /api/v1/air/current/?parameter=pm25&limit=500
    → 166 записей, snapshot текущего PM2.5 по каждому датчику
    → поля: sensor_id, sensor_name, source, value, unit, measured_at,
             latitude, longitude, district_id, district_name

GET /api/v1/air/sensors/<id>/current/
    → ВСЕ параметры одного датчика (pm25, pm10, co2, temp, humidity...)

GET /api/v1/air/sensors/<id>/daily/?parameter=pm25&limit=180
    → daily: day, avg_value, min_value, max_value, reading_count

GET /api/v1/air/measurements/?source=aai&parameter=pm25&hours=24
    → raw 15-мин данные за N часов (тяжёлый, осторожно)

GET /api/v1/ecology/api/air-quality-calendar/?year=2026
    → {date, avg_pm25} — суточные средние по всему городу
```

---

## 3. Аналитика: что строим и с каким приоритетом

### 🟢 P1 — Строим из существующих данных (без новых эндпоинтов)

#### 3.1 Summary Cards (KPI-плашки)
**Данные:** `/air/current/` + `/ecology/air-quality-calendar/`

- **Медиана** PM2.5 по городу прямо сейчас (не среднее — один выбросной датчик не ломает картину)
- Количество датчиков в каждой категории (синих / зелёных / желтых / красных / ...)
- % датчиков выше нормы ВОЗ 15 µg/m³
- US EPA AQI на основе 24h среднего (уже реализовано в сайдбаре)
- Дней подряд выше WHO-нормы (streak)
- Дней с чистым воздухом в этом году (running total)

#### 3.2 Распределение датчиков по категориям (Donut/Bar)
**Данные:** `/air/current/?parameter=pm25`

```
Very Good  ████████░░  38 датчиков
Good       ███░░░░░░░  21
Moderate   ██░░░░░░░░  15
Unhealthy  █░░░░░░░░░  6
...
```

#### 3.3 Рейтинг районов (District Ranking)
**Данные:** `/air/current/?parameter=pm25` (group by district_name) + `/sensors/<id>/daily/` для тренда

- Текущий рейтинг: какой район грязнее всего прямо сейчас (медиана по датчикам района)
- Таблица: район → медиана PM2.5 → EPA AQI → кол-во датчиков → тренд ↑↓

> **Тренд ↑↓:** только `/current/` мало — один момент не даёт направления.
> Считаем: `current district median` vs `7-day district avg` из `sensor_daily_measurements`.
> Если current > 7d_avg × 1.1 → тренд вверх ↑, если < 0.9 → вниз ↓, иначе → стабильно.

#### 3.4 Календарь нарушений (Exceedance Calendar)
**Данные:** `/ecology/air-quality-calendar/?year=` (2 года)

- Heatmap по дням: зелёный = норма, красный = выше WHO
- Месячная статистика: сколько дней в каждой категории
- Worst-10 дней за период

#### 3.5 Year-over-Year сравнение (Multi-line chart)
**Данные:** Два запроса к `/ecology/air-quality-calendar/` (2024 / 2025 / 2026)

- Сглаженные кривые за 3 года на одном графике
- Позволяет видеть: становится лучше или хуже?

#### 3.6 Топ загрязнённых / чистых датчиков (уже есть в сайдбаре)
Вынести и расширить:
- Топ-10 по PM2.5 сейчас
- Показать также pm10, co2 для тех же датчиков

---

### 🟡 P2 — Нужен 1 новый эндпоинт

#### 3.7 Суточный паттерн (Diurnal Pattern)
**Нужно:** `GET /api/v1/air/analytics/city-hourly/?parameter=pm25&days=30`
→ агрегат по часу дня: `{hour: 0..23, avg_value, p25, p75}`

> ⚠️ **Важно:** этот endpoint НЕ из `sensor_daily_measurements` — суточная таблица не хранит час.
> Источник — **`sensor_measurements`** (raw, 15-мин). За 30 дней это ~498k строк по pm25.
> Обязательно: `measured_at` в диапазоне (index `idx_sm_src_param_metric_time`), `days` max = 90.

**Что показываем:**
- Кривая «среднее PM2.5 по часу дня за последние 30 дней»
- Пики утром (8-10h) и вечером (18-20h) — rush hour
- Ночной провал (3-5h)
- Сравнение: будни vs выходные (weekend flag)

**SQL:**
```sql
SELECT
    EXTRACT(HOUR FROM measured_at AT TIME ZONE 'Asia/Almaty') AS hour,
    AVG(value)                                                 AS avg_pm25,
    PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY value)        AS p25,
    PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY value)        AS p75
FROM air_initiative_sensor_measurements
WHERE
    source      = 'aai'
    AND parameter = 'pm25'
    AND metric    = 'value'
    AND measured_at >= NOW() - INTERVAL '30 days'  -- обязательный фильтр по партиции
GROUP BY hour
ORDER BY hour;
-- ~498k строк за 30d. Индекс idx_sm_src_param_metric_time покрывает.
-- При days > 30 время растёт линейно — ограничить max=90.
```

#### 3.8 Рейтинг районов по историческим данным
**Нужно:** `GET /api/v1/air/analytics/district-daily/?parameter=pm25&days=90`
→ `{district_name, day, avg_value}` — по ~8 районам за N дней

**Что показываем:**
- Multi-line chart: 8 линий (по одной на район) за 90 дней
- Позволяет видеть: какой район стабильно грязнее, сезонность по районам

**SQL:**
```sql
SELECT
    cd.name_ru          AS district_name,
    sdm.day,
    AVG(sdm.avg_value)  AS avg_pm25
FROM air_initiative_sensor_daily_measurements sdm
JOIN air_initiative_sensors s ON s.id = sdm.sensor_id
JOIN address_city_districts cd ON cd.id = s.district_id
WHERE
    sdm.parameter = 'pm25'
    AND sdm.metric = 'value'
    AND sdm.day >= CURRENT_DATE - INTERVAL '90 days'
    AND s.district_id IS NOT NULL
GROUP BY cd.name_ru, sdm.day
ORDER BY cd.name_ru, sdm.day;
```

#### 3.9 Надёжность датчиков (Sensor Health)
**Нужно:** `GET /api/v1/air/analytics/sensor-health/?days=30`
→ `{sensor_id, sensor_name, district_name, coverage_pct, last_seen_hours, avg_pm25_30d}`

> Три метрики берутся из разных источников:
> - `coverage_pct` → `sensor_daily_measurements.reading_count` (накопленное за N дней)
> - `last_seen_hours` → `sensor_current_measurements.measured_at` (текущий snapshot, иначе не увидим, что датчик отвалился сегодня)
> - `avg_pm25_30d` → `sensor_daily_measurements.avg_value`

**SQL:**
```sql
SELECT
    s.id,
    s.sensor_name,
    cd.name_ru                                               AS district_name,
    ROUND(
        SUM(sdm.reading_count)::numeric / (:days * 96) * 100, 1
    )                                                        AS coverage_pct,
    ROUND(
        EXTRACT(EPOCH FROM (NOW() - scm.measured_at)) / 3600, 1
    )                                                        AS last_seen_hours,
    ROUND(AVG(sdm.avg_value)::numeric, 2)                   AS avg_pm25_30d
FROM air_initiative_sensors s
LEFT JOIN air_initiative_sensor_daily_measurements sdm
       ON sdm.sensor_id = s.id
      AND sdm.parameter = 'pm25'
      AND sdm.metric    = 'value'
      AND sdm.day >= CURRENT_DATE - :days
LEFT JOIN air_initiative_sensor_current_measurements scm
       ON scm.sensor_id = s.id
      AND scm.parameter = 'pm25'
      AND scm.metric    = 'value'
LEFT JOIN address_city_districts cd ON cd.id = s.district_id
WHERE s.source = 'aai'
GROUP BY s.id, s.sensor_name, cd.name_ru, scm.measured_at
ORDER BY coverage_pct ASC NULLS FIRST;
-- 96 = 15-мин шаг × 24 ч. last_seen из current table, иначе датчик-падение за сегодня не видно.
```

**Что показываем:**
- Таблица датчиков: uptime%, последнее измерение (часов назад), средний PM2.5 за 30d
- KPI-плашка: N онлайн (last_seen < 2h) / N оффлайн
- Цвет uptime: зелёный >90%, жёлтый 70-90%, красный <70%

---

### 🔵 P3 — Интересно, но требует больше данных / сложнее

#### 3.10 Корреляция параметров (Scatter + heatmap)
**Данные:** `/air/sensors/<id>/current/` (уже есть все параметры)
**Нужно для города:** новый bulk-endpoint по всем параметрам

- PM2.5 vs Температура (отопительный сезон эффект)
- PM2.5 vs Влажность
- CO2 vs PM2.5 (indoor vs outdoor)

#### 3.11 Аномалии / спайки
**Данные:** daily avg + 30d rolling avg → если avg_today > 30d_avg * 2 → аномалия

- Список датчиков с резким скачком за последние 7 дней
- «Что случилось?» — таймлайн события

#### 3.12 Пыльца (Pollen)
**Данные:** `/air/sensors/X/daily/?parameter=pollen_BET` (42 типа)

- Пыльцевой календарь — 42 типа по месяцам
- Топ пыльцевой нагрузки сегодня
- Корреляция с PM2.5 (в дни высокой пыльцы воздух ли грязнее?)

---

## 4. Новые API-эндпоинты для реализации

```python
# urls.py
path("analytics/city-hourly/",    CityHourlyView.as_view()),    # P2 — 3.7
path("analytics/district-daily/",  DistrictDailyView.as_view()), # P2 — 3.8
path("analytics/sensor-health/",   SensorHealthView.as_view()),  # P2 — 3.9
```

| Endpoint | Источник таблица | Сложность | Примечание |
|---|---|---|---|
| `district-daily/` | `sensor_daily_measurements` | Лёгкий | JOIN + GROUP BY day |
| `sensor-health/` | `sensor_daily_measurements` + `sensor_current_measurements` | Лёгкий | `coverage` из daily, `last_seen` из current |
| `city-hourly/` | **`sensor_measurements` (raw)** | Средний | ~498k строк/30d, max days=90, нужен индекс по partition key |

---

## 5. Структура вкладки Аналитика

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 Аналитика          [30d ▾]  [PM2.5 ▾]  [Все районы ▾]     │
├──────────┬──────────┬──────────┬──────────┬────────────────────┤
│ 43 / 166 │ Медиана  │ Дней выше│ AQI      │ Лучший район       │
│ онлайн   │ 18.3     │ нормы ВОЗ│ Moderate │ Бостандык 11.2     │
│  датчика │ µg/m³    │  47%     │ 74       │                    │
├──────────┴──────────┴──────────┴──────────┴────────────────────┤
│                                                                 │
│  [Распределение по категориям]    [Рейтинг районов прямо сейчас]│
│   Donut chart                      Horizontal bar chart         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Суточный паттерн (Hour of Day)    Year-over-Year сравнение     │
│  Area chart: avg ± IQR, 0-23h     Multi-line: 2024/2025/2026  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Динамика по районам (90 дней)                                  │
│  Multi-line chart, 8 районов                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Надёжность датчиков               Хуже всего (30d avg)        │
│  Table: sensor, uptime%, last_seen  Table: топ-10 загрязнённых │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Порядок реализации

| Шаг | Что | Данные | Оценка |
|---|---|---|---|
| 1 | Summary cards + Donut | `/air/current/` (уже грузим) | 0.5d |
| 2 | District ranking (текущее + тренд) | `/air/current/` (медиана по районам) + `/sensors/<id>/daily/` 7d avg | 0.5d |
| 3 | Exceedance calendar + YoY | `/ecology/calendar/` (уже грузим) | 1d |
| 4 | `sensor-health` endpoint | Django: daily + current (два источника) | 0.5d |
| 5 | Sensor health table + онлайн/оффлайн | новый эндпоинт | 0.5d |
| 6 | `district-daily` endpoint | Django: sensor_daily JOIN districts | 0.5d |
| 7 | District dynamics chart | новый эндпоинт | 1d |
| 8 | `city-hourly` endpoint | Django: raw sensor_measurements, max 90d | 0.5d |
| 9 | Diurnal pattern chart | новый эндпоинт | 1d |

**Итого P1 (без новых API): ~2 дня**
**P2 (с 3 новыми API): +~4 дня**

---

## Примечания по корректности данных

- **Везде медиана, не среднее** для city-wide PM2.5 — один сломанный датчик со значением 999 не должен ломать картину
- **`city-hourly` — не daily-based**: источник `sensor_measurements`, ~498k строк/30d, обязателен фильтр по `measured_at` для хита в партиционный индекс
- **Тренд районов** требует двух точек: current median vs 7-day daily avg — иначе "тренд" бессмысленный
- **Sensor health `last_seen_hours`** — только из `sensor_current_measurements`, не из daily; иначе датчик упавший сегодня будет показывать coverage 100% за 30 дней
