import{i as b,b as m,r as n,m as I,j as t}from"./main-577.js";import{$ as _,g as w,h as F,e as k,_ as r}from"./bi.655.81.js";import{E as y,a as E}from"./bi.49.675.js";import{c,s as v}from"./bi.787.676.js";import{I as C}from"./bi.672.677.js";import{h as f,c as M}from"./bi.285.818.js";import{M as N}from"./bi.520.819.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function H({allIntegURL:g}){const p=b(),[a,S]=m(_),[e,i]=m(w),[x,L]=n.useState(!1),[h,d]=n.useState({list:!1,field:!1,auth:!1,tags:!1}),[u,s]=n.useState({show:!1}),l=I(F),j=()=>{if(!M(e)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}v({flow:a,allIntegURL:g,conf:e,navigate:p,edit:1,setLoading:d,setSnackbar:s})};return t.jsxs("div",{style:{width:900},children:[t.jsx(k,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,i),name:"name",defaultValue:e.name||"",type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(a.triggered_entity)&&t.jsx(y,{setSnackbar:s}),c(a.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(N,{formID:a.triggered_entity_id,formFields:l,handleInput:o=>f(o,e,i),mailjetConf:e,setMailjetConf:i,loading:h,setLoading:d,setSnackbar:s}),t.jsx(C,{edit:!0,saveConfig:j,disabled:!(e!=null&&e.selectedLists),isLoading:x,dataConf:e,setDataConf:i,formFields:l}),t.jsx("br",{})]})}export{H as default};
