import{i as j,u as b,b as d,m as I,r as c,j as t}from"./main-577.js";import{g as _,$ as w,h as C,e as v,_ as l}from"./bi.655.81.js";import{E as y,a as E}from"./bi.49.675.js";import{c as f,s as L}from"./bi.787.676.js";import{I as S}from"./bi.672.677.js";import{h as g,M as k}from"./bi.170.853.js";import"./bi.827.680.js";import"./bi.587.674.js";function T({allIntegURL:x}){const p=j(),{formID:u}=b(),[s,a]=d(_),[n,N]=d(w),r=I(C),[o,m]=c.useState(!1),[h,e]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:h,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>g(i,s,a),name:"name",value:s.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!f(n.triggered_entity)&&t.jsx(y,{setSnackbar:e}),f(n.triggered_entity)&&t.jsx(E,{setSnackbar:e}),t.jsx(k,{formID:u,formFields:r,handleInput:i=>g(i,s,a),msLmsConf:s,setMsLmsConf:a,isLoading:o,setIsLoading:m,setSnackbar:e}),t.jsx(S,{edit:!0,saveConfig:()=>L({flow:n,allIntegURL:x,conf:s,navigate:p,edit:1,setIsLoading:m,setSnackbar:e}),disabled:s.mainAction===""||o,isLoading:o,dataConf:s,setDataConf:a,formFields:r}),t.jsx("br",{})]})}export{T as default};
