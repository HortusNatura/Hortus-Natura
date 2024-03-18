var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))I.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))b.call(t,a)&&m(e,a,t[a]);return e};import{_ as r,c as _,a9 as k}from"./bi.655.81.js";const M=(e,t,a,d,o,c,n,i,g)=>{let s=l({},t);if(n){const h=l({},i);h[e.target.name]="",g(l({},h))}s[e.target.name]=e.target.value,a(l({},s))},S=(e,t,a,d,o)=>{d(!0);const c={formID:e,clientId:t.clientId,accessToken:t.tokenDetails.access_token,clientSecret:t.clientSecret,refreshToken:t.tokenDetails.refresh_token,tokenDetails:t.tokenDetails};_(c,"zoom_webinar_fetch_all_webinar").then(n=>{if(n&&n.success){const i=l({},t);i.default||(i.default={}),n.data.allMeeting&&(i.default.allMeeting=n.data.allMeeting),o({show:!0,msg:r("Meeting list refreshed","bit-integrations")}),a(l({},i))}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?o({show:!0,msg:k(r("All Meeting list refresh failed Cause: %s. please try again","bit-integrations"),n.data.data||n.data)}):o({show:!0,msg:r("All Meeting list failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},z=(e,t,a,d,o,c)=>{if(!e.clientId||!e.clientSecret){a({clientId:e.clientId?"":r("Client ID cann't be empty","bit-integrations"),clientSecret:e.clientSecret?"":r("Secret key cann't be empty","bit-integrations")});return}o(!0);const n=`https://zoom.us/oauth/authorize?response_type=code&client_id=${e.clientId}&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}`,i=window.open(n,"zoom","width=400,height=609,toolbar=off"),g=setInterval(()=>{if(i.closed){clearInterval(g);let s={},h=!1;const u=localStorage.getItem("__zoom");if(u&&(h=!0,s=JSON.parse(u),localStorage.removeItem("__zoom")),!s.code||s.error||!s||!h){const f=s.error?`Cause: ${s.error}`:"";c({show:!0,msg:`${r("Authorization failed","bit-integrations")} ${f}. ${r("please try again","bit-integrations")}`}),o(!1)}else{const f=l({},e);f.accountServer=s["accounts-server"],y(s,f,t,d,o,c)}}},500)},y=(e,t,a,d,o,c)=>{const n=l({},e);n.clientId=t.clientId,n.clientSecret=t.clientSecret,n.redirectURI=`${btcbi.api.base}/redirect`,_(n,"zoom_webinar_generate_token").then(i=>i).then(i=>{if(i&&i.success){const g=l({},t);g.tokenDetails=i.data,a(g),d(!0),c({show:!0,msg:r("Authorized Successfully","bit-integrations")})}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?c({show:!0,msg:`${r("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${r("please try again","bit-integrations")}`}):c({show:!0,msg:r("Authorization failed. please try again","bit-integrations")});o(!1)})},A=e=>!((e.field_map?e.field_map.filter(a=>!a.formField&&!a.zoomWebinarConf):[]).length>0),R=e=>{const t=e==null?void 0:e.zoomWebinarFields.filter(a=>a.required===!0);return t.length>0?t.map(a=>({formField:"",zoomField:a.key})):[{formField:"",zoomField:""}]};export{z as a,A as c,R as g,M as h,S as z};
