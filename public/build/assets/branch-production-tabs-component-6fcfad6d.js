import{r as a,j as e,a as s}from"./app-d8b8c24c.js";import l from"./page-dbf245fd.js";import d from"./page-20a2371d.js";import g from"./page-4cac75eb.js";import c from"./page-cdf77bef.js";import f from"./page-85bd68b4.js";import{r as o}from"./tabs-2bf4da52.js";import"./recipe-list-table-header-de1491bd.js";import"./MapPinIcon-70d13487.js";import"./production-create-beginning-table-97a08870.js";import"./recipe-list-popover-9ae179f4.js";import"./use-flags-b545cc66.js";import"./keyboard-7671dd8e.js";import"./open-closed-6fc61065.js";import"./use-resolve-button-type-9a209279.js";import"./use-owner-82f11557.js";import"./use-root-containers-17ba50bf.js";import"./hidden-7eeb4a7d.js";import"./transition-84434c72.js";import"./production-create-beginning-form-f662c0cb.js";import"./input-fcdcd036.js";import"./drawer-f04b670f.js";import"./dialog-0d0e975e.js";import"./description-017470a7.js";import"./loading-component-9592e567.js";import"./bread-record-service-30515ead.js";import"./PencilIcon-bd43f856.js";import"./production-bakers-report-table-cc7001b8.js";import"./prouction-bakers-report-move-b8685944.js";import"./ChevronDoubleRightIcon-d77c839f.js";import"./production-bakers-report-edit-bf648447.js";import"./production-bakers-report-header-0105bedc.js";import"./production-bread-report-table-9b214929.js";import"./production-bread-report-edit-fd091559.js";import"./production-bread-move-sales-report-544902ba.js";import"./production-bread-report-header-01b64e19.js";import"./sales-report-table-ec39719d.js";import"./sales-report-table-header-c69ff65e.js";function n(...r){return r.filter(Boolean).join(" ")}function $({account:r}){let[m]=a.useState([{id:1,name:"Create Beginning",component:e(l,{account:r})},{id2:2,name:"Bakers Report",component:e(d,{account:r})},{id2:3,name:"Bread Report",component:e(g,{account:r})},{id2:4,name:"Sales Report",component:e(c,{account:r})},{id2:5,name:"History Logs",component:e(f,{account:r})}]);return e("div",{className:"w-full",children:s(o.Group,{children:[e(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((t,i)=>e(o,{className:({selected:p})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",p?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:t.name},i))}),e(o.Panels,{className:"mt-2",children:m.map((t,i)=>e(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:e("ul",{children:e("li",{className:"relative rounded-md p-3 bg-white",children:e("h3",{className:"text-sm font-medium leading-5",children:t.component})},t.id)})},i))})]})})}export{$ as default};