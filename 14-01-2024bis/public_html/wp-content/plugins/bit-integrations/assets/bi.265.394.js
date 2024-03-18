var z=Object.defineProperty;var I=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(o,a,s)=>a in o?z(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,j=(o,a)=>{for(var s in a||(a={}))M.call(a,s)&&S(o,s,a[s]);if(I)for(var s of I(a))E.call(a,s)&&S(o,s,a[s]);return o};import{r as u,j as t,i as G,u as D}from"./main-577.js";import{_ as d,L as R,c as H,E as O,e as W}from"./bi.655.81.js";import{S as J}from"./bi.880.909.js";import{s as K}from"./bi.787.676.js";import{I as Q}from"./bi.672.677.js";import{B as U,h as V,c as X}from"./bi.771.784.js";import{B as Y}from"./bi.232.720.js";import{T as P,t as Z}from"./bi.934.737.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function $({formID:o,buddyBossConf:a,setBuddyBossConf:s,step:m,setStep:h,isLoading:f,setIsLoading:b,setSnackbar:k}){const[n,p]=u.useState(!1),[c,y]=u.useState(!1),{buddyBoss:i}=Z,l=()=>{b("auth"),H({},"buddyBoss_authorize").then(r=>{r!=null&&r.success&&(p(!0),k({show:!0,msg:d("Connected with BuddyBoss Successfully","bit-integrations")})),b(!1),y(!0)})},x=r=>{const v=O(a);v[r.target.name]=r.target.value,s(v)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:m===1&&900,height:m===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(P,{title:i==null?void 0:i.title,youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(P,{title:i==null?void 0:i.title,docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:d("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:x,name:"name",value:a.name,type:"text",placeholder:d("Integration Name...","bit-integrations")}),f==="auth"&&t.jsxs("div",{className:"flx mt-5",children:[t.jsx(R,{size:25,clr:"#022217",className:"mr-2"}),"Checking if BuddyBoss is active!!!"]}),c&&!n&&!f&&t.jsxs("div",{className:"flx mt-5",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),"BuddyBoss plugin must be activated to integrate with Bit Integrations."]}),!n&&t.jsx("button",{onClick:l,className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",children:d("Connect","bit-integrations")}),n&&t.jsxs("button",{onClick:()=>h(2),className:"btn btcd-btn-lg green sh-sm flx mt-5",type:"button",disabled:!n,children:[d("Next","bit-integrations"),t.jsx(Y,{className:"ml-1 rev-icn"})]})]})}function fe({formFields:o,setFlow:a,flow:s,allIntegURL:m,isInfo:h,edit:f}){const b=G(),{formID:k}=D(),[n,p]=u.useState(!1),[c,y]=u.useState(1),[i,l]=u.useState({show:!1}),x=[{key:"1",label:"Create Group Pro"},{key:"2",label:"Add the user to a group"},{key:"3",label:"End friendship with a user Pro"},{key:"4",label:"Follow a user Pro"},{key:"5",label:"Post a topic in a forum Pro"},{key:"6",label:"Remove user from a group Pro"},{key:"7",label:"Send a friendship request to a user Pro"},{key:"8",label:"Send a notification to all members of a group Pro"},{key:"9",label:"Send a private message to all members of a group Pro"},{key:"10",label:"Send a private message to a user Pro"},{key:"11",label:"Send a notification to a user Pro"},{key:"12",label:"Stop following a user Pro"},{key:"13",label:"Subscribe the user to a forum Pro"},{key:"14",label:"Add a post to the activity stream of a group Pro"},{key:"15",label:"Add a post to the site wide activity stream Pro"},{key:"16",label:"Add a post to the user's activity stream Pro"},{key:"17",label:"Post a reply to a topic in a forum"},{key:"18",label:"Set the user's status to a specific status"}],r=[{key:"group_name",label:"Group Name",required:!0}],v=[{key:"topic_content",label:"Topic Content",required:!0},{key:"topic_title",label:"Topic Title",required:!1}],_=[{key:"notification_content",label:"Notification Content",required:!0},{key:"notification_link",label:"Notification Link",required:!1}],N=[{key:"message_content",label:"Message Content",required:!0},{key:"message_subject",label:"Message subject",required:!1}],A=[{key:"activity_action",label:"activity_action",required:!0},{key:"activity_content",label:"activity_content",required:!0}],w=[{key:"activity_action",label:"activity_action",required:!1},{key:"activity_action_link",label:"activity_action_link",required:!1},{key:"activity_content",label:"activity_content",required:!0}],C=[{key:"reply_content",label:"Reply Content",required:!0}],q=[{key:"1",label:"Public"},{key:"2",label:"Private"},{key:"3",label:"Hidden"}],B=[{key:"1",label:"Active"},{key:"2",label:"Suspend"}],[e,g]=u.useState({name:"BuddyBoss",type:"BuddyBoss",mainAction:"",field_map:[{formField:"",buddyBossFormField:""}],allActions:x,groupPrivacyOptions:q,userStatusOptions:B,createGroupFields:r,topicInForumFields:v,sendAllUserNotificationFields:_,sendAllGroupPrivateMessageFields:N,addPostToGroupFields:A,addPostSiteWideActivityStreamFields:w,postReplyTopicForumFields:C,actions:{}}),F=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),["1","5","8","9","10","11","14","15","16","17"].includes(e.mainAction)&&!X(e)){l({show:!0,msg:"Please map fields to continue."});return}e.mainAction!==""&&y(3)};function T(){switch(e.mainAction){case"1":return e.privacyId===void 0;case"2":return e.groupId===void 0;case"3":return e.friendId===void 0;case"4":return e.friendId===void 0;case"5":return e.forumId===void 0;case"6":return e.groupId===void 0;case"7":return e.friendId===void 0;case"8":return e.groupId===void 0||e.friendId===void 0;case"9":return e.groupId===void 0||e.friendId===void 0;case"10":return e.friendId===void 0;case"12":return e.friendId===void 0;case"13":return e.forumId===void 0;case"14":return e.groupId===void 0||e.friendId===void 0;case"15":return e.friendId===void 0;case"16":return e.friendId===void 0;case"17":return e.topicId===void 0||e.forumId===void 0;case"18":return e.userStatusId===void 0;default:return!1}}return t.jsxs("div",{children:[t.jsx(W,{snack:i,setSnackbar:l}),t.jsx("div",{className:"txt-center mt-2",children:t.jsx(J,{step:3,active:c})}),t.jsx($,{formID:k,buddyBossConf:e,setBuddyBossConf:g,step:c,setStep:y,isLoading:n,setIsLoading:p,setSnackbar:l}),t.jsxs("div",{className:"btcd-stp-page",style:j({},c===2&&{width:900,height:"auto",overflow:"visible"}),children:[t.jsx(U,{formFields:o,handleInput:L=>V(L,e,g),buddyBossConf:e,setBuddyBossConf:g,isLoading:n,setIsLoading:p,setSnackbar:l,allIntegURL:m,isInfo:h,edit:f}),t.jsxs("button",{onClick:()=>F(),disabled:!e.mainAction||n||T(),className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[d("Next","bit-integrations")," ",t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(Q,{step:c,saveConfig:()=>K({flow:s,setFlow:a,allIntegURL:m,navigate:b,conf:e,setIsLoading:p,setSnackbar:l}),isLoading:n,dataConf:e,setDataConf:g,formFields:o})]})}export{fe as default};
