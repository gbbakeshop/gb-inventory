import{r as o,c as g,j as e,F as x,a as l,t as m,a0 as b}from"./app-d2b09770.js";import{I as d}from"./input-6830b8f6.js";import{D as S}from"./drawer-501cfe44.js";import{L as v}from"./loading-component-dc558073.js";import{c as C}from"./selecta-service-8762e3eb.js";import{P as w}from"./PencilIcon-aa0ec778.js";import"./dialog-50d3102e.js";import"./use-flags-ff80cabd.js";import"./keyboard-b9724d1e.js";import"./hidden-35e15615.js";import"./use-root-containers-a17000d0.js";import"./use-outside-click-16496528.js";import"./use-owner-b99c53d2.js";import"./description-306b1a94.js";import"./open-closed-16818905.js";import"./transition-fbae7002.js";function O(){const[t,n]=o.useState({name:"",price:"0"}),[u,i]=o.useState(!1),c=o.useRef(),r=g(),[f,p]=o.useState(!1);function h(a){a.preventDefault(),r(m({status:"loading",message:"Loading..."})),i(!0),C(t).then(s=>{r(m(s.notify)),s.status=="success"&&(r(b(s.data.original.status)),n({name:"",price:"0"}),c.current.reset()),i(!1)}).catch(s=>{r(m({status:"error",message:"Loading..."})),i(!1)})}return e(x,{children:e(S,{title:"Create Selecta",open:f,setOpen:p,button:e("span",{className:"hidden sm:block",children:l("button",{onClick:()=>p(!0),type:"button",className:"bg-red-500 inline-flex items-center rounded-md  text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600",children:[e(w,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-white","aria-hidden":"true"}),"Create Selecta"]})}),children:l("form",{ref:c,name:"form",onSubmit:h,className:"flex flex-col h-full w-full",children:[l("div",{className:"flex-1",children:[e(d,{onChange:a=>n({...t,name:a.target.value.toUpperCase()}),value:t.name,name:"selecta_name",title:"Name of Selecta",placeholder:"Enter name of selecta",type:"text"}),e(d,{onChange:a=>n({...t,price:a.target.value.toUpperCase()}),value:t.price,name:"price",title:"Price",placeholder:"Enter Price",type:"text"})]}),e("div",{className:"flex-none",children:u?e(v,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{O as default};
