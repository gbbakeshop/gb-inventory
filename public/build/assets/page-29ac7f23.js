import{u as p,c as m,r as s,e as d,a as c,F as n,j as o}from"./app-5f0ce7e9.js";import u from"./production-bread-report-table-76d1c14f.js";import{a as f}from"./bread-record-service-30515ead.js";import l from"./production-bread-report-header-03d2ffe5.js";import"./production-bread-report-edit-87d7cfe6.js";import"./drawer-89f0a87c.js";import"./dialog-69af8821.js";import"./use-flags-77b5aa33.js";import"./keyboard-ea716521.js";import"./hidden-ade8ec98.js";import"./use-root-containers-bc82b08b.js";import"./use-outside-click-2cb1b6ec.js";import"./use-owner-df390e19.js";import"./description-bd6beec8.js";import"./open-closed-80f1f5bd.js";import"./transition-6b0aa6c1.js";import"./input-4d16f1ad.js";import"./loading-component-362fbef5.js";import"./PencilIcon-f70db1da.js";import"./production-bread-move-sales-report-e7174e82.js";import"./ChevronDoubleRightIcon-f09ed921.js";import"./MapPinIcon-a8d90d65.js";function C({account:t}){const{filteredBreadData:a}=p(r=>r.production),i=m(),e=window.location.pathname.split("/")[3];return s.useEffect(()=>{f({baker_id:t.id,branch_id:e}).then(r=>{i(d(r.status))})},[]),c(n,{children:[o(l,{}),o(u,{data:a,account:t})]})}export{C as default};
