var R=Object.defineProperty;var C=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var g=(s,t,a)=>t in s?R(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,h=(s,t)=>{for(var a in t||(t={}))w.call(t,a)&&g(s,a,t[a]);if(C)for(var a of C(t))A.call(t,a)&&g(s,a,t[a]);return s};import{i as E,r as l,j as r}from"./main-577.js";import{e as I,_ as D,d as i}from"./bi.655.81.js";import{S as T}from"./bi.880.909.js";import{e as O}from"./bi.787.676.js";import{I as L}from"./bi.672.677.js";import z from"./bi.37.300.js";import{h as B,c as x}from"./bi.994.851.js";import{C as W}from"./bi.287.852.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";function ae({formFields:s,setFlow:t,flow:a,allIntegURL:p}){const m=E(),[N,b]=l.useState(!1),[f,y]=l.useState({}),[o,k]=l.useState(1),[j,c]=l.useState({show:!1}),S=[{key:"name",label:"Name",required:!0},{key:"emailAddresses",label:"Email",required:!1},{key:"about",label:"About",required:!1},{key:"street",label:"Street",required:!1},{key:"city",label:"City",required:!1},{key:"state",label:"State",required:!1},{key:"zip",label:"Zip Code",required:!1},{key:"country",label:"Country",required:!1},{key:"phoneNumbers",label:"Phone",required:!1},{key:"websites",label:"Website",required:!1}],v=[{key:"firstName",label:"First Name",required:!0},{key:"lastName",label:"Last Name",required:!1},{key:"title",label:"Title",required:!1},{key:"jobTitle",label:"Job Title",required:!1},{key:"emailAddresses",label:"Email",required:!1},{key:"about",label:"About",required:!1},{key:"street",label:"Street",required:!1},{key:"city",label:"City",required:!1},{key:"state",label:"State",required:!1},{key:"zip",label:"Zip Code",required:!1},{key:"country",label:"Country",required:!1},{key:"phoneNumbers",label:"Phone",required:!1},{key:"websites",label:"Website",required:!1}],M=[{key:"name",label:"Opportunity Name",required:!0},{key:"description",label:"Opportunity Details",required:!1},{key:"value",label:"Bid Amount",required:!1},{key:"expectedCloseOn",label:"Expected Close Date",required:!1},{key:"closedOn",label:"Actual Close Date",required:!1}],_=[{key:"name",label:"Project Name",required:!0},{key:"description",label:"Description",required:!1},{key:"expectedCloseOn",label:"Expected Close Date",required:!1}],[e,n]=l.useState({name:"CapsuleCRM",type:"CapsuleCRM",api_key:"",api_url:"",field_map:[{formField:"",capsulecrmFormField:""}],actionName:"",organisationFields:S,personFields:v,opportunityFields:M,projectFields:_,actions:{}}),F=()=>{b(!0),O(a,t,p,e,m,"","",b).then(u=>{var q;u.success?(i.success((q=u.data)==null?void 0:q.msg),m(p)):i.error(u.data||u)})},P=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(e)){i.error("Please map mandatory fields");return}if(e.actionName==="opportunity"||e.actionName==="project"){if(!e.selectedCRMParty){i.error("Please select a party");return}if(!e.selectedCRMMilestones&&e.actionName==="opportunity"){i.error("Please select a Milestone");return}}e.field_map.length>0&&k(d)};return r.jsxs("div",{children:[r.jsx(I,{snack:j,setSnackbar:c}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(T,{step:3,active:o})}),r.jsx(z,{capsulecrmConf:e,setCapsuleCRMConf:n,step:o,setStep:k,loading:f,setLoading:y,setSnackbar:c}),r.jsxs("div",{className:"btcd-stp-page",style:h({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(W,{formFields:s,handleInput:d=>B(d,e,n),capsulecrmConf:e,setCapsuleCRMConf:n,loading:f,setLoading:y,setSnackbar:c}),(e==null?void 0:e.actionName)&&r.jsxs("button",{onClick:()=>P(3),disabled:!x(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[D("Next","bit-integrations")," "," ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&r.jsx(L,{step:o,saveConfig:()=>F(),isLoading:N,dataConf:e,setDataConf:n,formFields:s})]})}export{ae as default};
