import{c as n,u as a,r as i,k as l,h as u,i as h,j as r,a as f,F as d}from"./app-8b7f6c54.js";import{A as S}from"./administrator-layout-990bead2.js";import _ from"./disclosure-dce8fa15.js";import g from"./branch-breadcrumbs-component-f0a03877.js";import{a as B,g as b}from"./selecta-branch-service-ae1c374e.js";import x from"./branch-selecta-tabs-35df7a6f.js";import j from"./branch-selecta-skeleton-07bb9b8e.js";import"./side-navbar-87b0eb89.js";import"./disclosure-2e6ce6e9.js";import"./use-flags-1721155c.js";import"./keyboard-20917a55.js";import"./open-closed-ecfdd2ea.js";import"./use-resolve-button-type-8c164ef8.js";import"./use-tracked-pointer-256995fb.js";import"./use-outside-click-68205d4a.js";import"./use-tree-walker-371b56ac.js";import"./use-owner-2c5c579b.js";import"./use-text-value-0873bdfe.js";import"./transition-4bf83aee.js";import"./sub-side-navbar-5b710d02.js";import"./BuildingStorefrontIcon-92150085.js";import"./UserGroupIcon-8b40bfcf.js";import"./toastify-b80429a3.js";import"./recipe-service-827c7e31.js";import"./radio-group-component-178df731.js";import"./BanknotesIcon-2dd76e92.js";import"./TruckIcon-90b9be4e.js";import"./ClipboardDocumentCheckIcon-6e072bbd.js";import"./CalendarDaysIcon-0dcfb6dc.js";import"./radio-group-1635bced.js";import"./description-feb4703c.js";import"./hidden-15ff79fd.js";import"./use-controllable-ad7acf03.js";import"./HomeModernIcon-6f7c4123.js";import"./ChevronDoubleRightIcon-d8bc5165.js";import"./branch-selecta-table-eac8211d.js";import"./branch-selecta-add-remaining-342153bb.js";import"./modal-82457ecb.js";import"./dialog-6887b94d.js";import"./use-root-containers-a6380caf.js";import"./input-fffc9654.js";import"./PlusIcon-5b26c152.js";import"./branch-selecta-double-check-table-ef3c19c9.js";import"./branch-selecta-edit-remaining-bf3ab656.js";import"./PencilIcon-73710f56.js";import"./selecta-service-f79306de.js";import"./loading-component-af5f856c.js";import"./TrashIcon-bf622b72.js";import"./branch-selecta-table-header-7269a9e8.js";import"./MapPinIcon-788ac9d8.js";import"./branch-selecta-sales-report-2b376817.js";import"./branch-selecta-sales-report-table-header-f03b42cc.js";import"./tabs-77237174.js";function jt({auth:o}){const m=n(),p=window.location.pathname.split("/")[3],{meridiem:e}=a(t=>t.app),[s,c]=i.useState(!0);return a(t=>t.selecta),i.useEffect(()=>{B(p).then(t=>{m(l(t.status))})},[]),i.useEffect(()=>{b({branch_id:p,date:u().format("L"),meridiem:e,seller_id:o.user.id}).then(t=>{m(h(t.status)),c(!1)})},[e]),r(S,{auth:o,subNav:r(_,{}),children:s?r(j,{}):f(d,{children:[r(g,{}),r(x,{account:o.user})]})})}export{jt as default};