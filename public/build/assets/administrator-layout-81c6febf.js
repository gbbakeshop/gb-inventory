import{c as l,r as o,g as n,h as r,i as d,a as t,F as f,j as s}from"./app-326fe7cb.js";import{S as m,T as h}from"./side-navbar-11c87fbb.js";import{g as p,T as x}from"./toastify-3c350ccb.js";import{g as u}from"./recipe-service-2e0ca58d.js";function b({auth:v,children:i,subNav:c}){const e=l();return o.useEffect(()=>{p().then(a=>e(n(a.status))),u().then(a=>{e(r(a==null?void 0:a.status)),e(d(a==null?void 0:a.status))})},[e]),t(f,{children:[s(x,{}),t("div",{className:"flex",children:[s("div",{className:"flex-none ",children:s(m,{subNav:c})}),s("div",{className:"flex-1 w-screen",children:t("div",{className:"flex flex-col",children:[s("div",{className:"flex-none top-0 sticky",children:s(h,{})}),s("div",{className:"flex-1 w-full",children:s("div",{className:"p-2 overflow-x-auto",children:i})})]})})]})]})}export{b as A};
