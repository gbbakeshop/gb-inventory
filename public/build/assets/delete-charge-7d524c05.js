import{r as a,c as b,j as e,F as h,a as n,t as o,h as l,w as g}from"./app-5f0ce7e9.js";import{M as x}from"./modal-7380c9c3.js";import{L as v}from"./loading-component-362fbef5.js";import{d as y}from"./charge-service-b8eaa220.js";import{T as N}from"./TrashIcon-848849b3.js";import"./transition-6b0aa6c1.js";import"./use-flags-77b5aa33.js";import"./open-closed-80f1f5bd.js";import"./dialog-69af8821.js";import"./keyboard-ea716521.js";import"./hidden-ade8ec98.js";import"./use-root-containers-bc82b08b.js";import"./use-outside-click-2cb1b6ec.js";import"./use-owner-df390e19.js";import"./description-bd6beec8.js";function E({id:d,account:m,branch_id:c}){let[u,t]=a.useState(!1);const[f,s]=a.useState(!1),r=b();function p(){s(!0),r(o({status:"loading",message:"Loading..."})),y({id:d,seller_id:m.id,branch_id:c,date:l().format("L"),meridiem:l().format("A")}).then(i=>{r(o(i.notify)),r(g(i.status)),t(!1),s(!1)}).catch(i=>{r(o({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(h,{children:n(x,{title:"Delete Credits",setIsOpen:t,isOpen:u,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(N,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:e("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete the credit record?"})}),e("div",{className:"mt-4",children:n("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),f?e("div",{className:"w-20",children:e(v,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>p(),children:"Delete It"})]})})]})})}export{E as default};