import{u as p,c as s,r as m,s as c,a as n,F as d,j as o}from"./app-d4abecb6.js";import u from"./production-bakers-report-table-148a71ca.js";import{g as f}from"./bread-record-service-30515ead.js";import k from"./production-bakers-report-header-cdcb6374.js";import"./prouction-bakers-report-move-e47898f4.js";import"./drawer-69045bf9.js";import"./dialog-9311a3d8.js";import"./use-flags-b4b16364.js";import"./keyboard-aa6426b8.js";import"./hidden-a3069862.js";import"./use-root-containers-e0b1d38f.js";import"./use-outside-click-9d8e787d.js";import"./use-owner-eb7327d2.js";import"./description-a3ada370.js";import"./open-closed-2b25fd50.js";import"./transition-5d507f62.js";import"./input-270a4c8d.js";import"./loading-component-df6d0b1b.js";import"./ChevronDoubleRightIcon-b02e6577.js";import"./production-bakers-report-edit-32449084.js";import"./PencilIcon-3021dda1.js";import"./MapPinIcon-b41c3bae.js";function C({account:t}){const{filteredBakersData:i}=p(r=>r.production),a=s(),e=window.location.pathname.split("/")[3];return m.useEffect(()=>{f({baker_id:t.id,branch_id:e}).then(r=>{a(c(r.status))})},[]),n(d,{children:[o(k,{}),o(u,{data:i,account:t})]})}export{C as default};
