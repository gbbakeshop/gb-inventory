import{u as p,c as s,r as m,s as c,a as n,F as d,j as o}from"./app-386f611c.js";import u from"./production-bakers-report-table-3be993ff.js";import{g as f}from"./bread-record-service-30515ead.js";import k from"./production-bakers-report-header-039a3f3c.js";import"./prouction-bakers-report-move-0aa5f3c8.js";import"./drawer-fed6e719.js";import"./dialog-44c0d2eb.js";import"./use-flags-ba628e54.js";import"./keyboard-8764aad6.js";import"./hidden-14672228.js";import"./use-root-containers-a0f2502b.js";import"./use-outside-click-ecb80bbc.js";import"./use-owner-0a37672d.js";import"./description-244ca5eb.js";import"./open-closed-830cefff.js";import"./transition-10c90586.js";import"./input-7dbfb812.js";import"./loading-component-9cac4a6d.js";import"./ChevronDoubleRightIcon-0be24059.js";import"./production-bakers-report-edit-422db72a.js";import"./PencilIcon-504b773e.js";import"./MapPinIcon-bb3f12f1.js";function C({account:t}){const{filteredBakersData:i}=p(r=>r.production),a=s(),e=window.location.pathname.split("/")[3];return m.useEffect(()=>{f({baker_id:t.id,branch_id:e}).then(r=>{a(c(r.status))})},[]),n(d,{children:[o(k,{}),o(u,{data:i,account:t})]})}export{C as default};
