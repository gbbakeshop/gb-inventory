import{r as l,u as n,c as o,a1 as x,a as t,j as e}from"./app-7410adb6.js";import d from"./selecta-create-form-53b7b7da.js";import{M as h,B as p,a as f,C as g,b as u}from"./MapPinIcon-565fbe0f.js";import"./input-ead4f430.js";import"./drawer-32a72dc2.js";import"./dialog-f79f2bdd.js";import"./use-flags-bb5e2bec.js";import"./keyboard-56d1c24b.js";import"./hidden-848a9c96.js";import"./use-root-containers-3976f652.js";import"./use-outside-click-ede8e59f.js";import"./use-owner-6e082ab6.js";import"./description-8349c039.js";import"./open-closed-d88e58b1.js";import"./transition-993263cf.js";import"./loading-component-ecf92f96.js";import"./selecta-service-390570ef.js";import"./PencilIcon-57fd3964.js";function G(){const[r,i]=l.useState(""),{selecta:s}=n(a=>a.controls),m=o(),c=r===""?s:s.filter(a=>a.name.toLowerCase().replace(/\s+/g,"").includes(r.toLowerCase().replace(/\s+/g,"")));return l.useEffect(()=>{m(x(c))},[r]),t("div",{className:"lg:flex lg:items-center lg:justify-between p-3",children:[t("div",{className:"min-w-0 flex-1",children:[e("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",children:"List of Selecta"}),t("div",{className:" flex mx-auto text-gray-600 ",children:[e("button",{type:"submit",className:" right-0 top-0 mx-3",children:e(h,{className:"h-6"})}),e("input",{onChange:a=>i(a.target.value),className:"border-2 h-10  w-full rounded-lg text-sm ",type:"search",name:"search",placeholder:"Search..."})]}),t("div",{className:"mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6",children:[t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(p,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Full-time"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(f,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Remote"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(g,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"$120k – $140k"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(u,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Closing on January 9, 2020"]})]})]}),e("div",{className:"mt-4 flex lg:ml-4 lg:mt-0",children:e(d,{})})]})}export{G as default};