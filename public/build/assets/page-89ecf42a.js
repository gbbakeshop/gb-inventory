import{r as i,c as e,g as n,j as r,a as c,F as l}from"./app-eb237854.js";import{A as u}from"./administrator-layout-86a71269.js";import f from"./disclosure-da4a0ec9.js";import h from"./branch-breadcrumbs-component-6d5cfd35.js";import d from"./branch-raw-materials-table-79944326.js";import{g}from"./branch-raw-materials-edit-c4d0f0c0.js";import w from"./branch-raw-materials-skeleton-0dbb71bd.js";import"./side-navbar-0a65fa8e.js";import"./disclosure-d0073826.js";import"./use-flags-1f69cd58.js";import"./keyboard-f9d3da82.js";import"./open-closed-f62fba30.js";import"./use-resolve-button-type-2e5318d0.js";import"./use-tracked-pointer-d7f871bd.js";import"./use-outside-click-a3322ea9.js";import"./use-tree-walker-0aedafbf.js";import"./use-owner-fefd8ce1.js";import"./use-text-value-c46261c3.js";import"./transition-6275e480.js";import"./sub-side-navbar-d9d6df84.js";import"./BuildingStorefrontIcon-56196fb6.js";import"./UserGroupIcon-60695864.js";import"./toastify-dd7ad7d7.js";import"./recipe-service-6fbb4678.js";import"./radio-group-component-dcfb9ddd.js";import"./BanknotesIcon-ec16920d.js";import"./TruckIcon-5c128649.js";import"./ClipboardDocumentCheckIcon-0e028205.js";import"./CalendarDaysIcon-cd2777a4.js";import"./radio-group-a69a2abe.js";import"./description-9b69da41.js";import"./hidden-2c9b8996.js";import"./use-controllable-28c57760.js";import"./HomeModernIcon-5be2471f.js";import"./ChevronDoubleRightIcon-9d5bc1e1.js";import"./branch-raw-materials-table-header-da999cdb.js";import"./MapPinIcon-02dd07c0.js";import"./drawer-c7f8627d.js";import"./dialog-1fc15b37.js";import"./use-root-containers-f2e46cee.js";import"./loading-component-1a997bac.js";import"./input-3a1442a7.js";import"./PencilSquareIcon-4cfac22c.js";function sr({auth:t}){const o=window.location.pathname.split("/")[3],[m,a]=i.useState(!0),p=e();return i.useEffect(()=>{g(o).then(s=>{p(n(s.status)),a(!1)})},[]),r(u,{auth:t,subNav:r(f,{}),children:m?r(w,{}):c(l,{children:[r(h,{}),r(d,{account:t.user,branch_id:o})]})})}export{sr as default};