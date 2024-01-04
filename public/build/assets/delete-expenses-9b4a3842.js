import{r as n,c as b,j as e,F as h,a,t as o,h as l,y as x}from"./app-eb237854.js";import{M as g}from"./modal-4bff4c47.js";import{L as y}from"./loading-component-1a997bac.js";import{d as v}from"./expenses-service-6692c7c0.js";import{T as N}from"./TrashIcon-1a0e7005.js";import"./transition-6275e480.js";import"./use-flags-1f69cd58.js";import"./open-closed-f62fba30.js";import"./dialog-1fc15b37.js";import"./keyboard-f9d3da82.js";import"./hidden-2c9b8996.js";import"./use-root-containers-f2e46cee.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./description-9b69da41.js";function q({id:d,account:m,branch_id:c}){let[u,t]=n.useState(!1);const[f,s]=n.useState(!1),i=b();function p(){s(!0),i(o({status:"loading",message:"Loading..."})),v({id:d,seller_id:m.id,branch_id:c,date:l().format("L"),meridiem:l().format("A")}).then(r=>{i(o(r.notify)),i(x(r.status)),t(!1),s(!1)}).catch(r=>{i(o({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(h,{children:a(g,{title:"Delete Expenses",setIsOpen:t,isOpen:u,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(N,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:e("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete the credit record?"})}),e("div",{className:"mt-4",children:a("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),f?e("div",{className:"w-20",children:e(y,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>p(),children:"Delete It"})]})})]})})}export{q as default};