import{e as h,r as a,j as e,a as b,s as u,l as v}from"./app-437e6c0e.js";import{D as g}from"./drawer-42ec8ad2.js";import{I as x}from"./input-bb9ea5bc.js";import{L as D}from"./loading-component-92634ae4.js";import{m as S}from"./bread-record-service-6f175cc2.js";import{C as B}from"./ChevronDoubleRightIcon-bdb4f1b1.js";import"./dialog-78626260.js";import"./use-flags-370f42e7.js";import"./hidden-957318ab.js";import"./use-root-containers-94fc8c7e.js";import"./transition-298a5609.js";import"./open-closed-aad4ea97.js";import"./description-27a61611.js";function T({data:s,account:d}){const t=h(),[p,n]=a.useState(!1),[c,o]=a.useState(!1),[l,i]=a.useState(0);function f(r){r.preventDefault(),n(!0),t(u({status:"loading",message:"Loading..."})),S({...s,over:l,seller_id:d.id}).then(m=>{n(!1),o(!1),i(0),t(u(m.notify)),t(v(m[0].original.status))})}return e(g,{title:"MOVE "+s.bread.name+" BREAD",button:e("button",{onClick:()=>o(!0),children:e(B,{className:"h-6 text-red-500"})}),open:c,setOpen:o,children:b("form",{onSubmit:f,name:"form",className:"flex flex-col h-full w-full",children:[e("div",{className:"flex-1",children:e(x,{onChange:r=>i(r.target.value),value:l,name:"over",title:"Enter Over Bread",placeholder:"Enter Over",type:"number"})}),e("div",{className:"flex-none",children:p?e(D,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{T as default};