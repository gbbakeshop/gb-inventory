import{r as l,c as h,j as e,a as p,t as c,C as b}from"./app-eb237854.js";import{D as x}from"./drawer-c7f8627d.js";import{I as f}from"./input-3a1442a7.js";import{L as v}from"./loading-component-1a997bac.js";import{b as N}from"./recipe-service-6fbb4678.js";import{P as y}from"./PencilIcon-8cee5ffb.js";import"./dialog-1fc15b37.js";import"./use-flags-1f69cd58.js";import"./keyboard-f9d3da82.js";import"./hidden-2c9b8996.js";import"./use-root-containers-f2e46cee.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./description-9b69da41.js";import"./open-closed-f62fba30.js";import"./transition-6275e480.js";function O({data:t}){const[a,m]=l.useState({id:t.id,name:t.name,oldName:t.name,target:t.target}),i=h(),[u,n]=l.useState(!1),[d,s]=l.useState(!1);function g(o){o.preventDefault(),n(!0),console.log("for,",a),N(a).then(r=>{r.status=="success"?(s(!1),i(c(r.notify)),i(b(r[0].original.status)),n(!1)):(i(c(r.notify)),n(!1))})}return e(x,{title:"Edit Recipe",button:e("button",{onClick:()=>s(!0),children:e(y,{className:"h-6 text-blue-700"})}),open:d,setOpen:s,children:p("form",{onSubmit:g,name:"form",className:"flex flex-col h-full w-full",children:[p("div",{className:"flex-1",children:[e(f,{onChange:o=>m({...a,name:o.target.value}),value:t.name,name:"name",title:"Recipe Name",placeholder:"Enter name of recipe",type:"text"}),e(f,{onChange:o=>m({...a,target:o.target.value}),value:t.target,name:"target",title:"Target Pcs",placeholder:"Enter bread target",type:"number"})]}),e("div",{className:"flex-none",children:u?e(v,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{O as default};