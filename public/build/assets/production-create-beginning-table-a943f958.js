import{u as l,j as e,a}from"./app-326fe7cb.js";import r from"./recipe-list-popover-b988c461.js";import c from"./production-create-beginning-form-13e2cdfd.js";import"./use-flags-96fb4146.js";import"./keyboard-5e834d6e.js";import"./open-closed-6013aad3.js";import"./use-resolve-button-type-05593ea0.js";import"./use-owner-77703a6f.js";import"./use-root-containers-5be4d362.js";import"./hidden-ad64290c.js";import"./transition-70920480.js";import"./input-a07790a4.js";import"./drawer-e49dce0f.js";import"./dialog-c2d7a5e0.js";import"./description-c1d62b9e.js";import"./loading-component-d79c8f4d.js";import"./bread-record-service-30515ead.js";import"./moment-fbc5633a.js";import"./PencilIcon-da90f55b.js";function C({account:i}){const{filteredRecipeList:o}=l(t=>t.app);return e("div",{className:"overflow-hidden m-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Recipe"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"target"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Group"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Raw Material Group"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:o.map((t,m)=>a("tr",{className:"bg-white",children:[e("td",{className:"p-3",children:e("div",{className:"flex align-items-center",children:e("div",{className:"ml-3",children:t.name})})}),a("td",{className:"p-3",children:[" ",t.target]}),e("td",{className:"p-3 font-bold",children:e(r,{data:t.bread_group})}),e("td",{className:"p-3",children:e(r,{data:t.raw_materials_group})}),e("td",{className:"p-3 ",children:e(c,{account:i,data:t})})]},m))})]})})}export{C as default};
