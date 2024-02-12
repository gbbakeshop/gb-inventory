import{r,j as o,a as c,d}from"./app-8b7f6c54.js";import{C as m}from"./ClipboardDocumentCheckIcon-6e072bbd.js";function p({title:e,titleId:t,...i},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},i),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z",clipRule:"evenodd"}))}const h=r.forwardRef(p),f=h;function v({title:e,titleId:t,...i},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},i),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"}))}const u=r.forwardRef(v),w=u;function b({title:e,titleId:t,...i},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},i),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}const g=r.forwardRef(b),x=g;function k({title:e,titleId:t,...i},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},i),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))}const C=r.forwardRef(k),B=C;function j({account:e}){const[t]=r.useState(()=>{let n=[{id:1,name:"Bakers Report",component:o("div",{account:e}),href:route("branch.bakers.report"),isActive:"bakers_report",icon:o(B,{className:"h-6 w-6"})}];return(e.position!=="Baker"&&e.position!=="Chief Baker"&&e.position!=="Lamesador"&&e.position=="Supervisor"||e.position=="Cashier")&&(n=[...n,{id:2,name:"Bread Report",component:o("div",{account:e}),href:route("branch.bread.report"),isActive:"bread_report",icon:o(w,{className:"h-6 w-6"})},{id:3,name:"Sales Report",component:o("div",{account:e}),href:route("branch.sales.report"),isActive:"sales_report",icon:o(m,{className:"h-6 w-6"})},{id:4,name:"History Report",component:o("div",{account:e}),href:route("branch.history.report"),isActive:"history_report",icon:o(x,{className:"h-6 w-6"})}]),(e.position==="Baker"||e.position==="Chief Baker"||e.position==="Lamesador"||e.position==="Supervisor")&&(n=[{id:0,name:"Create Beginning",component:o("div",{account:e}),href:route("branch.new.production"),isActive:"create_new_production",icon:o(f,{className:"h-6 w-6"})},...n]),n}),i="inline-flex items-center justify-center p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active  group",a="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300  group",s=window.location.pathname.split("/")[3];return o("div",{className:"w-full",children:o("div",{className:"border-b border-gray-200 ",children:o("ul",{className:"flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ",children:t.map((n,l)=>o("li",{className:"me-2",children:c(d,{href:n.href,className:`${n.isActive==s?i:a}`,children:[o("div",{className:`${n.isActive==s?"w-6 h-6 me-2 text-red-500 group-hover:text-red-500  ":"w-6 h-6 me-2 text-gray-400 group-hover:text-gray-500  "}`,children:n.icon}),n.name]})},l))})})})}export{j as default};
