import{r,c as x,j as t,F as S,a as p,p as c,_ as v}from"./app-fba1d0c2.js";import{I as u}from"./input-9ccd4c8d.js";import{D as w}from"./drawer-e448d89d.js";import{L as C}from"./loading-component-a64795de.js";import{u as N}from"./selecta-service-a4ce61a0.js";import{P as y}from"./PencilIcon-7fc353e4.js";import"./dialog-240c9526.js";import"./use-flags-6940bf9f.js";import"./keyboard-eb175f2f.js";import"./hidden-35cd6dcd.js";import"./use-root-containers-15b6ecb3.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./description-40b3ab7d.js";import"./open-closed-759ce2e2.js";import"./transition-95cbd138.js";function q({data:a}){const[o,n]=r.useState({id:a.id,name:a.name,price:a.price}),i=x(),[f,s]=r.useState(!1),d=r.useRef(),[h,m]=r.useState(!1);function g(e){e.preventDefault(),i(c({status:"loading",message:"Loading..."})),s(!0),N(o).then(l=>{i(c(l.notify)),i(v(l.data.original.status)),s(!1)}).catch(l=>{s(!1)})}function b(e){m(!0),n({id:e.id,name:e.name,price:e.price})}return t(S,{children:t(w,{title:"Edit Raw Materials",open:h,setOpen:m,button:t("button",{onClick:()=>b(a),children:t(y,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:p("form",{ref:d,name:"form",onSubmit:g,className:"flex flex-col h-full w-full",children:[p("div",{className:"flex-1",children:[t(u,{onChange:e=>n({...o,name:e.target.value.toUpperCase()}),value:a.name,name:"bread_name",title:"Name of Raw Materials",placeholder:"Enter name of raw materials",type:"text"}),t(u,{onChange:e=>n({...o,price:e.target.value.toUpperCase()}),value:a.price,name:"price",title:"Price of Selecta",placeholder:"Enter the price",type:"number"})]}),t("div",{className:"flex-none",children:f?t(C,{}):t("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{q as default};