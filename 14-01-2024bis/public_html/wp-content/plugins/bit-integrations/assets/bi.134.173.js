import{i as b,u as j,b as m,m as I,r as c,j as t}from"./main-577.js";import{g as k,$ as _,h as w,e as C,i as d}from"./bi.655.81.js";import{I as v}from"./bi.672.677.js";import{c as f,s as E}from"./bi.787.676.js";import{h as N}from"./bi.507.835.js";import{B as y}from"./bi.929.836.js";import{E as F,a as M}from"./bi.49.675.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";function z({allIntegURL:l}){const g=b(),{id:S,formID:p}=j(),[e,a]=m(k),[n,x]=m(_),o=I(w),[i,r]=c.useState(!1),[h,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>N(u,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(n.triggered_entity)&&t.jsx(F,{setSnackbar:s}),f(n.triggered_entity)&&t.jsx(M,{setSnackbar:s}),t.jsx(y,{formID:p,formFields:o,benchMarkConf:e,setBenchMarkConf:a,isLoading:i,setIsLoading:r,setSnackbar:s}),t.jsx(v,{edit:!0,saveConfig:()=>E({flow:n,setFlow:x,allIntegURL:l,navigate:g,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:i,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{z as default};