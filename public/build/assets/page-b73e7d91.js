import{r as p,u as e,h as n,a as c,j as o}from"./app-91a8600d.js";import{A as d}from"./administrator-layout-6e904c81.js";import u from"./disclosure-7e6ab380.js";import f from"./branch-breadcrumbs-component-86b5b628.js";import l from"./expenses-data-card-98e3d58c.js";import{g as h}from"./dashboard-service-485d4399.js";import"./side-navbar-7efe8492.js";import"./disclosure-6580f6e8.js";import"./use-flags-22d67c14.js";import"./keyboard-35cbc660.js";import"./open-closed-c138c28b.js";import"./use-resolve-button-type-32680555.js";import"./use-tracked-pointer-d6fec761.js";import"./use-outside-click-9eac479e.js";import"./use-tree-walker-278dcc66.js";import"./use-owner-e5cc948f.js";import"./use-text-value-b5f69a72.js";import"./transition-1d397e7e.js";import"./sub-side-navbar-34bf1587.js";import"./BuildingStorefrontIcon-c3e9c2eb.js";import"./UserGroupIcon-07655867.js";import"./toastify-fac7ca44.js";import"./recipe-service-d3ed3298.js";import"./radio-group-component-15eff44b.js";import"./BanknotesIcon-c2d80aed.js";import"./TruckIcon-02a002be.js";import"./ClipboardDocumentCheckIcon-b9dcf6a9.js";import"./CalendarDaysIcon-c0ae984d.js";import"./radio-group-dc35f457.js";import"./description-3d7d9023.js";import"./hidden-ed81d2fe.js";import"./use-controllable-06eb761f.js";import"./HomeModernIcon-1dbc1e1c.js";import"./ChevronDoubleRightIcon-1abd804c.js";import"./create-charge-40b0407a.js";import"./drawer-5cd4dc65.js";import"./dialog-8a3dcfe6.js";import"./use-root-containers-83d53d68.js";import"./loading-component-3ce56bee.js";import"./select-4529103f.js";import"./input-405b0380.js";import"./charge-service-b8eaa220.js";import"./PlusIcon-2fe05b2b.js";import"./create-credit-2d850584.js";import"./credit-service-4f592c83.js";import"./create-expenses-e3d7c0c7.js";import"./expenses-service-6692c7c0.js";import"./table-credit-d989cd98.js";import"./delete-credit-e54bda3c.js";import"./modal-d23340f7.js";import"./TrashIcon-440e0f1f.js";import"./update-credits-b10e1ed1.js";import"./PencilIcon-c8f23ab1.js";import"./account-service-1e359308.js";import"./breads-service-a312399e.js";import"./selecta-service-c13eca9b.js";import"./table-charge-1b7f06d4.js";import"./delete-charge-73310ecd.js";import"./update-charge-c9de8663.js";import"./table-expenses-235464fb.js";import"./update-expenses-52a47bf9.js";import"./delete-expenses-1c513b7f.js";import"./raw-materials-service-ff1634c0.js";function wr({auth:r}){const[s,a]=p.useState([]),i=window.location.pathname.split("/")[3],{meridiem:m}=e(t=>t.app);return p.useEffect(()=>{h({branch_id:i,seller_id:r.user.id,date:n().format("L"),meridiem:m}).then(t=>{a(t)})},[m]),c(d,{auth:r,subNav:o(u,{}),children:[o(f,{}),o(l,{branch_id:i,account:r.user,data:s})]})}export{wr as default};
