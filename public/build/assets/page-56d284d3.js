import{c as s,u as i,r as m,h as p,f as c,a as n,j as o}from"./app-44ab44c4.js";import{B as u}from"./branch-layout-aa959880.js";import d from"./branch-production-tabs-396a673a.js";import f from"./branch-breadcrumbs-efb2f898.js";import l from"./sales-report-table-449571b0.js";import{b}from"./bread-record-service-30515ead.js";import h from"./sales-report-table-header-7aadfd59.js";import"./sub-side-navbar-0731e04a.js";import"./transition-e90b95e6.js";import"./use-flags-e6f7da6a.js";import"./open-closed-51f532d6.js";import"./BanknotesIcon-c2bcb871.js";import"./TruckIcon-9be52169.js";import"./ClipboardDocumentCheckIcon-118117c4.js";import"./UserGroupIcon-6c3bbcda.js";import"./CalendarDaysIcon-d2dbd7f9.js";import"./toastify-98c68d19.js";import"./recipe-service-2f812953.js";import"./HomeModernIcon-d306a047.js";import"./ChevronDoubleRightIcon-e0d92245.js";import"./MapPinIcon-24aac475.js";function F({auth:r}){const a=s(),{filteredSalesData:e}=i(t=>t.production);return m.useEffect(()=>{b({seller_id:r.user.id,branch_id:r.user.branch_id,date:p().format("L")}).then(t=>{a(c(t.status))})},[]),n(u,{account:r,children:[o(f,{account:r.user}),o(d,{account:r.user}),o(h,{}),o(l,{data:e,account:r.user})]})}export{F as default};
