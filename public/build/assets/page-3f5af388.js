import{c as p,r as o,k as c,j as t,a as s,F as n}from"./app-ca9e9db8.js";import{B as l}from"./branch-layout-6a86b638.js";import f from"./branch-selecta-table-23280c5a.js";import h from"./branch-selecta-table-header-cd9e7907.js";import u from"./branch_selecta-tabs-6512ab2d.js";import{a as S}from"./selecta-branch-service-248bd481.js";import d from"./branch-selecta-skeleton-3a2fc259.js";import"./sub-side-navbar-0989f2e6.js";import"./transition-14c5eeba.js";import"./use-flags-e79b2258.js";import"./open-closed-6eb2db56.js";import"./BanknotesIcon-27476588.js";import"./TruckIcon-bdca73e4.js";import"./ClipboardDocumentCheckIcon-e5cd2848.js";import"./UserGroupIcon-32a17964.js";import"./CalendarDaysIcon-1ba03eeb.js";import"./toastify-1c1f0c8f.js";import"./recipe-service-29879eef.js";import"./branch-selecta-add-remaining-6fb78884.js";import"./modal-b4afb0e8.js";import"./dialog-10e4fe7f.js";import"./keyboard-258d911f.js";import"./hidden-caf23db1.js";import"./use-root-containers-b141083e.js";import"./use-outside-click-611bc137.js";import"./use-owner-c1e4c892.js";import"./description-0e1dbd07.js";import"./input-a03cc5c7.js";import"./PlusIcon-e4a6d4a7.js";import"./MapPinIcon-3cd5248b.js";function U({auth:r}){const a=p(),[e,i]=o.useState(!0);return o.useEffect(()=>{S(r.user.branch_id).then(m=>{a(c(m.status)),i(!1)})},[]),t(l,{account:r,children:e?t(d,{}):s(n,{children:[t(u,{account:r}),t(h,{}),t(f,{})]})})}export{U as default};
