import{j as e,a as r}from"./app-437e6c0e.js";import{h as a}from"./moment-fbc5633a.js";import m from"./prouction-bakers-report-move-0cb5f540.js";import l from"./production-bakers-report-edit-d75be4d9.js";import"./drawer-42ec8ad2.js";import"./dialog-78626260.js";import"./use-flags-370f42e7.js";import"./hidden-957318ab.js";import"./use-root-containers-94fc8c7e.js";import"./transition-298a5609.js";import"./open-closed-aad4ea97.js";import"./description-27a61611.js";import"./input-bb9ea5bc.js";import"./loading-component-92634ae4.js";import"./bread-record-service-6f175cc2.js";import"./ChevronDoubleRightIcon-bdb4f1b1.js";import"./PencilIcon-4616ed46.js";function P({data:o,account:d}){return e("div",{className:"overflow-hidden rounded-lg borderm-1 min-h-[67vh]",children:r("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Bread"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"New Production"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Updated At"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:o.map((t,i)=>r("tr",{className:"bg-white",children:[e("td",{className:"p-3",children:e("div",{className:"flex align-items-center",children:e("div",{className:"ml-3",children:t.bread.name})})}),e("td",{className:"p-3 xfont-bold",children:t.new_production}),e("td",{className:"p-3",children:a(t.created_at).format("LLL")}),e("td",{className:"p-3 ",children:a(t.updated_at).format("LLL")}),r("td",{className:"p-3 flex",children:[e(l,{data:t}),e(m,{account:d,data:t})]})]},i))})]})})}export{P as default};
