import{i as v,u as I,b as d,r as o,m as _,j as t}from"./main-577.js";import{$ as w,g as C,h as F,e as k,_ as n}from"./bi.655.81.js";import{E as y,a as E}from"./bi.49.675.js";import{c,s as N}from"./bi.787.676.js";import{I as S}from"./bi.672.677.js";import{h as G,c as l}from"./bi.126.881.js";import{G as L}from"./bi.446.882.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function K({allIntegURL:f}){const g=v();I();const[a,$]=d(w),[e,i]=d(C),[p,x]=o.useState(!1),[u,r]=o.useState({}),[h,s]=o.useState({show:!1}),m=_(F),b=()=>{if(!l(e)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}N({flow:a,allIntegURL:f,conf:e,navigate:g,edit:1,setLoading:r,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>G(j,e,i),name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(a.triggered_entity)&&t.jsx(y,{setSnackbar:s}),c(a.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(L,{formID:a.triggered_entity_id,formFields:m,gravitecConf:e,setGravitecConf:i,loading:u,setLoading:r,setIsLoading:x,setSnackbar:s}),t.jsx(S,{edit:!0,saveConfig:b,disabled:!l(e),isLoading:p,dataConf:e,setDataConf:i,formFields:m}),t.jsx("br",{})]})}export{K as default};
