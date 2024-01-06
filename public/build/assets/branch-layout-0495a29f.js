import{r as c,q as m,a as i,j as e,d as o,c as d,l as h,m as p,n as u,u as f,F as g}from"./app-56fb4b1a.js";import{H as b,S as x}from"./sub-side-navbar-228b98f3.js";import{B as N}from"./BanknotesIcon-48950f7d.js";import{C as w,T as v}from"./TruckIcon-64f11b00.js";import{C as k}from"./ClipboardDocumentCheckIcon-66debf2e.js";import{U as y}from"./UserGroupIcon-64c643e9.js";import{C as B}from"./CalendarDaysIcon-0063c9f7.js";import{g as C,T as I}from"./toastify-51f3fee3.js";import{g as S}from"./recipe-service-98a5344c.js";function _({title:n,titleId:a,...t},l){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":a},t),n?c.createElement("title",{id:a},n):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}const L=c.forwardRef(_),j=L;function E({subNav:n,account:a}){const{url:t}=m(),l=t.split("/")[2];function r(s){return s==l?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg ":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg  hover:bg-gray-100"}return i("aside",{className:"flex top-0 sticky ",children:[i("div",{className:"flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white  ",children:[e("button",{children:e("img",{className:"w-auto h-6",src:"https://merakiui.com/images/logo.svg",alt:""})}),e(o,{href:route("branch.dashboard"),className:r("dashboard"),children:e(b,{className:"w-6 h-6"})}),a.position=="Supervisor"||a.position=="Cashier"?e(o,{href:route("branch.expenses"),className:r("expenses"),children:e(N,{className:"w-6 h-6"})}):null,e(o,{href:a.position=="Baker"||a.position=="Chief Baker"||a.position=="Lamesador"||a.position=="Supervisor"?route("branch.new.production"):route("branch.bakers.report"),className:r("production"),children:e(w,{className:"w-6 h-6"})}),a.position!=="Baker"&&a.position!=="Chief Baker"&&a.position!=="Lamesador"&&a.position=="Supervisor"&&e(o,{href:route("branch.selecta.stock"),className:r("selecta"),children:e(k,{className:"w-6 h-6"})}),e(o,{href:route("branch.raw_materials"),className:r("raw_materials"),children:e(v,{className:"w-6 h-6"})}),a.position=="Supervisor"&&e(o,{href:route("branch.accounts"),className:r("accounts"),children:e(y,{className:"w-6 h-6"})}),e(o,{href:route("branch.attendance"),className:r("attendance"),children:e(B,{className:"w-6 h-6"})}),e(o,{method:"post",className:"p-1.5 text-violet-800 transition-colors duration-200 bg-violet-100 rounded-lg",href:route("logout"),children:e(j,{className:"w-6 h-6"})})]}),n&&e(x,{subNav:n})]})}function q({children:n,account:a}){const t=d();c.useEffect(()=>{C().then(s=>t(h(s.status))),S().then(s=>{t(p(s==null?void 0:s.status)),t(u(s==null?void 0:s.status))})},[t]);const{branches:l}=f(s=>s.app),r=l.find(s=>s.id==a.user.branch_id);return i(g,{children:[e(I,{}),i("div",{className:"flex",children:[e("div",{className:"flex-none ",children:e(E,{account:a.user})}),i("div",{className:"flex-1 p-3",children:[e("h3",{className:"text-2xl font-semibold leading-normal  text-blueGray-700 ",children:a.user.name}),i("div",{className:"text-sm leading-normal mt-0 text-gray-400 font-bold uppercase",children:[e("i",{className:"fas fa-map-marker-alt text-lg text-gray-400"}),a.user.position," - ID #: GB - ",a.user.id]}),i("div",{className:"text-sm leading-normal mt-0 text-gray-400 font-bold uppercase",children:[e("i",{className:"fas fa-map-marker-alt text-lg text-gray-400"}),"Branch : ",r==null?void 0:r.branch_name]}),n]})]})]})}export{q as B};
