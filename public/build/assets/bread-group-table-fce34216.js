import{c as d,u as l,r as c,P as n,j as e,F as h,a as r}from"./app-7410adb6.js";import{g as x}from"./bread-group-service-c0fcb782.js";import f from"./bread-group-table-header-db91dbaf.js";import u from"./bread-group-delete-75ea68d9.js";import y from"./bread-group-show-71c49f43.js";import g from"./bread-group-edit-15c4d94b.js";import{m as N}from"./moment-36756ad1.js";import"./MapPinIcon-565fbe0f.js";import"./modal-025e4b33.js";import"./transition-993263cf.js";import"./use-flags-bb5e2bec.js";import"./open-closed-d88e58b1.js";import"./dialog-f79f2bdd.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./loading-component-ecf92f96.js";import"./TrashIcon-63013d3e.js";import"./drawer-32a72dc2.js";import"./PencilSquareIcon-35b6a4e2.js";import"./CheckIcon-9c4fa185.js";import"./combobox-7df13fb0.js";import"./use-computed-e94e9372.js";import"./use-resolve-button-type-27a4d4d7.js";import"./use-tree-walker-a0cbcbb2.js";import"./use-tracked-pointer-2b9fc0fd.js";import"./use-controllable-4c39c8e9.js";function X(){const s=d(),{filteredBreadGroup:a}=l(t=>t.controls);return c.useEffect(()=>{x().then(t=>{s(n(t.status))})},[]),e(h,{children:r("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[e(f,{}),r("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Token"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:a==null?void 0:a.map((t,p)=>{var o,m,i;return r("tr",{className:"hover:bg-red-100",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:(o=t[0])==null?void 0:o.group_name})})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:(m=t[0])==null?void 0:m.token})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:N((i=t[0])==null?void 0:i.created_at).format("LLL")})}),e("td",{className:"px-6 py-4",children:r("div",{className:"flex justify-end gap-4",children:[e(y,{data:t}),e(g,{data:t}),e(u,{data:t})]})})]},p)})})]})]})})}export{X as default};