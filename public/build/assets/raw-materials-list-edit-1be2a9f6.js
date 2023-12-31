import{r,c as b,j as e,F as g,a as u,p as d,Q as x}from"./app-d8b8c24c.js";import{I as w}from"./input-fcdcd036.js";import{D as v}from"./drawer-f04b670f.js";import{L as S}from"./loading-component-9592e567.js";import{S as N}from"./select-acd1fcb4.js";import{u as C}from"./raw-materials-service-3ee202a4.js";import{P as L}from"./PencilIcon-bd43f856.js";import"./dialog-0d0e975e.js";import"./use-flags-b545cc66.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";import"./open-closed-6fc61065.js";import"./transition-84434c72.js";function O({data:t}){const[s,l]=r.useState({id:t.id,name:t.name,bind:t.bind}),o=b(),[p,i]=r.useState(!1),c=r.useRef(),[f,m]=r.useState(!1);function h(a){a.preventDefault(),o(d({status:"loading",message:"Loading..."})),i(!0),C(s).then(n=>{o(d(n.notify)),o(x(n.data.original.status)),i(!1)}).catch(n=>{i(!1)})}return e(g,{children:e(v,{title:"Edit Raw Materials",open:f,setOpen:m,button:e("button",{onClick:()=>m(!0),children:e(L,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:u("form",{ref:c,name:"form",onSubmit:h,className:"flex flex-col h-full w-full",children:[u("div",{className:"flex-1",children:[e(w,{onChange:a=>l({...s,name:a.target.value.toUpperCase()}),value:t.name,name:"bread_name",title:"Name of Raw Materials",placeholder:"Enter name of raw materials",type:"text"}),e(N,{value:t.bind=="Grams"?1:0,onChange:a=>l({...s,bind:a.target.value}),items:[{value:"Grams",id:1},{value:"Pcs",id:2}]})]}),e("div",{className:"flex-none",children:p?e(S,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{O as default};
