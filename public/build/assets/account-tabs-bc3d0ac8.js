import{j as t,a}from"./app-2a3e9844.js";import c from"./create-account-972b828f.js";import l from"./account-table-a1b7ae3f.js";import{r as o}from"./tabs-570a0044.js";import"./InputError-bc8ed90d.js";import"./InputLabel-3a19d2c5.js";import"./PrimaryButton-c742f882.js";import"./TextInput-35e0a60d.js";import"./account-service-5a84a0ff.js";import"./use-flags-f5478b5a.js";import"./keyboard-713a72dc.js";import"./use-computed-e49ba54b.js";import"./use-tracked-pointer-883c8a7b.js";import"./open-closed-b1b7f328.js";import"./use-resolve-button-type-bb4dd746.js";import"./use-outside-click-5cdf2171.js";import"./hidden-5c816985.js";import"./use-controllable-43c660ae.js";import"./use-text-value-343d3204.js";import"./BuildingStorefrontIcon-20037562.js";import"./CheckIcon-9e10b0f8.js";import"./transition-d1d6787f.js";import"./delete-account-aa6b7bf7.js";import"./modal-452a0beb.js";import"./dialog-6309af03.js";import"./use-root-containers-8daacc1e.js";import"./use-owner-dedf7cce.js";import"./description-576f7ac0.js";import"./loading-component-1f984f24.js";import"./TrashIcon-1c37741e.js";import"./update-account-34465981.js";import"./drawer-7f596188.js";import"./input-4c0b8b28.js";import"./select-db0d0475.js";import"./PencilIcon-ce313e0d.js";function n(...r){return r.filter(Boolean).join(" ")}function V({accounts:r,branches:p}){let m=[{id:1,name:"Accounts",component:t(l,{branches:p,accounts:r})},{id2:2,name:"Account Registration",component:t(c,{})}];return t("div",{className:"w-full",children:a(o.Group,{children:[t(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((i,e)=>t(o,{className:({selected:s})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",s?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:i.name},e))}),t(o.Panels,{className:"mt-2",children:m.map((i,e)=>t(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:t("ul",{children:t("li",{className:" rounded-md p-3 bg-white",children:t("h3",{className:"text-sm font-medium leading-5",children:i.component})},i.id)})},e))})]})})}export{V as default};
