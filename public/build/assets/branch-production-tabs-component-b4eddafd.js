import{r as a,j as e,a as s}from"./app-fba1d0c2.js";import l from"./page-34346e31.js";import d from"./page-512fbb6b.js";import g from"./page-3f67b353.js";import c from"./page-0849c6f9.js";import f from"./page-a256e34e.js";import{r as o}from"./tabs-e6f74544.js";import"./recipe-list-table-header-7823bf8a.js";import"./MapPinIcon-b6237423.js";import"./production-create-beginning-table-200ca141.js";import"./recipe-list-popover-f360b0d1.js";import"./use-flags-6940bf9f.js";import"./keyboard-eb175f2f.js";import"./open-closed-759ce2e2.js";import"./use-resolve-button-type-2d65f5b6.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./use-root-containers-15b6ecb3.js";import"./hidden-35cd6dcd.js";import"./transition-95cbd138.js";import"./production-create-beginning-form-3d9ff075.js";import"./input-9ccd4c8d.js";import"./drawer-e448d89d.js";import"./dialog-240c9526.js";import"./description-40b3ab7d.js";import"./loading-component-a64795de.js";import"./bread-record-service-30515ead.js";import"./PencilIcon-7fc353e4.js";import"./production-bakers-report-table-b99103c1.js";import"./prouction-bakers-report-move-275c95f7.js";import"./ChevronDoubleRightIcon-bc4e8de9.js";import"./production-bakers-report-edit-8c07b741.js";import"./production-bakers-report-header-2e77c716.js";import"./production-bread-report-table-85ada65c.js";import"./production-bread-report-edit-8a4d8f40.js";import"./production-bread-move-sales-report-17982ec4.js";import"./production-bread-report-header-68c46779.js";import"./sales-report-table-2cac123a.js";import"./sales-report-table-header-aa96e276.js";function n(...r){return r.filter(Boolean).join(" ")}function ee({account:r}){let[m]=a.useState([{id:1,name:"Create Beginning",component:e(l,{account:r})},{id2:2,name:"Bakers Report",component:e(d,{account:r})},{id2:3,name:"Bread Report",component:e(g,{account:r})},{id2:4,name:"Sales Report",component:e(c,{account:r})},{id2:5,name:"History Logs",component:e(f,{account:r})}]);return e("div",{className:"w-full",children:s(o.Group,{children:[e(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((t,i)=>e(o,{className:({selected:p})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",p?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:t.name},i))}),e(o.Panels,{className:"mt-2",children:m.map((t,i)=>e(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:e("ul",{children:e("li",{className:"relative rounded-md p-3 bg-white",children:e("h3",{className:"text-sm font-medium leading-5",children:t.component})},t.id)})},i))})]})})}export{ee as default};
