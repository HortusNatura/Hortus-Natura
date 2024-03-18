import{m as u,j as s,L as v}from"./main-577.js";import{B as N,_ as t}from"./bi.655.81.js";import{b,h as y,a as F,d as _}from"./bi.787.676.js";import{r as $,a as R}from"./bi.471.701.js";import{T as z}from"./bi.587.674.js";import{S}from"./bi.622.681.js";import{T}from"./bi.933.682.js";function w({i:d,formFields:x,field:c,marketingHubConf:l,setMarketingHubConf:i}){var n,m,h,a,p;const o=c.zohoFormField===""||((n=l.default.fields[l.list].required)==null?void 0:n.indexOf(c.zohoFormField))===-1,j=u(N),{isPro:r}=j;return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:c.formField||"",onChange:e=>b(e,d,l,i),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),s.jsx("optgroup",{label:"Form Fields",children:x.map(e=>e.type!=="file"&&s.jsx("option",{value:e.name,children:e.label},`ff-zhcrm-${e.name}`))}),s.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`General Smart Codes ${r?"":"(PRO)"}`,children:r&&((m=S)==null?void 0:m.map(e=>s.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),c.formField==="custom"&&s.jsx(T,{onChange:e=>y(e,d,l,i),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:c.customValue,placeholder:t("Custom Value","bit-integrations"),formFields:x}),s.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:c.zohoFormField||"",disabled:!o,onChange:e=>b(e,d,l,i),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),o?((p=(a=(h=l==null?void 0:l.default)==null?void 0:h.fields)==null?void 0:a[l.list])==null?void 0:p.fields)&&l.default.fields[l.list].fields.map(e=>e!=="Contact Email"&&s.jsx("option",{value:e,children:e},`${e}-1`)):s.jsx("option",{value:"Contact Email",children:t("Contact Email","bit-integrations")},"contact_email")]})]}),s.jsx("button",{onClick:()=>F(d,l,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),o&&s.jsx("button",{onClick:()=>_(d,l,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx(z,{})})]})}function M({formID:d,formFields:x,handleInput:c,marketingHubConf:l,setMarketingHubConf:i,isLoading:o,setIsLoading:j,setSnackbar:r}){var n,m,h;return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:t("List:","bit-integrations")}),s.jsxs("select",{onChange:a=>c(a),name:"list",value:l.list,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:t("Select List","bit-integrations")}),((n=l==null?void 0:l.default)==null?void 0:n.lists)&&Object.values(l.default.lists).map(a=>s.jsx("option",{value:a.listkey,children:a.listname},a.listkey))]}),s.jsx("button",{onClick:()=>$(d,l,i,j,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh MarketingHub Lists","bit-integrations")}'`},type:"button",disabled:o,children:"↻"}),s.jsx("br",{}),s.jsx("br",{}),o&&s.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.list&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:t("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>R(d,l,i,j,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh MarketingHub Contact Fields","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),((h=(m=l.default)==null?void 0:m.fields)==null?void 0:h[l.list])&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("Zoho Fields","bit-integrations")})})]}),l.field_map.map((a,p)=>s.jsx(w,{i:p,field:a,marketingHubConf:l,formFields:x,setMarketingHubConf:i},`marketingHub-m-${p+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>F(l.field_map.length,l,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})]})}export{M as Z};
