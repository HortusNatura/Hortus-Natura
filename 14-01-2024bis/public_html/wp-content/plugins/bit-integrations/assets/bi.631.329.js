var S=Object.defineProperty;var m=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(i,a,n)=>a in i?S(i,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[a]=n,d=(i,a)=>{for(var n in a||(a={}))L.call(a,n)&&j(i,n,a[n]);if(m)for(var n of m(a))_.call(a,n)&&j(i,n,a[n]);return i};import{r as k,j as t}from"./main-577.js";import{_ as r,L as z,a8 as w}from"./bi.655.81.js";import{s as y,g as K}from"./bi.447.906.js";import{T as A,t as E}from"./bi.934.737.js";function M({systemIOConf:i,setSystemIOConf:a,step:n,setStep:N,loading:l,setLoading:b,isInfo:s}){const[o,T]=k.useState(!1),{systemIO:e}=E,[u,h]=k.useState({api_key:""}),P=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,N(2),K(i,a,b)},p=c=>{const g=d({},i),x=d({},u);x[c.target.name]="",g[c.target.name]=c.target.value,h(x),a(g)},v=`
            <h4>To Get API Key & API Secret</h4>
            <ul>
                <li>First go to your SystemIO dashboard.</li>
                <li>Click go to "Settings" from Right Top corner</li>
                <li>Then Click "Public API Keys" from the "Settings Menu"</li>
                <li>Then Click "Create Api key"</li>
                <li>Then copy "API Token"</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(A,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(A,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:i.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:s}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:i.api_key,type:"text",placeholder:r("API Key...","bit-integrations"),disabled:s}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:u.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get API Key & API Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://systeme.io/dashboard/profile/public-api-settings",target:"_blank",children:r("SystemIO API Key & Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!s&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>y(i,a,h,T,l,b),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||l.auth,children:[o?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),l.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:P,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[r("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:v})]})}export{M as default};