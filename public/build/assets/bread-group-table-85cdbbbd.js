import{c as d,u as l,r as c,L as n,j as e,F as h,a as r}from"./app-d8b8c24c.js";import{g as x}from"./bread-group-service-c0fcb782.js";import f from"./bread-group-table-header-a6ce742e.js";import u from"./bread-group-delete-8eb60a6c.js";import y from"./bread-group-show-16d43dc0.js";import g from"./bread-group-edit-899548ae.js";import{m as N}from"./moment-92a47501.js";import"./MapPinIcon-70d13487.js";import"./modal-02e3e56b.js";import"./transition-84434c72.js";import"./use-flags-b545cc66.js";import"./open-closed-6fc61065.js";import"./dialog-0d0e975e.js";import"./keyboard-7671dd8e.js";import"./hidden-7eeb4a7d.js";import"./use-root-containers-17ba50bf.js";import"./use-owner-82f11557.js";import"./description-017470a7.js";import"./loading-component-9592e567.js";import"./TrashIcon-288018dc.js";import"./drawer-f04b670f.js";import"./PencilSquareIcon-189a5d1c.js";import"./CheckIcon-4f0ae326.js";import"./combobox-563bc92e.js";import"./use-resolve-button-type-9a209279.js";import"./use-tree-walker-d23bca06.js";import"./use-tracked-pointer-41ecaf4d.js";import"./use-controllable-6232ec5f.js";function V(){const s=d(),{filteredBreadGroup:a}=l(t=>t.controls);return c.useEffect(()=>{x().then(t=>{s(n(t.status))})},[]),e(h,{children:r("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[e(f,{}),r("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Token"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:a==null?void 0:a.map((t,p)=>{var o,m,i;return r("tr",{className:"hover:bg-red-100",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:(o=t[0])==null?void 0:o.group_name})})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:(m=t[0])==null?void 0:m.token})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:N((i=t[0])==null?void 0:i.created_at).format("LLL")})}),e("td",{className:"px-6 py-4",children:r("div",{className:"flex justify-end gap-4",children:[e(y,{data:t}),e(g,{data:t}),e(u,{data:t})]})})]},p)})})]})]})})}export{V as default};