import{c as s,u as e,r as a,i as c,h as n,g as l,a as u,j as o}from"./app-d8b8c24c.js";import{A as h}from"./administrator-layout-fc878502.js";import f from"./disclosure-6cc61d0a.js";import d from"./branch-breadcrumbs-component-a63bfad0.js";import{a as _,g as b}from"./selecta-branch-service-024433c0.js";import B from"./branch-selecta-tabs-518e12c4.js";import"./side-navbar-ec6da8e9.js";import"./BuildingStorefrontIcon-5cab5a45.js";import"./use-flags-b545cc66.js";import"./keyboard-7671dd8e.js";import"./open-closed-6fc61065.js";import"./use-resolve-button-type-9a209279.js";import"./use-tracked-pointer-41ecaf4d.js";import"./use-owner-82f11557.js";import"./use-tree-walker-d23bca06.js";import"./transition-84434c72.js";import"./sub-side-navbar-26cceb0b.js";import"./UserGroupIcon-8e50e372.js";import"./toastify-2ba245da.js";import"./recipe-service-88d17e6f.js";import"./radio-group-component-c967a935.js";import"./BanknotesIcon-2c1857aa.js";import"./TruckIcon-cc668684.js";import"./ClipboardDocumentCheckIcon-27844566.js";import"./CalendarDaysIcon-46087c7c.js";import"./radio-group-6ceefeb4.js";import"./description-017470a7.js";import"./hidden-7eeb4a7d.js";import"./use-controllable-6232ec5f.js";import"./HomeModernIcon-47310f7f.js";import"./ChevronDoubleRightIcon-d77c839f.js";import"./branch-selecta-table-7a7fc4da.js";import"./branch-selecta-add-remaining-c9a437fd.js";import"./modal-02e3e56b.js";import"./dialog-0d0e975e.js";import"./use-root-containers-17ba50bf.js";import"./input-fcdcd036.js";import"./PlusIcon-c1e271b8.js";import"./branch-selecta-double-check-table-95a765c5.js";import"./branch-selecta-edit-remaining-7b722e4d.js";import"./PencilIcon-bd43f856.js";import"./selecta-service-439a0fab.js";import"./loading-component-9592e567.js";import"./TrashIcon-288018dc.js";import"./branch-selecta-table-header-546bae30.js";import"./MapPinIcon-70d13487.js";import"./branch-selecta-sales-report-56adf95b.js";import"./branch-selecta-sales-report-table-header-55b5853a.js";import"./tabs-2bf4da52.js";function ft({auth:r}){const i=s(),m=window.location.pathname.split("/")[3],{meridiem:p}=e(t=>t.app);return e(t=>t.selecta),a.useEffect(()=>{_(m).then(t=>{i(c(t.status))})},[]),a.useEffect(()=>{b({branch_id:m,date:n().format("L"),meridiem:p,seller_id:r.user.id}).then(t=>{i(l(t.status))})},[p]),u(h,{auth:r,subNav:o(f,{}),children:[o(d,{}),o(B,{account:r.user})]})}export{ft as default};
