var E=Object.defineProperty;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var N=(r,i,s)=>i in r?E(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,b=(r,i)=>{for(var s in i||(i={}))C.call(i,s)&&N(r,s,i[s]);if(y)for(var s of y(i))R.call(i,s)&&N(r,s,i[s]);return r};import{r as v,m as _,j as e}from"./main-577.js";import{B as I,_ as n,D as w,L as B}from"./bi.655.81.js";import{B as $}from"./bi.232.720.js";import{a as D,r as O}from"./bi.191.757.js";import{T as z,t as P}from"./bi.934.737.js";function J({formID:r,keapConf:i,setKeapConf:s,step:h,setstep:T,isLoading:x,setIsLoading:u,setSnackbar:a,redirectLocation:L,isInfo:l}){const[c,S]=v.useState(!1),[d,g]=v.useState({clientId:"",clientSecret:""}),f=_(I),{keap:t}=P,o=m=>{const j=b({},i),p=b({},d);p[m.target.name]="",j[m.target.name]=m.target.value,g(p),s(j)},A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),T(2),O(r,i,s,u,a)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:h===1&&900,height:h===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(z,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(z,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),e.jsx(w,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(w,{value:L||`${f.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),e.jsxs("small",{className:"d-blk mt-5",children:[n("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://keys.developer.keap.com/my-apps",target:"_blank",rel:"noreferrer",children:n("Get Keap client id and secret","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:i.clientId,type:"text",placeholder:n("Client id...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:n("Client secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>D(i,s,g,S,u,a),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||x,children:[c?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),x&&e.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>A(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[n("Next","bit-integrations"),e.jsx($,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
