var F=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var v=(s,t,e)=>t in s?F(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,S=(s,t)=>{for(var e in t||(t={}))N.call(t,e)&&v(s,e,t[e]);if(b)for(var e of b(t))w.call(t,e)&&v(s,e,t[e]);return s};import{i as E,r as o,j as a}from"./main-577.js";import{e as I,_ as L,d as m}from"./bi.655.81.js";import{S as T}from"./bi.880.909.js";import{e as K}from"./bi.787.676.js";import{I as P}from"./bi.672.677.js";import q from"./bi.793.283.js";import{c as z}from"./bi.285.818.js";import{M as A}from"./bi.520.819.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function tt({formFields:s,setFlow:t,flow:e,allIntegURL:d}){const p=E(),[y,f]=o.useState(!1),[u,g]=o.useState({auth:!1,customFields:!1,lists:!1}),[r,j]=o.useState(1),[M,c]=o.useState({show:!1}),k=[{key:"Email",label:"Email",required:!0}],[i,l]=o.useState({name:"Mailjet",type:"Mailjet",apiKey:"",secretKey:"",field_map:[{formField:"",mailjetFormField:""}],staticFields:k,lists:[],customFields:[],selectedLists:"",groups:[],actions:{}}),_=()=>{f(!0),K(e,t,d,i,p,"","",f).then(n=>{var h;n.success?(m.success((h=n.data)==null?void 0:h.msg),p(d)):m.error(n.data||n)})},C=x=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!z(i)){m.error("Please map mandatory fields");return}i.field_map.length>0&&j(x)};return a.jsxs("div",{children:[a.jsx(I,{snack:M,setSnackbar:c}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(T,{step:3,active:r})}),a.jsx(q,{mailjetConf:i,setMailjetConf:l,step:r,setStep:j,loading:u,setLoading:g,setSnackbar:c}),a.jsxs("div",{className:"btcd-stp-page",style:S({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{formFields:s,mailjetConf:i,setMailjetConf:l,loading:u,setLoading:g,setSnackbar:c}),a.jsxs("button",{onClick:()=>C(3),disabled:!(i!=null&&i.selectedLists),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(P,{step:r,saveConfig:()=>_(),isLoading:y,dataConf:i,setDataConf:l,formFields:s})]})}export{tt as default};
