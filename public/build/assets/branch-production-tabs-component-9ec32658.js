import{r as a,j as e,a as s}from"./app-56fb4b1a.js";import l from"./page-8e4416f7.js";import d from"./page-795d701c.js";import g from"./page-a5045b74.js";import c from"./page-ffa17b54.js";import f from"./page-c1728d0a.js";import{r as o}from"./tabs-c99c1885.js";import"./recipe-list-table-header-0241da3e.js";import"./MapPinIcon-4e8e6e03.js";import"./production-create-beginning-table-765dcfa7.js";import"./recipe-list-popover-efdcd183.js";import"./use-flags-1de4a3d1.js";import"./keyboard-dd738e34.js";import"./open-closed-3656ff4d.js";import"./use-resolve-button-type-5d681cad.js";import"./use-outside-click-bfcd1c91.js";import"./use-owner-52ec09d3.js";import"./use-root-containers-e0c507b7.js";import"./hidden-b8abeb37.js";import"./transition-64ede888.js";import"./production-create-beginning-form-568eeb62.js";import"./input-d6daf4f7.js";import"./drawer-fe6bb8ae.js";import"./dialog-1963b93f.js";import"./description-336c31b9.js";import"./loading-component-77a70935.js";import"./bread-record-service-30515ead.js";import"./PencilIcon-78571d11.js";import"./production-bakers-report-table-d119d50b.js";import"./prouction-bakers-report-move-bf912bcd.js";import"./ChevronDoubleRightIcon-27c6ce15.js";import"./production-bakers-report-edit-d25233b7.js";import"./production-bakers-report-header-d7a1b03a.js";import"./production-bread-report-table-c1551490.js";import"./production-bread-report-edit-d0c82f1a.js";import"./production-bread-move-sales-report-0f2173e1.js";import"./production-bread-report-header-1e464e01.js";import"./sales-report-table-7cbdc2a3.js";import"./sales-report-table-header-e5f796b9.js";function n(...r){return r.filter(Boolean).join(" ")}function ee({account:r}){let[m]=a.useState([{id:1,name:"Create Beginning",component:e(l,{account:r})},{id2:2,name:"Bakers Report",component:e(d,{account:r})},{id2:3,name:"Bread Report",component:e(g,{account:r})},{id2:4,name:"Sales Report",component:e(c,{account:r})},{id2:5,name:"History Logs",component:e(f,{account:r})}]);return e("div",{className:"w-full",children:s(o.Group,{children:[e(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((t,i)=>e(o,{className:({selected:p})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",p?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:t.name},i))}),e(o.Panels,{className:"mt-2",children:m.map((t,i)=>e(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:e("ul",{children:e("li",{className:"relative rounded-md p-3 bg-white",children:e("h3",{className:"text-sm font-medium leading-5",children:t.component})},t.id)})},i))})]})})}export{ee as default};
