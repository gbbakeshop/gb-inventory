import{c as s,u as i,r as m,h as p,f as c,a as n,j as o}from"./app-13f09cc1.js";import{B as u}from"./branch-layout-d38e7aa0.js";import d from"./branch-production-tabs-446ea1fe.js";import f from"./branch-breadcrumbs-b3b356af.js";import l from"./sales-report-table-c43004b4.js";import{b}from"./bread-record-service-30515ead.js";import h from"./sales-report-table-header-4c88c46f.js";import"./sub-side-navbar-d53a4378.js";import"./transition-8907eb00.js";import"./use-flags-b92e8478.js";import"./open-closed-ba0c67c8.js";import"./BanknotesIcon-552afd43.js";import"./TruckIcon-e4add008.js";import"./ClipboardDocumentCheckIcon-ef3fcc91.js";import"./UserGroupIcon-c34da21a.js";import"./CalendarDaysIcon-182a6fee.js";import"./toastify-dce61fbf.js";import"./recipe-service-9672b7e4.js";import"./HomeModernIcon-029e75f6.js";import"./ChevronDoubleRightIcon-c321eba2.js";import"./MapPinIcon-af927e47.js";function F({auth:r}){const a=s(),{filteredSalesData:e}=i(t=>t.production);return m.useEffect(()=>{b({seller_id:r.user.id,branch_id:r.user.branch_id,date:p().format("L")}).then(t=>{a(c(t.status))})},[]),n(u,{account:r,children:[o(f,{account:r.user}),o(d,{account:r.user}),o(h,{}),o(l,{data:e,account:r.user})]})}export{F as default};