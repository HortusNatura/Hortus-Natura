var K=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var A=(s,a,n)=>a in s?K(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,c=(s,a)=>{for(var n in a||(a={}))L.call(a,n)&&A(s,n,a[n]);if(k)for(var n of k(a))E.call(a,n)&&A(s,n,a[n]);return s};import{r as x,j as e}from"./main-577.js";import{_ as i,L as f,a8 as P,c as B,af as y}from"./bi.655.81.js";import{B as F}from"./bi.232.720.js";import{r as $}from"./bi.44.875.js";import{T as _,t as G}from"./bi.934.737.js";function J({campaignMonitorConf:s,setCampaignMonitorConf:a,step:n,setstep:N,setSnackbar:v,isInfo:d,isLoading:o,setIsLoading:u}){const[h,z]=x.useState(!1),[m,g]=x.useState({name:"",api_key:""}),[w,C]=x.useState(!1),{campaignMonitor:t}=G,S=()=>{const l=c({},s);if(!l.name||!l.client_id||!l.api_key){g({name:l.name?"":i("Integration name cann't be empty","bit-integrations"),client_id:l.client_id?"":i("Client Id cann't be empty","bit-integrations"),api_key:l.api_key?"":i("Access Api Key cann't be empty","bit-integrations")});return}u("auth");const b={api_key:l.api_key,client_id:l.client_id};B(b,"campaign_monitor_authorize").then(r=>{if(r&&r.success){const j=c({},s);j.tokenDetails=r.data,a(j),z(!0),y.success(i("Authorized Successfully","bit-integrations"))}else r&&r.data||!r.success&&typeof r.data.Message=="string"?y.error(`${i("Authorization failed Cause:","bit-integrations")}${r.data.Message}. ${i("please try again","bit-integrations")}`):y.error(i("Authorization failed. please try again","bit-integrations"));C(!0),u(!1)})},p=l=>{const b=c({},s),r=c({},m);r[l.target.name]="",b[l.target.name]=l.target.value,g(r),a(b)},I=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),$(s,a,u,v),N(2)},T=`
            <h4>Get Client Id & Api key</h4>
            <ul>
                <li>First go to your CampaignMonitor dashboard.</li>
                <li>Click on Your "Profile Image" at the top right</li>
                <li>Click on the "Account Settings"</li>
                <li>Then Click "API keys"</li>
            </ul>`;return e.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(t==null?void 0:t.youTubeLink)&&e.jsx(_,{title:t==null?void 0:t.title,youTubeLink:t==null?void 0:t.youTubeLink}),(t==null?void 0:t.docLink)&&e.jsx(_,{title:t==null?void 0:t.title,docLink:t==null?void 0:t.docLink}),e.jsx("div",{className:"mt-3 wdt-200",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:s.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:d}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.name}),e.jsx("div",{className:"mt-3 wdt-250",children:e.jsx("b",{children:i("Client Id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"client_id",value:s.client_id,type:"text",placeholder:i("Client Id...","bit-integrations"),disabled:d}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.client_id}),e.jsx("div",{className:"mt-3 wdt-250",children:e.jsx("b",{children:i("Access Api Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:s.api_key,type:"text",placeholder:i("Access Api Key...","bit-integrations"),disabled:d}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),e.jsxs("small",{className:"d-blk mt-3",children:[i("To Get Client Id & Api Key, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://bitcode2.createsend.com/account/apikeys",target:"_blank",rel:"noreferrer",children:i("Campaign Monitor API Key","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),o==="auth"&&e.jsxs("div",{className:"flx mt-5",children:[e.jsx(f,{size:25,clr:"#022217",className:"mr-2"}),"Checking Api Key!!!"]}),w&&!h&&!o&&e.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[e.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"Sorry, Api key is invalid"]}),!d&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:S,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:h||o,children:[h?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),o&&e.jsx(f,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>I(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!h,children:[i("Next","bit-integrations"),e.jsx(F,{className:"ml-1 rev-icn"})]})]}),e.jsx(P,{note:T})]})}export{J as default};
