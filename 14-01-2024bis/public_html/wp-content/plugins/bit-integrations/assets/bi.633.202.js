import{i as I,b as d,r as i,m as _,j as e}from"./main-577.js";import{$ as w,g as E,h as C,e as F,_ as n,af as c}from"./bi.655.81.js";import{E as L,a as S}from"./bi.49.675.js";import{c as l,s as k}from"./bi.787.676.js";import{I as y}from"./bi.672.677.js";import{h as N,c as f}from"./bi.113.889.js";import{L as $}from"./bi.151.890.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";function H({allIntegURL:g}){const p=I(),[a,P]=d(w),[t,o]=d(E),[x,r]=i.useState(!1),[u,h]=i.useState({}),[b,s]=i.useState({show:!1}),m=_(C),j=()=>{if(!f(t)){s({show:!0,msg:n("Please map mandatory fields","bit-integrations")});return}if(!t.selectedEvent){c.error("Please select an Event");return}if(!t.selectedSession){c.error("Please select a Session");return}k({flow:a,allIntegURL:g,conf:t,navigate:p,edit:1,setIsLoading:r,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(F,{snack:b,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:n("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:v=>N(v,t,o),name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!l(a.triggered_entity)&&e.jsx(L,{setSnackbar:s}),l(a.triggered_entity)&&e.jsx(S,{setSnackbar:s}),e.jsx($,{formID:a.triggered_entity_id,formFields:m,livestormConf:t,setLivestormConf:o,loading:u,setLoading:h,setIsLoading:r,setSnackbar:s}),e.jsx(y,{edit:!0,saveConfig:j,disabled:!f(t),isLoading:x,dataConf:t,setDataConf:o,formFields:m}),e.jsx("br",{})]})}export{H as default};