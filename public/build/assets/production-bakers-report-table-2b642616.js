import{j as e,a,h as i}from"./app-44ab44c4.js";import l from"./prouction-bakers-report-move-8af43ac3.js";import m from"./production-bakers-report-edit-05274ed3.js";import"./drawer-f4bd4677.js";import"./dialog-4bcef038.js";import"./use-flags-e6f7da6a.js";import"./keyboard-3645b197.js";import"./hidden-398850c9.js";import"./use-root-containers-6f3c736e.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./description-46dd974b.js";import"./open-closed-51f532d6.js";import"./transition-e90b95e6.js";import"./input-7478b83a.js";import"./loading-component-fd062139.js";import"./bread-record-service-30515ead.js";import"./ChevronDoubleRightIcon-e0d92245.js";import"./PencilIcon-c4a8b00c.js";function C({data:o,account:r}){return e("div",{className:"overflow-hidden rounded-lg borderm-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"ID #"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Bread"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"New Production"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900",children:"Updated At"}),e("th",{scope:"col",className:"px-3 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:o.map((t,d)=>a("tr",{className:"bg-white",children:[e("td",{className:"p-3",children:e("div",{className:"flex align-items-center",children:a("div",{className:"ml-3",children:["B-",t.id]})})}),e("td",{className:"p-3",children:e("div",{className:"flex align-items-center",children:e("div",{className:"ml-3",children:t.bread.name})})}),e("td",{className:"p-3 xfont-bold",children:t.new_production}),e("td",{className:"p-3",children:i(t.created_at).format("LLL")}),e("td",{className:"p-3 ",children:i(t.updated_at).format("LLL")}),a("td",{className:"p-3 flex",children:[e(m,{data:t}),r.position!=="Cashier"||r.position!=="Chief Baker"||r.position!=="Lamesador"||r.position!=="Supervisor"?e(l,{account:r,data:t}):null]})]},d))})]})})}export{C as default};