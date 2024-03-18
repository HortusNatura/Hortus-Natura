var P=Object.defineProperty;var k=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(a,t,s)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,S=(a,t)=>{for(var s in t||(t={}))w.call(t,s)&&v(a,s,t[s]);if(k)for(var s of k(t))D.call(t,s)&&v(a,s,t[s]);return a};import{i as F,r as o,j as r}from"./main-577.js";import{e as q,_ as L,d as i}from"./bi.655.81.js";import{S as T}from"./bi.880.909.js";import{e as E}from"./bi.787.676.js";import{I as M}from"./bi.672.677.js";import z from"./bi.533.306.js";import{h as A,c as j}from"./bi.701.861.js";import{C as B}from"./bi.737.862.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";function U({formFields:a,setFlow:t,flow:s,allIntegURL:p}){const u=F(),[y,f]=o.useState(!1),[g,b]=o.useState({}),[n,h]=o.useState(1),[C,m]=o.useState({show:!1}),N=[{key:"name",label:"Name",required:!0},{key:"description",label:"Description",required:!1},{key:"start_date",label:"Start Date",required:!1},{key:"due_date",label:"Due Date",required:!1}],[e,c]=o.useState({name:"Clickup",type:"Clickup",api_key:"",field_map:[{formField:"",clickupFormField:""}],actionName:"",taskFields:N,actions:{}}),_=()=>{f(!0),E(s,t,p,e,u,"","",f).then(d=>{var x;d.success?(i.success((x=d.data)==null?void 0:x.msg),u(p)):i.error(d.data||d)})},I=l=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!j(e)){i.error("Please map mandatory fields");return}if(e.actionName==="task"){if(!e.selectedTeam){i.error("Please select a team");return}if(!e.selectedSpace){i.error("Please select a space");return}if(!e.selectedFolder){i.error("Please select a folder");return}if(!e.selectedList){i.error("Please select a list");return}}e.field_map.length>0&&h(l)};return r.jsxs("div",{children:[r.jsx(q,{snack:C,setSnackbar:m}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(T,{step:3,active:n})}),r.jsx(z,{clickupConf:e,setClickupConf:c,step:n,setStep:h,loading:g,setLoading:b,setSnackbar:m}),r.jsxs("div",{className:"btcd-stp-page",style:S({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(B,{formFields:a,handleInput:l=>A(l,e,c),clickupConf:e,setClickupConf:c,loading:g,setLoading:b,setSnackbar:m}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>I(3),disabled:!j(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(M,{step:n,saveConfig:()=>_(),isLoading:y,dataConf:e,setDataConf:c,formFields:a})]})}export{U as default};