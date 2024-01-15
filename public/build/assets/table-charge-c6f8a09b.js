import{c as x,u as i,r as b,h as m,w as f,j as e,a}from"./app-5f0ce7e9.js";import{g as N}from"./charge-service-b8eaa220.js";import g from"./delete-charge-7d524c05.js";import u from"./update-charge-0ebc714e.js";import"./modal-7380c9c3.js";import"./transition-6b0aa6c1.js";import"./use-flags-77b5aa33.js";import"./open-closed-80f1f5bd.js";import"./dialog-69af8821.js";import"./keyboard-ea716521.js";import"./hidden-ade8ec98.js";import"./use-root-containers-bc82b08b.js";import"./use-outside-click-2cb1b6ec.js";import"./use-owner-df390e19.js";import"./description-bd6beec8.js";import"./loading-component-362fbef5.js";import"./TrashIcon-848849b3.js";import"./drawer-89f0a87c.js";import"./select-7691f917.js";import"./input-4d16f1ad.js";import"./PencilIcon-f70db1da.js";function q({account:r,branch_id:s,users:d,breads:n,selecta:o}){const c=x(),{charge:p}=i(t=>t.expenses),{meridiem:l}=i(t=>t.app);return b.useEffect(()=>{N({branch_id:s,date:m().format("L"),meridiem:l,seller_id:r.id}).then(t=>{c(f(t.status))})},[l]),e("div",{className:"flex flex-wrap",children:e("div",{className:"w-full max-w-full mx-auto",children:e("div",{className:"relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white my-5",children:a("div",{className:"relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30",children:[e("div",{className:"px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent",children:e("h3",{className:"flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark",children:e("span",{className:"mr-3 font-semibold text-dark",children:"Charge Of The Day"})})}),e("div",{className:"flex-auto block py-8 pt-6 px-9",children:e("div",{className:"overflow-x-auto",children:a("table",{className:"w-full my-0 align-middle text-dark border-neutral-200",children:[e("thead",{className:"align-bottom",children:a("tr",{className:"font-semibold text-[0.95rem] text-secondary-dark",children:[e("th",{className:"pb-3 text-start",children:"ID #"}),e("th",{className:"pb-3 text-start min-w-[100px]",children:"NAME OF EMPLOYEE"}),e("th",{className:"pb-3 text-start min-w-[100px]",children:"AMOUNT"}),e("th",{className:"pb-3 text-start min-w-[100px]",children:"DESCRIPTION"}),e("th",{className:"pb-3 text-start min-w-[100px]",children:"STATUS"}),e("th",{className:"pb-3 text-start min-w-[100px]",children:"DATE"})]})}),e("tbody",{children:p.map((t,h)=>a("tr",{className:"border-b border-dashed last:border-b-0",children:[e("td",{className:"pr-0 text-start",children:a("span",{className:"font-semibold text-light-inverse text-md/normal",children:["CRDT-",t.id]})}),e("td",{className:"pr-0 p-2 text-start",children:e("span",{className:"font-semibold text-light-inverse text-md/normal",children:t.user.name})}),e("td",{className:"pr-0 p-2 text-start",children:e("span",{className:"text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg",children:t.amount})}),e("td",{className:"pr-0 p-2 text-start",children:e("span",{className:"font-semibold text-light-inverse text-md/normal",children:t.discription})}),e("td",{className:"pr-0 p-2 text-start",children:e("span",{className:"font-semibold text-light-inverse text-md/normal",children:t.status})}),e("td",{className:"pr-0 p-2 text-start",children:e("span",{className:"font-semibold text-light-inverse text-md/normal",children:m(t.created_at).format("LLL")})}),a("td",{className:"flex gap-3 pr-0 p-2 text-start",children:[e(g,{branch_id:s,id:t.id,account:r}),e(u,{selecta:o,breads:n,users:d,branch_id:s,data:t,account:r})]})]},h))})]})})})]})})})})}export{q as default};