import{a as V,L as H,M as p,N as re,o as C,O as ae,d as I,g,P,j as w,k as b,Q as B,R as O,S as Q,T as me,U as X,V as W,W as he,X as ge,Y as _e,Z as ve,n as U,q as ke,e as S,c as $,u as k,b as L,h as q,_ as ie}from"../chunks/scheduler.DwzwfC0c.js";import{S as A,i as T,a as _,t as v,b as M,d as y,m as E,e as N}from"../chunks/index.DQqRNnd8.js";import{e as Y,g as R,a as ce,B as be,S as we,c as x}from"../chunks/index.BVap5Q6p.js";import{d as pe,w as J}from"../chunks/index.lVbWG5kN.js";const Se=!0,$e="always",ot=Object.freeze(Object.defineProperty({__proto__:null,prerender:Se,trailingSlash:$e},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-svelte v0.340.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},ee=Me;function te(o,e,l){const t=o.slice();return t[10]=e[l][0],t[11]=e[l][1],t}function F(o){let e,l=[o[11]],t={};for(let n=0;n<l.length;n+=1)t=p(t,l[n]);return{c(){e=re(o[10]),this.h()},l(n){e=ae(n,o[10],{}),I(e).forEach(g),this.h()},h(){P(e,t)},m(n,s){w(n,e,s)},p(n,s){P(e,t=R(l,[s&32&&n[11]]))},d(n){n&&g(e)}}}function ne(o){let e=o[10],l,t=o[10]&&F(o);return{c(){t&&t.c(),l=C()},l(n){t&&t.l(n),l=C()},m(n,s){t&&t.m(n,s),w(n,l,s)},p(n,s){n[10]?e?V(e,n[10])?(t.d(1),t=F(n),e=n[10],t.c(),t.m(l.parentNode,l)):t.p(n,s):(t=F(n),e=n[10],t.c(),t.m(l.parentNode,l)):e&&(t.d(1),t=null,e=n[10])},d(n){n&&g(l),t&&t.d(n)}}}function ye(o){let e,l,t,n,s,r=Y(o[5]),a=[];for(let i=0;i<r.length;i+=1)a[i]=ne(te(o,r,i));const c=o[9].default,d=H(c,o,o[8],null);let h=[ee,o[6],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":t=o[4]?Number(o[3])*24/Number(o[2]):o[3]},{class:n=`lucide-icon lucide lucide-${o[0]} ${o[7].class??""}`}],f={};for(let i=0;i<h.length;i+=1)f=p(f,h[i]);return{c(){e=re("svg");for(let i=0;i<a.length;i+=1)a[i].c();l=C(),d&&d.c(),this.h()},l(i){e=ae(i,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var u=I(e);for(let m=0;m<a.length;m+=1)a[m].l(u);l=C(),d&&d.l(u),u.forEach(g),this.h()},h(){P(e,f)},m(i,u){w(i,e,u);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(e,null);b(e,l),d&&d.m(e,null),s=!0},p(i,[u]){if(u&32){r=Y(i[5]);let m;for(m=0;m<r.length;m+=1){const z=te(i,r,m);a[m]?a[m].p(z,u):(a[m]=ne(z),a[m].c(),a[m].m(e,l))}for(;m<a.length;m+=1)a[m].d(1);a.length=r.length}d&&d.p&&(!s||u&256)&&B(d,c,i,i[8],s?Q(c,i[8],u,null):O(i[8]),null),P(e,f=R(h,[ee,u&64&&i[6],(!s||u&4)&&{width:i[2]},(!s||u&4)&&{height:i[2]},(!s||u&2)&&{stroke:i[1]},(!s||u&28&&t!==(t=i[4]?Number(i[3])*24/Number(i[2]):i[3]))&&{"stroke-width":t},(!s||u&129&&n!==(n=`lucide-icon lucide lucide-${i[0]} ${i[7].class??""}`))&&{class:n}]))},i(i){s||(_(d,i),s=!0)},o(i){v(d,i),s=!1},d(i){i&&g(e),me(a,i),d&&d.d(i)}}}function Ee(o,e,l){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=X(e,t),{$$slots:s={},$$scope:r}=e,{name:a}=e,{color:c="currentColor"}=e,{size:d=24}=e,{strokeWidth:h=2}=e,{absoluteStrokeWidth:f=!1}=e,{iconNode:i}=e;return o.$$set=u=>{l(7,e=p(p({},e),W(u))),l(6,n=X(e,t)),"name"in u&&l(0,a=u.name),"color"in u&&l(1,c=u.color),"size"in u&&l(2,d=u.size),"strokeWidth"in u&&l(3,h=u.strokeWidth),"absoluteStrokeWidth"in u&&l(4,f=u.absoluteStrokeWidth),"iconNode"in u&&l(5,i=u.iconNode),"$$scope"in u&&l(8,r=u.$$scope)},e=W(e),[a,c,d,h,f,i,n,e,r,s]}class ue extends A{constructor(e){super(),T(this,e,Ee,ye,V,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function Ne(o){let e;const l=o[2].default,t=H(l,o,o[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&B(t,l,n,n[3],e?Q(l,n[3],s,null):O(n[3]),null)},i(n){e||(_(t,n),e=!0)},o(n){v(t,n),e=!1},d(n){t&&t.d(n)}}}function Ce(o){let e,l;const t=[{name:"sun"},o[1],{iconNode:o[0]}];let n={$$slots:{default:[Ne]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)n=p(n,t[s]);return e=new ue({props:n}),{c(){M(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,r){E(e,s,r),l=!0},p(s,[r]){const a=r&3?R(t,[t[0],r&2&&ce(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){l||(_(e.$$.fragment,s),l=!0)},o(s){v(e.$$.fragment,s),l=!1},d(s){N(e,s)}}}function Ie(o,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];return o.$$set=r=>{l(1,e=p(p({},e),W(r))),"$$scope"in r&&l(3,n=r.$$scope)},e=W(e),[s,e,t,n]}class Ve extends A{constructor(e){super(),T(this,e,Ie,Ce,V,{})}}function Ae(o){let e;const l=o[2].default,t=H(l,o,o[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&B(t,l,n,n[3],e?Q(l,n[3],s,null):O(n[3]),null)},i(n){e||(_(t,n),e=!0)},o(n){v(t,n),e=!1},d(n){t&&t.d(n)}}}function Te(o){let e,l;const t=[{name:"moon"},o[1],{iconNode:o[0]}];let n={$$slots:{default:[Ae]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)n=p(n,t[s]);return e=new ue({props:n}),{c(){M(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,r){E(e,s,r),l=!0},p(s,[r]){const a=r&3?R(t,[t[0],r&2&&ce(s[1]),r&1&&{iconNode:s[0]}]):{};r&8&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){l||(_(e.$$.fragment,s),l=!0)},o(s){v(e.$$.fragment,s),l=!1},d(s){N(e,s)}}}function We(o,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];return o.$$set=r=>{l(1,e=p(p({},e),W(r))),"$$scope"in r&&l(3,n=r.$$scope)},e=W(e),[s,e,t,n]}class Le extends A{constructor(e){super(),T(this,e,We,Te,V,{})}}let se,le;function qe(o){if(typeof document>"u")return;clearTimeout(se),clearTimeout(le);const e=document.createElement("style"),l=document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);e.appendChild(l);const t=()=>document.head.appendChild(e),n=()=>document.head.removeChild(e);if(typeof window.getComputedStyle<"u"){t(),o(),window.getComputedStyle(e).opacity,n();return}if(typeof window.requestAnimationFrame<"u"){t(),o(),window.requestAnimationFrame(n);return}t(),se=window.setTimeout(()=>{o(),le=window.setTimeout(n,120)},120)}const ze={getItem:o=>null,setItem:(o,e)=>{}},j=typeof document<"u",je=["dark","light","system"],D="mode-watcher-mode",K=De(),Z=Pe(),fe=J(void 0),de=He();function De(){const o="system",e=j?localStorage:ze,l=e.getItem(D);let t=G(l)?l:o;const{subscribe:n,set:s}=J(t,()=>{if(!j)return;const a=c=>{if(c.key!==D)return;const d=c.newValue;G(d)?s(t=d):s(t=o)};return addEventListener("storage",a),()=>removeEventListener("storage",a)});function r(a){s(t=a),e.setItem(D,t)}return{subscribe:n,set:r}}function Pe(){let e=!0;const{subscribe:l,set:t}=J(void 0,()=>{if(!j)return;const r=c=>{e&&t(c.matches?"light":"dark")},a=window.matchMedia("(prefers-color-scheme: light)");return a.addEventListener("change",r),()=>a.removeEventListener("change",r)});function n(){if(!j)return;const r=window.matchMedia("(prefers-color-scheme: light)");t(r.matches?"light":"dark")}function s(r){e=r}return{subscribe:l,query:n,tracking:s}}function He(){const{subscribe:o}=pe([K,Z,fe],([e,l,t])=>{if(!j)return;const n=e==="system"?l:e;return qe(()=>{const s=document.documentElement,r=document.querySelector('meta[name="theme-color"]');n==="light"?(s.classList.remove("dark"),s.style.colorScheme="light",r&&t&&r.setAttribute("content",t.light)):(s.classList.add("dark"),s.style.colorScheme="dark",r&&t&&r.setAttribute("content",t.dark))}),n});return{subscribe:o}}function G(o){return typeof o!="string"?!1:je.includes(o)}function Be(){K.set(he(de)==="dark"?"light":"dark")}function Oe(o){K.set(o)}function Qe(o,e){const l=document.documentElement,t=localStorage.getItem("mode-watcher-mode")||o,n=t==="light"||t==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(l.classList[n?"remove":"add"]("dark"),l.style.colorScheme=n?"light":"dark",e){const s=document.querySelector('meta[name="theme-color"]');s&&s.setAttribute("content",t==="light"?e.light:e.dark)}localStorage.setItem("mode-watcher-mode",t)}function oe(o){let e,l;return{c(){e=S("meta"),this.h()},l(t){e=$(t,"META",{name:!0,content:!0}),this.h()},h(){k(e,"name","theme-color"),k(e,"content",l=o[0].dark)},m(t,n){w(t,e,n)},p(t,n){n&1&&l!==(l=t[0].dark)&&k(e,"content",l)},d(t){t&&g(e)}}}function Re(o){let e,l,t='<script nonce="%sveltekit.nonce%">('+Qe.toString()+")("+o[1]+");<\/script>",n,s=o[0]&&oe(o);return{c(){s&&s.c(),e=C(),l=new ge(!1),n=C(),this.h()},l(r){const a=_e("svelte-cpyj77",document.head);s&&s.l(a),e=C(),l=ve(a,!1),n=C(),a.forEach(g),this.h()},h(){l.a=n},m(r,a){s&&s.m(document.head,null),b(document.head,e),l.m(t,document.head),b(document.head,n)},p(r,[a]){r[0]?s?s.p(r,a):(s=oe(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:U,o:U,d(r){r&&l.d(),s&&s.d(r),g(e),g(n)}}}function Fe(o,e,l){let{track:t=!0}=e,{defaultMode:n="system"}=e,{themeColors:s=void 0}=e;fe.set(s),ke(()=>{const a=de.subscribe(()=>{});Z.tracking(t),Z.query();const c=localStorage.getItem(D);return Oe(G(c)?c:n),()=>{a()}});const r=`"${n}"${s?`, ${JSON.stringify(s)}`:""}`;return o.$$set=a=>{"track"in a&&l(2,t=a.track),"defaultMode"in a&&l(3,n=a.defaultMode),"themeColors"in a&&l(0,s=a.themeColors)},[s,r,t,n]}class Ue extends A{constructor(e){super(),T(this,e,Fe,Re,V,{track:2,defaultMode:3,themeColors:0})}}function Ze(o){let e,l,t,n,s,r="Toggle theme",a;return e=new Ve({props:{class:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}}),t=new Le({props:{class:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}}),{c(){M(e.$$.fragment),l=L(),M(t.$$.fragment),n=L(),s=S("span"),s.textContent=r,this.h()},l(c){y(e.$$.fragment,c),l=q(c),y(t.$$.fragment,c),n=q(c),s=$(c,"SPAN",{class:!0,"data-svelte-h":!0}),ie(s)!=="svelte-ntgole"&&(s.textContent=r),this.h()},h(){k(s,"class","sr-only")},m(c,d){E(e,c,d),w(c,l,d),E(t,c,d),w(c,n,d),w(c,s,d),a=!0},p:U,i(c){a||(_(e.$$.fragment,c),_(t.$$.fragment,c),a=!0)},o(c){v(e.$$.fragment,c),v(t.$$.fragment,c),a=!1},d(c){c&&(g(l),g(n),g(s)),N(e,c),N(t,c)}}}function Ge(o){let e,l;return e=new be({props:{variant:"outline",size:"icon",$$slots:{default:[Ze]},$$scope:{ctx:o}}}),e.$on("click",Be),{c(){M(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p(t,[n]){const s={};n&1&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}class Je extends A{constructor(e){super(),T(this,e,null,Ge,V,{})}}function Ke(o){let e,l,t,n="SVG Recolor",s,r,a,c,d,h,f;return a=new Je({}),d=new we({}),{c(){e=S("header"),l=S("div"),t=S("h1"),t.textContent=n,s=L(),r=S("div"),M(a.$$.fragment),c=L(),M(d.$$.fragment),this.h()},l(i){e=$(i,"HEADER",{class:!0});var u=I(e);l=$(u,"DIV",{class:!0});var m=I(l);t=$(m,"H1",{class:!0,"data-svelte-h":!0}),ie(t)!=="svelte-q51lzn"&&(t.textContent=n),s=q(m),r=$(m,"DIV",{class:!0});var z=I(r);y(a.$$.fragment,z),z.forEach(g),m.forEach(g),c=q(u),y(d.$$.fragment,u),u.forEach(g),this.h()},h(){k(t,"class","text-3xl font-extrabold"),k(r,"class","flex-row"),k(l,"class","p-4 pt-0 flex flex-row justify-between"),k(e,"class",h=x("p-8",o[0]))},m(i,u){w(i,e,u),b(e,l),b(l,t),b(l,s),b(l,r),E(a,r,null),b(e,c),E(d,e,null),f=!0},p(i,[u]){(!f||u&1&&h!==(h=x("p-8",i[0])))&&k(e,"class",h)},i(i){f||(_(a.$$.fragment,i),_(d.$$.fragment,i),f=!0)},o(i){v(a.$$.fragment,i),v(d.$$.fragment,i),f=!1},d(i){i&&g(e),N(a),N(d)}}}function Xe(o,e,l){let{class:t=void 0}=e;return o.$$set=n=>{"class"in n&&l(0,t=n.class)},[t]}class Ye extends A{constructor(e){super(),T(this,e,Xe,Ke,V,{class:0})}}function xe(o){let e,l,t,n,s,r,a,c;e=new Ue({}),s=new Ye({});const d=o[1].default,h=H(d,o,o[0],null);return{c(){M(e.$$.fragment),l=L(),t=S("div"),n=S("div"),M(s.$$.fragment),r=L(),a=S("div"),h&&h.c(),this.h()},l(f){y(e.$$.fragment,f),l=q(f),t=$(f,"DIV",{class:!0});var i=I(t);n=$(i,"DIV",{class:!0});var u=I(n);y(s.$$.fragment,u),r=q(u),a=$(u,"DIV",{class:!0});var m=I(a);h&&h.l(m),m.forEach(g),u.forEach(g),i.forEach(g),this.h()},h(){k(a,"class","flex-1 max-h-full overflow-y-auto"),k(n,"class","flex flex-col flex-grow-0 h-full max-h-full"),k(t,"class","h-dvh max-h-dvh")},m(f,i){E(e,f,i),w(f,l,i),w(f,t,i),b(t,n),E(s,n,null),b(n,r),b(n,a),h&&h.m(a,null),c=!0},p(f,[i]){h&&h.p&&(!c||i&1)&&B(h,d,f,f[0],c?Q(d,f[0],i,null):O(f[0]),null)},i(f){c||(_(e.$$.fragment,f),_(s.$$.fragment,f),_(h,f),c=!0)},o(f){v(e.$$.fragment,f),v(s.$$.fragment,f),v(h,f),c=!1},d(f){f&&(g(l),g(t)),N(e,f),N(s),h&&h.d(f)}}}function et(o,e,l){let{$$slots:t={},$$scope:n}=e;return o.$$set=s=>{"$$scope"in s&&l(0,n=s.$$scope)},[n,t]}class rt extends A{constructor(e){super(),T(this,e,et,xe,V,{})}}export{rt as component,ot as universal};