import{r as a,j as e,a as m}from"./app-ded58547.js";import l from"./page-ac7db6ca.js";import c from"./page-c0edd65a.js";import{r as i}from"./tabs-0505f35d.js";import"./recipes-stepper-ae2ef938.js";import"./ChevronDoubleRightIcon-daf374c9.js";import"./recipe-details-ac838ad9.js";import"./group-bread-b88fd8c5.js";import"./group-raw-materials-d9f16789.js";import"./use-is-mounted-b1cee01c.js";import"./use-resolve-button-type-64f70eea.js";import"./hidden-390c5988.js";function n(...t){return t.filter(Boolean).join(" ")}function v(){let[t]=a.useState([{id:1,name:"List of Recipe",component:e(c,{})},{id2:2,name:"Create Recipe",component:e(l,{})}]);return e("div",{className:"w-full",children:m(i.Group,{children:[e(i.List,{className:"flex space-x-1 rounded-xl bg-red-500 p-1",children:t.map((r,o)=>e(i,{className:({selected:s})=>n("w-full rounded-lg py-2.5 text-sm font-medium leading-5","ring-white/60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",s?"bg-white text-red-700 shadow":"text-white hover:bg-white/[0.12] hover:text-white"),children:r.name},o))}),e(i.Panels,{className:"mt-2",children:t.map((r,o)=>e(i.Panel,{className:n("rounded-xl bg-white p-3","ring-white/60 ring-offset-2  focus:outline-none focus:ring-2"),children:e("ul",{children:e("li",{className:"relative rounded-md p-3 bg-white",children:e("h3",{className:"text-sm font-medium leading-5",children:r.component})},r.id)})},o))})]})})}export{v as default};
