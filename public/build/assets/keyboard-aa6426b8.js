import{R as m}from"./app-d4abecb6.js";import{b as N,d,l as x,u as A,a as F}from"./use-flags-b4b16364.js";var E;let K=(E=m.useId)!=null?E:function(){let e=N(),[t,n]=m.useState(e?()=>d.nextId():null);return x(()=>{t===null&&n(d.nextId())},[t]),t!=null?""+t:void 0};function v(e){return d.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),g=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(g||{}),y=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(y||{});function p(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var L=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(L||{});function I(e,t=0){var n;return e===((n=v(e))==null?void 0:n.body)?!1:A(t,{0(){return e.matches(f)},1(){let r=e;for(;r!==null;){if(r.matches(f))return!0;r=r.parentElement}return!1}})}function G(e){let t=v(e);F().nextFrame(()=>{t&&!I(t.activeElement,0)&&M(e)})}var D=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(D||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let P=["textarea","input"].join(",");function O(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,P))!=null?n:!1}function T(e,t=n=>n){return e.slice().sort((n,r)=>{let i=t(n),a=t(r);if(i===null||a===null)return 0;let o=i.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function C(e,t){return _(p(),t,{relativeTo:e})}function _(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?T(e):e:p(e);i.length>0&&o.length>1&&(o=o.filter(l=>!i.includes(l))),r=r??a.activeElement;let w=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),b=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=t&32?{preventScroll:!0}:{},c=0,s=o.length,u;do{if(c>=s||c+s<=0)return 0;let l=b+c;if(t&16)l=(l+s)%s;else{if(l<0)return 3;if(l>=s)return 1}u=o[l],u==null||u.focus(h),c+=w}while(u!==a.activeElement);return t&6&&O(u)&&u.select(),2}function V(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&U(n)?!1:r}function U(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var R=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(R||{});export{G as D,K as I,S as M,g as N,_ as O,L as T,C as _,T as a,v as e,p as f,I as h,R as o,V as r,M as y};
