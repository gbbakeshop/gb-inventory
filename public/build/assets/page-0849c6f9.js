import{u as s,c as l,r as c,h as d,f as m,a as n,F as f,j as r}from"./app-fba1d0c2.js";import h from"./sales-report-table-2cac123a.js";import{b as u}from"./bread-record-service-30515ead.js";import S from"./sales-report-table-header-aa96e276.js";import"./MapPinIcon-b6237423.js";function D({account:e}){const{filteredSalesData:o}=s(a=>a.production),i=l(),p=window.location.pathname.split("/")[3],{meridiem:t}=s(a=>a.app);return c.useEffect(()=>{u({seller_id:e.id,branch_id:p,date:d().format("L"),meridiem:t}).then(a=>{i(m(a.status))})},[t]),n(f,{children:[r(S,{}),r(h,{data:o,account:e})]})}export{D as default};