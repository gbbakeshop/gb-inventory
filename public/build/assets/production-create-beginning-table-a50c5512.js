import{u as l,j as e,a}from"./app-7410adb6.js";import r from"./recipe-list-popover-594559f8.js";import c from"./production-create-beginning-form-d7a268da.js";import"./use-flags-bb5e2bec.js";import"./keyboard-56d1c24b.js";import"./open-closed-d88e58b1.js";import"./use-resolve-button-type-27a4d4d7.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./use-root-containers-3976f652.js";import"./hidden-848a9c96.js";import"./transition-993263cf.js";import"./input-ead4f430.js";import"./drawer-32a72dc2.js";import"./dialog-f79f2bdd.js";import"./description-8349c039.js";import"./loading-component-ecf92f96.js";import"./bread-record-service-30515ead.js";import"./PencilIcon-57fd3964.js";function C({account:i}){const{filteredRecipeList:o}=l(t=>t.app);return e("div",{className:"overflow-hidden m-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Recipe"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"target"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Group"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Raw Material Group"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:o.map((t,m)=>a("tr",{className:"bg-white",children:[e("td",{className:"p-3",children:e("div",{className:"flex align-items-center",children:e("div",{className:"ml-3",children:t.name})})}),a("td",{className:"p-3",children:[" ",t.target]}),e("td",{className:"p-3 font-bold",children:e(r,{data:t.bread_group})}),e("td",{className:"p-3",children:e(r,{data:t.raw_materials_group})}),e("td",{className:"p-3 ",children:e(c,{account:i,data:t})})]},m))})]})})}export{C as default};