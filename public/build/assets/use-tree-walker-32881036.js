import{r as c}from"./app-13f09cc1.js";import{l as d}from"./use-flags-b92e8478.js";import{e as m}from"./keyboard-ac6e2ca1.js";function b({container:e,accept:r,walk:t,enabled:f=!0}){let o=c.useRef(r),n=c.useRef(t);c.useEffect(()=>{o.current=r,n.current=t},[r,t]),d(()=>{if(!e||!f)return;let u=m(e);if(!u)return;let a=o.current,l=n.current,p=Object.assign(s=>a(s),{acceptNode:a}),i=u.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,p,!1);for(;i.nextNode();)l(i.currentNode)},[e,f,o,n])}export{b as F};