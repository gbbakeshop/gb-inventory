import{r as l,e as m,j as e,F as f,a as n,s as o,v as p}from"./app-437e6c0e.js";import{M as b}from"./modal-041b90f5.js";import{d as g}from"./breads-service-c7783896.js";import{L as h}from"./loading-component-92634ae4.js";import{T as x}from"./TrashIcon-1575e225.js";import"./transition-298a5609.js";import"./use-flags-370f42e7.js";import"./open-closed-aad4ea97.js";import"./dialog-78626260.js";import"./hidden-957318ab.js";import"./use-root-containers-94fc8c7e.js";import"./description-27a61611.js";function T({data:a}){let[d,t]=l.useState(!1);const[c,s]=l.useState(!1),i=m();function u(){s(!0),i(o({status:"loading",message:"Loading..."})),g(a.id).then(r=>{i(o(r.notify)),t(!1),i(p(r.data.original.status)),s(!1)}).catch(r=>{i(o({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(f,{children:n(b,{title:"Delete Bread",setIsOpen:t,isOpen:d,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(x,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:n("p",{className:"text-sm text-gray-500",children:["Are you sure you want to delete the ",a.name,"?"]})}),e("div",{className:"mt-4",children:n("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),c?e("div",{className:"w-20",children:e(h,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>u(),children:"Delete It"})]})})]})})}export{T as default};
