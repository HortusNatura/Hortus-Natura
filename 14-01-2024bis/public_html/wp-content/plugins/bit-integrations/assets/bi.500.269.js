var C=Object.defineProperty;var j=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(r,i,n)=>i in r?C(r,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[i]=n,b=(r,i)=>{for(var n in i||(i={}))I.call(i,n)&&y(r,n,i[n]);if(j)for(var n of j(i))E.call(i,n)&&y(r,n,i[n]);return r};import{r as N,j as t}from"./main-577.js";import{B as S}from"./bi.232.720.js";import{_ as a,D as v,L as R}from"./bi.655.81.js";import{f as B}from"./bi.554.790.js";import{T as w,t as _}from"./bi.934.737.js";function P({formID:r,salesforceConf:i,setSalesforceConf:n,step:h,setStep:k,isLoading:u,setIsLoading:L,setSnackbar:s,redirectLocation:z,isInfo:l}){const[d,T]=N.useState(!1),[c,x]=N.useState({dataCenter:"",clientId:"",clientSecret:""}),{salesforce:e}=_,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2)},o=m=>{const p=b({},i),g=b({},c);g[m.target.name]="",p[m.target.name]=m.target.value,x(g),n(p)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:h===1&&900,height:h===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(w,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(w,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"wdt-200 d-in-b mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:i.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Homepage URL:","bit-integrations")})}),t.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:s,readOnly:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(v,{value:z||`${window.location.href}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:s,readOnly:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:i.clientId,type:"text",placeholder:a("Client id...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red"},children:c.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:a("Client secret...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red"},children:c.clientSecret}),!l&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>B(i,n,x,T,L,s),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:d||u,children:[d?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),u&&t.jsx(R,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!d,children:[a("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]})]})}export{P as default};
