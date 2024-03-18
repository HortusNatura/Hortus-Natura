var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var _=(i,r,s)=>r in i?$(i,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[r]=s,p=(i,r)=>{for(var s in r||(r={}))k.call(r,s)&&_(i,s,r[s]);if(y)for(var s of y(r))w.call(r,s)&&_(i,s,r[s]);return i};import{m as R,j as e,L as z}from"./main-577.js";import{B as M,_ as a}from"./bi.655.81.js";import{r as S,a as T}from"./bi.540.690.js";import{T as V}from"./bi.587.674.js";import{S as E}from"./bi.622.681.js";import{T as L}from"./bi.933.682.js";import{h as Z}from"./bi.787.676.js";const f=(i,r,s)=>{const t=p({},r);t.field_map.splice(i,0,{}),s(t)};function O({i,formFields:r,field:s,campaignsConf:t,setCampaignsConf:d}){var u,o,x,v,N;const c=R(M),{isPro:h}=c,n=s.zohoFormField===""||((u=t.default.fields[t.list].required)==null?void 0:u.indexOf(s.zohoFormField))===-1,j=l=>{const m=p({},t);m.field_map.length>1&&m.field_map.splice(l,1),d(m)},b=(l,m)=>{const F=p({},t);F.field_map[m][l.target.name]=l.target.value,l.target.value==="custom"&&(F.field_map[m].customValue=""),d(F)};return e.jsxs("div",{className:`flx flx-around mt-2 ${n&&"mr-1"}`,children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>b(l,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:r.map(l=>l.type!=="file"&&e.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${h?"":"(PRO)"}`,children:h&&((o=E)==null?void 0:o.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(L,{onChange:l=>Z(l,i,t,d),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:s.zohoFormField||"",disabled:!n,onChange:l=>b(l,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),n?((N=(v=(x=t==null?void 0:t.default)==null?void 0:x.fields)==null?void 0:v[t.list])==null?void 0:N.fields)&&t.default.fields[t.list].fields.map(l=>l!=="Contact Email"&&e.jsx("option",{value:l,children:l},`${l}-1`)):e.jsx("option",{value:"Contact Email",children:a("Contact Email","bit-integrations")},"contact_email")]}),e.jsx("button",{onClick:()=>f(i,t,d),className:`icn-btn sh-sm ml-2 ${!n&&"mr-8"}`,type:"button",children:"+"}),n&&e.jsx("button",{onClick:()=>j(i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(V,{})})]})}function K({formID:i,formFields:r,handleInput:s,campaignsConf:t,setCampaignsConf:d,isLoading:c,setIsLoading:h,setSnackbar:n}){var j,b,u;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("List:","bit-integrations")}),e.jsxs("select",{onChange:o=>s(o),name:"list",value:t.list,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:a("Select List","bit-integrations")}),((j=t==null?void 0:t.default)==null?void 0:j.lists)&&Object.values(t.default.lists).map(o=>e.jsx("option",{value:o.listkey,children:o.listname},o.listkey))]}),e.jsx("button",{onClick:()=>S(i,t,d,h,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Campaigns Lists","bit-integrations")}'`},type:"button",disabled:c,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),c&&e.jsx(z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.list&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>T(i,t,d,h,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Campaigns Contact Fields","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),((u=(b=t.default)==null?void 0:b.fields)==null?void 0:u[t.list])&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),t.field_map.map((o,x)=>e.jsx(O,{i:x,field:o,campaignsConf:t,formFields:r,setCampaignsConf:d},`campaigns-m-${x+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>f(t.field_map.length,t,d),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})]})}export{K as Z};
