var w=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var x=(i,e,n)=>e in i?w(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,u=(i,e)=>{for(var n in e||(e={}))T.call(e,n)&&x(i,n,e[n]);if(g)for(var n of g(e))M.call(e,n)&&x(i,n,e[n]);return i};import{r as l,j as s}from"./main-577.js";import{_ as r,L as p,c as _}from"./bi.655.81.js";import{B as C}from"./bi.232.720.js";import{T as f,t as E}from"./bi.934.737.js";function G({formID:i,mailPoetConf:e,setMailPoetConf:n,step:d,nextPage:j,setSnackbar:N,isInfo:k}){const[o,L]=l.useState(!1),[z,y]=l.useState({integrationName:""}),[A,v]=l.useState(!1),[c,h]=l.useState(!1),{mailPoet:t}=E,S=()=>{h("auth"),_({},"mail_poet_authorize").then(a=>{a!=null&&a.success&&(L(!0),N({show:!0,msg:r("Authorized Successfully","bit-integrations")})),v(!0),h(!1)})},I=a=>{const m=u({},e),b=u({},z);b[a.target.name]="",m[a.target.name]=a.target.value,y(b),n(m)};return s.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&s.jsx(f,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&s.jsx(f,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),s.jsx("div",{className:"mt-3",children:s.jsx("b",{children:r("Integration Name:","bit-integrations")})}),s.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:k}),c==="auth"&&s.jsxs("div",{className:"flx mt-5",children:[s.jsx(p,{size:25,clr:"#022217",className:"mr-2"}),"Checking if MailPoet is active!!!"]}),A&&!o&&!c&&s.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[s.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Please! First Install Mailpoet Plugins"]}),s.jsxs("button",{onClick:S,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||c,children:[o?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),c&&s.jsx(p,{size:20,clr:"#022217",className:"ml-2"})]}),s.jsx("br",{}),s.jsxs("button",{onClick:()=>j(2),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[r("Next","bit-integrations"),s.jsx(C,{className:"ml-1 rev-icn"})]})]})}export{G as default};