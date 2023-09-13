"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),x={class:"CMainBar"},M=e.defineComponent({__name:"CMainBar",setup(n){var r,c;e.useCssVars(a=>({"4740e667":o.background,"3e5602ec":o.color}));const t=e.inject("theme"),o={background:(r=t==null?void 0:t.CMainBar)==null?void 0:r.background,color:(c=t==null?void 0:t.CMainBar)==null?void 0:c.color};return console.log(o),e.computed({get(){return t.CMainBar},set(a){return a}}),(a,s)=>{const i=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createElementBlock("header",x,[e.renderSlot(a.$slots,"default",{},void 0,!0)])),[[i,a.$.type,a.$attrs]])}}});const _=(n,t)=>{const o=n.__vccOpts||n;for(const[r,c]of t)o[r]=c;return o},j=_(M,[["__scopeId","data-v-0b1f8d92"]]);var O={},T={class:"CMain"};function E(n,t){var o=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createElementBlock("main",T,[e.renderSlot(n.$slots,"default",{},void 0,!0)])),[[o,n.$.type,n.$attrs]])}const A=_(O,[["render",E],["__scopeId","data-v-994719c5"]]),m={breakpoints:{lg:"1620px",md:"1240px",sm:"1000px",xs:"720px"},layout:{background:"blue"},spaces:{base:"4px",sm:"4px"},colors:{primary:"#007bff",secondary:"#6c757d"},radii:{xl:"24px",lg:"16px",md:"8px",xs:"2px"},fontSize:{base:"1rem"},lineHeights:{base:"24px"},fontWeights:{bold:"900"}};function $(n,t){const o={...n};for(const r in t)t.hasOwnProperty(r)&&(t[r]&&t[r].constructor===Object?o[r]&&o[r].constructor===Object?o[r]=$(o[r],t[r]):o[r]={...t[r]}:o[r]=t[r]);return o}const V={padding:"10px 28px",letterSpacing:"0.6px",height:"10",margin:"5px",textAlign:"center",fontSize:m.fontSize.base,width:"100%",maxWidth:"fit-content",borderRadius:m.radii.xl,lineHeight:m.lineHeights.base,fontWeight:m.fontWeights.bold},b=({colors:n,colorMode:t,additionalStyling:o})=>{let r={light:{bg:n.bg.base,color:n.font.base,_hover:{bg:n.bg._hover,color:n.font._hover},_active:{bg:n.bg._active}},dark:{bg:n.bg.base,color:n.font.base,_hover:{bg:n.bg._hover,color:n.font._hover},_active:{bg:n.bg._active}}};return $(r[t],o)},q=n=>{switch(n.variant){case"primary":return b(n);case"secondary":return b(n);default:return b(n)}},k=n=>({...V,...q(n)});function h(){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let t="";for(let o=0;o<6;o++){const r=Math.floor(Math.random()*n.length);t+=n.charAt(r)}return t}const L=e.defineComponent({__name:"CIcon",props:{as:{},space:{}},setup(n){const t=h();return(o,r)=>{const c=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.as),{"data-id":e.unref(t),class:"CIcon"},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[c,o.$.type,o.$attrs,e.unref(t)]])}}});const y=_(L,[["__scopeId","data-v-dab21008"]]),R=e.defineComponent({__name:"CButton",props:{as:{},to:{},type:{},variant:{},isDisabled:{},isLoading:{},isActive:{},loadingText:{},iconSpacing:{},leftIcon:{},rightIcon:{}},setup(n){const{variant:t="primary",as:o="button",...r}=n;e.useCssVars(d=>({"26f007e2":e.unref(l).lineHeight,"7f7cd286":e.unref(l).padding,ae2baa2e:e.unref(l).letterSpacing,"71899e0a":e.unref(l).height,"60e1b4fc":e.unref(l).margin,"3c3a14f8":e.unref(l).textAlign,b739269c:e.unref(l).borderRadius,"2fa49bc4":e.unref(l).fontSize,"1283791c":e.unref(l).width,"31b75196":e.unref(l).maxWidth,"40ffcd0a":e.unref(l).fontWeight,"1853b619":e.unref(l).bg,"14b175e2":e.unref(l).color,19382742:e.unref(l)._hover.bg,64985174:e.unref(l)._hover.color})),console.log(o);const c=e.inject("theme"),a=e.inject("colorMode"),s=h();let i=e.computed({get(){return c.CButton[t]},set(d){return d}}),l=e.ref(k({...r,colors:i.value,colorMode:a.value}));return e.watch(()=>c,d=>{l.value=k({...r,colors:i.value,colorMode:a.value})},{deep:!0}),(d,u)=>{const p=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(d.as??"button"),{"data-id":e.unref(s),class:"CButton",disabled:d.isDisabled},{default:e.withCtx(()=>[d.leftIcon?(e.openBlock(),e.createBlock(y,{key:0,as:d.leftIcon,"margin-right":"8px"},null,8,["as"])):e.createCommentVNode("",!0),e.renderSlot(d.$slots,"default",{},void 0,!0),d.rightIcon?(e.openBlock(),e.createBlock(y,{key:1,as:d.rightIcon,"margin-left":"8px"},null,8,["as"])):e.createCommentVNode("",!0)]),_:3},8,["data-id","disabled"])),[[p,d.$.type,d.$attrs,e.unref(s)]])}}});const N=_(R,[["__scopeId","data-v-ac16b061"]]),W=e.defineComponent({__name:"CCard",props:{as:{}},setup(n){e.useCssVars(c=>({"6f7ac7bf":o.borderRadius}));const o={borderRadius:e.inject("theme").radii.lg},r=h();return(c,a)=>{const s=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("div"),{"data-id":e.unref(r),class:"CCard"},{default:e.withCtx(()=>[e.renderSlot(c.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[s,c.$.type,c.$attrs,e.unref(r)]])}}});const P=_(W,[["__scopeId","data-v-d073c29f"]]),z=e.defineComponent({__name:"CCardTitle",props:{as:{}},setup(n){e.useCssVars(c=>({"64e4ddeb":t.fontWeight,19608798:t.fontSize})),e.inject("theme");const t={fontWeight:"900",fontSize:"18px"};function o(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let a="";for(let s=0;s<6;s++){const i=Math.floor(Math.random()*c.length);a+=c.charAt(i)}return a}const r=o();return(c,a)=>{const s=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("h3"),{"data-id":e.unref(r),class:"CCardTitle"},{default:e.withCtx(()=>[e.renderSlot(c.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[s,c.$.type,c.$attrs,e.unref(r)]])}}});const U=_(z,[["__scopeId","data-v-27df9289"]]),F=e.defineComponent({__name:"CCardContent",props:{as:{}},setup(n){return e.inject("theme"),(t,o)=>{const r=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("div"),{class:"CCardContent"},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default",{},void 0,!0)]),_:3})),[[r,t.$.type,t.$attrs]])}}});const H=_(F,[["__scopeId","data-v-0f0761fc"]]),G=["data-id"],Z=e.defineComponent({__name:"CContainer",setup(n){const t=h();return(o,r)=>{const c=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createElementBlock("section",{"data-id":e.unref(t),class:"CContainer"},[e.renderSlot(o.$slots,"default",{},void 0,!0)],8,G)),[[c,o.$.type,o.$attrs,e.unref(t)]])}}});const J=_(Z,[["__scopeId","data-v-ba427fa7"]]),K=e.defineComponent({__name:"CText",props:{as:{}},setup(n){var c;e.useCssVars(a=>({"77ee5eb0":o.fontSize,"0d5b218e":o.marginBottom}));const t=e.inject("theme"),o={fontSize:"16px",color:(c=t==null?void 0:t.body)==null?void 0:c.color,marginBottom:t.spaces.sm},r=h();return(a,s)=>{const i=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.as),{"data-id":e.unref(r),class:"CText"},{default:e.withCtx(()=>[e.renderSlot(a.$slots,"default",{},void 0,!0)]),_:3},8,["data-id"])),[[i,a.$.type,a.$attrs,e.unref(r)]])}}});const D=_(K,[["__scopeId","data-v-a98c7614"]]),Q=e.defineComponent({__name:"CAlert",setup(n){const{variant:t="information",as:o="div",...r}=n,c=e.inject("theme");e.inject("colorMode");const a=h();return e.computed({get(){return c.CAlert[t]},set(s){return s}}),(s,i)=>{const l=e.resolveDirective("style-setup");return e.withDirectives((e.openBlock(),e.createBlock(e.resolveDynamicComponent("div"),{"data-id":e.unref(a),class:"CAlert"},{default:e.withCtx(()=>[s.variantIcon?(e.openBlock(),e.createBlock(y,{key:0,as:s.variantIcon,"margin-right":"12px",size:"24px"},null,8,["as"])):e.createCommentVNode("",!0),e.createElementVNode("div",null,[s.title?(e.openBlock(),e.createBlock(D,{key:0,as:"h4"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(s.title),1)]),_:1})):e.createCommentVNode("",!0),e.renderSlot(s.$slots,"default",{},void 0,!0)])]),_:3},8,["data-id"])),[[l,s.$.type,s.$attrs,e.unref(a)]])}}});const X=_(Q,[["__scopeId","data-v-f4ddcf58"]]);function Y(n){let t=e.ref();function o(a){if(!n.rules)return;const i=n.rules.map(l=>{const d=l(a);if(d||d!==!0)return d}).find(l=>l!==!0);switch(typeof i){case"string":case"boolean":t.value=i!==!1?i:!0;break;default:t.value=!1;break}return t.value===!1}function r(a,s){if(a===s)return!0;if(a instanceof Date&&s instanceof Date&&a.getTime()!==s.getTime()||a!==Object(a)||s!==Object(s))return!1;const i=Object.keys(a);return i.length!==Object.keys(s).length?!1:i.every(l=>r(a[l],s[l]))}const{rules:c}=e.toRefs(n);return e.watch(()=>c,(a,s)=>{r(a,s)||o()},{deep:!0}),e.onMounted(()=>{o()}),{validate:o,error:t}}const ee={class:"form-box"},te=e.createElementVNode("input",{class:"form-input",type:"text",required:"",minlength:"6",placeholder:"tester"},null,-1),oe=e.createElementVNode("label",{for:"",class:"label"},"tester ",-1),re=e.createElementVNode("span",{class:"error"},"Field Required",-1),ne=[te,oe,re],se=e.defineComponent({__name:"CInput",props:{modelValue:{},name:{},placeholder:{},icon:{},rules:{},label:{},type:{},id:{}},emits:["input"],setup(n,{emit:t}){const o=n,{error:r,validate:c}=Y(o);let a=e.ref(o.modelValue);return e.watch(a,s=>{t("input",s),o.rules&&c(s)}),(s,i)=>(e.openBlock(),e.createElementBlock("div",ee,ne))}});const ae=e.defineComponent({__name:"CForm",setup(n,{expose:t}){const o=e.ref(),r=e.ref(!1),c=e.computed({get(){var s,i,l,d;if(r.value){const u=[],p=(s=o.value)==null?void 0:s.elements;for(let v=0;v<p.length;v++){const f=p[v];(i=f==null?void 0:f.__vue__)!=null&&i.isInvalid&&((l=f.__vue__)==null?void 0:l.isInvalid)===!0&&u.push(!0),!f.__vue__==null&&((d=f.validity)==null?void 0:d.valid)!==!0&&u.push(!0)}return r.value=!1,u.length===0}return r.value=!1,!1},set(s){return s}});async function a(){return r.value=!0,await e.nextTick(),c.value}return t({validation:a}),(s,i)=>(e.openBlock(),e.createElementBlock("form",{ref_key:"form",ref:o},[e.renderSlot(s.$slots,"default")],512))}}),C={CMainBar:j,CMain:A,CButton:N,CCard:P,CContainer:J,CCardTitle:U,CCardContent:H,CText:D,CAlert:X,CIcon:y,CForm:ae,CInput:se},w={body:{backgroundColor:"white",color:"black"},CMainBar:{background:"pink",color:"red"},CCard:{background:"#ffffff",color:"#000000","border-color":"#7bbaff"},CButton:{primary:{bg:{base:"#253C57",_active:"pink",_hover:"#0C2644",_focused:"red"},font:{base:"white",_active:"pink",_hover:"yellow",_focused:"red"}},secondary:{bg:{base:"blue",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"purple",_active:"pink",_hover:"white",_focused:"red"}}},CAlert:{information:{bg:{base:"blue",_active:"lightblue",_hover:"lightblue",_focused:"lightblue"},font:{base:"white",_active:"pink",_hover:"yellow",_focused:"red"}},warning:{bg:{base:"orange",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}},success:{bg:{base:"lightgreen",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}}},colors:{primary:{base:"#0C2644",800:"#253C57"},secondary:"pink"}},B={body:{backgroundColor:"#16191d",color:"white"},CMainBar:{background:"#21252C",color:"#fff"},CCard:{background:"#21252C",color:"#ffffff","border-color":"#7bbaff"},CButton:{primary:{bg:{base:"#7bbaff",_active:"#026bde",_hover:"#026bde",_focused:"#026bde"},font:{base:"#16191D",_active:"white",_hover:"white",_focused:"white"}},secondary:{bg:{base:"pink",_active:"blue",_hover:"green",_focused:"purple"},font:{base:"purple",_active:"pink",_hover:"white",_focused:"red"}}},CAlert:{information:{bg:{base:"#d2e1ff",_active:"lightblue",_hover:"lightblue",_focused:"lightblue"},font:{base:"#16191D",_active:"#16191D",_hover:"#16191D",_focused:"#16191D"}},warning:{bg:{base:"orange",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}},success:{bg:{base:"lightgreen",_active:"yellow",_hover:"green",_focused:"purple"},font:{base:"black",_active:"pink",_hover:"white",_focused:"red"}}},colors:{primary:{base:"purple",800:"green",_hover:"yellow"},secondary:"pink"}};async function ce(n,t){return Object.entries(n).map(([o,r])=>{const c=le(o);return c in t.style?[c,r]:!1}).filter(Boolean)}async function ie(n){const t=document.createElement("style");document.head.appendChild(t);const o=t.sheet;for(let r=0;r<n.length;r++){let c=1,a=n[r],s=a[0],i="";Array.isArray(a[1][0])&&(a=a[1],c=0);for(let l=a.length;c<l;c++){const d=a[c];i+=`${d[0]}: ${d[1]}${d[2]?" !important":""};
`}o.insertRule(`${s}{${i}}`,o.cssRules.length)}}function le(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}async function I(n,t,o,r){const c=await ce(o,r);await ie([[`${t}[${n}]`,c]]),Object.entries(o).forEach(([a,s])=>{r.style.hasOwnProperty(a)&&!(a in r)&&(console.log("attr",a),r.removeAttribute(a))})}function S(n){const t=(o,r,c)=>{typeof c=="string"?document.documentElement.style.setProperty(`--${o}-${r}`,c):typeof c=="object"&&Object.entries(c).forEach(([a,s])=>{a.startsWith("_")?t(o,`${r}${a}`,s):t(`${o}-${r}`,a,s)})};Object.entries(n).forEach(([o,r])=>{Object.entries(r).forEach(([c,a])=>{t(o,c,a)})})}function de(n,t,o){const r=document.createElement("style");r.setAttribute("type","text/css");const c=o.__scopeId?`[${o.__scopeId}]`:"",a=o.__name,s=(i,l)=>{const d=[];return Object.entries(l).forEach(([u,p])=>{const v=u.startsWith("_")?`${i}${u}`:`${i}-${u}`;if(typeof p=="object"&&!Array.isArray(p)&&!u.startsWith("_")){const f=s(v,p);d.push(...f)}else if(u.startsWith("_")){const f=u.split("-").find(g=>g.indexOf("_")!==-1);d.push(`.${a}${c}${f.replace("_",":")} { ${Object.entries(p).map(([g])=>`${g}:var(--${v}-${g})`).join(";")}}`)}else d.push(`.${a}${c} { ${u}:var(--${v}) }`)}),d};Object.entries(n[o.__name]).forEach(([i,l])=>{const d=s(o.__name,{[i]:l});ue(d).forEach(u=>{r.textContent+=`${u} `})}),t.appendChild(r)}function ue(n){const t={};return n.forEach(o=>{const r=o.match(/(.+?)\s*{([^}]+)}/);if(r){const[c,a]=r.slice(1);t[c]||(t[c]=[]),t[c].push(a.trim())}}),Object.entries(t).map(([o,r])=>{const c=r.join("; ");return`${o} { ${c} }`})}const _e={beforeMount(n,t){t==null||t.value,t.arg&&n.classList.add(t.arg),n.classList.add("row")}},fe={beforeMount(n,t){const o=t==null?void 0:t.value;switch(t.arg&&!parseInt(o)&&console.error("Using directive 'arguments' and 'breakpoints' in value not ALLOWED",`arg:${t.arg}, value: ${o}. Either remove the 'Argument' or 'Breakpoint' from the directive.`),t.arg){case"xs":n.classList.add(`col-xs${o}`);return;case"sm":n.classList.add(`col-sm${o}`);return;case"md":n.classList.add(`col-md${o}`);return;case"lg":n.classList.add(`col-lg${o}`);return}n.classList.add(`col-${o}`)}};var pe={};function ve(n,t){return e.renderSlot(n.$slots,"default")}const he=_(pe,[["render",ve]]),me={install:(n,t)=>{const o=e.ref(t!=null&&t.colorMode?t.colorMode:"dark");let r=e.reactive($(m,o.value==="dark"?B:w));if(t.customTheme)try{r=Object.assign(r,{...t.customTheme[o.value]})}catch(s){console.error(s)}S(r);function c(){o.value==="light"?(o.value="dark",console.log("darkmode"),r=Object.assign(r,{...B})):(console.log("lightMode"),o.value="light",r=Object.assign(r,{...w}))}e.watch(o,s=>{S(r)}),n.provide("theme",r),n.provide("colorMode",o),n.config.globalProperties.$toggleTheme=s=>c();const a={beforeMount(s,i){var l;I(`data-id="${i.modifiers??((l=i.value)==null?void 0:l.__scopeId)}"`,s.tagName.toLowerCase(),i.arg,s)},beforeUpdate(s,i){var l;I(`data-id="${i.modifiers??((l=i.value)==null?void 0:l.__scopeId)}"`,s.tagName.toLowerCase(),i.arg,s)}};n.directive("styleSetup",a),n.directive("row",_e),n.directive("col",fe),n.component("CThemeProvider",he);for(const s in C)if(C.hasOwnProperty(s)){const i=C[s];i.__name==="CIcon"&&console.log("CICON!!",i),r[i.__name]&&de(r,document.head,i),n.component(i.__name??s,i)}}};exports.default=me;
