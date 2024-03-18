var $=Object.defineProperty;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(d,t,l)=>t in d?$(d,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):d[t]=l,b=(d,t)=>{for(var l in t||(t={}))I.call(t,l)&&_(d,l,t[l]);if(w)for(var l of w(t))L.call(t,l)&&_(d,l,t[l]);return d};import{m as R,j as e,L as k}from"./main-577.js";import{B as T,i as c,a6 as q}from"./bi.655.81.js";import{a as O}from"./bi.787.676.js";import{r as S,a as M}from"./bi.106.869.js";import{T as A}from"./bi.587.674.js";import{S as B}from"./bi.622.681.js";import{M as H}from"./bi.827.680.js";function P({i:d,formFields:t,field:l,mailifyConf:a,setMailifyConf:r}){var g,v,N,F;const n=l.required,p=((g=a==null?void 0:a.default)==null?void 0:g.fields)&&Object.values((v=a==null?void 0:a.default)==null?void 0:v.fields).filter(s=>!s.required),j=R(T),{isPro:x}=j,u=s=>{const i=b({},a);i.field_map.splice(s,0,{}),r(i)},o=s=>{const i=b({},a);i.field_map.length>1&&i.field_map.splice(s,1),r(i)},m=(s,i)=>{const h=b({},a);h.field_map[i][s.target.name]=s.target.value,s.target.value==="custom"&&(h.field_map[i].customValue=""),r(h)},V=(s,i)=>{const h=b({},a);h.field_map[i].customValue=s.target.value,r(h)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:s=>m(s,d),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"List Fields",children:t==null?void 0:t.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${x?"":"(PRO)"}`,children:x&&((N=B)==null?void 0:N.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),l.formField==="custom"&&e.jsx(H,{onChange:s=>V(s,d),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:c("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"mailifyField",value:l.mailifyField||"",onChange:s=>m(s,d),disabled:n,children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),n?((F=a==null?void 0:a.default)==null?void 0:F.fields)&&Object.values(a.default.fields).map(s=>e.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`)):p&&p.map(s=>e.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`))]})]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>u(d),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>o(d),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(A,{})})]})]})}function U({mailifyConf:d,setMailifyConf:t}){var a;const l=(r,n)=>{const p=b({},d);n==="update"&&(r.target.checked?p.actions.update=!0:delete p.actions.update),t(b({},p))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(q,{checked:((a=d.actions)==null?void 0:a.update)||!1,onChange:r=>l(r,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:c("Update Mailify","bit-integrations"),subTitle:c("Update Responses with Mailify existing email?","bit-integrations")})})}function X({formFields:d,mailifyConf:t,setMailifyConf:l,isLoading:a,setIsLoading:r,setSnackbar:n}){var j,x;const p=u=>{const o=u.target.value,m=b({},t);o&&(m.listId=o),M(m,l,r,n)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("List:","bit-integrations")}),e.jsxs("select",{value:t==null?void 0:t.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:p,children:[e.jsx("option",{value:"",children:c("Select List","bit-integrations")}),((j=t==null?void 0:t.default)==null?void 0:j.mailifyLists)&&Object.keys(t.default.mailifyLists).map(u=>e.jsx("option",{value:t.default.mailifyLists[u].listId,children:t.default.mailifyLists[u].listName},`${u+1}`))]}),e.jsx("button",{onClick:()=>S(t,l,r,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Mailify list"'},type:"button",disabled:a,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),a&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:c("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>M(t,l,r,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Mailify Field","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),((t==null?void 0:t.listId)||((x=t==null?void 0:t.default)==null?void 0:x.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("List Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Mailify Fields","bit-integrations")})})]}),t.field_map.map((u,o)=>e.jsx(P,{i:o,field:u,mailifyConf:t,formFields:d,setMailifyConf:l},`Mailify-m-${o+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>O(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(U,{mailifyConf:t,setMailifyConf:l})]})]})}export{X as M};