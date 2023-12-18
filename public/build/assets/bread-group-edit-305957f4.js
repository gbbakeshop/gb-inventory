import{e as I,r,u as k,j as e,F as x,a as l,w as v}from"./app-437e6c0e.js";import{D as _}from"./drawer-42ec8ad2.js";import{a as j,u as q}from"./bread-group-service-c0fcb782.js";import{L as D}from"./loading-component-92634ae4.js";import{P as F}from"./PencilSquareIcon-e69370a4.js";import{C as T}from"./CheckIcon-725b9668.js";import{T as E}from"./TrashIcon-1575e225.js";import{q as i}from"./combobox-b7644b4d.js";import{t as G}from"./transition-298a5609.js";import"./dialog-78626260.js";import"./use-flags-370f42e7.js";import"./hidden-957318ab.js";import"./use-root-containers-94fc8c7e.js";import"./description-27a61611.js";import"./open-closed-aad4ea97.js";import"./use-resolve-button-type-a6947fda.js";import"./use-tree-walker-4f1c9e00.js";import"./use-tracked-pointer-a6e6ec3c.js";import"./use-controllable-67a20139.js";function ae({data:o}){const d=I(),[s,c]=r.useState([]),[b,N]=r.useState(!1),[w,m]=r.useState(!1);r.useRef();const[n,u]=r.useState(""),{breads:f}=k(t=>t.controls),[y,p]=r.useState(!1),[S,h]=r.useState(0);function C(t){N(!0),h(t),j(t).then(a=>{h(!1),d(v(a.data.original.status))})}const g=n===""?f:f.filter(t=>t.name.toLowerCase().includes(n.toLowerCase()));function B(t){t.preventDefault(),m(!0),q(s,o[0]).then(a=>{c([]),m(!1),d(v(a.data.original.status))})}return e(x,{children:e(_,{title:"Edit Bread",open:y,setOpen:p,button:e("button",{onClick:()=>p(!0),children:e(F,{className:"-ml-0.5 mr-1.5 h-6 w-6 text-violet-500","aria-hidden":"true"})}),children:l("form",{name:"form",onSubmit:B,className:"flex flex-col h-full w-full",children:[e("div",{className:"flex-none",children:e(i,{value:s,onChange:c,multiple:!0,children:l("div",{className:"relative mt-1",children:[l("div",{className:"relative w-full cursor-default rounded-lg text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 sm:text-sm",children:[e(i.Input,{placeholder:"Search bread",className:"w-full h-full border rounded-md border-red-500 py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0",onChange:t=>u(t.target.value)}),e("div",{className:"flex flex-wrap",children:s.length>0&&s.map(t=>e("div",{className:"m-1 p-2 bg-red-500 rounded-md text-white",children:t.name}))})]}),e(G,{as:r.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>u(""),children:e(i.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:g.length===0&&n!==""?e("div",{className:"relative cursor-default select-none px-4 py-2 text-gray-700",children:"Nothing found."}):g.map(t=>e(i.Option,{className:({active:a})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${a?"bg-red-500 text-white":"text-gray-900"}`,value:t,children:({selected:a,active:L})=>l(x,{children:[e("span",{className:`block truncate ${a?"font-medium":"font-normal"}`,children:t.name}),a?e("span",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${L?"text-white":"text-red-500"}`,children:e(T,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},t.id))})})]})})}),e("div",{className:"flex-1",children:e("ul",{role:"list",className:"divide-y divide-gray-100",children:o.map((t,a)=>l("li",{className:"flex justify-between gap-x-6 py-3",children:[e("div",{className:"flex min-w-0 gap-x-4",children:l("div",{className:"min-w-0 flex-auto",children:[e("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:t.bread.name}),l("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:["Price: ",t.bread.price]})]})}),l("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:[e("p",{className:"text-sm leading-6 text-gray-900",children:t.group_name}),e("div",{className:"mt-1 flex items-center gap-x-1.5",children:b&&S==t.id?e("div",{className:"text-sm leading-5 text-red-500",children:"Loading..."}):e("button",{onClick:()=>C(t.id),className:"text-lg leading-5 text-red-500",children:e(E,{className:"h-4"})})})]})]},a))})}),s.length!==0&&e("div",{className:"flex-none",children:w?e(D,{}):e("button",{type:"submit",className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})})]})})})}export{ae as default};