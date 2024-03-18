var S=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var j=(i,a,n)=>a in i?S(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,p=(i,a)=>{for(var n in a||(a={}))L.call(a,n)&&j(i,n,a[n]);if(x)for(var n of x(a))I.call(a,n)&&j(i,n,a[n]);return i};import{r as y,j as e}from"./main-577.js";import{B as _}from"./bi.232.720.js";import{_ as l,D as f,L as R,a8 as E}from"./bi.655.81.js";import{c as F}from"./bi.208.797.js";import{T as N,t as B}from"./bi.934.737.js";function H({constantContactConf:i,setConstantContactConf:a,step:n,setstep:k,isLoading:b,setIsLoading:v,setSnackbar:r,redirectLocation:C,isInfo:s}){const[o,z]=y.useState(!1),{constantContact:t}=B,[c,h]=y.useState({dataCenter:"",clientId:"",clientSecret:""}),A="account_read account_update contact_data offline_access campaign_data",T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2)},d=m=>{const u=p({},i),g=p({},c);g[m.target.name]="",u[m.target.name]=m.target.value,h(g),a(u)},w=`
  <h4> Step of get API Key(Client Id) And Client Secret:</h4>
  <ul>
    <li>Goto <a href="https://app.constantcontact.com/pages/dma/portal/?_ga=2.91540634.1868552181.1667660766-5cc88792-fd06-40a8-9b8c-e27659667215">Constant Contact Application</a></li>
    <li>Then create a new application.</li>
    <li>Select  <b>(Authorization Code Flow and Implicit Flow)</b> and <b>(Rotating Refresh Tokens or Long Lived Refresh Tokens).</b></li>
    <li>Copy the <b>Authorized Redirect URIs</b> from here and paste it into the Constant Contact application form.</li> 
    <li>Then generate <b>Client Secret</b> from the Constant Contact application</li>
    <li>Copy the <b>Client Id</b> and <b>Client Secret</b> from Constant Contact application and paste into this authorization form.</li>
    <li>Finally, click <b>Authorize</b> button.</li>
</ul>
`;return e.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(N,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(N,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:i.name,type:"text",placeholder:l("Integration Name...","bit-integrations"),disabled:s}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Homepage URL:","bit-integrations")})}),e.jsx(f,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:s,setSnackbar:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(f,{value:C||`${btcbi.api.base}/redirect`,setSnackbar:r,className:"field-key-cpy w-6 ml-0",readOnly:s}),e.jsxs("small",{className:"d-blk mt-5",children:[l("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://app.constantcontact.com/pages/dma/portal/?_ga=2.91540634.1868552181.1667660766-5cc88792-fd06-40a8-9b8c-e27659667215",target:"_blank",rel:"noreferrer",children:l("Constant Contact Application","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:i.clientId,type:"text",placeholder:l("Client id...","bit-integrations"),disabled:s}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:i.clientSecret,type:"text",placeholder:l("Client secret...","bit-integrations"),disabled:s}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.clientSecret}),!s&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>F("constantContact","cContact",A,i,a,h,z,v,r,btcbi),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||b.auth,children:[o?l("Authorized ✔","bit-integrations"):l("Authorize","bit-integrations"),b.auth&&e.jsx(R,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:T,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[l("Next","bit-integrations"),e.jsx(_,{className:"ml-1 rev-icn"})]})]}),e.jsx(E,{note:w})]})}export{H as default};