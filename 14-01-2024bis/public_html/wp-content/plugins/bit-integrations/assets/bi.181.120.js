import{u as x,r,b as i,m as g,j as o}from"./main-577.js";import{$ as j,h as b,g as k,e as u}from"./bi.655.81.js";import{E as w,a as h}from"./bi.49.675.js";import{s as I}from"./bi.787.676.js";import E from"./bi.670.240.js";import{W}from"./bi.509.719.js";import"./bi.403.694.js";import"./bi.232.720.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.363.721.js";function D({allIntegURL:a}){const{formID:n}=x(),[m,c]=r.useState(!1),[t,d]=i(j),f=g(b),[e,p]=i(k),[l,s]=r.useState({show:!1});return o.jsxs("div",{style:{width:900},children:[o.jsx(u,{snack:l,setSnackbar:s}),t.triggered_entity!=="Webhook"?o.jsx(w,{setSnackbar:s}):o.jsx(h,{setSnackbar:s}),o.jsx("div",{className:"mt-3",children:o.jsx(E,{formID:n,formFields:f,webHooks:e,setWebHooks:p,setSnackbar:s})}),o.jsx(W,{edit:!0,saveConfig:()=>I({flow:t,setFlow:d,allIntegURL:a,conf:e,edit:1,setIsLoading:c,setSnackbar:s}),isLoading:m}),o.jsx("br",{})]})}export{D as default};