import{r as o,R as E}from"./app-437e6c0e.js";import{s as S,h as pe,T as he,f as be,u as F,b as W,g as te,p as re,l as K,S as ge,D as X,y as ne,j as C,i as le,k as Ee,o as R,t as Z,X as ie}from"./use-flags-370f42e7.js";import{c as Te,d as L,C as ae}from"./open-closed-aad4ea97.js";function k(e,t,r){let l=S(t);o.useEffect(()=>{function c(v){l.current(v)}return document.addEventListener(e,c,r),()=>document.removeEventListener(e,c,r)},[e,r])}function we(e,t,r){let l=S(t);o.useEffect(()=>{function c(v){l.current(v)}return window.addEventListener(e,c,r),()=>window.removeEventListener(e,c,r)},[e,r])}function Ie(e,t,r=!0){let l=o.useRef(!1);o.useEffect(()=>{requestAnimationFrame(()=>{l.current=r})},[r]);function c(n,d){if(!l.current||n.defaultPrevented)return;let i=d(n);if(i===null||!i.getRootNode().contains(i)||!i.isConnected)return;let u=function s(m){return typeof m=="function"?s(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e);for(let s of u){if(s===null)continue;let m=s instanceof HTMLElement?s:s.current;if(m!=null&&m.contains(i)||n.composed&&n.composedPath().includes(m))return}return!pe(i,he.Loose)&&i.tabIndex!==-1&&n.preventDefault(),t(n,i)}let v=o.useRef(null);k("pointerdown",n=>{var d,i;l.current&&(v.current=((i=(d=n.composedPath)==null?void 0:d.call(n))==null?void 0:i[0])||n.target)},!0),k("mousedown",n=>{var d,i;l.current&&(v.current=((i=(d=n.composedPath)==null?void 0:d.call(n))==null?void 0:i[0])||n.target)},!0),k("click",n=>{v.current&&(c(n,()=>v.current),v.current=null)},!0),k("touchend",n=>c(n,()=>n.target instanceof HTMLElement?n.target:null),!0),we("blur",n=>c(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function qe(...e){return o.useMemo(()=>be(...e),[...e])}function Le(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function z(e,...t){e&&t.length>0&&e.classList.add(...t)}function G(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Fe(e,t){let r=W();if(!e)return r.dispose;let{transitionDuration:l,transitionDelay:c}=getComputedStyle(e),[v,n]=[l,c].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,m)=>m-s);return u}),d=v+n;if(d!==0){r.group(u=>{u.setTimeout(()=>{t(),u.dispose()},d),u.addEventListener(e,"transitionrun",s=>{s.target===s.currentTarget&&u.dispose()})});let i=r.addEventListener(e,"transitionend",u=>{u.target===u.currentTarget&&(t(),i())})}else t();return r.add(()=>t()),r.dispose}function Re(e,t,r,l){let c=r?"enter":"leave",v=W(),n=l!==void 0?Le(l):()=>{};c==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let d=F(c,{enter:()=>t.enter,leave:()=>t.leave}),i=F(c,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),u=F(c,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return G(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),z(e,...t.base,...d,...u),v.nextFrame(()=>{G(e,...t.base,...d,...u),z(e,...t.base,...d,...i),Fe(e,()=>(G(e,...t.base,...d),z(e,...t.base,...t.entered),n()))}),v.dispose}function Pe({immediate:e,container:t,direction:r,classes:l,onStart:c,onStop:v}){let n=te(),d=re(),i=S(r);K(()=>{e&&(i.current="enter")},[e]),K(()=>{let u=W();d.add(u.dispose);let s=t.current;if(s&&i.current!=="idle"&&n.current)return u.dispose(),c.current(i.current),u.add(Re(s,l.current,i.current==="enter",()=>{u.dispose(),v.current(i.current)})),u.dispose},[r])}function w(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let U=o.createContext(null);U.displayName="TransitionContext";var $e=(e=>(e.Visible="visible",e.Hidden="hidden",e))($e||{});function Ce(){let e=o.useContext(U);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Se(){let e=o.useContext(j);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let j=o.createContext(null);j.displayName="NestingContext";function I(e){return"children"in e?I(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function oe(e,t){let r=S(e),l=o.useRef([]),c=te(),v=re(),n=R((h,f=C.Hidden)=>{let p=l.current.findIndex(({el:a})=>a===h);p!==-1&&(F(f,{[C.Unmount](){l.current.splice(p,1)},[C.Hidden](){l.current[p].state="hidden"}}),v.microTask(()=>{var a;!I(l)&&c.current&&((a=r.current)==null||a.call(r))}))}),d=R(h=>{let f=l.current.find(({el:p})=>p===h);return f?f.state!=="visible"&&(f.state="visible"):l.current.push({el:h,state:"visible"}),()=>n(h,C.Unmount)}),i=o.useRef([]),u=o.useRef(Promise.resolve()),s=o.useRef({enter:[],leave:[],idle:[]}),m=R((h,f,p)=>{i.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([a])=>a!==h)),t==null||t.chains.current[f].push([h,new Promise(a=>{i.current.push(a)})]),t==null||t.chains.current[f].push([h,new Promise(a=>{Promise.all(s.current[f].map(([x,y])=>y)).then(()=>a())})]),f==="enter"?u.current=u.current.then(()=>t==null?void 0:t.wait.current).then(()=>p(f)):p(f)}),g=R((h,f,p)=>{Promise.all(s.current[f].splice(0).map(([a,x])=>x)).then(()=>{var a;(a=i.current.shift())==null||a()}).then(()=>p(f))});return o.useMemo(()=>({children:l,register:d,unregister:n,onStart:m,onStop:g,wait:u,chains:s}),[d,n,l,m,g,s,u])}function xe(){}let ye=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ee(e){var t;let r={};for(let l of ye)r[l]=(t=e[l])!=null?t:xe;return r}function Ne(e){let t=o.useRef(ee(e));return o.useEffect(()=>{t.current=ee(e)},[e]),t}let De="div",se=ge.RenderStrategy;function He(e,t){var r,l;let{beforeEnter:c,afterEnter:v,beforeLeave:n,afterLeave:d,enter:i,enterFrom:u,enterTo:s,entered:m,leave:g,leaveFrom:h,leaveTo:f,...p}=e,a=o.useRef(null),x=ne(a,t),y=(r=p.unmount)==null||r?C.Unmount:C.Hidden,{show:b,appear:P,initial:_}=Ce(),[$,q]=o.useState(b?"visible":"hidden"),J=Se(),{register:H,unregister:M}=J;o.useEffect(()=>H(a),[H,a]),o.useEffect(()=>{if(y===C.Hidden&&a.current){if(b&&$!=="visible"){q("visible");return}return F($,{hidden:()=>M(a),visible:()=>H(a)})}},[$,a,H,M,b,y]);let B=S({base:w(p.className),enter:w(i),enterFrom:w(u),enterTo:w(s),entered:w(m),leave:w(g),leaveFrom:w(h),leaveTo:w(f)}),A=Ne({beforeEnter:c,afterEnter:v,beforeLeave:n,afterLeave:d}),V=le();o.useEffect(()=>{if(V&&$==="visible"&&a.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[a,$,V]);let ce=_&&!P,Y=P&&b&&_,de=(()=>!V||ce?"idle":b?"enter":"leave")(),D=Ee(0),fe=R(T=>F(T,{enter:()=>{D.addFlag(L.Opening),A.current.beforeEnter()},leave:()=>{D.addFlag(L.Closing),A.current.beforeLeave()},idle:()=>{}})),ve=R(T=>F(T,{enter:()=>{D.removeFlag(L.Opening),A.current.afterEnter()},leave:()=>{D.removeFlag(L.Closing),A.current.afterLeave()},idle:()=>{}})),O=oe(()=>{q("hidden"),M(a)},J);Pe({immediate:Y,container:a,classes:B,direction:de,onStart:S(T=>{O.onStart(a,T,fe)}),onStop:S(T=>{O.onStop(a,T,ve),T==="leave"&&!I(O)&&(q("hidden"),M(a))})});let N=p,me={ref:x};return Y?N={...N,className:Z(p.className,...B.current.enter,...B.current.enterFrom)}:(N.className=Z(p.className,(l=a.current)==null?void 0:l.className),N.className===""&&delete N.className),E.createElement(j.Provider,{value:O},E.createElement(Te,{value:F($,{visible:L.Open,hidden:L.Closed})|D.flags},ie({ourProps:me,theirProps:N,defaultTag:De,features:se,visible:$==="visible",name:"Transition.Child"})))}function Me(e,t){let{show:r,appear:l=!1,unmount:c=!0,...v}=e,n=o.useRef(null),d=ne(n,t);le();let i=ae();if(r===void 0&&i!==null&&(r=(i&L.Open)===L.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,s]=o.useState(r?"visible":"hidden"),m=oe(()=>{s("hidden")}),[g,h]=o.useState(!0),f=o.useRef([r]);K(()=>{g!==!1&&f.current[f.current.length-1]!==r&&(f.current.push(r),h(!1))},[f,r]);let p=o.useMemo(()=>({show:r,appear:l,initial:g}),[r,l,g]);o.useEffect(()=>{if(r)s("visible");else if(!I(m))s("hidden");else{let b=n.current;if(!b)return;let P=b.getBoundingClientRect();P.x===0&&P.y===0&&P.width===0&&P.height===0&&s("hidden")}},[r,m]);let a={unmount:c},x=R(()=>{var b;g&&h(!1),(b=e.beforeEnter)==null||b.call(e)}),y=R(()=>{var b;g&&h(!1),(b=e.beforeLeave)==null||b.call(e)});return E.createElement(j.Provider,{value:m},E.createElement(U.Provider,{value:p},ie({ourProps:{...a,as:o.Fragment,children:E.createElement(ue,{ref:d,...a,...v,beforeEnter:x,beforeLeave:y})},theirProps:{},defaultTag:o.Fragment,features:se,visible:u==="visible",name:"Transition"})))}function Ae(e,t){let r=o.useContext(U)!==null,l=ae()!==null;return E.createElement(E.Fragment,null,!r&&l?E.createElement(Q,{ref:t,...e}):E.createElement(ue,{ref:t,...e}))}let Q=X(Me),ue=X(He),Oe=X(Ae),Be=Object.assign(Q,{Child:Oe,Root:Q});export{Ie as h,qe as n,we as s,Be as t};