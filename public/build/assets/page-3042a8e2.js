import{c as s,u as e,r as a,i as c,h as n,g as l,a as u,j as o}from"./app-13f09cc1.js";import{A as h}from"./administrator-layout-7571c167.js";import f from"./disclosure-900d0cc7.js";import d from"./branch-breadcrumbs-component-8fb70730.js";import{a as _,g as b}from"./selecta-branch-service-4fd940ab.js";import B from"./branch-selecta-tabs-af206d07.js";import"./side-navbar-9beffbfa.js";import"./disclosure-86e2cfa1.js";import"./use-flags-b92e8478.js";import"./keyboard-ac6e2ca1.js";import"./open-closed-ba0c67c8.js";import"./use-resolve-button-type-fba4bf2b.js";import"./use-tracked-pointer-b004fedc.js";import"./use-outside-click-fa077605.js";import"./use-tree-walker-32881036.js";import"./use-owner-4a10483a.js";import"./use-text-value-9f9ea376.js";import"./transition-8907eb00.js";import"./sub-side-navbar-d53a4378.js";import"./BuildingStorefrontIcon-ae3e3067.js";import"./UserGroupIcon-c34da21a.js";import"./toastify-dce61fbf.js";import"./recipe-service-9672b7e4.js";import"./radio-group-component-90a2f112.js";import"./BanknotesIcon-552afd43.js";import"./TruckIcon-e4add008.js";import"./ClipboardDocumentCheckIcon-ef3fcc91.js";import"./CalendarDaysIcon-182a6fee.js";import"./radio-group-940bfc38.js";import"./description-ce464810.js";import"./hidden-e11d2d3e.js";import"./use-controllable-5feab1f0.js";import"./HomeModernIcon-029e75f6.js";import"./ChevronDoubleRightIcon-c321eba2.js";import"./branch-selecta-table-1a9dea84.js";import"./branch-selecta-add-remaining-d6b0a491.js";import"./modal-f5a2b81e.js";import"./dialog-9e5fb0f5.js";import"./use-root-containers-d5c0d305.js";import"./input-b70acb70.js";import"./PlusIcon-59f038e5.js";import"./branch-selecta-double-check-table-25b44d14.js";import"./branch-selecta-edit-remaining-c0960580.js";import"./PencilIcon-74164400.js";import"./selecta-service-4d6bb9c6.js";import"./loading-component-1dcda2c6.js";import"./TrashIcon-b200bb7a.js";import"./branch-selecta-table-header-a3b0286c.js";import"./MapPinIcon-af927e47.js";import"./branch-selecta-sales-report-0db83aee.js";import"./branch-selecta-sales-report-table-header-fc343e7a.js";import"./tabs-b4de158c.js";function bt({auth:r}){const i=s(),m=window.location.pathname.split("/")[3],{meridiem:p}=e(t=>t.app);return e(t=>t.selecta),a.useEffect(()=>{_(m).then(t=>{i(c(t.status))})},[]),a.useEffect(()=>{b({branch_id:m,date:n().format("L"),meridiem:p,seller_id:r.user.id}).then(t=>{i(l(t.status))})},[p]),u(h,{auth:r,subNav:o(f,{}),children:[o(d,{}),o(B,{account:r.user})]})}export{bt as default};
