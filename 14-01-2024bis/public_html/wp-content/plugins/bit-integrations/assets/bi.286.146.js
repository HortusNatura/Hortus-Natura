import{i as h,u as b,b as c,m as j,r as u,j as t}from"./main-577.js";import{g as y,$ as w,h as _,e as B,_ as f}from"./bi.655.81.js";import{E as C,a as E}from"./bi.49.675.js";import{c as m,s as k}from"./bi.787.676.js";import{I as N}from"./bi.672.677.js";import{h as I,B as S}from"./bi.771.784.js";import"./bi.827.680.js";import"./bi.587.674.js";import"./bi.622.681.js";import"./bi.933.682.js";import"./bi.265.683.js";function G({allIntegURL:p}){const v=h(),{formID:l}=b(),[e,r]=c(y),[o,F]=c(w),a=j(_),[i,d]=u.useState(!1),[g,s]=u.useState({show:!1});function x(){switch(e.mainAction){case"1":return e.privacyId===void 0;case"2":return e.groupId===void 0;case"3":return e.friendId===void 0;case"4":return e.friendId===void 0;case"5":return e.forumId===void 0;case"6":return e.groupId===void 0;case"7":return e.friendId===void 0;case"8":return e.groupId===void 0||e.friendId===void 0;case"9":return e.groupId===void 0||e.friendId===void 0;case"10":return e.friendId===void 0;case"12":return e.friendId===void 0;case"13":return e.forumId===void 0;case"14":return e.groupId===void 0||e.friendId===void 0;case"15":return e.friendId===void 0;case"16":return e.friendId===void 0;case"17":return e.topicId===void 0||e.forumId===void 0;case"18":return e.userStatusId===void 0;default:return!1}}return t.jsxs("div",{style:{width:900},children:[t.jsx(B,{snack:g,setSnackbar:s}),t.jsxs("div",{className:"flx mt-3",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:f("Integration Name:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5",onChange:n=>I(n,e,r),name:"name",value:e.name,type:"text",placeholder:f("Integration Name...","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!m(o.triggered_entity)&&t.jsx(C,{setSnackbar:s}),m(o.triggered_entity)&&t.jsx(E,{setSnackbar:s}),t.jsx(S,{formID:l,formFields:a,handleInput:n=>I(n,e,r),buddyBossConf:e,setBuddyBossConf:r,isLoading:i,setIsLoading:d,setSnackbar:s}),t.jsx(N,{edit:!0,saveConfig:()=>k({flow:o,allIntegURL:p,conf:e,navigate:v,edit:1,setIsLoading:d,setSnackbar:s}),disabled:!e.mainAction||i||x(),isLoading:i,dataConf:e,setDataConf:r,formFields:a}),t.jsx("br",{})]})}export{G as default};
