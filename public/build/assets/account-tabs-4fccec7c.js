import{j as t,a}from"./app-386f611c.js";import c from"./create-account-7db1c443.js";import l from"./account-table-c0bae094.js";import{r as o}from"./tabs-8924c6a2.js";import"./InputError-e62bdedd.js";import"./InputLabel-292fcbc4.js";import"./PrimaryButton-53b35028.js";import"./TextInput-abeeaef8.js";import"./account-service-5a84a0ff.js";import"./use-flags-ba628e54.js";import"./keyboard-8764aad6.js";import"./use-computed-717d326a.js";import"./use-tracked-pointer-383ea6e6.js";import"./open-closed-830cefff.js";import"./use-resolve-button-type-c0b37387.js";import"./use-outside-click-ecb80bbc.js";import"./hidden-14672228.js";import"./use-controllable-1037973b.js";import"./use-text-value-385cac6e.js";import"./BuildingStorefrontIcon-be3e9519.js";import"./CheckIcon-670b2513.js";import"./transition-10c90586.js";import"./account-table-header-8b054073.js";import"./MapPinIcon-bb3f12f1.js";import"./delete-account-a0ce6b90.js";import"./modal-903d2b1f.js";import"./dialog-44c0d2eb.js";import"./use-root-containers-a0f2502b.js";import"./use-owner-0a37672d.js";import"./description-244ca5eb.js";import"./loading-component-9cac4a6d.js";import"./TrashIcon-2dfd332d.js";import"./update-account-4d62b7a2.js";import"./drawer-fed6e719.js";import"./input-7dbfb812.js";import"./select-1d5e9b7d.js";import"./PencilIcon-504b773e.js";function n(...r){return r.filter(Boolean).join(" ")}function X({accounts:r,branches:p}){let m=[{id:1,name:"Accounts",component:t(l,{branches:p,accounts:r})},{id2:2,name:"Account Registration",component:t(c,{})}];return t("div",{className:"w-full",children:a(o.Group,{children:[t(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((i,e)=>t(o,{className:({selected:s})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",s?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:i.name},e))}),t(o.Panels,{className:"mt-2",children:m.map((i,e)=>t(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:t("ul",{children:t("li",{className:" rounded-md p-3 bg-white",children:t("h3",{className:"text-sm font-medium leading-5",children:i.component})},i.id)})},e))})]})})}export{X as default};
