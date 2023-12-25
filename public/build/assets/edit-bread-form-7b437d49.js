import{r as a,c as g,j as e,F as x,a as p,m as c,x as v}from"./app-326fe7cb.js";import{I as d}from"./input-a07790a4.js";import{D as y}from"./drawer-e49dce0f.js";import{L as N}from"./loading-component-d79c8f4d.js";import{u as S}from"./breads-service-2c42eef3.js";import{P as w}from"./PencilIcon-da90f55b.js";import"./dialog-c2d7a5e0.js";import"./use-flags-96fb4146.js";import"./keyboard-5e834d6e.js";import"./hidden-ad64290c.js";import"./use-root-containers-5be4d362.js";import"./use-owner-77703a6f.js";import"./description-c1d62b9e.js";import"./open-closed-6013aad3.js";import"./transition-70920480.js";function O({data:t}){const[o,m]=a.useState({id:t.id,name:t.name,price:t.price}),n=g(),[u,s]=a.useState(!1),f=a.useRef(),[h,l]=a.useState(!1);function b(r){r.preventDefault(),n(c({status:"loading",message:"Loading..."})),s(!0),S(o).then(i=>{n(c(i.notify)),n(v(i.data.original.status)),s(!1)}).catch(i=>{s(!1)})}return e(x,{children:e(y,{title:"Edit Bread",type:"edit",open:h,setOpen:l,button:e("button",{onClick:()=>l(!0),children:e(w,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:p("form",{ref:f,name:"form",onSubmit:b,className:"flex flex-col h-full w-full",children:[p("div",{className:"flex-1",children:[e(d,{onChange:r=>m({...o,name:r.target.value.toUpperCase()}),value:t.name,name:"bread_name",title:"Name of Bread",placeholder:"Enter name of bread",type:"text"}),e(d,{onChange:r=>m({...o,price:r.target.value}),value:t.price,name:"price",title:"Price",placeholder:"Enter Price",type:"number"})]}),e("div",{className:"flex-none",children:u?e(N,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{O as default};
