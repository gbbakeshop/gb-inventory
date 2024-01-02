import{u as y,r as o,c as u,a,F as g,j as e,h as n,g as N,i as b,E as m,p as v}from"./app-44ab44c4.js";import S from"./branch-selecta-edit-remaining-2aec5ffa.js";import{m as w}from"./selecta-service-16b91e0f.js";import{L as j}from"./loading-component-fd062139.js";import{T as C}from"./TrashIcon-b91ea000.js";import"./modal-9d964e67.js";import"./transition-e90b95e6.js";import"./use-flags-e6f7da6a.js";import"./open-closed-51f532d6.js";import"./dialog-4bcef038.js";import"./keyboard-3645b197.js";import"./hidden-398850c9.js";import"./use-root-containers-6f3c736e.js";import"./use-outside-click-bd39b60f.js";import"./use-owner-05b90f87.js";import"./description-46dd974b.js";import"./input-7478b83a.js";import"./PencilIcon-c4a8b00c.js";function H({account:p}){const{selectedSelecta:c}=y(t=>t.selecta),[h,i]=o.useState(!1),l=u();o.useEffect(()=>{i(!1)},[]);function x(){i(!0),w(c.map(t=>({...t,meridiem:n().format("A"),date:n().format("L"),seller_id:p.id}))).then(t=>{l(N(t.data2)),l(b(t.data.original.status)),i(!1),l(m([])),l(v(t.notify))})}function f(t,r){confirm("Are you sure you want to delete?")&&l(m(t.filter(s=>s.id!==r)))}return a(g,{children:[e("div",{className:"flex w-full justify-end",children:h?e("div",{className:"w-20",children:e(j,{})}):e("button",{onClick:x,className:"px-3 py-2 border hover:bg-red-700 border-red-600 bg-red-500 text-white rounded-lg",children:"CLICK TO SAVE"})}),e("div",{className:"overflow-hidden rounded-lg border border-gray-200  m-1 min-h-[67vh]",children:a("table",{className:"w-full border-collapse bg-white text-left text-sm text-gray-500",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"ID #"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Name of Recipe"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Price"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Beginning"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Remaining"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Sold"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900",children:"Sales"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"}),e("th",{scope:"col",className:"px-6 py-4 font-medium text-gray-900"})]})}),e("tbody",{className:"divide-y divide-gray-100 border-t border-gray-100",children:c.map((t,r)=>{var s,d;return a("tr",{className:"hover:bg-red-100",children:[e("td",{className:"px-6 py-4",children:a("div",{className:"flex",children:[" S-",t.id]})}),e("th",{className:"flex gap-3 px-6 py-4 font-normal text-gray-900",children:e("div",{className:"text-sm",children:e("div",{className:"font-medium text-gray-700",children:(s=t.selecta)==null?void 0:s.name})})}),e("td",{className:"px-6 py-4",children:a("span",{className:"inline-flex items-center gap-1 rounded-full w-14 justify-center text-center bg-green-50 px-2 py-1 text-xs font-semibold text-green-600",children:["₱ ",(d=t.selecta)==null?void 0:d.price]})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex",children:t.quantity})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex",children:t.remaining})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex",children:t.sold})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex",children:t.sales})}),e("td",{className:"px-6 py-4 ",children:e("div",{className:"flex"})}),a("td",{className:"flex px-6 py-4 justify-between",children:[e(S,{data:t}),e("div",{className:" inset-0 flex items-center justify-center",children:e("button",{type:"button",onClick:()=>f(c,t.id),children:e(C,{className:"h-6 text-red-500"})})})]})]},r)})})]})})]})}export{H as default};