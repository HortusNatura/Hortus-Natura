import{i as b,u as j,r as o,j as e}from"./main-577.js";import{e as S}from"./bi.655.81.js";import{S as v}from"./bi.880.909.js";import{e as N}from"./bi.787.676.js";import T from"./bi.670.240.js";import{W as y}from"./bi.509.719.js";import{T as i,t as k}from"./bi.934.737.js";import"./bi.403.694.js";import"./bi.232.720.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.363.721.js";function q({formFields:c,setFlow:m,flow:p,allIntegURL:u}){const d=b(),{formID:l}=j(),[s,x]=o.useState(1),[f,a]=o.useState({show:!1}),[h,n]=o.useState(!1),{n8nLinks:t}=k,[r,g]=o.useState({name:"N8n Web Hooks",type:"N8n",method:"POST",url:"",apiConsole:"https://connect.n8n.com/dashboard"});return e.jsxs("div",{children:[e.jsx(S,{snack:f,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:2,active:s})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&1100,height:s===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(i,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(i,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx(T,{formID:l,formFields:c,webHooks:r,setWebHooks:g,step:s,setStep:x,setSnackbar:a,create:!0})]}),e.jsx("div",{className:"btcd-stp-page",style:{width:s===2&&"100%",height:s===2&&"auto"},children:e.jsx(y,{step:s,saveConfig:()=>N(p,m,u,r,d,"","",n),isLoading:h})})]})}export{q as default};
