var o=Object.defineProperty;var d=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(t,a,e)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,s=(t,a)=>{for(var e in a||(a={}))p.call(a,e)&&u(t,e,a[e]);if(d)for(var e of d(a))b.call(a,e)&&u(t,e,a[e]);return t};import{c as h,d as c,_ as f}from"./bi.655.81.js";const F=(t,a,e,i,l,n)=>{const r=s({},a),{name:m}=t.target;t.target.value!==""?r[m]=t.target.value:delete r[m],r[t.target.name]=t.target.value,e(s({},r))},_=(t,a,e,i)=>{e(!0),h(null,"fetch_all_membership").then(l=>{if(l&&l.success){a(n=>{const r=s({},n);return r.default||(r.default={}),l.data&&(r.default.allMemberShips=l.data),r}),e(!1),c.success(f("All membership fetched successfully","bit-integrations"));return}e(!1),c.error(f("Membership fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},w=(t,a,e,i)=>{e(!0),h(null,"fetch_all_payment_gateway").then(l=>{if(l&&l.success){a(n=>{const r=s({},n);return r.default||(r.default={}),l.data&&(r.default.allPaymentMethods=l.data),r}),e(!1),c.success(f("All payment method fetched successfully","bit-integrations"));return}e(!1),c.error(f("Payment method fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},M=t=>{const a=t==null?void 0:t.memberpressFields.filter(e=>e.required===!0);return a.length>0?a.map(e=>({formField:"",memberpressFormField:e.key})):[{formField:"",memberpressFormField:""}]};export{_ as a,M as g,F as h,w as p};
