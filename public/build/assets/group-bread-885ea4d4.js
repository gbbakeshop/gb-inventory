import{c as x,u as h,a as t,j as l,$ as u,_ as b}from"./app-7410adb6.js";import{S as v}from"./select-9a8a851a.js";import{C as N}from"./ChevronDoubleLeftIcon-c2a15084.js";import{C as y}from"./ChevronDoubleRightIcon-3eb59a93.js";function C(){const r=x(),{recipeForm:s,stepperValue:c,breadGroup:d}=h(e=>e.controls);function m(e){const a=e.target.value,n=e.target.selectedIndex,i=e.target.options[n].getAttribute("dataid");r(b({...s,bread_group:a,bread_group_token:i}))}function f(e,a){const n=[];for(let i=0;i<e.length;i++)for(let o=0;o<e[i].length;o++)a.includes(e[i][o].token)&&n.push(e[i][o]);return n}const p=s.bread_group_token??[],g=f(d,p);return t("div",{className:"flex flex-col w-full h-full justify-center items-center mt-5",children:[t("div",{className:"flex-1 w-1/2",children:[l("ul",{role:"list",className:"divide-y divide-gray-100",children:t("li",{className:"flex justify-between gap-x-6 py-5",children:[l("div",{className:"flex min-w-0 gap-x-4",children:t("div",{className:"min-w-0 flex-auto",children:[t("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:[" ",s.name]}),t("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:["Target Pieces: ",s.target]})]})}),t("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:[l("p",{className:"text-sm leading-6 text-gray-900"}),t("p",{className:"mt-1 text-xs leading-5 text-gray-500",children:["Bread Group: ",s.bread_group]}),t("p",{className:"mt-1 text-xs leading-5 text-gray-500",children:["Raw Materials Group:"," ",s.raw_materials_group]})]})]})}),l(v,{value:s.bread_group,onChange:m,title:"Select Bread Group",items:d.map(e=>({id:e[0].token,value:e[0].group_name}))}),l("ul",{className:"max-w-md space-y-1 text-gray-900 list-disc list-inside overflow-auto h-38 ",children:g.map((e,a)=>l("li",{children:e.bread.name},a))})]}),t("div",{className:"w-1/2 flex items-center justify-between",children:[t("button",{onClick:()=>r(u(c-1)),type:"button",className:"flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",children:[l(N,{className:"h-6 mr-3"}),"   BACK PAGE"]}),s.bread_group_token&&t("button",{onClick:()=>r(u(c+1)),type:"button",className:"flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",children:["NEXT PAGE"," ",l(y,{className:"h-6 ml-3"})]})]})]})}export{C as default};