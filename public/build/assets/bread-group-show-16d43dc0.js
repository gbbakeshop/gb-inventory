import{r as a,c as s,j as e,F as d,a as r}from"./app-d8b8c24c.js";import{D as o}from"./drawer-f04b670f.js";import"./dialog-0d0e975e.js";import"./use-flags-b545cc66.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";import"./open-closed-6fc61065.js";import"./transition-84434c72.js";function c({title:i,titleId:n,...l},t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":n},l),i?a.createElement("title",{id:n},i):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))}const m=a.forwardRef(c),p=m;function E({data:i}){s(),a.useState(!1),a.useRef();const[n,l]=a.useState(!1);return e(d,{children:e(o,{title:"Show Bread",open:n,setOpen:l,button:e("button",{onClick:()=>l(!0),children:e(p,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-blue-500","aria-hidden":"true"})}),children:e("ul",{role:"list",className:"divide-y divide-gray-100",children:i.map(t=>r("li",{className:"flex justify-between gap-x-6 py-3",children:[e("div",{className:"flex min-w-0 gap-x-4",children:r("div",{className:"min-w-0 flex-auto",children:[e("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:t.bread.name}),r("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:["Price: ",t.bread.price]})]})}),r("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:[e("p",{className:"text-sm leading-6 text-gray-900",children:t.group_name}),r("div",{className:"mt-1 flex items-center gap-x-1.5",children:[e("div",{className:"flex-none rounded-full bg-emerald-500/20 p-1",children:e("div",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"})}),e("p",{className:"text-xs leading-5 text-gray-500",children:"BREAD"})]})]})]},t.email))})})})}export{E as default};