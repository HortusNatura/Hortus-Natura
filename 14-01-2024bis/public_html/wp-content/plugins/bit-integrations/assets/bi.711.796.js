var L=Object.defineProperty;var N=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var F=(t,s,m)=>s in t?L(t,s,{enumerable:!0,configurable:!0,writable:!0,value:m}):t[s]=m,x=(t,s)=>{for(var m in s||(s={}))R.call(s,m)&&F(t,m,s[m]);if(N)for(var m of N(s))q.call(s,m)&&F(t,m,s[m]);return t};import{r as _,j as e,m as V,L as k}from"./main-577.js";import{a6 as O,_ as r,f as M,B as $,a7 as T,L as A}from"./bi.655.81.js";import{h as S,a as I,d as B}from"./bi.454.794.js";import{g as E,a as P,b as G,c as H}from"./bi.981.795.js";import{S as D}from"./bi.622.681.js";import{T as J}from"./bi.933.682.js";import{h as K}from"./bi.787.676.js";function Q({selzyConf:t,setSelzyConf:s}){var h,j;const[m,a]=_.useState({show:!1}),n=(l,p)=>{var d,u;const i=x({},t);p==="option"&&((d=l.target)!=null&&d.checked?(i.actions.option=!0,a({show:"option"})):(a({show:!1}),delete i.actions.option)),p==="overwrite"&&((u=l.target)!=null&&u.checked?(i.actions.overwrite=!0,a({show:"overwrite"})):(a({show:!1}),delete i.actions.overwrite)),s(x({},i))},o=()=>{a({show:!1})},b=l=>{const p=x({},t),{name:i,value:d}=l.target;d!==""&&(p[i]=d),s(p)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(O,{checked:((h=t==null?void 0:t.actions)==null?void 0:h.option)||!1,onChange:l=>n(l,"option"),className:"wdt-200 mt-4 mr-2",value:"option ",title:r("Add Option"),subTitle:r("Customize you subcription")}),e.jsxs(M,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:r("Ok"),show:m.show==="option",close:o,action:o,title:r("Subscribe Option"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"p-1",children:[e.jsx("div",{className:"my-2 w-100 ",children:r("Customize your subscription")}),e.jsxs("select",{name:"option",value:t.option,onChange:b,className:"btcd-paper-inp w-100 mx-0",children:[e.jsx("option",{value:"",children:r("Select Option")}),(t==null?void 0:t.doubleOption)&&(t==null?void 0:t.doubleOption.map(l=>e.jsx("option",{value:l.key,children:l.name},l.key)))]})]})]})]}),e.jsxs("div",{children:[e.jsx(O,{checked:((j=t==null?void 0:t.actions)==null?void 0:j.overwrite)||!1,onChange:l=>n(l,"overwrite"),className:"wdt-200 mt-4 mr-2",value:"overwrite",title:r("Overwrite"),subTitle:r("Field and tag rewriting mode")}),e.jsxs(M,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:r("Ok"),show:m.show==="overwrite",close:o,action:o,title:r("Subscribe overwrite"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"p-1",children:[e.jsx("div",{className:"my-2 w-100 ",children:r("Field and tag rewriting mode")}),e.jsxs("select",{name:"overwrite",value:t.overwrite,onChange:b,className:"btcd-paper-inp w-100 mx-0",children:[e.jsx("option",{value:"",children:r("Select Option")}),(t==null?void 0:t.overwriteOption)&&(t==null?void 0:t.overwriteOption.map(l=>e.jsx("option",{value:l.key,children:l.name},l.key)))]})]})]})]})]})}function U({i:t,field:s,formFields:m,selzyConf:a,setSelzyConf:n}){var i,d,u,v,w;const o=V($),{isPro:b}=o;if(((i=a==null?void 0:a.field_map)==null?void 0:i.length)===1&&s.selzyFormField===""){const c=x({},a),g=E(c);c.field_map=g,n(c)}const h=(a==null?void 0:a.selzyFields.filter(c=>c.required===!0))||[],j=a.method==="1"?((d=a==null?void 0:a.selzyFields)==null?void 0:d.filter(c=>c.required===!1))||[]:[],l=a.method==="1"?((v=(u=a==null?void 0:a.default)==null?void 0:u.customFields)==null?void 0:v.filter(c=>c.required===!1))||[]:[],p=a.method==="1"?[...j,...l]:[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",onChange:c=>{S(c,t,a,n)},value:s.formField||"",children:[e.jsx("option",{value:"",children:r("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:m==null?void 0:m.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${b?"":"(PRO)"}`,children:b&&((w=D)==null?void 0:w.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),s.formField==="custom"&&e.jsx(J,{onChange:c=>K(c,t,a,n),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:m}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<h.length,name:"selzyFormField",onChange:c=>{S(c,t,a,n)},value:t<h.length?h[t].key||"":s.selzyFormField||"",children:[e.jsx("option",{value:"",children:r("Select Field")}),t<h.length?e.jsx("option",{value:h[t].key,children:h[t].label},h[t].key):p.map(({key:c,label:g})=>e.jsx("option",{value:c,children:g},c))]})]}),(a==null?void 0:a.method)==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>I(t,a,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>B(t,a,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function tt({selzyConf:t,setSelzyConf:s,formFields:m,loading:a,setLoading:n}){var l,p;const[o,b]=_.useState([{key:"1",label:"Subscribe"},{key:"2",label:"unsubscribe"}]),h=(i,d)=>{const u=x({},t);switch(d){case"listIds":u[d]=i;break;case"tags":u[d]=i;break}s(u)},j=i=>{const d=x({},t),{name:u,value:v}=i.target;switch(v!==""&&(d[u]=v),v){case"":delete d[u],d.listIds="",d.tags="";break;case"2":d.tags="",d.field_map=[{formField:"",selzyFormField:""}];break}s(x({},d))};return e.jsxs("div",{className:"mt-2",children:[a.page===!1&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b ",children:r("Actions:")}),e.jsxs("select",{onChange:j,name:"method",value:t==null?void 0:t.method,className:"btcd-paper-inp w-5 mx-0",children:[e.jsx("option",{value:"",children:r("Select Actions")}),o&&o.map(({key:i,label:d})=>e.jsx("option",{value:i,children:d},i))]})]}),t.method&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-2",children:[e.jsx("b",{className:"wdt-200 d-in-b mx-0",children:r("List:")}),e.jsx(T,{className:"w-5",defaultValue:t==null?void 0:t.listIds,options:((l=t==null?void 0:t.default)==null?void 0:l.lists)&&(t==null?void 0:t.default.lists.map(i=>({label:i.title,value:i.id}))),onChange:i=>h(i,"listIds"),multiSelect:!0,closeOnSelect:!1}),e.jsx("button",{onClick:()=>P(t,s,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:a.list,children:"↻"}),a.list&&e.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),t.method==="1"&&e.jsxs("div",{className:"flx mt-2",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Tags:")}),e.jsx(T,{className:"w-5",defaultValue:t==null?void 0:t.tags,options:((p=t==null?void 0:t.default)==null?void 0:p.tags)&&(t==null?void 0:t.default.tags.map(i=>({label:i.name,value:i.name}))),onChange:i=>h(i,"tags"),multiSelect:!0,closeOnSelect:!1}),e.jsx("button",{onClick:()=>G(t,s,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Tag"'},type:"button",disabled:a.tag,children:"↻"}),a.tag&&e.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]})]}),a.customFields&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.listIds)&&t.method&&e.jsxs("div",{className:"mt-5",children:[e.jsxs("b",{className:"wdt-100",children:[r("Field Map"),t.method==="1"&&e.jsx("button",{onClick:()=>H(t,s,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:a.customFields,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-2 mb-4"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Selzy Fields")})})]}),t==null?void 0:t.field_map.map((i,d)=>e.jsx(U,{i:d,field:i,formFields:m,selzyConf:t,setSelzyConf:s},`ko-m-${d+8}`)),(t==null?void 0:t.method)==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(t.field_map.length,t,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Q,{selzyConf:t,setSelzyConf:s})]})]}),a.page&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}export{tt as S};