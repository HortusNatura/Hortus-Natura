var A=Object.defineProperty;var k=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var N=(n,e,a)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,b=(n,e)=>{for(var a in e||(e={}))S.call(e,a)&&N(n,a,e[a]);if(k)for(var a of k(e))_.call(e,a)&&N(n,a,e[a]);return n};import{r as y,j as t}from"./main-577.js";import{B as f}from"./bi.232.720.js";import{_ as s,L as E,a8 as P}from"./bi.655.81.js";import{a as B,f as I}from"./bi.206.771.js";import{T as v,t as K}from"./bi.934.737.js";function M({formID:n,groundhoggConf:e,setGroundhoggConf:a,step:d,setstep:T,isLoading:p,setIsLoading:x,setSnackbar:F,redirectLocation:G,isInfo:l}){const[c,z]=y.useState(!1),[m,u]=y.useState({token:"",public_key:"",domainName:""}),{groundhogg:i}=K,L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),T(2),I(n,e,a,x)},r=o=>{const j=b({},e),h=b({},m);h[o.target.name]="",j[o.target.name]=o.target.value,u(h),a(j)},w=`
            <h4>Get Public Key and Token few step</h4>
            <ul>
                <li>First install Groundhogg.</li>
                <li>Go to <b> 'Setting -> Api' </b>.</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(v,{title:i==null?void 0:i.title,youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(v,{title:i==null?void 0:i.title,docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Your Domain Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"domainName",value:e.domainName,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:"true"}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Public Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"public_key",value:e.public_key,type:"text",placeholder:s("Public Key...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"token",value:e.token,type:"text",placeholder:s("Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.clientSecret}),!l&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>B(e,a,u,z,x),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||p,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),p&&t.jsx(E,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:L,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),t.jsx(f,{className:"ml-1 rev-icn"})]})]}),t.jsx(P,{note:w})]})}export{M as default};
