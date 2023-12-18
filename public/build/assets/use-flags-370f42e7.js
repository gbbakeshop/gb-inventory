import{r as a,R as b,k as O}from"./app-437e6c0e.js";var L=Object.defineProperty,I=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t,n)=>(I(e,typeof t!="symbol"?t+"":t,n),n);let M=class{constructor(){y(this,"current",this.detect()),y(this,"handoffState","pending"),y(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},v=new M,S=(e,t)=>{v.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function D(e){let t=a.useRef(e);return S(()=>{t.current=e},[e]),t}function R(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function N(){let e=[],t={addEventListener(n,r,o,l){return n.addEventListener(r,o,l),t.add(()=>n.removeEventListener(r,o,l))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return R(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let l=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:l})})},group(n){let r=N();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function ue(){let[e]=a.useState(N);return a.useEffect(()=>()=>e.dispose(),[e]),e}let C=function(e){let t=D(e);return b.useCallback((...n)=>t.current(...n),[t])};function H(){let e=typeof document>"u";return"useSyncExternalStore"in O?(t=>t.useSyncExternalStore)(O)(()=>()=>{},()=>!1,()=>!e):!1}function U(){let e=H(),[t,n]=a.useState(v.isHandoffComplete);return t&&v.isHandoffComplete===!1&&n(!1),a.useEffect(()=>{t!==!0&&n(!0)},[t]),a.useEffect(()=>v.handoff(),[]),e?!1:t}var A;let ie=(A=b.useId)!=null?A:function(){let e=U(),[t,n]=b.useState(e?()=>v.nextId():null);return S(()=>{t===null&&n(v.nextId())},[t]),t!=null?""+t:void 0};function F(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,F),r}function T(e){return v.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var _=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(_||{}),q=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(q||{}),K=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(K||{});function P(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var V=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(V||{});function B(e,t=0){var n;return e===((n=T(e))==null?void 0:n.body)?!1:F(t,{0(){return e.matches(w)},1(){let r=e;for(;r!==null;){if(r.matches(w))return!0;r=r.parentElement}return!1}})}function le(e){let t=T(e);N().nextFrame(()=>{t&&!B(t.activeElement,0)&&W(e)})}var G=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(G||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function W(e){e==null||e.focus({preventScroll:!0})}let X=["textarea","input"].join(",");function Y(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,X))!=null?n:!1}function z(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let u=o.compareDocumentPosition(l);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function se(e,t){return J(P(),t,{relativeTo:e})}function J(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?n?z(e):e:P(e);o.length>0&&u.length>1&&(u=u.filter(p=>!o.includes(p))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},d=0,f=u.length,m;do{if(d>=f||d+f<=0)return 0;let p=c+d;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}m=u[p],m==null||m.focus(s),d+=i}while(m!==l.activeElement);return t&6&&Y(m)&&m.select(),2}let $=Symbol();function ce(e,t=!0){return Object.assign(e,{[$]:t})}function fe(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let n=C(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[$]))?void 0:n}function x(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),Z=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Z||{});function de({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let i=k(t,e);if(l)return g(i,n,r,u);let c=o??0;if(c&2){let{static:s=!1,...d}=i;if(s)return g(d,n,r,u)}if(c&1){let{unmount:s=!0,...d}=i;return F(s?0:1,{0(){return null},1(){return g({...d,hidden:!0,style:{display:"none"}},n,r,u)}})}return g(i,n,r,u)}function g(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...i}=E(e,["unmount","static"]),c=e.ref!==void 0?{[u]:e.ref}:{},s=typeof l=="function"?l(t):l;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let d={};if(t){let f=!1,m=[];for(let[p,h]of Object.entries(t))typeof h=="boolean"&&(f=!0),h===!0&&m.push(p);f&&(d["data-headlessui-state"]=m.join(" "))}if(o===a.Fragment&&Object.keys(j(i)).length>0){if(!a.isValidElement(s)||Array.isArray(s)&&s.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let f=s.props,m=typeof(f==null?void 0:f.className)=="function"?(...h)=>x(f==null?void 0:f.className(...h),i.className):x(f==null?void 0:f.className,i.className),p=m?{className:m}:{};return a.cloneElement(s,Object.assign({},k(s.props,j(E(i,["ref"]))),d,c,ee(s.ref,c.ref),p))}return a.createElement(o,Object.assign({},E(i,["ref"]),o!==a.Fragment&&c,o!==a.Fragment&&d),s)}function ee(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function k(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...l){let u=n[r];for(let i of u){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;i(o,...l)}}});return t}function me(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function j(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function E(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function pe(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&te(n)?!1:r}function te(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var ne=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ne||{});function re(){let e=a.useRef(!1);return S(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function he(e=0){let[t,n]=a.useState(e),r=re(),o=a.useCallback(c=>{r.current&&n(s=>s|c)},[t,r]),l=a.useCallback(c=>!!(t&c),[t]),u=a.useCallback(c=>{r.current&&n(s=>s&~c)},[n,r]),i=a.useCallback(c=>{r.current&&n(s=>s^c)},[n]);return{flags:t,addFlag:o,hasFlag:l,removeFlag:u,toggleFlag:i}}export{me as D,ie as I,_ as M,q as N,J as O,j as R,Q as S,V as T,de as X,se as _,ne as a,N as b,le as c,z as d,ce as e,T as f,re as g,B as h,U as i,Z as j,he as k,S as l,R as m,P as n,C as o,ue as p,v as q,pe as r,D as s,x as t,F as u,W as v,fe as y};
