import{r as l,q as m,a as n,j as e,d as o,c as d,k as h,l as p,m as u,F as f}from"./app-2a3e9844.js";import{H as g,S as b}from"./sub-side-navbar-0f152b95.js";import{B as N}from"./BanknotesIcon-d8b3b843.js";import{C as x,T as w}from"./TruckIcon-6d74cbe5.js";import{C as k}from"./ClipboardDocumentCheckIcon-7fd78327.js";import{U as v}from"./UserGroupIcon-77670df4.js";import{C as B}from"./CalendarDaysIcon-ef3bd2fa.js";import{g as C,T as y}from"./toastify-1816dab2.js";import{g as I}from"./recipe-service-fa082078.js";function L({title:t,titleId:a,...r},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}const S=l.forwardRef(L),_=S;function j({subNav:t,account:a}){const{url:r}=m(),s=r.split("/")[2];function i(c){return c==s?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg ":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg  hover:bg-gray-100"}return n("aside",{className:"flex top-0 sticky ",children:[n("div",{className:"flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white  ",children:[e("button",{children:e("img",{className:"w-auto h-6",src:"https://merakiui.com/images/logo.svg",alt:""})}),e(o,{href:route("branch.dashboard"),className:i("dashboard"),children:e(g,{className:"w-6 h-6"})}),a.position!=="Baker"&&a.position!=="Chief Baker"&&a.position!=="Lamesador"&&a.position!=="Supervisor"&&e(o,{href:route("branch.expenses"),className:i("expenses"),children:e(N,{className:"w-6 h-6"})}),e(o,{href:a.position=="Baker"||a.position=="Chief Baker"||a.position=="Lamesador"||a.position=="Supervisor"?route("branch.new.production"):route("branch.bakers.report"),className:i("production"),children:e(x,{className:"w-6 h-6"})}),a.position!=="Baker"&&a.position!=="Chief Baker"&&a.position!=="Lamesador"&&a.position=="Supervisor"&&e(o,{href:route("branch.selecta.stock"),className:i("selecta"),children:e(k,{className:"w-6 h-6"})}),e(o,{href:route("branch.raw_materials"),className:i("raw_materials"),children:e(w,{className:"w-6 h-6"})}),e(o,{href:route("branch.accounts"),className:i("accounts"),children:e(v,{className:"w-6 h-6"})}),e(o,{href:route("branch.attendance"),className:i("attendance"),children:e(B,{className:"w-6 h-6"})}),e(o,{method:"post",className:"p-1.5 text-violet-800 transition-colors duration-200 bg-violet-100 rounded-lg",href:route("logout"),children:e(_,{className:"w-6 h-6"})})]}),t&&e(b,{subNav:t})]})}function U({children:t,account:a}){const r=d();return l.useEffect(()=>{C().then(s=>r(h(s.status))),I().then(s=>{r(p(s==null?void 0:s.status)),r(u(s==null?void 0:s.status))})},[r]),n(f,{children:[e(y,{}),n("div",{className:"flex",children:[e("div",{className:"flex-none ",children:e(j,{account:a.user})}),n("div",{className:"flex-1 p-3",children:[e("h3",{className:"text-2xl font-semibold leading-normal  text-blueGray-700 ",children:a.user.name}),n("div",{className:"text-sm leading-normal mt-0 text-gray-400 font-bold uppercase",children:[e("i",{className:"fas fa-map-marker-alt text-lg text-gray-400"}),a.user.position," - ID #: GB - ",a.user.id]}),t]})]})]})}export{U as B};
