import{r as n,q as o,u as d,j as e,a as s}from"./app-ded58547.js";import{C as m}from"./ChevronDoubleRightIcon-daf374c9.js";function h({title:r,titleId:t,...a},l){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},a),r?n.createElement("title",{id:t},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"}))}const x=n.forwardRef(h),f=x;function v(){const{url:r}=o(),t=r.split("/")[3],a=r.split("/")[4],{branches:l}=d(c=>c.app),i=l.find(c=>c.id==t);return e("nav",{className:"flex px-5 py-3 my-3  border border-gray-200 rounded-lg bg-red-500 ","aria-label":"Breadcrumb",children:s("ol",{className:"inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse",children:[e("li",{className:"inline-flex items-center",children:s("a",{href:"#",className:"inline-flex items-center text-sm font-medium text-white hover:text-red-300",children:[e(f,{className:"h-6 mr-2"}),"Administrator"]})}),e("li",{children:s("div",{className:"flex items-center text-white",children:[e(m,{className:"h-6"}),e("a",{href:"#",className:"ms-1 text-sm font-medium text-white hover:text-red-300 md:ms-2",children:i==null?void 0:i.branch_name})]})}),e("li",{children:s("div",{className:"flex items-center text-white",children:[e(m,{className:"h-6"}),e("a",{href:"#",className:"ms-1 text-sm font-medium capitalize text-white hover:text-red-300 md:ms-2",children:a.replace(/_/g," ")})]})})]})})}export{v as default};
