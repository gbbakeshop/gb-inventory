import{u as m,c as a,r as e,e as s,a as c,j as o}from"./app-7410adb6.js";import{B as d}from"./branch-layout-36bb254b.js";import n from"./branch-production-tabs-cc2656bc.js";import u from"./branch-breadcrumbs-9f2615e0.js";import f from"./production-bread-report-header-1b937324.js";import B from"./production-bread-report-table-14f2e686.js";import{a as b}from"./bread-record-service-30515ead.js";import"./sub-side-navbar-2677e6f6.js";import"./transition-993263cf.js";import"./use-flags-bb5e2bec.js";import"./open-closed-d88e58b1.js";import"./BanknotesIcon-95e133a8.js";import"./TruckIcon-6bb4b850.js";import"./ClipboardDocumentCheckIcon-fff76ef0.js";import"./UserGroupIcon-0664234c.js";import"./CalendarDaysIcon-e5b4f601.js";import"./toastify-3421bfdf.js";import"./recipe-service-f290fa9e.js";import"./HomeModernIcon-144bc65a.js";import"./ChevronDoubleRightIcon-3eb59a93.js";import"./MapPinIcon-565fbe0f.js";import"./production-bread-report-edit-67749f2e.js";import"./drawer-32a72dc2.js";import"./dialog-f79f2bdd.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./input-ead4f430.js";import"./loading-component-ecf92f96.js";import"./PencilIcon-57fd3964.js";import"./production-bread-move-sales-report-011687a5.js";function X({auth:r}){const{filteredBreadData:i}=m(t=>t.production),p=a();return e.useEffect(()=>{b({baker_id:r.user.id,branch_id:r.user.branch_id}).then(t=>{p(s(t.status))})},[]),c(d,{account:r,children:[o(u,{account:r.user}),o(n,{account:r.user}),o(f,{}),o(B,{data:i,account:r.user})]})}export{X as default};
