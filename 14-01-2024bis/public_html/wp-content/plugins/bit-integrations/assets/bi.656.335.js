var w=Object.defineProperty;var h=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var g=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,x=(o,t)=>{for(var e in t||(t={}))M.call(t,e)&&g(o,e,t[e]);if(h)for(var e of h(t))R.call(t,e)&&g(o,e,t[e]);return o};import{i as k,u as _,r as n,j as a}from"./main-577.js";import{e as N,_ as b}from"./bi.655.81.js";import{S as Z}from"./bi.880.909.js";import{g as E,s as T}from"./bi.787.676.js";import{I as z}from"./bi.672.677.js";import F from"./bi.550.223.js";import{h as L,c as P}from"./bi.78.692.js";import{Z as A}from"./bi.995.693.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.403.694.js";import"./bi.515.695.js";import"./bi.152.696.js";import"./bi.143.673.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function at({formFields:o,setFlow:t,flow:e,allIntegURL:C}){const v=k(),{formID:l}=_(),[p,r]=n.useState(!1),[m,f]=n.useState(1),[j,i]=n.useState({show:!1}),[u,S]=n.useState(0),[s,c]=n.useState({name:"Zoho CRM",type:"Zoho CRM",clientId:"",clientSecret:"",module:"",layout:"",field_map:[{formField:"",zohoFormField:""}],relatedlists:[],actions:{}});n.useEffect(()=>{window.opener&&E("zohoCRM")},[]);const y=()=>{T({flow:e,setFlow:t,allIntegURL:C,conf:s,navigate:v,setIsLoading:r,setSnackbar:i})},I=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!P(s)){i({show:!0,msg:b("Please map mandatory fields","bit-integrations")});return}s.module&&s.layout&&s.field_map.length>0&&f(d)};return a.jsxs("div",{children:[a.jsx(N,{snack:j,setSnackbar:i}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(Z,{step:3,active:m})}),a.jsx(F,{formID:l,crmConf:s,setCrmConf:c,step:m,setstep:f,isLoading:p,setIsLoading:r,setSnackbar:i}),a.jsxs("div",{className:"btcd-stp-page",style:x({},m===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(A,{tab:u,settab:S,formID:l,formFields:o,handleInput:d=>L(d,u,s,c,l,r,i),crmConf:s,setCrmConf:c,isLoading:p,setIsLoading:r,setSnackbar:i}),a.jsxs("button",{onClick:()=>I(3),disabled:s.module===""||s.layout===""||s.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[b("Next","bit-integrations")," "," ",a.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),a.jsx(z,{step:m,saveConfig:()=>y(),isLoading:p,dataConf:s,setDataConf:c,formFields:o})]})}export{at as default};