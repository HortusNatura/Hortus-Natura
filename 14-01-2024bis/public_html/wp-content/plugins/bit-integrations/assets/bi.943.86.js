import{i as I,u as C,b as p,r as l,m as _,j as t}from"./main-577.js";import{g as w,$ as k,h as v,e as E,_ as m}from"./bi.655.81.js";import{E as y,a as F}from"./bi.49.675.js";import{c as g,s as N}from"./bi.787.676.js";import{I as S}from"./bi.672.677.js";import{h as f,c as $}from"./bi.540.690.js";import{Z as L}from"./bi.11.691.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function J({allIntegURL:h}){const x=I(),{id:R,formID:o}=C(),[s,a]=p(w),[i,u]=p(k),[d,n]=l.useState(!1),[b,e]=l.useState({show:!1}),c=_(v),j=()=>{if(!$(s)){e({show:!0,msg:m("Please map mandatory fields","bit-integrations")});return}N({flow:i,setFlow:u,allIntegURL:h,conf:s,navigate:x,edit:1,setIsLoading:n,setSnackbar:e})};return t.jsxs("div",{style:{width:900},children:[t.jsx(E,{snack:b,setSnackbar:e}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-100 d-in-b",children:m("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-7",onChange:r=>f(r,o,s,a),name:"name",value:s.name,type:"text",placeholder:m("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!g(i.triggered_entity)&&t.jsx(y,{setSnackbar:e}),g(i.triggered_entity)&&t.jsx(F,{setSnackbar:e}),t.jsx(L,{formID:o,formFields:c,handleInput:r=>f(r,o,s,a,n,e),campaignsConf:s,setCampaignsConf:a,isLoading:d,setIsLoading:n,setSnackbar:e}),t.jsx(S,{edit:!0,saveConfig:j,disabled:s.list===""||s.table===""||s.field_map.length<1,isLoading:d,dataConf:s,setDataConf:a,formFields:c})]})}export{J as default};
