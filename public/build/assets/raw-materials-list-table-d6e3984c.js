import{c as m,u as o,r as l,G as d,j as t,F as p,a,h as c}from"./app-2504df6d.js";import n from"./raw-materials-list-table-header-029e8ee6.js";import{g as h}from"./raw-materials-service-e2ae2e73.js";import x from"./raw-materials-list-edit-7c6f901b.js";import f from"./raw-materials-list-delete-a66945a3.js";import"./raw-materials-list-create-b82443e1.js";import"./input-3cf9e8e6.js";import"./drawer-423fda89.js";import"./dialog-b3562fd5.js";import"./use-flags-d2ac3b38.js";import"./keyboard-057a4a8a.js";import"./hidden-7de8d8fd.js";import"./use-root-containers-ce4e1455.js";import"./use-owner-17d62cec.js";import"./description-4618bf7a.js";import"./open-closed-b5309c82.js";import"./transition-25203836.js";import"./loading-component-c05027de.js";import"./select-1dcdf508.js";import"./PencilIcon-0dfb6198.js";import"./raw-materials-list-create-group-72dbce76.js";import"./raw-materials-group-service-5c49e191.js";import"./PencilSquareIcon-cd641b0b.js";import"./CheckIcon-e136bd26.js";import"./combobox-0158ed10.js";import"./use-resolve-button-type-054082b2.js";import"./use-tree-walker-d5fbb5e3.js";import"./use-tracked-pointer-6a8d921e.js";import"./use-controllable-e704b93a.js";import"./MapPinIcon-2904a063.js";import"./modal-6610d6cc.js";import"./TrashIcon-cf294bca.js";function V(){const r=m(),{filteredRawMaterials:i}=o(e=>e.controls);return l.useEffect(()=>{h().then(e=>{r(d(e.status))})},[]),t(p,{children:a("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[t(n,{}),a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[t("thead",{className:"bg-gray-50",children:a("tr",{children:[t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Name"}),t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bind"}),t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),t("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),t("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:i.map((e,s)=>a("tr",{className:"hover:bg-red-100",children:[t("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:t("div",{className:"text-sm",children:t("div",{className:"font-medium text-gray-700",children:e.name})})}),t("td",{className:"px-6 py-4",children:t("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:e.bind})}),t("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:t("div",{className:"text-sm",children:t("div",{className:"font-medium text-gray-700",children:c(e.created_at).format("LLL")})})}),t("td",{className:"px-6 py-4",children:a("div",{className:"flex justify-end gap-4",children:[t(x,{data:e}),t(f,{data:e})]})})]},s))})]})]})})}export{V as default};