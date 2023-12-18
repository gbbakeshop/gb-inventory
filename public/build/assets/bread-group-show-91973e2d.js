import{r as a,e as s,j as e,F as d,a as r}from"./app-437e6c0e.js";import{D as o}from"./drawer-42ec8ad2.js";import"./dialog-78626260.js";import"./use-flags-370f42e7.js";import"./hidden-957318ab.js";import"./use-root-containers-94fc8c7e.js";import"./transition-298a5609.js";import"./open-closed-aad4ea97.js";import"./description-27a61611.js";function c({title:n,titleId:i,...l},t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},l),n?a.createElement("title",{id:i},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))}const m=a.forwardRef(c),p=m;function y({data:n}){s(),a.useState(!1),a.useRef();const[i,l]=a.useState(!1);return e(d,{children:e(o,{title:"Show Bread",open:i,setOpen:l,button:e("button",{onClick:()=>l(!0),children:e(p,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:e("ul",{role:"list",className:"divide-y divide-gray-100",children:n.map(t=>r("li",{className:"flex justify-between gap-x-6 py-3",children:[e("div",{className:"flex min-w-0 gap-x-4",children:r("div",{className:"min-w-0 flex-auto",children:[e("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:t.bread.name}),r("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:["Price: ",t.bread.price]})]})}),r("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:[e("p",{className:"text-sm leading-6 text-gray-900",children:t.group_name}),r("div",{className:"mt-1 flex items-center gap-x-1.5",children:[e("div",{className:"flex-none rounded-full bg-emerald-500/20 p-1",children:e("div",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"})}),e("p",{className:"text-xs leading-5 text-gray-500",children:"BREAD"})]})]})]},t.email))})})})}export{y as default};