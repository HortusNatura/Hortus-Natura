import{i as I,u as b,b as l,r as c,m as C,j as t}from"./main-577.js";import{g as _,$ as w,h as v,e as E,_ as p}from"./bi.655.81.js";import{I as k}from"./bi.672.677.js";import{h as f}from"./bi.719.708.js";import{M as N}from"./bi.397.709.js";import{E as S,a as y}from"./bi.49.675.js";import{c as g,s as F}from"./bi.787.676.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.469.710.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function J({allIntegURL:h}){const x=I(),{id:M,formID:r}=b(),[e,a]=l(_),[i,u]=l(w),[m,o]=c.useState(!1),[j,s]=c.useState({show:!1}),d=C(v);return t.jsxs("div",{style:{width:900},children:[t.jsx(E,{snack:j,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>f(n,e,a),name:"name",value:e.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!g(i.triggered_entity)&&t.jsx(S,{setSnackbar:s}),g(i.triggered_entity)&&t.jsx(y,{setSnackbar:s}),t.jsx(N,{formID:r,formFields:d,handleInput:n=>f(n,e,a,r,o,s),sheetConf:e,setSheetConf:a,isLoading:m,setIsLoading:o,setSnackbar:s}),t.jsx(k,{edit:!0,saveConfig:()=>F({flow:i,setFlow:u,allIntegURL:h,conf:e,navigate:x,edit:1,setIsLoading:o,setSnackbar:s}),disabled:e.listId===""||e.field_map.length<1,isLoading:m,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{J as default};
