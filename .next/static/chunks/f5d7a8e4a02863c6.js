(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95775,e=>{"use strict";var t=e.i(43476),r=e.i(71645),l=e.i(32322),n=e.i(19738);let o=[43.238949,76.889709];function i(e){return null==e?"#6b7280":e<=50?"#1BA97C":e<=100?"#f59e0b":e<=150?"#f97316":e<=200?"#ef4444":e<=300?"#a855f7":"#581c87"}let a=["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#3b82f6","#f97316","#84cc16"];function s({sensors:e,ecoIqSensors:s=[],onSensorSelect:u,onEcoIqSelect:d,focusedSensor:c,metricMode:p="pm25",sourceFilter:f="all"}){let g=(0,r.useRef)(null),m=(0,r.useRef)(null),x=(0,r.useRef)(null),h=(0,r.useRef)(null),y=(0,r.useRef)(null),b=(0,r.useRef)(!1),[v,$]=(0,r.useState)(!1),w=e.filter(e=>null!=e.latitude&&null!=e.longitude);return((0,r.useEffect)(()=>{if(!g.current||m.current)return;let e=l.default.map(g.current,{crs:l.default.CRS.EPSG3395,center:o,zoom:11,preferCanvas:!0,zoomAnimation:!0});return l.default.tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU",{attribution:'&copy; <a href="https://yandex.com/maps/">Yandex</a>',maxZoom:18,minZoom:0}).addTo(e),m.current=e,fetch("https://admin.smartalmaty.kz/api/v1/address/districts/").then(e=>e.json()).then(t=>{let r=0;l.default.geoJSON(t,{filter:e=>null!=e.geometry&&String(e?.properties?.name_ru??"").includes("район"),style(){let e=a[r++%a.length];return{color:e,weight:1.5,fillColor:e,fillOpacity:.07}},onEachFeature(e,t){let r=e?.properties?.name_ru??"";r&&t.bindTooltip(r,{sticky:!0,className:"district-label"})}}).addTo(e)}).catch(()=>{}),()=>{m.current?.remove(),m.current=null}},[]),(0,r.useEffect)(()=>{m.current&&c?.latitude&&c?.longitude&&m.current.flyTo([c.latitude,c.longitude],18,{animate:!0,duration:1.2})},[c]),(0,r.useEffect)(()=>{if(!m.current)return;let e=m.current;if(x.current&&(e.removeLayer(x.current),x.current=null),!w.length)return;let t=l.default.layerGroup();for(let e of w){let r=e.value,o=function(e,t="pm25"){let r,o=(0,n.pm25Color)(e);if("epa-aqi"===t&&null!=e){let t=(0,n.pm25ToEpaAqi)(e);r=t?t.aqi.toString():"?"}else r=null!=e?Math.round(e).toString():"?";let i=r.length<=2?34:3===r.length?40:46;return l.default.divIcon({className:"",html:`<div style="
      background:${o};
      color:#fff;
      font-family:system-ui,-apple-system,sans-serif;
      font-weight:800;
      font-size:12px;
      line-height:1;
      width:${i}px;
      height:24px;
      border-radius:7px;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,0.35);
      border:2px solid rgba(255,255,255,0.45);
    ">${r}</div>`,iconSize:[i,24],iconAnchor:[i/2,12],popupAnchor:[0,-16]})}(r,p),i=(0,n.pm25Color)(r),a=e.measured_at?new Date(e.measured_at).toLocaleString("ru-RU"):"—",s=null!=r?(0,n.pm25ToEpaAqi)(r):null,d=`
        <div style="min-width:200px;font-family:system-ui">
          <p style="font-size:13px;font-weight:700;margin:0 0 8px;color:#111">${e.sensor_name??"Сенсор"}</p>
          ${e.source?`<p style="font-size:11px;color:#6b7280;margin:0 0 8px">${e.source}</p>`:""}
          ${null!=r?`
            <div style="margin:0 0 8px;padding:8px 10px;background:${i}18;border-left:3px solid ${i};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> \xb7 ${(0,n.pm25Label)(r)}</p>
              <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:${i}">${r.toFixed(1)} <span style="font-size:11px;font-weight:500">\xb5g/m\xb3</span></p>
              ${s?`<p style="margin:4px 0 0;font-size:11px;color:#6b7280">US EPA AQI ≈ <strong style="color:${i}">${s.aqi}</strong> <span style="opacity:0.7">(текущее PM2.5)</span></p>`:""}
            </div>
          `:`<p style="color:#9ca3af;font-size:12px;margin:0 0 8px">Нет данных PM₂.₅</p>`}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${a}</p>
        </div>`,c=l.default.marker([e.latitude,e.longitude],{icon:o}).bindPopup(d);u&&c.on("click",()=>u(e)),t.addLayer(c)}t.addTo(e),x.current=t,!b.current&&w.length>0&&(e.fitBounds(l.default.latLngBounds(w.map(e=>[e.latitude,e.longitude])),{padding:[50,50]}),b.current=!0)},[w,p]),(0,r.useEffect)(()=>{if(!m.current)return;let e=m.current;if(h.current&&(e.removeLayer(h.current),h.current=null),"all"!==f&&"EcoIQ"!==f)return;let t=s.filter(e=>null!=e.latitude&&null!=e.longitude);if(!t.length)return;let r=l.default.layerGroup();for(let e of t){let t=function(e){let t=i(e),r=null!=e?e.toString():"?",n=r.length>=3?8:9;return l.default.divIcon({className:"",html:`<svg width="38" height="38" viewBox="0 0 38 38" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4))">
      <polygon points="19,2 36,34 2,34" fill="${t}" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
      <text
        x="19" y="26"
        text-anchor="middle"
        font-family="system-ui,-apple-system,sans-serif"
        font-weight="800"
        font-size="${n}"
        fill="white"
      >${r}</text>
    </svg>`,iconSize:[38,38],iconAnchor:[19,38],popupAnchor:[0,-38]})}(e.aqi),n=i(e.aqi),o=e.measured_at?new Date(e.measured_at).toLocaleString("ru-RU"):"—",a=`
        <div style="min-width:200px;font-family:system-ui">
          <div style="display:flex;align-items:center;gap:6px;margin:0 0 6px">
            <svg width="12" height="12" viewBox="0 0 32 32"><polygon points="16,2 30,28 2,28" fill="${n}"/></svg>
            <p style="font-size:13px;font-weight:700;margin:0;color:#111">${e.name??"EcoIQ станция"}</p>
          </div>
          <p style="font-size:10px;color:#6b7280;margin:0 0 8px">EcoIQ \xb7 ${e.is_high_precision?"высокоточная":"стандартная"} станция</p>
          ${null!=e.aqi?`
            <div style="margin:0 0 8px;padding:8px 10px;background:${n}18;border-left:3px solid ${n};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">AQI</p>
              <p style="margin:4px 0 0;font-size:22px;font-weight:800;color:${n}">${e.aqi}</p>
              ${null!=e.pm25_concentration?`<p style="margin:4px 0 0;font-size:11px;color:#6b7280">PM<sub>2.5</sub>: <strong style="color:${n}">${e.pm25_concentration} \xb5g/m\xb3</strong></p>`:""}
            </div>
          `:""}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${o}</p>
        </div>`,s=l.default.marker([e.latitude,e.longitude],{icon:t}).bindPopup(a);d&&s.on("click",()=>d(e)),s.addTo(r)}r.addTo(e),h.current=r},[s,d,f]),(0,r.useEffect)(()=>{if(!m.current)return;let e=m.current;v?(y.current||(y.current=l.default.tileLayer("https://tile.maps.yandex.net/tiles?l=trf&x={x}&y={y}&z={z}&scale=1&lang=ru_RU&apikey=4f3481cf-1f2e-4337-82e9-8774d62d703f",{opacity:.7,maxZoom:18,attribution:""})),y.current.addTo(e)):y.current&&e.removeLayer(y.current)},[v]),w.length)?(0,t.jsxs)("div",{className:"relative h-full w-full",children:[(0,t.jsx)("div",{ref:g,className:"h-full w-full rounded-xl"}),(0,t.jsxs)("button",{onClick:()=>$(e=>!e),title:v?"Скрыть пробки":"Показать пробки",className:`absolute right-3 top-3 z-[1000] flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${v?"border-orange-400 bg-orange-500 text-white":"border-border bg-background/90 text-foreground hover:bg-muted"}`,children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,t.jsx)("path",{d:"M8 6h8l2 6H6L8 6z"}),(0,t.jsx)("circle",{cx:"9",cy:"17",r:"2"}),(0,t.jsx)("circle",{cx:"15",cy:"17",r:"2"}),(0,t.jsx)("path",{d:"M3 12h18"})]}),"Пробки"]})]}):(0,t.jsx)("div",{className:"flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",children:"Нет данных сенсоров"})}e.s(["default",()=>s])},37154,e=>{e.n(e.i(95775))}]);