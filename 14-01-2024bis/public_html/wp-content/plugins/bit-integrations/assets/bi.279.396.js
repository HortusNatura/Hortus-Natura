var I=Object.defineProperty;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(i,e,t)=>e in i?I(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e)=>{for(var t in e||(e={}))S.call(e,t)&&f(i,t,e[t]);if(u)for(var t of u(e))E.call(e,t)&&f(i,t,e[t]);return i};import{i as N,u as A,r as l,j as a}from"./main-577.js";import{e as K,_}from"./bi.655.81.js";import{S as C}from"./bi.880.909.js";import{s as F}from"./bi.787.676.js";import{I as w}from"./bi.672.677.js";import{h as T,c as q}from"./bi.792.788.js";import{B}from"./bi.232.720.js";import L from"./bi.547.268.js";import{K as D}from"./bi.179.787.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function ee({formFields:i,setFlow:e,flow:t,allIntegURL:g}){const x=N(),{formID:h}=A(),[r,c]=l.useState(!1),[o,p]=l.useState(1),[v,m]=l.useState({show:!1}),k=[{key:"full_name",label:"Full Name",required:!0},{key:"email",label:"Email ",required:!0},{key:"tags",label:"Tags ",required:!1}],j=[{key:"1",label:"Add Subscriber"},{key:"2",label:"Remove Subscriber"}],[s,n]=l.useState({name:"Kirim Email",type:"Kirim Email",mainAction:"",userName:"vaishak",api_key:"",field_map:[{formField:"",kirimEmailFormField:""}],subscriberFields:k,allActions:j,actions:{}}),y=d=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),p(3)};return a.jsxs("div",{children:[a.jsx(K,{snack:v,setSnackbar:m}),a.jsx("div",{className:"txt-center mt-2",children:a.jsx(C,{step:3,active:o})}),a.jsx(L,{formID:h,kirimEmailConf:s,setKirimEmailConf:n,step:o,setstep:p,isLoading:r,setIsLoading:c,setSnackbar:m}),a.jsxs("div",{className:"btcd-stp-page",style:b({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[a.jsx(D,{formFields:i,handleInput:d=>T(d,s,n),kirimEmailConf:s,setKirimEmailConf:n,isLoading:r,setIsLoading:c,setSnackbar:m}),a.jsxs("button",{onClick:()=>y(),disabled:!q(s==null?void 0:s.field_map)||s.mainAction===""||r||s.mainAction==="1"&&(s.listId===""||s.listId===void 0),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[_("Next","bit-integrations"),a.jsx(B,{className:"ml-1 rev-icn"})]})]}),a.jsx(w,{step:o,saveConfig:()=>F({flow:t,setFlow:e,allIntegURL:g,conf:s,navigate:x,setIsLoading:c,setSnackbar:m}),isLoading:r,dataConf:s,setDataConf:n,formFields:i})]})}export{ee as default};
