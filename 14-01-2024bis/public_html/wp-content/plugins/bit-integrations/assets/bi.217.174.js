import{i as u,u as j,b as m,m as b,r as c,j as t}from"./main-577.js";import{g as _,$ as w,h as C,e as v,i as d}from"./bi.655.81.js";import{I as E}from"./bi.672.677.js";import{c as f,s as k}from"./bi.787.676.js";import{h as D}from"./bi.379.837.js";import{D as N}from"./bi.464.838.js";import{E as y,a as F}from"./bi.49.675.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";function B({allIntegURL:l}){const g=u(),{id:S,formID:p}=j(),[e,a]=m(_),[i,x]=m(w),o=b(C),[n,r]=c.useState(!1),[h,s]=c.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(v,{snack:h,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:d("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:I=>D(I,e,a),name:"name",value:e.name,type:"text",placeholder:d("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),!f(i.triggered_entity)&&t.jsx(y,{setSnackbar:s}),f(i.triggered_entity)&&t.jsx(F,{setSnackbar:s}),t.jsx(N,{formID:p,formFields:o,directIqConf:e,setDirectIqConf:a,isLoading:n,setIsLoading:r,setSnackbar:s}),t.jsx(E,{edit:!0,saveConfig:()=>k({flow:i,setFlow:x,allIntegURL:l,navigate:g,conf:e,edit:1,setIsLoading:r,setSnackbar:s}),disabled:e.field_map.length<1,isLoading:n,dataConf:e,setDataConf:a,formFields:o}),t.jsx("br",{})]})}export{B as default};