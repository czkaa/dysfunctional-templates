(function(e){function t(t){for(var o,l,s=t[0],i=t[1],c=t[2],u=0,d=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},l={app:0},n={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"41c04c42"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};l[e]?t.push(l[e]):0!==l[e]&&r[e]&&t.push(l[e]=new Promise((function(t,r){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"4450f4e7"}[e]+".css",n=i.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===n))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===o||u===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete l[e],f.parentNode.removeChild(f),r(a)},f.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){l[e]=0})));var o=n[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+l+")",d.name="ChunkLoadError",d.type=o,d.request=l,r[1](d)}n[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dysfunctional-templates/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0c06":function(e,t,r){},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("7a23");const l={xmlns:"http://www.w3.org/2000/svg",version:"1.1",class:"h-0"},n=Object(o["h"])('<defs><filter id="blur" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="0" stdDeviation="3.75" in="SourceGraphic" flood-color="var(--color-primary)" result="blur" flood-opacity="1"></feDropShadow><feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix></filter></defs><defs><filter id="blur-hover" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="0" stdDeviation="3.75" in="SourceGraphic" flood-color="var(--color-tertiary)" result="blur" flood-opacity="1"></feDropShadow><feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix></filter></defs><defs><filter id="blur-xl" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="0" stdDeviation="11" in="SourceGraphic" flood-color="var(--color-primary)" result="blur" flood-opacity="1"></feDropShadow><feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix></filter></defs><defs><filter id="blur-xl-hover" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="0" stdDeviation="11" in="SourceGraphic" flood-color="var(--color-tertiary)" result="blur" flood-opacity="1"></feDropShadow><feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix></filter></defs><defs><filter id="outline" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="0" stdDeviation="2" in="SourceGraphic" flood-color="var(--color-secondary)" result="blur" flood-opacity="1"></feDropShadow><feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="goo"></feColorMatrix><feBlend in="SourceGraphic" in2="goo"></feBlend></filter></defs><defs><filter id="outline-xs" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="0" stdDeviation="0.5" in="SourceGraphic" flood-color="var(--color-secondary)" result="blur" flood-opacity="1"></feDropShadow><feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix></filter></defs><defs><filter id="outline-tertiary" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="0" stdDeviation="1.75" in="SourceGraphic" flood-color="var(--color-tertiary)" result="blur" flood-opacity="2"></feDropShadow><feColorMatrix mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -7" in="blur" result="blur"></feColorMatrix></filter></defs>',7),a=[n];function s(e,t){return Object(o["v"])(),Object(o["f"])("svg",l,a)}var i=r("6b0d"),c=r.n(i);const u={},d=c()(u,[["render",s]]);var f=d,b=r("5502");const p={class:"h-full flex flex-col justify-center space-y-10 filter-outline text-md text-white"},v=Object(o["g"])("div",{class:"w-0 h-3/4 bg-secondary flex-shrink-0 mt-4 transition-all duration-500"},null,-1),m=Object(o["g"])("div",{class:"w-full h-full bg-secondary rounded-md transition-all duration-500"},[Object(o["g"])("div",{class:"transform rotate-90 origin-top-left mt-3 ml-5 whitespace-nowrap"},"Course Info")],-1);var h={__name:"LayoutNav",setup(e){Object(b["b"])();return(e,t)=>{const r=Object(o["C"])("router-link");return Object(o["v"])(),Object(o["f"])("nav",p,[Object(o["i"])(r,{to:"/course",class:"flex w-20 h-48 rounded-xl transition-transform duration-500 transform translate-x-10 hover:translate-x-4 cursor-pointer z-50 group"},{default:Object(o["J"])(()=>[v,m]),_:1})])}}};const x=h;var g=x;const j={"layout-footer":"",class:"w-full h-20 hover:h-24 hover:w-11/12 transform hover:translate-y-4 transition-all duration-1000 p-2 text-xs text-secondary z-50 filter-outline mix-blend-multiply"},w=Object(o["h"])('<div class="w-full h-full flex items-end justify-center filter-blur-xl"><div class="w-1/12 h-1/2 bg-primary"></div><div class="w-1/12 h-3/4 bg-primary"></div><div class="w-2/12 h-1/2 bg-primary"></div><div class="w-3/12 h-full bg-primary"></div><div class="w-1/12 h-1/2 bg-primary"></div><div class="w-1/12 h-1/2 mb-3 bg-primary"></div><div class="w-2/12 h-2/3 bg-primary"></div></div>',1),O=[w];function y(e,t){return Object(o["v"])(),Object(o["f"])("footer",j,O)}const k={},S=c()(k,[["render",y]]);var _=S;const C=e=>(Object(o["y"])("data-v-0faa66d2"),e=e(),Object(o["w"])(),e),D={"basic-resizable":"",class:"w-full h-full"},B={class:"w-full h-full p-1",preserveAspectRatio:"none",version:"1.1",id:"Ebene_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 400 400",style:{"enable-background":"new 0 0 400 400"},"xml:space":"preserve"},M=C(()=>Object(o["g"])("rect",{"vector-effect":"non-scaling-stroke",class:"custom-stroke",x:"1",y:"1",width:"398",height:"398"},null,-1)),A=C(()=>Object(o["g"])("line",{"vector-effect":"non-scaling-stroke",class:"custom-stroke",x1:"0",y1:"400",x2:"400",y2:"0"},null,-1)),G=C(()=>Object(o["g"])("line",{"vector-effect":"non-scaling-stroke",class:"custom-stroke",x1:"0",y1:"0",x2:"400",y2:"400"},null,-1)),T=[M,A,G],z={class:"absolute top-0 left-0 w-2.5",x:"0px",y:"0px",viewBox:"0 0 6 6",style:{"enable-background":"new 0 0 6 6"},"xml:space":"preserve"},I=C(()=>Object(o["g"])("rect",{"vector-effect":"non-scaling-stroke",class:"custom-box",x:"0.2",y:"0.2",width:"5.5",height:"5.5"},null,-1)),N=[I],L={class:"absolute top-0 right-0 w-2.5",x:"0px",y:"0px",viewBox:"0 0 6 6",style:{"enable-background":"new 0 0 6 6"},"xml:space":"preserve"},H=C(()=>Object(o["g"])("rect",{"vector-effect":"non-scaling-stroke",class:"custom-box",x:"0.2",y:"0.2",width:"5.5",height:"5.5"},null,-1)),E=[H],P={class:"absolute bottom-0 w-2.5",x:"0px",y:"0px",viewBox:"0 0 6 6",style:{"enable-background":"new 0 0 6 6"},"xml:space":"preserve"},R=C(()=>Object(o["g"])("rect",{"vector-effect":"non-scaling-stroke",class:"custom-box",x:"0.2",y:"0.2",width:"5.5",height:"5.5"},null,-1)),q=[R],J={class:"absolute right-0 bottom-0 w-2.5",x:"0px",y:"0px",viewBox:"0 0 6 6",style:{"enable-background":"new 0 0 6 6"},"xml:space":"preserve"},U=C(()=>Object(o["g"])("rect",{"vector-effect":"non-scaling-stroke",class:"custom-box custom-box-fill",x:"0.2",y:"0.2",width:"5.5",height:"5.5"},null,-1)),F=[U];function K(e,t){return Object(o["v"])(),Object(o["f"])("div",D,[(Object(o["v"])(),Object(o["f"])("svg",B,T)),(Object(o["v"])(),Object(o["f"])("svg",z,N)),(Object(o["v"])(),Object(o["f"])("svg",L,E)),(Object(o["v"])(),Object(o["f"])("svg",P,q)),(Object(o["v"])(),Object(o["f"])("svg",J,F))])}r("c351");const V={},W=c()(V,[["render",K],["__scopeId","data-v-0faa66d2"]]);var Y=W;const $={"snippet-resizable":"",resize:"",class:"resize overflow-hidden relative p-3 filter-outline"};var Q={__name:"SnippetResizable",setup(e){return(e,t)=>(Object(o["v"])(),Object(o["f"])("div",$,[Object(o["B"])(e.$slots,"default"),Object(o["i"])(Y,{class:"pointer-events-none absolute top-0 left-0 w-full h-full"})]))}};r("ea2d");const X=c()(Q,[["__scopeId","data-v-24e825ac"]]);var Z=X;const ee={"basic-input":"",class:"w-full h-full"},te=["placeholder"],re=["placeholder"];var oe={__name:"BasicInput",props:{placeholder:String,text:String,classNames:String,resize:{type:Boolean,default:!1}},setup(e){const t=e,r=(Object(b["b"])(),Object(o["A"])("")),l=Object(o["A"])(0);var n=null;const a=Object(o["A"])(1);function s(){l.value<t.text.length?(l.value+=a.value,a.value++,r.value=t.text.slice(0,l.value)):clearInterval(n)}function i(){l.value++,l.value<10?r.value=t.text.slice(0,l.value):n=setInterval(s,100)}return(l,n)=>(Object(o["v"])(),Object(o["f"])("section",ee,[t.resize?Object(o["K"])((Object(o["v"])(),Object(o["f"])("textarea",{key:0,class:Object(o["p"])([e.classNames,"transition-all duration-500 w-full h-full resize-none min-h-textarea sm:min-h-textarea-sm"]),spellcheck:"false",wrap:"hard",placeholder:t.placeholder,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),onInput:i},null,42,te)),[[o["H"],r.value]]):Object(o["K"])((Object(o["v"])(),Object(o["f"])("input",{key:1,class:Object(o["p"])([e.classNames,"transition-all duration-500 w-full"]),spellcheck:"false",wrap:"hard",placeholder:t.placeholder,"onUpdate:modelValue":n[1]||(n[1]=e=>r.value=e),onInput:i},null,42,re)),[[o["H"],r.value]])]))}};const le=oe;var ne=le;function ae(e,t){const r=ne,l=Z;return Object(o["v"])(),Object(o["f"])("div",{class:"w-10/12 sm:w-full p-4 bg-primary shadow-xs",style:Object(o["q"])({maskImage:"url('/dysfunctional-templates/background.svg')",maskSize:"cover"})},[Object(o["i"])(l,{class:"w-9/12 hover:bg-primary transition-all duration-500 mx-auto"},{default:Object(o["J"])(()=>[Object(o["i"])(r,{resize:!0,class:"filter-outline-xs",classNames:"w-full text-md text-secondary leading-1 outline-none bg-transparent bg-opacity-20 placeholder-secondary sm:filter-none",text:"The current web is shaped by the increasingly simplified means of creating websites without writing a line of code. In this course, we will investigate the relationship between placeholder texts and content, between conventions and generalizability, and usability. We will discuss different viewpoints, visit existing websites, and inspect tools from AI-powered template builders to simple text editors. In conducting small code and thought experiments, we will collectively approximate our own, antagonistic version of the functional template: The dysfunctional template may respond to readability with confusion or turn hierarchies upside down. It can be slow, inefficient, and dilletantish. It may question decisions instead of taking them away. The course will start off with a basic introduction to HTML and CSS. No prior coding experience is needed and students with no coding experience are especially encouraged to participate.",placeholder:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]),_:1})],4)}const se={},ie=c()(se,[["render",ae]]);var ce=ie;const ue={class:"wireframe-text whitespace-nowrap uppercase group-hover:tracking-widest transition-tracking duration-500 filter-blur"},de={class:"whitespace-nowrap uppercase w-full z-50 absolute top-0 group-hover:tracking-widest transition-tracking duration-500 text-primary filter-outline"};var fe={__name:"TemplateNavButton",props:{text:String,path:String},setup(e){const t=e,r=Object(o["A"])(null);return(l,n)=>{const a=Object(o["C"])("router-link");return Object(o["v"])(),Object(o["d"])(a,{to:t.path,"template-nav-button":"",class:"relative group filter-outline",ref_key:"root",ref:r},{default:Object(o["J"])(()=>[Object(o["g"])("div",ue,Object(o["F"])(e.text),1),Object(o["g"])("div",de,Object(o["F"])(t.text),1)]),_:1},8,["to"])}}};const be=fe;var pe=be;const ve={"layout-nav":"",class:"w-full flex justify-center items-start text-lg sm:text-md text-right space-x-10 sm:space-x-6 mix-blend-multiply"};function me(e,t){const r=pe;return Object(o["v"])(),Object(o["f"])("nav",ve,[Object(o["i"])(r,{text:"Subpage1",path:"/course"}),Object(o["i"])(r,{text:"Subpage2",path:"/course"}),Object(o["i"])(r,{text:"Subpage3",path:"/course"})])}const he={},xe=c()(he,[["render",me]]);var ge=xe;const je={"layout-grid":"",class:"w-full h-full z-50 pointer-events-none"},we=Object(o["g"])("div",{class:"pointer-events-auto cursor-pointer w-20 h-full border-r border-secondary absolute top-0 left-0 transition-all duration-1000"},null,-1),Oe=Object(o["g"])("div",{class:"w-20 h-full border-l border-secondary absolute top-0 right-0 peer"},null,-1),ye=Object(o["g"])("div",{class:"w-full -mt-0.5 h-35 border-b border-secondary absolute top-0 left-0 peer"},null,-1),ke=Object(o["g"])("div",{class:"w-full h-10 border-t border-secondary absolute bottom-0 left-0 peer"},null,-1),Se=[we,Oe,ye,ke];function _e(e,t){return Object(o["v"])(),Object(o["f"])("div",je,Se)}const Ce={},De=c()(Ce,[["render",_e]]);var Be=De;const Me={"layout-header":"",class:"border border-secondary rounded-full hover:bg-primary w-10/12 hover:w-11/12 cursor-pointer transition-all duration-1000 flex flex-col justify-center items-center overflow-hidden flex-shrink-0"},Ae={class:"text-xl font-sans p-2"};var Ge={__name:"TemplateHeader",setup(e){Object(o["A"])("Insert Title Here");return(e,t)=>{const r=ne;return Object(o["v"])(),Object(o["f"])("header",Me,[Object(o["g"])("h1",Ae,[Object(o["g"])("div",null,[Object(o["i"])(r,{placeholder:"Insert Title Here",text:"Dysfunctional Templates",class:"filter-outline",classNames:"h-28 sm:h-20 -mt-1 whitespace-nowrap text-primary tracking-tight w-full overflow-hidden leading-none outline-none bg-transparent text-center placeholder-primary"})])])])}}};const Te=Ge;var ze=Te;const Ie=Object(o["g"])("div",{class:"fixed top-1/3 left-20 border-secondary border-l pb-10 -ml-0.25"},[Object(o["g"])("div",{class:"w-1 h-6 bg-secondary rounded-full -ml-0.5 transform rotate-12 mt-4"}),Object(o["g"])("div",{class:"w-0.25 h-20 bg-secondary rounded-full -mt-2"})],-1),Ne=Object(o["g"])("h2",{class:"filter-outline-xs fixed top-0 text-secondary z-50 text-sm uppercase w-full text-center xs:mt-1"}," Local Services Wireframe 3 ",-1);var Le={__name:"Template",setup(e){const t=Object(b["b"])(),r=Object(o["b"])(()=>t.state.view),l=Object(o["A"])(!1);return Object(o["t"])(()=>{setTimeout(()=>{l.value=!0},1e3)}),(e,t)=>{const l=ze,n=Be,a=ge,s=ce,i=_;return Object(o["v"])(),Object(o["f"])("div",{class:Object(o["p"])(["fixed w-full h-full flex flex-col items-center overflow-hidden xs:px-3 filter-outline",["Home"===Object(o["G"])(r)?"overflow-y-auto":"overflow-y-hidden"]])},[Object(o["i"])(l,{class:"z-50 sticky top-3 xs:top-6 xs:transform xs:-translate-y-2"}),Object(o["i"])(n,{class:"absolute top-0 left-0"}),Object(o["i"])(a,{class:"z-50 sticky top-40 xs:top-26 transform -translate-y-8 xs:-translate-y-12"}),Object(o["i"])(s,{class:"mt-0 xs:mt-12"}),Object(o["i"])(i,{class:"fixed bottom-1.5 xs:bottom-2"}),Ie,Ne],2)}}};const He=Le;var Ee=He,Pe=(r("1052"),r("6605")),Re=(r("1503"),{__name:"App",setup(e){const t=Object(b["b"])(),r=Object(Pe["c"])(),l=(Object(o["A"])(!0),Object(o["A"])(null),Object(o["b"])(()=>t.state.view));return Object(o["t"])(()=>{console.log("MOUNTING"),setTimeout(()=>{let e=document.querySelectorAll(".filter-outline, .filter-blur, .filter-outline-xs, .filter-blur-xl, .outline-tertiary");for(const t of e)t.style.transform="translateY(0.1px)";document.body.classList.add("mounted")},1)}),(e,t)=>{const n=Ee,a=g,s=f,i=Object(o["C"])("router-view");return Object(o["v"])(),Object(o["f"])("div",null,[Object(o["i"])(n,{class:Object(o["p"])(["fixed w-full h-full top-0 left-0 -z-50","Home"!==Object(o["G"])(l)?"pointer-events-none":"pointer-events-auto"])},null,8,["class"]),Object(o["i"])(a,{class:"fixed top-0 right-0"}),Object(o["i"])(s),Object(o["i"])(i,null,{default:Object(o["J"])(({Component:e})=>[Object(o["i"])(o["a"],null,{default:Object(o["J"])(()=>["Home"!==Object(o["G"])(r).name?(Object(o["v"])(),Object(o["d"])(Object(o["D"])(e),{key:Object(o["G"])(r).path})):Object(o["e"])("",!0)]),_:2},1024)]),_:1})])}}});r("6fd6");const qe=Re;var Je=qe;const Ue={"page-home":""};function Fe(e,t){return Object(o["v"])(),Object(o["f"])("div",Ue)}const Ke={},Ve=c()(Ke,[["render",Fe]]);var We=Ve;const Ye={home:"",class:"w-full h-full"};function $e(e,t){const r=We;return Object(o["v"])(),Object(o["f"])("div",Ye,[Object(o["i"])(r)])}const Qe={},Xe=c()(Qe,[["render",$e]]);var Ze=Xe;const et=[{path:"/",name:"Home",component:Ze},{path:"/course",name:"Course",component:()=>r.e("about").then(r.bind(null,"9f72"))},{name:"Course",path:"/:pathMatch(.*)",component:()=>r.e("about").then(r.bind(null,"9f72"))}],tt=Object(Pe["a"])({history:Object(Pe["b"])("/dysfunctional-templates/"),routes:et});var rt=tt,ot=Object(b["a"])({state:{view:"Home"},mutations:{setView(e,t){e.view=t}},actions:{},modules:{}});r("ba8c");Object(o["c"])(Je).use(ot).use(rt).mount("#app")},"6fd6":function(e,t,r){"use strict";r("cc6e")},ba8c:function(e,t,r){},bf84:function(e,t,r){},c351:function(e,t,r){"use strict";r("0c06")},cc6e:function(e,t,r){},ea2d:function(e,t,r){"use strict";r("bf84")}});
//# sourceMappingURL=app.a1b3022a.js.map