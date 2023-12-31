import{r,c as x,j as t,F as S,a as p,p as c,Y as v}from"./app-d8b8c24c.js";import{I as u}from"./input-fcdcd036.js";import{D as w}from"./drawer-f04b670f.js";import{L as C}from"./loading-component-9592e567.js";import{u as N}from"./selecta-service-439a0fab.js";import{P as y}from"./PencilIcon-bd43f856.js";import"./dialog-0d0e975e.js";import"./use-flags-b545cc66.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";import"./open-closed-6fc61065.js";import"./transition-84434c72.js";function H({data:a}){const[o,n]=r.useState({id:a.id,name:a.name,price:a.price}),i=x(),[f,s]=r.useState(!1),d=r.useRef(),[h,m]=r.useState(!1);function g(e){e.preventDefault(),i(c({status:"loading",message:"Loading..."})),s(!0),N(o).then(l=>{i(c(l.notify)),i(v(l.data.original.status)),s(!1)}).catch(l=>{s(!1)})}function b(e){m(!0),n({id:e.id,name:e.name,price:e.price})}return t(S,{children:t(w,{title:"Edit Raw Materials",open:h,setOpen:m,button:t("button",{onClick:()=>b(a),children:t(y,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:p("form",{ref:d,name:"form",onSubmit:g,className:"flex flex-col h-full w-full",children:[p("div",{className:"flex-1",children:[t(u,{onChange:e=>n({...o,name:e.target.value.toUpperCase()}),value:a.name,name:"bread_name",title:"Name of Raw Materials",placeholder:"Enter name of raw materials",type:"text"}),t(u,{onChange:e=>n({...o,price:e.target.value.toUpperCase()}),value:a.price,name:"price",title:"Price of Selecta",placeholder:"Enter the price",type:"number"})]}),t("div",{className:"flex-none",children:f?t(C,{}):t("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{H as default};