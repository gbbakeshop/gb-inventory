import{r as o,c as s,g as e,j as t}from"./app-8b7f6c54.js";import{B as c}from"./branch-layout-5b1ed522.js";import n from"./branch-raw-materials-table-6989b8be.js";import{g as l}from"./branch-raw-materials-edit-f3129ef0.js";import u from"./branch-raw-materials-skeleton-8e141025.js";import"./sub-side-navbar-5b710d02.js";import"./transition-4bf83aee.js";import"./use-flags-1721155c.js";import"./open-closed-ecfdd2ea.js";import"./BanknotesIcon-2dd76e92.js";import"./TruckIcon-90b9be4e.js";import"./ClipboardDocumentCheckIcon-6e072bbd.js";import"./UserGroupIcon-8b40bfcf.js";import"./CalendarDaysIcon-0dcfb6dc.js";import"./toastify-b80429a3.js";import"./recipe-service-827c7e31.js";import"./branch-raw-materials-table-header-b10411f9.js";import"./MapPinIcon-788ac9d8.js";import"./drawer-23597b02.js";import"./dialog-6887b94d.js";import"./keyboard-20917a55.js";import"./hidden-15ff79fd.js";import"./use-root-containers-a6380caf.js";import"./use-outside-click-68205d4a.js";import"./use-owner-2c5c579b.js";import"./description-feb4703c.js";import"./loading-component-af5f856c.js";import"./input-fffc9654.js";import"./PencilSquareIcon-2a22f114.js";function J({auth:r}){const[i,a]=o.useState(!0),m=s();return o.useEffect(()=>{l(r.user.branch_id).then(p=>{m(e(p.status)),a(!1)})},[]),t(c,{account:r,children:i?t(u,{}):t(n,{account:r.user,branch_id:r.user.branch_id})})}export{J as default};
