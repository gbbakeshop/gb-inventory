import{r as a,j as e,a as s}from"./app-44ab44c4.js";import l from"./page-c4f5eee9.js";import d from"./page-30c99fc7.js";import g from"./page-a35900cf.js";import c from"./page-57161744.js";import f from"./page-e5895cd6.js";import{r as o}from"./tabs-cd4e50ae.js";import"./recipe-list-table-header-2b78478d.js";import"./MapPinIcon-24aac475.js";import"./production-create-beginning-table-967b7e43.js";import"./recipe-list-popover-52ebdf8e.js";import"./use-flags-e6f7da6a.js";import"./keyboard-3645b197.js";import"./open-closed-51f532d6.js";import"./use-resolve-button-type-1a8188bb.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./use-root-containers-6f3c736e.js";import"./hidden-398850c9.js";import"./transition-e90b95e6.js";import"./production-create-beginning-form-8f5f1b03.js";import"./input-7478b83a.js";import"./drawer-f4bd4677.js";import"./dialog-4bcef038.js";import"./description-46dd974b.js";import"./loading-component-fd062139.js";import"./bread-record-service-30515ead.js";import"./PencilIcon-c4a8b00c.js";import"./production-bakers-report-table-2b642616.js";import"./prouction-bakers-report-move-8af43ac3.js";import"./ChevronDoubleRightIcon-e0d92245.js";import"./production-bakers-report-edit-05274ed3.js";import"./production-bakers-report-header-0f9ca2a2.js";import"./production-bread-report-table-eafb5d7f.js";import"./production-bread-report-edit-ccc3b54d.js";import"./production-bread-move-sales-report-c89c62d9.js";import"./production-bread-report-header-dd3b42ca.js";import"./sales-report-table-449571b0.js";import"./sales-report-table-header-7aadfd59.js";function n(...r){return r.filter(Boolean).join(" ")}function ee({account:r}){let[m]=a.useState([{id:1,name:"Create Beginning",component:e(l,{account:r})},{id2:2,name:"Bakers Report",component:e(d,{account:r})},{id2:3,name:"Bread Report",component:e(g,{account:r})},{id2:4,name:"Sales Report",component:e(c,{account:r})},{id2:5,name:"History Logs",component:e(f,{account:r})}]);return e("div",{className:"w-full",children:s(o.Group,{children:[e(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((t,i)=>e(o,{className:({selected:p})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",p?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:t.name},i))}),e(o.Panels,{className:"mt-2",children:m.map((t,i)=>e(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:e("ul",{children:e("li",{className:"relative rounded-md p-3 bg-white",children:e("h3",{className:"text-sm font-medium leading-5",children:t.component})},t.id)})},i))})]})})}export{ee as default};
