(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95775,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(32322);e.i(70733);let o=[43.238949,76.889709];function l(e){return null==e?"#9ca3af":e<=15?"#22c55e":e<=35?"#eab308":e<=55?"#f97316":e<=150?"#ef4444":e<=250?"#a855f7":"#7f1d1d"}function i({sensors:e}){let i=(0,r.useRef)(null),a=(0,r.useRef)(null),s=(0,r.useRef)(null),u=(0,r.useRef)(!1),d=e.filter(e=>null!=e.latitude&&null!=e.longitude);return((0,r.useEffect)(()=>{if(!i.current||a.current)return;let e=n.default.map(i.current,{crs:n.default.CRS.EPSG3395,center:o,zoom:11,preferCanvas:!0,zoomAnimation:!0});return n.default.tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU",{attribution:'&copy; <a href="https://yandex.com/maps/">Yandex</a>',maxZoom:18,minZoom:0}).addTo(e),a.current=e,()=>{a.current?.remove(),a.current=null}},[]),(0,r.useEffect)(()=>{if(!a.current)return;let e=a.current;if(s.current&&(e.removeLayer(s.current),s.current=null),!d.length)return;let t=n.default.markerClusterGroup({disableClusteringAtZoom:15,chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,maxClusterRadius:50,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,iconCreateFunction(e){var t,r;let o,i,a,s,u=e.getAllChildMarkers(),d=0,f=0;for(let e of u){let t=e.options.pm25;null!=t&&(d+=t,f++)}return t=f>0?d/f:null,r=u.length,o=l(t),i=r>=50?52:r>=20?44:36,a=null!=t?Math.round(t).toString():r.toString(),s=null!=t?`<div style="font-size:9px;opacity:.85;">${r}</div>`:"",n.default.divIcon({className:"",html:`<div style="
      background:${o};
      color:#fff;
      font-family:system-ui,-apple-system,sans-serif;
      font-weight:800;
      font-size:${i>=52?16:13}px;
      width:${i}px;
      height:${i}px;
      border-radius:${i/2}px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      box-shadow:0 3px 10px rgba(0,0,0,0.35);
      border:2px solid rgba(255,255,255,0.4);
      line-height:1.1;
    ">${a}${s}</div>`,iconSize:[i,i],iconAnchor:[i/2,i/2]})}});for(let e of d){let r=e.value,o=function(e){let t=l(e),r=null!=e?Math.round(e).toString():"?",o=r.length<=2?34:40;return n.default.divIcon({className:"",html:`<div style="
      background:${t};
      color:#fff;
      font-family:system-ui,-apple-system,sans-serif;
      font-weight:800;
      font-size:12px;
      line-height:1;
      width:${o}px;
      height:24px;
      border-radius:7px;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,0.35);
      border:2px solid rgba(255,255,255,0.45);
    ">${r}</div>`,iconSize:[o,24],iconAnchor:[o/2,12],popupAnchor:[0,-16]})}(r),i=l(r),a=e.measured_at?new Date(e.measured_at).toLocaleString("ru-RU"):"—",s=`
        <div style="min-width:200px;font-family:system-ui">
          <p style="font-size:13px;font-weight:700;margin:0 0 8px;color:#111">${e.sensor_name??"Сенсор"}</p>
          ${e.source?`<p style="font-size:11px;color:#6b7280;margin:0 0 8px">${e.source}</p>`:""}
          ${null!=r?`
            <div style="margin:0 0 8px;padding:8px 10px;background:${i}18;border-left:3px solid ${i};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> \xb7 ${null==r?"Нет данных":r<=15?"Хорошо":r<=35?"Умеренно":r<=55?"Чувствительным":r<=150?"Вредно":r<=250?"Очень вредно":"Опасно"}</p>
              <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:${i}">${r.toFixed(1)} <span style="font-size:11px;font-weight:500">\xb5g/m\xb3</span></p>
            </div>
          `:`<p style="color:#9ca3af;font-size:12px;margin:0 0 8px">Нет данных PM₂.₅</p>`}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${a}</p>
        </div>`,u=n.default.marker([e.latitude,e.longitude],{icon:o,pm25:r}).bindPopup(s);t.addLayer(u)}t.on("clustermouseover",e=>{let t=e.layer.getAllChildMarkers(),r=0,n=0;for(let e of t){let t=e.options.pm25;null!=t&&(r+=t,n++)}let o=n>0?(r/n).toFixed(1):"—";e.layer.bindTooltip(`<div style="font-size:12px;font-weight:600">${t.length} сенсоров \xb7 PM₂.₅ ${o}</div>`,{permanent:!1,direction:"top",className:"cluster-tooltip",offset:[0,-8]}).openTooltip()}),t.on("clustermouseout",e=>e.layer.closeTooltip()),t.addTo(e),s.current=t,!u.current&&d.length>0&&(e.fitBounds(n.default.latLngBounds(d.map(e=>[e.latitude,e.longitude])),{padding:[50,50]}),u.current=!0)},[d]),d.length)?(0,t.jsx)("div",{ref:i,className:"h-full w-full rounded-xl"}):(0,t.jsx)("div",{className:"flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",children:"Нет данных сенсоров"})}e.s(["default",()=>i])},37154,e=>{e.n(e.i(95775))}]);