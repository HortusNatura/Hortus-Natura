import{i as u,b as m,r as l,m as _,j as t}from"./main-577.js";import{$ as b,g as j,h as I,_ as c,d as w}from"./bi.655.81.js";import{E as C,a as F}from"./bi.49.675.js";import{c as f,s as v}from"./bi.787.676.js";import{I as y}from"./bi.672.677.js";import{h as g,G as E,c as k}from"./bi.406.753.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function z({allIntegURL:p}){const x=u(),[s,N]=m(b),[e,a]=m(j),[n,r]=l.useState(!1),[G,i]=l.useState({show:!1}),d=_(I),h=()=>{if(!k(e)){w.error("Please map mandatory fields");return}v({flow:s,allIntegURL:p,conf:e,navigate:x,edit:1,setIsLoading:r,setSnackbar:i})};return t.jsxs("div",{style:{width:900},children:[t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>g(o,e,a),name:"name",value:e.name,type:"text",placeholder:c("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(s.triggered_entity)&&t.jsx(C,{setSnackbar:i}),f(s.triggered_entity)&&t.jsx(F,{setSnackbar:i}),t.jsx(E,{formID:s.triggered_entity_id,formFields:d,handleInput:o=>g(o,e,a),getgistConf:e,setGetgistConf:a,isLoading:n,setIsLoading:r}),t.jsx(y,{edit:!0,saveConfig:h,disabled:e.field_map.length<1,isLoading:n,dataConf:e,setDataConf:a,formFields:d}),t.jsx("br",{})]})}export{z as default};