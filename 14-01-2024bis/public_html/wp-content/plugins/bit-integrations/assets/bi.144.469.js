var w=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var v=(a,t,s)=>t in a?w(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,j=(a,t)=>{for(var s in t||(t={}))P.call(t,s)&&v(a,s,t[s]);if(k)for(var s of k(t))T.call(t,s)&&v(a,s,t[s]);return a};import{i as C,r as i,j as r}from"./main-577.js";import{e as L,_ as E,d as l}from"./bi.655.81.js";import{S as O}from"./bi.880.909.js";import{e as M}from"./bi.787.676.js";import{I as R}from"./bi.672.677.js";import A from"./bi.631.329.js";import{a as D,c as N}from"./bi.447.906.js";import{S as F}from"./bi.224.907.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";function $({formFields:a,setFlow:t,flow:s,allIntegURL:p}){const u=C(),[g,c]=i.useState(!1),[f,b]=i.useState({}),[o,y]=i.useState(1),[_,m]=i.useState({show:!1}),x=[{label:"Email Address",key:"email",required:!0},{label:"Last Name",key:"last_name",required:!1},{label:"Phone Number",key:"phone_number",required:!1},{label:"Company",key:"company",required:!1},{label:"Website",key:"website",required:!1},{label:"GDPR",key:"gdpr",required:!1},{label:"Tag Registration page URL",key:"ref_url",required:!1}],[e,d]=i.useState({name:"SystemIO",type:"SystemIO",api_key:"",field_map:D(x),actionName:"registerPeopletoWabinar",systemIOFields:x,actions:{}}),I=()=>{c(!0),M(s,t,p,e,u,"","",c).then(n=>{var h;n.success?(l.success((h=n.data)==null?void 0:h.msg),u(p)):l.error(n.data||n)})},q=S=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){l.error("Please map mandatory fields");return}if(!e.selectedTag){l.error("Please select a Tag");return}e.field_map.length>0&&y(S)};return r.jsxs("div",{children:[r.jsx(L,{snack:_,setSnackbar:m}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(O,{step:3,active:o})}),r.jsx(A,{systemIOConf:e,setSystemIOConf:d,step:o,setStep:y,loading:f,setLoading:b,setSnackbar:m}),r.jsxs("div",{className:"btcd-stp-page",style:j({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(F,{formFields:a,systemIOConf:e,setSystemIOConf:d,loading:f,setLoading:b,isLoading:g,setIsLoading:c,setSnackbar:m}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>q(3),disabled:!N(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[E("Next","bit-integrations")," "," ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(R,{step:o,saveConfig:()=>I(),isLoading:g,dataConf:e,setDataConf:d,formFields:a})]})}export{$ as default};
