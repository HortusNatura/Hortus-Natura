import{i as j,r as o,b as r,m as v,j as t}from"./main-577.js";import{$ as b,g as y,h as I,e as _,_ as l}from"./bi.655.81.js";import{E as w,a as C}from"./bi.49.675.js";import{c as m}from"./bi.787.676.js";import{I as k}from"./bi.672.677.js";import{e as E,s as N}from"./bi.701.792.js";import{K as S}from"./bi.802.793.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.454.794.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function B({allIntegURL:d}){const c=j(),[f,a]=o.useState({show:!1}),[s,F]=r(b),[e,i]=r(y),n=v(I),[p,g]=o.useState(!1),[x,h]=o.useState({list:!1,field:!1,auth:!1});return t.jsxs("div",{style:{width:900},children:[t.jsx(_,{snack:f,setSnackbar:a}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:u=>E(u,e,i),value:e.name,type:"text",placeholder:l("Integration Name...","bit-integrations")})]}),t.jsxs("div",{className:"my-3",children:[!m(s.triggered_entity)&&t.jsx(w,{setSnackbar:a}),m(s.triggered_entity)&&t.jsx(C,{setSnackbar:a})]}),t.jsx(S,{formFields:n,klaviyoConf:e,setKlaviyoConf:i,loading:x,setLoading:h}),t.jsx(k,{edit:!0,saveConfig:()=>{N(s,d,e,c,{edit:1},g)},disabled:e.field_map.length<1,isLoading:p,dataConf:e,setDataConf:i,formFields:n})]})}export{B as default};
