import{r as m,u as c,c as n,K as d,a as t,j as e}from"./app-91a8600d.js";import p from"./create-bread-form-4da5c116.js";import x from"./bread-group-create-4f94f157.js";import{M as h,B as f,a as u,C as g,b as N}from"./MapPinIcon-d213451a.js";import"./input-405b0380.js";import"./drawer-5cd4dc65.js";import"./dialog-8a3dcfe6.js";import"./use-flags-22d67c14.js";import"./keyboard-35cbc660.js";import"./hidden-ed81d2fe.js";import"./use-root-containers-83d53d68.js";import"./use-outside-click-9eac479e.js";import"./use-owner-e5cc948f.js";import"./description-3d7d9023.js";import"./open-closed-c138c28b.js";import"./transition-1d397e7e.js";import"./loading-component-3ce56bee.js";import"./breads-service-a312399e.js";import"./PencilIcon-c8f23ab1.js";import"./bread-group-service-c0fcb782.js";import"./PencilSquareIcon-e7cac753.js";import"./combobox-a01f5d7b.js";import"./use-computed-446596a3.js";import"./use-resolve-button-type-32680555.js";import"./use-tree-walker-278dcc66.js";import"./use-tracked-pointer-d6fec761.js";import"./use-controllable-06eb761f.js";import"./CheckIcon-9378a5f6.js";function V(){const[a,i]=m.useState(""),{breads:s,filteredBreads:y}=c(r=>r.controls),l=n(),o=a===""?s:s.filter(r=>r.name.toLowerCase().replace(/\s+/g,"").includes(a.toLowerCase().replace(/\s+/g,"")));return m.useEffect(()=>{l(d(o))},[a]),t("div",{className:"lg:flex lg:items-center lg:justify-between p-3",children:[t("div",{className:"min-w-0 flex-1",children:[e("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",children:"List of Bread"}),t("div",{className:" flex mx-auto text-gray-600 ",children:[e("button",{type:"submit",className:" right-0 top-0 mx-3",children:e(h,{className:"h-6"})}),e("input",{onChange:r=>i(r.target.value),className:"border-2 h-10  w-full rounded-lg text-sm ",type:"search",name:"search",placeholder:"Search..."})]}),t("div",{className:"mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6",children:[t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(f,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Full-time"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(u,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Remote"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(g,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"$120k – $140k"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(N,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Closing on January 9, 2020"]})]})]}),t("div",{className:"mt-4 flex lg:ml-4 lg:mt-0",children:[e("span",{className:"sm:ml-3",children:e(x,{})}),e("span",{className:"sm:ml-3",children:e(p,{})})]})]})}export{V as default};
