import{u as i,j as e,F as n,a,h as d}from"./app-44ab44c4.js";import m from"./branch-selecta-add-remaining-c3fee1a4.js";import"./modal-9d964e67.js";import"./transition-e90b95e6.js";import"./use-flags-e6f7da6a.js";import"./open-closed-51f532d6.js";import"./dialog-4bcef038.js";import"./keyboard-3645b197.js";import"./hidden-398850c9.js";import"./use-root-containers-6f3c736e.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./description-46dd974b.js";import"./input-7478b83a.js";import"./PlusIcon-b5e85c87.js";function L(){const{filteredBranchSelecta:c}=i(t=>t.selecta);return e(n,{children:e("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"ID #"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Recipe"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Beginning"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Price"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:c.map((t,s)=>{var l,r;return a("tr",{className:"hover:bg-red-100",children:[e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-14 py-1 text-xs font-semibold ",children:["S-",t.id]})}),e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:(l=t.selecta)==null?void 0:l.name})})}),e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-20 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:[t.quantity,"pcs"]})}),e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:["₱ ",(r=t.selecta)==null?void 0:r.price]})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex",children:d(t.created_at).format("LLL")})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex"})}),e("td",{className:"flex px-6 py-4 justify-between",children:e(m,{data:t})})]},s)})})]})})})}export{L as default};