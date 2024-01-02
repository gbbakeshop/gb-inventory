import{r as o,c as g,j as e,F as b,a as m,p as l,L as x}from"./app-13f09cc1.js";import{I as p}from"./input-b70acb70.js";import{D as v}from"./drawer-2a68c886.js";import{L as w}from"./loading-component-1dcda2c6.js";import{c as y}from"./breads-service-acbf085f.js";import{P as C}from"./PencilIcon-74164400.js";import"./dialog-9e5fb0f5.js";import"./use-flags-b92e8478.js";import"./keyboard-ac6e2ca1.js";import"./hidden-e11d2d3e.js";import"./use-root-containers-d5c0d305.js";import"./use-outside-click-fa077605.js";import"./use-owner-4a10483a.js";import"./description-ce464810.js";import"./open-closed-ba0c67c8.js";import"./transition-8907eb00.js";function O(){const[t,n]=o.useState({}),[u,s]=o.useState(!1),d=o.useRef(),a=g(),[f,c]=o.useState(!1);function h(r){r.preventDefault(),a(l({status:"loading",message:"Loading..."})),s(!0),y(t).then(i=>{a(l(i.notify)),a(x(i.data.original.status)),n({}),d.current.reset(),s(!1)}).catch(i=>{a(l({status:"error",message:"Loading..."})),s(!1)})}return e(b,{children:e(v,{title:"Create Bread",open:f,setOpen:c,button:e("span",{className:"hidden sm:block",children:m("button",{onClick:()=>c(!0),type:"button",className:"bg-red-500 inline-flex items-center rounded-md  text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600",children:[e(C,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-white","aria-hidden":"true"}),"Create Bread"]})}),children:m("form",{ref:d,name:"form",onSubmit:h,className:"flex flex-col h-full w-full",children:[m("div",{className:"flex-1",children:[e(p,{onChange:r=>n({...t,name:r.target.value.toUpperCase()}),value:t.name,name:"bread_name",title:"Name of Bread",placeholder:"Enter name of bread",type:"text"}),e(p,{onChange:r=>n({...t,price:r.target.value}),value:t.price,name:"price",title:"Price",placeholder:"Enter Price",type:"number"})]}),e("div",{className:"flex-none",children:u?e(w,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{O as default};