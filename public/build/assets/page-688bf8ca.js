import{c as s,r as i,h as e,i as m,a as p,j as t}from"./app-8b7f6c54.js";import{B as c}from"./branch-layout-5b1ed522.js";import n from"./branch-selecta-table-header-7269a9e8.js";import l from"./branch_selecta-tabs-27550c11.js";import f from"./branch-selecta-sales-report-2b376817.js";import{g as h}from"./selecta-branch-service-ae1c374e.js";import"./sub-side-navbar-5b710d02.js";import"./transition-4bf83aee.js";import"./use-flags-1721155c.js";import"./open-closed-ecfdd2ea.js";import"./BanknotesIcon-2dd76e92.js";import"./TruckIcon-90b9be4e.js";import"./ClipboardDocumentCheckIcon-6e072bbd.js";import"./UserGroupIcon-8b40bfcf.js";import"./CalendarDaysIcon-0dcfb6dc.js";import"./toastify-b80429a3.js";import"./recipe-service-827c7e31.js";import"./MapPinIcon-788ac9d8.js";import"./branch-selecta-sales-report-table-header-f03b42cc.js";function q({auth:r}){const a=s();return i.useEffect(()=>{h({branch_id:r.user.branch_id,date:e().format("L"),meridiem:e().format("A"),seller_id:r.user.id}).then(o=>{a(m(o.status))})},[]),p(c,{account:r,children:[t(l,{account:r}),t(n,{}),t(f,{})]})}export{q as default};