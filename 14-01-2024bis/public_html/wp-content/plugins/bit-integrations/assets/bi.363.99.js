import{i as j,u as b,b as m,m as C,r as c,j as t}from"./main-577.js";import{g as v,$ as I,h as _,e as w,i as d}from"./bi.655.81.js";import{I as E}from"./bi.672.677.js";import{c as p,s as k}from"./bi.787.676.js";import{h as N}from"./bi.624.717.js";import{A as y}from"./bi.97.718.js";import{E as A,a as F}from"./bi.49.675.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function H({allIntegURL:g}){const f=j(),{id:S,formID:l}=b(),[e,s]=m(v),[i,x]=m(I),n=C(_),[o,r]=c.useState(!1),[h,a]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(w,{snack:h,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>N(u,e,s),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!p(i.triggered_entity)&&t.jsx(A,{setSnackbar:a}),p(i.triggered_entity)&&t.jsx(F,{setSnackbar:a}),t.jsx(y,{formID:l,formFields:n,activeCampaingConf:e,setActiveCampaingConf:s,isLoading:o,setIsLoading:r,setSnackbar:a}),t.jsx(E,{edit:!0,saveConfig:()=>k({flow:i,setFlow:x,allIntegURL:g,navigate:f,conf:e,edit:1,setIsLoading:r,setSnackbar:a}),disabled:e.field_map.length<1,isLoading:o,dataConf:e,setDataConf:s,formFields:n}),t.jsx("br",{})]})}export{H as default};