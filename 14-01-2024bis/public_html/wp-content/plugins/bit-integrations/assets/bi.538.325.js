import{r as a,j as e}from"./main-577.js";import{B as N}from"./bi.232.720.js";import{_ as i,L as k,c as v,E as A}from"./bi.655.81.js";import{T as h,t as w}from"./bi.934.737.js";function T({academyLmsConf:o,setAcademyLmsConf:d,step:r,setStep:g,setSnackbar:m}){const{academyLms:t}=w,[n,b]=a.useState(!1),[l,c]=a.useState(!1),[x,p]=a.useState(!1),f=()=>{c("auth"),v({},"academy_lms_authorize").then(s=>{s!=null&&s.success&&(b(!0),m({show:!0,msg:i("Connected with Academy Lms Successfully","bit-integrations")})),c(!1),p(!0)})},j=s=>{const u=A(o);u[s.target.name]=s.target.value,d(u)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(h,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(h,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:j,name:"name",value:o.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),l==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(k,{size:25,clr:"#022217",className:"mr-2"}),"Checking if Academy Lms is active!!!"]}),x&&!n&&!l&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Academy Lms plugin must be activated to integrate with Bit Integrations."]}),!n&&e.jsx("button",{onClick:f,className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",children:i("Connect","bit-integrations")}),n&&e.jsxs("button",{onClick:()=>g(2),className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",disabled:!n,children:[i("Next","bit-integrations"),e.jsx(N,{className:"ml-1 rev-icn"})]})]})}export{T as default};
