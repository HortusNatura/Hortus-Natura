var y=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,w=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&b(s,t,e[t]);if(x)for(var t of x(e))N.call(e,t)&&b(s,t,e[t]);return s};import{i as H,r,j as o}from"./main-577.js";import{e as z,_ as E,d as h}from"./bi.655.81.js";import{S as T}from"./bi.880.909.js";import{e as W}from"./bi.787.676.js";import{I as F}from"./bi.672.677.js";import L from"./bi.609.297.js";import{s as M,c as v}from"./bi.663.844.js";import{Z as P}from"./bi.846.845.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function ee({formFields:s,setFlow:e,flow:t,allIntegURL:m}){const l=H(),[j,p]=r.useState(!1),[n,f]=r.useState({auth:!1,header:!1,workbooks:!1,worksheets:!1,workSheetHeaders:!1}),[i,S]=r.useState(1),[C,g]=r.useState({show:!1}),[a,d]=r.useState({name:"Zoho Sheet",type:"Zoho Sheet",dataCenter:"",clientId:"",clientSecret:"",field_map:[{formField:"",zohoSheetFormField:""}],workbooks:[],worksheets:[],workSheetHeaders:[],selectedWorkbook:"",selectedWorksheet:"",headerRow:1,actions:{}});r.useEffect(()=>{window.opener&&M("zohoSheet")},[]);const Z=()=>{p(!0),W(t,e,m,a,l,"","",p).then(c=>{var u;c.success?(h.success((u=c.data)==null?void 0:u.msg),l(m)):h.error(c.data||c)})},_=k=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!v(a)){h.error("Please map mandatory workSheetHeaders");return}a.field_map.length>0&&S(k)};return o.jsxs("div",{children:[o.jsx(z,{snack:C,setSnackbar:g}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(T,{step:3,active:i})}),o.jsx(L,{zohoSheetConf:a,setZohoSheetConf:d,step:i,setStep:S,loading:n,setLoading:f,setSnackbar:g}),o.jsxs("div",{className:"btcd-stp-page",style:w({},i===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(P,{formFields:s,zohoSheetConf:a,setZohoSheetConf:d,loading:n,setLoading:f}),n.workSheetHeaders&&a.selectedWorksheet&&o.jsxs("button",{onClick:()=>_(3),disabled:!v(a),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[E("Next","bit-integrations")," "," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),n.workSheetHeaders&&a.selectedWorksheet&&o.jsx(F,{step:i,saveConfig:()=>Z(),isLoading:j,dataConf:a,setDataConf:d,formFields:s})]})}export{ee as default};