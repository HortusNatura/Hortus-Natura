var A=Object.defineProperty;var N=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var y=(r,i,s)=>i in r?A(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,b=(r,i)=>{for(var s in i||(i={}))_.call(i,s)&&y(r,s,i[s]);if(N)for(var s of N(i))f.call(i,s)&&y(r,s,i[s]);return r};import{r as v,m as E,j as e}from"./main-577.js";import{B as R,_ as n,D as k,L as G}from"./bi.655.81.js";import{a as P}from"./bi.564.785.js";import{T as w,t as $}from"./bi.934.737.js";function H({flowID:r,googleContactsConf:i,setGoogleContactsConf:s,step:o,setStep:I,isLoading:h,setIsLoading:L,setSnackbar:x,redirectLocation:g,isInfo:a}){const[l,S]=v.useState(!1),[c,p]=v.useState({clientId:"",clientSecret:""}),T=E(R),{googleContacts:t}=$,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),I(2)},d=m=>{const u=b({},i),j=b({},c);j[m.target.name]="",u[m.target.name]=m.target.value,p(j),s(u)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(w,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(w,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:i.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),e.jsx(k,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:x}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(k,{value:g||`${T.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:x}),e.jsxs("small",{className:"d-blk mt-3",children:[n("To Get Client Id & Secret, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noreferrer",children:n("Google API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("GoogleContacts Client Id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:i.clientId,type:"text",placeholder:n("Client Id...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("GoogleContacts Client Secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:n("Client Secret...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red"},children:c.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>P(i,s,S,L,p),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l||h,children:[l?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),h&&e.jsx(G,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:z,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!l,children:[n("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{H as default};
