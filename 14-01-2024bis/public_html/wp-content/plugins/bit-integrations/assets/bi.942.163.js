var v=Object.defineProperty,C=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var g=(a,t,e)=>t in a?v(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t)=>{for(var e in t||(t={}))w.call(t,e)&&g(a,e,t[e]);if(f)for(var e of f(t))y.call(t,e)&&g(a,e,t[e]);return a},h=(a,t)=>C(a,E(t));import{i as k,r as l,m as u,b as S,j as s}from"./main-577.js";import{$ as F,g as L,h as $,e as R,_ as j}from"./bi.655.81.js";import{E as U,a as W}from"./bi.49.675.js";import{c as N}from"./bi.787.676.js";import{I as D}from"./bi.672.677.js";import{h as K,s as M}from"./bi.435.816.js";import{N as T}from"./bi.619.817.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.454.794.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function tt({allIntegURL:a}){const t=k(),[e,i]=l.useState({show:!1}),n=u(F),[o,r]=S(L),[b,_]=l.useState({name:"",authKey:""}),p=u($),[d,c]=l.useState({auth:!1,list:!1,page:!1,field:!1,update:!1}),I=m=>{c(h(x({},d),{update:m}))};return s.jsxs("div",{style:{width:900},children:[s.jsx(R,{snack:e,setSnackbar:i}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:m=>K(m,o,r,b,_),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsxs("div",{className:"my-3",children:[!N(n.triggered_entity)&&s.jsx(U,{setSnackbar:i}),N(n.triggered_entity)&&s.jsx(W,{setSnackbar:i})]}),s.jsx(T,{notionConf:o,setNotionConf:r,formFields:p,loading:d,setLoading:c}),s.jsx(D,{edit:!0,saveConfig:()=>{M(n,a,o,t,{edit:1},I)},isLoading:d.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:r,formFields:p})]})}export{tt as default};
