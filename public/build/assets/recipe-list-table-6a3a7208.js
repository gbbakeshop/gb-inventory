import{u as p,a as r,j as e}from"./app-44ab44c4.js";import o from"./recipe-list-table-header-2b78478d.js";import a from"./recipe-list-popover-52ebdf8e.js";import m from"./recipe-list-bread-group-edit-10845162.js";import s from"./recipe-list-raw-materials-group-edit-d81de83b.js";import d from"./recipe-list-recipe-edit-74ed12f8.js";import"./MapPinIcon-24aac475.js";import"./use-flags-e6f7da6a.js";import"./keyboard-3645b197.js";import"./open-closed-51f532d6.js";import"./use-resolve-button-type-1a8188bb.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./use-root-containers-6f3c736e.js";import"./hidden-398850c9.js";import"./transition-e90b95e6.js";import"./drawer-f4bd4677.js";import"./dialog-4bcef038.js";import"./description-46dd974b.js";import"./loading-component-fd062139.js";import"./select-f8b3a278.js";import"./recipe-service-2f812953.js";import"./PencilSquareIcon-b48d6f6a.js";import"./input-7478b83a.js";import"./PencilIcon-c4a8b00c.js";function q(){const{filteredRecipeList:i}=p(t=>t.app);return r("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[e(o,{}),r("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Recipe"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"target"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Group"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Raw Material Group"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:i.map((t,l)=>r("tr",{className:"hover:bg-red-100",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:t.name})})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:t.target})}),e("td",{className:"px-6 py-4 ",children:r("div",{className:"flex",children:[e(m,{data:t}),e("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center  px-2 py-1 text-xs font-semibold text-red-600",children:e(a,{data:t.bread_group})})]})}),e("td",{className:"px-6 py-4 ",children:r("div",{className:"flex",children:[e(s,{data:t}),e("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center  px-2 py-1 text-xs font-semibold text-red-600",children:e(a,{data:t.raw_materials_group})})]})}),e("td",{className:"px-6 py-4",children:e(d,{data:t})})]},l))})]})]})}export{q as default};