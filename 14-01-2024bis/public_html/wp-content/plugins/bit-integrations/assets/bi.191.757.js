var y=Object.defineProperty;var k=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(a,t,r)=>t in a?y(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,g=(a,t)=>{for(var r in t||(t={}))D.call(t,r)&&_(a,r,t[r]);if(k)for(var r of k(t))F.call(t,r)&&_(a,r,t[r]);return a};import{_ as f,c as w,E as I,a9 as R}from"./bi.655.81.js";const v=(a,t,r,o,d,e,i,s,n)=>{let h=g({},t);if(i){const c=g({},s);c[a.target.name]="",n(g({},c))}switch(h[a.target.name]=a.target.value,a.target.name){case"spreadsheetId":h=S(h,o,r,d,e);break;case"worksheetName":h=$(h,o,r,d,e);break}r(g({},h))},S=(a,t,r,o,d)=>{var i,s,n,h,c,u,l,m,p;const e=I(a);return e.worksheetName="",e.headerRow="A1",e.field_map=[{formField:"",googleSheetField:""}],(s=(i=e==null?void 0:e.default)==null?void 0:i.worksheets)!=null&&s[a.spreadsheetId]?Object.keys((h=(n=e==null?void 0:e.default)==null?void 0:n.worksheets)==null?void 0:h[a.spreadsheetId]).length===1&&(e.worksheetName=(u=(c=e==null?void 0:e.default)==null?void 0:c.worksheets)==null?void 0:u[a.spreadsheetId][0].properties.title,(p=(m=(l=e==null?void 0:e.default)==null?void 0:l.worksheets)==null?void 0:m.headers)!=null&&p[e.worksheetName]||b(t,e,r,o,d)):W(t,e,r,o,d),e},$=(a,t,r,o,d)=>{var i,s,n;const e=g({},a);return e.headerRow="A1",e.field_map=[{formField:"",googleSheetField:""}],(n=(s=(i=e==null?void 0:e.default)==null?void 0:i.worksheets)==null?void 0:s.headers)!=null&&n[a.worksheetName]||b(t,e,r,o,d),e},z=(a,t,r,o,d)=>{o(!0);const e={formID:a,id:t.id,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,ownerEmail:t.ownerEmail};w(e,"gsheet_refresh_spreadsheets").then(i=>{if(i&&i.success){const s=g({},t);s.default||(s.default={}),i.data.spreadsheets&&(s.default.spreadsheets=i.data.spreadsheets),i.data.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),d({show:!0,msg:f("Keap refreshed","bit-integrations")}),r(g({},s))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?d({show:!0,msg:R(f("Keap refresh failed Cause: %s. please try again","bit-integrations"),i.data.data||i.data)}):d({show:!0,msg:f("Keap refresh failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},W=(a,t,r,o,d)=>{const{spreadsheetId:e}=t;if(!e)return;o(!0);const i={formID:a,spreadsheetId:e,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};w(i,"gsheet_refresh_worksheets").then(s=>{if(s&&s.success){const n=g({},t);s.data.worksheets&&(n.default.worksheets||(n.default.worksheets={}),n.default.worksheets[e]=s.data.worksheets),s.data.tokenDetails&&(n.tokenDetails=s.data.tokenDetails),d({show:!0,msg:f("Worksheets refreshed","bit-integrations")}),r(g({},n))}else d({show:!0,msg:f("Worksheets refresh failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},b=(a,t,r,o,d)=>{const{spreadsheetId:e,worksheetName:i,header:s,headerRow:n}=t;if(!e&&!i&&!s&&!n)return;o(!0);const h={formID:a,spreadsheetId:e,worksheetName:i,header:s,headerRow:n,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};w(h,"gsheet_refresh_worksheet_headers").then(c=>{var u;if(c&&c.success){const l=g({},t);((u=c.data.worksheet_headers)==null?void 0:u.length)>0?(l.default.headers||(l.default.headers={}),l.default.headers[e]||(l.default.headers[e]={}),l.default.headers[e][i]||(l.default.headers[e][i]={}),l.default.headers[e][i][n]=c.data.worksheet_headers,c.data.tokenDetails&&(l.tokenDetails=c.data.tokenDetails),d({show:!0,msg:f("Worksheet Headers refreshed","bit-integrations")})):d({show:!0,msg:f("No Worksheet headers found. Try changing the header row number or try again","bit-integrations")}),c.data.tokenDetails&&(l.tokenDetails=c.data.tokenDetails),r(g({},l))}else d({show:!0,msg:f("Worksheet Headers refresh failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},E=(a,t,r,o,d,e)=>{if(!a.clientId||!a.clientSecret){r({clientId:a.clientId?"":f("Client ID cann't be empty","bit-integrations"),clientSecret:a.clientSecret?"":f("Secret key cann't be empty","bit-integrations")});return}d(!0);const i=`https://accounts.infusionsoft.com/app/oauth/authorize?scope=full&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}&client_id=${a.clientId}`,s=window.open(i,"keap","width=400,height=609,toolbar=off"),n=setInterval(()=>{if(s.closed){clearInterval(n);let h={},c=!1;const u=localStorage.getItem("__keap");if(u&&(c=!0,h=JSON.parse(u),localStorage.removeItem("__keap")),!h.code||h.error||!h||!c){const l=h.error?`Cause: ${h.error}`:"";e({show:!0,msg:`${f("Authorization failed","bit-integrations")} ${l}. ${f("please try again","bit-integrations")}`}),d(!1)}else{const l=g({},a);l.accountServer=h["accounts-server"],N(h,l,t,o,d,e)}}},500)},N=(a,t,r,o,d,e)=>{const i=g({},a);i.clientId=t.clientId,i.clientSecret=t.clientSecret,i.redirectURI=`${btcbi.api.base}/redirect`,w(i,"keap_generate_token").then(s=>s).then(s=>{if(s&&s.success){const n=g({},t);n.tokenDetails=s.data,r(n),o(!0),e({show:!0,msg:f("Authorized Successfully","bit-integrations")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?e({show:!0,msg:`${f("Authorization failed Cause:","bit-integrations")}${s.data.data||s.data}. ${f("please try again","bit-integrations")}`}):e({show:!0,msg:f("Authorization failed. please try again","bit-integrations")});d(!1)})},H=a=>!((a.field_map?a.field_map.filter(r=>!r.formField&&!r.keapField):[]).length>0),P=a=>{const t=a==null?void 0:a.contactFields.filter(r=>r.required===!0);return t.length>0?t.map(r=>({formField:"",keapField:r.key})):[{formField:"",keapField:""}]};export{E as a,H as c,P as g,v as h,z as r};