import{r as l,c as h,j as e,a as c,n as p,w as b}from"./app-2504df6d.js";import{D as x}from"./drawer-423fda89.js";import{I as f}from"./input-3cf9e8e6.js";import{L as v}from"./loading-component-c05027de.js";import{b as N}from"./recipe-service-2ac9c6a0.js";import{P as y}from"./PencilIcon-0dfb6198.js";import"./dialog-b3562fd5.js";import"./use-flags-d2ac3b38.js";import"./keyboard-057a4a8a.js";import"./hidden-7de8d8fd.js";import"./use-root-containers-ce4e1455.js";import"./use-owner-17d62cec.js";import"./description-4618bf7a.js";import"./open-closed-b5309c82.js";import"./transition-25203836.js";function M({data:t}){const[a,m]=l.useState({id:t.id,name:t.name,oldName:t.name,target:t.target}),n=h(),[u,i]=l.useState(!1),[d,s]=l.useState(!1);function g(o){o.preventDefault(),i(!0),console.log("for,",a),N(a).then(r=>{r.status=="success"?(s(!1),n(p(r.notify)),n(b(r[0].original.status)),i(!1)):(n(p(r.notify)),i(!1))})}return e(x,{title:"Edit Recipe",button:e("button",{onClick:()=>s(!0),children:e(y,{className:"h-6 text-blue-700"})}),open:d,setOpen:s,children:c("form",{onSubmit:g,name:"form",className:"flex flex-col h-full w-full",children:[c("div",{className:"flex-1",children:[e(f,{onChange:o=>m({...a,name:o.target.value}),value:t.name,name:"name",title:"Recipe Name",placeholder:"Enter name of recipe",type:"text"}),e(f,{onChange:o=>m({...a,target:o.target.value}),value:t.target,name:"target",title:"Target Pcs",placeholder:"Enter bread target",type:"number"})]}),e("div",{className:"flex-none",children:u?e(v,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{M as default};