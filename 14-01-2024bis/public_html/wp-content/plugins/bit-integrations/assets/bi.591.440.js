import{i as b,u as j,r as i,j as e}from"./main-577.js";import{e as S,i as y}from"./bi.655.81.js";import{B as I}from"./bi.232.720.js";import{S as v}from"./bi.880.909.js";import{e as M}from"./bi.787.676.js";import{I as k}from"./bi.672.677.js";import _ from"./bi.150.310.js";import{c as N}from"./bi.106.869.js";import{M as w}from"./bi.184.870.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";function H({formFields:c,setFlow:p,flow:d,allIntegURL:f}){const u=b(),{formID:m}=j(),[o,n]=i.useState(!1),[s,l]=i.useState(1),[g,a]=i.useState({show:!1}),[t,r]=i.useState({name:"Sarbacane(Mailify)",type:"Sarbacane(Mailify)",account_id:"",api_key:"",field_map:[{formField:"",mailifyField:""}],actions:{}}),x=h=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),h===3){if(!N(t)){a({show:!0,msg:"Please map all required fields to continue."});return}if(!(t!=null&&t.listId)){a({show:!0,msg:"Please select list to continue."});return}t.name!==""&&t.field_map.length>0&&l(3)}};return e.jsxs("div",{children:[e.jsx(S,{snack:g,setSnackbar:a}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(v,{step:3,active:s})}),e.jsx(_,{formID:m,mailifyConf:t,setMailifyConf:r,step:s,setstep:l,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"auto"},children:[e.jsx(w,{formID:m,formFields:c,mailifyConf:t,setMailifyConf:r,isLoading:o,setIsLoading:n,setSnackbar:a}),e.jsxs("button",{onClick:()=>x(3),disabled:!(t!=null&&t.listId)||t.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[y("Next","bit-integrations")," "," ",e.jsx(I,{className:"ml-1 rev-icn"})]})]}),e.jsx(k,{step:s,saveConfig:()=>M(d,p,f,t,u,"","",n),isLoading:o,dataConf:t,setDataConf:r,formFields:c})]})}export{H as default};