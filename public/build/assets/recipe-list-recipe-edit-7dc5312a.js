import{r as l,e as h,j as e,a as c,s as p,n as b}from"./app-437e6c0e.js";import{D as x}from"./drawer-42ec8ad2.js";import{I as f}from"./input-bb9ea5bc.js";import{L as v}from"./loading-component-92634ae4.js";import{b as N}from"./recipe-service-5bc9ac77.js";import{P as y}from"./PencilIcon-4616ed46.js";import"./dialog-78626260.js";import"./use-flags-370f42e7.js";import"./hidden-957318ab.js";import"./use-root-containers-94fc8c7e.js";import"./transition-298a5609.js";import"./open-closed-aad4ea97.js";import"./description-27a61611.js";function B({data:t}){const[o,m]=l.useState({id:t.id,name:t.name,oldName:t.name,target:t.target}),n=h(),[u,s]=l.useState(!1),[d,i]=l.useState(!1);function g(a){a.preventDefault(),s(!0),console.log("for,",o),N(o).then(r=>{r.status=="success"?(i(!1),n(p(r.notify)),n(b(r[0].original.status)),s(!1)):(n(p(r.notify)),s(!1))})}return e(x,{title:"Edit Recipe",button:e("button",{onClick:()=>i(!0),children:e(y,{className:"h-6 text-blue-700"})}),open:d,setOpen:i,children:c("form",{onSubmit:g,name:"form",className:"flex flex-col h-full w-full",children:[c("div",{className:"flex-1",children:[e(f,{onChange:a=>m({...o,name:a.target.value}),value:t.name,name:"name",title:"Recipe Name",placeholder:"Enter name of recipe",type:"text"}),e(f,{onChange:a=>m({...o,target:a.target.value}),value:t.target,name:"target",title:"Target Pcs",placeholder:"Enter bread target",type:"number"})]}),e("div",{className:"flex-none",children:u?e(v,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{B as default};
