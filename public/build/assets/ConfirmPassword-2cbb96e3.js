import{W as l,r as c,a as r,j as s,b as p}from"./app-2504df6d.js";import{G as u,P as f}from"./PrimaryButton-51eec58f.js";import{I as w}from"./InputError-584acd22.js";import{I as h}from"./InputLabel-1abe1218.js";import{T as b}from"./TextInput-78be80c0.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=l({password:""});c.useEffect(()=>()=>{n("password")},[]);const d=a=>{t(a.target.name,a.target.value)};return r(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),r("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[r("div",{className:"mt-4",children:[s(h,{htmlFor:"password",value:"Password"}),s(b,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:d}),s(w,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(f,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{C as default};