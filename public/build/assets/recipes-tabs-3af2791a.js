import{r as n,j as e,a as s}from"./app-8b7f6c54.js";import a from"./page-ced2f3b9.js";import l from"./page-6b366259.js";import{r as i}from"./tabs-77237174.js";import"./recipes-stepper-f7cd4cb2.js";import"./ChevronDoubleRightIcon-d8bc5165.js";import"./recipe-details-9ddce2da.js";import"./input-fffc9654.js";import"./bread-group-service-c0fcb782.js";import"./raw-materials-group-service-6776dd2e.js";import"./group-bread-42d5298f.js";import"./select-4f2f2b14.js";import"./ChevronDoubleLeftIcon-65d1b274.js";import"./group-raw-materials-5f22465b.js";import"./loading-component-af5f856c.js";import"./recipe-service-827c7e31.js";import"./recipe-list-table-168d3071.js";import"./recipe-list-table-header-8e0fba6e.js";import"./MapPinIcon-788ac9d8.js";import"./recipe-list-popover-c909a878.js";import"./use-flags-1721155c.js";import"./keyboard-20917a55.js";import"./open-closed-ecfdd2ea.js";import"./use-resolve-button-type-8c164ef8.js";import"./use-outside-click-68205d4a.js";import"./use-owner-2c5c579b.js";import"./use-root-containers-a6380caf.js";import"./hidden-15ff79fd.js";import"./transition-4bf83aee.js";import"./recipe-list-bread-group-edit-4ec1e250.js";import"./drawer-23597b02.js";import"./dialog-6887b94d.js";import"./description-feb4703c.js";import"./PencilSquareIcon-2a22f114.js";import"./recipe-list-raw-materials-group-edit-19972767.js";import"./recipe-list-recipe-edit-f0fc6e59.js";import"./PencilIcon-73710f56.js";function m(...t){return t.filter(Boolean).join(" ")}function W(){let[t]=n.useState([{id:1,name:"List of Recipe",component:e(l,{})},{id2:2,name:"Create Recipe",component:e(a,{})}]);return e("div",{className:"w-full",children:s(i.Group,{children:[e(i.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:t.map((r,o)=>e(i,{className:({selected:p})=>m("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",p?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:r.name},o))}),e(i.Panels,{className:"mt-2",children:t.map((r,o)=>e(i.Panel,{className:m("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:e("ul",{children:e("li",{className:"relative rounded-md p-3 bg-white",children:e("h3",{className:"text-sm font-medium leading-5",children:r.component})},r.id)})},o))})]})})}export{W as default};