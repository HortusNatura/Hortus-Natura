import{i as j,u as S,r as a,j as e}from"./main-577.js";import{e as v}from"./bi.655.81.js";import{S as T}from"./bi.880.909.js";import{e as W}from"./bi.787.676.js";import{W as y}from"./bi.509.719.js";import I from"./bi.670.240.js";import{T as i,t as N}from"./bi.934.737.js";import"./bi.403.694.js";import"./bi.232.720.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.363.721.js";function F({formFields:m,setFlow:c,flow:n,allIntegURL:p}){const u=j(),{formID:d}=S(),[s,l]=a.useState(1),[x,o]=a.useState({show:!1}),[f,g]=a.useState(!1),{webHooksLinks:t}=N,[r,h]=a.useState({name:"Web Hooks",type:"Web Hooks",method:"POST",url:""});return e.jsxs("div",{children:[e.jsx(v,{snack:x,setSnackbar:o}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(T,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(I,{formID:d,formFields:m,webHooks:r,setWebHooks:h,step:s,setStep:l,setSnackbar:o,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>W(n,c,p,r,u,"","",g),isLoading:f})})]})}export{F as default};