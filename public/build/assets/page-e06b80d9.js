import{u as p,c as m,r as s,e as d,a as c,F as n,j as o}from"./app-8b7f6c54.js";import u from"./production-bread-report-table-a64c7bfb.js";import{a as f}from"./bread-record-service-30515ead.js";import l from"./production-bread-report-header-1dbf64f1.js";import"./production-bread-report-edit-bdef997d.js";import"./drawer-23597b02.js";import"./dialog-6887b94d.js";import"./use-flags-1721155c.js";import"./keyboard-20917a55.js";import"./hidden-15ff79fd.js";import"./use-root-containers-a6380caf.js";import"./use-outside-click-68205d4a.js";import"./use-owner-2c5c579b.js";import"./description-feb4703c.js";import"./open-closed-ecfdd2ea.js";import"./transition-4bf83aee.js";import"./input-fffc9654.js";import"./loading-component-af5f856c.js";import"./PencilIcon-73710f56.js";import"./production-bread-move-sales-report-8b28986d.js";import"./ChevronDoubleRightIcon-d8bc5165.js";import"./MapPinIcon-788ac9d8.js";function C({account:t}){const{filteredBreadData:a}=p(r=>r.production),i=m(),e=window.location.pathname.split("/")[3];return s.useEffect(()=>{f({baker_id:t.id,branch_id:e}).then(r=>{i(d(r.status))})},[]),c(n,{children:[o(l,{}),o(u,{data:a,account:t})]})}export{C as default};
