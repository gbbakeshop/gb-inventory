import{r,c as h,u as v,j as e,F as y,a as l,I as S,p as o}from"./app-d8b8c24c.js";import{M as I}from"./modal-02e3e56b.js";import{I as N}from"./input-fcdcd036.js";import{P as j}from"./PlusIcon-c1e271b8.js";import"./transition-84434c72.js";import"./use-flags-b545cc66.js";import"./open-closed-6fc61065.js";import"./dialog-0d0e975e.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";function O({data:s}){let[f,i]=r.useState(!1);const a=h(),[n,p]=r.useState(s),{selectedSelecta:g}=v(t=>t.selecta),[c,u]=r.useState(!1);function m(t){t.preventDefault();const d=g.find(x=>x.id===n.id);n.remaining?d?(i(!1),a(o({status:"exist",message:d.selecta.name+" is already exist!"}))):(a(S(n)),i(!1),a(o({status:"success",message:"Added Successfully."}))):a(o({status:"exist",message:"Please put some remaining!"}))}function b(t){t.target.value>=s.quantity?u(!0):(u(!1),p({...n,remaining:parseInt(t.target.value),sold:s.quantity-parseInt(t.target.value),sales:(s.quantity-parseInt(t.target.value))*s.selecta.price}))}return e(y,{children:e(I,{title:s.selecta.name+" ("+s.quantity+")",setIsOpen:i,isOpen:f,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>i(!0),children:e(j,{className:"h-6 text-red-500"})})}),children:l("form",{onSubmit:m,children:[l("div",{className:"mt-2",children:[c&&e("p",{className:"text-red-500 text-xs italic",children:"Incorrect quantity!"}),e("p",{className:"text-sm text-gray-500",children:e(N,{onChange:t=>b(t),value:n.remaining??0,name:"remaining",title:"Remaining of Selecta",placeholder:"Enter the Remaining",type:"number"})})]}),e("div",{className:"mt-4",children:l("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>i(!1),children:"Close"}),e("button",{disabled:c,type:"submit",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:m,children:"ADD LIST"})]})})]})})})}export{O as default};