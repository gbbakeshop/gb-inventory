import{j as t,a}from"./app-d2b09770.js";import c from"./create-account-ffddf717.js";import l from"./account-table-f2608a45.js";import{r as o}from"./tabs-88ccb981.js";import"./InputError-e91fd2a9.js";import"./InputLabel-b7253ec8.js";import"./PrimaryButton-562d419c.js";import"./TextInput-068bd8c6.js";import"./account-service-5a84a0ff.js";import"./use-flags-ff80cabd.js";import"./keyboard-b9724d1e.js";import"./use-computed-0b8fa8d3.js";import"./use-tracked-pointer-fbce0aa6.js";import"./open-closed-16818905.js";import"./use-resolve-button-type-e5ef78d6.js";import"./use-outside-click-16496528.js";import"./hidden-35e15615.js";import"./use-controllable-e2e1617e.js";import"./use-text-value-2a496205.js";import"./BuildingStorefrontIcon-97569aee.js";import"./CheckIcon-e2181cc7.js";import"./transition-fbae7002.js";import"./account-table-header-78387056.js";import"./MapPinIcon-007457f0.js";import"./delete-account-ca0a1434.js";import"./modal-c3ec5a0c.js";import"./dialog-50d3102e.js";import"./use-root-containers-a17000d0.js";import"./use-owner-b99c53d2.js";import"./description-306b1a94.js";import"./loading-component-dc558073.js";import"./TrashIcon-4b1435a1.js";import"./update-account-79b51784.js";import"./drawer-501cfe44.js";import"./input-6830b8f6.js";import"./select-54194408.js";import"./PencilIcon-aa0ec778.js";function n(...r){return r.filter(Boolean).join(" ")}function X({accounts:r,branches:p}){let m=[{id:1,name:"Accounts",component:t(l,{branches:p,accounts:r})},{id2:2,name:"Account Registration",component:t(c,{})}];return t("div",{className:"w-full",children:a(o.Group,{children:[t(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((i,e)=>t(o,{className:({selected:s})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",s?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:i.name},e))}),t(o.Panels,{className:"mt-2",children:m.map((i,e)=>t(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:t("ul",{children:t("li",{className:" rounded-md p-3 bg-white",children:t("h3",{className:"text-sm font-medium leading-5",children:i.component})},i.id)})},e))})]})})}export{X as default};
