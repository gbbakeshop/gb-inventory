import{c as f,r as a,j as t,a as h,n as m,s as b}from"./app-2504df6d.js";import{D as w}from"./drawer-423fda89.js";import{I as x}from"./input-3cf9e8e6.js";import{L as g}from"./loading-component-c05027de.js";import{e as N}from"./bread-record-service-30515ead.js";import{P as D}from"./PencilIcon-0dfb6198.js";import"./dialog-b3562fd5.js";import"./use-flags-d2ac3b38.js";import"./keyboard-057a4a8a.js";import"./hidden-7de8d8fd.js";import"./use-root-containers-ce4e1455.js";import"./use-owner-17d62cec.js";import"./description-4618bf7a.js";import"./open-closed-b5309c82.js";import"./transition-25203836.js";function U({data:e}){const o=f(),[u,s]=a.useState(!1),[c,n]=a.useState(!1),[i,d]=a.useState(e.new_production);function p(r){r.preventDefault(),s(!0),o(m({status:"loading",message:"Loading..."})),N({...e,new_production:i}).then(l=>{s(!1),n(!1),o(m(l.notify)),o(b(l[0].original.status))})}return t(w,{title:"EDIT "+e.bread.name+" BREAD NEW PRODUCTION",button:t("button",{onClick:()=>n(!0),children:t(D,{className:"h-6 text-blue-500 mr-3"})}),open:c,setOpen:n,children:h("form",{onSubmit:p,name:"form",className:"flex flex-col h-full w-full",children:[t("div",{className:"flex-1",children:t(x,{onChange:r=>d(r.target.value),value:i,name:"new_production",title:"Edit New Production",placeholder:"New Production",type:"number"})}),t("div",{className:"flex-none",children:u?t(g,{}):t("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{U as default};