import{u as p,c as m,r as s,e as d,a as c,F as n,j as o}from"./app-eb237854.js";import u from"./production-bread-report-table-92ef5107.js";import{a as f}from"./bread-record-service-30515ead.js";import l from"./production-bread-report-header-295618fc.js";import"./production-bread-report-edit-3ea0c3b4.js";import"./drawer-c7f8627d.js";import"./dialog-1fc15b37.js";import"./use-flags-1f69cd58.js";import"./keyboard-f9d3da82.js";import"./hidden-2c9b8996.js";import"./use-root-containers-f2e46cee.js";import"./use-outside-click-a3322ea9.js";import"./use-owner-fefd8ce1.js";import"./description-9b69da41.js";import"./open-closed-f62fba30.js";import"./transition-6275e480.js";import"./input-3a1442a7.js";import"./loading-component-1a997bac.js";import"./PencilIcon-8cee5ffb.js";import"./production-bread-move-sales-report-b91946f5.js";import"./ChevronDoubleRightIcon-9d5bc1e1.js";import"./MapPinIcon-02dd07c0.js";function C({account:t}){const{filteredBreadData:a}=p(r=>r.production),i=m(),e=window.location.pathname.split("/")[3];return s.useEffect(()=>{f({baker_id:t.id,branch_id:e}).then(r=>{i(d(r.status))})},[]),c(n,{children:[o(l,{}),o(u,{data:a,account:t})]})}export{C as default};
