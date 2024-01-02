import{c as N,u as _,r as y,a as t,j as a,Y as d,X as u,p as f}from"./app-d4abecb6.js";import{L as k}from"./loading-component-df6d0b1b.js";import{S as j}from"./select-a285e454.js";import{c as C}from"./recipe-service-0b62e009.js";import{C as S}from"./ChevronDoubleLeftIcon-24a30c60.js";import{C as R}from"./ChevronDoubleRightIcon-b02e6577.js";function A(){const l=N(),{recipeForm:s,stepperValue:p,rawMaterialsGroup:c}=_(e=>e.controls),[g,m]=y.useState(!1);function h(e){const o=e.target.value,n=e.target.selectedIndex,i=e.target.options[n].getAttribute("dataid");l(u({...s,raw_materials_group:o,raw_materials_group_token:i}))}function x(e,o){const n=[];for(let i=0;i<e.length;i++)for(let r=0;r<e[i].length;r++)o.includes(e[i][r].token)&&n.push(e[i][r]);return n}const b=(s==null?void 0:s.raw_materials_group_token)??[],w=x(c,b);function v(){m(!0),l(f({status:"loading",message:"Loading..."})),C(s).then(e=>{l(f(e.notify)),e.status=="success"&&(l(d(1)),l(u({}))),m(!1)})}return t("div",{className:"flex flex-col w-full h-full justify-center items-center mt-5",children:[t("div",{className:"flex-1 w-1/2",children:[a("ul",{role:"list",className:"divide-y divide-gray-100",children:t("li",{className:"flex justify-between gap-x-6 py-5",children:[a("div",{className:"flex min-w-0 gap-x-4",children:t("div",{className:"min-w-0 flex-auto",children:[t("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:[" ","Recipe Name: ",s.name]}),t("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:["Target Pieces: ",s.target]})]})}),t("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:[a("p",{className:"text-sm leading-6 text-gray-900"}),t("p",{className:"mt-1 text-xs leading-5 text-gray-500",children:["Bread Group: ",s.bread_group]}),t("p",{className:"mt-1 text-xs leading-5 text-gray-500",children:["Raw Materials Group:"," ",s.raw_materials_group]})]})]})}),a(j,{value:s.raw_materials_group,onChange:h,title:"Select Raw Material Group",items:c.map(e=>({id:e[0].token,value:e[0].group_name}))}),a("ul",{className:"max-w-md space-y-1 text-gray-900 list-disc list-inside overflow-auto h-38 ",children:w.map((e,o)=>a("li",{children:e.raw_materials.name},o))})]}),t("div",{className:"w-1/2 flex items-center justify-between",children:[t("button",{onClick:()=>l(d(p-1)),type:"button",className:"flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",children:[a(S,{className:"h-6 mr-3"})," BACK PAGE"]}),s.raw_materials_group_token&&(g?a("div",{className:"w-28",children:a(k,{})}):t("button",{onClick:v,type:"button",className:"flex  justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",children:["Submit",a(R,{className:"h-6 ml-3"})]}))]})]})}export{A as default};
