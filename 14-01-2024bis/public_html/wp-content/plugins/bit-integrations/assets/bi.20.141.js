import{i as I,b as f,r as n,m as _,j as t}from"./main-577.js";import{$ as w,g as v,h as C,e as F,_ as r}from"./bi.655.81.js";import{E as k,a as y}from"./bi.49.675.js";import{c,s as E}from"./bi.787.676.js";import{I as N}from"./bi.672.677.js";import{h as g,c as S}from"./bi.970.777.js";import{V as L}from"./bi.284.778.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function H({allIntegURL:p}){const u=I(),[a,V]=f(w),[e,o]=f(v),[d,m]=n.useState(!1),[x,h]=n.useState({list:!1,field:!1,auth:!1}),[b,s]=n.useState({show:!1}),l=_(C),j=()=>{if(!S(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}E({flow:a,allIntegURL:p,conf:e,navigate:u,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(F,{snack:b,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>g(i,e,o),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(a.triggered_entity)&&t.jsx(k,{setSnackbar:s}),c(a.triggered_entity)&&t.jsx(y,{setSnackbar:s}),t.jsx(L,{formID:a.triggered_entity_id,formFields:l,handleInput:i=>g(i,e,o),vboutConf:e,setVboutConf:o,isLoading:d,setIsLoading:m,loading:x,setLoading:h,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:j,disabled:e.field_map.length<1,isLoading:d,dataConf:e,setDataConf:o,formFields:l}),t.jsx("br",{})]})}export{H as default};
