import{i as j,u as b,b as c,m as I,r as d,j as t}from"./main-577.js";import{g as S,$ as _,h as w,e as C,_ as l}from"./bi.655.81.js";import{E as v,a as E}from"./bi.49.675.js";import{c as p,s as k}from"./bi.787.676.js";import{I as N}from"./bi.672.677.js";import{h as f,S as W}from"./bi.812.684.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function B({allIntegURL:g}){const x=j(),{formID:h}=b(),[e,a]=c(S),[i,y]=c(_),r=I(w),[n,m]=d.useState(!1),[u,s]=d.useState({show:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(C,{snack:u,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:o=>f(o,e,a),name:"name",value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!p(i.triggered_entity)&&t.jsx(v,{setSnackbar:s}),p(i.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(W,{formID:h,formFields:r,handleInput:o=>f(o,e,a),sliceWpConf:e,setSliceWpConf:a,isLoading:n,setIsLoading:m,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:()=>k({flow:i,allIntegURL:g,conf:e,navigate:x,edit:1,setIsLoading:m,setSnackbar:s}),disabled:!e.mainAction||n,isLoading:n,dataConf:e,setDataConf:a,formFields:r}),t.jsx("br",{})]})}export{B as default};