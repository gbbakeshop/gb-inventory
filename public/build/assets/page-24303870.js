import{r as t,h as a,j as o}from"./app-7410adb6.js";import{B as e}from"./branch-layout-36bb254b.js";import s from"./expenses-data-card-769d4348.js";import{g as c}from"./dashboard-service-485d4399.js";import"./sub-side-navbar-2677e6f6.js";import"./transition-993263cf.js";import"./use-flags-bb5e2bec.js";import"./open-closed-d88e58b1.js";import"./BanknotesIcon-95e133a8.js";import"./TruckIcon-6bb4b850.js";import"./ClipboardDocumentCheckIcon-fff76ef0.js";import"./UserGroupIcon-0664234c.js";import"./CalendarDaysIcon-e5b4f601.js";import"./toastify-3421bfdf.js";import"./recipe-service-f290fa9e.js";import"./create-charge-1261d748.js";import"./drawer-32a72dc2.js";import"./dialog-f79f2bdd.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./loading-component-ecf92f96.js";import"./select-9a8a851a.js";import"./input-ead4f430.js";import"./charge-service-b8eaa220.js";import"./PlusIcon-f7826403.js";import"./create-credit-7f8c0802.js";import"./credit-service-4f592c83.js";import"./create-expenses-e5b642d5.js";import"./expenses-service-6692c7c0.js";import"./table-credit-5df3bb0e.js";import"./delete-credit-51921f77.js";import"./modal-025e4b33.js";import"./TrashIcon-63013d3e.js";import"./update-credits-3edd74bf.js";import"./PencilIcon-57fd3964.js";import"./account-service-5a84a0ff.js";import"./breads-service-f889b67d.js";import"./selecta-service-390570ef.js";import"./table-charge-2f7b309c.js";import"./delete-charge-2f429978.js";import"./update-charge-018f39b9.js";import"./table-expenses-ee54f061.js";import"./update-expenses-de22e74c.js";import"./delete-expenses-01fca6ee.js";import"./raw-materials-service-f02ba7ea.js";import"./expenses-skeleton-loader-3a1c68ca.js";import"./domination-5b74c293.js";function er({auth:r}){const[i,m]=t.useState([]);return t.useEffect(()=>{c({branch_id:r.user.branch_id,seller_id:r.user.id,date:a().format("L")}).then(p=>{m(p)})},[]),o(e,{account:r,children:o(s,{account:r.user,data:i,branch_id:r.user.branch_id})})}export{er as default};
