import{j as t,a}from"./app-8b7f6c54.js";import c from"./create-account-9d1877ba.js";import l from"./account-table-9039e790.js";import{r as o}from"./tabs-77237174.js";import"./InputError-a04ca431.js";import"./InputLabel-c743d1c1.js";import"./PrimaryButton-e3dbf28e.js";import"./TextInput-9cefd2ee.js";import"./account-service-5a84a0ff.js";import"./use-flags-1721155c.js";import"./keyboard-20917a55.js";import"./use-computed-ef449418.js";import"./use-tracked-pointer-256995fb.js";import"./open-closed-ecfdd2ea.js";import"./use-resolve-button-type-8c164ef8.js";import"./use-outside-click-68205d4a.js";import"./hidden-15ff79fd.js";import"./use-controllable-ad7acf03.js";import"./use-text-value-0873bdfe.js";import"./BuildingStorefrontIcon-92150085.js";import"./CheckIcon-e1c0a6c6.js";import"./transition-4bf83aee.js";import"./account-table-header-f0acb9b0.js";import"./MapPinIcon-788ac9d8.js";import"./delete-account-df95e55d.js";import"./modal-82457ecb.js";import"./dialog-6887b94d.js";import"./use-root-containers-a6380caf.js";import"./use-owner-2c5c579b.js";import"./description-feb4703c.js";import"./loading-component-af5f856c.js";import"./TrashIcon-bf622b72.js";import"./update-account-273622f6.js";import"./drawer-23597b02.js";import"./input-fffc9654.js";import"./select-4f2f2b14.js";import"./PencilIcon-73710f56.js";function n(...r){return r.filter(Boolean).join(" ")}function X({accounts:r,branches:p}){let m=[{id:1,name:"Accounts",component:t(l,{branches:p,accounts:r})},{id2:2,name:"Account Registration",component:t(c,{})}];return t("div",{className:"w-full",children:a(o.Group,{children:[t(o.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:m.map((i,e)=>t(o,{className:({selected:s})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",s?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:i.name},e))}),t(o.Panels,{className:"mt-2",children:m.map((i,e)=>t(o.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:t("ul",{children:t("li",{className:" rounded-md p-3 bg-white",children:t("h3",{className:"text-sm font-medium leading-5",children:i.component})},i.id)})},e))})]})})}export{X as default};
