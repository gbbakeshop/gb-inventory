import{a as t,F as m,j as e}from"./app-44ab44c4.js";import o from"./account-table-header-40b19da6.js";import c from"./delete-account-bee28b1a.js";import d from"./update-account-3fefa0d3.js";import"./MapPinIcon-24aac475.js";import"./modal-9d964e67.js";import"./transition-e90b95e6.js";import"./use-flags-e6f7da6a.js";import"./open-closed-51f532d6.js";import"./dialog-4bcef038.js";import"./keyboard-3645b197.js";import"./hidden-398850c9.js";import"./use-root-containers-6f3c736e.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./description-46dd974b.js";import"./loading-component-fd062139.js";import"./account-service-5a84a0ff.js";import"./TrashIcon-b91ea000.js";import"./drawer-f4bd4677.js";import"./input-7478b83a.js";import"./select-f8b3a278.js";import"./PencilIcon-c4a8b00c.js";function _({accounts:r,branches:i}){return t(m,{children:[e(o,{}),e("div",{className:"overflow-hidden rounded-lg border border-gray-200 shadow-md m-1 min-h-[78vh]",children:t("table",{className:"w-full border-collapse text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Position"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Branch"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Status"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:r.map((a,l)=>t("tr",{className:"hover:bg-gray-50",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:t("div",{className:"text-sm",children:[e("div",{className:"font-medium text-gray-700",children:a.name}),e("div",{className:"text-gray-400",children:a.email})]})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600",children:a.position})}),e("td",{className:"px-6 py-4",children:a.branch.branch_name}),e("td",{className:"px-6 py-4",children:e("div",{className:"flex gap-2",children:t("span",{className:"inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:[e("span",{className:"h-1.5 w-1.5 rounded-full bg-green-600"}),"Active"]})})}),e("td",{className:"px-6 py-4",children:t("div",{className:"flex justify-end gap-4",children:[e(c,{id:a.id}),e(d,{branches:i,data:a})]})})]},l))})]})})]})}export{_ as default};
