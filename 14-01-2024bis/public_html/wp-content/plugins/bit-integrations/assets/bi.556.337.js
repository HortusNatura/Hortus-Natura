var S=Object.defineProperty;var y=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(t,e,a)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))_.call(e,a)&&g(t,a,e[a]);if(y)for(var a of y(e))I.call(e,a)&&g(t,a,e[a]);return t};import{i as R,r as f,j as i}from"./main-577.js";import{e as w,_ as C,d as c}from"./bi.655.81.js";import{S as N}from"./bi.880.909.js";import{e as F}from"./bi.787.676.js";import{I as T}from"./bi.672.677.js";import L from"./bi.112.229.js";import{h as z,c as B}from"./bi.439.697.js";import{R as M}from"./bi.640.698.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function U({formFields:t,setFlow:e,flow:a,allIntegURL:u}){const x=R(),[m,s]=f.useState(!1),[l,b]=f.useState(1),[q,p]=f.useState({show:!1}),v=[{key:"email",label:"Email",required:!0},{key:"firstname",label:"First name",required:!1},{key:"lastname",label:"Last name",required:!1},{key:"gender",label:"Gender",required:!1},{key:"title",label:"Title",required:!1},{key:"zip",label:"Zip",required:!1},{key:"birthdate",label:"Birthdate",required:!1},{key:"extra1",label:"Extra field 1",required:!1},{key:"extra2",label:"Extra field 2",required:!1},{key:"extra3",label:"Extra field 3",required:!1},{key:"extra4",label:"Extra field 4",required:!1},{key:"extra5",label:"Extra field 5",required:!1},{key:"extra6",label:"Extra field 6",required:!1},{key:"extra7",label:"Extra field 7",required:!1},{key:"extra8",label:"Extra field 8",required:!1},{key:"extra9",label:"Extra field 9",required:!1},{key:"extra10",label:"Extra field 10",required:!1}],[r,d]=f.useState({name:"Rapidmail",type:"Rapidmail",username:"",password:"",field_map:[{formField:"",rapidmailFormField:""}],recipientsFields:v,actions:{send_activationmail:!1}}),E=()=>{s(!0),F(a,e,u,r,x,"","",s).then(o=>{var k;o.success?(c.success((k=o.data)==null?void 0:k.msg),x(u)):c.error(o.data||o)})},j=n=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!B(r)){c.error("Please map mandatory fields");return}r.field_map.length>0&&b(n)};return i.jsxs("div",{children:[i.jsx(w,{snack:q,setSnackbar:p}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(N,{step:3,active:l})}),i.jsx(L,{rapidmailConf:r,setRapidmailConf:d,step:l,setstep:b,isLoading:m,setIsLoading:s,setSnackbar:p}),i.jsxs("div",{className:"btcd-stp-page",style:h({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(M,{formFields:t,handleInput:n=>z(n,r,d),rapidmailConf:r,setRapidmailConf:d,isLoading:m,setIsLoading:s,setSnackbar:p}),i.jsxs("button",{onClick:()=>j(3),disabled:!(r!=null&&r.recipient_id),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[C("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(T,{step:l,saveConfig:()=>E(),isLoading:m,dataConf:r,setDataConf:d,formFields:t})]})}export{U as default};