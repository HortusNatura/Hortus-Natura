import{i as j,u as I,b as m,r as n,m as _,j as t}from"./main-577.js";import{$ as w,g as y,h as F,e as k,_ as r}from"./bi.655.81.js";import{E as v,a as E}from"./bi.49.675.js";import{c,s as C}from"./bi.787.676.js";import{I as M}from"./bi.672.677.js";import{h as f,c as N}from"./bi.883.812.js";import{M as S}from"./bi.492.813.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function K({allIntegURL:g}){const p=j();I();const[a,R]=m(w),[e,i]=m(y),[u,L]=n.useState(!1),[x,d]=n.useState({list:!1,field:!1,auth:!1,tags:!1}),[h,s]=n.useState({show:!1}),l=_(F),b=()=>{if(!N(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}C({flow:a,allIntegURL:g,conf:e,navigate:p,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,i),name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(a.triggered_entity)&&t.jsx(v,{setSnackbar:s}),c(a.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(S,{formID:a.triggered_entity_id,formFields:l,handleInput:o=>f(o,e,i),mailRelayConf:e,setMailRelayConf:i,loading:x,setLoading:d,setSnackbar:s}),t.jsx(M,{edit:!0,saveConfig:b,disabled:!(e!=null&&e.status),isLoading:u,dataConf:e,setDataConf:i,formFields:l}),t.jsx("br",{})]})}export{K as default};