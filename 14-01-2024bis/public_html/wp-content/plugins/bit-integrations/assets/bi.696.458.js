import{i as S,u as v,r as a,j as e}from"./main-577.js";import{e as T}from"./bi.655.81.js";import{S as h}from"./bi.880.909.js";import{e as y}from"./bi.787.676.js";import b from"./bi.670.240.js";import{W as H}from"./bi.509.719.js";import{T as i,t as I}from"./bi.934.737.js";import"./bi.403.694.js";import"./bi.232.720.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.363.721.js";function B({formFields:m,setFlow:c,flow:n,allIntegURL:p}){const u=S(),{formID:d}=v(),[s,l]=a.useState(1),[x,o]=a.useState({show:!1}),[f,g]=a.useState(!1),{wPWebhooksLinks:t}=I,[r,j]=a.useState({name:"WPWebhooks Web Hooks",type:"WPWebhooks",method:"POST",url:""});return e.jsxs("div",{children:[e.jsx(T,{snack:x,setSnackbar:o}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(h,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(b,{formID:d,formFields:m,webHooks:r,setWebHooks:j,step:s,setStep:l,setSnackbar:o,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(H,{step:s,saveConfig:()=>y(n,c,p,r,u,"","",g),isLoading:f})})]})}export{B as default};