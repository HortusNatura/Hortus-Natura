var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var x=(s,a,t)=>a in s?w(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,v=(s,a)=>{for(var t in a||(a={}))F.call(a,t)&&x(s,t,a[t]);if(y)for(var t of y(a))E.call(a,t)&&x(s,t,a[t]);return s};import{i as z,r,j as i}from"./main-577.js";import{e as A,_ as L,d as c}from"./bi.655.81.js";import{S as M}from"./bi.880.909.js";import{e as T}from"./bi.787.676.js";import{I as D}from"./bi.672.677.js";import B from"./bi.628.307.js";import{h as R,c as N}from"./bi.74.863.js";import{C as W}from"./bi.885.864.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";function ae({formFields:s,setFlow:a,flow:t,allIntegURL:p}){const u=z(),[j,f]=r.useState(!1),[b,g]=r.useState({}),[n,h]=r.useState(1),[q,m]=r.useState({show:!1}),C=[{key:"name",label:"Name",required:!0},{key:"phone",label:"Phone",required:!1},{key:"email",label:"Email",required:!1},{key:"website",label:"Website",required:!1},{key:"address",label:"Address",required:!1}],S=[{key:"name",label:"Name",required:!0},{key:"designation",label:"Designation",required:!1},{key:"phone",label:"Phone",required:!1},{key:"email",label:"Email",required:!1},{key:"address",label:"Address",required:!1}],P=[{key:"name",label:"Name",required:!0},{key:"size",label:"Size",required:!1}],[e,l]=r.useState({name:"ClinchPad",type:"ClinchPad",api_key:"",field_map:[{formField:"",clinchPadFormField:""}],actionName:"",organizationFields:C,contactFields:S,leadFields:P,actions:{}}),_=()=>{f(!0),T(t,a,p,e,u,"","",f).then(d=>{var k;d.success?(c.success((k=d.data)==null?void 0:k.msg),u(p)):c.error(d.data||d)})},I=o=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){c.error("Please map mandatory fields");return}if(e.actionName==="lead"&&!e.selectedCRMPipeline){c.error("Please select a pipeline");return}e.field_map.length>0&&h(o)};return i.jsxs("div",{children:[i.jsx(A,{snack:q,setSnackbar:m}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(M,{step:3,active:n})}),i.jsx(B,{clinchPadConf:e,setClinchPadConf:l,step:n,setStep:h,loading:b,setLoading:g,setSnackbar:m}),i.jsxs("div",{className:"btcd-stp-page",style:v({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(W,{formFields:s,handleInput:o=>R(o,e,l),clinchPadConf:e,setClinchPadConf:l,loading:b,setLoading:g,setSnackbar:m}),(e==null?void 0:e.actionName)&&i.jsxs("button",{onClick:()=>I(3),disabled:!N(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&i.jsx(D,{step:n,saveConfig:()=>_(),isLoading:j,dataConf:e,setDataConf:l,formFields:s})]})}export{ae as default};
