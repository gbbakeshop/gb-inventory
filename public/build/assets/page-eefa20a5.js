import{u as p,c as m,r as s,e as d,a as c,F as n,j as o}from"./app-326fe7cb.js";import u from"./production-bread-report-table-8391c7e6.js";import{a as f}from"./bread-record-service-30515ead.js";import l from"./production-bread-report-header-2f0c5cbc.js";import"./moment-fbc5633a.js";import"./production-bread-report-edit-18c9dcee.js";import"./drawer-e49dce0f.js";import"./dialog-c2d7a5e0.js";import"./use-flags-96fb4146.js";import"./keyboard-5e834d6e.js";import"./hidden-ad64290c.js";import"./use-root-containers-5be4d362.js";import"./use-owner-77703a6f.js";import"./description-c1d62b9e.js";import"./open-closed-6013aad3.js";import"./transition-70920480.js";import"./input-a07790a4.js";import"./loading-component-d79c8f4d.js";import"./PencilIcon-da90f55b.js";import"./production-bread-move-sales-report-dd26c4dc.js";import"./ChevronDoubleRightIcon-5532fd3e.js";import"./MapPinIcon-70775d2c.js";function C({account:t}){const{filteredBreadData:a}=p(r=>r.production),i=m(),e=window.location.pathname.split("/")[3];return s.useEffect(()=>{f({baker_id:t.id,branch_id:e}).then(r=>{i(d(r.status))})},[]),c(n,{children:[o(l,{}),o(u,{data:a,account:t})]})}export{C as default};
