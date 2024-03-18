import{m as v,j as e,L as y}from"./main-577.js";import{B as F,_ as t}from"./bi.655.81.js";import{h as N,a as k,b as w,d as R}from"./bi.597.707.js";import{r as I,a as _,b as T}from"./bi.233.705.js";import{T as W}from"./bi.587.674.js";import{S as $}from"./bi.622.681.js";import{T as G}from"./bi.933.682.js";function H({i:r,formFields:h,field:d,sheetConf:a,setSheetConf:l}){var m,o,p,b,x;const n=v(F),{isPro:c}=n;return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:s=>N(s,r,a,l),children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),e.jsx("optgroup",{label:"Form Fields",children:h.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-zhcrm-${s.name}`))}),e.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`General Smart Codes ${c?"":"(PRO)"}`,children:c&&((m=$)==null?void 0:m.map(s=>e.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),d.formField==="custom"&&e.jsx(G,{onChange:s=>k(s,r,a,l),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:d.customValue||"",placeholder:t("Custom Value","bit-integrations"),formFields:h}),e.jsxs("select",{className:"btcd-paper-inp",name:"googleSheetField",value:d.googleSheetField||"",onChange:s=>N(s,r,a,l),children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),((x=(b=(p=(o=a.default)==null?void 0:o.headers)==null?void 0:p[a.spreadsheetId])==null?void 0:b[a.worksheetName])==null?void 0:x[a.headerRow])&&Object.values(a.default.headers[a.spreadsheetId][a.worksheetName][a.headerRow]).map((s,u)=>e.jsx("option",{value:s,children:s},`gsheet-${u*2}`))]})]}),e.jsx("button",{onClick:()=>w(r,a,l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>R(r,a,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(W,{})})]})}function E({formID:r,formFields:h,handleInput:d,sheetConf:a,setSheetConf:l,isLoading:n,setIsLoading:c,setSnackbar:m}){var o,p,b,x,s,u,j;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:t("Spreadsheets:","bit-integrations")}),e.jsxs("select",{onChange:d,name:"spreadsheetId",value:a.spreadsheetId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:t("Select Spreadsheet","bit-integrations")}),((o=a==null?void 0:a.default)==null?void 0:o.spreadsheets)&&Object.keys(a.default.spreadsheets).map(i=>e.jsx("option",{value:a.default.spreadsheets[i].spreadsheetId,children:a.default.spreadsheets[i].spreadsheetName},i))]}),e.jsx("button",{onClick:()=>I(r,a,l,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Spreadsheet"'},type:"button",disabled:n,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:"Worksheet:"}),e.jsxs("select",{onChange:d,name:"worksheetName",value:a.worksheetName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:t("Select Worksheet","bit-integrations")}),((b=(p=a==null?void 0:a.default)==null?void 0:p.worksheets)==null?void 0:b[a.spreadsheetId])&&a.default.worksheets[a.spreadsheetId].map(i=>e.jsx("option",{value:i.properties.title,children:i.properties.title},i.properties.sheetId))]}),e.jsx("button",{onClick:()=>_(r,a,l,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Sheet Worksheets"'},type:"button",disabled:n,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:t("Header Row:","bit-integrations")}),e.jsx("input",{type:"text",min:"1",className:"btcd-paper-inp w-5",placeholder:"Header Row",onChange:d,value:a.headerRow,name:"headerRow"}),e.jsx("button",{onClick:()=>T(r,a,l,c,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Worksheet Headers"'},type:"button",disabled:n,children:"↻"}),e.jsx("br",{}),e.jsx("small",{className:"mt-3 d-blk w-5",style:{marginLeft:200,lineHeight:1.8,textAlign:"justify"},children:t("By default, first row of the worksheet is considered as header row. This can be used if tabular data starts from any row other than the first row.","bit-integrations")}),n&&e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((j=(u=(s=(x=a.default)==null?void 0:x.headers)==null?void 0:s[a.spreadsheetId])==null?void 0:u[a.worksheetName])==null?void 0:j[a.headerRow])&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:t("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Google Fields","bit-integrations")})})]}),a.field_map.map((i,g)=>e.jsx(H,{i:g,field:i,sheetConf:a,formFields:h,setSheetConf:l},`sheet-m-${g+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>w(a.field_map.length,a,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]})]})}export{E as G};
