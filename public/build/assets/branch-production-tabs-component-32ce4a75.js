import{r as a,j as e,a as s}from"./app-eb237854.js";import l from"./page-f2d07bd2.js";import d from"./page-9e9ecb6a.js";import g from"./page-e0145e36.js";import c from"./page-f1d97856.js";import f from"./page-2438134a.js";import{r as o}from"./tabs-be0be8bc.js";import"./recipe-list-table-header-fe3ce490.js";import"./MapPinIcon-02dd07c0.js";import"./production-create-beginning-table-1513d271.js";import"./recipe-list-popover-248f22d7.js";import"./use-flags-1f69cd58.js";import"./keyboard-f9d3da82.js";import"./open-closed-f62fba30.js";import"./use-resolve-button-type-2e5318d0.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./use-root-containers-f2e46cee.js";import"./hidden-2c9b8996.js";import"./transition-6275e480.js";import"./production-create-beginning-form-a9671154.js";import"./input-3a1442a7.js";import"./drawer-c7f8627d.js";import"./dialog-1fc15b37.js";import"./description-9b69da41.js";import"./loading-component-1a997bac.js";import"./bread-record-service-30515ead.js";import"./PencilIcon-8cee5ffb.js";import"./production-bakers-report-table-93943abc.js";import"./prouction-bakers-report-move-cfa05b83.js";import"./ChevronDoubleRightIcon-9d5bc1e1.js";import"./production-bakers-report-edit-50446821.js";import"./production-bakers-report-header-7de1664e.js";import"./production-bread-report-table-92ef5107.js";import"./production-bread-report-edit-3ea0c3b4.js";import"./production-bread-move-sales-report-b91946f5.js";import"./production-bread-report-header-295618fc.js";import"./sales-report-table-274362b5.js";import"./sales-report-table-header-13438d37.js";function n(...r){return r.filter(Boolean).join(" ")}function ee({account:r}){let[m]=a.useState([{id:1,name:"Create Beginning",component:e(l,{account:r})},{id2:2,name:"Bakers Report",component:e(d,{account:r})},{id2:3,name:"Bread Report",component:e(g,{account:r})},{id2:4,name:"Sales Report",component:e(c,{account:r})},{id2:5,name:"History Logs",component:e(f,{account:r})}]);return e("div",{className:"w-full",children:s(o.Group,{children:[e(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((t,i)=>e(o,{className:({selected:p})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",p?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:t.name},i))}),e(o.Panels,{className:"mt-2",children:m.map((t,i)=>e(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:e("ul",{children:e("li",{className:"relative rounded-md p-3 bg-white",children:e("h3",{className:"text-sm font-medium leading-5",children:t.component})},t.id)})},i))})]})})}export{ee as default};