import{r as f,R as Q}from"./app-44ab44c4.js";import{i as ne}from"./use-computed-8aa71a5d.js";import{S as ue,D as K,o as x,u as V,l as A,p as re,R as be,X as U,y as J,s as fe,a as ce}from"./use-flags-e6f7da6a.js";import{I as z,o as $,r as me,a as ve}from"./keyboard-3645b197.js";import{h as xe}from"./use-outside-click-bd39b60f.js";import{s as Re}from"./use-resolve-button-type-1a8188bb.js";import{F as ge}from"./use-tree-walker-860fc23f.js";import{u as Oe,a as S,x as Ce}from"./use-tracked-pointer-9cc7c569.js";import{T as Ie,e as Se}from"./use-controllable-3b93eb95.js";import{c as Pe,p as Te}from"./hidden-398850c9.js";import{c as he,d as Y,C as $e}from"./open-closed-51f532d6.js";import{m as de,n as ye}from"./dialog-4bcef038.js";import{n as Ee}from"./use-owner-05b90f87.js";var De=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(De||{}),Fe=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Fe||{}),we=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(we||{}),Me=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(Me||{});function te(e,l=u=>u){let u=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=ve(l(e.options.slice()),c=>c.dataRef.current.domRef.current),p=u?o.indexOf(u):null;return p===-1&&(p=null),{options:o,activeOptionIndex:p}}let Ae={1(e){var l;return(l=e.dataRef.current)!=null&&l.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},0(e){var l;if((l=e.dataRef.current)!=null&&l.disabled||e.comboboxState===0)return e;let u=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:o}=e.dataRef.current,p=e.options.findIndex(c=>o(c.dataRef.current.value));p!==-1&&(u=p)}return{...e,comboboxState:0,activeOptionIndex:u}},2(e,l){var u,o,p,c;if((u=e.dataRef.current)!=null&&u.disabled||(o=e.dataRef.current)!=null&&o.optionsRef.current&&!((p=e.dataRef.current)!=null&&p.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let r=te(e);if(r.activeOptionIndex===null){let R=r.options.findIndex(d=>!d.dataRef.current.disabled);R!==-1&&(r.activeOptionIndex=R)}let g=Ce(l,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:R=>R.id,resolveDisabled:R=>R.dataRef.current.disabled});return{...e,...r,activeOptionIndex:g,activationTrigger:(c=l.trigger)!=null?c:1}},3:(e,l)=>{var u,o;let p={id:l.id,dataRef:l.dataRef},c=te(e,g=>[...g,p]);e.activeOptionIndex===null&&(u=e.dataRef.current)!=null&&u.isSelected(l.dataRef.current.value)&&(c.activeOptionIndex=c.options.indexOf(p));let r={...e,...c,activationTrigger:1};return(o=e.dataRef.current)!=null&&o.__demoMode&&e.dataRef.current.value===void 0&&(r.activeOptionIndex=0),r},4:(e,l)=>{let u=te(e,o=>{let p=o.findIndex(c=>c.id===l.id);return p!==-1&&o.splice(p,1),o});return{...e,...u,activationTrigger:1}},5:(e,l)=>({...e,labelId:l.id})},ie=f.createContext(null);ie.displayName="ComboboxActionsContext";function W(e){let l=f.useContext(ie);if(l===null){let u=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,W),u}return l}let le=f.createContext(null);le.displayName="ComboboxDataContext";function B(e){let l=f.useContext(le);if(l===null){let u=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,B),u}return l}function Le(e,l){return V(l.type,Ae,e,l)}let ke=f.Fragment;function _e(e,l){let{value:u,defaultValue:o,onChange:p,form:c,name:r,by:g=(s,v)=>s===v,disabled:R=!1,__demoMode:d=!1,nullable:O=!1,multiple:I=!1,...t}=e,[n=I?[]:void 0,C]=Ie(u,p,o),[m,a]=f.useReducer(Le,{dataRef:f.createRef(),comboboxState:d?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),y=f.useRef(!1),L=f.useRef({static:!1,hold:!1}),q=f.useRef(null),D=f.useRef(null),k=f.useRef(null),_=f.useRef(null),F=x(typeof g=="string"?(s,v)=>{let P=g;return(s==null?void 0:s[P])===(v==null?void 0:v[P])}:g),H=f.useCallback(s=>V(i.mode,{1:()=>n.some(v=>F(v,s)),0:()=>F(n,s)}),[n]),i=f.useMemo(()=>({...m,optionsPropsRef:L,labelRef:q,inputRef:D,buttonRef:k,optionsRef:_,value:n,defaultValue:o,disabled:R,mode:I?1:0,get activeOptionIndex(){if(y.current&&m.activeOptionIndex===null&&m.options.length>0){let s=m.options.findIndex(v=>!v.dataRef.current.disabled);if(s!==-1)return s}return m.activeOptionIndex},compare:F,isSelected:H,nullable:O,__demoMode:d}),[n,o,R,I,O,d,m]),h=f.useRef(i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null);f.useEffect(()=>{let s=i.activeOptionIndex!==null?i.options[i.activeOptionIndex]:null;h.current!==s&&(h.current=s)}),A(()=>{m.dataRef.current=i},[i]),xe([i.buttonRef,i.inputRef,i.optionsRef],()=>oe.closeCombobox(),i.comboboxState===0);let N=f.useMemo(()=>({open:i.comboboxState===0,disabled:R,activeIndex:i.activeOptionIndex,activeOption:i.activeOptionIndex===null?null:i.options[i.activeOptionIndex].dataRef.current.value,value:n}),[i,R,n]),ee=x(s=>{let v=i.options.find(P=>P.id===s);v&&w(v.dataRef.current.value)}),b=x(()=>{if(i.activeOptionIndex!==null){let{dataRef:s,id:v}=i.options[i.activeOptionIndex];w(s.current.value),oe.goToOption(S.Specific,v)}}),j=x(()=>{a({type:0}),y.current=!0}),E=x(()=>{a({type:1}),y.current=!1}),G=x((s,v,P)=>(y.current=!1,s===S.Specific?a({type:2,focus:S.Specific,id:v,trigger:P}):a({type:2,focus:s,trigger:P}))),T=x((s,v)=>(a({type:3,id:s,dataRef:v}),()=>{var P;((P=h.current)==null?void 0:P.id)===s&&(y.current=!0),a({type:4,id:s})})),M=x(s=>(a({type:5,id:s}),()=>a({type:5,id:null}))),w=x(s=>V(i.mode,{0(){return C==null?void 0:C(s)},1(){let v=i.value.slice(),P=v.findIndex(Z=>F(Z,s));return P===-1?v.push(s):v.splice(P,1),C==null?void 0:C(v)}})),oe=f.useMemo(()=>({onChange:w,registerOption:T,registerLabel:M,goToOption:G,closeCombobox:E,openCombobox:j,selectActiveOption:b,selectOption:ee}),[]),pe=l===null?{}:{ref:l},X=f.useRef(null),se=re();return f.useEffect(()=>{X.current&&o!==void 0&&se.addEventListener(X.current,"reset",()=>{C==null||C(o)})},[X,C]),Q.createElement(ie.Provider,{value:oe},Q.createElement(le.Provider,{value:i},Q.createElement(he,{value:V(i.comboboxState,{0:Y.Open,1:Y.Closed})},r!=null&&n!=null&&Se({[r]:n}).map(([s,v],P)=>Q.createElement(Pe,{features:Te.Hidden,ref:P===0?Z=>{var ae;X.current=(ae=Z==null?void 0:Z.closest("form"))!=null?ae:null}:void 0,...be({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:c,name:s,value:v})})),U({ourProps:pe,theirProps:t,slot:N,defaultTag:ke,name:"Combobox"}))))}let Ne="input";function Ve(e,l){var u,o,p,c;let r=z(),{id:g=`headlessui-combobox-input-${r}`,onChange:R,displayValue:d,type:O="text",...I}=e,t=B("Combobox.Input"),n=W("Combobox.Input"),C=J(t.inputRef,l),m=Ee(t.inputRef),a=f.useRef(!1),y=re(),L=x(()=>{n.onChange(null),t.optionsRef.current&&(t.optionsRef.current.scrollTop=0),n.goToOption(S.Nothing)}),q=function(){var b;return typeof d=="function"&&t.value!==void 0?(b=d(t.value))!=null?b:"":typeof t.value=="string"?t.value:""}();de(([b,j],[E,G])=>{if(a.current)return;let T=t.inputRef.current;T&&((G===0&&j===1||b!==E)&&(T.value=b),requestAnimationFrame(()=>{if(a.current||!T||(m==null?void 0:m.activeElement)!==T)return;let{selectionStart:M,selectionEnd:w}=T;Math.abs((w??0)-(M??0))===0&&M===0&&T.setSelectionRange(T.value.length,T.value.length)}))},[q,t.comboboxState,m]),de(([b],[j])=>{if(b===0&&j===1){if(a.current)return;let E=t.inputRef.current;if(!E)return;let G=E.value,{selectionStart:T,selectionEnd:M,selectionDirection:w}=E;E.value="",E.value=G,w!==null?E.setSelectionRange(T,M,w):E.setSelectionRange(T,M)}},[t.comboboxState]);let D=f.useRef(!1),k=x(()=>{D.current=!0}),_=x(()=>{y.nextFrame(()=>{D.current=!1})}),F=x(b=>{switch(a.current=!0,b.key){case $.Enter:if(a.current=!1,t.comboboxState!==0||D.current)return;if(b.preventDefault(),b.stopPropagation(),t.activeOptionIndex===null){n.closeCombobox();return}n.selectActiveOption(),t.mode===0&&n.closeCombobox();break;case $.ArrowDown:return a.current=!1,b.preventDefault(),b.stopPropagation(),V(t.comboboxState,{0:()=>{n.goToOption(S.Next)},1:()=>{n.openCombobox()}});case $.ArrowUp:return a.current=!1,b.preventDefault(),b.stopPropagation(),V(t.comboboxState,{0:()=>{n.goToOption(S.Previous)},1:()=>{n.openCombobox(),y.nextFrame(()=>{t.value||n.goToOption(S.Last)})}});case $.Home:if(b.shiftKey)break;return a.current=!1,b.preventDefault(),b.stopPropagation(),n.goToOption(S.First);case $.PageUp:return a.current=!1,b.preventDefault(),b.stopPropagation(),n.goToOption(S.First);case $.End:if(b.shiftKey)break;return a.current=!1,b.preventDefault(),b.stopPropagation(),n.goToOption(S.Last);case $.PageDown:return a.current=!1,b.preventDefault(),b.stopPropagation(),n.goToOption(S.Last);case $.Escape:return a.current=!1,t.comboboxState!==0?void 0:(b.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&b.stopPropagation(),t.nullable&&t.mode===0&&t.value===null&&L(),n.closeCombobox());case $.Tab:if(a.current=!1,t.comboboxState!==0)return;t.mode===0&&n.selectActiveOption(),n.closeCombobox();break}}),H=x(b=>{R==null||R(b),t.nullable&&t.mode===0&&b.target.value===""&&L(),n.openCombobox()}),i=x(()=>{a.current=!1}),h=ne(()=>{if(t.labelId)return[t.labelId].join(" ")},[t.labelId]),N=f.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled}),[t]),ee={ref:C,id:g,role:"combobox",type:O,"aria-controls":(u=t.optionsRef.current)==null?void 0:u.id,"aria-expanded":t.comboboxState===0,"aria-activedescendant":t.activeOptionIndex===null||(o=t.options[t.activeOptionIndex])==null?void 0:o.id,"aria-labelledby":h,"aria-autocomplete":"list",defaultValue:(c=(p=e.defaultValue)!=null?p:t.defaultValue!==void 0?d==null?void 0:d(t.defaultValue):null)!=null?c:t.defaultValue,disabled:t.disabled,onCompositionStart:k,onCompositionEnd:_,onKeyDown:F,onChange:H,onBlur:i};return U({ourProps:ee,theirProps:I,slot:N,defaultTag:Ne,name:"Combobox.Input"})}let Ke="button";function Ue(e,l){var u;let o=B("Combobox.Button"),p=W("Combobox.Button"),c=J(o.buttonRef,l),r=z(),{id:g=`headlessui-combobox-button-${r}`,...R}=e,d=re(),O=x(m=>{switch(m.key){case $.ArrowDown:return m.preventDefault(),m.stopPropagation(),o.comboboxState===1&&p.openCombobox(),d.nextFrame(()=>{var a;return(a=o.inputRef.current)==null?void 0:a.focus({preventScroll:!0})});case $.ArrowUp:return m.preventDefault(),m.stopPropagation(),o.comboboxState===1&&(p.openCombobox(),d.nextFrame(()=>{o.value||p.goToOption(S.Last)})),d.nextFrame(()=>{var a;return(a=o.inputRef.current)==null?void 0:a.focus({preventScroll:!0})});case $.Escape:return o.comboboxState!==0?void 0:(m.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&m.stopPropagation(),p.closeCombobox(),d.nextFrame(()=>{var a;return(a=o.inputRef.current)==null?void 0:a.focus({preventScroll:!0})}));default:return}}),I=x(m=>{if(me(m.currentTarget))return m.preventDefault();o.comboboxState===0?p.closeCombobox():(m.preventDefault(),p.openCombobox()),d.nextFrame(()=>{var a;return(a=o.inputRef.current)==null?void 0:a.focus({preventScroll:!0})})}),t=ne(()=>{if(o.labelId)return[o.labelId,g].join(" ")},[o.labelId,g]),n=f.useMemo(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),C={ref:c,id:g,type:Re(e,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(u=o.optionsRef.current)==null?void 0:u.id,"aria-expanded":o.comboboxState===0,"aria-labelledby":t,disabled:o.disabled,onClick:I,onKeyDown:O};return U({ourProps:C,theirProps:R,slot:n,defaultTag:Ke,name:"Combobox.Button"})}let Be="label";function qe(e,l){let u=z(),{id:o=`headlessui-combobox-label-${u}`,...p}=e,c=B("Combobox.Label"),r=W("Combobox.Label"),g=J(c.labelRef,l);A(()=>r.registerLabel(o),[o]);let R=x(()=>{var O;return(O=c.inputRef.current)==null?void 0:O.focus({preventScroll:!0})}),d=f.useMemo(()=>({open:c.comboboxState===0,disabled:c.disabled}),[c]);return U({ourProps:{ref:g,id:o,onClick:R},theirProps:p,slot:d,defaultTag:Be,name:"Combobox.Label"})}let He="ul",je=ue.RenderStrategy|ue.Static;function Ge(e,l){let u=z(),{id:o=`headlessui-combobox-options-${u}`,hold:p=!1,...c}=e,r=B("Combobox.Options"),g=J(r.optionsRef,l),R=$e(),d=(()=>R!==null?(R&Y.Open)===Y.Open:r.comboboxState===0)();A(()=>{var n;r.optionsPropsRef.current.static=(n=e.static)!=null?n:!1},[r.optionsPropsRef,e.static]),A(()=>{r.optionsPropsRef.current.hold=p},[r.optionsPropsRef,p]),ge({container:r.optionsRef.current,enabled:r.comboboxState===0,accept(n){return n.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});let O=ne(()=>{var n,C;return(C=r.labelId)!=null?C:(n=r.buttonRef.current)==null?void 0:n.id},[r.labelId,r.buttonRef.current]),I=f.useMemo(()=>({open:r.comboboxState===0}),[r]),t={"aria-labelledby":O,role:"listbox","aria-multiselectable":r.mode===1?!0:void 0,id:o,ref:g};return U({ourProps:t,theirProps:c,slot:I,defaultTag:He,features:je,visible:d,name:"Combobox.Options"})}let Je="li";function ze(e,l){var u,o;let p=z(),{id:c=`headlessui-combobox-option-${p}`,disabled:r=!1,value:g,...R}=e,d=B("Combobox.Option"),O=W("Combobox.Option"),I=d.activeOptionIndex!==null?d.options[d.activeOptionIndex].id===c:!1,t=d.isSelected(g),n=f.useRef(null),C=fe({disabled:r,value:g,domRef:n,textValue:(o=(u=n.current)==null?void 0:u.textContent)==null?void 0:o.toLowerCase()}),m=J(l,n),a=x(()=>O.selectOption(c));A(()=>O.registerOption(c,C),[C,c]);let y=f.useRef(!d.__demoMode);A(()=>{if(!d.__demoMode)return;let i=ce();return i.requestAnimationFrame(()=>{y.current=!0}),i.dispose},[]),A(()=>{if(d.comboboxState!==0||!I||!y.current||d.activationTrigger===0)return;let i=ce();return i.requestAnimationFrame(()=>{var h,N;(N=(h=n.current)==null?void 0:h.scrollIntoView)==null||N.call(h,{block:"nearest"})}),i.dispose},[n,I,d.comboboxState,d.activationTrigger,d.activeOptionIndex]);let L=x(i=>{if(r)return i.preventDefault();a(),d.mode===0&&O.closeCombobox(),ye()||requestAnimationFrame(()=>{var h;return(h=d.inputRef.current)==null?void 0:h.focus()})}),q=x(()=>{if(r)return O.goToOption(S.Nothing);O.goToOption(S.Specific,c)}),D=Oe(),k=x(i=>D.update(i)),_=x(i=>{D.wasMoved(i)&&(r||I||O.goToOption(S.Specific,c,0))}),F=x(i=>{D.wasMoved(i)&&(r||I&&(d.optionsPropsRef.current.hold||O.goToOption(S.Nothing)))}),H=f.useMemo(()=>({active:I,selected:t,disabled:r}),[I,t,r]);return U({ourProps:{id:c,ref:m,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":t,disabled:void 0,onClick:L,onFocus:q,onPointerEnter:k,onMouseEnter:k,onPointerMove:_,onMouseMove:_,onPointerLeave:F,onMouseLeave:F},theirProps:R,slot:H,defaultTag:Je,name:"Combobox.Option"})}let We=K(_e),Xe=K(Ue),Ze=K(Ve),Qe=K(qe),Ye=K(Ge),eo=K(ze),mo=Object.assign(We,{Input:Ze,Button:Xe,Label:Qe,Options:Ye,Option:eo});export{mo as q};