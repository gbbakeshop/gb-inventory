import{r as m,u as c,c as n,B as d,a as t,j as e}from"./app-2504df6d.js";import p from"./create-bread-form-38f5fafc.js";import x from"./bread-group-create-7e25be7e.js";import{M as h,B as f,a as u,C as g,b as N}from"./MapPinIcon-2904a063.js";import"./input-3cf9e8e6.js";import"./drawer-423fda89.js";import"./dialog-b3562fd5.js";import"./use-flags-d2ac3b38.js";import"./keyboard-057a4a8a.js";import"./hidden-7de8d8fd.js";import"./use-root-containers-ce4e1455.js";import"./use-owner-17d62cec.js";import"./description-4618bf7a.js";import"./open-closed-b5309c82.js";import"./transition-25203836.js";import"./loading-component-c05027de.js";import"./breads-service-a156f472.js";import"./PencilIcon-0dfb6198.js";import"./bread-group-service-c0fcb782.js";import"./PencilSquareIcon-cd641b0b.js";import"./combobox-0158ed10.js";import"./use-resolve-button-type-054082b2.js";import"./use-tree-walker-d5fbb5e3.js";import"./use-tracked-pointer-6a8d921e.js";import"./use-controllable-e704b93a.js";import"./CheckIcon-e136bd26.js";function O(){const[a,i]=m.useState(""),{breads:s,filteredBreads:y}=c(r=>r.controls),l=n(),o=a===""?s:s.filter(r=>r.name.toLowerCase().replace(/\s+/g,"").includes(a.toLowerCase().replace(/\s+/g,"")));return m.useEffect(()=>{l(d(o))},[a]),t("div",{className:"lg:flex lg:items-center lg:justify-between p-3",children:[t("div",{className:"min-w-0 flex-1",children:[e("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",children:"List of Bread"}),t("div",{className:" flex mx-auto text-gray-600 ",children:[e("button",{type:"submit",className:" right-0 top-0 mx-3",children:e(h,{className:"h-6"})}),e("input",{onChange:r=>i(r.target.value),className:"border-2 h-10  w-full rounded-lg text-sm ",type:"search",name:"search",placeholder:"Search..."})]}),t("div",{className:"mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6",children:[t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(f,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Full-time"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(u,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Remote"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(g,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"$120k – $140k"]}),t("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(N,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Closing on January 9, 2020"]})]})]}),t("div",{className:"mt-4 flex lg:ml-4 lg:mt-0",children:[e("span",{className:"sm:ml-3",children:e(x,{})}),e("span",{className:"sm:ml-3",children:e(p,{})})]})]})}export{O as default};