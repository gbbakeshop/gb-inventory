import{r as a,R as E}from"./app-d8b8c24c.js";import{u as w,a as Q,f as ee,p as re,s as D,l as I,S as me,D as W,y as te,j as x,b as ne,c as pe,o as C,t as Y,X as le}from"./use-flags-b545cc66.js";import{c as he,d as F,C as ie}from"./open-closed-6fc61065.js";function be(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}function z(r,...e){r&&e.length>0&&r.classList.add(...e)}function G(r,...e){r&&e.length>0&&r.classList.remove(...e)}function ge(r,e){let t=Q();if(!r)return t.dispose;let{transitionDuration:i,transitionDelay:v}=getComputedStyle(r),[h,m]=[i,v].map(u=>{let[l=0]=u.split(",").filter(Boolean).map(o=>o.includes("ms")?parseFloat(o):parseFloat(o)*1e3).sort((o,b)=>b-o);return l}),d=h+m;if(d!==0){t.group(l=>{l.setTimeout(()=>{e(),l.dispose()},d),l.addEventListener(r,"transitionrun",o=>{o.target===o.currentTarget&&l.dispose()})});let u=t.addEventListener(r,"transitionend",l=>{l.target===l.currentTarget&&(e(),u())})}else e();return t.add(()=>e()),t.dispose}function Ee(r,e,t,i){let v=t?"enter":"leave",h=Q(),m=i!==void 0?be(i):()=>{};v==="enter"&&(r.removeAttribute("hidden"),r.style.display="");let d=w(v,{enter:()=>e.enter,leave:()=>e.leave}),u=w(v,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),l=w(v,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return G(r,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),z(r,...e.base,...d,...l),h.nextFrame(()=>{G(r,...e.base,...d,...l),z(r,...e.base,...d,...u),ge(r,()=>(G(r,...e.base,...d),z(r,...e.base,...e.entered),m()))}),h.dispose}function Te({immediate:r,container:e,direction:t,classes:i,onStart:v,onStop:h}){let m=ee(),d=re(),u=D(t);I(()=>{r&&(u.current="enter")},[r]),I(()=>{let l=Q();d.add(l.dispose);let o=e.current;if(o&&u.current!=="idle"&&m.current)return l.dispose(),v.current(u.current),l.add(Ee(o,i.current,u.current==="enter",()=>{l.dispose(),h.current(u.current)})),l.dispose},[t])}function $(r=""){return r.split(" ").filter(e=>e.trim().length>1)}let U=a.createContext(null);U.displayName="TransitionContext";var $e=(r=>(r.Visible="visible",r.Hidden="hidden",r))($e||{});function Fe(){let r=a.useContext(U);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}function we(){let r=a.useContext(j);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}let j=a.createContext(null);j.displayName="NestingContext";function k(r){return"children"in r?k(r.children):r.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function ae(r,e){let t=D(r),i=a.useRef([]),v=ee(),h=re(),m=C((f,s=x.Hidden)=>{let c=i.current.findIndex(({el:n})=>n===f);c!==-1&&(w(s,{[x.Unmount](){i.current.splice(c,1)},[x.Hidden](){i.current[c].state="hidden"}}),h.microTask(()=>{var n;!k(i)&&v.current&&((n=t.current)==null||n.call(t))}))}),d=C(f=>{let s=i.current.find(({el:c})=>c===f);return s?s.state!=="visible"&&(s.state="visible"):i.current.push({el:f,state:"visible"}),()=>m(f,x.Unmount)}),u=a.useRef([]),l=a.useRef(Promise.resolve()),o=a.useRef({enter:[],leave:[],idle:[]}),b=C((f,s,c)=>{u.current.splice(0),e&&(e.chains.current[s]=e.chains.current[s].filter(([n])=>n!==f)),e==null||e.chains.current[s].push([f,new Promise(n=>{u.current.push(n)})]),e==null||e.chains.current[s].push([f,new Promise(n=>{Promise.all(o.current[s].map(([L,P])=>P)).then(()=>n())})]),s==="enter"?l.current=l.current.then(()=>e==null?void 0:e.wait.current).then(()=>c(s)):c(s)}),g=C((f,s,c)=>{Promise.all(o.current[s].splice(0).map(([n,L])=>L)).then(()=>{var n;(n=u.current.shift())==null||n()}).then(()=>c(s))});return a.useMemo(()=>({children:i,register:d,unregister:m,onStart:b,onStop:g,wait:l,chains:o}),[d,m,i,b,g,o,l])}function Ce(){}let Re=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Z(r){var e;let t={};for(let i of Re)t[i]=(e=r[i])!=null?e:Ce;return t}function Se(r){let e=a.useRef(Z(r));return a.useEffect(()=>{e.current=Z(r)},[r]),e}let xe="div",se=me.RenderStrategy;function Le(r,e){var t,i;let{beforeEnter:v,afterEnter:h,beforeLeave:m,afterLeave:d,enter:u,enterFrom:l,enterTo:o,entered:b,leave:g,leaveFrom:f,leaveTo:s,...c}=r,n=a.useRef(null),L=te(n,e),P=(t=c.unmount)==null||t?x.Unmount:x.Hidden,{show:p,appear:R,initial:X}=Fe(),[S,B]=a.useState(p?"visible":"hidden"),_=we(),{register:O,unregister:H}=_;a.useEffect(()=>O(n),[O,n]),a.useEffect(()=>{if(P===x.Hidden&&n.current){if(p&&S!=="visible"){B("visible");return}return w(S,{hidden:()=>H(n),visible:()=>O(n)})}},[S,n,O,H,p,P]);let V=D({base:$(c.className),enter:$(u),enterFrom:$(l),enterTo:$(o),entered:$(b),leave:$(g),leaveFrom:$(f),leaveTo:$(s)}),A=Se({beforeEnter:v,afterEnter:h,beforeLeave:m,afterLeave:d}),q=ne();a.useEffect(()=>{if(q&&S==="visible"&&n.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[n,S,q]);let ue=X&&!R,J=R&&p&&X,ce=(()=>!q||ue?"idle":p?"enter":"leave")(),N=pe(0),de=C(T=>w(T,{enter:()=>{N.addFlag(F.Opening),A.current.beforeEnter()},leave:()=>{N.addFlag(F.Closing),A.current.beforeLeave()},idle:()=>{}})),fe=C(T=>w(T,{enter:()=>{N.removeFlag(F.Opening),A.current.afterEnter()},leave:()=>{N.removeFlag(F.Closing),A.current.afterLeave()},idle:()=>{}})),M=ae(()=>{B("hidden"),H(n)},_);Te({immediate:J,container:n,classes:V,direction:ce,onStart:D(T=>{M.onStart(n,T,de)}),onStop:D(T=>{M.onStop(n,T,fe),T==="leave"&&!k(M)&&(B("hidden"),H(n))})});let y=c,ve={ref:L};return J?y={...y,className:Y(c.className,...V.current.enter,...V.current.enterFrom)}:(y.className=Y(c.className,(i=n.current)==null?void 0:i.className),y.className===""&&delete y.className),E.createElement(j.Provider,{value:M},E.createElement(he,{value:w(S,{visible:F.Open,hidden:F.Closed})|N.flags},le({ourProps:ve,theirProps:y,defaultTag:xe,features:se,visible:S==="visible",name:"Transition.Child"})))}function Pe(r,e){let{show:t,appear:i=!1,unmount:v=!0,...h}=r,m=a.useRef(null),d=te(m,e);ne();let u=ie();if(t===void 0&&u!==null&&(t=(u&F.Open)===F.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,o]=a.useState(t?"visible":"hidden"),b=ae(()=>{o("hidden")}),[g,f]=a.useState(!0),s=a.useRef([t]);I(()=>{g!==!1&&s.current[s.current.length-1]!==t&&(s.current.push(t),f(!1))},[s,t]);let c=a.useMemo(()=>({show:t,appear:i,initial:g}),[t,i,g]);a.useEffect(()=>{if(t)o("visible");else if(!k(b))o("hidden");else{let p=m.current;if(!p)return;let R=p.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&o("hidden")}},[t,b]);let n={unmount:v},L=C(()=>{var p;g&&f(!1),(p=r.beforeEnter)==null||p.call(r)}),P=C(()=>{var p;g&&f(!1),(p=r.beforeLeave)==null||p.call(r)});return E.createElement(j.Provider,{value:b},E.createElement(U.Provider,{value:c},le({ourProps:{...n,as:a.Fragment,children:E.createElement(oe,{ref:d,...n,...h,beforeEnter:L,beforeLeave:P})},theirProps:{},defaultTag:a.Fragment,features:se,visible:l==="visible",name:"Transition"})))}function ye(r,e){let t=a.useContext(U)!==null,i=ie()!==null;return E.createElement(E.Fragment,null,!t&&i?E.createElement(K,{ref:e,...r}):E.createElement(oe,{ref:e,...r}))}let K=W(Pe),oe=W(Le),Ne=W(ye),Ae=Object.assign(K,{Child:Ne,Root:K});export{Ae as t};