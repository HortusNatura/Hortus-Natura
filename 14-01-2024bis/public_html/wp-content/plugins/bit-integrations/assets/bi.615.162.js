import{i as b,b as c,m as j,r as l,j as t}from"./main-577.js";import{g as I,$ as _,h as w,e as k,_ as n}from"./bi.655.81.js";import{E as v,a as y}from"./bi.49.675.js";import{c as p,s as E}from"./bi.787.676.js";import{I as C}from"./bi.672.677.js";import{M as F}from"./bi.597.814.js";import{h as g,c as M}from"./bi.365.815.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function G({allIntegURL:f}){const x=b(),[e,a]=c(I),[i,N]=c(_),r=j(w),[d,m]=l.useState(!1),[h,s]=l.useState({show:!1}),u=()=>{if(!M(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}E({flow:i,allIntegURL:f,conf:e,navigate:x,edit:1,setIsLoading:m,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>g(o,e,a),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!p(i.triggered_entity)&&t.jsx(v,{setSnackbar:s}),p(i.triggered_entity)&&t.jsx(y,{setSnackbar:s}),t.jsx(F,{formID:i.triggered_entity_id,formFields:r,handleInput:o=>g(o,e,a),mailupConf:e,setMailupConf:a,isLoading:d,setIsLoading:m,setSnackbar:s}),t.jsx(C,{edit:!0,saveConfig:u,disabled:!(e!=null&&e.listId),isLoading:d,dataConf:e,setDataConf:a,formFields:r}),t.jsx("br",{})]})}export{G as default};
