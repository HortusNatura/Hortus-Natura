import{i as C,u as y,b as d,r as n,m as I,j as e}from"./main-577.js";import{$ as _,g as w,h as F,e as S,_ as i,af as k}from"./bi.655.81.js";import{E as v,a as E}from"./bi.49.675.js";import{c,s as N}from"./bi.787.676.js";import{I as H}from"./bi.672.677.js";import{h as L,c as l}from"./bi.894.883.js";import{C as $}from"./bi.476.884.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";function J({allIntegURL:f}){const g=C();y();const[s,D]=d(_),[t,o]=d(w),[p,u]=n.useState(!1),[x,r]=n.useState({}),[b,a]=n.useState({show:!1}),m=I(F),h=()=>{if(!l(t)){a({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(t.actionName==="deal"&&!t.selectedStage){k.error("Please select a Deal Stage");return}N({flow:s,allIntegURL:f,conf:t,navigate:g,edit:1,setLoading:r,setSnackbar:a})};return e.jsxs("div",{style:{width:900},children:[e.jsx(S,{snack:b,setSnackbar:a}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:j=>L(j,t,o),name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!c(s.triggered_entity)&&e.jsx(v,{setSnackbar:a}),c(s.triggered_entity)&&e.jsx(E,{setSnackbar:a}),e.jsx($,{formID:s.triggered_entity_id,formFields:m,companyHubConf:t,setCompanyHubConf:o,loading:x,setLoading:r,setIsLoading:u,setSnackbar:a}),e.jsx(H,{edit:!0,saveConfig:h,disabled:!l(t),isLoading:p,dataConf:t,setDataConf:o,formFields:m}),e.jsx("br",{})]})}export{J as default};
