import{r as o,j as t,a as c,F as e}from"./app-ca9e9db8.js";import{A as u}from"./administrator-layout-dafa88c8.js";import f from"./disclosure-7b60ad9c.js";import h from"./branch-breadcrumbs-component-a87a352a.js";import d from"./branch-account-table-db829ce5.js";import{g as l}from"./account-service-5a84a0ff.js";import b from"./branch-account-skeleton-4f1a74ae.js";import"./side-navbar-10f975c2.js";import"./disclosure-72e30284.js";import"./use-flags-e79b2258.js";import"./keyboard-258d911f.js";import"./open-closed-6eb2db56.js";import"./use-resolve-button-type-7de2700c.js";import"./use-tracked-pointer-de8940f7.js";import"./use-outside-click-611bc137.js";import"./use-tree-walker-6526dc33.js";import"./use-owner-c1e4c892.js";import"./use-text-value-7f0bd76c.js";import"./transition-14c5eeba.js";import"./sub-side-navbar-0989f2e6.js";import"./BuildingStorefrontIcon-7be3a612.js";import"./UserGroupIcon-32a17964.js";import"./toastify-1c1f0c8f.js";import"./recipe-service-29879eef.js";import"./radio-group-component-4f5bba90.js";import"./BanknotesIcon-27476588.js";import"./TruckIcon-bdca73e4.js";import"./ClipboardDocumentCheckIcon-e5cd2848.js";import"./CalendarDaysIcon-1ba03eeb.js";import"./radio-group-7ef14fea.js";import"./description-0e1dbd07.js";import"./hidden-caf23db1.js";import"./use-controllable-85d73b62.js";import"./HomeModernIcon-5b20adce.js";import"./ChevronDoubleRightIcon-f1469679.js";function Z({auth:r}){const[i,m]=o.useState([]),[p,a]=o.useState(!0),n=window.location.pathname.split("/")[3];return o.useEffect(()=>{l({branch_id:n}).then(s=>{m(s.status),a(!1)})},[]),t(u,{auth:r,subNav:t(f,{}),children:p?t(b,{}):c(e,{children:[t(h,{}),t(d,{accounts:i})]})})}export{Z as default};
