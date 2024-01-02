import{r,c as x,j as t,F as S,a as p,p as c,Z as v}from"./app-13f09cc1.js";import{I as u}from"./input-b70acb70.js";import{D as w}from"./drawer-2a68c886.js";import{L as C}from"./loading-component-1dcda2c6.js";import{u as N}from"./selecta-service-4d6bb9c6.js";import{P as y}from"./PencilIcon-74164400.js";import"./dialog-9e5fb0f5.js";import"./use-flags-b92e8478.js";import"./keyboard-ac6e2ca1.js";import"./hidden-e11d2d3e.js";import"./use-root-containers-d5c0d305.js";import"./use-outside-click-fa077605.js";import"./use-owner-4a10483a.js";import"./description-ce464810.js";import"./open-closed-ba0c67c8.js";import"./transition-8907eb00.js";function Z({data:a}){const[o,n]=r.useState({id:a.id,name:a.name,price:a.price}),i=x(),[f,s]=r.useState(!1),d=r.useRef(),[h,m]=r.useState(!1);function g(e){e.preventDefault(),i(c({status:"loading",message:"Loading..."})),s(!0),N(o).then(l=>{i(c(l.notify)),i(v(l.data.original.status)),s(!1)}).catch(l=>{s(!1)})}function b(e){m(!0),n({id:e.id,name:e.name,price:e.price})}return t(S,{children:t(w,{title:"Edit Raw Materials",open:h,setOpen:m,button:t("button",{onClick:()=>b(a),children:t(y,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:p("form",{ref:d,name:"form",onSubmit:g,className:"flex flex-col h-full w-full",children:[p("div",{className:"flex-1",children:[t(u,{onChange:e=>n({...o,name:e.target.value.toUpperCase()}),value:a.name,name:"bread_name",title:"Name of Raw Materials",placeholder:"Enter name of raw materials",type:"text"}),t(u,{onChange:e=>n({...o,price:e.target.value.toUpperCase()}),value:a.price,name:"price",title:"Price of Selecta",placeholder:"Enter the price",type:"number"})]}),t("div",{className:"flex-none",children:f?t(C,{}):t("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{Z as default};