import{R as S,r as n}from"./app-d8b8c24c.js";import{S as B,D as E,y as h,T as H,o as b,u as C,X as w}from"./use-flags-b545cc66.js";import{I as O,e as V,o as I,r as j}from"./keyboard-7671dd8e.js";import{c as A,d as g,C as F}from"./open-closed-6fc61065.js";import{s as K}from"./use-resolve-button-type-9a209279.js";var M;let N=(M=S.startTransition)!=null?M:function(e){e()};var U=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(U||{}),z=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(z||{});let q={0:e=>({...e,disclosureState:C(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},T=n.createContext(null);T.displayName="DisclosureContext";function R(e){let t=n.useContext(T);if(t===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,R),a}return t}let x=n.createContext(null);x.displayName="DisclosureAPIContext";function L(e){let t=n.useContext(x);if(t===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,L),a}return t}let $=n.createContext(null);$.displayName="DisclosurePanelContext";function Q(){return n.useContext($)}function W(e,t){return C(t.type,q,e,t)}let X=n.Fragment;function Y(e,t){let{defaultOpen:a=!1,...s}=e,P=n.useRef(null),r=h(t,H(c=>{P.current=c},e.as===void 0||e.as===n.Fragment)),o=n.useRef(null),m=n.useRef(null),u=n.useReducer(W,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:m,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:d},y]=u,p=b(c=>{y({type:1});let l=V(P);if(!l||!d)return;let f=(()=>c?c instanceof HTMLElement?c:c.current instanceof HTMLElement?c.current:l.getElementById(d):l.getElementById(d))();f==null||f.focus()}),k=n.useMemo(()=>({close:p}),[p]),D=n.useMemo(()=>({open:i===0,close:p}),[i,p]),v={ref:r};return S.createElement(T.Provider,{value:u},S.createElement(x.Provider,{value:k},S.createElement(A,{value:C(i,{0:g.Open,1:g.Closed})},w({ourProps:v,theirProps:s,slot:D,defaultTag:X,name:"Disclosure"}))))}let Z="button";function G(e,t){let a=O(),{id:s=`headlessui-disclosure-button-${a}`,...P}=e,[r,o]=R("Disclosure.Button"),m=Q(),u=m===null?!1:m===r.panelId,i=n.useRef(null),d=h(i,t,u?null:r.buttonRef);n.useEffect(()=>{if(!u)return o({type:2,buttonId:s}),()=>{o({type:2,buttonId:null})}},[s,o,u]);let y=b(l=>{var f;if(u){if(r.disclosureState===1)return;switch(l.key){case I.Space:case I.Enter:l.preventDefault(),l.stopPropagation(),o({type:0}),(f=r.buttonRef.current)==null||f.focus();break}}else switch(l.key){case I.Space:case I.Enter:l.preventDefault(),l.stopPropagation(),o({type:0});break}}),p=b(l=>{switch(l.key){case I.Space:l.preventDefault();break}}),k=b(l=>{var f;j(l.currentTarget)||e.disabled||(u?(o({type:0}),(f=r.buttonRef.current)==null||f.focus()):o({type:0}))}),D=n.useMemo(()=>({open:r.disclosureState===0}),[r]),v=K(e,i),c=u?{ref:d,type:v,onKeyDown:y,onClick:k}:{ref:d,id:s,type:v,"aria-expanded":r.disclosureState===0,"aria-controls":r.linkedPanel?r.panelId:void 0,onKeyDown:y,onKeyUp:p,onClick:k};return w({ourProps:c,theirProps:P,slot:D,defaultTag:Z,name:"Disclosure.Button"})}let J="div",_=B.RenderStrategy|B.Static;function ee(e,t){let a=O(),{id:s=`headlessui-disclosure-panel-${a}`,...P}=e,[r,o]=R("Disclosure.Panel"),{close:m}=L("Disclosure.Panel"),u=h(t,r.panelRef,k=>{N(()=>o({type:k?4:5}))});n.useEffect(()=>(o({type:3,panelId:s}),()=>{o({type:3,panelId:null})}),[s,o]);let i=F(),d=(()=>i!==null?(i&g.Open)===g.Open:r.disclosureState===0)(),y=n.useMemo(()=>({open:r.disclosureState===0,close:m}),[r,m]),p={ref:u,id:s};return S.createElement($.Provider,{value:r.panelId},w({ourProps:p,theirProps:P,slot:y,defaultTag:J,features:_,visible:d,name:"Disclosure.Panel"}))}let te=E(Y),ne=E(G),re=E(ee),de=Object.assign(te,{Button:ne,Panel:re});function le({title:e,titleId:t,...a},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"}))}const oe=n.forwardRef(le),pe=oe;export{pe as B,de as v};