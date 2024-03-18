var h=Object.defineProperty;var M=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var z=(t,l,a)=>l in t?h(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,p=(t,l)=>{for(var a in l||(l={}))I.call(l,a)&&z(t,a,l[a]);if(M)for(var a of M(l))$.call(l,a)&&z(t,a,l[a]);return t};import{r as q,j as e,L as v,m as T}from"./main-577.js";import{a6 as O,_ as r,f as R,a7 as F,B as V}from"./bi.655.81.js";import{g as _,a as k,b as B,d as E}from"./bi.74.863.js";import{S as K}from"./bi.622.681.js";import{M as G}from"./bi.827.680.js";function H({clinchPadConf:t,setClinchPadConf:l,loading:a,setLoading:s}){var c,o,b,x;const[n,m]=q.useState({show:!1,action:()=>{}}),u=(i,g)=>{var w,y;const j=p({},t);g==="parentOrganization"?(w=i.target)!=null&&w.checked?(_(t,l,s),j.actions.parentOrganization=!0):(m({show:!1}),delete j.actions.parentOrganization):g==="contact"&&((y=i.target)!=null&&y.checked?(k(t,l,s),j.actions.contact=!0):(m({show:!1}),delete j.actions.contact)),m({show:g}),l(p({},j))},d=()=>{m({show:!1})},N=(i,g)=>{const j=p({},t);j[g]=i,l(p({},j))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[t.actionName==="contact"&&e.jsx(O,{checked:((c=t==null?void 0:t.selectedParentOrganization)==null?void 0:c.length)||!1,onChange:i=>u(i,"parentOrganization"),className:"wdt-200 mt-4 mr-2",value:"parentOrganization",title:r("Add ParentOrganization","bit - integrations"),subTitle:r("Add an parentOrganization")}),t.actionName==="lead"&&e.jsx(O,{checked:((o=t==null?void 0:t.selectedContact)==null?void 0:o.length)||!1,onChange:i=>u(i,"contact"),className:"wdt-200 mt-4 mr-2",value:"contact",title:r("Add Contacts","bit - integrations"),subTitle:r("Add a contact")}),e.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:r("Ok","bit-integrations"),show:n.show==="parentOrganization",close:d,action:d,title:r("ParentOrganizations","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:r("Select ParentOrganization","bit-integrations")}),a.parentOrganizations?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(F,{options:(b=t==null?void 0:t.parentOrganizations)==null?void 0:b.map(i=>({label:i.name,value:i.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedParentOrganization,onChange:i=>N(i,"selectedParentOrganization"),singleSelect:!0}),e.jsx("button",{onClick:()=>_(t,l,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${r("Refresh ParentOrganizations","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:r("Ok","bit-integrations"),show:n.show==="contact",close:d,action:d,title:r("Contacts","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:r("Select Contact","bit-integrations")}),a.CRMContacts?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(F,{options:(x=t==null?void 0:t.CRMContacts)==null?void 0:x.map(i=>({label:i.name,value:i.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedContact,onChange:i=>N(i,"selectedContact"),singleSelect:!0}),e.jsx("button",{onClick:()=>k(t,l,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${r("Refresh Contacts","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const A=(t,l,a)=>{const s=p({},l);s.field_map.splice(t,0,{}),a(p({},s))},D=(t,l,a)=>{const s=p({},l);s.field_map.length>1&&s.field_map.splice(t,1),a(p({},s))},S=(t,l,a,s)=>{const n=p({},a);n.field_map[l][t.target.name]=t.target.value,t.target.value==="custom"&&(n.field_map[l].customValue=""),t.target.value==="customFieldKey"&&(n.field_map[l].customFieldKey=""),s(p({},n))},J=(t,l,a,s,n)=>{const m=p({},a);m.field_map[l][n]=t.target.value,s(p({},m))};function Q({field:t,index:l,conf:a,setConf:s,fieldValue:n,fieldLabel:m,className:u}){return e.jsx(G,{onChange:d=>J(d,l,a,s,n),label:r(m,"bit-integrations"),className:u,type:"text",value:t[n],placeholder:r(m,"bit-integrations")})}function U({i:t,formFields:l,field:a,clinchPadConf:s,setClinchPadConf:n}){var b,x;let m=[];s.actionName==="organization"?m=s==null?void 0:s.organizationFields:s.actionName==="contact"?m=s==null?void 0:s.contactFields:s.actionName==="lead"&&(m=s==null?void 0:s.leadFields);const u=m.filter(i=>i.required===!0)||[],N=[...m.filter(i=>i.required===!1)||[],...(s==null?void 0:s.customFields)||[]];if(((b=s==null?void 0:s.field_map)==null?void 0:b.length)===1&&a.clinchPadFormField===""){const i=p({},s),g=B(i);i.field_map=g,n(i)}const c=T(V),{isPro:o}=c;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:i=>S(i,t,s,n),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:l==null?void 0:l.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${o?"":"(PRO)"}`,children:o&&((x=K)==null?void 0:x.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),a.formField==="custom"&&e.jsx(Q,{field:a,index:t,conf:s,setConf:n,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<u.length,name:"clinchPadFormField",value:t<u?u[t].label||"":a.clinchPadFormField||"",onChange:i=>S(i,t,s,n),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),t<u.length?e.jsx("option",{value:u[t].key,children:u[t].label},u[t].key):N.map(({key:i,label:g})=>e.jsx("option",{value:i,children:g},i))]})]}),t>=u.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>A(t,s,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>D(t,s,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function C({formFields:t,handleInput:l,clinchPadConf:a,setClinchPadConf:s,loading:n,setLoading:m,setSnackbar:u}){var c;const d=o=>{const b=p({},a);b.field_map=[{formField:"",clinchPadFormField:""}];const{name:x}=o.target;o.target.value!==""?(b[x]=o.target.value,o.target.value==="lead"&&E(b,s,m)):delete b[x],s(p({},b))},N=(o,b)=>{const x=p({},a);x[b]=o,s(p({},x))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:d,name:"actionName",value:a.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:r("Select an action","bit-integrations")}),e.jsx("option",{value:"organization",children:r("Create Organization","bit-integrations")}),e.jsx("option",{value:"contact",children:r("Create Contact","bit-integrations")}),e.jsx("option",{value:"lead",children:r("Create Lead","bit-integrations")})]}),n.CRMPipelines&&e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.actionName==="lead"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Pipeline:","bit-integrations")}),e.jsx(F,{options:(c=a==null?void 0:a.CRMPipelines)==null?void 0:c.map(o=>({label:o.name,value:o.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:a==null?void 0:a.selectedCRMPipeline,onChange:o=>N(o,"selectedCRMPipeline"),disabled:n.CRMPipelines,singleSelect:!0})]})]}),n.customFields&&e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.actionName&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>getCustomFields(a,s,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Fields","bit-integrations")}'`},type:"button",disabled:n.CRMPipelines,children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("ClinchPad Fields","bit-integrations")})})]}),a==null?void 0:a.field_map.map((o,b)=>e.jsx(U,{i:b,field:o,clinchPadConf:a,formFields:t,setClinchPadConf:s,setSnackbar:u},`rp-m-${b+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>A(a.field_map.length,a,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(H,{clinchPadConf:a,setClinchPadConf:s,formFields:t,loading:n,setLoading:m})]})]})}export{C};
