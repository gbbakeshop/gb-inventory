import{r as o,j as t,a as c,F as e}from"./app-7410adb6.js";import{A as u}from"./administrator-layout-0d6fc184.js";import f from"./disclosure-fcc4aa5e.js";import h from"./branch-breadcrumbs-component-ee2cc0a5.js";import d from"./branch-account-table-4259210b.js";import{g as l}from"./account-service-5a84a0ff.js";import b from"./branch-account-skeleton-6a111108.js";import"./side-navbar-50bd09c0.js";import"./disclosure-d3541d0e.js";import"./use-flags-bb5e2bec.js";import"./keyboard-56d1c24b.js";import"./open-closed-d88e58b1.js";import"./use-resolve-button-type-27a4d4d7.js";import"./use-tracked-pointer-2b9fc0fd.js";import"./use-outside-click-ede8e59f.js";import"./use-tree-walker-a0cbcbb2.js";import"./use-owner-6e082ab6.js";import"./use-text-value-37d3f72d.js";import"./transition-993263cf.js";import"./sub-side-navbar-2677e6f6.js";import"./BuildingStorefrontIcon-aeb34697.js";import"./UserGroupIcon-0664234c.js";import"./toastify-3421bfdf.js";import"./recipe-service-f290fa9e.js";import"./radio-group-component-bba7e4af.js";import"./BanknotesIcon-95e133a8.js";import"./TruckIcon-6bb4b850.js";import"./ClipboardDocumentCheckIcon-fff76ef0.js";import"./CalendarDaysIcon-e5b4f601.js";import"./radio-group-42d7ff46.js";import"./description-8349c039.js";import"./hidden-848a9c96.js";import"./use-controllable-4c39c8e9.js";import"./HomeModernIcon-144bc65a.js";import"./ChevronDoubleRightIcon-3eb59a93.js";function Z({auth:r}){const[i,m]=o.useState([]),[p,a]=o.useState(!0),n=window.location.pathname.split("/")[3];return o.useEffect(()=>{l({branch_id:n}).then(s=>{m(s.status),a(!1)})},[]),t(u,{auth:r,subNav:t(f,{}),children:p?t(b,{}):c(e,{children:[t(h,{}),t(d,{accounts:i})]})})}export{Z as default};