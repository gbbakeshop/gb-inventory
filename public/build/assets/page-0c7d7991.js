import{c as s,u as e,r as a,i as c,h as n,g as l,a as u,j as o}from"./app-2a3e9844.js";import{A as h}from"./administrator-layout-4a107c9f.js";import f from"./disclosure-5ca686c6.js";import d from"./branch-breadcrumbs-component-3b3f4168.js";import{a as _,g as b}from"./selecta-branch-service-00ca0cc6.js";import B from"./branch-selecta-tabs-f2637d4d.js";import"./side-navbar-e8c1dc1f.js";import"./disclosure-d7e9f4eb.js";import"./use-flags-f5478b5a.js";import"./keyboard-713a72dc.js";import"./open-closed-b1b7f328.js";import"./use-resolve-button-type-bb4dd746.js";import"./use-tracked-pointer-883c8a7b.js";import"./use-outside-click-5cdf2171.js";import"./use-tree-walker-6624f53a.js";import"./use-owner-dedf7cce.js";import"./use-text-value-343d3204.js";import"./transition-d1d6787f.js";import"./sub-side-navbar-0f152b95.js";import"./BuildingStorefrontIcon-20037562.js";import"./UserGroupIcon-77670df4.js";import"./toastify-1816dab2.js";import"./recipe-service-fa082078.js";import"./radio-group-component-9ed6b0e2.js";import"./BanknotesIcon-d8b3b843.js";import"./TruckIcon-6d74cbe5.js";import"./ClipboardDocumentCheckIcon-7fd78327.js";import"./CalendarDaysIcon-ef3bd2fa.js";import"./radio-group-6564781b.js";import"./description-576f7ac0.js";import"./hidden-5c816985.js";import"./use-controllable-43c660ae.js";import"./HomeModernIcon-c70b6abb.js";import"./ChevronDoubleRightIcon-50c47b47.js";import"./branch-selecta-table-a5dd9cf9.js";import"./branch-selecta-add-remaining-8a40c034.js";import"./modal-452a0beb.js";import"./dialog-6309af03.js";import"./use-root-containers-8daacc1e.js";import"./input-4c0b8b28.js";import"./PlusIcon-6a53441d.js";import"./branch-selecta-double-check-table-0b39917f.js";import"./branch-selecta-edit-remaining-eeb772ff.js";import"./PencilIcon-ce313e0d.js";import"./selecta-service-ed219ae1.js";import"./loading-component-1f984f24.js";import"./TrashIcon-1c37741e.js";import"./branch-selecta-table-header-ba1bc287.js";import"./MapPinIcon-8786ea01.js";import"./branch-selecta-sales-report-b9ade73e.js";import"./branch-selecta-sales-report-table-header-5981b64e.js";import"./tabs-570a0044.js";function bt({auth:r}){const i=s(),m=window.location.pathname.split("/")[3],{meridiem:p}=e(t=>t.app);return e(t=>t.selecta),a.useEffect(()=>{_(m).then(t=>{i(c(t.status))})},[]),a.useEffect(()=>{b({branch_id:m,date:n().format("L"),meridiem:p,seller_id:r.user.id}).then(t=>{i(l(t.status))})},[p]),u(h,{auth:r,subNav:o(f,{}),children:[o(d,{}),o(B,{account:r.user})]})}export{bt as default};
