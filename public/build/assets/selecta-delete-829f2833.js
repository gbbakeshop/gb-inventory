import{r as l,c as u,j as e,F as f,a as o,t as n,a0 as p}from"./app-d2b09770.js";import{M as b}from"./modal-c3ec5a0c.js";import{L as g}from"./loading-component-dc558073.js";import{d as h}from"./selecta-service-8762e3eb.js";import{T as x}from"./TrashIcon-4b1435a1.js";import"./transition-fbae7002.js";import"./use-flags-ff80cabd.js";import"./open-closed-16818905.js";import"./dialog-50d3102e.js";import"./keyboard-b9724d1e.js";import"./hidden-35e15615.js";import"./use-root-containers-a17000d0.js";import"./use-outside-click-16496528.js";import"./use-owner-b99c53d2.js";import"./description-306b1a94.js";function O({data:a}){let[c,t]=l.useState(!1);const[d,s]=l.useState(!1),i=u();function m(){s(!0),i(n({status:"loading",message:"Loading..."})),h(a.id).then(r=>{i(n(r.notify)),t(!1),i(p(r.data.original.status)),s(!1)}).catch(r=>{i(n({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(f,{children:o(b,{title:"Delete Bread",setIsOpen:t,isOpen:c,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(x,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:o("p",{className:"text-sm text-gray-500",children:["Are you sure you want to delete the ",a.name,"?"]})}),e("div",{className:"mt-4",children:o("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),d?e("div",{className:"w-20",children:e(g,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>m(),children:"Delete It"})]})})]})})}export{O as default};
