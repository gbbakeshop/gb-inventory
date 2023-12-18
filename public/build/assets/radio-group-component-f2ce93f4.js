import{r as a,q as d,j as t,d as v,F as u,a as f}from"./app-437e6c0e.js";import{T as p,C as w,a as x,y as c}from"./TruckIcon-34b2237b.js";import{U as k}from"./UserGroupIcon-95f9119f.js";import"./use-flags-370f42e7.js";import"./description-27a61611.js";import"./use-tree-walker-4f1c9e00.js";import"./hidden-957318ab.js";import"./use-controllable-67a20139.js";function g({title:e,titleId:r,...n},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":r},n),e?a.createElement("title",{id:r},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}))}const N=a.forwardRef(g),z=N;function M({title:e,titleId:r,...n},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":r},n),e?a.createElement("title",{id:r},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"}))}const b=a.forwardRef(M),y=b;function H({title:e,titleId:r,...n},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":r},n),e?a.createElement("title",{id:r},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"}))}const C=a.forwardRef(H),A=C;function P({branchid:e}){const{url:r}=d(),n=r.split("/")[4],s=r.split("/")[3],h=[{name:"Analytics",path:"analytics",icon:t(A,{className:"h-6"}),href:route("branches.analytics",[e])},{name:"Expenses",path:"expenses",icon:t(z,{className:"h-6"}),href:route("branches.expenses",[e])},{name:"Raw Materials",path:"raw_materials",icon:t(p,{className:"h-6"}),href:route("branches.raw_materials",[e])},{name:"Production",path:"production",icon:t(w,{className:"h-6"}),href:route("branches.production",[e])},{name:"Selecta",path:"selecta",icon:t(x,{className:"h-6"}),href:route("branches.selecta",[e])},{name:"Accounts",path:"accounts",icon:t(k,{className:"h-6"}),href:route("branches.accounts",[e])},{name:"Attendance",path:"attendance",icon:t(y,{className:"h-6"}),href:route("branches.attendance",[e])}],[l,m]=a.useState(h[0]);return t("div",{className:"w-full ",children:t("div",{className:"mx-auto w-full max-w-md",children:t(c,{value:l,onChange:m,children:t("div",{className:"space-y-2",children:h.map((o,i)=>t(v,{href:o.href,children:t("div",{className:"my-2",children:t(c.Option,{value:o,className:({active:E,checked:j})=>`${o.path==n&&s==e?" ring-red-300":""}
                      ${o.path==n&&s==e?"bg-red-500 text-white":"bg-white"}
                      relative flex cursor-pointer border-2 border-red-300 rounded-lg px-5 py-3 shadow-md focus:outline-none`,children:t(u,{children:f("div",{className:"flex h-full w-full items-center justify-between",children:[t("div",{className:"flex items-center",children:t("div",{className:"text-sm",children:t(c.Label,{as:"p",className:`font-medium  ${o.path==n&&s==e?"text-white":"text-red-500"}`,children:o.name})})}),t("div",{className:`shrink-0 ${o.path==n&&s==e?"text-white":"text-red-500"}`,children:o.icon})]})})},o.name)})},i))})})})})}export{P as default};
