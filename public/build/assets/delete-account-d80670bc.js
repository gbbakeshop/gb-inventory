import{r as n,c as m,j as e,F as f,a,o,H as p}from"./app-91a8600d.js";import{M as b}from"./modal-d23340f7.js";import{L as g}from"./loading-component-3ce56bee.js";import{d as h}from"./account-service-1e359308.js";import{T as x}from"./TrashIcon-440e0f1f.js";import"./transition-1d397e7e.js";import"./use-flags-22d67c14.js";import"./open-closed-c138c28b.js";import"./dialog-8a3dcfe6.js";import"./keyboard-35cbc660.js";import"./hidden-ed81d2fe.js";import"./use-root-containers-83d53d68.js";import"./use-outside-click-9eac479e.js";import"./use-owner-e5cc948f.js";import"./description-3d7d9023.js";function O({id:l}){let[c,t]=n.useState(!1);const[u,s]=n.useState(!1),i=m();function d(){s(!0),i(o({status:"loading",message:"Loading..."})),h({id:l}).then(r=>{i(o(r.notify)),i(p(r.status.original.status)),t(!1),s(!1)}).catch(r=>{i(o({status:"error",message:"Loading..."})),s(!1),s(!1)})}return e(f,{children:a(b,{title:"Delete Credits",setIsOpen:t,isOpen:c,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>t(!0),children:e(x,{className:"h-6 text-red-500"})})}),children:[e("div",{className:"mt-2",children:e("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete the credit record?"})}),e("div",{className:"mt-4",children:a("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>t(!1),children:"Close"}),u?e("div",{className:"w-20",children:e(g,{})}):e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:()=>d(),children:"Delete It"})]})})]})})}export{O as default};
