import{i as b,u as I,b as n,m as _,r,j as s}from"./main-577.js";import{g as w,$ as k,h as v,e as E,_ as m}from"./bi.655.81.js";import{E as N,a as F}from"./bi.49.675.js";import{c,s as y}from"./bi.787.676.js";import{I as S}from"./bi.672.677.js";import{h as G,c as $}from"./bi.719.735.js";import{G as L}from"./bi.463.736.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";import"./bi.152.696.js";import"./bi.143.673.js";function K({allIntegURL:d}){const p=b(),{id:l}=I(),[t,a]=n(w),[i,x]=n(k),o=_(v),[f,h]=r.useState(!1),[g,e]=r.useState({show:!1}),j=()=>{y({flow:i,setFlow:x,allIntegURL:d,conf:t,navigate:p,edit:1,setIsLoading:h,setSnackbar:e})};return s.jsxs("div",{style:{width:900},className:"p-2",children:[s.jsx(E,{snack:g,setSnackbar:e}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:m("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",onChange:u=>G(u,t,a),name:"name",value:t.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),s.jsx("br",{}),s.jsx("br",{}),!c(i.triggered_entity)&&s.jsx(N,{setSnackbar:e}),c(i.triggered_entity)&&s.jsx(F,{setSnackbar:e}),s.jsx(L,{flowID:l,formFields:o,googleCalendarConf:t,setGoogleCalendarConf:a}),s.jsx(S,{edit:!0,saveConfig:j,disabled:!(t!=null&&t.calendarId)||!(t!=null&&t.timeZone)||!$(t==null?void 0:t.field_map),isLoading:f,dataConf:t,setDataConf:a,formFields:o}),s.jsx("br",{})]})}export{K as default};