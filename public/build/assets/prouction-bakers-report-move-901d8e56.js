import{c as h,r as a,j as e,a as b,t as p,s as v}from"./app-8b7f6c54.js";import{D as g}from"./drawer-23597b02.js";import{I as x}from"./input-fffc9654.js";import{L as D}from"./loading-component-af5f856c.js";import{m as S}from"./bread-record-service-30515ead.js";import{C as B}from"./ChevronDoubleRightIcon-d8bc5165.js";import"./dialog-6887b94d.js";import"./use-flags-1721155c.js";import"./keyboard-20917a55.js";import"./hidden-15ff79fd.js";import"./use-root-containers-a6380caf.js";import"./use-outside-click-68205d4a.js";import"./use-owner-2c5c579b.js";import"./description-feb4703c.js";import"./open-closed-ecfdd2ea.js";import"./transition-4bf83aee.js";function P({data:s,account:u}){const t=h(),[d,n]=a.useState(!1),[c,o]=a.useState(!1),[i,l]=a.useState(0);function f(r){r.preventDefault(),n(!0),t(p({status:"loading",message:"Loading..."})),S({...s,over:i,seller_id:u.id}).then(m=>{n(!1),o(!1),l(0),t(p(m.notify)),t(v(m[0].original.status))})}return e(g,{title:"MOVE "+s.bread.name+" BREAD",button:e("button",{onClick:()=>o(!0),children:e(B,{className:"h-6 text-red-500"})}),open:c,setOpen:o,children:b("form",{onSubmit:f,name:"form",className:"flex flex-col h-full w-full",children:[e("div",{className:"flex-1",children:e(x,{onChange:r=>l(r.target.value),value:i,name:"over",title:"Enter Over Bread",placeholder:"Enter Over",type:"number"})}),e("div",{className:"flex-none",children:d?e(D,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{P as default};