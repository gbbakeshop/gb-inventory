import{W as l,r as c,a,j as s,b as p}from"./app-eb237854.js";import{G as u}from"./GuestLayout-685e88ce.js";import{I as f}from"./InputError-803c2870.js";import{I as w}from"./InputLabel-47658918.js";import{P as h}from"./PrimaryButton-7cabf8b9.js";import{T as b}from"./TextInput-bc79d6a0.js";function I(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=l({password:""});c.useEffect(()=>()=>{n("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{htmlFor:"password",value:"Password"}),s(b,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:d}),s(f,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{I as default};