import{e as m,u as o,r as l,B as d,j as e,F as p,a}from"./app-437e6c0e.js";import c from"./raw-materials-list-table-header-c46ca7a8.js";import{g as n}from"./raw-materials-service-42254b0b.js";import{h}from"./moment-fbc5633a.js";import x from"./raw-materials-list-edit-d0bb655b.js";import f from"./raw-materials-list-delete-23756b44.js";import"./raw-materials-list-create-52beec8c.js";import"./input-bb9ea5bc.js";import"./drawer-42ec8ad2.js";import"./dialog-78626260.js";import"./use-flags-370f42e7.js";import"./hidden-957318ab.js";import"./use-root-containers-94fc8c7e.js";import"./transition-298a5609.js";import"./open-closed-aad4ea97.js";import"./description-27a61611.js";import"./loading-component-92634ae4.js";import"./select-d4a3003a.js";import"./PencilIcon-4616ed46.js";import"./raw-materials-list-create-group-c096e908.js";import"./raw-materials-group-service-db323325.js";import"./PencilSquareIcon-e69370a4.js";import"./CheckIcon-cd9eca49.js";import"./combobox-b7644b4d.js";import"./use-resolve-button-type-a6947fda.js";import"./use-tree-walker-4f1c9e00.js";import"./use-tracked-pointer-a6e6ec3c.js";import"./use-controllable-67a20139.js";import"./MapPinIcon-e2df669e.js";import"./modal-041b90f5.js";import"./TrashIcon-1575e225.js";function U(){const r=m(),{filteredRawMaterials:i}=o(t=>t.controls);return l.useEffect(()=>{n().then(t=>{r(d(t.status))})},[]),e(p,{children:a("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[e(c,{}),a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bind"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:i.map((t,s)=>a("tr",{className:"hover:bg-red-100",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:t.name})})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:t.bind})}),e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:h(t.created_at).format("LLL")})})}),e("td",{className:"px-6 py-4",children:a("div",{className:"flex justify-end gap-4",children:[e(x,{data:t}),e(f,{data:t})]})})]},s))})]})]})})}export{U as default};
