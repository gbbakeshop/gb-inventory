import{r as o,c as g,j as e,F as x,a as l,p as m,Y as b}from"./app-d8b8c24c.js";import{I as d}from"./input-fcdcd036.js";import{D as S}from"./drawer-f04b670f.js";import{L as v}from"./loading-component-9592e567.js";import{c as C}from"./selecta-service-439a0fab.js";import{P as w}from"./PencilIcon-bd43f856.js";import"./dialog-0d0e975e.js";import"./use-flags-b545cc66.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";import"./open-closed-6fc61065.js";import"./transition-84434c72.js";function M(){const[t,n]=o.useState({name:"",price:"0"}),[u,i]=o.useState(!1),c=o.useRef(),r=g(),[f,p]=o.useState(!1);function h(a){a.preventDefault(),r(m({status:"loading",message:"Loading..."})),i(!0),C(t).then(s=>{r(m(s.notify)),s.status=="success"&&(r(b(s.data.original.status)),n({name:"",price:"0"}),c.current.reset()),i(!1)}).catch(s=>{r(m({status:"error",message:"Loading..."})),i(!1)})}return e(x,{children:e(S,{title:"Create Selecta",open:f,setOpen:p,button:e("span",{className:"hidden sm:block",children:l("button",{onClick:()=>p(!0),type:"button",className:"bg-red-500 inline-flex items-center rounded-md  text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600",children:[e(w,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-white","aria-hidden":"true"}),"Create Selecta"]})}),children:l("form",{ref:c,name:"form",onSubmit:h,className:"flex flex-col h-full w-full",children:[l("div",{className:"flex-1",children:[e(d,{onChange:a=>n({...t,name:a.target.value.toUpperCase()}),value:t.name,name:"selecta_name",title:"Name of Selecta",placeholder:"Enter name of selecta",type:"text"}),e(d,{onChange:a=>n({...t,price:a.target.value.toUpperCase()}),value:t.price,name:"price",title:"Price",placeholder:"Enter Price",type:"text"})]}),e("div",{className:"flex-none",children:u?e(v,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{M as default};
