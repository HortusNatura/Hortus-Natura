var T=Object.defineProperty;var b=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var g=(s,n,i)=>n in s?T(s,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[n]=i,d=(s,n)=>{for(var i in n||(n={}))_.call(n,i)&&g(s,i,n[i]);if(b)for(var i of b(n))A.call(n,i)&&g(s,i,n[i]);return s};import{r as k,j as t}from"./main-577.js";import{_ as o,L as z}from"./bi.655.81.js";import{a as w}from"./bi.769.842.js";import{T as j,t as E}from"./bi.934.737.js";function G({airtableConf:s,setAirtableConf:n,step:i,setStep:N,loading:a,setLoading:v,isInfo:r}){const[c,y]=k.useState(!1),[m,u]=k.useState({name:"",auth_token:""}),{airtable:e}=E,L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s!=null&&s.default,N(2)},h=l=>{const x=d({},s),p=d({},m);p[l.target.name]="",x[l.target.name]=l.target.value,u(p),n(x)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(j,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(j,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:o("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:s.name,type:"text",placeholder:o("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:o("Personal access token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"auth_token",value:s.auth_token,type:"text",placeholder:o("API Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.auth_token}),t.jsxs("small",{className:"d-blk mt-3",children:[o("To Get personal access token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://airtable.com/create/tokens",target:"_blank",rel:"noreferrer",children:o("Airtable Personal access tokens","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(s,n,u,y,a,v,"authentication"),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:c||a.auth,children:[c?o("Authorized ✔","bit-integrations"):o("Authorize","bit-integrations"),a.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:L,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!c,children:[o("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
