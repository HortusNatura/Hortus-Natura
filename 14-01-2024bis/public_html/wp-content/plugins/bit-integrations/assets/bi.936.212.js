import{i as y,u as I,b as m,r as n,m as R,j as t}from"./main-577.js";import{$ as _,g as N,h as w,e as F,_ as l,af as s}from"./bi.655.81.js";import{E as k,a as v}from"./bi.49.675.js";import{c as f,s as E}from"./bi.787.676.js";import{I as S}from"./bi.672.677.js";import{h as u,c as p}from"./bi.884.893.js";import{P as M}from"./bi.618.894.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";function J({allIntegURL:g}){const x=y();I();const[a,T]=m(_),[e,o]=m(N),[P,c]=n.useState(!1),[b,h]=n.useState({}),[j,r]=n.useState({show:!1}),d=R(w),C=()=>{if(!p(e)){r({show:!0,msg:l("Please map mandatory fields","bit-integrations")});return}if(e.actionName==="contact"&&!e.selectedCustomer){s.error("Please select a Customer");return}if(e.actionName==="project"){if(!e.selectedProjectStatus){s.error("Please select Project status");return}if(!e.selectedProjectType){s.error("Please select Project Related With...");return}if(!e.selectedbillingType){s.error("Please select a Billing type");return}if(!e.selectedCustomer){s.error("Please select a Customer");return}if(Number(e.selectedbillingType)===1&&!e.totalRate){s.error("Please select a Total Rate");return}if(Number(e.selectedbillingType)===2&&!e.ratePerHour){s.error("Please select a Rate Per Hour");return}}E({flow:a,allIntegURL:g,conf:e,navigate:x,edit:1,setIsLoading:c,setSnackbar:r})};return t.jsxs("div",{style:{width:900},children:[t.jsx(F,{snack:j,setSnackbar:r}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:i=>u(i,e,o),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(a.triggered_entity)&&t.jsx(k,{setSnackbar:r}),f(a.triggered_entity)&&t.jsx(v,{setSnackbar:r}),t.jsx(M,{formID:a.triggered_entity_id,formFields:d,handleInput:i=>u(i,e,o),perfexCRMConf:e,setPerfexCRMConf:o,loading:b,setLoading:h,setIsLoading:c,setSnackbar:r}),t.jsx(S,{edit:!0,saveConfig:C,disabled:!p(e),isLoading:P,dataConf:e,setDataConf:o,formFields:d}),t.jsx("br",{})]})}export{J as default};