import{r as p,u as e,h as n,a as c,j as o}from"./app-d4abecb6.js";import{A as d}from"./administrator-layout-738d625b.js";import u from"./disclosure-acabd7ef.js";import f from"./branch-breadcrumbs-component-e1703b8b.js";import l from"./expenses-data-card-b057f47a.js";import{g as h}from"./dashboard-service-485d4399.js";import"./side-navbar-d1c80171.js";import"./disclosure-20793dd9.js";import"./use-flags-b4b16364.js";import"./keyboard-aa6426b8.js";import"./open-closed-2b25fd50.js";import"./use-resolve-button-type-4b5f1806.js";import"./use-tracked-pointer-791c37cd.js";import"./use-outside-click-9d8e787d.js";import"./use-tree-walker-02c3dc80.js";import"./use-owner-eb7327d2.js";import"./use-text-value-20061e28.js";import"./transition-5d507f62.js";import"./sub-side-navbar-747b0c74.js";import"./BuildingStorefrontIcon-270866d9.js";import"./UserGroupIcon-c108612b.js";import"./toastify-c31068d5.js";import"./recipe-service-0b62e009.js";import"./radio-group-component-6cee2ca9.js";import"./BanknotesIcon-c2132c44.js";import"./TruckIcon-bdd898db.js";import"./ClipboardDocumentCheckIcon-86bb11c1.js";import"./CalendarDaysIcon-8f784c35.js";import"./radio-group-8c5bd92f.js";import"./description-a3ada370.js";import"./hidden-a3069862.js";import"./use-controllable-7acbbc65.js";import"./HomeModernIcon-7c85dd20.js";import"./ChevronDoubleRightIcon-b02e6577.js";import"./create-charge-8a515f20.js";import"./drawer-69045bf9.js";import"./dialog-9311a3d8.js";import"./use-root-containers-e0b1d38f.js";import"./loading-component-df6d0b1b.js";import"./select-a285e454.js";import"./input-270a4c8d.js";import"./charge-service-b8eaa220.js";import"./PlusIcon-ea4f68e3.js";import"./create-credit-40d359da.js";import"./credit-service-4f592c83.js";import"./create-expenses-87f8bda7.js";import"./expenses-service-6692c7c0.js";import"./table-credit-468a07cf.js";import"./delete-credit-e403bf66.js";import"./modal-c4424380.js";import"./TrashIcon-a5d8fa6a.js";import"./update-credits-7100a460.js";import"./PencilIcon-3021dda1.js";import"./account-service-5a84a0ff.js";import"./breads-service-56f45acb.js";import"./selecta-service-a3f72678.js";import"./table-charge-1460d0bd.js";import"./delete-charge-d9013f69.js";import"./update-charge-accdaa79.js";import"./table-expenses-19307b4f.js";import"./update-expenses-eb1fee6e.js";import"./delete-expenses-5947290f.js";import"./raw-materials-service-5e54adc4.js";function wr({auth:r}){const[s,a]=p.useState([]),i=window.location.pathname.split("/")[3],{meridiem:m}=e(t=>t.app);return p.useEffect(()=>{h({branch_id:i,seller_id:r.user.id,date:n().format("L"),meridiem:m}).then(t=>{a(t)})},[m]),c(d,{auth:r,subNav:o(u,{}),children:[o(f,{}),o(l,{branch_id:i,account:r.user,data:s})]})}export{wr as default};
