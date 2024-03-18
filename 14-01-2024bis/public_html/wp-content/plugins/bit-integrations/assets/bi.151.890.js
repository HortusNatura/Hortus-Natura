var y=Object.defineProperty;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(t,e,l)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,r=(t,e)=>{for(var l in e||(e={}))_.call(e,l)&&g(t,l,e[l]);if(m)for(var l of m(e))E.call(e,l)&&g(t,l,e[l]);return t};import{j as s,m as $,L as M}from"./main-577.js";import{_ as p,B as k,a7 as F}from"./bi.655.81.js";import{g as I,a as N,b as R}from"./bi.113.889.js";import{S as V}from"./bi.622.681.js";import{M as q}from"./bi.827.680.js";const w=(t,e,l)=>{const a=r({},e);a.field_map.splice(t,0,{}),l(r({},a))},O=(t,e,l)=>{const a=r({},e);a.field_map.length>1&&a.field_map.splice(t,1),l(r({},a))},S=(t,e,l,a)=>{const d=r({},l);d.field_map[e][t.target.name]=t.target.value,t.target.value==="custom"&&(d.field_map[e].customValue=""),a(r({},d))},A=(t,e,l,a,d)=>{const i=r({},l);i.field_map[e][d]=t.target.value,a(r({},i))};function P({field:t,index:e,conf:l,setConf:a,fieldValue:d,fieldLabel:i,className:h}){return s.jsx(q,{onChange:x=>A(x,e,l,a,d),label:p(i,"bit-integrations"),className:h,type:"text",value:t[d],placeholder:p(i,"bit-integrations")})}function B({i:t,formFields:e,field:l,livestormConf:a,setLivestormConf:d}){var c;const i=(a==null?void 0:a.allFields)&&a.allFields.filter(n=>n.eventId===a.selectedEvent&&n.required===!0)||[],h=(a==null?void 0:a.allFields)&&a.allFields.filter(n=>n.eventId===a.selectedEvent&&n.required===!1)||[],x=$(k),{isPro:u}=x;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:n=>S(n,t,a,d),children:[s.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),s.jsx("optgroup",{label:"Form Fields",children:e==null?void 0:e.map(n=>s.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),s.jsx("option",{value:"custom",children:p("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`General Smart Codes ${u?"":"(PRO)"}`,children:u&&((c=V)==null?void 0:c.map(n=>s.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),l.formField==="custom"&&s.jsx(P,{field:l,index:t,conf:a,setConf:d,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<i.length,name:"livestormFormField",value:t<i.length?i[t].key||"":l.livestormFormField||"",onChange:n=>S(n,t,a,d),children:[s.jsx("option",{value:"",children:p("Select Field","bit-integrations")}),t<i.length?s.jsx("option",{value:i[t].key,children:i[t].label},i[t].key):h.map(({key:n,label:j})=>s.jsx("option",{value:n,children:j},n))]})]}),t>=i.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>w(t,a,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>O(t,a,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function K({formFields:t,livestormConf:e,setLivestormConf:l,loading:a,setLoading:d,isLoading:i,setIsLoading:h,setSnackbar:x}){const u=(c,n)=>{n==="selectedEvent"&&c!==""&&N(e,l,c,d),l(j=>{const b=r({},j);return b[n]=c,n==="selectedEvent"&&(b.field_map=R(b.allFields.filter(o=>o.eventId===c)),delete b.selectedSession,delete b.sessions),b})};return s.jsxs(s.Fragment,{children:[e.actionName&&!a.event&&s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Event:","bit-integrations")}),s.jsx(F,{options:(e==null?void 0:e.events)&&e.events.map(c=>({label:c.name,value:`${c.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedEvent,onChange:c=>u(c,"selectedEvent"),singleSelect:!0,closeOnSelect:!0}),s.jsx("button",{onClick:()=>I(e,l,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh Events","bit-integrations")}'`},type:"button",disabled:a.event,children:"↻"})]})]}),e.actionName&&e.selectedEvent&&!a.session&&s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:p("Select Session:","bit-integrations")}),s.jsx(F,{options:(e==null?void 0:e.sessions)&&e.sessions.map(c=>({label:c.datetime,value:`${c.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:e==null?void 0:e.selectedSession,onChange:c=>u(c,"selectedSession"),singleSelect:!0,closeOnSelect:!0}),s.jsx("button",{onClick:()=>N(e,l,e.selectedEvent,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${p("Refresh Sessions","bit-integrations")}'`},type:"button",disabled:a.event,children:"↻"})]})]}),(i||a.event||a.session)&&s.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.actionName&&e.selectedEvent&&e.selectedSession&&!i&&s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsx("b",{className:"wdt-100",children:p("Field Map","bit-integrations")})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:p("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:p("Livestorm Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((c,n)=>s.jsx(B,{i:n,field:c,livestormConf:e,formFields:t,setLivestormConf:l,setSnackbar:x},`rp-m-${n+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>w(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{})]})]})}export{K as L};
