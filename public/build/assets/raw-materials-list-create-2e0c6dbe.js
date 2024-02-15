import{r as n,c as h,j as e,F as g,a as m,t as l,V as b}from"./app-7410adb6.js";import{I as x}from"./input-ead4f430.js";import{D as w}from"./drawer-32a72dc2.js";import{L as v}from"./loading-component-ecf92f96.js";import{S as C}from"./select-9a8a851a.js";import{c as N}from"./raw-materials-service-f02ba7ea.js";import{P as S}from"./PencilIcon-57fd3964.js";import"./dialog-f79f2bdd.js";import"./use-flags-bb5e2bec.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./open-closed-d88e58b1.js";import"./transition-993263cf.js";function O(){const[t,o]=n.useState({name:"",bind:"Grams"}),[u,i]=n.useState(!1),d=n.useRef(),r=h(),[p,c]=n.useState(!1);function f(a){a.preventDefault(),r(l({status:"loading",message:"Loading..."})),i(!0),N(t).then(s=>{r(l(s.notify)),s.status=="success"&&(r(b(s.data.original.status)),o({name:"",bind:"Grams"}),d.current.reset()),i(!1)}).catch(s=>{r(l({status:"error",message:"Loading..."})),i(!1)})}return e(g,{children:e(w,{title:"Create Raw Materials",open:p,setOpen:c,button:e("span",{className:"hidden sm:block",children:m("button",{onClick:()=>c(!0),type:"button",className:"bg-red-500 inline-flex items-center rounded-md  text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600",children:[e(S,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-white","aria-hidden":"true"}),"Create Raw Materials"]})}),children:m("form",{ref:d,name:"form",onSubmit:f,className:"flex flex-col h-full w-full",children:[m("div",{className:"flex-1",children:[e(x,{onChange:a=>o({...t,name:a.target.value.toUpperCase()}),value:t.name,name:"bread_name",title:"Name of Raw Materials",placeholder:"Enter name of raw materials",type:"text"}),e(C,{value:t.bind,onChange:a=>o({...t,bind:a.target.value}),items:[{value:"Grams",id:1},{value:"Pcs",id:2}]})]}),e("div",{className:"flex-none",children:u?e(v,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{O as default};