import{r as u,R as p,_ as J}from"./app-91a8600d.js";import{o as $,D as R,y as C,b as de,u as A,p as Be,X as M,f as fe,t as pe,l as ee,a as me,S as ie}from"./use-flags-22d67c14.js";import{O as V,M as P,y as L,N as Ne,I as x,o as He,r as We}from"./keyboard-35cbc660.js";import{c as ue,p as se}from"./hidden-ed81d2fe.js";import{n as _e,s as Y,c as Ye,E as ge,a as je,j as Ve,P as Q,p as Z}from"./use-root-containers-83d53d68.js";import{n as ve}from"./use-owner-e5cc948f.js";import{b as Ue,M as qe}from"./description-3d7d9023.js";import{C as Xe,d as j}from"./open-closed-c138c28b.js";import{h as ze}from"./use-outside-click-9eac479e.js";function te(e,t){let n=u.useRef([]),r=$(e);u.useEffect(()=>{let o=[...n.current];for(let[l,a]of t.entries())if(n.current[l]!==a){let i=r(t,o);return n.current=t,i}},[r,...t])}function he(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ge(){return/Android/gi.test(window.navigator.userAgent)}function tn(){return he()||Ge()}function Je(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function we(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Qe="div";var Ee=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ee||{});function Ze(e,t){let n=u.useRef(null),r=C(n,t),{initialFocus:o,containers:l,features:a=30,...i}=e;de()||(a=1);let s=ve(n);tt({ownerDocument:s},!!(a&16));let c=nt({ownerDocument:s,container:n,initialFocus:o},!!(a&2));rt({ownerDocument:s,container:n,containers:l,previousActiveElement:c},!!(a&8));let m=_e(),k=$(d=>{let w=n.current;w&&(b=>b())(()=>{A(m.current,{[Y.Forwards]:()=>{V(w,P.First,{skipElements:[d.relatedTarget]})},[Y.Backwards]:()=>{V(w,P.Last,{skipElements:[d.relatedTarget]})}})})}),T=Be(),g=u.useRef(!1),q={ref:r,onKeyDown(d){d.key=="Tab"&&(g.current=!0,T.requestAnimationFrame(()=>{g.current=!1}))},onBlur(d){let w=we(l);n.current instanceof HTMLElement&&w.add(n.current);let b=d.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&($e(w,b)||(g.current?V(n.current,A(m.current,{[Y.Forwards]:()=>P.Next,[Y.Backwards]:()=>P.Previous})|P.WrapAround,{relativeTo:d.target}):d.target instanceof HTMLElement&&L(d.target)))}};return p.createElement(p.Fragment,null,!!(a&4)&&p.createElement(ue,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:k,features:se.Focusable}),M({ourProps:q,theirProps:i,defaultTag:Qe,name:"FocusTrap"}),!!(a&4)&&p.createElement(ue,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:k,features:se.Focusable}))}let Ke=R(Ze),O=Object.assign(Ke,{features:Ee}),y=[];Je(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&y[0]!==t.target&&(y.unshift(t.target),y=y.filter(n=>n!=null&&n.isConnected),y.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function et(e=!0){let t=u.useRef(y.slice());return te(([n],[r])=>{r===!0&&n===!1&&pe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=y.slice())},[e,y,t]),$(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function tt({ownerDocument:e},t){let n=et(t);te(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&L(n())},[t]),Ye(()=>{t&&L(n())})}function nt({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),l=fe();return te(()=>{if(!r)return;let a=t.current;a&&pe(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(a.contains(i)){o.current=i;return}n!=null&&n.current?L(n.current):V(a,P.First)===Ne.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function rt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=fe();ge(e==null?void 0:e.defaultView,"focus",a=>{if(!o||!l.current)return;let i=we(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let c=a.target;c&&c instanceof HTMLElement?$e(i,c)?(r.current=c,L(c)):(a.preventDefault(),a.stopPropagation(),L(s)):L(r.current)},!0)}function $e(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let ne=u.createContext(()=>{});ne.displayName="StackContext";var K=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(K||{});function ot(){return u.useContext(ne)}function at({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=ot(),a=$((...i)=>{t==null||t(...i),l(...i)});return ee(()=>{let i=o===void 0||o===!0;return i&&a(0,n,r),()=>{i&&a(1,n,r)}},[a,n,r,o]),p.createElement(ne.Provider,{value:a},e)}function lt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const it=typeof Object.is=="function"?Object.is:lt,{useState:ut,useEffect:st,useLayoutEffect:ct,useDebugValue:dt}=J;function ft(e,t,n){const r=t(),[{inst:o},l]=ut({inst:{value:r,getSnapshot:t}});return ct(()=>{o.value=r,o.getSnapshot=t,z(o)&&l({inst:o})},[e,r,t]),st(()=>(z(o)&&l({inst:o}),e(()=>{z(o)&&l({inst:o})})),[e]),dt(r),r}function z(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!it(n,r)}catch{return!0}}function pt(e,t,n){return t()}const mt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gt=!mt,vt=gt?pt:ft,ht="useSyncExternalStore"in J?(e=>e.useSyncExternalStore)(J):vt;function wt(e){return ht(e.subscribe,e.getSnapshot,e.getSnapshot)}function Et(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let a=t[o].call(n,...l);a&&(n=a,r.forEach(i=>i()))}}}function $t(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,l=e-o;n.style(r,"paddingRight",`${l}px`)}}}function bt(){if(!he())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function o(l){return r.containers.flatMap(a=>a()).some(a=>a.contains(l))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let a=me();a.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>a.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let i=a.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),c=t.querySelector(s);c&&!o(c)&&(l=c)}catch{}},!0),n.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!o(a.target)&&a.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}}function yt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Tt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let S=Et(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:me(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Tt(n)},o=[bt(),$t(),yt()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});S.subscribe(()=>{let e=S.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&S.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&S.dispatch("TEARDOWN",n)}});function St(e,t,n){let r=wt(S),o=e?r.get(e):void 0,l=o?o.count>0:!1;return ee(()=>{if(!(!e||!t))return S.dispatch("PUSH",e,n),()=>S.dispatch("POP",e,n)},[t,e]),l}let G=new Map,F=new Map;function ce(e,t=!0){ee(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var a;if(!r)return;let i=(a=F.get(r))!=null?a:1;if(i===1?F.delete(r):F.set(r,i-1),i!==1)return;let s=G.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,G.delete(r))}let l=(n=F.get(r))!=null?n:0;return F.set(r,l+1),l!==0||(G.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}var Lt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Lt||{}),Dt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Dt||{});let Pt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},U=u.createContext(null);U.displayName="DialogContext";function I(e){let t=u.useContext(U);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,I),n}return t}function Rt(e,t,n=()=>[document.body]){St(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function Ct(e,t){return A(t.type,Pt,e,t)}let Mt="div",kt=ie.RenderStrategy|ie.Static;function Ot(e,t){var n;let r=x(),{id:o=`headlessui-dialog-${r}`,open:l,onClose:a,initialFocus:i,__demoMode:s=!1,...c}=e,[m,k]=u.useState(0),T=Xe();l===void 0&&T!==null&&(l=(T&j.Open)===j.Open);let g=u.useRef(null),q=C(g,t),d=ve(g),w=e.hasOwnProperty("open")||T!==null,b=e.hasOwnProperty("onClose");if(!w&&!b)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!w)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!b)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let v=l?0:1,[B,be]=u.useReducer(Ct,{titleId:null,descriptionId:null,panelRef:u.createRef()}),D=$(()=>a(!1)),re=$(f=>be({type:0,id:f})),N=de()?s?!1:v===0:!1,H=m>1,oe=u.useContext(U)!==null,[ye,Te]=je(),{resolveContainers:X,mainTreeNodeRef:W,MainTreeNode:Se}=Ve({portals:ye,defaultContainers:[(n=B.panelRef.current)!=null?n:g.current]}),Le=H?"parent":"leaf",ae=T!==null?(T&j.Closing)===j.Closing:!1,De=(()=>oe||ae?!1:N)(),Pe=u.useCallback(()=>{var f,E;return(E=Array.from((f=d==null?void 0:d.querySelectorAll("body > *"))!=null?f:[]).find(h=>h.id==="headlessui-portal-root"?!1:h.contains(W.current)&&h instanceof HTMLElement))!=null?E:null},[W]);ce(Pe,De);let Re=(()=>H?!0:N)(),Ce=u.useCallback(()=>{var f,E;return(E=Array.from((f=d==null?void 0:d.querySelectorAll("[data-headlessui-portal]"))!=null?f:[]).find(h=>h.contains(W.current)&&h instanceof HTMLElement))!=null?E:null},[W]);ce(Ce,Re);let Me=(()=>!(!N||H))();ze(X,D,Me);let ke=(()=>!(H||v!==0))();ge(d==null?void 0:d.defaultView,"keydown",f=>{ke&&(f.defaultPrevented||f.key===He.Escape&&(f.preventDefault(),f.stopPropagation(),D()))});let Oe=(()=>!(ae||v!==0||oe))();Rt(d,Oe,X),u.useEffect(()=>{if(v!==0||!g.current)return;let f=new ResizeObserver(E=>{for(let h of E){let _=h.target.getBoundingClientRect();_.x===0&&_.y===0&&_.width===0&&_.height===0&&D()}});return f.observe(g.current),()=>f.disconnect()},[v,g,D]);let[Fe,Ae]=qe(),xe=u.useMemo(()=>[{dialogState:v,close:D,setTitleId:re},B],[v,B,D,re]),le=u.useMemo(()=>({open:v===0}),[v]),Ie={ref:q,id:o,role:"dialog","aria-modal":v===0?!0:void 0,"aria-labelledby":B.titleId,"aria-describedby":Fe};return p.createElement(at,{type:"Dialog",enabled:v===0,element:g,onUpdate:$((f,E)=>{E==="Dialog"&&A(f,{[K.Add]:()=>k(h=>h+1),[K.Remove]:()=>k(h=>h-1)})})},p.createElement(Q,{force:!0},p.createElement(Z,null,p.createElement(U.Provider,{value:xe},p.createElement(Z.Group,{target:g},p.createElement(Q,{force:!1},p.createElement(Ae,{slot:le,name:"Dialog.Description"},p.createElement(O,{initialFocus:i,containers:X,features:N?A(Le,{parent:O.features.RestoreFocus,leaf:O.features.All&~O.features.FocusLock}):O.features.None},p.createElement(Te,null,M({ourProps:Ie,theirProps:c,slot:le,defaultTag:Mt,features:kt,visible:v===0,name:"Dialog"}))))))))),p.createElement(Se,null))}let Ft="div";function At(e,t){let n=x(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=I("Dialog.Overlay"),i=C(t),s=$(m=>{if(m.target===m.currentTarget){if(We(m.currentTarget))return m.preventDefault();m.preventDefault(),m.stopPropagation(),a()}}),c=u.useMemo(()=>({open:l===0}),[l]);return M({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:o,slot:c,defaultTag:Ft,name:"Dialog.Overlay"})}let xt="div";function It(e,t){let n=x(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=I("Dialog.Backdrop"),i=C(t);u.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let s=u.useMemo(()=>({open:l===0}),[l]);return p.createElement(Q,{force:!0},p.createElement(Z,null,M({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:s,defaultTag:xt,name:"Dialog.Backdrop"})))}let Bt="div";function Nt(e,t){let n=x(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=I("Dialog.Panel"),i=C(t,a.panelRef),s=u.useMemo(()=>({open:l===0}),[l]),c=$(m=>{m.stopPropagation()});return M({ourProps:{ref:i,id:r,onClick:c},theirProps:o,slot:s,defaultTag:Bt,name:"Dialog.Panel"})}let Ht="h2";function Wt(e,t){let n=x(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=I("Dialog.Title"),i=C(t);u.useEffect(()=>(a(r),()=>a(null)),[r,a]);let s=u.useMemo(()=>({open:l===0}),[l]);return M({ourProps:{ref:i,id:r},theirProps:o,slot:s,defaultTag:Ht,name:"Dialog.Title"})}let _t=R(Ot),Yt=R(It),jt=R(Nt),Vt=R(At),Ut=R(Wt),nn=Object.assign(_t,{Backdrop:Yt,Panel:jt,Overlay:Vt,Title:Ut,Description:Ue});export{nn as _,te as m,tn as n};
