import{j as t,a}from"./app-7410adb6.js";import c from"./create-account-9420b4b4.js";import l from"./account-table-3d3b0e35.js";import{r as o}from"./tabs-6a712818.js";import"./InputError-83156312.js";import"./InputLabel-d3d08f7d.js";import"./PrimaryButton-1357ea44.js";import"./TextInput-53961ff1.js";import"./account-service-5a84a0ff.js";import"./use-flags-bb5e2bec.js";import"./keyboard-56d1c24b.js";import"./use-computed-e94e9372.js";import"./use-tracked-pointer-2b9fc0fd.js";import"./open-closed-d88e58b1.js";import"./use-resolve-button-type-27a4d4d7.js";import"./use-outside-click-ede8e59f.js";import"./hidden-848a9c96.js";import"./use-controllable-4c39c8e9.js";import"./use-text-value-37d3f72d.js";import"./BuildingStorefrontIcon-aeb34697.js";import"./CheckIcon-e2f493e7.js";import"./transition-993263cf.js";import"./account-table-header-67eca2c3.js";import"./MapPinIcon-565fbe0f.js";import"./delete-account-5cb1cdf9.js";import"./modal-025e4b33.js";import"./dialog-f79f2bdd.js";import"./use-root-containers-3976f652.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./loading-component-ecf92f96.js";import"./TrashIcon-63013d3e.js";import"./update-account-2a6e85f0.js";import"./drawer-32a72dc2.js";import"./input-ead4f430.js";import"./select-9a8a851a.js";import"./PencilIcon-57fd3964.js";function n(...r){return r.filter(Boolean).join(" ")}function X({accounts:r,branches:p}){let m=[{id:1,name:"Accounts",component:t(l,{branches:p,accounts:r})},{id2:2,name:"Account Registration",component:t(c,{})}];return t("div",{className:"w-full",children:a(o.Group,{children:[t(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((i,e)=>t(o,{className:({selected:s})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",s?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:i.name},e))}),t(o.Panels,{className:"mt-2",children:m.map((i,e)=>t(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:t("ul",{children:t("li",{className:" rounded-md p-3 bg-white",children:t("h3",{className:"text-sm font-medium leading-5",children:i.component})},i.id)})},e))})]})})}export{X as default};