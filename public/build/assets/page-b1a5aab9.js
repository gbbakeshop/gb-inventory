import{c as s,r as i,h as e,i as m,a as p,j as t}from"./app-eb237854.js";import{B as c}from"./branch-layout-08892d9c.js";import n from"./branch-selecta-table-header-071b7493.js";import l from"./branch_selecta-tabs-206ec74d.js";import f from"./branch-selecta-sales-report-1c93bbde.js";import{g as h}from"./selecta-branch-service-c53112ae.js";import"./sub-side-navbar-d9d6df84.js";import"./transition-6275e480.js";import"./use-flags-1f69cd58.js";import"./open-closed-f62fba30.js";import"./BanknotesIcon-ec16920d.js";import"./TruckIcon-5c128649.js";import"./ClipboardDocumentCheckIcon-0e028205.js";import"./UserGroupIcon-60695864.js";import"./CalendarDaysIcon-cd2777a4.js";import"./toastify-dd7ad7d7.js";import"./recipe-service-6fbb4678.js";import"./MapPinIcon-02dd07c0.js";import"./branch-selecta-sales-report-table-header-07132ea7.js";function q({auth:r}){const a=s();return i.useEffect(()=>{h({branch_id:r.user.branch_id,date:e().format("L"),meridiem:e().format("A"),seller_id:r.user.id}).then(o=>{a(m(o.status))})},[]),p(c,{account:r,children:[t(l,{account:r}),t(n,{}),t(f,{})]})}export{q as default};
