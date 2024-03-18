var w=Object.defineProperty;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var F=(t,e,c)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[e]=c,d=(t,e)=>{for(var c in e||(e={}))y.call(e,c)&&F(t,c,e[c]);if(g)for(var c of g(e))k.call(e,c)&&F(t,c,e[c]);return t};import{j as s,m as I,r as v,L}from"./main-577.js";import{a6 as S,_ as n,B as $,a7 as A}from"./bi.655.81.js";import{g as E,m as V,a as R}from"./bi.285.818.js";import{S as T}from"./bi.622.681.js";import{T as q}from"./bi.933.682.js";import{h as z}from"./bi.787.676.js";function B({mailjetConf:t,setMailjetConf:e}){var l;const c=r=>{const i=d({},t);r.target.checked?i.actions.IsExcludedFromCampaigns=!0:delete i.actions.IsExcludedFromCampaigns,e(d({},i))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(S,{checked:((l=t.actions)==null?void 0:l.IsExcludedFromCampaigns)||!1,onChange:r=>c(r),className:"wdt-200 mt-4 mr-2",value:"update_subscriber",title:n("Is excluded from campaigns","bit-integrations"),subTitle:n("Indicates whether the contact is added to the exclusion list for campaigns or not. An excluded contact will not be receiving any marketing emails.","bit-integrations")})})}const _=(t,e,c)=>{const l=d({},e);l.field_map.splice(t,0,{}),c(d({},l))},G=(t,e,c)=>{const l=d({},e);l.field_map.length>1&&l.field_map.splice(t,1),c(d({},l))},N=(t,e,c,l)=>{const r=d({},c);r.field_map[e][t.target.name]=t.target.value,t.target.value==="custom"&&(r.field_map[e].customValue=""),l(d({},r))};function P({i:t,formFields:e,field:c,mailjetConf:l,setMailjetConf:r}){var p,u,m;const i=(l==null?void 0:l.staticFields.filter(a=>a.required===!0))||[],x=((p=l==null?void 0:l.customFields)==null?void 0:p.filter(a=>a.required===!1))||[];if(((u=l==null?void 0:l.field_map)==null?void 0:u.length)===1&&c.mailjetFormField===""){const a=d({},l),o=E(a);a.field_map=o,r(a)}const b=I($),{isPro:h}=b;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:c.formField||"",onChange:a=>N(a,t,l,r),children:[s.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),s.jsx("optgroup",{label:"Form Fields",children:e==null?void 0:e.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),s.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`General Smart Codes ${h?"":"(PRO)"}`,children:h&&((m=T)==null?void 0:m.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),c.formField==="custom"&&s.jsx(q,{onChange:a=>z(a,t,l,r),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:c.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:e}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<i.length,name:"mailjetFormField",value:t<i?i[t].label||"":c.mailjetFormField||"",onChange:a=>N(a,t,l,r),children:[s.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t<i.length?s.jsx("option",{value:i[t].key,children:i[t].label},i[t].key):x.map(({key:a,label:o})=>s.jsx("option",{value:a,children:o},a))]})]}),t>=i.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>_(t,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>G(t,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function U({formFields:t,mailjetConf:e,setMailjetConf:c,loading:l,setLoading:r,setSnackbar:i}){var m;const[x,b]=v.useState({name:"",auth_token:""}),[h,p]=v.useState(!1),u=a=>{const o=d({},e);o.selectedLists=a,c(d({},o))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx mt-2",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Lists:","bit-integrations")}),s.jsx(A,{options:(m=e==null?void 0:e.lists)==null?void 0:m.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLists,onChange:a=>u(a)}),s.jsx("button",{onClick:()=>V(e,c,b,p,l,r,"refreshLists"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]}),l.lists&&s.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsxs("b",{className:"wdt-100",children:[n("Field Map","bit-integrations"),s.jsx("button",{onClick:()=>R(e,c,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:l.customFields,children:"↻"})]})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:n("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:n("Mailjet Fields","bit-integrations")})})]}),(e==null?void 0:e.selectedLists)&&(e==null?void 0:e.field_map.map((a,o)=>s.jsx(P,{i:o,field:a,mailjetConf:e,formFields:t,setMailjetConf:c,setSnackbar:i},`rp-m-${o+9}`))),(e==null?void 0:e.selectedLists)&&s.jsxs("div",{children:[s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>_(e.field_map.length,e,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:n("Actions","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(B,{mailjetConf:e,setMailjetConf:c})]})]})]})}export{U as M};
