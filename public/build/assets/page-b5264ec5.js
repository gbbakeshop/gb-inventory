import{c as p,r as o,k as c,j as t,a as s,F as n}from"./app-56fb4b1a.js";import{B as l}from"./branch-layout-0495a29f.js";import f from"./branch-selecta-table-7f887b60.js";import h from"./branch-selecta-table-header-82c2bb4c.js";import u from"./branch_selecta-tabs-f749644e.js";import{a as S}from"./selecta-branch-service-c6ffe250.js";import d from"./branch-selecta-skeleton-70185181.js";import"./sub-side-navbar-228b98f3.js";import"./transition-64ede888.js";import"./use-flags-1de4a3d1.js";import"./open-closed-3656ff4d.js";import"./BanknotesIcon-48950f7d.js";import"./TruckIcon-64f11b00.js";import"./ClipboardDocumentCheckIcon-66debf2e.js";import"./UserGroupIcon-64c643e9.js";import"./CalendarDaysIcon-0063c9f7.js";import"./toastify-51f3fee3.js";import"./recipe-service-98a5344c.js";import"./branch-selecta-add-remaining-58942da2.js";import"./modal-7b14f555.js";import"./dialog-1963b93f.js";import"./keyboard-dd738e34.js";import"./hidden-b8abeb37.js";import"./use-root-containers-e0c507b7.js";import"./use-outside-click-bfcd1c91.js";import"./use-owner-52ec09d3.js";import"./description-336c31b9.js";import"./input-d6daf4f7.js";import"./PlusIcon-50445201.js";import"./MapPinIcon-4e8e6e03.js";function U({auth:r}){const a=p(),[e,i]=o.useState(!0);return o.useEffect(()=>{S(r.user.branch_id).then(m=>{a(c(m.status)),i(!1)})},[]),t(l,{account:r,children:e?t(d,{}):s(n,{children:[t(u,{account:r}),t(h,{}),t(f,{})]})})}export{U as default};
