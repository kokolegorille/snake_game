(()=>{"use strict";var e,t,r,n,o={838:(e,t,r)=>{r.a(e,(async(n,o)=>{try{r.d(t,{F:()=>h,Q:()=>p});var a=r(530);e=r.hmd(e);var c=n([a]);a=(c.then?(await c)():c)[0];let i,s=0;function d(){return 0===i.byteLength&&(i=new Uint8Array(a.memory.buffer)),i}let u=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const l="function"==typeof u.encodeInto?function(e,t){return u.encodeInto(e,t)}:function(e,t){const r=u.encode(e);return t.set(r),{read:e.length,written:r.length}};function f(e,t,r){if(void 0===r){const r=u.encode(e),n=t(r.length);return d().subarray(n,n+r.length).set(r),s=r.length,n}let n=e.length,o=t(n);const a=d();let c=0;for(;c<n;c++){const t=e.charCodeAt(c);if(t>127)break;a[o+c]=t}if(c!==n){0!==c&&(e=e.slice(c)),o=r(o,n,n=c+3*e.length);const t=d().subarray(o+c,o+n);c+=l(e,t).written}return s=c,o}function p(e){const t=f(e,a.__wbindgen_malloc,a.__wbindgen_realloc),r=s;a.greet(t,r)}let b=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function h(e,t){var r,n;alert((r=e,n=t,b.decode(d().subarray(r,r+n))))}b.decode(),i=new Uint8Array(a.memory.buffer),o()}catch(y){o(y)}}))},243:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(838),o=e([n]);(0,(n=(o.then?(await o)():o)[0]).Q)("Koko"),t()}catch(e){t(e)}}))},530:(e,t,r)=>{r.a(e,(async(n,o)=>{try{var a,c=n([a=r(838)]),[a]=c.then?(await c)():c;await r.v(t,e.id,"6ad8909837caf1c9b550",{"./index_bg.js":{__wbg_alert_b125e0daaa587d2e:a.F}}),o()}catch(e){o(e)}}),1)}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return o[e](r,r.exports,c),r.loaded=!0,r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,a,c)=>{var i;c&&((i=[]).d=1),i&&(i.moduleId=o.id);var s,d,u,l=new Set,f=o.exports,p=new Promise(((e,t)=>{u=t,d=e}));p[t]=f,p[e]=e=>(i&&e(i),l.forEach(e),p.catch((e=>{}))),p.moduleId=o.id,o.exports=p,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{c[t]=e,n(a)}),(e=>{c[r]=e,n(a)}));var c={};return c[e]=e=>e(a),c}}var i={};return i[e]=e=>{},i[t]=o,i})))(o);var c=()=>s.map((e=>{if(e[r])throw e[r];return e[t]})),d=new Promise((t=>{(a=()=>t(c)).r=0;var r=e=>e!==i&&!l.has(e)&&(l.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((t=>t[e](r)))}));return a.r?d:c()}),(e=>(e?u(p[r]=e):d(f),n(i)))),i&&(i.d=0)},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.v=(e,t,r,n)=>{var o=fetch(c.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),c(243)})();