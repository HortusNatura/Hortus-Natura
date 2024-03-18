var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))k.call(t,a)&&m(e,a,t[a]);return e};import{_ as l,c as w,a9 as y}from"./bi.655.81.js";const M=(e,t,a,c,s,o,n,i,h)=>{let r=d({},t);if(n){const g=d({},i);g[e.target.name]="",h(d({},g))}switch(r[e.target.name]=e.target.value,e.target.name){case"spreadsheetId":r=spreadSheetChange(r,c,a,s,o);break;case"worksheetName":r=worksheetChange(r,c,a,s,o);break}a(d({},r))},S=(e,t,a,c,s)=>{c(!0);const o={formID:e,clientId:t.clientId,accessToken:t.tokenDetails.access_token,clientSecret:t.clientSecret,refreshToken:t.tokenDetails.refresh_token,tokenDetails:t.tokenDetails};w(o,"zoom_fetch_all_meetings").then(n=>{if(n&&n.success){const i=d({},t);i.default||(i.default={}),n.data.allMeeting&&(i.default.allMeeting=n.data.allMeeting),s({show:!0,msg:l("Meeting list refreshed","bit-integrations")}),a(d({},i))}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?s({show:!0,msg:y(l("All Meeting list refresh failed Cause: %s. please try again","bit-integrations"),n.data.data||n.data)}):s({show:!0,msg:l("All Meeting list failed. please try again","bit-integrations")});c(!1)}).catch(()=>c(!1))},z=(e,t,a,c,s,o)=>{if(!e.clientId||!e.clientSecret){a({clientId:e.clientId?"":l("Client ID cann't be empty","bit-integrations"),clientSecret:e.clientSecret?"":l("Secret key cann't be empty","bit-integrations")});return}s(!0);const n=`https://zoom.us/oauth/authorize?response_type=code&client_id=${e.clientId}&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}`,i=window.open(n,"zoom","width=400,height=609,toolbar=off"),h=setInterval(()=>{if(i.closed){clearInterval(h);let r={},g=!1;const f=localStorage.getItem("__zoom");if(f&&(g=!0,r=JSON.parse(f),localStorage.removeItem("__zoom")),!r.code||r.error||!r||!g){const p=r.error?`Cause: ${r.error}`:"";o({show:!0,msg:`${l("Authorization failed","bit-integrations")} ${p}. ${l("please try again","bit-integrations")}`}),s(!1)}else{const p=d({},e);p.accountServer=r["accounts-server"],F(r,p,t,c,s,o)}}},500)},F=(e,t,a,c,s,o)=>{const n=d({},e);n.clientId=t.clientId,n.clientSecret=t.clientSecret,n.redirectURI=`${btcbi.api.base}/redirect`,w(n,"zoom_generate_token").then(i=>i).then(i=>{if(i&&i.success){const h=d({},t);h.tokenDetails=i.data,a(h),c(!0),o({show:!0,msg:l("Authorized Successfully","bit-integrations")})}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?o({show:!0,msg:`${l("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${l("please try again","bit-integrations")}`}):o({show:!0,msg:l("Authorization failed. please try again","bit-integrations")});s(!1)})},A=e=>!((e.field_map?e.field_map.filter(a=>!a.formField&&!a.zoomConf):[]).length>0),R=e=>{const t=e==null?void 0:e.zoomFields.filter(a=>a.required===!0);return t.length>0?t.map(a=>({formField:"",zoomField:a.key})):[{formField:"",zoomField:""}]};export{z as a,A as c,R as g,M as h,S as z};