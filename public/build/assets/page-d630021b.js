import{r as t,h as a,j as o}from"./app-588386eb.js";import{B as e}from"./branch-layout-40151d4a.js";import s from"./expenses-data-card-bdbb5bde.js";import{g as c}from"./dashboard-service-485d4399.js";import"./sub-side-navbar-1e91c908.js";import"./transition-8b65e882.js";import"./use-flags-eb61f600.js";import"./open-closed-2fb80018.js";import"./BanknotesIcon-93b53490.js";import"./TruckIcon-c98585b5.js";import"./ClipboardDocumentCheckIcon-3ce50756.js";import"./UserGroupIcon-da0945fd.js";import"./CalendarDaysIcon-98aff9f0.js";import"./toastify-b815b3a4.js";import"./recipe-service-881e2fba.js";import"./create-charge-8e465d0b.js";import"./drawer-17261e78.js";import"./dialog-7ef2a324.js";import"./keyboard-3c8f3a5d.js";import"./hidden-d32fdf9a.js";import"./use-root-containers-cd0d56fe.js";import"./use-outside-click-5529613d.js";import"./use-owner-d5cea512.js";import"./description-b5f4e5c1.js";import"./loading-component-904b414c.js";import"./select-9059fa47.js";import"./input-4abf3aec.js";import"./charge-service-b8eaa220.js";import"./PlusIcon-067510eb.js";import"./create-credit-a1469530.js";import"./credit-service-4f592c83.js";import"./create-expenses-b76beb84.js";import"./expenses-service-6692c7c0.js";import"./table-credit-9bdc27eb.js";import"./delete-credit-c8273bc1.js";import"./modal-b99115cc.js";import"./TrashIcon-e96135ff.js";import"./update-credits-b30372fe.js";import"./PencilIcon-88f2c6e8.js";import"./account-service-5a84a0ff.js";import"./breads-service-7e93a088.js";import"./selecta-service-184ee111.js";import"./table-charge-13bb9287.js";import"./delete-charge-bc63c950.js";import"./update-charge-b8e8c3c6.js";import"./table-expenses-9cbb868c.js";import"./update-expenses-05335c98.js";import"./delete-expenses-810dd1aa.js";import"./raw-materials-service-28d9479f.js";import"./expenses-skeleton-loader-a781745f.js";function ar({auth:r}){const[i,m]=t.useState([]);return t.useEffect(()=>{c({branch_id:r.user.branch_id,seller_id:r.user.id,date:a().format("L")}).then(p=>{m(p)})},[]),o(e,{account:r,children:o(s,{account:r.user,data:i,branch_id:r.user.branch_id})})}export{ar as default};
