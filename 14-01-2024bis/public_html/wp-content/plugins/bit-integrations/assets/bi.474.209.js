import{u as x,r,b as i,m as u,j as o}from"./main-577.js";import{$ as g,h,g as j,e as b}from"./bi.655.81.js";import{E as k,a as w}from"./bi.49.675.js";import{s as v}from"./bi.787.676.js";import E from"./bi.670.240.js";import{W}from"./bi.509.719.js";import"./bi.403.694.js";import"./bi.232.720.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.363.721.js";function L({allIntegURL:a}){const{formID:n}=x(),[m,s]=r.useState({show:!1}),[c,d]=r.useState(!1),[t,f]=i(g),p=u(h),[e,l]=i(j);return o.jsxs("div",{style:{width:900},children:[o.jsx(b,{snack:m,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(k,{setSnackbar:s}):o.jsx(w,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:p,webHooks:e,setWebHooks:l,setSnackbar:s})}),o.jsx(W,{edit:!0,saveConfig:()=>v({flow:t,setFlow:f,allIntegURL:a,conf:e,edit:1,setIsLoading:d,setSnackbar:s}),isLoading:c}),o.jsx("br",{})]})}export{L as default};
