import{i as u,b as r,r as m,m as h,j as t}from"./main-577.js";import{$ as b,g as j,h as I,_ as d}from"./bi.655.81.js";import{E as _,a as w}from"./bi.49.675.js";import{c,s as C}from"./bi.787.676.js";import{I as v}from"./bi.672.677.js";import{h as E,T as F}from"./bi.910.726.js";import"./bi.827.680.js";import"./bi.587.674.js";function D({allIntegURL:l}){const f=u(),[s,N]=r(b),[e,a]=r(j),[n,i]=m.useState(!1),[k,o]=m.useState({show:!1}),g=h(I),p=()=>{C({flow:s,allIntegURL:l,conf:e,navigate:f,edit:1,setIsLoading:i,setSnackbar:o})};return t.jsxs("div",{style:{width:900},children:[t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:x=>E(x,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!c(s.triggered_entity)&&t.jsx(_,{setSnackbar:o}),c(s.triggered_entity)&&t.jsx(w,{setSnackbar:o}),t.jsx(F,{tutorlmsConf:e,setTutorlmsConf:a,isLoading:n,setIsLoading:i}),t.jsx(v,{edit:!0,saveConfig:p,disabled:!1,isLoading:n,dataConf:e,setDataConf:a,formFields:g}),t.jsx("br",{})]})}export{D as default};