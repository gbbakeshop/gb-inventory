import{c as h,r as a,j as e,a as b,p,s as v}from"./app-d8b8c24c.js";import{D as g}from"./drawer-f04b670f.js";import{I as x}from"./input-fcdcd036.js";import{L as D}from"./loading-component-9592e567.js";import{m as S}from"./bread-record-service-30515ead.js";import{C as B}from"./ChevronDoubleRightIcon-d77c839f.js";import"./dialog-0d0e975e.js";import"./use-flags-b545cc66.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";import"./open-closed-6fc61065.js";import"./transition-84434c72.js";function H({data:s,account:u}){const t=h(),[d,n]=a.useState(!1),[c,o]=a.useState(!1),[i,l]=a.useState(0);function f(r){r.preventDefault(),n(!0),t(p({status:"loading",message:"Loading..."})),S({...s,over:i,seller_id:u.id}).then(m=>{n(!1),o(!1),l(0),t(p(m.notify)),t(v(m[0].original.status))})}return e(g,{title:"MOVE "+s.bread.name+" BREAD",button:e("button",{onClick:()=>o(!0),children:e(B,{className:"h-6 text-red-500"})}),open:c,setOpen:o,children:b("form",{onSubmit:f,name:"form",className:"flex flex-col h-full w-full",children:[e("div",{className:"flex-1",children:e(x,{onChange:r=>l(r.target.value),value:i,name:"over",title:"Enter Over Bread",placeholder:"Enter Over",type:"number"})}),e("div",{className:"flex-none",children:d?e(D,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{H as default};