import{r as c,c as v,u as N,j as o,a as f,p as h,l as E}from"./app-fba1d0c2.js";import{D as L}from"./drawer-e448d89d.js";import{L as j}from"./loading-component-a64795de.js";import{S as D}from"./select-adc657c2.js";import{a as G}from"./recipe-service-8f5ddc21.js";import{P as I}from"./PencilSquareIcon-fc03c189.js";import"./dialog-240c9526.js";import"./use-flags-6940bf9f.js";import"./keyboard-eb175f2f.js";import"./hidden-35cd6dcd.js";import"./use-root-containers-15b6ecb3.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./description-40b3ab7d.js";import"./open-closed-759ce2e2.js";import"./transition-95cbd138.js";function Q({data:i}){var d;const[s,_]=c.useState({id:i.id,raw_materials:(d=i==null?void 0:i.raw_materials_group[0])==null?void 0:d.group_name,raw_materials_token:i.raw_materials_group_token}),l=v(),[g,m]=c.useState(!1),[w,u]=c.useState(!1),{rawMaterialsGroup:p}=N(e=>e.controls);function x(e){e.preventDefault(),m(!0),G(s).then(t=>{t.status=="success"?(l(h(t.notify)),l(E(t[0].original.status)),m(!1)):(l(h(t.notify)),m(!1))})}function b(e){const t=e.target.value,r=e.target.selectedIndex,a=e.target.options[r].getAttribute("dataid");_({...s,raw_materials:t,raw_materials_token:a})}function S(e,t){const r=[];for(let a=0;a<e.length;a++)for(let n=0;n<e[a].length;n++)t==e[a][n].token&&r.push(e[a][n]);return r}const k=S(p,s.raw_materials_token);return o(L,{title:"Edit Raw Materials Group",button:o("button",{onClick:()=>u(!0),children:o(I,{className:"h-6 text-blue-700"})}),open:w,setOpen:u,children:f("form",{onSubmit:x,name:"form",className:"flex flex-col h-full w-full",children:[f("div",{className:"flex-1",children:[o(D,{value:s==null?void 0:s.raw_materials,onChange:b,title:"Select Bread Group",items:p.map(e=>({id:e[0].token,value:e[0].group_name}))}),o("ul",{className:"max-w-md space-y-1 text-gray-900 list-disc list-inside overflow-auto h-38 ",children:k.map((e,t)=>o("li",{children:e.raw_materials.name},t))})]}),o("div",{className:"flex-none",children:g?o(j,{}):o("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})}export{Q as default};