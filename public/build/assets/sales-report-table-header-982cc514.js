import{r as l,u as n,c as d,x,a,j as e}from"./app-2504df6d.js";import{M as o,B as h,a as f,C as u,b as g}from"./MapPinIcon-2904a063.js";function N(){const[s,c]=l.useState(""),{salesData:r}=n(t=>t.production),i=d(),m=s===""?r:r.filter(t=>t.bread.name.toLowerCase().replace(/\s+/g,"").includes(s.toLowerCase().replace(/\s+/g,"")));return l.useEffect(()=>{i(x(m))},[s]),a("div",{className:"lg:flex lg:items-center lg:justify-between p-3",children:[a("div",{className:"min-w-0 flex-1",children:[e("h2",{className:"text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",children:"List of Bread"}),a("div",{className:" flex mx-auto text-gray-600 ",children:[e("button",{type:"submit",className:" right-0 top-0 mx-3",children:e(o,{className:"h-6"})}),e("input",{onChange:t=>c(t.target.value),className:"border-2 h-10  w-full rounded-lg text-sm ",type:"search",name:"search",placeholder:"Search..."})]}),a("div",{className:"mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6",children:[a("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(h,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Full-time"]}),a("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(f,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Remote"]}),a("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(u,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"$120k – $140k"]}),a("div",{className:"mt-2 flex items-center text-sm text-gray-500",children:[e(g,{className:"mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400","aria-hidden":"true"}),"Closing on January 9, 2020"]})]})]}),e("div",{className:"mt-4 flex lg:ml-4 lg:mt-0"})]})}export{N as default};
