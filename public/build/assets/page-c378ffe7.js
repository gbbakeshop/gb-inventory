import{r as t,h as a,j as o}from"./app-ca9e9db8.js";import{B as e}from"./branch-layout-6a86b638.js";import s from"./expenses-data-card-25274172.js";import{g as c}from"./dashboard-service-485d4399.js";import"./sub-side-navbar-0989f2e6.js";import"./transition-14c5eeba.js";import"./use-flags-e79b2258.js";import"./open-closed-6eb2db56.js";import"./BanknotesIcon-27476588.js";import"./TruckIcon-bdca73e4.js";import"./ClipboardDocumentCheckIcon-e5cd2848.js";import"./UserGroupIcon-32a17964.js";import"./CalendarDaysIcon-1ba03eeb.js";import"./toastify-1c1f0c8f.js";import"./recipe-service-29879eef.js";import"./create-charge-76643fd9.js";import"./drawer-da81731d.js";import"./dialog-10e4fe7f.js";import"./keyboard-258d911f.js";import"./hidden-caf23db1.js";import"./use-root-containers-b141083e.js";import"./use-outside-click-611bc137.js";import"./use-owner-c1e4c892.js";import"./description-0e1dbd07.js";import"./loading-component-915c0a99.js";import"./select-da8545c1.js";import"./input-a03cc5c7.js";import"./charge-service-b8eaa220.js";import"./PlusIcon-e4a6d4a7.js";import"./create-credit-c8880def.js";import"./credit-service-4f592c83.js";import"./create-expenses-55507f4c.js";import"./expenses-service-6692c7c0.js";import"./table-credit-126e2fa6.js";import"./delete-credit-81f25b26.js";import"./modal-b4afb0e8.js";import"./TrashIcon-5b6ec5a4.js";import"./update-credits-ced6edf3.js";import"./PencilIcon-8e2bb491.js";import"./account-service-5a84a0ff.js";import"./breads-service-558ae143.js";import"./selecta-service-c6c4105d.js";import"./table-charge-c71ac618.js";import"./delete-charge-3ec0628c.js";import"./update-charge-81fc32f5.js";import"./table-expenses-8a082b0a.js";import"./update-expenses-d06abf66.js";import"./delete-expenses-adfb42de.js";import"./raw-materials-service-4c40e2fd.js";import"./expenses-skeleton-loader-50883fb6.js";import"./domination-78f2d7fb.js";function er({auth:r}){const[i,m]=t.useState([]);return t.useEffect(()=>{c({branch_id:r.user.branch_id,seller_id:r.user.id,date:a().format("L")}).then(p=>{m(p)})},[]),o(e,{account:r,children:o(s,{account:r.user,data:i,branch_id:r.user.branch_id})})}export{er as default};
