import{r as o,c as b,u as g,j as e,F as h,a as c,G as x,p as m}from"./app-d8b8c24c.js";import{M as v}from"./modal-02e3e56b.js";import{I as y}from"./input-fcdcd036.js";import{P as S}from"./PencilIcon-bd43f856.js";import"./transition-84434c72.js";import"./use-flags-b545cc66.js";import"./open-closed-6fc61065.js";import"./dialog-0d0e975e.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";function M({data:s}){let[u,i]=o.useState(!1);const r=b(),[n,d]=o.useState(s),{selectedSelecta:p}=g(t=>t.selecta);function a(t){t.preventDefault();const f=p.map(l=>l.id==s.id?n:l);n.remaining?(r(x(f)),i(!1),r(m({status:"success",message:"Added Successfully."}))):r(m({status:"exist",message:"Please put some remaining!"}))}return e(h,{children:e(v,{title:s.selecta.name,setIsOpen:i,isOpen:u,button:e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>i(!0),children:e(S,{className:"h-6 text-blue-500"})})}),children:c("form",{onSubmit:a,children:[e("div",{className:"mt-2",children:e("p",{className:"text-sm text-gray-500",children:e(y,{onChange:t=>d({...n,remaining:parseInt(t.target.value),sold:s.quantity-parseInt(t.target.value),sales:(s.quantity-parseInt(t.target.value))*s.selecta.price}),value:n.remaining??0,name:"remaining",title:"Remaining of Selecta",placeholder:"Enter the Remaining",type:"number"})})}),e("div",{className:"mt-4",children:c("div",{className:"flex justify-between items-center",children:[e("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>i(!1),children:"Close"}),e("button",{type:"submit",className:"inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:a,children:"SAVE"})]})})]})})})}export{M as default};