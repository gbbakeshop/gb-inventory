import{c as s,u as o,r as l,V as p,j as t,F as d,a,h as c}from"./app-eb237854.js";import n from"./raw-materials-list-table-header-ceb318ce.js";import{g as h}from"./raw-materials-service-60cb6e8c.js";import x from"./raw-materials-list-edit-a44143f8.js";import f from"./raw-materials-list-delete-c69cd7ea.js";import"./raw-materials-list-create-85e7606e.js";import"./input-3a1442a7.js";import"./drawer-c7f8627d.js";import"./dialog-1fc15b37.js";import"./use-flags-1f69cd58.js";import"./keyboard-f9d3da82.js";import"./hidden-2c9b8996.js";import"./use-root-containers-f2e46cee.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./description-9b69da41.js";import"./open-closed-f62fba30.js";import"./transition-6275e480.js";import"./loading-component-1a997bac.js";import"./select-fe0fc4ef.js";import"./PencilIcon-8cee5ffb.js";import"./raw-materials-list-create-group-be255b1d.js";import"./raw-materials-group-service-ee38b5e0.js";import"./PencilSquareIcon-4cfac22c.js";import"./CheckIcon-6d808547.js";import"./combobox-8ee5f490.js";import"./use-computed-5587209c.js";import"./use-resolve-button-type-2e5318d0.js";import"./use-tree-walker-0aedafbf.js";import"./use-tracked-pointer-d7f871bd.js";import"./use-controllable-28c57760.js";import"./MapPinIcon-02dd07c0.js";import"./modal-4bff4c47.js";import"./TrashIcon-1a0e7005.js";function X(){const r=s(),{filteredRawMaterials:i}=o(e=>e.controls);return l.useEffect(()=>{h().then(e=>{r(p(e.status))})},[]),t(d,{children:a("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[t(n,{}),a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[t("thead",{className:"bg-gray-50",children:a("tr",{children:[t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Name"}),t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bind"}),t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),t("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:i.map((e,m)=>a("tr",{className:"hover:bg-red-100",children:[t("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:t("div",{className:"text-sm",children:t("div",{className:"font-medium text-gray-700",children:e.name})})}),t("td",{className:"px-6 py-4",children:t("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:e.bind})}),t("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:t("div",{className:"text-sm",children:t("div",{className:"font-medium text-gray-700",children:c(e.created_at).format("LLL")})})}),t("td",{className:"px-6 py-4",children:a("div",{className:"flex justify-end gap-4",children:[t(x,{data:e}),t(f,{data:e})]})})]},m))})]})]})})}export{X as default};