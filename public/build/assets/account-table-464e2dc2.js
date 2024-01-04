import{a as t,F as m,j as e}from"./app-eb237854.js";import o from"./account-table-header-b3764d3f.js";import c from"./delete-account-ab78b9df.js";import d from"./update-account-2c8d73ef.js";import"./MapPinIcon-02dd07c0.js";import"./modal-4bff4c47.js";import"./transition-6275e480.js";import"./use-flags-1f69cd58.js";import"./open-closed-f62fba30.js";import"./dialog-1fc15b37.js";import"./keyboard-f9d3da82.js";import"./hidden-2c9b8996.js";import"./use-root-containers-f2e46cee.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./description-9b69da41.js";import"./loading-component-1a997bac.js";import"./account-service-5a84a0ff.js";import"./TrashIcon-1a0e7005.js";import"./drawer-c7f8627d.js";import"./input-3a1442a7.js";import"./select-fe0fc4ef.js";import"./PencilIcon-8cee5ffb.js";function _({accounts:r,branches:i}){return t(m,{children:[e(o,{}),e("div",{className:"overflow-hidden rounded-lg border border-gray-200 shadow-md m-1 min-h-[78vh]",children:t("table",{className:"w-full border-collapse text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Position"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Branch"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Status"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:r.map((a,l)=>t("tr",{className:"hover:bg-gray-50",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:t("div",{className:"text-sm",children:[e("div",{className:"font-medium text-gray-700",children:a.name}),e("div",{className:"text-gray-400",children:a.email})]})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600",children:a.position})}),e("td",{className:"px-6 py-4",children:a.branch.branch_name}),e("td",{className:"px-6 py-4",children:e("div",{className:"flex gap-2",children:t("span",{className:"inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:[e("span",{className:"h-1.5 w-1.5 rounded-full bg-green-600"}),"Active"]})})}),e("td",{className:"px-6 py-4",children:t("div",{className:"flex justify-end gap-4",children:[e(c,{id:a.id}),e(d,{branches:i,data:a})]})})]},l))})]})})]})}export{_ as default};