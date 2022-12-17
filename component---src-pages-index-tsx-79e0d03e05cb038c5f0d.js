"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{9842:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1883),a=n(7294);var l=e=>{let{pageTitle:t,children:n}=e;(0,r.useStaticQuery)("3159585216");return a.createElement("div",{className:"global-module--container--d3c6d","data-sal":"fade","data-sal-duration":"2000"},a.createElement("main",null,n))}},4001:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,a.useStaticQuery)("3159585216");return r.createElement("title",null,t," | ",n.site.siteMetadata.title)}},7504:function(e,t,n){n.r(t),n.d(t,{Head:function(){return T},default:function(){return z}});var r=n(7294);const a=e=>{let{title:t}=e;return r.createElement(r.Fragment,null,r.createElement("h1",null,t))};var l=n(9842),c=n(4001),o=n(9583),i=n(7735),u=n(5155),s=n(859);const m=[{label:"React",Icon:o.huN},{label:"Typescript",Icon:i.WZi},{label:"NodeJs",Icon:i.uds},{label:"GraphQL",Icon:u.r0E},{label:"Mongodb",Icon:i.t$b},{label:"Postgresql",Icon:s.ihN},{label:"Jest",Icon:i.Z$w},{label:"AWS",Icon:o.UC$},{label:"Serverless",Icon:i.yUp},{label:"Cypress",Icon:i.GL0}],d=e=>{let{children:t}=e;return r.createElement("div",{className:"skill-card-container"},t)},f=()=>r.createElement(d,null,m.map((e=>{let{Icon:t,label:n}=e;return r.createElement("div",{className:"skill card",key:n},r.createElement(t,{size:20}),r.createElement("p",null,n))})));var v=n(8193);const g=[{Icon:v._iD,link:"https://www.linkedin.com/in/james-duong-9168a89a/"},{Icon:v.RrF,link:"https://github.com/jpduong"}],p=()=>r.createElement("div",{className:"social-links"},g.map((e=>{let{Icon:t,link:n}=e;return r.createElement(t,{className:"hover",size:18,key:n,onClick:()=>(e=>window.open(e,"_blank","noopener,noreferrer"))(n)})}))),E=()=>r.createElement("div",{className:"footer"},r.createElement("div",null,r.createElement("p",null,"Contact: james.duong93@gmail.com"),r.createElement("p",null,"Copyright © 2022 James Duong")),r.createElement(p,null)),h=[{title:"jLearn",description:"Web app to help language learning",link:"https://jlearn.netlify.app"}],b=h.length,k=b>1,y=()=>{const{0:e,1:t}=(0,r.useState)(0),{title:n,description:a,link:l}=h[e];return r.createElement("div",{className:"project card"},r.createElement("h2",null,n),r.createElement("p",null,a),r.createElement("button",{className:"hover",onClick:()=>{return e=l,window.open(e,"_blank","noopener,noreferrer");var e}},"View"),k&&r.createElement(u.ULj,{className:"project-card-nav-icon",size:28,onClick:()=>{const n=e+1;t(n===b?0:n)}}))},w=e=>{let{children:t}=e;return r.createElement("section",null,t)};function N(e,t,a,l){void 0===a&&(a=n.g),void 0===l&&(l={});var c=(0,r.useRef)(),o=l.capture,i=l.passive,u=l.once;(0,r.useEffect)((function(){c.current=t}),[t]),(0,r.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return c.current(e)},r={capture:o,passive:i,once:u};return n.g.addEventListener(e,t,r),function(){n.g.removeEventListener(e,t,r)}}}),[e,n.g,o,i,u])}var S={},C=function(e,t,n){return S[e]||(S[e]={callbacks:[],value:n}),S[e].callbacks.push(t),{deregister:function(){var n=S[e].callbacks,r=n.indexOf(t);r>-1&&n.splice(r,1)},emit:function(n){S[e].value!==n&&(S[e].value=n,S[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function I(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var a=(l=t,{get:function(e,t){var n=l.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){l.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var a=n.get,l=n.set,c=(0,r.useRef)(null),o=(0,r.useState)((function(){return a(t,e)})),i=o[0],u=o[1];N("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);i!==n&&u(n)}})),(0,r.useEffect)((function(){return c.current=C(t,u,e),function(){c.current.deregister()}}),[e,t]);var s=(0,r.useCallback)((function(e){var n="function"==typeof e?e(i):e;l(t,n),u(n),c.current.emit(e)}),[i,l,t]);return[i,s]}(t,e,a)}}var l;return r.useState}var O=function(){},j={classList:{add:O,remove:O}},L=function(e,t,a){void 0===a&&(a=n.g);var l=e?I(e,t):r.useState,c=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},o={addEventListener:function(e,t){return c.addListener&&c.addListener(t)},removeEventListener:function(e,t){return c.removeListener&&c.removeListener(t)}},i="(prefers-color-scheme: dark)"===c.media,u=n.g.document&&n.g.document.body||j;return{usePersistedDarkModeState:l,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=u),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(r){e.classList.add(r?t:n),e.classList.remove(r?n:t)}},mediaQueryEventTarget:o,getInitialValue:function(e){return i?c.matches:e}}};var P=n(3750),M=n(5434);const x=()=>{const e=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,a=t.classNameDark,l=t.classNameLight,c=t.onChange,o=t.storageKey;void 0===o&&(o="darkMode");var i=t.storageProvider,u=t.global,s=(0,r.useMemo)((function(){return L(o,i,u)}),[o,i,u]),m=s.getDefaultOnChange,d=s.mediaQueryEventTarget,f=(0,s.usePersistedDarkModeState)((0,s.getInitialValue)(e)),v=f[0],g=f[1],p=(0,r.useMemo)((function(){return c||m(n,a,l)}),[c,n,a,l,m]);return(0,r.useEffect)((function(){p(v)}),[p,v]),N("change",(function(e){return g(e.matches)}),d),{value:v,enable:(0,r.useCallback)((function(){return g(!0)}),[g]),disable:(0,r.useCallback)((function(){return g(!1)}),[g]),toggle:(0,r.useCallback)((function(){return g((function(e){return!e}))}),[g])}}(!1),t=e.value?P.WZt:M.UFB;return r.createElement("div",null,r.createElement(t,{className:"dark-mode-button hover",onClick:e.toggle}))},D=()=>r.createElement("nav",{className:"navbar"},r.createElement("div",{className:"flex flex-aic"},r.createElement(o.jXO,{className:"icon"}),r.createElement("span",null,"jd.")),r.createElement(x,null)),T=()=>r.createElement(c.Z,{title:"Home Page"});var z=()=>r.createElement(l.Z,{pageTitle:"About"},r.createElement(w,null,r.createElement(D,null),r.createElement(a,{title:"About"}),r.createElement("p",null,"Hi there. I’m James, a Full Stack Developer based in Sydney. I’m passionate in building aesthetic and optimised websites.")),r.createElement(w,null,r.createElement(a,{title:"Projects"}),r.createElement(y,null)),r.createElement(w,null,r.createElement(a,{title:"Skills"}),r.createElement(f,null)),r.createElement(E,null))},4405:function(e,t,n){n.d(t,{w_:function(){return u}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return r.createElement(s,c({attr:c({},e.attr)},t),i(e.child))}}function s(e){var t=function(t){var n,a=e.attr,l=e.size,i=e.title,u=o(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-79e0d03e05cb038c5f0d.js.map