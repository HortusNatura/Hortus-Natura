import{i as u,u as j,b as d,m as I,r as c,j as e}from"./main-577.js";import{g as P,$ as _,h as v,e as w,_ as p}from"./bi.655.81.js";import{E as C,a as E}from"./bi.49.675.js";import{c as l,s as k}from"./bi.787.676.js";import{I as M}from"./bi.672.677.js";import{h as f,P as N}from"./bi.506.809.js";import"./bi.827.680.js";import"./bi.587.674.js";function T({allIntegURL:g}){const x=u(),{formID:h}=j(),[s,a]=d(P),[i,y]=d(_),m=I(v),[o,n]=c.useState(!1),[b,t]=c.useState({show:!1});return e.jsxs("div",{style:{width:900},children:[e.jsx(w,{snack:b,setSnackbar:t}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:p("Integration Name:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,s,a),name:"name",value:s.name,type:"text",placeholder:p("Integration Name...","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!l(i.triggered_entity)&&e.jsx(C,{setSnackbar:t}),l(i.triggered_entity)&&e.jsx(E,{setSnackbar:t}),e.jsx(N,{formID:h,formFields:m,handleInput:r=>f(r,s,a,n),paidMembershipProConf:s,setPaidMembershipProConf:a,isLoading:o,setIsLoading:n,setSnackbar:t}),e.jsx(M,{edit:!0,saveConfig:()=>k({flow:i,allIntegURL:g,conf:s,navigate:x,edit:1,setIsLoading:n,setSnackbar:t}),disabled:!s.mainAction||o||s.selectedMembership===void 0,isLoading:o,dataConf:s,setDataConf:a,formFields:m}),e.jsx("br",{})]})}export{T as default};
