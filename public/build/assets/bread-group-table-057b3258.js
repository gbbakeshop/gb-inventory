import{c as d,u as l,r as c,A as n,j as e,F as h,a as r}from"./app-2504df6d.js";import{g as x}from"./bread-group-service-c0fcb782.js";import f from"./bread-group-table-header-ec5b476e.js";import u from"./bread-group-delete-f4efd9b6.js";import y from"./bread-group-show-66a0e9c7.js";import g from"./bread-group-edit-3d9a40a3.js";import{m as N}from"./moment-3b3dc9ca.js";import"./MapPinIcon-2904a063.js";import"./modal-6610d6cc.js";import"./transition-25203836.js";import"./use-flags-d2ac3b38.js";import"./open-closed-b5309c82.js";import"./dialog-b3562fd5.js";import"./keyboard-057a4a8a.js";import"./hidden-7de8d8fd.js";import"./use-root-containers-ce4e1455.js";import"./use-owner-17d62cec.js";import"./description-4618bf7a.js";import"./loading-component-c05027de.js";import"./TrashIcon-cf294bca.js";import"./drawer-423fda89.js";import"./PencilSquareIcon-cd641b0b.js";import"./CheckIcon-922f3755.js";import"./combobox-0158ed10.js";import"./use-resolve-button-type-054082b2.js";import"./use-tree-walker-d5fbb5e3.js";import"./use-tracked-pointer-6a8d921e.js";import"./use-controllable-e704b93a.js";function V(){const s=d(),{filteredBreadGroup:a}=l(t=>t.controls);return c.useEffect(()=>{x().then(t=>{s(n(t.status))})},[]),e(h,{children:r("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[e(f,{}),r("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Token"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:a==null?void 0:a.map((t,p)=>{var o,m,i;return r("tr",{className:"hover:bg-red-100",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:(o=t[0])==null?void 0:o.group_name})})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:(m=t[0])==null?void 0:m.token})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:N((i=t[0])==null?void 0:i.created_at).format("LLL")})}),e("td",{className:"px-6 py-4",children:r("div",{className:"flex justify-end gap-4",children:[e(y,{data:t}),e(g,{data:t}),e(u,{data:t})]})})]},p)})})]})]})})}export{V as default};