import{r as o,c as s,g as e,j as t}from"./app-7410adb6.js";import{B as c}from"./branch-layout-36bb254b.js";import n from"./branch-raw-materials-table-ec7cbf3d.js";import{g as l}from"./branch-raw-materials-edit-5efee71a.js";import u from"./branch-raw-materials-skeleton-2868ceb8.js";import"./sub-side-navbar-2677e6f6.js";import"./transition-993263cf.js";import"./use-flags-bb5e2bec.js";import"./open-closed-d88e58b1.js";import"./BanknotesIcon-95e133a8.js";import"./TruckIcon-6bb4b850.js";import"./ClipboardDocumentCheckIcon-fff76ef0.js";import"./UserGroupIcon-0664234c.js";import"./CalendarDaysIcon-e5b4f601.js";import"./toastify-3421bfdf.js";import"./recipe-service-f290fa9e.js";import"./branch-raw-materials-table-header-fe0b177b.js";import"./MapPinIcon-565fbe0f.js";import"./drawer-32a72dc2.js";import"./dialog-f79f2bdd.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./loading-component-ecf92f96.js";import"./input-ead4f430.js";import"./PencilSquareIcon-35b6a4e2.js";function J({auth:r}){const[i,a]=o.useState(!0),m=s();return o.useEffect(()=>{l(r.user.branch_id).then(p=>{m(e(p.status)),a(!1)})},[]),t(c,{account:r,children:i?t(u,{}):t(n,{account:r.user,branch_id:r.user.branch_id})})}export{J as default};
