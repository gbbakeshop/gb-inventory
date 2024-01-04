import{r,c as I,j as a,a as m,t as u,h as c,y as S}from"./app-eb237854.js";import{D as C}from"./drawer-c7f8627d.js";import{L as N}from"./loading-component-1a997bac.js";import{S as p}from"./select-fe0fc4ef.js";import{I as D}from"./input-3a1442a7.js";import{u as E}from"./expenses-service-6692c7c0.js";import{P as L}from"./PencilIcon-8cee5ffb.js";import"./dialog-1fc15b37.js";import"./use-flags-1f69cd58.js";import"./keyboard-f9d3da82.js";import"./hidden-2c9b8996.js";import"./use-root-containers-f2e46cee.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./description-9b69da41.js";import"./open-closed-f62fba30.js";import"./transition-6275e480.js";function Y({rawMaterials:f,account:j,branch_id:g,data:i,users:h,selecta:A,breads:U}){const[_,n]=r.useState(!1),[x,k]=r.useState(!1),b=r.useRef(),l=I(),[t,o]=r.useState({user_id:i.user_id,raw_materials_id:i.raw_materials_id,selecta_id:i.selecta_id,amount:i.amount,discription:i.discription});function w(e){e.preventDefault(),l(u({status:"loading",message:"Loading..."})),E({id:i.id,branch_id:g,seller_id:i.seller_id,user_id:t.user_id,raw_materials_id:t.raw_materials_id,selecta_id:t.selecta_id,amount:t.amount,discription:t.discription,status:"unpaid",meridiem:c().format("A"),date:c().format("L")}).then(s=>{n(!1),l(u(s.notify)),l(S(s.status))})}function v(e){const s=e.target.selectedIndex,d=e.target.options[s].getAttribute("dataid");o({...t,user_id:d})}function y(e){const s=e.target.selectedIndex,d=e.target.options[s].getAttribute("dataid");o({...t,raw_materials_id:d})}return a(C,{title:"Update Credit",open:_,setOpen:n,button:a("div",{className:" inset-0 flex items-center justify-center",children:a("button",{type:"button",onClick:()=>n(!0),children:a(L,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})})}),children:m("form",{ref:b,name:"form",onSubmit:w,className:"flex flex-col h-full w-full",children:[m("div",{className:"flex-1",children:[a(p,{title:"GB Employee",value:t.user_id,onChange:e=>v(e),items:h.map(e=>({value:e.name,id:e.id}))}),a(p,{title:"Select Raw Materials",value:t.raw_materials_id,onChange:e=>y(e),items:f.map(e=>({value:e.name,id:e.id}))}),a("textarea",{onChange:e=>o({...t,discription:e.target.value}),value:t.discription,name:"description",placeholder:"Write your discription",className:"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}),a(D,{onChange:e=>o({...t,amount:e.target.value}),value:t.amount,name:"amount",title:"Input amount",placeholder:"Input amount",type:"text"})]}),a("div",{className:"flex-none",children:x?a(N,{}):a("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"UPDATE"})})]})})}export{Y as default};