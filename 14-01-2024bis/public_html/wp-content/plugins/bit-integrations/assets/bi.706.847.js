var k=Object.defineProperty;var D=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var q=(e,l,s)=>l in e?k(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,m=(e,l)=>{for(var s in l||(l={}))V.call(l,s)&&q(e,s,l[s]);if(D)for(var s of D(l))P.call(l,s)&&q(e,s,l[s]);return e};import{_ as c,c as y,d as A,a9 as v}from"./bi.655.81.js";const j=(e,l,s,i,n,a,t,d,o,f)=>{let u=m({},s);if(l===0){if(d){const _=m({},o);_[e.target.name]="",f(m({},_))}e.target.value!==""?e.target.name!=="module"?u.moduleData[e.target.name]=parseInt(e.target.value):(u.moduleData={},u.moduleData[e.target.name]=e.target.value):delete u.moduleData[e.target.name]}else u.relatedlists||(u.relatedlists=[]),e.target.value!==""?e.target.name!=="module"?u.relatedlists[l-1][e.target.name]=parseInt(e.target.value):(u.relatedlists[l-1].moduleData={},u.relatedlists[l-1][e.target.name]=e.target.value):delete u.relatedlists[l-1][e.target.name];switch(e.target.name){case"module":u=R(l,n,u,i,a,t);break;case"contact_view_id":u=x(l,n,u,i,a,t);break;case"account_view_id":u=z(l,n,u,i,a,t);break}i(m({},u))},E=(e,l)=>{l(e)},R=(e,l,s,i,n,a)=>{var o,f,u,_,r,F,p,g;const t=m({},s);t.relatedlists[e-1]||(t.relatedlists[e-1]={});const d=e===0?t.moduleData.module:t.relatedlists[e-1].module;return e===0?(t.actions={},t.field_map=[{formField:"",freshSalesFormField:""}],t.relatedlists=[],["Contact"].includes(d)&&!t.default.views&&M(t,i,n,a),["Deal"].includes(d)&&!t.default.views&&B(t,i,n,a),!((f=(o=t.default.modules)==null?void 0:o[d])!=null&&f.fields)&&d!==""&&d!==void 0?setTimeout(()=>{h(d,t,i,e)},1e3):t.field_map=(_=(u=t.default.modules)==null?void 0:u[d])!=null&&_.requiredFields?w(e,t):[{formField:"",freshSalesFormField:""}]):(t.relatedlists[e-1].actions={},t.relatedlists[e-1].field_map=[{formField:"",freshSalesFormField:""}],!((F=(r=t.default.modules)==null?void 0:r[d])!=null&&F.fields)&&d!==""&&d!==void 0?setTimeout(()=>{h(d,t,i,e)},1e3):t.relatedlists[e-1].field_map=(g=(p=t.default.modules)==null?void 0:p[d])!=null&&g.requiredFields?w(e,t):[{formField:"",freshSalesFormField:""}]),t},z=(e,l,s,i,n,a)=>{var o,f,u,_,r,F,p,g;const t=m({},s);t.relatedlists[e-1]||(t.relatedlists[e-1]={});const d=e===0?t.moduleData.module:t.relatedlists[e-1].module;return e===0?(t.actions={},t.field_map=[{formField:"",freshSalesFormField:""}],t.relatedlists=[],["Deal","Contact"].includes(d)&&(K(t,i,n,a),!((f=(o=t.default.modules)==null?void 0:o[d])!=null&&f.fields)&&d!==""&&d!==void 0?setTimeout(()=>{h(d,t,i,e)},1e3):t.field_map=(_=(u=t.default.modules)==null?void 0:u[d])!=null&&_.requiredFields?w(e,t):[{formField:"",freshSalesFormField:""}])):(t.relatedlists[e-1].actions={},t.relatedlists[e-1].field_map=[{formField:"",freshSalesFormField:""}],!((F=(r=t.default.modules)==null?void 0:r[d])!=null&&F.fields)&&d!==""&&d!==void 0?setTimeout(()=>{h(d,t,i,e)},1e3):t.relatedlists[e-1].field_map=(g=(p=t.default.modules)==null?void 0:p[d])!=null&&g.requiredFields?w(e,t):[{formField:"",freshSalesFormField:""}]),t},x=(e,l,s,i,n,a)=>{var o,f,u,_,r,F,p,g;const t=m({},s);t.relatedlists[e-1]||(t.relatedlists[e-1]={});const d=e===0?t.moduleData.module:t.relatedlists[e-1].module;return e===0?(t.actions={},t.field_map=[{formField:"",freshSalesFormField:""}],t.relatedlists=[],["Deal"].includes(d)&&(!t.default.contacts&&N(t,i,n,a),!((f=(o=t.default.modules)==null?void 0:o[d])!=null&&f.fields)&&d!==""&&d!==void 0?setTimeout(()=>{h(d,t,i,e)},1e3):t.field_map=(_=(u=t.default.modules)==null?void 0:u[d])!=null&&_.requiredFields?w(e,t):[{formField:"",freshSalesFormField:""}])):(t.relatedlists[e-1].actions={},t.relatedlists[e-1].field_map=[{formField:"",freshSalesFormField:""}],!((F=(r=t.default.modules)==null?void 0:r[d])!=null&&F.fields)&&d!==""&&d!==void 0?setTimeout(()=>{h(d,t,i,e)},1e3):t.relatedlists[e-1].field_map=(g=(p=t.default.modules)==null?void 0:p[d])!=null&&g.requiredFields?w(e,t):[{formField:"",freshSalesFormField:""}]),t},h=(e,l,s,i)=>{const n={api_key:l.api_key,bundle_alias:l.bundle_alias,module:e};y(n,"FreshSales_refresh_fields").then(a=>{var t,d,o,f;if(a&&a.success){const u=m({},l);u.default.modules[e].fields||(u.default.modules[e].fields={}),a.data&&(u.default.modules[e].fields=a.data,i===0?u.field_map=(d=(t=u.default.modules)==null?void 0:t[e])!=null&&d.requiredFields?w(i,u):[{formField:"",freshSalesFormField:""}]:u.relatedlists[i-1].field_map=(f=(o=u.default.modules)==null?void 0:o[e])!=null&&f.requiredFields?w(i,u):[{formField:"",freshSalesFormField:""}]),s(m({},u))}})},M=(e,l,s,i)=>{s(!0);const n={api_key:e.api_key,bundle_alias:e.bundle_alias,module:"filters",type:"sales_accounts"};y(n,"FreshSales_fetch_meta_data").then(a=>{if(a&&a.success){const t=m({},e);t.default.accountViews||(t.default.accountViews={}),a.data&&(t.default.accountViews=a.data),l(m({},t)),i({show:!0,msg:c("Account views refreshed","bit-integrations")})}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?i({show:!0,msg:v(c("Account views refresh failed Cause: %s. please try again","bit-integrations"),a.data.data||a.data)}):i({show:!0,msg:c("Account views refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},B=(e,l,s,i)=>{s(!0);const n={api_key:e.api_key,bundle_alias:e.bundle_alias,module:"filters",type:"contacts"};y(n,"FreshSales_fetch_meta_data").then(a=>{if(a&&a.success){const t=m({},e);t.default.contactViews||(t.default.contactViews={}),a.data&&(t.default.contactViews=a.data),l(m({},t)),i({show:!0,msg:c("Contact views refreshed","bit-integrations")})}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?i({show:!0,msg:v(c("Contact views refresh failed Cause: %s. please try again","bit-integrations"),a.data.data||a.data)}):i({show:!0,msg:c("Contact views refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},K=(e,l,s,i)=>{s(!0);const n={api_key:e.api_key,bundle_alias:e.bundle_alias,account_view_id:e.moduleData.account_view_id,contact_view_id:e.moduleData.contact_view_id,module:"sales_accounts"};y(n,"FreshSales_fetch_meta_data").then(a=>{if(a&&a.success){const t=m({},e);t.default.accounts||(t.default.accounts={}),a.data&&(t.default.accounts=a.data),l(m({},t)),i({show:!0,msg:c("Accounts refreshed","bit-integrations")})}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?i({show:!0,msg:v(c("Accounts refresh failed Cause: %s. please try again","bit-integrations"),a.data.data||a.data)}):i({show:!0,msg:c("Accounts refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},N=(e,l,s,i)=>{s(!0);const n={api_key:e.api_key,bundle_alias:e.bundle_alias,contact_view_id:e.moduleData.contact_view_id,account_view_id:e.moduleData.account_view_id,module:"contacts"};y(n,"FreshSales_fetch_meta_data").then(a=>{if(a&&a.success){const t=m({},e);t.default.contacts||(t.default.contacts={}),a.data&&(t.default.contacts=a.data),l(m({},t)),i({show:!0,msg:c("Contacts refreshed","bit-integrations")})}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?i({show:!0,msg:v(c("Contacts refresh failed Cause: %s. please try again","bit-integrations"),a.data.data||a.data)}):i({show:!0,msg:c("Contacts refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},w=(e,l)=>{var n,a,t,d;const s=e===0?l.moduleData.module:l.relatedlists[e-1].module,i=(d=(t=(a=(n=l==null?void 0:l.default)==null?void 0:n.modules)==null?void 0:a[s])==null?void 0:t.fields)==null?void 0:d.filter(o=>o.required===!0);return(i==null?void 0:i.length)>0?i.map(o=>({formField:"",freshSalesFormField:o.key})):[{formField:"",freshSalesFormField:""}]},G=e=>{const l=e!=null&&e.field_map?e.field_map.filter(i=>{var n,a,t,d;return!i.formField&&i.freshSalesFormField&&((d=(t=(a=(n=e==null?void 0:e.default)==null?void 0:n.modules)==null?void 0:a[e.moduleData.module])==null?void 0:t.requiredFields)==null?void 0:d.indexOf(i.freshSalesFormField))!==-1}):[],s=e.relatedlists.map(i=>i.field_map.filter(n=>!n.formField&&n.freshSalesFormField));return!(l.length>0||s.some(i=>i.length))},H=e=>{var l,s,i,n,a;return!(((l=e.moduleData)==null?void 0:l.module)!==""&&((n=(i=e.default.modules)==null?void 0:i[(s=e==null?void 0:e.moduleData)==null?void 0:s.module])!=null&&n.required)&&(["Leads","Deal","Activities","Notes"].includes(e.moduleData.module)&&e.moduleData.account_id===void 0&&((a=e.moduleData)==null?void 0:a.contact_id)===void 0||e.moduleData.module==="Contacts"&&e.moduleData.account_id===void 0))},J=(e,l,s,i)=>{if(!e.bundle_alias||!e.api_key){l({bundle_alias:e.bundle_alias?"":c("Bundle Alias (Account URL) can't be empty","bit-integrations"),api_key:e.api_key?"":c("Api Key can't be empty","bit-integrations")});return}l({}),i(!0);const n={api_key:e.api_key,bundle_alias:e.bundle_alias,module:"filters"};y(n,"FreshSales_fetch_meta_data").then(a=>{if(a&&a.success){s(!0),i(!1),A.success(c("Authorized successfully","bit-integrations"));return}i(!1),A.error(c("Authorized failed","bit-integrations"))})};export{H as a,E as b,G as c,M as d,B as e,N as f,J as g,j as h,K as r};
