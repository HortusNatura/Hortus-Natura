var k=Object.defineProperty;var p=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(a,e,t)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,u=(a,e)=>{for(var t in e||(e={}))S.call(e,t)&&f(a,t,e[t]);if(p)for(var t of p(e))w.call(e,t)&&f(a,t,e[t]);return a};import{i as y,u as N,r,j as o}from"./main-577.js";import{e as _,_ as C}from"./bi.655.81.js";import{S as D}from"./bi.880.909.js";import{s as E}from"./bi.787.676.js";import{I as F}from"./bi.672.677.js";import q from"./bi.312.250.js";import{s as L,h as P,c as g}from"./bi.576.750.js";import{T as A}from"./bi.942.749.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.232.720.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function $({formFields:a,setFlow:e,flow:t,allIntegURL:x}){const b=y(),{formID:h}=N(),[c,d]=r.useState(!1),[n,m]=r.useState(1),[j,i]=r.useState({show:!1}),v=[{key:"name",label:"Name",required:!0},{key:"desc",label:"Description",required:!1},{key:"due",label:"Date",required:!1}],[s,l]=r.useState({name:"Trello",type:"Trello",clientId:"",listId:"",listName:"",tags:"",pos:"",field_map:[{formField:"",trelloFormField:""}],cardFields:v,address_field:[],actions:{}});r.useEffect(()=>{window.opener&&L("trello")},[]);const I=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!g(s)){i({show:!0,msg:"Please map fields to continue."});return}s.listId!==""&&m(3)};return o.jsxs("div",{children:[o.jsx(_,{snack:j,setSnackbar:i}),o.jsx("div",{className:"txt-center mt-2",children:o.jsx(D,{step:3,active:n})}),o.jsx(q,{formID:h,trelloConf:s,setTrelloConf:l,step:n,setstep:m,isLoading:c,setIsLoading:d,setSnackbar:i}),o.jsxs("div",{className:"btcd-stp-page",style:u({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[o.jsx(A,{formFields:a,handleInput:T=>P(T,s,l),trelloConf:s,setTrelloConf:l,isLoading:c,setIsLoading:d,setSnackbar:i}),o.jsxs("button",{onClick:()=>I(),disabled:!(s!=null&&s.listId)||!g(s),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[C("Next","bit-integrations")," "," ",o.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),o.jsx(F,{step:n,saveConfig:()=>E({flow:t,setFlow:e,allIntegURL:x,navigate:b,conf:s,setIsLoading:d,setSnackbar:i}),isLoading:c,dataConf:s,setDataConf:l,formFields:a})]})}export{$ as default};
