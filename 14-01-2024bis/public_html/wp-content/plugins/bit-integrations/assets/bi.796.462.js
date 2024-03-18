var A=Object.defineProperty;var _=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(s,a,r)=>a in s?A(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,N=(s,a)=>{for(var r in a||(a={}))F.call(a,r)&&h(s,r,a[r]);if(_)for(var r of _(a))I.call(a,r)&&h(s,r,a[r]);return s};import{i as L,r as l,j as t}from"./main-577.js";import{e as O,_ as T,d as i}from"./bi.655.81.js";import{S as w}from"./bi.880.909.js";import{e as E}from"./bi.787.676.js";import{I as D}from"./bi.672.677.js";import H from"./bi.221.323.js";import{h as R,c as x}from"./bi.139.895.js";import{O as z}from"./bi.739.896.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.934.737.js";import"./bi.622.681.js";function ae({formFields:s,setFlow:a,flow:r,allIntegURL:b}){const y=L(),[f,u]=l.useState(!1),[p,k]=l.useState({}),[d,q]=l.useState(1),[C,c]=l.useState({show:!1}),S=[{key:"customer_name",label:"Full Name",required:!0},{key:"mobile_no",label:"Mobile Number",required:!1},{key:"email_id",label:"Email Address",required:!1},{key:"primary_address",label:"Primary Address",required:!1},{key:"customer_primary_contact",label:"customer Primary Contact",required:!1},{key:"customer_primary_address",label:"customer Primary Address",required:!1}],v=[{key:"first_name",label:"First Name",required:!0},{key:"middle_name",label:"Middle Name",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"email_id",label:"Email Address",required:!1},{key:"designation",label:"Designation",required:!1},{key:"phone",label:"Phone Number",required:!1},{key:"mobile_no",label:"Mobile Number",required:!1},{key:"gender",label:"Gender",required:!1},{key:"department",label:"Department",required:!1},{key:"company_name",label:"Company Name",required:!1}],j=[{key:"lead_name",label:"Person Name",required:!0},{key:"company_name",label:"Organization Name",required:!0},{key:"email_id",label:"Email Address",required:!1},{key:"title",label:"Title",required:!1},{key:"phone",label:"Phone Number",required:!1},{key:"mobile_no",label:"Mobile Number",required:!1},{key:"fax",label:"Fax",required:!1},{key:"designation",label:"Designation",required:!1},{key:"gender",label:"Gender",required:!1},{key:"campaign_name",label:"Campaign Name",required:!1},{key:"website",label:"Website",required:!1},{key:"notes",label:"Notes",required:!1},{key:"address_title",label:"Address Title",required:!1},{key:"address_line1",label:"Address Line 1",required:!1},{key:"address_line2",label:"Address Line 2",required:!1},{key:"city",label:"City",required:!1},{key:"county",label:"County",required:!1},{key:"state",label:"State",required:!1},{key:"pincode",label:"Postal Code",required:!1},{key:"country",label:"Country",required:!1}],[e,n]=l.useState({name:"OneHashCRM",type:"OneHashCRM",api_key:"",api_secret:"",domain:"",field_map:[{formField:"",oneHashCRMFormField:""}],actionName:"",actionId:"",customerFields:S,contactFields:v,leadFields:j,actions:{}}),P=()=>{u(!0),E(r,a,b,e,y,"","",u).then(m=>{var g;m.success?(i.success((g=m.data)==null?void 0:g.msg),y(b)):i.error(m.data||m)})},M=o=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!x(e)){i.error("Please map mandatory fields");return}if(e.actionName==="customer"&&!e.selectedCustomerType){i.error("Please select Customer Type");return}if(e.actionName==="lead"&&!e.selectedLeadStatus){i.error("Please select Lead Status");return}e.field_map.length>0&&q(o)};return t.jsxs("div",{children:[t.jsx(O,{snack:C,setSnackbar:c}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(w,{step:3,active:d})}),t.jsx(H,{oneHashCRMConf:e,setOneHashCRMConf:n,step:d,setStep:q,loading:p,setLoading:k,setSnackbar:c}),t.jsxs("div",{className:"btcd-stp-page",style:N({},d===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(z,{formFields:s,handleInput:o=>R(o,e,n),oneHashCRMConf:e,setOneHashCRMConf:n,loading:p,setLoading:k,isLoading:f,setIsLoading:u,setSnackbar:c}),(e==null?void 0:e.actionName)&&t.jsxs("button",{onClick:()=>M(3),disabled:!x(e),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[T("Next","bit-integrations")," "," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(e==null?void 0:e.actionName)&&t.jsx(D,{step:d,saveConfig:()=>P(),isLoading:f,dataConf:e,setDataConf:n,formFields:s})]})}export{ae as default};
