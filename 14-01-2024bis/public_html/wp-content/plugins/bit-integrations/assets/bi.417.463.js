var w=Object.defineProperty;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(r,a,t)=>a in r?w(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,x=(r,a)=>{for(var t in a||(a={}))A.call(a,t)&&h(r,t,a[t]);if(S)for(var t of S(a))F.call(a,t)&&h(r,t,a[t]);return r};import{i as z,r as i,j as s}from"./main-577.js";import{e as E,_ as L,d as l}from"./bi.655.81.js";import{S as M}from"./bi.880.909.js";import{e as R}from"./bi.787.676.js";import{I as T}from"./bi.672.677.js";import D from"./bi.419.324.js";import{h as O,c as v}from"./bi.652.897.js";import{S as Z}from"./bi.411.898.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";function ae({formFields:r,setFlow:a,flow:t,allIntegURL:m}){const p=z(),[b,u]=i.useState(!1),[y,k]=i.useState({}),[n,g]=i.useState(1),[N,f]=i.useState({show:!1}),P=[{key:"name",label:"Account name",required:!0},{key:"website",label:"Account website",required:!1},{key:"description",label:"Description",required:!1},{key:"size",label:"Size",required:!1},{key:"email",label:"Account email",required:!1},{key:"phone_number",label:"Phone",required:!1},{key:"street",label:"Street",required:!1},{key:"zip",label:"Zip/Postal Code",required:!1},{key:"city",label:"City",required:!1},{key:"region",label:"State/Region",required:!1},{key:"country",label:"Country",required:!1}],j=[{key:"firstname",label:"First Name",required:!0},{key:"Prefix",label:"Prefix",required:!1},{key:"middle",label:"Middle Name",required:!1},{key:"lastname",label:"Last Name",required:!1},{key:"email",label:"Email Address",required:!0},{key:"suffix",label:"Suffix",required:!1},{key:"phone_number",label:"Phone Number",required:!1},{key:"role",label:"Role",required:!1},{key:"organisation",label:"Organisation",required:!1},{key:"street",label:"Street",required:!1},{key:"zip",label:"Zip/Postal Code",required:!1},{key:"city",label:"City",required:!1},{key:"region",label:"State/Region",required:!1},{key:"country",label:"Country",required:!1}],_=[{key:"name",label:"Opportunity name",required:!0},{key:"value",label:"Value",required:!1},{key:"start_date",label:"Start date",required:!1},{key:"close_date",label:"Close date",required:!1}],[e,o]=i.useState({name:"Salesflare",type:"Salesflare",api_key:"",field_map:[{formField:"",salesflareFormField:""}],actionName:"",actionId:"",accountFields:P,contactFields:j,opportunitiyFields:_,actions:{}}),C=()=>{u(!0),R(t,a,m,e,p,"","",u).then(c=>{var q;c.success?(l.success((q=c.data)==null?void 0:q.msg),p(m)):l.error(c.data||c)})},I=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!v(e)){l.error("Please map mandatory fields");return}if(e.actionName==="opportunities"){if(!e.selectedAccount){l.error("Please select an Account");return}if(!e.selectedPipeline){l.error("Please select a Pipeline");return}if(e.selectedPipeline&&!e.selectedStage){l.error("Please select a Stage");return}}e.field_map.length>0&&g(d)};return s.jsxs("div",{children:[s.jsx(E,{snack:N,setSnackbar:f}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(M,{step:3,active:n})}),s.jsx(D,{salesflareConf:e,setSalesflareConf:o,step:n,setStep:g,loading:y,setLoading:k,setSnackbar:f}),s.jsxs("div",{className:"btcd-stp-page",style:x({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(Z,{formFields:r,handleInput:d=>O(d,e,o),salesflareConf:e,setSalesflareConf:o,loading:y,setLoading:k,isLoading:b,setIsLoading:u,setSnackbar:f}),(e==null?void 0:e.actionName)&&s.jsxs("button",{onClick:()=>I(3),disabled:!v(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[L("Next","bit-integrations")," "," ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&s.jsx(T,{step:n,saveConfig:()=>C(),isLoading:b,dataConf:e,setDataConf:o,formFields:r})]})}export{ae as default};
