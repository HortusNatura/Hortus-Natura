import{u as x,r as a,b as i,m as g,j as s}from"./main-577.js";import{$ as j,h as b,g as k,e as u}from"./bi.655.81.js";import{E as w,a as h}from"./bi.49.675.js";import{s as E}from"./bi.787.676.js";import W from"./bi.670.240.js";import{W as F}from"./bi.509.719.js";import"./bi.403.694.js";import"./bi.232.720.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.363.721.js";function D({allIntegURL:r}){const{formID:n}=x(),[m,o]=a.useState({show:!1}),[p,c]=a.useState(!1),[t,d]=i(j),f=g(b),[e,l]=i(k);return s.jsxs("div",{style:{width:900},children:[s.jsx(u,{snack:m,setSnackbar:o}),t.triggered_entity!=="Webhook"?s.jsx(w,{setSnackbar:o}):s.jsx(h,{setSnackbar:o}),s.jsx("div",{className:"mt-3",children:s.jsx(W,{formID:n,formFields:f,webHooks:e,setWebHooks:l,setSnackbar:o})}),s.jsx(F,{edit:!0,saveConfig:()=>E({flow:t,setFlow:d,allIntegURL:r,conf:e,edit:1,setIsLoading:c,setSnackbar:o}),isLoading:p}),s.jsx("br",{})]})}export{D as default};
