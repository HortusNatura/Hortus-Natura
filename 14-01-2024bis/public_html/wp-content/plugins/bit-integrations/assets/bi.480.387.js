var S=Object.defineProperty;var p=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(a,t,s)=>t in a?S(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,b=(a,t)=>{for(var s in t||(t={}))M.call(t,s)&&f(a,s,t[s]);if(p)for(var s of p(t))N.call(t,s)&&f(a,s,t[s]);return a};import{i as T,u as G,m as P,r as d,j as i}from"./main-577.js";import{B as F,e as C,_ as E}from"./bi.655.81.js";import{S as L}from"./bi.880.909.js";import U from"./bi.200.261.js";import{h as D,c as R,b as z}from"./bi.206.771.js";import{G as B}from"./bi.987.772.js";import{I as O}from"./bi.672.677.js";import{s as Z}from"./bi.787.676.js";import"./bi.232.720.js";import"./bi.934.737.js";import"./bi.622.681.js";import"./bi.152.696.js";import"./bi.143.673.js";import"./bi.933.682.js";import"./bi.265.683.js";import"./bi.827.680.js";import"./bi.587.674.js";function de({formFields:a,setFlow:t,flow:s,allIntegURL:g}){var u;const h=T(),{formID:y}=G(),k=P(F),{siteURL:_}=k,[o,c]=d.useState(!1),[n,m]=d.useState(1),[x,r]=d.useState({show:!1}),A=[{key:"email",label:"Email",required:!0},{key:"first_name",label:"First Name",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"user_id",label:"User Id",required:!1},{key:"owner_id",label:"Owner Id",required:!1},{key:"note",label:"Note",required:!1}],w=[{key:"primary_phone",label:"Primary Phone",required:!1},{key:"street_address_1",label:"Street Address 1",required:!1},{key:"street_address_2",label:"Street Address 2",required:!1},{key:"postal_zip",label:"Postal Zip",required:!1},{key:"city",label:"City",required:!1},{key:"country",label:"Country",required:!1}],j=[{key:"1",label:"Create Contact"},{key:"2",label:"Add tag to user"}],[e,l]=d.useState({name:"Groundhogg",type:"Groundhogg",domainName:_,token:"",public_key:"",id:"",mainAction:"",addTagToUser:"",emailAddress:"",showMeta:!1,optin_status:"1",field_map:[{formField:"",GroundhoggMapField:""}],field_map_meta:[{formField:"",GroundhoggMetaMapField:""}],contactsFields:A,contactMetaFields:w,allActions:j,address_field:[],actions:{}}),q=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e.mainAction==="1"&&!R(e)){r({show:!0,msg:"Please map fields to continue."});return}if(e.showMeta&&!z(e)){r({show:!0,msg:"Please map fields to continue."});return}if(e.mainAction==="2"&&(e==null?void 0:e.emailAddress)===""){r({show:!0,msg:"Please select Email field to continue."});return}if(e.mainAction==="2"&&(e==null?void 0:e.addTagToUser)===""){r({show:!0,msg:"Please select All Tags field to continue."});return}e.listId!==""&&m(3)},v=!(e.mainAction==="2"&&e.addTagToUser!=="");return i.jsxs("div",{children:[i.jsx(C,{snack:x,setSnackbar:r}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(L,{step:3,active:n})}),i.jsx(U,{formID:y,groundhoggConf:e,setGroundhoggConf:l,step:n,setstep:m,isLoading:o,setIsLoading:c,setSnackbar:r}),i.jsxs("div",{className:"btcd-stp-page",style:b({},n===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(B,{formFields:a,handleInput:I=>D(I,e,l),groundhoggConf:e,setGroundhoggConf:l,isLoading:o,setIsLoading:c,setSnackbar:r}),i.jsxs("button",{onClick:()=>q(),disabled:(e.mainAction==="2"?v:!(((u=e.field_map)==null?void 0:u.length)>=1))||o,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[E("Next","bit-integrations")," "," ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(O,{step:n,saveConfig:()=>Z({flow:s,setFlow:t,allIntegURL:g,navigate:h,conf:e,setIsLoading:c,setSnackbar:r}),isLoading:o,dataConf:e,setDataConf:l,formFields:a})]})}export{de as default};