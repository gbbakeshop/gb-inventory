import{r as t,h as a,j as o}from"./app-fba1d0c2.js";import{B as e}from"./branch-layout-1ad85d76.js";import s from"./expenses-data-card-5d7db03a.js";import{g as c}from"./dashboard-service-485d4399.js";import"./sub-side-navbar-021d117a.js";import"./transition-95cbd138.js";import"./use-flags-6940bf9f.js";import"./open-closed-759ce2e2.js";import"./BanknotesIcon-884d4f63.js";import"./TruckIcon-efb9d119.js";import"./ClipboardDocumentCheckIcon-f9dd3e7e.js";import"./UserGroupIcon-947f3da7.js";import"./CalendarDaysIcon-74f8295e.js";import"./toastify-111247af.js";import"./recipe-service-8f5ddc21.js";import"./create-charge-0934f3f9.js";import"./drawer-e448d89d.js";import"./dialog-240c9526.js";import"./keyboard-eb175f2f.js";import"./hidden-35cd6dcd.js";import"./use-root-containers-15b6ecb3.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./description-40b3ab7d.js";import"./loading-component-a64795de.js";import"./select-adc657c2.js";import"./input-9ccd4c8d.js";import"./charge-service-b8eaa220.js";import"./PlusIcon-47445de8.js";import"./create-credit-d72bd640.js";import"./credit-service-4f592c83.js";import"./create-expenses-205e5309.js";import"./expenses-service-6692c7c0.js";import"./table-credit-ea0d3541.js";import"./delete-credit-d831c7b4.js";import"./modal-3e2a9e93.js";import"./TrashIcon-2066fd1d.js";import"./update-credits-738bff83.js";import"./PencilIcon-7fc353e4.js";import"./account-service-5a84a0ff.js";import"./breads-service-083cba62.js";import"./selecta-service-a4ce61a0.js";import"./table-charge-91e8d304.js";import"./delete-charge-30ba1efb.js";import"./update-charge-5d4c1bd1.js";import"./table-expenses-56799c50.js";import"./update-expenses-d8cd23cc.js";import"./delete-expenses-d522d98d.js";import"./raw-materials-service-d9a268eb.js";function pr({auth:r}){const[i,m]=t.useState([]);return t.useEffect(()=>{c({branch_id:r.user.branch_id,seller_id:r.user.id,date:a().format("L")}).then(p=>{m(p)})},[]),o(e,{account:r,children:o(s,{account:r.user,data:i,branch_id:r.user.branch_id})})}export{pr as default};
