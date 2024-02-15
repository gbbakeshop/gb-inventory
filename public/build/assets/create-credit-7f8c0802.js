import{r,c as w,j as a,a as c,t as u,h as m,x as N}from"./app-7410adb6.js";import{D as A}from"./drawer-32a72dc2.js";import{L}from"./loading-component-ecf92f96.js";import{c as k}from"./credit-service-4f592c83.js";import{S as l}from"./select-9a8a851a.js";import{I as D}from"./input-ead4f430.js";import{P as E}from"./PlusIcon-f7826403.js";import"./dialog-f79f2bdd.js";import"./use-flags-bb5e2bec.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./open-closed-d88e58b1.js";import"./transition-993263cf.js";function X({account:p,branch_id:f,selecta:g,breads:b,users:h}){const[x,s]=r.useState(!1),[_,j]=r.useState(!1),v=r.useRef(),d=w(),[t,n]=r.useState({user_id:null,bread_id:null,selecta_id:null,amount:0,discription:""});function C(e){e.preventDefault(),d(u({status:"loading",message:"Loading..."})),k({branch_id:f,seller_id:p.id,user_id:t.user_id,bread_id:t.bread_id,selecta_id:t.selecta_id,amount:t.amount,discription:t.discription,status:"unpaid",meridiem:m().format("A"),date:m().format("L")}).then(i=>{n({user_id:null,bread_id:null,selecta_id:null,amount:0,discription:""}),s(!1),d(u(i.notify)),d(N(i.status))})}function I(e){const i=e.target.selectedIndex,o=e.target.options[i].getAttribute("dataid");n({...t,user_id:o})}function S(e){const i=e.target.selectedIndex,o=e.target.options[i].getAttribute("dataid");n({...t,bread_id:o})}function y(e){const i=e.target.selectedIndex,o=e.target.options[i].getAttribute("dataid");n({...t,selecta_id:o})}return a(A,{title:"Create Credit",open:x,setOpen:s,button:a("span",{className:"hidden sm:block",children:a("button",{onClick:()=>s(!0),type:"button",children:a(E,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-green-500","aria-hidden":"true"})})}),children:c("form",{ref:v,name:"form",onSubmit:C,className:"flex flex-col h-full w-full",children:[c("div",{className:"flex-1",children:[a(l,{title:"GB Employee",value:t.user_id,onChange:e=>I(e),items:h.map(e=>({value:e.name,id:e.id}))}),a(l,{title:"Select Bread",value:t.bread_id,onChange:e=>S(e),items:b.map(e=>({value:e.name,id:e.id}))}),a(l,{title:"Select Selecta",value:t.selecta_id,onChange:e=>y(e),items:g.map(e=>({value:e.name,id:e.id}))}),a("textarea",{onChange:e=>n({...t,discription:e.target.value}),name:"description",placeholder:"Write your discription",className:"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}),a(D,{onChange:e=>n({...t,amount:e.target.value}),value:t.amount,name:"amount",title:"Input amount",placeholder:"Input amount",type:"text"})]}),a("div",{className:"flex-none",children:_?a(L,{}):a("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"CREATE"})})]})})}export{X as default};