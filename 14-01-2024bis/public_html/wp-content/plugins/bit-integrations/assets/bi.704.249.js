var v=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(a,s,n)=>s in a?v(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n,l=(a,s)=>{for(var n in s||(s={}))z.call(s,n)&&j(a,n,s[n]);if(x)for(var n of x(s))_.call(s,n)&&j(a,n,s[n]);return a};import{r as T,j as e}from"./main-577.js";import{_ as i,L as E,a8 as S}from"./bi.655.81.js";import{a as I}from"./bi.233.741.js";import{T as N,t as C}from"./bi.934.737.js";function R({formID:a,slackConf:s,setSlackConf:n,step:d,setstep:k,isLoading:m,setIsLoading:A,setSnackbar:f,redirectLocation:F,isInfo:r}){const[o,w]=T.useState(!1),[b,h]=T.useState({accessToken:""}),{slack:t}=C,y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2)},u=c=>{const p=l({},s),g=l({},b);g[c.target.name]="",p[c.target.name]=c.target.value,h(g),n(p)},L=`
            <h4>Get Access Token few step</h4>
            <ul>
                <li>First create app.</li>
                <li>Add an OAuth Scope <b>'channels:read, channels:write, chat:write, files:read, files:write'</b>.</li>
                <li>Generate Access Token clicking <b> 'install to Workspace'</b>.</li>
            </ul>`;return e.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(N,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(N,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"name",value:s.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),e.jsxs("small",{className:"d-blk mt-5",children:[i("To get access Token , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://api.slack.com/apps?new_app=1/",target:"_blank",rel:"noreferrer",children:i("Slack Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Access Token:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:u,name:"accessToken",value:s.accessToken,type:"text",placeholder:i("Access Token...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red"},children:b.accessToken}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>I(s,n,h,w,A,f),className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:o||m,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),m&&e.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:y,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(S,{note:L})]})}export{R as default};
