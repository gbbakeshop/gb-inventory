import{r as l,c as N,j as e,F as _,a as t,p as g,h as v}from"./app-fba1d0c2.js";import{I as k}from"./input-9ccd4c8d.js";import{D}from"./drawer-e448d89d.js";import{L as C}from"./loading-component-a64795de.js";import{f as T}from"./bread-record-service-30515ead.js";import{P as I}from"./PencilIcon-7fc353e4.js";import"./dialog-240c9526.js";import"./use-flags-6940bf9f.js";import"./keyboard-eb175f2f.js";import"./hidden-35cd6dcd.js";import"./use-root-containers-15b6ecb3.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./description-40b3ab7d.js";import"./open-closed-759ce2e2.js";import"./transition-95cbd138.js";function G({data:n,account:m}){const[f,d]=l.useState(!1),i=l.useRef(),p=N(),[b,h]=l.useState(!1),[u,w]=l.useState(0);function x(s){s.preventDefault();const r=new FormData(i.current);d(!0),p(g({status:"loading",message:"Loading..."}));const c=n.bread_group.map((a,o)=>({...a,bakers_id:m.id,branch_id:m.branch_id,meridiem:v().format("A"),new_production:r.get(`new_production${o}`).replace(/[^0-9.]/g,"")}));T(c).then(a=>{p(g(a.notify)),a.status=="success"&&i.current.reset(),d(!1)}).catch(a=>{d(!1)})}function y(s){const r=new FormData(i.current),c=n.bread_group.map((a,o)=>parseInt(r.get(`new_production${o}`).replace(/[^0-9.]/g,""))).reduce((a,o)=>a+o,0);w(c)}return e(_,{children:e(D,{title:"Create New Production",open:b,setOpen:h,button:e("span",{className:"hidden sm:block",children:t("button",{onClick:()=>h(!0),type:"button",className:"bg-red-500 inline-flex items-center rounded-md  text-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600",children:[e(I,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-white","aria-hidden":"true"}),"Create New Production"]})}),children:t("form",{ref:i,name:"form",onSubmit:x,className:"flex flex-col h-full w-full",children:[t("div",{className:"flex-none",children:[e("div",{class:"relative overflow-x-auto w-full ",children:e("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 ",children:t("tbody",{children:[t("tr",{class:"bg-white border-b",children:[e("th",{scope:"row",class:" py-4 font-medium text-gray-900 whitespace-nowrap ",children:"Name of Recipe"}),e("td",{class:" py-4",children:n.name})]}),t("tr",{class:"bg-white border-b",children:[e("th",{scope:"row",class:" py-4 font-medium text-gray-900 whitespace-nowrap ",children:"Target Pieces"}),e("td",{class:" py-4",children:n.target})]}),t("tr",{class:"bg-white border-b",children:[e("th",{scope:"row",class:" py-4 font-medium text-gray-900 whitespace-nowrap ",children:"Actual Target"}),e("td",{class:" py-4",children:isNaN(u)?0:u})]})]})})}),n.bread_group.map((s,r)=>e(k,{onChange:c=>y(),value:0,name:`new_production${r}`,title:s.bread.name,placeholder:`Enter bread ${r+1}`,type:"number"},r))]}),e("div",{className:"flex-1",children:e("div",{className:"relative ",children:t("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:t("tr",{children:[e("th",{scope:"col",className:"px-2 py-3",children:"Raw Materials"}),e("th",{scope:"col",className:"px-2 py-3",children:"Deduction"}),e("th",{scope:"col",className:"px-2 py-3",children:"Current Remaining"})]})}),e("tbody",{children:n.raw_materials_group.map((s,r)=>t("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e("th",{scope:"row",className:"px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:s.raw_materials.name}),t("td",{className:"px-2 py-4",children:[s.grams,"mg"]}),e("td",{className:"px-2 py-4",children:"Laptop"}),e("td",{className:"px-2 py-4",children:"$2999"})]},r))})]})})}),e("div",{className:"flex-none",children:f?e(C,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{G as default};