import{r as p,a,F as s,j as e}from"./app-13f09cc1.js";import c from"./branch-selecta-table-1a9dea84.js";import f from"./branch-selecta-double-check-table-25b44d14.js";import d from"./branch-selecta-table-header-a3b0286c.js";import h from"./branch-selecta-sales-report-0db83aee.js";import{r}from"./tabs-b4de158c.js";import"./branch-selecta-add-remaining-d6b0a491.js";import"./modal-f5a2b81e.js";import"./transition-8907eb00.js";import"./use-flags-b92e8478.js";import"./open-closed-ba0c67c8.js";import"./dialog-9e5fb0f5.js";import"./keyboard-ac6e2ca1.js";import"./hidden-e11d2d3e.js";import"./use-root-containers-d5c0d305.js";import"./use-outside-click-fa077605.js";import"./use-owner-4a10483a.js";import"./description-ce464810.js";import"./input-b70acb70.js";import"./PlusIcon-59f038e5.js";import"./branch-selecta-edit-remaining-c0960580.js";import"./PencilIcon-74164400.js";import"./selecta-service-4d6bb9c6.js";import"./loading-component-1dcda2c6.js";import"./TrashIcon-b200bb7a.js";import"./MapPinIcon-af927e47.js";import"./branch-selecta-sales-report-table-header-fc343e7a.js";import"./use-resolve-button-type-fba4bf2b.js";function n(...t){return t.filter(Boolean).join(" ")}function M({account:t}){let[m]=p.useState([{id:1,name:"Selecta Stocks",component:a(s,{children:[e(d,{}),e(c,{})]})},{id2:2,name:"Double Check",component:e(f,{account:t})},{id3:3,name:"Sales Report",component:e(h,{account:t})}]);return e("div",{className:"w-full",children:a(r.Group,{children:[e(r.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((o,i)=>e(r,{className:({selected:l})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",l?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:o.name},i))}),e(r.Panels,{className:"mt-2",children:m.map((o,i)=>e(r.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"),children:o.component},i))})]})})}export{M as default};