import{j as t,a}from"./app-d4abecb6.js";import c from"./create-account-cd35fa8e.js";import l from"./account-table-74d5d2ed.js";import{r as o}from"./tabs-476d3edd.js";import"./InputError-a2fdf28f.js";import"./InputLabel-b718d0f8.js";import"./PrimaryButton-a8adaa87.js";import"./TextInput-2ca2d857.js";import"./account-service-5a84a0ff.js";import"./use-flags-b4b16364.js";import"./keyboard-aa6426b8.js";import"./use-computed-5fb79324.js";import"./use-tracked-pointer-791c37cd.js";import"./open-closed-2b25fd50.js";import"./use-resolve-button-type-4b5f1806.js";import"./use-outside-click-9d8e787d.js";import"./hidden-a3069862.js";import"./use-controllable-7acbbc65.js";import"./use-text-value-20061e28.js";import"./BuildingStorefrontIcon-270866d9.js";import"./CheckIcon-0396eef2.js";import"./transition-5d507f62.js";import"./delete-account-a750db8a.js";import"./modal-c4424380.js";import"./dialog-9311a3d8.js";import"./use-root-containers-e0b1d38f.js";import"./use-owner-eb7327d2.js";import"./description-a3ada370.js";import"./loading-component-df6d0b1b.js";import"./TrashIcon-a5d8fa6a.js";import"./update-account-887a173e.js";import"./drawer-69045bf9.js";import"./input-270a4c8d.js";import"./select-a285e454.js";import"./PencilIcon-3021dda1.js";function n(...r){return r.filter(Boolean).join(" ")}function V({accounts:r,branches:p}){let m=[{id:1,name:"Accounts",component:t(l,{branches:p,accounts:r})},{id2:2,name:"Account Registration",component:t(c,{})}];return t("div",{className:"w-full",children:a(o.Group,{children:[t(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((i,e)=>t(o,{className:({selected:s})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",s?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:i.name},e))}),t(o.Panels,{className:"mt-2",children:m.map((i,e)=>t(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:t("ul",{children:t("li",{className:" rounded-md p-3 bg-white",children:t("h3",{className:"text-sm font-medium leading-5",children:i.component})},i.id)})},e))})]})})}export{V as default};
