import{u as i,j as e,F as n,a,h as d}from"./app-7410adb6.js";import m from"./branch-selecta-add-remaining-ea51404f.js";import"./modal-025e4b33.js";import"./transition-993263cf.js";import"./use-flags-bb5e2bec.js";import"./open-closed-d88e58b1.js";import"./dialog-f79f2bdd.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./input-ead4f430.js";import"./PlusIcon-f7826403.js";function L(){const{filteredBranchSelecta:c}=i(t=>t.selecta);return e(n,{children:e("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"ID #"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Recipe"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Beginning"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Price"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:c.map((t,s)=>{var l,r;return a("tr",{className:"hover:bg-red-100",children:[e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-14 py-1 text-xs font-semibold ",children:["S-",t.id]})}),e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:(l=t.selecta)==null?void 0:l.name})})}),e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-20 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:[t.quantity,"pcs"]})}),e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:["₱ ",(r=t.selecta)==null?void 0:r.price]})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex",children:d(t.created_at).format("LLL")})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex"})}),e("td",{className:"flex px-6 py-4 justify-between",children:e(m,{data:t})})]},s)})})]})})})}export{L as default};