import{r,c as x,j as t,F as S,a as p,t as c,a0 as v}from"./app-eb237854.js";import{I as u}from"./input-3a1442a7.js";import{D as w}from"./drawer-c7f8627d.js";import{L as C}from"./loading-component-1a997bac.js";import{u as N}from"./selecta-service-675a05de.js";import{P as y}from"./PencilIcon-8cee5ffb.js";import"./dialog-1fc15b37.js";import"./use-flags-1f69cd58.js";import"./keyboard-f9d3da82.js";import"./hidden-2c9b8996.js";import"./use-root-containers-f2e46cee.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./description-9b69da41.js";import"./open-closed-f62fba30.js";import"./transition-6275e480.js";function q({data:a}){const[o,n]=r.useState({id:a.id,name:a.name,price:a.price}),i=x(),[f,s]=r.useState(!1),d=r.useRef(),[h,m]=r.useState(!1);function g(e){e.preventDefault(),i(c({status:"loading",message:"Loading..."})),s(!0),N(o).then(l=>{i(c(l.notify)),i(v(l.data.original.status)),s(!1)}).catch(l=>{s(!1)})}function b(e){m(!0),n({id:e.id,name:e.name,price:e.price})}return t(S,{children:t(w,{title:"Edit Raw Materials",open:h,setOpen:m,button:t("button",{onClick:()=>b(a),children:t(y,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:p("form",{ref:d,name:"form",onSubmit:g,className:"flex flex-col h-full w-full",children:[p("div",{className:"flex-1",children:[t(u,{onChange:e=>n({...o,name:e.target.value.toUpperCase()}),value:a.name,name:"bread_name",title:"Name of Raw Materials",placeholder:"Enter name of raw materials",type:"text"}),t(u,{onChange:e=>n({...o,price:e.target.value.toUpperCase()}),value:a.price,name:"price",title:"Price of Selecta",placeholder:"Enter the price",type:"number"})]}),t("div",{className:"flex-none",children:f?t(C,{}):t("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{q as default};