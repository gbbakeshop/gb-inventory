import{r as i,c as e,g as n,j as r,a as c,F as l}from"./app-8b7f6c54.js";import{A as u}from"./administrator-layout-990bead2.js";import f from"./disclosure-dce8fa15.js";import h from"./branch-breadcrumbs-component-f0a03877.js";import d from"./branch-raw-materials-table-6989b8be.js";import{g}from"./branch-raw-materials-edit-f3129ef0.js";import w from"./branch-raw-materials-skeleton-8e141025.js";import"./side-navbar-87b0eb89.js";import"./disclosure-2e6ce6e9.js";import"./use-flags-1721155c.js";import"./keyboard-20917a55.js";import"./open-closed-ecfdd2ea.js";import"./use-resolve-button-type-8c164ef8.js";import"./use-tracked-pointer-256995fb.js";import"./use-outside-click-68205d4a.js";import"./use-tree-walker-371b56ac.js";import"./use-owner-2c5c579b.js";import"./use-text-value-0873bdfe.js";import"./transition-4bf83aee.js";import"./sub-side-navbar-5b710d02.js";import"./BuildingStorefrontIcon-92150085.js";import"./UserGroupIcon-8b40bfcf.js";import"./toastify-b80429a3.js";import"./recipe-service-827c7e31.js";import"./radio-group-component-178df731.js";import"./BanknotesIcon-2dd76e92.js";import"./TruckIcon-90b9be4e.js";import"./ClipboardDocumentCheckIcon-6e072bbd.js";import"./CalendarDaysIcon-0dcfb6dc.js";import"./radio-group-1635bced.js";import"./description-feb4703c.js";import"./hidden-15ff79fd.js";import"./use-controllable-ad7acf03.js";import"./HomeModernIcon-6f7c4123.js";import"./ChevronDoubleRightIcon-d8bc5165.js";import"./branch-raw-materials-table-header-b10411f9.js";import"./MapPinIcon-788ac9d8.js";import"./drawer-23597b02.js";import"./dialog-6887b94d.js";import"./use-root-containers-a6380caf.js";import"./loading-component-af5f856c.js";import"./input-fffc9654.js";import"./PencilSquareIcon-2a22f114.js";function sr({auth:t}){const o=window.location.pathname.split("/")[3],[m,a]=i.useState(!0),p=e();return i.useEffect(()=>{g(o).then(s=>{p(n(s.status)),a(!1)})},[]),r(u,{auth:t,subNav:r(f,{}),children:m?r(w,{}):c(l,{children:[r(h,{}),r(d,{account:t.user,branch_id:o})]})})}export{sr as default};