import{u as n,a as t,j as e}from"./app-8b7f6c54.js";import{B as m}from"./branch-raw-materials-edit-f3129ef0.js";import o from"./branch-raw-materials-table-header-b10411f9.js";import"./drawer-23597b02.js";import"./dialog-6887b94d.js";import"./use-flags-1721155c.js";import"./keyboard-20917a55.js";import"./hidden-15ff79fd.js";import"./use-root-containers-a6380caf.js";import"./use-outside-click-68205d4a.js";import"./use-owner-2c5c579b.js";import"./description-feb4703c.js";import"./open-closed-ecfdd2ea.js";import"./transition-4bf83aee.js";import"./loading-component-af5f856c.js";import"./input-fffc9654.js";import"./PencilSquareIcon-2a22f114.js";import"./MapPinIcon-788ac9d8.js";function T({branch_id:l,account:r}){const{filteredRawMaterials:s}=n(a=>a.raw_materials);return t("div",{children:[e(o,{}),e("div",{className:"overflow-hidden rounded-lg border border-gray-200 shadow-md m-1 min-h-[78vh]",children:t("table",{className:"w-full border-collapse text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Raw Materials"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Quantity"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bind"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Warning"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:s.map((a,d)=>{var i;return t("tr",{className:"hover:bg-gray-50",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:t("div",{className:"text-sm",children:[e("div",{className:"font-medium text-gray-700",children:(i=a.raw_materials)==null?void 0:i.name}),e("div",{className:"text-gray-400",children:a.branch.branch_name})]})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600",children:a.quantity})}),e("td",{className:"px-6 py-4",children:a.bind}),e("td",{className:"px-6 py-4",children:e("div",{className:"flex gap-2",children:t("span",{className:"inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:[e("span",{className:"h-1.5 w-1.5 rounded-full bg-green-600"}),a.warning]})})}),e("td",{className:"px-6 py-4",children:e("div",{className:"flex justify-end gap-4",children:r.position=="admin"||r.position=="Supervisor"?e(m,{branch_id:l,data:a}):null})})]},d)})})]})})]})}export{T as default};