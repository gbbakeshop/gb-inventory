import{r,c as b,j as e,F as g,a as u,t as d,V as x}from"./app-7410adb6.js";import{I as w}from"./input-ead4f430.js";import{D as v}from"./drawer-32a72dc2.js";import{L as S}from"./loading-component-ecf92f96.js";import{S as N}from"./select-9a8a851a.js";import{u as C}from"./raw-materials-service-f02ba7ea.js";import{P as L}from"./PencilIcon-57fd3964.js";import"./dialog-f79f2bdd.js";import"./use-flags-bb5e2bec.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./open-closed-d88e58b1.js";import"./transition-993263cf.js";function V({data:t}){const[s,l]=r.useState({id:t.id,name:t.name,bind:t.bind}),o=b(),[p,i]=r.useState(!1),c=r.useRef(),[f,m]=r.useState(!1);function h(a){a.preventDefault(),o(d({status:"loading",message:"Loading..."})),i(!0),C(s).then(n=>{o(d(n.notify)),o(x(n.data.original.status)),i(!1)}).catch(n=>{i(!1)})}return e(g,{children:e(v,{title:"Edit Raw Materials",open:f,setOpen:m,button:e("button",{onClick:()=>m(!0),children:e(L,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:u("form",{ref:c,name:"form",onSubmit:h,className:"flex flex-col h-full w-full",children:[u("div",{className:"flex-1",children:[e(w,{onChange:a=>l({...s,name:a.target.value.toUpperCase()}),value:t.name,name:"bread_name",title:"Name of Raw Materials",placeholder:"Enter name of raw materials",type:"text"}),e(N,{value:t.bind=="Grams"?1:0,onChange:a=>l({...s,bind:a.target.value}),items:[{value:"Grams",id:1},{value:"Pcs",id:2}]})]}),e("div",{className:"flex-none",children:p?e(S,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{V as default};