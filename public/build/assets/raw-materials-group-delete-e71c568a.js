import{r as l,c as d,j as e,F as f,a as o,o as a,N as p}from"./app-91a8600d.js";import{M as b}from"./modal-d23340f7.js";import{L as g}from"./loading-component-3ce56bee.js";import{b as h}from"./raw-materials-group-service-8505e006.js";import{T as x}from"./TrashIcon-440e0f1f.js";import"./transition-1d397e7e.js";import"./use-flags-22d67c14.js";import"./open-closed-c138c28b.js";import"./dialog-8a3dcfe6.js";import"./keyboard-35cbc660.js";import"./hidden-ed81d2fe.js";import"./use-root-containers-83d53d68.js";import"./use-outside-click-9eac479e.js";import"./use-owner-e5cc948f.js";import"./description-3d7d9023.js";function F({data:n}){let[m,t]=l.useState(!1);const[u,s]=l.useState(!1),r=d();function c(){s(!0),r(a({status:"loading",message:"Loading..."})),h(n[0].token).then(i=>{r(a(i.notify)),t(!1),r(p(i.data.original.status)),s(!1)}).catch(i=>{r(a({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(f,{children:o(b,{title:"Delete Bread",setIsOpen:t,isOpen:m,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(x,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:o("p",{className:"text-sm text-gray-500",children:["Are you sure you want to delete the ",n[0].group_name,"?"]})}),e("div",{className:"mt-4",children:o("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),u?e("div",{className:"w-20",children:e(g,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>c(),children:"Delete It"})]})})]})})}export{F as default};
