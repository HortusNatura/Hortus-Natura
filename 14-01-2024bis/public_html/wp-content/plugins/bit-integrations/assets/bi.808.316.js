var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(s,i,n)=>i in s?T(s,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[i]=n,m=(s,i)=>{for(var n in i||(i={}))L.call(i,n)&&j(s,n,i[n]);if(x)for(var n of x(i))z.call(i,n)&&j(s,n,i[n]);return s};import{r as k,j as t}from"./main-577.js";import{_ as a,L as w,a8 as E}from"./bi.655.81.js";import{g as G}from"./bi.126.881.js";import{T as y,t as I}from"./bi.934.737.js";function F({gravitecConf:s,setGravitecConf:i,step:n,setStep:N,loading:p,setLoading:S,isInfo:l}){const[d,A]=k.useState(!1),[r,b]=k.useState({site_url:"",app_key:"",app_secret:""}),{gravitec:e}=I,_=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),s!=null&&s.default,N(2)},o=c=>{const u=m({},s),h=m({},r);h[c.target.name]="",u[c.target.name]=c.target.value,b(h),i(u)},g=`
            <h4>To Get App key & App Secret</h4>
            <ul>
                <li>First go to your Gravitec dashboard.</li>
                <li>Click go to your "YOUR SITES" from left SideBar</li>
                <li>Then Click "Settings"</li>
                <li>Then Click "REST API"</li>
            </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&t.jsx(y,{title:e==null?void 0:e.title,youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&t.jsx(y,{title:e==null?void 0:e.title,docLink:e==null?void 0:e.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:s.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Site Url:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"site_url",value:s.site_url,type:"text",placeholder:a("Site Url...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:r.site_url}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("App key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"app_key",value:s.app_key,type:"text",placeholder:a("App key...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:r.app_key}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("App Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"app_secret",value:s.app_secret,type:"text",placeholder:a("App Secret...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:r.app_secret}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get App key & App Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://push.gravitec.net/push/1767754253528465408/settings/api",target:"_blank",children:a("Gravitec App key & Secret","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>G(s,i,b,A,p,S),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:d||p.auth,children:[d?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),p.auth&&t.jsx(w,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:_,className:"btn ml-auto btcd-btn-lg green sh-sm flx",type:"button",disabled:!d,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(E,{note:g})]})}export{F as default};