var _=Object.defineProperty;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var b=(a,t,s)=>t in a?_(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,x=(a,t)=>{for(var s in t||(t={}))k.call(t,s)&&b(a,s,t[s]);if(g)for(var s of g(t))q.call(t,s)&&b(a,s,t[s]);return a};import{i as w,u as I,r as i,j as o}from"./main-577.js";import{e as y,_ as c}from"./bi.655.81.js";import{S as N}from"./bi.880.909.js";import{s as P}from"./bi.787.676.js";import{I as A}from"./bi.672.677.js";import E from"./bi.782.298.js";import{h as L,c as T,a as M}from"./bi.706.847.js";import{F as R}from"./bi.885.848.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.403.694.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function te({formFields:a,setFlow:t,flow:s,allIntegURL:S}){const F=w(),{formID:m}=I(),[u,n]=i.useState(!1),[l,f]=i.useState(1),[v,r]=i.useState({show:!1}),[h,j]=i.useState(0),[e,d]=i.useState({name:"FreshSales",type:"FreshSales",api_key:"",bundle_alias:"",default:{modules:{Account:{required:!0,requiredFields:[]},Deal:{required:!0,requiredFields:[]},Contact:{required:!0,requiredFields:[]},Product:{requiredFields:[]}}},moduleData:{module:""},field_map:[{formField:"",freshSalesFormField:""}],relatedlists:[],actions:{}}),C=()=>{P({flow:s,setFlow:t,allIntegURL:S,conf:e,navigate:F,setIsLoading:n,setSnackbar:r})},D=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!T(e)){r({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}if(!M(e)){["Deal","Contact"].includes(e.moduleData.module)&&r({show:!0,msg:c("Please select a account or a contact","bit-integrations")}),e.moduleData.module==="Contacts"&&r({show:!0,msg:c("Please select a account","bit-integrations")});return}e.moduleData.module&&e.field_map.length>0&&f(p)};return o.jsxs("div",{children:[o.jsx(y,{snack:v,setSnackbar:r}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(N,{step:3,active:l})}),o.jsx(E,{formID:m,freshSalesConf:e,setFreshSalesConf:d,step:l,setstep:f,isLoading:u,setIsLoading:n,setSnackbar:r}),o.jsxs("div",{className:"btcd-stp-page",style:x({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(R,{tab:h,settab:j,formID:m,formFields:a,handleInput:p=>L(p,h,e,d,m,n,r),freshSalesConf:e,setFreshSalesConf:d,isLoading:u,setIsLoading:n,setSnackbar:r}),o.jsxs("button",{onClick:()=>D(3),disabled:e.moduleData.module===""||e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[c("Next","bit-integrations")," "," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(A,{step:l,saveConfig:()=>C(),isLoading:u,dataConf:e,setDataConf:d,formFields:a})]})}export{te as default};
