import{i as b,u as S,r as o,j as e}from"./main-577.js";import{e as v}from"./bi.655.81.js";import{S as g}from"./bi.880.909.js";import{e as k}from"./bi.787.676.js";import w from"./bi.670.240.js";import{W as I}from"./bi.509.719.js";import{T as i,t as T}from"./bi.934.737.js";import"./bi.403.694.js";import"./bi.232.720.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.363.721.js";function z({formFields:c,setFlow:p,flow:m,allIntegURL:u}){const n=b(),{formID:l}=S(),[s,d]=o.useState(1),[x,a]=o.useState({show:!1}),[f,h]=o.useState(!1),{integromatLinks:t}=T,[r,j]=o.useState({name:"Make(Integromat) Web Hooks",type:"Make(Integromat)",method:"POST",url:"",apiConsole:"https://www.integromat.com/hooks/"});return e.jsxs("div",{children:[e.jsx(v,{snack:x,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(g,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(w,{formID:l,formFields:c,webHooks:r,setWebHooks:j,step:s,setStep:d,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(I,{step:s,saveConfig:()=>k(m,p,u,r,n,"","",h),isLoading:f})})]})}export{z as default};
