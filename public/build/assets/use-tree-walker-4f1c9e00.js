import{r as o}from"./app-437e6c0e.js";import{l as d,f as E}from"./use-flags-370f42e7.js";function x({container:e,accept:r,walk:t,enabled:f=!0}){let n=o.useRef(r),c=o.useRef(t);o.useEffect(()=>{n.current=r,c.current=t},[r,t]),d(()=>{if(!e||!f)return;let u=E(e);if(!u)return;let a=n.current,i=c.current,s=Object.assign(p=>a(p),{acceptNode:a}),l=u.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;l.nextNode();)i(l.currentNode)},[e,f,n,c])}export{x as F};