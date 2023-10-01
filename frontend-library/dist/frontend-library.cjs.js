"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");function h(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let o="";for(let n=0;n<6;n++){const r=Math.floor(Math.random()*t.length);o+=t.charAt(r)}return o}const Z=["data-id"],j=e.defineComponent({__name:"CMainBar",setup(t){var s,l;e.useCssVars(a=>({"78077ec2":n.background,"06082152":n.color}));const o=e.inject("theme"),n={background:(s=o==null?void 0:o.CMainBar)==null?void 0:s.background,color:(l=o==null?void 0:o.CMainBar)==null?void 0:l.color},r=h();return e.computed({get(){return o.CMainBar},set(a){return a}}),(a,i)=>{const c=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createElementBlock("header",{"data-id":e.unref(r),class:"CMainBar"},[e.renderSlot(a.$slots,"default",{},void 0,!0)],8,Z)),[[c,a.$.type,a.$attrs,e.unref(r)]])}}});const _=(t,o)=>{const n=t.__vccOpts||t;for(const[r,s]of o)n[r]=s;return n},N=_(j,[["__scopeId","data-v-f40a194a"]]);var T={},z={class:"CMain"};function O(t,o){var n=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createElementBlock("main",z,[e.renderSlot(t.$slots,"default",{},void 0,!0)])),[[n,t.$.type,t.$attrs]])}const L=_(T,[["render",O],["__scopeId","data-v-994719c5"]]),v={breakpoints:{lg:"1620px",md:"1240px",sm:"1000px",xs:"720px"},layout:{background:"blue"},spaces:{base:"4px",sm:"4px",md:"16px 20px",lg:"16px 24px"},colors:{primary:"#007bff",secondary:"#6c757d"},text:{m:{size:"18px",bold:"700"},s:{size:"16px",bold:"700"},xs:{size:"14px",bold:"700"},xxs:{size:"12px",bold:"700"}},radii:{xl:"24px",lg:"12px",md:"8px",xs:"2px"},fontSize:{base:"1rem"},lineHeights:{base:"24px"},fontWeights:{bold:"900"}};function g(t,o){const n={...t};for(const r in o)o.hasOwnProperty(r)&&(o[r]&&o[r].constructor===Object?n[r]&&n[r].constructor===Object?n[r]=g(n[r],o[r]):n[r]={...o[r]}:n[r]=o[r]);return n}const R=t=>["xxs","xs","sm","md","lg","xl","xxl"].includes(t)===!0,E=(t,o,n)=>{var s;let r=o;return t.rounded===void 0||(typeof(t==null?void 0:t.rounded)=="boolean"&&(t==null?void 0:t.rounded)===!0||((s=t==null?void 0:t.rounded)==null?void 0:s.length)===0?r.borderRadius=n.radii.lg:R(t==null?void 0:t.rounded)?r.borderRadius=n.radii[t==null?void 0:t.rounded]:r.borderRadius=t==null?void 0:t.rounded),r},q={padding:"16px 20px",letterSpacing:"0.6px",height:"10",margin:"5px",textAlign:"center",fontSize:v.fontSize.base,width:"100%",maxWidth:"fit-content",borderRadius:"0px",lineHeight:v.lineHeights.base,fontWeight:v.fontWeights.bold},b=({colors:t,colorMode:o,additionalStyling:n})=>{let r={light:{bg:t.bg.base,color:t.font.base,_hover:{bg:t.bg._hover,color:t.font._hover},_active:{bg:t.bg._active}},dark:{bg:t.bg.base,color:t.font.base,_hover:{bg:t.bg._hover,color:t.font._hover},_active:{bg:t.bg._active}}};return g(r[o],n)},W=t=>{switch(t.variant){case"primary":return b(t);case"secondary":return b(t);case"unstyled":return b(t);default:return b(t)}},B=t=>({...E(t,q,v),...W(t)}),P=e.defineComponent({__name:"CIcon",props:{as:{},space:{}},setup(t){const o=h();return(n,r)=>{const s=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.as),{"data-id":e.unref(o),class:"CIcon"},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[s,n.$.type,n.$attrs,e.unref(o)]])}}});const C=_(P,[["__scopeId","data-v-dab21008"]]),F=e.defineComponent({__name:"CButton",props:{as:{},to:{},type:{},variant:{},isDisabled:{},isLoading:{},isActive:{},loadingText:{},iconSpacing:{},leftIcon:{},rightIcon:{},rounded:{}},setup(t){const{variant:o="primary",as:n="button",...r}=t;e.useCssVars(d=>({"7ee69889":e.unref(c).lineHeight,b20a46fa:e.unref(c).padding,"4e24f7a2":e.unref(c).letterSpacing,"18ff1a75":e.unref(c).height,"21530efc":e.unref(c).margin,"013c3c6c":e.unref(c).textAlign,"198cd2ac":e.unref(c).borderRadius,"20140ebe":e.unref(c).fontSize,"5c7a42b8":e.unref(c).width,"2226c490":e.unref(c).maxWidth,"71deb5f5":e.unref(c).fontWeight,"222b6c93":e.unref(c).bg,"5b634455":e.unref(c).color,"36b71388":e.unref(c)._hover.bg,"42dd3d40":e.unref(c)._hover.color})),console.log(n);const s=e.inject("theme"),l=e.inject("colorMode"),a=h();let i=e.computed({get(){return s.CButton[o]},set(d){return d}}),c=e.ref(B({...r,colors:i.value,colorMode:l.value}));return e.watch(()=>s,d=>{c.value=B({...r,colors:i.value,colorMode:l.value})},{deep:!0}),(d,u)=>{const f=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(d.as??"button"),{"data-id":e.unref(a),class:"CButton",disabled:d.isDisabled},{default:e.withCtx(()=>[d.leftIcon?(e.openBlock(),e.createBlock(C,{key:0,as:d.leftIcon,"margin-right":"8px"},null,8,["as"])):e.createCommentVNode("",!0),e.renderSlot(d.$slots,"default",{},void 0,!0),d.rightIcon?(e.openBlock(),e.createBlock(C,{key:1,as:d.rightIcon,"margin-left":"8px"},null,8,["as"])):e.createCommentVNode("",!0)]),_:3},8,["data-id","disabled"])),[[f,d.$.type,d.$attrs,e.unref(a)]])}}});const H=_(F,[["__scopeId","data-v-ad27d1d9"]]),U=e.defineComponent({__name:"CCard",props:{as:{}},setup(t){e.useCssVars(s=>({"6f7ac7bf":n.borderRadius}));const n={borderRadius:e.inject("theme").radii.lg},r=h();return(s,l)=>{const a=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("div"),{"data-id":e.unref(r),class:"CCard"},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[a,s.$.type,s.$attrs,e.unref(r)]])}}});const G=_(U,[["__scopeId","data-v-d073c29f"]]),J=e.defineComponent({__name:"CCardTitle",props:{as:{}},setup(t){e.useCssVars(s=>({"64e4ddeb":o.fontWeight,19608798:o.fontSize})),e.inject("theme");const o={fontWeight:"900",fontSize:"18px"};function n(){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let l="";for(let a=0;a<6;a++){const i=Math.floor(Math.random()*s.length);l+=s.charAt(i)}return l}const r=n();return(s,l)=>{const a=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("h3"),{"data-id":e.unref(r),class:"CCardTitle"},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[a,s.$.type,s.$attrs,e.unref(r)]])}}});const K=_(J,[["__scopeId","data-v-27df9289"]]),Q=e.defineComponent({__name:"CCardContent",props:{as:{}},setup(t){return e.inject("theme"),(o,n)=>{const r=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("div"),{class:"CCardContent"},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default",{},void 0,!0)]),_:3})),[[r,o.$.type,o.$attrs]])}}});const X=_(Q,[["__scopeId","data-v-0f0761fc"]]),Y=["data-id"],ee=e.defineComponent({__name:"CContainer",setup(t){const o=h();return(n,r)=>{const s=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createElementBlock("section",{"data-id":e.unref(o),class:"CContainer"},[e.renderSlot(n.$slots,"default",{},void 0,!0)],8,Y)),[[s,n.$.type,n.$attrs,e.unref(o)]])}}});const te=_(ee,[["__scopeId","data-v-ba427fa7"]]),w=e.ref(!0),oe=async()=>{w.value=!1,await e.nextTick(),w.value=!0},ne=e.defineComponent({__name:"CText",props:{as:{}},setup(t){var l;e.useCssVars(a=>({"3a617175":r.value.fontSize,"52c4977e":r.value.marginBottom}));const o=e.inject("theme"),n=e.inject("colorMode"),r=e.ref({fontSize:"16px",color:(l=o==null?void 0:o.body)==null?void 0:l.color,marginBottom:o.spaces.sm});e.watch(()=>n.value,a=>{oe()});const s=h();return(a,i)=>{const c=e.resolveDirective("style-setup");return e.unref(w)?e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.as),{key:0,"data-id":e.unref(s),class:"CText"},{default:e.withCtx(()=>[e.renderSlot(a.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[c,a.$.type,a.$attrs,e.unref(s)]]):e.createCommentVNode("",!0)}}});const D=_(ne,[["__scopeId","data-v-587f514f"]]),re={padding:"10px 16px",letterSpacing:"0.6px",height:"10",margin:"5px",textAlign:"center",fontSize:v.fontSize.base,width:"100%",maxWidth:"fit-content",borderRadius:v.radii.xs,lineHeight:v.lineHeights.base,fontWeight:v.fontWeights.bold},k=({colors:t,colorMode:o,additionalStyling:n})=>{let r={light:{bg:t.bg.base,color:t.font.base,_hover:{bg:t.bg._hover,color:t.font._hover},_active:{bg:t.bg._active}},dark:{bg:t.bg.base,color:t.font.base,_hover:{bg:t.bg._hover,color:t.font._hover},_active:{bg:t.bg._active}}};return g(r[o],n)},ae=t=>{switch(t.variant){case"information":return k(t);case"warning":return k(t);default:return k(t)}},x=t=>({...E(t,re,v),...ae(t)}),se=["width","height","fill","transform"],ce={key:0},le=e.createElementVNode("path",{d:"M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"},null,-1),ie=[le],de={key:1},ue=e.createElementVNode("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},null,-1),_e=e.createElementVNode("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"},null,-1),fe=[ue,_e],me={key:2},ve=e.createElementVNode("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"},null,-1),pe=[ve],he={key:3},ge=e.createElementVNode("path",{d:"M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"},null,-1),ye=[ge],be={key:4},Ce=e.createElementVNode("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"},null,-1),ke=[Ce],$e={key:5},we=e.createElementVNode("path",{d:"M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"},null,-1),Be=[we],xe={name:"PhCheckCircle"},Se=e.defineComponent({...xe,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(t){const o=t,n=e.inject("weight","regular"),r=e.inject("size","1em"),s=e.inject("color","currentColor"),l=e.inject("mirrored",!1),a=e.computed(()=>o.weight??n),i=e.computed(()=>o.size??r),c=e.computed(()=>o.color??s),d=e.computed(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:l?"scale(-1, 1)":void 0);return(u,f)=>(e.openBlock(),e.createElementBlock("svg",e.mergeProps({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:i.value,height:i.value,fill:c.value,transform:d.value},u.$attrs),[e.renderSlot(u.$slots,"default"),a.value==="bold"?(e.openBlock(),e.createElementBlock("g",ce,ie)):a.value==="duotone"?(e.openBlock(),e.createElementBlock("g",de,fe)):a.value==="fill"?(e.openBlock(),e.createElementBlock("g",me,pe)):a.value==="light"?(e.openBlock(),e.createElementBlock("g",he,ye)):a.value==="regular"?(e.openBlock(),e.createElementBlock("g",be,ke)):a.value==="thin"?(e.openBlock(),e.createElementBlock("g",$e,Be)):e.createCommentVNode("",!0)],16,se))}}),Ie=["width","height","fill","transform"],Ae={key:0},Me=e.createElementVNode("path",{d:"M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"},null,-1),Ve=[Me],Ee={key:1},De=e.createElementVNode("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"},null,-1),Ze=e.createElementVNode("path",{d:"M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"},null,-1),je=[De,Ze],Ne={key:2},Te=e.createElementVNode("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"},null,-1),ze=[Te],Oe={key:3},Le=e.createElementVNode("path",{d:"M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"},null,-1),Re=[Le],qe={key:4},We=e.createElementVNode("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"},null,-1),Pe=[We],Fe={key:5},He=e.createElementVNode("path",{d:"M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"},null,-1),Ue=[He],Ge={name:"PhInfo"},Je=e.defineComponent({...Ge,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(t){const o=t,n=e.inject("weight","regular"),r=e.inject("size","1em"),s=e.inject("color","currentColor"),l=e.inject("mirrored",!1),a=e.computed(()=>o.weight??n),i=e.computed(()=>o.size??r),c=e.computed(()=>o.color??s),d=e.computed(()=>o.mirrored!==void 0?o.mirrored?"scale(-1, 1)":void 0:l?"scale(-1, 1)":void 0);return(u,f)=>(e.openBlock(),e.createElementBlock("svg",e.mergeProps({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:i.value,height:i.value,fill:c.value,transform:d.value},u.$attrs),[e.renderSlot(u.$slots,"default"),a.value==="bold"?(e.openBlock(),e.createElementBlock("g",Ae,Ve)):a.value==="duotone"?(e.openBlock(),e.createElementBlock("g",Ee,je)):a.value==="fill"?(e.openBlock(),e.createElementBlock("g",Ne,ze)):a.value==="light"?(e.openBlock(),e.createElementBlock("g",Oe,Re)):a.value==="regular"?(e.openBlock(),e.createElementBlock("g",qe,Pe)):a.value==="thin"?(e.openBlock(),e.createElementBlock("g",Fe,Ue)):e.createCommentVNode("",!0)],16,Ie))}}),Ke=e.defineComponent({__name:"CAlert",props:{title:{},as:{},type:{},variant:{},isDisabled:{},isLoading:{},isActive:{},loadingText:{},iconSpacing:{},leftIcon:{},rightIcon:{},rounded:{}},setup(t){const{variant:o="information",as:n="div",...r}=t;e.useCssVars(u=>({c33effc8:e.unref(c).bg,"7fef982c":e.unref(c).color,"3f29cef5":e.unref(c).borderRadius}));const s=e.inject("theme"),l=e.inject("colorMode"),a=h();let i=e.computed({get(){return s.CAlert[o]},set(u){return u}}),c=e.ref(x({...r,colors:i.value,colorMode:l.value}));e.watch(()=>s,u=>{c.value=x({...r,colors:i.value,colorMode:l.value})},{deep:!0});let d=e.computed({get(){switch(o){case"information":return Je;case"success":return Se}},set(u){return u}});return(u,f)=>{const p=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("div"),{"data-id":e.unref(a),class:"CAlert"},{default:e.withCtx(()=>[e.unref(d)?(e.openBlock(),e.createBlock(C,{key:0,as:e.unref(d),"margin-right":"12px",size:"24px"},null,8,["as"])):e.createCommentVNode("",!0),e.createElementVNode("div",null,[u.title?(e.openBlock(),e.createBlock(D,{key:0,as:"h4"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(u.title),1)]),_:1})):e.createCommentVNode("",!0),e.renderSlot(u.$slots,"default",{},void 0,!0)])]),_:3},8,["data-id"])),[[p,u.$.type,u.$attrs,e.unref(a)]])}}});const Qe=_(Ke,[["__scopeId","data-v-b23a0a48"]]);function Xe(t){let o=e.ref();function n(l){if(!t.rules)return;const i=t.rules.map(c=>{const d=c(l);if(d||d!==!0)return d}).find(c=>c!==!0);switch(typeof i){case"string":case"boolean":o.value=i!==!1?i:!0;break;default:o.value=!1;break}return o.value===!1}function r(l,a){if(l===a)return!0;if(l instanceof Date&&a instanceof Date&&l.getTime()!==a.getTime()||l!==Object(l)||a!==Object(a))return!1;const i=Object.keys(l);return i.length!==Object.keys(a).length?!1:i.every(c=>r(l[c],a[c]))}const{rules:s}=e.toRefs(t);return e.watch(()=>s,(l,a)=>{r(l,a)||n()},{deep:!0}),e.onMounted(()=>{n()}),{validate:n,error:o}}const Ye={class:"form-box"},et=e.createElementVNode("input",{class:"form-input",type:"text",required:"",minlength:"6",placeholder:"tester"},null,-1),tt=e.createElementVNode("label",{for:"",class:"label"},"tester ",-1),ot=e.createElementVNode("span",{class:"error"},"Field Required",-1),nt=[et,tt,ot],rt=e.defineComponent({__name:"CInput",props:{modelValue:{},name:{},placeholder:{},icon:{},rules:{},label:{},type:{},id:{}},emits:["input"],setup(t,{emit:o}){const n=t,{error:r,validate:s}=Xe(n);let l=e.ref(n.modelValue);return e.watch(l,a=>{o("input",a),n.rules&&s(a)}),(a,i)=>(e.openBlock(),e.createElementBlock("div",Ye,nt))}});const at=e.defineComponent({__name:"CForm",setup(t,{expose:o}){const n=e.ref(),r=e.ref(!1),s=e.computed({get(){var a,i,c,d;if(r.value){const u=[],f=(a=n.value)==null?void 0:a.elements;for(let p=0;p<f.length;p++){const m=f[p];(i=m==null?void 0:m.__vue__)!=null&&i.isInvalid&&((c=m.__vue__)==null?void 0:c.isInvalid)===!0&&u.push(!0),!m.__vue__==null&&((d=m.validity)==null?void 0:d.valid)!==!0&&u.push(!0)}return r.value=!1,u.length===0}return r.value=!1,!1},set(a){return a}});async function l(){return r.value=!0,await e.nextTick(),s.value}return o({validation:l}),(a,i)=>(e.openBlock(),e.createElementBlock("form",{ref_key:"form",ref:n},[e.renderSlot(a.$slots,"default")],512))}}),st=e.defineComponent({__name:"CFlex",props:{as:{}},setup(t){const o=h();return(n,r)=>{const s=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.as),{"data-id":e.unref(o),class:"CFlex"},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[s,n.$.type,n.$attrs,e.unref(o)]])}}});const ct=_(st,[["__scopeId","data-v-fb2850e5"]]),lt=["data-id"],it=["checked"],dt={class:"CToggle__switch"},ut={key:0,class:"CToggle__switch__slider","data-switch":"true"},_t={key:1,class:"CToggle__switch__slider","data-switch":"false"},ft=e.defineComponent({__name:"CToggle",props:{modelValue:{type:Boolean},size:{},trueIcon:{},falseIcon:{type:Function}},emits:{"update:modelValue":Boolean},setup(t,{emit:o}){const n=t;e.useCssVars(c=>({"64fe3614":i.value()}));let r=e.ref(n.modelValue);const s=h();function l(){r.value=!r.value,o("update:modelValue",r.value)}function a(c){o("update:modelValue",!c.target.checked)}const i=e.ref(()=>{switch(n.size){case"xl":return"75px";case"lg":return"70px";case"md":return"60px";default:return n.size??"50px"}});return(c,d)=>{const u=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createElementBlock("div",{"data-id":e.unref(s),class:"CToggle",onClick:l},[e.createElementVNode("input",{type:"checkbox",class:"CToggle__input--hidden",checked:e.unref(r),onInput:a},null,40,it),e.createElementVNode("div",dt,[e.unref(r)?(e.openBlock(),e.createElementBlock("span",ut,[c.trueIcon?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(c.trueIcon),{key:0})):e.createCommentVNode("",!0),e.renderSlot(c.$slots,"trueIcon",{},void 0,!0)])):(e.openBlock(),e.createElementBlock("span",_t,[c.trueIcon?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(c.falseIcon),{key:0})):e.createCommentVNode("",!0),e.renderSlot(c.$slots,"falseIcon",{},void 0,!0)]))])],8,lt)),[[u,c.$.type,c.$attrs,e.unref(s)]])}}});const mt=_(ft,[["__scopeId","data-v-33d2dfa1"]]),$={CMainBar:N,CMain:L,CButton:H,CCard:G,CContainer:te,CCardTitle:K,CCardContent:X,CText:D,CAlert:Qe,CIcon:C,CInput:rt,CForm:at,CFlex:ct,CToggle:mt},S={body:{backgroundColor:"white",color:"black"},CMainBar:{background:"rgb(6 6 6 / 5%)",color:"black"},CCard:{background:"#ffffff",color:"#000000","border-color":"#7bbaff"},CButton:{primary:{bg:{base:"#253C57",_active:"pink",_hover:"#0C2644",_focused:"red"},font:{base:"white",_active:"pink",_hover:"yellow",_focused:"red"}},secondary:{bg:{base:"blue",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"purple",_active:"pink",_hover:"white",_focused:"red"}},unstyled:{bg:{base:"inherit",_active:"inherit",_hover:"inherit",_focused:"inherit"},font:{base:"#16191D",_active:"white",_hover:"white",_focused:"white"}}},CAlert:{information:{bg:{base:"blue",_active:"lightblue",_hover:"lightblue",_focused:"lightblue"},font:{base:"white",_active:"pink",_hover:"yellow",_focused:"red"}},warning:{bg:{base:"orange",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}},success:{bg:{base:"lightgreen",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}}},colors:{primary:{base:"#0C2644",800:"#253C57"},secondary:"pink"}},I={body:{backgroundColor:"#16191d",color:"white"},CMainBar:{background:"#21252C",color:"#fff"},CCard:{background:"#21252C",color:"#ffffff","border-color":"#7bbaff"},CButton:{primary:{bg:{base:"#7bbaff",_active:"#026bde",_hover:"#026bde",_focused:"#026bde"},font:{base:"#16191D",_active:"white",_hover:"white",_focused:"white"}},secondary:{bg:{base:"pink",_active:"blue",_hover:"green",_focused:"purple"},font:{base:"purple",_active:"pink",_hover:"white",_focused:"red"}},unstyled:{bg:{base:"inherit",_active:"inherit",_hover:"inherit",_focused:"inherit"},font:{base:"#16191D",_active:"white",_hover:"white",_focused:"white"}}},CAlert:{information:{bg:{base:"#d2e1ff",_active:"lightblue",_hover:"lightblue",_focused:"lightblue"},font:{base:"#16191D",_active:"#16191D",_hover:"#16191D",_focused:"#16191D"}},warning:{bg:{base:"orange",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}},success:{bg:{base:"lightgreen",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}}},colors:{primary:{base:"purple",800:"green",_hover:"yellow"},secondary:"pink"}};async function A(t,o){return Object.entries(t).map(([n,r])=>{const s=pt(n);return s in o.style?[s,r]:!1}).filter(Boolean)}async function vt(t){const o=document.createElement("style");document.head.appendChild(o);const n=o.sheet;for(let r=0;r<t.length;r++){let s=1,l=t[r],a=l[0],i="";Array.isArray(l[1][0])&&(l=l[1],s=0);for(let c=l.length;s<c;s++){const d=l[s];i+=`${d[0]}: ${d[1]}${d[2]?" !important":""};
`}n.insertRule(`${a}{${i}}`,n.cssRules.length)}}function pt(t){return t.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}async function M(t,o,n,r,s){let l=await A(n,r);s==="dark"&&n.dark&&(l=[...l,...await A(n.dark,r)]),await vt([[`${o}[${t}]`,l]]),Object.entries(n).forEach(([a,i])=>{(r.style.hasOwnProperty(a)&&!(a in r)||a==="dark")&&r.removeAttribute(a)})}function V(t){const o=(n,r,s)=>{typeof s=="string"?document.documentElement.style.setProperty(`--${n}-${r}`,s):typeof s=="object"&&Object.entries(s).forEach(([l,a])=>{l.startsWith("_")?o(n,`${r}${l}`,a):o(`${n}-${r}`,l,a)})};Object.entries(t).forEach(([n,r])=>{Object.entries(r).forEach(([s,l])=>{o(n,s,l)})})}function ht(t,o,n){const r=document.createElement("style");r.setAttribute("type","text/css");const s=n.__scopeId?`[${n.__scopeId}]`:"",l=n.__name,a=(i,c)=>{const d=[];return Object.entries(c).forEach(([u,f])=>{const p=u.startsWith("_")?`${i}${u}`:`${i}-${u}`;if(typeof f=="object"&&!Array.isArray(f)&&!u.startsWith("_")){const m=a(p,f);d.push(...m)}else if(u.startsWith("_")){const m=u.split("-").find(y=>y.indexOf("_")!==-1);d.push(`.${l}${s}${m.replace("_",":")} { ${Object.entries(f).map(([y])=>`${y}:var(--${p}-${y})`).join(";")}}`)}else d.push(`.${l}${s} { ${u}:var(--${p}) }`)}),d};Object.entries(t[n.__name]).forEach(([i,c])=>{const d=a(n.__name,{[i]:c});gt(d).forEach(u=>{r.textContent+=`${u} `})}),o.appendChild(r)}function gt(t){const o={};return t.forEach(n=>{const r=n.match(/(.+?)\s*{([^}]+)}/);if(r){const[s,l]=r.slice(1);o[s]||(o[s]=[]),o[s].push(l.trim())}}),Object.entries(o).map(([n,r])=>{const s=r.join("; ");return`${n} { ${s} }`})}const yt={beforeMount(t,o){switch(o==null||o.value,o.arg&&t.classList.add(o.arg),o.arg){case"nowrap":t.classList.add("nowrap")}t.classList.add("row")}},bt={beforeMount(t,o){const n=o==null?void 0:o.value;switch(o.arg&&!parseInt(n)&&console.error("Using directive 'arguments' and 'breakpoints' in value not ALLOWED",`arg:${o.arg}, value: ${n}. Either remove the 'Argument' or 'Breakpoint' from the directive.`),o.arg){case"xs":t.classList.add(`col-xs${n}`);return;case"sm":t.classList.add(`col-sm${n}`);return;case"md":t.classList.add(`col-md${n}`);return;case"lg":t.classList.add(`col-lg${n}`);return}t.classList.add(`col-${n}`)}};var Ct={};function kt(t,o){return e.renderSlot(t.$slots,"default")}const $t=_(Ct,[["render",kt]]),wt={install:(t,o)=>{const n=e.ref(o!=null&&o.colorMode?o.colorMode:"dark");let r=e.reactive(g(v,n.value==="dark"?I:S));if(o.customTheme)try{r=g(r,o.customTheme[n.value])}catch(a){console.error(a)}V(r);function s(){n.value==="light"?(n.value="dark",console.log("darkmode"),r=Object.assign(r,{...I})):(console.log("lightMode"),n.value="light",r=Object.assign(r,{...S}))}e.watch(n,a=>{V(r)}),t.provide("theme",r),t.provide("colorMode",n),t.config.globalProperties.$toggleTheme=a=>s(),t.config.globalProperties.$colorMode=n;const l={beforeMount(a,i){var c;M(`data-id="${i.modifiers??((c=i.value)==null?void 0:c.__scopeId)}"`,a.tagName.toLowerCase(),i.arg,a,n.value)},beforeUpdate(a,i){var c;M(`data-id="${i.modifiers??((c=i.value)==null?void 0:c.__scopeId)}"`,a.tagName.toLowerCase(),i.arg,a,n.value)}};t.directive("styleSetup",l),t.directive("row",yt),t.directive("col",bt),t.component("CThemeProvider",$t);for(const a in $)if($.hasOwnProperty(a)){const i=$[a];r[i.__name]&&ht(r,document.head,i),t.component(i.__name??a,i)}}};exports.default=wt;
