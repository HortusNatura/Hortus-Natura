import{i as x,r as i,j as t}from"./main-577.js";import{e as j,_ as b}from"./bi.655.81.js";import{B as I}from"./bi.232.720.js";import{S}from"./bi.880.909.js";import{s as v}from"./bi.787.676.js";import{I as M}from"./bi.672.677.js";import k from"./bi.572.251.js";import{s as C,h as w,c as N}from"./bi.606.747.js";import{M as y}from"./bi.279.748.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function J({formFields:c,setFlow:p,flow:l,allIntegURL:u}){const d=x(),[r,o]=i.useState(!1),[a,m]=i.useState(1),[f,s]=i.useState({show:!1}),[e,n]=i.useState({name:"Mautic",type:"Mautic",clientId:"",clientSecret:"",baseUrl:"",field_map:[{formField:"",mauticField:""}],actions:{}});i.useEffect(()=>{window.opener&&C("mautic")},[]);const g=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(e)){s({show:!0,msg:"Please map fields to continue."});return}e.listId!==""&&m(3)};return t.jsxs("div",{children:[t.jsx(j,{snack:f,setSnackbar:s}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(S,{step:3,active:a})}),t.jsx(k,{mauticConf:e,setMauticConf:n,step:a,setstep:m,isLoading:r,setIsLoading:o,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:a===2&&900,height:a===2&&"auto"},children:[t.jsx(y,{formFields:c,handleInput:h=>w(h,e,n,o,s),mauticConf:e,setMauticConf:n,isLoading:r,setIsLoading:o,setSnackbar:s}),t.jsxs("button",{onClick:()=>g(),disabled:e.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[b("Next","bit-integrations"),t.jsx(I,{className:"ml-1 rev-icn"})]})]}),t.jsx(M,{step:a,saveConfig:()=>v({flow:l,setFlow:p,allIntegURL:u,navigate:d,conf:e,setIsLoading:o,setSnackbar:s}),isLoading:r,dataConf:e,setDataConf:n,formFields:c})]})}export{J as default};