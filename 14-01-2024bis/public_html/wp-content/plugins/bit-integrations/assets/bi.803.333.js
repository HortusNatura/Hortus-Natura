var k=Object.defineProperty;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var w=(s,t,e)=>t in s?k(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,v=(s,t)=>{for(var e in t||(t={}))C.call(t,e)&&w(s,e,t[e]);if(h)for(var e of h(t))_.call(t,e)&&w(s,e,t[e]);return s};import{i as I,r as c,j as i}from"./main-577.js";import{e as N,_ as B,d as p}from"./bi.655.81.js";import{S as F}from"./bi.880.909.js";import{e as q}from"./bi.787.676.js";import{h as E}from"./bi.785.699.js";import L from"./bi.960.263.js";import{I as M}from"./bi.672.677.js";import{T as P}from"./bi.195.700.js";import"./bi.934.737.js";import"./bi.827.680.js";import"./bi.587.674.js";function X({formFields:s,setFlow:t,flow:e,allIntegURL:u}){const g=I(),[m,a]=c.useState(!1),[r,x]=c.useState(1),[j,f]=c.useState({show:!1}),y=[{key:"To",label:"To",required:!0},{key:"Body",label:"Message Body",required:!0}],[o,n]=c.useState({name:"Twilio",type:"Twilio",sid:"",token:"",body:"",to:"",from_num:"",field_map:[{formField:"",twilioField:"To"},{formField:"",twilioField:"Body"}],twilioFields:y}),T=()=>{a(!0),q(e,t,u,o,g,"","",a).then(d=>{var b;d.success?(p.success((b=d.data)==null?void 0:b.msg),g(u)):p.error(d.data||d)})},S=l=>{if(o.to===""&&o.body===""){p.error("Please select To and Body field , it is required");return}x(l)};return i.jsxs("div",{children:[i.jsx(N,{snack:j,setSnackbar:f}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(F,{step:3,active:r})}),i.jsx(L,{twilioConf:o,setTwilioConf:n,step:r,setstep:x,isLoading:m,setIsLoading:a,setSnackbar:f}),i.jsxs("div",{className:"btcd-stp-page",style:v({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(P,{formFields:s,handleInput:l=>E(l,o,n),twilioConf:o,setTwilioConf:n,isLoading:m,setIsLoading:a,setSnackbar:f}),i.jsxs("button",{onClick:()=>S(3),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[B("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(M,{step:r,saveConfig:()=>T(),isLoading:m,dataConf:o,setDataConf:n,formFields:s})]})}export{X as default};