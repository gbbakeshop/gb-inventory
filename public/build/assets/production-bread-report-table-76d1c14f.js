import{j as e,a}from"./app-5f0ce7e9.js";import i from"./production-bread-report-edit-87d7cfe6.js";import d from"./production-bread-move-sales-report-e7174e82.js";import"./drawer-89f0a87c.js";import"./dialog-69af8821.js";import"./use-flags-77b5aa33.js";import"./keyboard-ea716521.js";import"./hidden-ade8ec98.js";import"./use-root-containers-bc82b08b.js";import"./use-outside-click-2cb1b6ec.js";import"./use-owner-df390e19.js";import"./description-bd6beec8.js";import"./open-closed-80f1f5bd.js";import"./transition-6b0aa6c1.js";import"./input-4d16f1ad.js";import"./loading-component-362fbef5.js";import"./bread-record-service-30515ead.js";import"./PencilIcon-f70db1da.js";import"./ChevronDoubleRightIcon-f09ed921.js";function T({data:o,account:r}){return e("div",{className:"overflow-hidden rounded-lg borderm-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"ID #"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Bread"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Beginning"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"New Production"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Over"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Charge"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Total"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:o.map((t,l)=>a("tr",{className:"bg-white",children:[e("td",{className:"p-3",children:e("div",{className:"flex align-items-center",children:a("div",{className:"ml-3",children:["B-",t.id]})})}),e("td",{className:"p-3",children:e("div",{className:"flex align-items-center",children:e("div",{className:"ml-3",children:t.bread.name})})}),e("td",{className:"p-3 xfont-bold",children:t.beginning??0}),e("td",{className:"p-3 xfont-bold",children:t.new_production??0}),e("td",{className:"p-3 xfont-bold",children:t.over??0}),e("td",{className:"p-3 xfont-bold",children:t.charge??0}),e("td",{className:"p-3 xfont-bold",children:t.total??0}),a("td",{className:"p-3 flex",children:[e(i,{data:t,account:r}),e(d,{data:t,account:r})]})]},l))})]})})}export{T as default};