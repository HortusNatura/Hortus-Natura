import{i as C,u as _,b as d,r as n,m as w,j as e}from"./main-577.js";import{$ as M,g as F,h as k,e as v,_ as r}from"./bi.655.81.js";import{E as y,a as E}from"./bi.49.675.js";import{c,s as N}from"./bi.787.676.js";import{I as R}from"./bi.672.677.js";import{h as l,c as f}from"./bi.159.900.js";import{M as S}from"./bi.267.901.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";function H({allIntegURL:g}){const p=C();_();const[a,L]=d(M),[t,o]=d(F),[x,u]=n.useState(!1),[h,b]=n.useState({}),[j,s]=n.useState({show:!1}),m=w(k),I=()=>{if(!f(t)){s({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}N({flow:a,allIntegURL:g,conf:t,navigate:p,edit:1,setIsLoading:u,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(v,{snack:j,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>l(i,t,o),name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!c(a.triggered_entity)&&e.jsx(y,{setSnackbar:s}),c(a.triggered_entity)&&e.jsx(E,{setSnackbar:s}),e.jsx(S,{formID:a.triggered_entity_id,formFields:m,handleInput:i=>l(i,t,o),moxiecrmConf:t,setMoxieCRMConf:o,loading:h,setLoading:b,setSnackbar:s}),e.jsx(R,{edit:!0,saveConfig:I,disabled:!f(t),isLoading:x,dataConf:t,setDataConf:o,formFields:m}),e.jsx("br",{})]})}export{H as default};
