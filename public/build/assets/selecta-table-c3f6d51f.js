import{u as i,j as e,a,h as m}from"./app-d8b8c24c.js";import c from"./selecta-delete-0a95e274.js";import s from"./selecta-edit-form-4a121c6a.js";import"./modal-02e3e56b.js";import"./transition-84434c72.js";import"./use-flags-b545cc66.js";import"./open-closed-6fc61065.js";import"./dialog-0d0e975e.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";import"./loading-component-9592e567.js";import"./selecta-service-439a0fab.js";import"./TrashIcon-288018dc.js";import"./input-fcdcd036.js";import"./drawer-f04b670f.js";import"./PencilIcon-bd43f856.js";function C(){const{filteredSelecta:r}=i(t=>t.controls);return e("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Recipe"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Price"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:r.map((t,l)=>a("tr",{className:"hover:bg-red-100",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:t.name})})}),e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:["₱ ",t.price]})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex",children:m(t.created_at).format("LLL")})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex"})}),a("td",{className:"flex px-6 py-4 justify-between",children:[e("div",{className:"flex-1 mr-2",children:e(c,{data:t})}),e("div",{className:"flex-1",children:e(s,{data:t})})]})]},l))})]})})}export{C as default};
