var y=Object.defineProperty;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(a,e,t)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,c=(a,e)=>{for(var t in e||(e={}))x.call(e,t)&&p(a,t,e[t]);if(f)for(var t of f(e))h.call(e,t)&&p(a,t,e[t]);return a};import{i as j,r,j as i}from"./main-577.js";import{_ as k}from"./bi.655.81.js";import{S as N}from"./bi.880.909.js";import{I as _}from"./bi.672.677.js";import K from"./bi.112.270.js";import{n as S,b as C}from"./bi.701.792.js";import{K as q}from"./bi.802.793.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.787.676.js";import"./bi.454.794.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function M({formFields:a,setFlow:e,flow:t,allIntegURL:u}){const b=j(),[v,g]=r.useState(!1),[n,m]=r.useState({list:!1,field:!1,auth:!1}),[o,d]=r.useState(1),[s,l]=r.useState({name:"Klaviyo",type:"Klaviyo",authKey:"",field_map:[{formField:"",klaviyoFormField:""}],klaviyoFields:[{key:"email",label:"Email",required:!0},{key:"first_name",label:"First Name",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"title",label:"Title",required:!1},{key:"organization",label:"Organization",required:!1},{key:"phone_number",label:"Phone Number",required:!1}],listId:"",actions:{}});return i.jsxs("div",{children:[i.jsx("div",{className:"txt-center mt-2",children:i.jsx(N,{step:3,active:o})}),i.jsx(K,{klaviyoConf:s,setKlaviyoConf:l,loading:n,setLoading:m,step:o,setStep:d}),i.jsxs("div",{className:"btcd-stp-page",style:c({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(q,{formFields:a,klaviyoConf:s,setKlaviyoConf:l,loading:n,setLoading:m}),i.jsxs("button",{onClick:()=>S(s,d,3),disabled:!s.listId||s.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[k("Next","bit-integrations")," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(_,{step:o,saveConfig:()=>C(t,e,u,s,b,g),isLoading:v,dataConf:s,setDataConf:l,formFields:a})]})}export{M as default};
