import{i as I,u as k,b as l,r as g,m as _,j as e}from"./main-577.js";import{g as w,$ as C,h as v,e as E,_ as m}from"./bi.655.81.js";import{E as y,a as F}from"./bi.49.675.js";import{c as p,s as N}from"./bi.787.676.js";import{I as M}from"./bi.672.677.js";import{h as f,c as S}from"./bi.471.701.js";import{Z as H}from"./bi.762.702.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function J({allIntegURL:u}){const h=I(),{id:$,formID:o}=k(),[t,a]=l(w),[i,x]=l(C),[d,n]=g.useState(!1),[b,s]=g.useState({show:!1}),c=_(v),j=()=>{if(!S(t)){s({show:!0,msg:m("Please map mandatory fields","bit-integrations")});return}N({flow:i,setFlow:x,allIntegURL:u,conf:t,navigate:h,edit:1,setIsLoading:n,setSnackbar:s})};return e.jsxs("div",{style:{width:900},children:[e.jsx(E,{snack:b,setSnackbar:s}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,o,t,a),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),!p(i.triggered_entity)&&e.jsx(y,{setSnackbar:s}),p(i.triggered_entity)&&e.jsx(F,{setSnackbar:s}),e.jsx(H,{formID:o,formFields:c,handleInput:r=>f(r,o,t,a,n,s),marketingHubConf:t,setMarketingHubConf:a,isLoading:d,setIsLoading:n,setSnackbar:s}),e.jsx(M,{edit:!0,saveConfig:j,disabled:t.list===""||t.table===""||t.field_map.length<1,isLoading:d,dataConf:t,setDataConf:a,formFields:c})]})}export{J as default};