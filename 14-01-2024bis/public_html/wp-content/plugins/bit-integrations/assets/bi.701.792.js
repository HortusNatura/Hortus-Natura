var y=Object.defineProperty,g=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))b.call(s,t)&&p(e,t,s[t]);if(m)for(var t of m(s))K.call(s,t)&&p(e,t,s[t]);return e},o=(e,s)=>g(e,_(s));import{_ as f,c as F,d as n}from"./bi.655.81.js";import{e as A,s as P}from"./bi.787.676.js";const v=(e,s,t)=>{const r=u({},s),{name:a}=e.target;e.target.value!==""?r[a]=e.target.value:delete r[a],t(u({},r))},x=(e,s,t,r,a,i)=>{if(!e.authKey){t({authKey:e.authKey?"":f("API key can't be empty","bit-integrations")});return}t({}),i(o(u({},a),{auth:!0}));const d={authKey:e.authKey};F(d,"klaviyo_handle_authorize").then(l=>{if(l&&l.success){const c=u({},e);l.data&&(c.default||(c.default={}),c.default.lists=l.data),s(c),r(!0),i(o(u({},a),{auth:!1})),n.success(f("Authorized successfully","bit-integrations"));return}i(o(u({},a),{auth:!1})),n.error(f("Authorized failed","bit-integrations"))})},I=(e,s,t,r)=>{r(o(u({},t),{list:!0}));const a={authKey:e.authKey};F(a,"klaviyo_handle_authorize").then(i=>{if(i&&i.success){const d=u({},e);i.data&&(d.default||(d.default={}),d.default.lists=i.data),s(d),r(o(u({},t),{list:!1})),n.success(f("List refresh successfully","bit-integrations"));return}r(o(u({},t),{list:!1})),n.error(f("List refresh failed","bit-integrations"))})},M=e=>{const s=e==null?void 0:e.klaviyoFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",klaviyoFormField:t.key})):[{formField:"",klaviyoFormField:""}]},h=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.klaviyoFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),T=(e,s,t)=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!h(e)){n.error("Please map mandatory fields");return}e.field_map.length>0&&s(t)},k=(e,s,t,r,a,i)=>{i(!0),A(e,s,t,r,a,"","",i).then(l=>{var c;l.success?(n.success((c=l.data)==null?void 0:c.msg),a(t)):n.error(l.data||l)})},B=(e,s,t,r,a,i)=>{if(!h(t)){n.error("Please map mandatory fields");return}if(h(t)==="required"){n.error("You must select email or phone in klaviyo fields");return}P({flow:e,allIntegURL:s,conf:t,navigate:r,edit:a,setIsLoading:i})};export{I as a,k as b,v as e,M as g,x as h,T as n,B as s};
