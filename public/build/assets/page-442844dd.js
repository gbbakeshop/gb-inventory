import{c as s,r as i,h as e,g as m,a as p,j as t}from"./app-fba1d0c2.js";import{B as c}from"./branch-layout-1ad85d76.js";import n from"./branch-selecta-table-header-848c618f.js";import l from"./branch_selecta-tabs-c5e3a7d1.js";import f from"./branch-selecta-sales-report-fea6a69e.js";import{g as h}from"./selecta-branch-service-cb5dbc5e.js";import"./sub-side-navbar-021d117a.js";import"./transition-95cbd138.js";import"./use-flags-6940bf9f.js";import"./open-closed-759ce2e2.js";import"./BanknotesIcon-884d4f63.js";import"./TruckIcon-efb9d119.js";import"./ClipboardDocumentCheckIcon-f9dd3e7e.js";import"./UserGroupIcon-947f3da7.js";import"./CalendarDaysIcon-74f8295e.js";import"./toastify-111247af.js";import"./recipe-service-8f5ddc21.js";import"./MapPinIcon-b6237423.js";import"./branch-selecta-sales-report-table-header-6ff4ccee.js";function q({auth:r}){const a=s();return i.useEffect(()=>{h({branch_id:r.user.branch_id,date:e().format("L"),meridiem:e().format("A"),seller_id:r.user.id}).then(o=>{a(m(o.status))})},[]),p(c,{account:r,children:[t(l,{account:r}),t(n,{}),t(f,{})]})}export{q as default};
