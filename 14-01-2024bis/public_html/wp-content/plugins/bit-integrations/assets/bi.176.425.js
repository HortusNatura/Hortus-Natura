var I=Object.defineProperty;var v=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(s,e,t)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,S=(s,e)=>{for(var t in e||(e={}))y.call(e,t)&&j(s,t,e[t]);if(v)for(var t of v(e))N.call(e,t)&&j(s,t,e[t]);return s};import{i as T,r as o,j as i}from"./main-577.js";import{e as w,_ as E,d as p}from"./bi.655.81.js";import{S as L}from"./bi.880.909.js";import{e as B}from"./bi.787.676.js";import{I as M}from"./bi.672.677.js";import P from"./bi.773.296.js";import{h as z,c as F}from"./bi.769.842.js";import{A as D}from"./bi.243.843.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function ee({formFields:s,setFlow:e,flow:t,allIntegURL:b}){const f=T(),[A,u]=o.useState(!1),[r,g]=o.useState({auth:!1,customFields:!1,bases:!1,tables:!1,airtableFields:!1}),[n,h]=o.useState(1),[C,m]=o.useState({show:!1}),[a,l]=o.useState({name:"Airtable",type:"Airtable",auth_token:"",field_map:[{formField:"",airtableFormField:""}],airtableFields:[],bases:[],selectedBase:"",selectedTable:"",actions:{}}),_=()=>{u(!0),B(t,e,b,a,f,"","",u).then(d=>{var x;d.success?(p.success((x=d.data)==null?void 0:x.msg),f(b)):p.error(d.data||d)})},k=c=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!F(a)){p.error("Please map mandatory airtableFields");return}a.field_map.length>0&&h(c)};return i.jsxs("div",{children:[i.jsx(w,{snack:C,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:n})}),i.jsx(P,{airtableConf:a,setAirtableConf:l,step:n,setStep:h,loading:r,setLoading:g,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(D,{formFields:s,handleInput:c=>z(c,a,l),airtableConf:a,setAirtableConf:l,loading:r,setLoading:g,setSnackbar:m}),r.airtableFields&&a.selectedTable&&i.jsxs("button",{onClick:()=>k(3),disabled:!F(a),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[E("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.airtableFields&&a.selectedTable&&i.jsx(M,{step:n,saveConfig:()=>_(),isLoading:A,dataConf:a,setDataConf:l,formFields:s})]})}export{ee as default};