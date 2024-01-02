import{r as o,c as g,j as e,F as b,a as m,p as l,M as x}from"./app-fba1d0c2.js";import{I as p}from"./input-9ccd4c8d.js";import{D as v}from"./drawer-e448d89d.js";import{L as w}from"./loading-component-a64795de.js";import{c as y}from"./breads-service-083cba62.js";import{P as C}from"./PencilIcon-7fc353e4.js";import"./dialog-240c9526.js";import"./use-flags-6940bf9f.js";import"./keyboard-eb175f2f.js";import"./hidden-35cd6dcd.js";import"./use-root-containers-15b6ecb3.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./description-40b3ab7d.js";import"./open-closed-759ce2e2.js";import"./transition-95cbd138.js";function O(){const[t,n]=o.useState({}),[u,s]=o.useState(!1),d=o.useRef(),a=g(),[f,c]=o.useState(!1);function h(r){r.preventDefault(),a(l({status:"loading",message:"Loading..."})),s(!0),y(t).then(i=>{a(l(i.notify)),a(x(i.data.original.status)),n({}),d.current.reset(),s(!1)}).catch(i=>{a(l({status:"error",message:"Loading..."})),s(!1)})}return e(b,{children:e(v,{title:"Create Bread",open:f,setOpen:c,button:e("span",{className:"hidden sm:block",children:m("button",{onClick:()=>c(!0),type:"button",className:"bg-red-500 inline-flex items-center rounded-md  text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600",children:[e(C,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-white","aria-hidden":"true"}),"Create Bread"]})}),children:m("form",{ref:d,name:"form",onSubmit:h,className:"flex flex-col h-full w-full",children:[m("div",{className:"flex-1",children:[e(p,{onChange:r=>n({...t,name:r.target.value.toUpperCase()}),value:t.name,name:"bread_name",title:"Name of Bread",placeholder:"Enter name of bread",type:"text"}),e(p,{onChange:r=>n({...t,price:r.target.value}),value:t.price,name:"price",title:"Price",placeholder:"Enter Price",type:"number"})]}),e("div",{className:"flex-none",children:u?e(w,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{O as default};