import{r as a,u as y,c as S,j as e,a as s,F as C,o as n}from"./app-91a8600d.js";import{D as B}from"./drawer-5cd4dc65.js";import{L}from"./loading-component-3ce56bee.js";import{c as G}from"./bread-group-service-c0fcb782.js";import{I}from"./input-405b0380.js";import{P as k}from"./PencilSquareIcon-e7cac753.js";import{q as i}from"./combobox-a01f5d7b.js";import{C as F}from"./CheckIcon-9378a5f6.js";import{t as q}from"./transition-1d397e7e.js";import"./dialog-8a3dcfe6.js";import"./use-flags-22d67c14.js";import"./keyboard-35cbc660.js";import"./hidden-ed81d2fe.js";import"./use-root-containers-83d53d68.js";import"./use-outside-click-9eac479e.js";import"./use-owner-e5cc948f.js";import"./description-3d7d9023.js";import"./open-closed-c138c28b.js";import"./use-computed-446596a3.js";import"./use-resolve-button-type-32680555.js";import"./use-tree-walker-278dcc66.js";import"./use-tracked-pointer-d6fec761.js";import"./use-controllable-06eb761f.js";function te(){const[o,u]=a.useState([]),[d,m]=a.useState(""),[g,c]=a.useState(!1),{breads:p}=y(t=>t.controls),[x,b]=a.useState(""),l=S(),[v,f]=a.useState(!1);function N(t){t.preventDefault(),l(n({status:"loading",message:"Loading..."})),o.length!==0?(c(!0),G(o,x).then(r=>{r.status=="success"?(l(n(r.notify)),u([]),m("")):l(n(r.notify)),c(!1)}).catch(r=>{l(n({status:"error",message:"Loading..."})),c(!1)})):alert("Please Select Bread")}const h=d===""?p:p.filter(t=>t.name.toLowerCase().includes(d.toLowerCase()));return e("div",{className:"w-full",children:e(B,{title:"Create Bread Group",open:v,setOpen:f,button:e("span",{className:"hidden sm:block",children:s("button",{onClick:()=>f(!0),type:"button",className:"bg-white inline-flex items-center rounded-md  text-red-500 border-red-500 border px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-red-500 hover:bg-gray-100",children:[e(k,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-red-500","aria-hidden":"true"}),"Create Group of Bread"]})}),children:s("form",{onSubmit:N,className:"flex flex-col h-full w-full",children:[s("div",{className:"flex-1",children:[e(I,{onChange:t=>b(t.target.value),value:"",name:"bread_name",title:"Group Name",placeholder:"Enter of Group",type:"text"}),e(i,{value:o,onChange:u,multiple:!0,children:s("div",{className:"relative mt-1",children:[s("div",{className:"relative w-full cursor-default rounded-lg text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 sm:text-sm",children:[e(i.Input,{placeholder:"Search bread",className:"w-full h-full border rounded-md border-red-500 py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0",onChange:t=>m(t.target.value)}),e("div",{className:"flex flex-wrap",children:o.length>0&&o.map(t=>e("div",{className:"m-1 p-2 bg-red-500 rounded-md text-white",children:t.name}))})]}),e(q,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>m(""),children:e(i.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:h.length===0&&d!==""?e("div",{className:"relative cursor-default select-none px-4 py-2 text-gray-700",children:"Nothing found."}):h.map(t=>e(i.Option,{className:({active:r})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${r?"bg-red-500 text-white":"text-gray-900"}`,value:t,children:({selected:r,active:w})=>s(C,{children:[e("span",{className:`block truncate ${r?"font-medium":"font-normal"}`,children:t.name}),r?e("span",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${w?"text-white":"text-red-500"}`,children:e(F,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},t.id))})})]})})]}),e("div",{className:"flex-none",children:g?e(L,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{te as default};
