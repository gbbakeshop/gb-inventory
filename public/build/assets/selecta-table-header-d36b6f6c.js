import{r as l,u as n,c as o,$ as d,a as t,j as e}from"./app-fba1d0c2.js";import x from"./selecta-create-form-5e0cf728.js";import{M as h,B as p,a as f,C as u,b as g}from"./MapPinIcon-b6237423.js";import"./input-9ccd4c8d.js";import"./drawer-e448d89d.js";import"./dialog-240c9526.js";import"./use-flags-6940bf9f.js";import"./keyboard-eb175f2f.js";import"./hidden-35cd6dcd.js";import"./use-root-containers-15b6ecb3.js";import"./use-outside-click-fe4969d0.js";import"./use-owner-5ac49dc7.js";import"./description-40b3ab7d.js";import"./open-closed-759ce2e2.js";import"./transition-95cbd138.js";import"./loading-component-a64795de.js";import"./selecta-service-a4ce61a0.js";import"./PencilIcon-7fc353e4.js";function q(){const[r,m]=l.useState(""),{selecta:s}=n(a=>a.controls),i=o(),c=r===""?s:s.filter(a=>a.name.toLowerCase().replace(/\s+/g,"").includes(r.toLowerCase().replace(/\s+/g,"")));return l.useEffect(()=>{i(d(c))},[r]),t("div",{className:"lg:flex lg:items-center lg:justify-between p-3",children:[t("div",{className:"min-w-0 flex-1",children:[e("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",children:"Group of Bread"}),t("div",{className:" flex mx-auto text-gray-600 ",children:[e("button",{type:"submit",className:" right-0 top-0 mx-3",children:e(h,{className:"h-6"})}),e("input",{onChange:a=>m(a.target.value),className:"border-2 h-10  w-full rounded-lg text-sm ",type:"search",name:"search",placeholder:"Search..."})]}),t("div",{className:"mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6",children:[t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(p,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Full-time"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(f,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Remote"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(u,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"$120k – $140k"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(g,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Closing on January 9, 2020"]})]})]}),e("div",{className:"mt-4 flex lg:ml-4 lg:mt-0",children:e(x,{})})]})}export{q as default};