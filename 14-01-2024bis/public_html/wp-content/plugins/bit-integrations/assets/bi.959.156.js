var C=Object.defineProperty,E=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(s,e,t)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,x=(s,e)=>{for(var t in e||(e={}))y.call(e,t)&&g(s,t,e[t]);if(f)for(var t of f(e))N.call(e,t)&&g(s,t,e[t]);return s},h=(s,e)=>E(s,w(e));import{i as k,r as l,m as u,b as S,j as a}from"./main-577.js";import{$ as M,g as F,h as L,e as $,_ as j}from"./bi.655.81.js";import{E as R,a as U}from"./bi.49.675.js";import{c as b}from"./bi.787.676.js";import{I as W}from"./bi.672.677.js";import{h as D,s as K}from"./bi.342.803.js";import{M as T}from"./bi.719.804.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.454.794.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function ee({allIntegURL:s}){const e=k(),[t,n]=l.useState({show:!1}),i=u(M),[o,r]=S(F),[_,I]=l.useState({name:"",authKey:""}),p=u(L),[d,c]=l.useState({auth:!1,list:!1,page:!1,update:!1}),v=m=>{c(h(x({},d),{update:m}))};return a.jsxs("div",{style:{width:900},children:[a.jsx($,{snack:t,setSnackbar:n}),a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),a.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:m=>D(m,o,r,_,I),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),a.jsxs("div",{className:"my-3",children:[!b(i.triggered_entity)&&a.jsx(R,{setSnackbar:n}),b(i.triggered_entity)&&a.jsx(U,{setSnackbar:n})]}),a.jsx(T,{moosendConf:o,setMoosendConf:r,formFields:p,loading:d,setLoading:c}),a.jsx(W,{edit:!0,saveConfig:()=>{K(i,s,o,e,{edit:1},v)},isLoading:d.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:r,formFields:p})]})}export{ee as default};
