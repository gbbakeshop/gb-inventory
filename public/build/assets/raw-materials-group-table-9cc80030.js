import{c as p,u as c,r as d,U as n,j as e,F as h,a as r}from"./app-fba1d0c2.js";import{m as x}from"./moment-78899a2a.js";import f from"./raw-materials-group-table-header-cc769961.js";import{g as u}from"./raw-materials-group-service-86bb5245.js";import y from"./raw-materials-group-show-ef912ffa.js";import g from"./raw-materials-group-edit-87d2970b.js";import N from"./raw-materials-group-delete-87d327ef.js";import"./MapPinIcon-b6237423.js";import"./drawer-e448d89d.js";import"./dialog-240c9526.js";import"./use-flags-6940bf9f.js";import"./keyboard-eb175f2f.js";import"./hidden-35cd6dcd.js";import"./use-root-containers-15b6ecb3.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./description-40b3ab7d.js";import"./open-closed-759ce2e2.js";import"./transition-95cbd138.js";import"./input-9ccd4c8d.js";import"./loading-component-a64795de.js";import"./PencilIcon-7fc353e4.js";import"./PencilSquareIcon-fc03c189.js";import"./CheckIcon-7e19aef5.js";import"./TrashIcon-2066fd1d.js";import"./combobox-15c57f78.js";import"./use-computed-4dfb912a.js";import"./use-resolve-button-type-2d65f5b6.js";import"./use-tree-walker-1c5fca91.js";import"./use-tracked-pointer-ba143354.js";import"./use-controllable-1a7151e9.js";import"./modal-3e2a9e93.js";function Z(){const s=p(),{filteredRawMaterialsGroup:a}=c(t=>t.controls);return d.useEffect(()=>{u().then(t=>{s(n(t.status))})},[]),e(h,{children:r("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:[e(f,{}),r("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Bread Name"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Token"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Created At"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:a==null?void 0:a.map((t,l)=>{var o,i,m;return r("tr",{className:"hover:bg-red-100",children:[e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:(o=t[0])==null?void 0:o.group_name})})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:(i=t[0])==null?void 0:i.token})}),e("td",{className:"px-6 py-4",children:e("span",{className:"inline-flex items-center gap-1 rounded-full justify-center text-center  px-2 py-1 text-xs font-semibold ",children:x((m=t[0])==null?void 0:m.created_at).format("LLL")})}),e("td",{className:"px-6 py-4",children:r("div",{className:"flex justify-end gap-4",children:[e(y,{data:t}),e(g,{data:t}),e(N,{data:t})]})})]},l)})})]})]})})}export{Z as default};