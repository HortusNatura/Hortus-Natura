var C=Object.defineProperty,E=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))y.call(e,t)&&g(a,t,e[t]);if(f)for(var t of f(e))N.call(e,t)&&g(a,t,e[t]);return a},x=(a,e)=>E(a,w(e));import{i as k,r as m,m as h,b as S,j as s}from"./main-577.js";import{$ as M,g as F,h as L,e as $,_ as j}from"./bi.655.81.js";import{E as R,a as U}from"./bi.49.675.js";import{c as b}from"./bi.787.676.js";import{I as W}from"./bi.672.677.js";import{h as D,s as K}from"./bi.742.801.js";import{M as T}from"./bi.890.802.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.454.794.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function ee({allIntegURL:a}){const e=k(),[t,i]=m.useState({show:!1}),n=h(M),[o,r]=S(F),[_,I]=m.useState({name:"",authKey:""}),c=h(L),[d,p]=m.useState({auth:!1,list:!1,page:!1,update:!1}),v=l=>{p(x(u({},d),{update:l}))};return s.jsxs("div",{style:{width:900},children:[s.jsx($,{snack:t,setSnackbar:i}),s.jsxs("div",{className:"flx mt-3",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:j("Integration Name:","bit-integrations")}),s.jsx("input",{className:"btcd-paper-inp w-5",name:"name",onChange:l=>D(l,o,r,_,I),value:o.name,type:"text",placeholder:j("Integration Name...","bit-integrations")})]}),s.jsxs("div",{className:"my-3",children:[!b(n.triggered_entity)&&s.jsx(R,{setSnackbar:i}),b(n.triggered_entity)&&s.jsx(U,{setSnackbar:i})]}),s.jsx(T,{mailercloudConf:o,setMailercloudConf:r,formFields:c,loading:d,setLoading:p}),s.jsx(W,{edit:!0,saveConfig:()=>{K(n,a,o,e,{edit:1},v)},isLoading:d.update,disabled:o.field_map.length<1,dataConf:o,setDataConf:r,formFields:c})]})}export{ee as default};
