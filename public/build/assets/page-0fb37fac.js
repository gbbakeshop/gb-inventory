import{c as n,u as a,r as i,k as l,h as u,i as h,j as r,a as f,F as d}from"./app-56fb4b1a.js";import{A as S}from"./administrator-layout-1211dd05.js";import _ from"./disclosure-71a66347.js";import g from"./branch-breadcrumbs-component-93984305.js";import{a as B,g as b}from"./selecta-branch-service-c6ffe250.js";import x from"./branch-selecta-tabs-5920124c.js";import j from"./branch-selecta-skeleton-70185181.js";import"./side-navbar-b0d47ac8.js";import"./disclosure-f4ed7f90.js";import"./use-flags-1de4a3d1.js";import"./keyboard-dd738e34.js";import"./open-closed-3656ff4d.js";import"./use-resolve-button-type-5d681cad.js";import"./use-tracked-pointer-e8761221.js";import"./use-outside-click-bfcd1c91.js";import"./use-tree-walker-13da8970.js";import"./use-owner-52ec09d3.js";import"./use-text-value-06955895.js";import"./transition-64ede888.js";import"./sub-side-navbar-228b98f3.js";import"./BuildingStorefrontIcon-e935abdd.js";import"./UserGroupIcon-64c643e9.js";import"./toastify-51f3fee3.js";import"./recipe-service-98a5344c.js";import"./radio-group-component-12b51b14.js";import"./BanknotesIcon-48950f7d.js";import"./TruckIcon-64f11b00.js";import"./ClipboardDocumentCheckIcon-66debf2e.js";import"./CalendarDaysIcon-0063c9f7.js";import"./radio-group-9c960610.js";import"./description-336c31b9.js";import"./hidden-b8abeb37.js";import"./use-controllable-7f4f10f6.js";import"./HomeModernIcon-61cdeb32.js";import"./ChevronDoubleRightIcon-27c6ce15.js";import"./branch-selecta-table-7f887b60.js";import"./branch-selecta-add-remaining-58942da2.js";import"./modal-7b14f555.js";import"./dialog-1963b93f.js";import"./use-root-containers-e0c507b7.js";import"./input-d6daf4f7.js";import"./PlusIcon-50445201.js";import"./branch-selecta-double-check-table-55565b31.js";import"./branch-selecta-edit-remaining-cef31c7c.js";import"./PencilIcon-78571d11.js";import"./selecta-service-37279563.js";import"./loading-component-77a70935.js";import"./TrashIcon-1dac2ca0.js";import"./branch-selecta-table-header-82c2bb4c.js";import"./MapPinIcon-4e8e6e03.js";import"./branch-selecta-sales-report-6030901c.js";import"./branch-selecta-sales-report-table-header-d1f7a509.js";import"./tabs-c99c1885.js";function jt({auth:o}){const m=n(),p=window.location.pathname.split("/")[3],{meridiem:e}=a(t=>t.app),[s,c]=i.useState(!0);return a(t=>t.selecta),i.useEffect(()=>{B(p).then(t=>{m(l(t.status))})},[]),i.useEffect(()=>{b({branch_id:p,date:u().format("L"),meridiem:e,seller_id:o.user.id}).then(t=>{m(h(t.status)),c(!1)})},[e]),r(S,{auth:o,subNav:r(_,{}),children:s?r(j,{}):f(d,{children:[r(g,{}),r(x,{account:o.user})]})})}export{jt as default};
