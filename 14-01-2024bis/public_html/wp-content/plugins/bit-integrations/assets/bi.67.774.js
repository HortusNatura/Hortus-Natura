var q=Object.defineProperty;var _=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var x=(a,s,i)=>s in a?q(a,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[s]=i,p=(a,s)=>{for(var i in s||(s={}))k.call(s,i)&&x(a,i,s[i]);if(_)for(var i of _(s))A.call(s,i)&&x(a,i,s[i]);return a};import{r as g,m as v,j as l,L as R}from"./main-577.js";import{B as o,_ as n,a7 as I}from"./bi.655.81.js";import{h as U,a as P}from"./bi.787.676.js";import{g as E,a as G,b as O,f as T}from"./bi.929.773.js";import{S as N}from"./bi.622.681.js";import{T as z}from"./bi.933.682.js";import{M as V}from"./bi.827.680.js";const B=(a,s,i)=>{const t=p({},s);t.field_map.splice(a,0,{}),i(p({},t))},H=(a,s,i)=>{const t=p({},s);t.field_map.length>1&&t.field_map.splice(a,1),i(p({},t))},w=(a,s,i,t)=>{const c=p({},i);c.field_map[s][a.target.name]=a.target.value,a.target.value==="custom"&&(c.field_map[s].customValue=""),t(p({},c))},y=(a,s,i,t)=>{const c=p({},i);c.field_map_list[s][a.target.name]=a.target.value,a.target.value==="custom"&&(c.field_map_list[s].customValue=""),t(p({},c))},D=(a,s,i,t)=>{const c=p({},i);c.field_map_list[s].customValue=a.target.value,t(p({},c))},L=(a,s,i)=>{const t=p({},s);t.field_map_list.splice(a,0,{}),i(p({},t))},$=(a,s,i)=>{const t=p({},s);t.field_map_list.length>1&&t.field_map_list.splice(a,1),i(p({},t))},M=(a,s,i,t)=>{const c=p({},i);c.field_map_unsubscribe[s][a.target.name]=a.target.value,a.target.value==="custom"&&(c.field_map_unsubscribe[s].customValue=""),t(p({},c))},J=(a,s,i,t)=>{const c=p({},i);c.field_map_unsubscribe[s].customValue=a.target.value,t(p({},c))};function K({i:a,formFields:s,field:i,sendFoxConf:t,setSendFoxConf:c}){var b;g.useEffect(()=>{var e;if(((e=t==null?void 0:t.field_map)==null?void 0:e.length)===1&&i.sendFoxFormField===""){const r=p({},t),j=E(r);r.field_map=j,c(r)}});const m=(t==null?void 0:t.contactFields.filter(e=>e.required===!0))||[],d=(t==null?void 0:t.contactFields.filter(e=>e.required===!1))||[],h=v(o),{isPro:u}=h;return l.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:l.jsxs("div",{className:"pos-rel flx",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:e=>w(e,a,t,c),children:[l.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),l.jsx("optgroup",{label:"Form Fields",children:s==null?void 0:s.map(e=>l.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),l.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),l.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((b=N)==null?void 0:b.map(e=>l.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),i.formField==="custom"&&l.jsx(z,{onChange:e=>U(e,a,t,c),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:s}),l.jsxs("select",{className:"btcd-paper-inp",disabled:a<m.length,name:"sendFoxFormField",value:a<m.length?m[a].key||"":i.sendFoxFormField||"",onChange:e=>w(e,a,t,c),children:[l.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),a<m.length?l.jsx("option",{value:m[a].key,children:m[a].label},m[a].key):d.map(({key:e,label:r})=>l.jsx("option",{value:e,children:r},e))]})]}),a>=m.length&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>B(a,t,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>H(a,t,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Q({i:a,formFields:s,field:i,sendFoxConf:t,setSendFoxConf:c}){var b;g.useEffect(()=>{var e;if(((e=t==null?void 0:t.field_map_list)==null?void 0:e.length)===1&&i.sendFoxListFormField===""){const r=p({},t),j=G(r);r.field_map_list=j,c(r)}});const m=(t==null?void 0:t.listFields.filter(e=>e.required===!0))||[],d=(t==null?void 0:t.listFields.filter(e=>e.required===!1))||[],h=v(o),{isPro:u}=h;return l.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:l.jsxs("div",{className:"pos-rel flx",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:e=>y(e,a,t,c),children:[l.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),l.jsx("optgroup",{label:"Form Fields",children:s==null?void 0:s.map(e=>l.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),l.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),l.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((b=N)==null?void 0:b.map(e=>l.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),i.formField==="custom"&&l.jsx(V,{onChange:e=>D(e,a,t,c),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:n("Custom Value","bit-integrations")}),l.jsxs("select",{className:"btcd-paper-inp",disabled:a<m.length,name:"sendFoxListFormField",value:a<m.length?m[a].key||"":i.sendFoxListFormField||"",onChange:e=>y(e,a,t,c),children:[l.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),a<m.length?l.jsx("option",{value:m[a].key,children:m[a].label},m[a].key):d.map(({key:e,label:r})=>l.jsx("option",{value:e,children:r},e))]})]}),a>=m.length&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>L(a,t,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>$(a,t,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function W({i:a,formFields:s,field:i,sendFoxConf:t,setSendFoxConf:c}){var b;g.useEffect(()=>{var e;if(((e=t==null?void 0:t.field_map_unsubscribe)==null?void 0:e.length)===1&&i.sendFoxUnsubscribeFormField===""){const r=p({},t),j=O(r);r.field_map_unsubscribe=j,c(r)}});const m=(t==null?void 0:t.unsubscribeFields.filter(e=>e.required===!0))||[],d=(t==null?void 0:t.unsubscribeFields.filter(e=>e.required===!1))||[],h=v(o),{isPro:u}=h;return l.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:l.jsxs("div",{className:"pos-rel flx",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:e=>M(e,a,t,c),children:[l.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),l.jsx("optgroup",{label:"Form Fields",children:s==null?void 0:s.map(e=>l.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),l.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),l.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((b=N)==null?void 0:b.map(e=>l.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),i.formField==="custom"&&l.jsx(V,{onChange:e=>J(e,a,t,c),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:n("Custom Value","bit-integrations")}),l.jsxs("select",{className:"btcd-paper-inp",disabled:a<m.length,name:"sendFoxUnsubscribeFormField",value:a<m.length?m[a].key||"":i.sendFoxUnsubscribeFormField||"",onChange:e=>M(e,a,t,c),children:[l.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),a<m.length?l.jsx("option",{value:m[a].key,children:m[a].label},m[a].key):d.map(({key:e,label:r})=>l.jsx("option",{value:e,children:r},e))]})]}),a>=m.length&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>L(a,t,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>$(a,t,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function el({formFields:a,handleInput:s,sendFoxConf:i,setSendFoxConf:t,isLoading:c,setIsLoading:m,setSnackbar:d}){var b;const h=(((b=i==null?void 0:i.default)==null?void 0:b.allLists)||[]).map(({id:e,name:r})=>({label:r,value:`${e}`})),u=e=>{const r=p({},i);e?r.listId=e:r.listId="",t(p({},r))};return l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsx("br",{}),l.jsx("b",{className:"wdt-200 d-in-b",children:n("Actions:","bit-integrations")}),l.jsxs("select",{onChange:s,name:"mainAction",value:i.mainAction,className:"btcd-paper-inp w-5",children:[l.jsx("option",{value:"",children:n("Select Actions","bit-integrations")}),i.allActions&&i.allActions.map(({key:e,label:r})=>l.jsx("option",{value:e,children:r},e))]}),l.jsx("br",{}),l.jsx("br",{}),c&&l.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),i.mainAction==="1"&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"mt-5",children:l.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")})}),l.jsx("div",{className:"btcd-hr mt-1"}),l.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:n("Form Fields","bit-integrations")})}),l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:n("SendFox List Fields","bit-integrations")})})]}),i==null?void 0:i.field_map_list.map((e,r)=>l.jsx(Q,{i:r,field:e,sendFoxConf:i,formFields:a,setSendFoxConf:t,setSnackbar:d},`rp-m-${r+9}`))]}),i.mainAction==="2"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"d-flx",children:[l.jsx("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:n("All List:","bit-integrations")}),l.jsx(I,{options:h,className:"btcd-paper-drpdwn w-5",defaultValue:i.listId,onChange:e=>u(e),customValue:!0}),l.jsx("button",{onClick:()=>T(i,t,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh SendFox List","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),l.jsx("br",{}),l.jsx("div",{className:"mt-5",children:l.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")})}),l.jsx("div",{className:"btcd-hr mt-1"}),l.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:n("Form Fields","bit-integrations")})}),l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:n("SendFox Fields","bit-integrations")})})]}),(i==null?void 0:i.listId)&&(i==null?void 0:i.field_map.map((e,r)=>l.jsx(K,{i:r,field:e,sendFoxConf:i,formFields:a,setSendFoxConf:t,setSnackbar:d},`rp-m-${r+9}`))),l.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:l.jsx("button",{onClick:()=>P(i.field_map.length,i,t,!1),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),i.mainAction==="3"&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"mt-5",children:l.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")})}),l.jsx("div",{className:"btcd-hr mt-1"}),l.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:n("Form Fields","bit-integrations")})}),l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:n("SendFox Unsubscribe Fields","bit-integrations")})})]}),i==null?void 0:i.field_map_unsubscribe.map((e,r)=>l.jsx(W,{i:r,field:e,sendFoxConf:i,formFields:a,setSendFoxConf:t,setSnackbar:d},`rp-m-${r+9}`))]}),l.jsx("br",{})]})}export{el as S};