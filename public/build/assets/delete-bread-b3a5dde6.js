import{r as l,c as u,j as e,F as f,a as o,p as n,M as p}from"./app-44ab44c4.js";import{M as b}from"./modal-9d964e67.js";import{d as g}from"./breads-service-5b510c59.js";import{L as h}from"./loading-component-fd062139.js";import{T as x}from"./TrashIcon-b91ea000.js";import"./transition-e90b95e6.js";import"./use-flags-e6f7da6a.js";import"./open-closed-51f532d6.js";import"./dialog-4bcef038.js";import"./keyboard-3645b197.js";import"./hidden-398850c9.js";import"./use-root-containers-6f3c736e.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./description-46dd974b.js";function O({data:a}){let[d,t]=l.useState(!1);const[m,s]=l.useState(!1),i=u();function c(){s(!0),i(n({status:"loading",message:"Loading..."})),g(a.id).then(r=>{i(n(r.notify)),t(!1),i(p(r.data.original.status)),s(!1)}).catch(r=>{i(n({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(f,{children:o(b,{title:"Delete Bread",setIsOpen:t,isOpen:d,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(x,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:o("p",{className:"text-sm text-gray-500",children:["Are you sure you want to delete the ",a.name,"?"]})}),e("div",{className:"mt-4",children:o("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),m?e("div",{className:"w-20",children:e(h,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>c(),children:"Delete It"})]})})]})})}export{O as default};