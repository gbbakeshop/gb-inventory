import{u as m,c as a,r as e,e as s,a as c,j as o}from"./app-386f611c.js";import{B as d}from"./branch-layout-6b7a178b.js";import n from"./branch-production-tabs-311db847.js";import u from"./branch-breadcrumbs-f2e5ac18.js";import f from"./production-bread-report-header-b61b5257.js";import B from"./production-bread-report-table-38d6fd52.js";import{a as b}from"./bread-record-service-30515ead.js";import"./sub-side-navbar-41b7c009.js";import"./transition-10c90586.js";import"./use-flags-ba628e54.js";import"./open-closed-830cefff.js";import"./BanknotesIcon-33a5d2cc.js";import"./TruckIcon-63b8f537.js";import"./ClipboardDocumentCheckIcon-87b8e1aa.js";import"./UserGroupIcon-829e7f12.js";import"./CalendarDaysIcon-a53a0524.js";import"./toastify-2886a56c.js";import"./recipe-service-ad2a1a00.js";import"./HomeModernIcon-c0ed1ef5.js";import"./ChevronDoubleRightIcon-0be24059.js";import"./MapPinIcon-bb3f12f1.js";import"./production-bread-report-edit-30402ad7.js";import"./drawer-fed6e719.js";import"./dialog-44c0d2eb.js";import"./keyboard-8764aad6.js";import"./hidden-14672228.js";import"./use-root-containers-a0f2502b.js";import"./use-outside-click-ecb80bbc.js";import"./use-owner-0a37672d.js";import"./description-244ca5eb.js";import"./input-7dbfb812.js";import"./loading-component-9cac4a6d.js";import"./PencilIcon-504b773e.js";import"./production-bread-move-sales-report-14b4e223.js";function X({auth:r}){const{filteredBreadData:i}=m(t=>t.production),p=a();return e.useEffect(()=>{b({baker_id:r.user.id,branch_id:r.user.branch_id}).then(t=>{p(s(t.status))})},[]),c(d,{account:r,children:[o(u,{account:r.user}),o(n,{account:r.user}),o(f,{}),o(B,{data:i,account:r.user})]})}export{X as default};
