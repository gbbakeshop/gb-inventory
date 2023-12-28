import{r as l,c as u,j as e,F as f,a as n,n as o,z as p}from"./app-2504df6d.js";import{M as b}from"./modal-6610d6cc.js";import{d as g}from"./breads-service-a156f472.js";import{L as h}from"./loading-component-c05027de.js";import{T as x}from"./TrashIcon-cf294bca.js";import"./transition-25203836.js";import"./use-flags-d2ac3b38.js";import"./open-closed-b5309c82.js";import"./dialog-b3562fd5.js";import"./keyboard-057a4a8a.js";import"./hidden-7de8d8fd.js";import"./use-root-containers-ce4e1455.js";import"./use-owner-17d62cec.js";import"./description-4618bf7a.js";function M({data:a}){let[d,t]=l.useState(!1);const[c,s]=l.useState(!1),i=u();function m(){s(!0),i(o({status:"loading",message:"Loading..."})),g(a.id).then(r=>{i(o(r.notify)),t(!1),i(p(r.data.original.status)),s(!1)}).catch(r=>{i(o({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(f,{children:n(b,{title:"Delete Bread",setIsOpen:t,isOpen:d,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(x,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:n("p",{className:"text-sm text-gray-500",children:["Are you sure you want to delete the ",a.name,"?"]})}),e("div",{className:"mt-4",children:n("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),c?e("div",{className:"w-20",children:e(h,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>m(),children:"Delete It"})]})})]})})}export{M as default};