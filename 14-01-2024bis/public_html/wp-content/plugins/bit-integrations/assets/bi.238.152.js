var I=Object.defineProperty,v=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,x=(a,e)=>{for(var t in e||(e={}))E.call(e,t)&&g(a,t,e[t]);if(f)for(var t of f(e))w.call(e,t)&&g(a,t,e[t]);return a},h=(a,e)=>v(a,C(e));import{i as N,r as l,m as u,b as k,j as s}from"./main-577.js";import{$ as z,g as F,h as L,e as $,_ as j}from"./bi.655.81.js";import{E as R,a as U}from"./bi.49.675.js";import{c as y}from"./bi.787.676.js";import{I as W}from"./bi.672.677.js";import{h as D,s as K}from"./bi.981.795.js";import{S as M}from"./bi.711.796.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.454.794.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function ee({allIntegURL:a}){const e=N(),[t,i]=l.useState({show:!1}),n=u(z),[o,r]=k(F),[b,S]=l.useState({name:"",authKey:""}),p=u(L),[d,c]=l.useState({auth:!1,list:!1,tag:!1,page:!1,update:!1}),_=m=>{c(h(x({},d),{update:m}))};return s.jsxs("div",{style:{width:900},children:[s.jsx($,{snack:t,setSnackbar:i}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:m=>D(m,o,r,b,S),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsxs("div",{className:"my-3",children:[!y(n.triggered_entity)&&s.jsx(R,{setSnackbar:i}),y(n.triggered_entity)&&s.jsx(U,{setSnackbar:i})]}),s.jsx(M,{selzyConf:o,setSelzyConf:r,formFields:p,loading:d,setLoading:c}),s.jsx(W,{edit:!0,saveConfig:()=>{K(n,a,o,e,{edit:1},_)},isLoading:d.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:r,formFields:p})]})}export{ee as default};