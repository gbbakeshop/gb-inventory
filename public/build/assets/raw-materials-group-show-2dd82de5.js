import{c as h,r as i,j as t,F as b,a as w,p as n,X as x}from"./app-44ab44c4.js";import{D as _}from"./drawer-f4bd4677.js";import{I as y}from"./input-7478b83a.js";import{L as D}from"./loading-component-fd062139.js";import{u as S}from"./raw-materials-group-service-be715e22.js";import{P as v}from"./PencilIcon-c4a8b00c.js";import"./dialog-4bcef038.js";import"./use-flags-e6f7da6a.js";import"./keyboard-3645b197.js";import"./hidden-398850c9.js";import"./use-root-containers-6f3c736e.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./description-46dd974b.js";import"./open-closed-51f532d6.js";import"./transition-e90b95e6.js";function O({data:l}){const r=h(),[p,u]=i.useState(!1),m=i.useRef(),[c,s]=i.useState(!1);function f(o){o.preventDefault(),s(!0),r(n({status:"loading",message:"Loading..."}));const a=new FormData(m.current),d=l.map((e,g)=>({...e,grams:a.get(`grams_${g}`).replace(/[^0-9.]/g,"")}));S(d).then(e=>{e.status=="success"?(s(!1),r(x(e.data.original.status)),r(n(e.notify))):r(n(e.notify)),u(!1)})}return t(b,{children:t(_,{title:"Edit Quantity",open:c,setOpen:s,button:t("button",{onClick:()=>s(!0),children:t(v,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:w("form",{ref:m,onSubmit:f,className:"flex flex-col h-full w-full",children:[t("div",{className:"flex-1",children:l.map((o,a)=>t(y,{value:o.grams??0,name:`grams_${a}`,title:o.raw_materials.name,placeholder:`Enter grams ${a+1}`,type:"text"},a))}),t("div",{className:"flex-none",children:p?t(D,{}):t("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{O as default};