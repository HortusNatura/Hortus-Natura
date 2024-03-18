var le=Object.defineProperty;var K=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var Q=(t,c,o)=>c in t?le(t,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[c]=o,M=(t,c)=>{for(var o in c||(c={}))ae.call(c,o)&&Q(t,o,c[o]);if(K)for(var o of K(c))ne.call(c,o)&&Q(t,o,c[o]);return t};import{r as O,j as e,L as Z,m as ee,b as te}from"./main-577.js";import{T as ie,a as oe,b as ce,c as re}from"./bi.982.687.js";import{a6 as k,_ as a,f as $,a7 as R,B as de,g as se,h as me}from"./bi.655.81.js";import{r as he,a as ue,b as xe,g as pe,d as je}from"./bi.917.685.js";import{b as X,h as be,a as A,d as Ne}from"./bi.787.676.js";import{T as ve}from"./bi.587.674.js";import{S as ge}from"./bi.622.681.js";import{T as fe}from"./bi.933.682.js";function we({tab:t,formID:c,formFields:o,biginConf:s,setBiginConf:r,setSnackbar:m}){var n,B,S,V,z,I,P,U,D,E,q,L,W,G,H,C,J;const[i,d]=O.useState(!1),[N,x]=O.useState(!1),[f,w]=O.useState({show:!1}),[v,T]=O.useState(!1),p=(l,u,h)=>{const b=M({},s);t===0?h!==void 0?h?b.actions[u]=l:delete b.actions[u]:l?b.actions[u]=l:delete b.actions[u]:h!==void 0?h?b.relatedlists[t-1].actions[u]=l:delete b.relatedlists[t-1].actions[u]:l?b.relatedlists[t-1].actions[u]=l:delete b.relatedlists[t-1].actions[u],r(M({},b))},j=t===0?s.module:s.relatedlists[t-1].module,g=()=>{var u,h,b;const l=[{title:"Tags",type:"group",childs:[]},{title:"Form Fields",type:"group",childs:[]}];return(b=(h=(u=s==null?void 0:s.default)==null?void 0:u.moduleData)==null?void 0:h[j])!=null&&b.tags&&(l[0].childs=Object.values(s.default.moduleData[j].tags).map(_=>({label:_.tagName,value:_.tagId}))),l[1].childs=o.map(_=>({label:_.name,value:`\${${_.key}}`})),l},F=()=>{w({show:!1})},y=(l,u)=>{const h=M({},s);h.actions.note||(h.actions.note={}),l==="field"?(h.actions.note.content||(h.actions.note.content=""),h.actions.note.content+=u):u?h.actions.note[l]=u:delete h.actions.note[l],r(M({},h))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[((B=(n=s==null?void 0:s.relatedlists)==null?void 0:n[t-1])==null?void 0:B.module)!=="Notes"&&e.jsxs(e.Fragment,{children:[e.jsx(k,{onChange:l=>p(!0,"workflow",l.target.checked),checked:t===0?"workflow"in s.actions:"workflow"in((V=(S=s.relatedlists)==null?void 0:S[t-1])==null?void 0:V.actions),className:"wdt-200 mt-4 mr-2",value:"Workflow",title:a("Workflow","bit-integrations"),subTitle:a("Trigger workflows in Zoho Bigin.","bit-integrations")}),e.jsx(k,{onChange:l=>p(!0,"approval",l.target.checked),checked:t===0?"approval"in s.actions:"approval"in((I=(z=s.relatedlists)==null?void 0:z[t-1])==null?void 0:I.actions),className:"wdt-200 mt-4 mr-2",value:"Approval",title:a("Approval","bit-integrations"),subTitle:a("Send entries to approval list in Zoho Bigin.","bit-integrations")}),t===0&&!["Calls","Events","Tasks"].includes(s.module)&&e.jsx(k,{onChange:()=>x(!0),checked:"note"in s.actions&&("title"in((P=s.actions)==null?void 0:P.note)||"content"in((U=s.actions)==null?void 0:U.note)),className:"wdt-200 mt-4 mr-2",value:"notes",title:a("Add a Note","bit-integrations"),subTitle:a("Add a note from bitform to pushed to Zoho Bigin.","bit-integrations")})]}),["Contacts","Accounts","Products"].includes(j)&&e.jsx(k,{onChange:()=>w({show:"photo"}),checked:t===0?"photo"in s.actions:"photo"in s.relatedlists[t-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Upload Photo","bit-integrations"),subTitle:`Add a photo to ${j} in Zoho Bigin.`}),e.jsx(k,{onChange:()=>w({show:"attachments"}),checked:t===0?"attachments"in s.actions:"attachments"in s.relatedlists[t-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Attachment","bit-integrations"),subTitle:a("Add attachments from BitForm to Zoho Bigin.","bit-integrations")})]}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:f.show==="attachments",close:F,action:F,title:a("Select Attachment","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select file upload fields","bit-integrations")}),e.jsx(R,{defaultValue:t===0?s.actions.attachments:s.relatedlists[t-1].actions.attachments,className:"mt-2 w-9",onChange:l=>p(l,"attachments"),options:o.filter(l=>l.type==="file").map(l=>({label:l.label,value:l.name}))})]}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:f.show==="photo",close:F,action:F,title:a("Upload Photo","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select file upload fields","bit-integrations")}),e.jsx(R,{defaultValue:t===0?s.actions.photo:s.relatedlists[t-1].actions.photo,className:"mt-2 w-9",onChange:l=>p(l,"photo"),options:o.filter(l=>l.type==="file").map(l=>({label:l.label,value:l.name})),singleSelect:!0})]}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:i,close:()=>d(!1),action:()=>d(!1),title:a("Record Owner","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),v?e.jsx(Z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(R,{className:"msl-wrp-options",defaultValue:t===0?s.actions.owner:s.relatedlists[t-1].actions.owner,options:((D=s.default)==null?void 0:D.users)&&Object.values(s.default.users).map(l=>({label:l.userName,value:l.userId})),onChange:l=>p(l,"owner"),customValue:!0}),e.jsx("button",{onClick:()=>he(c,s,r,T,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Users"'},type:"button",disabled:v,children:"↻"})]})]}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:f.show==="tag_rec",close:F,action:F,title:a("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:`Add a tag to ${j} pushed to Zoho Bigin`}),e.jsx("div",{className:"mt-2",children:a("Tag Name","bit-integrations")}),v?e.jsx(Z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(R,{className:"msl-wrp-options",defaultValue:t===0?s.actions.tag_rec:s.relatedlists[t-1].actions.tag_rec,options:g(),onChange:l=>p(l,"tag_rec")}),e.jsx("button",{onClick:()=>ue(t,c,s,r,T,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CRM Tags"'},type:"button",disabled:v,children:"↻"})]})]}),t===0&&e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:N,close:()=>x(!1),action:()=>x(!1),title:a("Notes","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),v?e.jsx(Z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-2 mb-1",children:a("Note Title","bit-integrations")}),e.jsx("input",{type:"text",className:"btcd-paper-inp",placeholder:a("Note Title","bit-integrations"),onChange:l=>y("title",l.target.value),value:t===0?((q=(E=s.actions)==null?void 0:E.note)==null?void 0:q.title)||"":((W=(L=s.relatedlists[t-1].actions)==null?void 0:L.note)==null?void 0:W.title)||""}),e.jsx("div",{className:"mt-2 mb-1",children:a("Note Content","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp w-5",onChange:l=>y("field",l.target.value),children:[e.jsx("option",{value:"",children:a("Field","bit-integrations")}),o.map(l=>l.type!=="file"&&e.jsx("option",{value:`\${${l.name}}`,children:l.label},`ff-zhcrm-${l.name}`))]}),e.jsx("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:l=>y("content",l.target.value),value:t===0?((H=(G=s.actions)==null?void 0:G.note)==null?void 0:H.content)||"":((J=(C=s.relatedlists[t-1].actions)==null?void 0:C.note)==null?void 0:J.content)||""})]})]})]})}function Y({i:t,uploadFields:c,formFields:o,field:s,biginConf:r,setBiginConf:m,tab:i}){var w,v,T,p,j,g,F,y;const d=i===0?r.module:(v=(w=r.relatedlists)==null?void 0:w[i-1])==null?void 0:v.module,N=s.zohoFormField===""||((j=(p=(T=r.default.moduleData)==null?void 0:T[d])==null?void 0:p.required)==null?void 0:j.indexOf(s.zohoFormField))===-1,x=ee(de),{isPro:f}=x;return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:n=>X(n,t,r,m,c,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:c?o.map(n=>n.type==="file"&&e.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`)):o.map(n=>n.type!=="file"&&e.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`))}),!c&&e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${f?"":"(PRO)"}`,children:f&&((g=ge)==null?void 0:g.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),s.formField==="custom"&&e.jsx(fe,{onChange:n=>be(n,t,r,m),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:o}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!N,name:"zohoFormField",value:s.zohoFormField||"",onChange:n=>X(n,t,r,m,c,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),((y=(F=r.default.moduleData)==null?void 0:F[d])==null?void 0:y.fields)&&Object.values(r.default.moduleData[d].fields).map(n=>N?!n.required&&e.jsx("option",{value:n.api_name,children:n.display_label},n.api_name):e.jsx("option",{value:n.api_name,children:n.display_label},n.api_name))]})]}),N&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>A(t,r,m,c,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Ne(t,r,m,c,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(ve,{})})]})]})}function Fe({tab:t,settab:c,formID:o,isLoading:s,setIsLoading:r,setSnackbar:m}){var x,f,w,v,T,p;const[i,d]=te(se),N=ee(me);return O.useEffect(()=>{xe(0,c)},[]),e.jsxs(e.Fragment,{children:[s&&e.jsx(Z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((w=(f=(x=i.default)==null?void 0:x.moduleData)==null?void 0:f[i.module])==null?void 0:w.fields)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>pe(t,o,i,d,r,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Bigin Fields","bit-integrations")}'`},type:"button",disabled:s,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),i.field_map.map((j,g)=>e.jsx(Y,{i:g,field:j,biginConf:i,formFields:N,setBiginConf:d,tab:t,setSnackbar:m},`bigin-m-${g+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>A(i.field_map.length,i,d,!1,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((p=(T=(v=i.default)==null?void 0:v.moduleData)==null?void 0:T[i.module])==null?void 0:p.fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map Attachments","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),i.upload_field_map.map((j,g)=>e.jsx(Y,{uploadFields:1,i:g,field:j,biginConf:i,formFields:N,setBiginConf:d,tab:t,setSnackbar:m},`crm-m-${g+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>A(i.upload_field_map.length,i,d,!0,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(we,{tab:t,formID:o,formFields:N,biginConf:i,setBiginConf:d,setSnackbar:m})]})]})}function Ae({tab:t,settab:c,formID:o,handleInput:s,isLoading:r,setIsLoading:m,setSnackbar:i}){const[d,N]=te(se);return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Module:","bit-integrations")}),e.jsxs("select",{onChange:s,name:"module",value:d.module,className:"btcd-paper-inp w-5",disabled:t===1,children:[e.jsx("option",{value:"",children:a("Select Module","bit-integrations")}),d.default&&d.default.modules&&Object.values(d.default.modules).map(x=>e.jsx("option",{value:x.api_name,children:x.plural_label},x.api_name))]}),t===0&&e.jsx("button",{onClick:()=>je(o,d,N,m,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Bigin Modules","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),e.jsx("br",{}),e.jsxs(ie,{selectedTabClassName:"s-t-l-active",children:[e.jsx(oe,{className:"flx mt-2 mb-0",children:e.jsx(ce,{className:"btcd-s-tab-link mb-0",children:a("New Record","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsx(re,{children:e.jsx(Fe,{tab:t,settab:c,formID:o,isLoading:r,setIsLoading:m,setSnackbar:i})})]})]})}export{Ae as Z};