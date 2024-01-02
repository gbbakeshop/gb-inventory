import{r as u,R as A}from"./app-44ab44c4.js";import{f as te,S as H,D as F,y as L,s as G,o as R,l as B,X as _,u as O,e as re}from"./use-flags-e6f7da6a.js";import{I as K,a as M,N as U,e as ne,o as I,O as S,M as T}from"./keyboard-3645b197.js";import{s as ae}from"./use-resolve-button-type-1a8188bb.js";import{c as J,p as le}from"./hidden-398850c9.js";function se({onFocus:e}){let[t,r]=u.useState(!0),n=te();return t?A.createElement(J,{as:"button",type:"button",features:le.Focusable,onFocus:s=>{s.preventDefault();let a,o=50;function b(){if(o--<=0){a&&cancelAnimationFrame(a);return}if(e()){if(cancelAnimationFrame(a),!n.current)return;r(!1);return}a=requestAnimationFrame(b)}a=requestAnimationFrame(b)}}):null}const Q=u.createContext(null);function ue(){return{groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let s=(r=n.get(t))!=null?r:0;n.set(t,s+1);let a=Array.from(n.keys()).indexOf(t);function o(){let b=n.get(t);b>1?n.set(t,b-1):n.delete(t)}return[a,o]}}}function oe({children:e}){let t=u.useRef(ue());return u.createElement(Q.Provider,{value:t},e)}function V(e){let t=u.useContext(Q);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let r=ie(),[n,s]=t.current.get(e,r);return u.useEffect(()=>s,[]),n}function ie(){var e,t,r;let n=(r=(t=(e=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?r:null;if(!n)return Symbol();let s=[],a=n;for(;a;)s.push(a.index),a=a.return;return"$."+s.join(".")}var ce=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ce||{}),de=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(de||{}),fe=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(fe||{});let pe={0(e,t){var r;let n=M(e.tabs,c=>c.current),s=M(e.panels,c=>c.current),a=n.filter(c=>{var g;return!((g=c.current)!=null&&g.hasAttribute("disabled"))}),o={...e,tabs:n,panels:s};if(t.index<0||t.index>n.length-1){let c=O(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>O(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(a.length===0)return o;let g=O(c,{0:()=>n.indexOf(a[0]),1:()=>n.indexOf(a[a.length-1])});return{...o,selectedIndex:g===-1?e.selectedIndex:g}}let b=n.slice(0,t.index),P=[...n.slice(t.index),...b].find(c=>a.includes(c));if(!P)return o;let x=(r=n.indexOf(P))!=null?r:e.selectedIndex;return x===-1&&(x=e.selectedIndex),{...o,selectedIndex:x}},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],s=M([...e.tabs,t.tab],o=>o.current),a=(r=s.indexOf(n))!=null?r:e.selectedIndex;return a===-1&&(a=e.selectedIndex),{...e,tabs:s,selectedIndex:a}},2(e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:M([...e.panels,t.panel],r=>r.current)}},4(e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},j=u.createContext(null);j.displayName="TabsDataContext";function D(e){let t=u.useContext(j);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}return t}let z=u.createContext(null);z.displayName="TabsActionsContext";function X(e){let t=u.useContext(z);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,X),r}return t}function be(e,t){return O(t.type,pe,e,t)}let xe=u.Fragment;function me(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:s=!1,onChange:a,selectedIndex:o=null,...b}=e;const P=n?"vertical":"horizontal",x=s?"manual":"auto";let c=o!==null,g=L(t),[i,v]=u.useReducer(be,{selectedIndex:o??r,tabs:[],panels:[]}),f=u.useMemo(()=>({selectedIndex:i.selectedIndex}),[i.selectedIndex]),C=G(a||(()=>{})),k=G(i.tabs),p=u.useMemo(()=>({orientation:P,activation:x,...i}),[P,x,i]),m=R(d=>(v({type:1,tab:d}),()=>v({type:2,tab:d}))),h=R(d=>(v({type:3,panel:d}),()=>v({type:4,panel:d}))),y=R(d=>{w.current!==d&&C.current(d),c||v({type:0,index:d})}),w=G(c?e.selectedIndex:i.selectedIndex),W=u.useMemo(()=>({registerTab:m,registerPanel:h,change:y}),[]);B(()=>{v({type:0,index:o??r})},[o]),B(()=>{if(w.current===void 0||i.tabs.length<=0)return;let d=M(i.tabs,$=>$.current);d.some(($,l)=>i.tabs[l]!==$)&&y(d.indexOf(i.tabs[w.current]))});let q={ref:g};return A.createElement(oe,null,A.createElement(z.Provider,{value:W},A.createElement(j.Provider,{value:p},p.tabs.length<=0&&A.createElement(se,{onFocus:()=>{var d,$;for(let l of k.current)if(((d=l.current)==null?void 0:d.tabIndex)===0)return($=l.current)==null||$.focus(),!0;return!1}}),_({ourProps:q,theirProps:b,slot:f,defaultTag:xe,name:"Tabs"}))))}let ge="div";function ve(e,t){let{orientation:r,selectedIndex:n}=D("Tab.List"),s=L(t);return _({ourProps:{ref:s,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:ge,name:"Tabs.List"})}let Ie="button";function Te(e,t){var r,n;let s=K(),{id:a=`headlessui-tabs-tab-${s}`,...o}=e,{orientation:b,activation:P,selectedIndex:x,tabs:c,panels:g}=D("Tab"),i=X("Tab"),v=D("Tab"),f=u.useRef(null),C=L(f,t);B(()=>i.registerTab(f),[i,f]);let k=V("tabs"),p=c.indexOf(f);p===-1&&(p=k);let m=p===x,h=R(l=>{var E;let N=l();if(N===U.Success&&P==="auto"){let Z=(E=ne(f))==null?void 0:E.activeElement,Y=v.tabs.findIndex(ee=>ee.current===Z);Y!==-1&&i.change(Y)}return N}),y=R(l=>{let E=c.map(N=>N.current).filter(Boolean);if(l.key===I.Space||l.key===I.Enter){l.preventDefault(),l.stopPropagation(),i.change(p);return}switch(l.key){case I.Home:case I.PageUp:return l.preventDefault(),l.stopPropagation(),h(()=>S(E,T.First));case I.End:case I.PageDown:return l.preventDefault(),l.stopPropagation(),h(()=>S(E,T.Last))}if(h(()=>O(b,{vertical(){return l.key===I.ArrowUp?S(E,T.Previous|T.WrapAround):l.key===I.ArrowDown?S(E,T.Next|T.WrapAround):U.Error},horizontal(){return l.key===I.ArrowLeft?S(E,T.Previous|T.WrapAround):l.key===I.ArrowRight?S(E,T.Next|T.WrapAround):U.Error}}))===U.Success)return l.preventDefault()}),w=u.useRef(!1),W=R(()=>{var l;w.current||(w.current=!0,(l=f.current)==null||l.focus({preventScroll:!0}),i.change(p),re(()=>{w.current=!1}))}),q=R(l=>{l.preventDefault()}),d=u.useMemo(()=>({selected:m}),[m]),$={ref:C,onKeyDown:y,onMouseDown:q,onClick:W,id:a,role:"tab",type:ae(e,f),"aria-controls":(n=(r=g[p])==null?void 0:r.current)==null?void 0:n.id,"aria-selected":m,tabIndex:m?0:-1};return _({ourProps:$,theirProps:o,slot:d,defaultTag:Ie,name:"Tabs.Tab"})}let Pe="div";function Ee(e,t){let{selectedIndex:r}=D("Tab.Panels"),n=L(t),s=u.useMemo(()=>({selectedIndex:r}),[r]);return _({ourProps:{ref:n},theirProps:e,slot:s,defaultTag:Pe,name:"Tabs.Panels"})}let $e="div",he=H.RenderStrategy|H.Static;function ye(e,t){var r,n,s,a;let o=K(),{id:b=`headlessui-tabs-panel-${o}`,tabIndex:P=0,...x}=e,{selectedIndex:c,tabs:g,panels:i}=D("Tab.Panel"),v=X("Tab.Panel"),f=u.useRef(null),C=L(f,t);B(()=>v.registerPanel(f),[v,f]);let k=V("panels"),p=i.indexOf(f);p===-1&&(p=k);let m=p===c,h=u.useMemo(()=>({selected:m}),[m]),y={ref:C,id:b,role:"tabpanel","aria-labelledby":(n=(r=g[p])==null?void 0:r.current)==null?void 0:n.id,tabIndex:m?P:-1};return!m&&((s=x.unmount)==null||s)&&!((a=x.static)!=null&&a)?A.createElement(J,{as:"span",...y}):_({ourProps:y,theirProps:x,slot:h,defaultTag:$e,features:he,visible:m,name:"Tabs.Panel"})}let we=F(Te),Re=F(me),Se=F(ve),Ae=F(Ee),De=F(ye),Le=Object.assign(we,{Group:Re,List:Se,Panels:Ae,Panel:De});export{Le as r};