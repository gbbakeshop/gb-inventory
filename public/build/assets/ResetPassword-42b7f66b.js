import{W as f,r as h,a,j as s,b as v}from"./app-91a8600d.js";import{G as g}from"./GuestLayout-2214884b.js";import{I as m}from"./InputError-4fddd31f.js";import{I as l}from"./InputLabel-046e8357.js";import{P as N}from"./PrimaryButton-6591a4ef.js";import{T as n}from"./TextInput-cb665d3e.js";function j({token:i,email:d}){const{data:o,setData:p,post:c,processing:u,errors:r,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),c(route("password.store"))},children:[a("div",{children:[s(l,{htmlFor:"email",value:"Email"}),s(n,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",onChange:t}),s(m,{message:r.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{htmlFor:"password",value:"Password"}),s(n,{id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:t}),s(m,{message:r.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(n,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t}),s(m,{message:r.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",disabled:u,children:"Reset Password"})})]})]})}export{j as default};
