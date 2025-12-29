(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95775,e=>{"use strict";var t=e.i(43476),r=e.i(71645),o=e.i(32322);e.i(70733);let n=[43.238949,76.889709];delete o.default.Icon.Default.prototype._getIconUrl,o.default.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"});let i=e=>null==e?"gray":e<=15?"good":e<=35?"moderate":e<=55?"sensitive":e<=150?"unhealthy":e<=250?"very-unhealthy":"hazardous";function l({sensors:e}){let l=(0,r.useRef)(null),a=(0,r.useRef)(null),s=(0,r.useRef)(null),d=(0,r.useRef)(!1),u=e.filter(e=>null!==e.latitude&&void 0!==e.latitude&&null!==e.longitude&&void 0!==e.longitude);return((0,r.useEffect)(()=>{if(!l.current||a.current)return;let e=o.default.map(l.current,{crs:o.default.CRS.EPSG3395,center:n,zoom:11,preferCanvas:!0,zoomAnimation:!0});return o.default.tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU",{attribution:'&copy; <a href="https://yandex.com/maps/">Yandex</a>',maxZoom:18,minZoom:0}).addTo(e),a.current=e,()=>{a.current&&(a.current.remove(),a.current=null)}},[]),(0,r.useEffect)(()=>{if(!a.current)return;let e=a.current;if(s.current&&(e.removeLayer(s.current),s.current=null),0===u.length)return;let t=o.default.markerClusterGroup({disableClusteringAtZoom:16,chunkedLoading:!0,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,maxClusterRadius:60,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,iconCreateFunction:function(e){let t=e.getAllChildMarkers(),r=t.length,n={},l=0,a=0;t.forEach(e=>{let t=e.options.sensorData,r=t?.district||"Unknown";n[r]=(n[r]||0)+1,t?.latest_measurement?.pm25!=null&&(l+=t.latest_measurement.pm25,a++)});let s=0;for(let[e,t]of Object.entries(n))t>s&&(s=t);let d=i(a>0?l/a:void 0),u="small";r>=50?u="large":r>=20&&(u="medium");let p={small:"44px",medium:"54px",large:"64px"};return o.default.divIcon({html:`
            <div style="
              background: #6b7280;
              width: ${p[u]};
              height: ${p[u]};
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 4px solid ${{good:"#1BA97C",moderate:"#f59e0b",sensitive:"#f97316",unhealthy:"#ef4444","very-unhealthy":"#a855f7",hazardous:"#581c87",gray:"#ffffff"}[d]||"#ffffff"};
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              font-weight: bold;
              color: white;
              font-size: ${"large"===u?"20px":"medium"===u?"17px":"15px"};
            ">
              ${r}
            </div>
          `,className:"custom-cluster-icon",iconSize:o.default.point(parseInt(p[u]),parseInt(p[u]))})}});if(u.forEach(e=>{let r,n,l,a,s,d=(r=e.latest_measurement,e.district,n="#6b7280",l=(e=>{if(!e)return"?";let t={AirGradient:"AG",AirKaz:"AK","Citizen Science project sensor.community":"CS","Clarity Node":"CN",IQAir:"IQ",OpenAQ:"OA",PurpleAir:"PA","Reference Site":"RS"};if(t[e])return t[e];for(let[r,o]of Object.entries(t))if(e.includes(r)||r.includes(e))return o;let r=e.split(/[\s-]+/).filter(e=>e.length>0);return 0===r.length?"?":1===r.length?r[0].substring(0,2).toUpperCase():r.slice(0,3).map(e=>e[0]).join("").toUpperCase()})(e.district),a=i(r?.pm25),s=l.length<=2?"12px":"10px",o.default.divIcon({className:"custom-sensor-marker-icon",html:`
      <div style="
        background-color: ${n};
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid ${{good:"#1BA97C",moderate:"#f59e0b",sensitive:"#f97316",unhealthy:"#ef4444","very-unhealthy":"#a855f7",hazardous:"#581c87",gray:"#ffffff"}[a]||"#ffffff"};
        box-shadow: 0 3px 10px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: ${s};
          font-weight: bold;
          line-height: 1;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          letter-spacing: -0.5px;
        ">${l}</div>
      </div>
    `,iconSize:[36,36],iconAnchor:[18,36],popupAnchor:[0,-36]})),u=e.latest_measurement,p=(e.district,"#6b7280"),f={good:"#1BA97C",moderate:"#f59e0b",sensitive:"#f97316",unhealthy:"#ef4444","very-unhealthy":"#a855f7",hazardous:"#581c87",gray:"#6b7280"}[i(u?.pm25)]||"#6b7280",c=o.default.marker([e.latitude,e.longitude],{icon:d,sensorData:e}).bindPopup(`
        <div style="min-width: 220px; font-family: system-ui;">
          <h3 style="font-size: 14px; font-weight: bold; margin: 0 0 8px 0; color: #111827;">
            ${e.name||"Станция"}
          </h3>
          ${e.district?`
            <div style="margin: 0 0 10px 0; padding: 6px 10px; background: ${p}15; border-left: 3px solid ${p}; border-radius: 4px;">
              <p style="margin: 0; font-size: 11px; color: #6b7280; font-weight: 500;">Поставщик</p>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: ${p}; font-weight: bold;">${e.district}</p>
            </div>
          `:""}
          ${u&&null!=u.pm25?`
            <div style="margin: 0 0 8px 0; padding: 6px 10px; background: ${f}10; border-left: 3px solid ${f}; border-radius: 4px;">
              <p style="margin: 0; font-size: 11px; color: #6b7280; font-weight: 500;">PM2.5</p>
              <p style="margin: 2px 0 0 0; font-size: 16px; color: ${f}; font-weight: bold;">${u.pm25.toFixed(1)}</p>
            </div>
          `:`
            <p style="margin: 0 0 6px 0; color: #9ca3af; font-size: 12px;">Нет данных PM2.5</p>
          `}
          ${u&&null!=u.no2?`
            <p style="margin: 0 0 6px 0; font-size: 13px; color: #374151;">
              <strong>NO2:</strong> <span style="font-weight: 600;">${u.no2.toFixed(1)}</span>
            </p>
          `:""}
          ${u&&u.datetime?`
            <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 11px; padding-top: 6px; border-top: 1px solid #e5e7eb;">
              Обновлено: ${new Date(u.datetime).toLocaleString("ru-RU")}
            </p>
          `:""}
        </div>
      `);t.addLayer(c)}),t.on("clustermouseover",function(e){let t=e.layer,r=t.getAllChildMarkers(),o=0,n=0;r.forEach(e=>{let t=e.options.sensorData;t?.latest_measurement?.pm25!=null&&(o+=t.latest_measurement.pm25,n++)});let i=n>0?(o/n).toFixed(1):"—",l=`
        <div style="padding: 8px; background: white; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
          <p style="margin: 0; font-size: 12px; font-weight: bold;">Кластер: ${r.length} сенсоров</p>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #6b7280;">Средний PM2.5: ${i}</p>
        </div>
      `;t.bindTooltip(l,{permanent:!1,direction:"top",className:"cluster-tooltip",offset:[0,-10]}).openTooltip()}),t.on("clustermouseout",function(e){e.layer.closeTooltip()}),t.addTo(e),s.current=t,u.length>0&&!d.current){let t=o.default.latLngBounds(u.map(e=>[e.latitude,e.longitude]));e.fitBounds(t,{padding:[50,50]}),d.current=!0}},[u]),0===u.length)?(0,t.jsx)("div",{className:"flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",children:"Нет данных по сенсорам для отображения"}):(0,t.jsx)("div",{ref:l,className:"h-full w-full rounded-xl"})}e.s(["default",()=>l])},37154,e=>{e.n(e.i(95775))}]);