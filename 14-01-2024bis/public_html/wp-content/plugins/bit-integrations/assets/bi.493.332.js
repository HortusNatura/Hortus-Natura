var j=Object.defineProperty;var p=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?j(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,b=(a,e)=>{for(var t in e||(e={}))q.call(e,t)&&f(a,t,e[t]);if(p)for(var t of p(e))C.call(e,t)&&f(a,t,e[t]);return a};import{i as S,r as d,j as r}from"./main-577.js";import{e as R,_ as L}from"./bi.655.81.js";import{S as N}from"./bi.880.909.js";import{s as I}from"./bi.787.676.js";import{I as w}from"./bi.672.677.js";import A from"./bi.826.248.js";import{R as E}from"./bi.630.782.js";import{h as F}from"./bi.574.781.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.232.720.js";import"./bi.934.737.js";import"./bi.265.683.js";function V({formFields:a,setFlow:e,flow:t,allIntegURL:y}){const v=S(),[m,i]=d.useState(!1),[l,u]=d.useState(1),[k,n]=d.useState({show:!1}),x=[{key:"user_login",label:"User Name",required:!0},{key:"user_email",label:"Email",required:!0},{key:"user_pass",label:"User Password",required:!1},{key:"first_name",label:"First name",required:!1},{key:"last_name",label:"Last name",required:!1},{key:"company",label:"Company",required:!1},{key:"address1",label:"Address Line 1",required:!1},{key:"address2",label:"Address Line 2",required:!1},{key:"city",label:"City",required:!1},{key:"state",label:"State",required:!1},{key:"zip",label:"Zip",required:!1},{key:"country",label:"Country",required:!1}],g=[{key:"add-member-level",label:"Add the user to a level"},{key:"remove-member-level",label:"Remove the user to a level"}],[s,o]=d.useState({name:"Restrict Content",type:"RestrictContent",field_map:[{formField:"",restrictField:""}],exp_date:"",memberFields:x,actionLists:g,actions:{}}),h=()=>{i(!0),I({flow:t,setFlow:e,allIntegURL:y,conf:s,navigate:v,setIsLoading:i,setSnackbar:n})},_=c=>{s.field_map.length>0&&u(c)};return r.jsxs("div",{children:[r.jsx(R,{snack:k,setSnackbar:n}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(N,{step:3,active:l})}),r.jsx(A,{restrictConf:s,setRestrictConf:o,step:l,setStep:u,isLoading:m,setIsLoading:i,setSnackbar:n}),r.jsxs("div",{className:"btcd-stp-page",style:b({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(E,{formFields:a,handleInput:c=>F(c,s,o),restrictConf:s,setRestrictConf:o,isLoading:m,setIsLoading:i,setSnackbar:n}),r.jsxs("button",{onClick:()=>_(3),disabled:!(s!=null&&s.level_id)&&!(s!=null&&s.member_id),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.jsx(w,{step:l,saveConfig:()=>h(),isLoading:m,dataConf:s,setDataConf:o,formFields:a})]})}export{V as default};
