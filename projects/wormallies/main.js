!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=10)}([function(e,n,t){e.exports=function(){"use strict";const e={width:400,height:400,cellSize:20,borderSize:1,borderStyle:"inward",backgroundColor:"#fff",borderColor:"#f00",debug:{coords:!1,fontSize:10,backgroundColor:"#fff",color:"#f00"}},n=(e,n,t)=>({x:e*t.cellSize+(e+1)*t.borderSize,y:n*t.cellSize+(n+1)*t.borderSize,width:t.cellSize,height:t.cellSize,col:e,row:n}),t=(e,t,o)=>{const r=[];for(let i=0;i<t;i++){const t=[];for(let r=0;r<e;r++)t.push(n(r,i,o));r.push(t)}return r},o=(e,n,t)=>{n.beginPath();let o=e.x,r=e.y+e.height,i=e.x+e.width,a=e.y+e.height,c=e.x+e.width,l=e.y;t.borderSize%2!=0&&(o+=.5,r+=.5,i+=.5,a+=.5,c+=.5,l+=.5),n.fillStyle=t.backgroundColor,n.fillRect(e.x,e.y,t.cellSize,t.cellSize),n.moveTo(o,r),n.lineTo(i,a),n.lineTo(c,l),n.strokeStyle=t.borderColor,n.lineWidth=t.borderSize,n.lineCap="square",n.stroke()};return{Grid:{empty:n=>{const o={...e,...n},r=o.cellSize+o.borderSize,i=Math.floor(o.height/r),a=i*r,c=Math.floor(o.width/r),l=c*r;return{cells:t(c,i,o),config:{...o,width:l,height:a}}},center:e=>{const n=Math.floor(e.length/2),t=Math.floor(e[0].length/2);return e[n][t]},renderCell:o,render:(n,t,r)=>{const i={...e,...r};let a=0;return i.borderSize%2!=0&&(a+=.5),t.fillStyle=i.backgroundColor,t.fillRect(a,a,i.width,i.height),t.strokeStyle=i.borderColor,t.strokeRect(a,a,i.width,i.height),n.forEach((e,n)=>{e.forEach((e,r)=>{o(e,t,i),i.debug.coords&&((e,n,t,o)=>{const r={x:e.x+o.borderSize,y:e.y+o.borderSize+o.debug.fontSize};t.font=o.debug.fontSize+"px sans-serif";const i=t.measureText(n);t.fillStyle=o.debug.backgroundColor,t.fillRect(r.x,r.y-o.debug.fontSize,Math.ceil(i.actualBoundingBoxLeft+i.actualBoundingBoxRight),Math.ceil(i.actualBoundingBoxAscent+i.actualBoundingBoxDescent+2)),t.fillStyle=o.debug.color,t.fillText(n,e.x+o.borderSize,e.y+o.debug.fontSize)})(e,`${e.x}:${e.y} ${n}:${r}`,t,i)})}),n}}}}()},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){var o=t(3),r=t(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],l=n.base?i[0]+n.base:i[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:g(f,n),references:1}),o.push(u)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function h(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function g(e,n){var t,o,r;if(n.singleton){var i=m++;t=p||(p=s(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=s(n),o=h.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=l(e,n),s=0;s<t.length;s++){var u=c(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(e,n,t){var o=t(1),r=t(5),i=t(6),a=t(7),c=t(8),l=t(9);(n=o(!1)).i(r);var s=i(a),u=i(c),d=i(l);n.push([e.i,'@font-face{font-family:"Archivo Black";src:url('+s+') format("truetype")}@font-face{font-family:"Montserrat";src:url('+u+') format("truetype")}@font-face{font-family:"Montserrat-Thin";src:url('+d+') format("truetype")}body{background-color:#fff3cd}.screen{height:100%;width:100%}.box{font-family:"Montserrat",sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center}.box h1{font-family:"Archivo Black",sans-serif;color:#4d3e3e;font-size:60px}@media screen and (max-width: 640px){.box h1{margin-top:0px;font-size:80px}}.box h2{color:#ffc38b}@media screen and (max-width: 640px){.box h2{margin-top:-50px;font-size:30px}}.game header{margin-left:15px;width:100%;display:flex;justify-content:left;align-items:left}.game .score{display:flex;flex-direction:row-reverse;margin-right:22px;font-family:"Archivo Black",sans-serif;font-size:40px;color:#4d3e3e}.game .screen{position:relative}.game .overlay{position:absolute;top:0px;border:1px dashed #ffc38b;background-color:#fff3cd;opacity:.8;color:#ffc38b}.game .overlay .start{position:absolute;display:flex;top:0px;font-family:"Archivo Black",sans-serif;font-size:30px;color:#4d3e3e;margin-top:100px;margin-left:45px}.game .overlay .dead{position:absolute;display:flex;top:100px;font-family:"Archivo Black",sans-serif;font-size:30px;color:#4d3e3e;margin-top:100px;margin-left:45px}',""]),e.exports=n},function(e,n,t){(n=t(1)(!1)).push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"/fonts/ArchivoBlack-Regular.ttf"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"/fonts/Montserrat-Regular.ttf"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"/fonts/Montserrat-Thin.ttf"},function(e,n,t){"use strict";t.r(n);t(2);var o=t(0);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c={__lastRenderTime__:void 0,__render__:void 0,config:{}},l=function e(){var n=Date.now();(function(e){return(void 0===c.__lastRenderTime__?c.config.frameIntervalMs:e-c.__lastRenderTime__)>=c.config.frameIntervalMs})(n)&&((c=c.config.render(c)).__lastRenderTime__=n),window.requestAnimationFrame(e)},s=function(e,n){c=i({},c,{config:i({},c.config,{render:e,frameIntervalMs:void 0===n.frameIntervalMs?16:n.frameIntervalMs})}),l()},u=function(e,n){return n.forEach((function(n){var t="on".concat(n);Object.defineProperty(e,t,{set:function(t){return e.addEventListener(n,t)},get:function(){return e[t]}})})),e},d={listeners:{},dispatchEvent:function(e){if(!(e.type in this.listeners))return!0;for(var n=this.listeners[e.type].slice(),t=0,o=n.length;t<o;t++)n[t].call(this,e);return!e.defaultPrevented},addEventListener:function(e,n){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(n)},removeEventListener:function(e,n){if(e in this.listeners)for(var t=this.listeners[e],o=0,r=t.length;o<r;o++)if(t[o]===n)return void t.splice(o,1)},on:function(e,n){this.addEventListener(e,n)}},f={that:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{events:[]},t=Object.assign(e,d);return u(t,n.events)}};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g={width:500,height:500,cellSize:16,borderSize:1,backgroundColor:"#fff3cd",borderColor:"#4d3e3e",snakeColor:"#ff926b",candyColor:"#ff5733",poisonColor:"#4d3e3e",velocity:130,candyFrequency:5e3,candyChance:60,poisonFrequency:7e3,poisonChance:10,maxScore:30,scoreRounding:5,scoreLost:3};g.foodTTL=40*g.velocity,g.poisonTTL=110*g.velocity;var y,b,v,w,x,S,z,C,E,O,k,T={north:"north",east:"east",south:"south",west:"west"},j={ArrowUp:T.north,ArrowRight:T.east,ArrowDown:T.south,ArrowLeft:T.west},M=[],R=!1,P=!1,A=0,I=f.that({}),_=function(e,n,t){var o=Date.now();return void 0===t&&(t=o),!(o-t<=n)&&e>Math.floor(100*Math.random())},L=function(){var e={col:J(b[0].length),row:J(b.length)};return{birth:Date.now(),position:{col:e.col,row:e.row},cell:b[e.row][e.col]}},q=function(){var e=L();C=e.birth,v[e.position.row][e.position.col]=e},B=function(e,n){e.forEach((function(e){e.filter((function(e){return!1!==e})).forEach((function(e){o.Grid.renderCell(e.cell,x,p({},y,{backgroundColor:n}))}))}))},D=function(e,n){var t=Date.now();return void 0===n&&(n=10*y.velocity),e.map((function(e){return e.map((function(e){return!(t-e.birth>n)&&e}))}))},F=function(){O.forEach((function(e){x.fillStyle=y.snakeColor,x.fillRect(e.x,e.y,e.width,e.height)}))},G=function(e){if(!R)return e;var n,t=Date.now();return H(t)?(z=t,o.Grid.render(b,x,y),void 0===C&&(C=Date.now()),_(y.candyChance,y.candyFrequency,C)&&q(),void 0===E&&(E=Date.now()),_(y.poisonChance,y.poisonFrequency,E)&&(n=L(),E=n.birth,w[n.position.row][n.position.col]=n),v=D(v,y.foodTTL),w=D(w,y.poisonTTL),$(),U(),B(v,y.candyColor),B(w,y.poisonColor),F(),e):e},N=function(e,n){var t="wormallies.".concat(e),o=new window.CustomEvent(t,{detail:n,bubbles:!0});I.dispatchEvent(o)},W=function(){R=!1,P=!0,N("die",{grid:b,score:A})},U=function(){var e,n,t,o,r=function(){var e=0,n=O[0],t=n.row,o=n.col;switch(S){case T.north:if(0===t)return null;t=n.row-1;break;case T.east:if(o>=b[0].length-1)return null;o=n.col+1;break;case T.south:if(t>=b.length-1)return null;t=n.row+1;break;case T.west:if(0===o)return null;o=n.col-1}return 1===e&&(R=!1),e++,b[t][o]}(),i=[];if(null===r)return W();if(v[(o=r).row][o.col])i=O,A+=(e=v[r.row][r.col],n=y.foodTTL/y.maxScore,t=y.maxScore-(Date.now()-e.birth)/n,Math.ceil(t/y.scoreRounding)*y.scoreRounding),N("score",{score:A}),v[r.row][r.col]=!1,q();else if(function(e){return w[e.row][e.col]}(r)){if(1===O.length)return W();A-=y.scoreLost,N("score",{score:A}),i=O.slice(0,O.length-2),w[r.row][r.col]=!1}else{if(function(e){return O.some((function(n){return n.col===e.col&&n.row===e.row}))}(r))return W();i=O.slice(0,O.length-1)}O=[r].concat(i)},H=function(e){return void 0===z||e-z>=y.velocity},Y=function(e){return function(e){var n;switch(e){case T.north:n=T.south;break;case T.east:n=T.west;break;case T.south:n=T.north;break;case T.west:n=T.east}return[T.north,T.east,T.south,T.west].filter((function(e){return e!==n}))}(S).includes(e)},$=function(){var e=M.slice(0,1)[0];M=M.slice(1,M.length),Y(e)&&(S=e)},X=function(e){(function(e){return Object.keys(T).includes(e)})(e)&&(R||(R=!0,N("start",{grid:b})),P&&(P=!1,R=!0,K(),N("start",{grid:b})),M.push(T[e]))},J=function(e){return Math.floor(Math.random()*Math.floor(e))},Q=function(e){return e.map((function(e){return e.map((function(e){return!1}))}))},K=function(){O=[o.Grid.center(b)],A=0,v=Q(b),w=Q(b)},V=function(e){return{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},Z=function(e){if("touchstart"!==e.type){if(!k)return X(T.north);var n=V(e);X(function(e,n){var t=n.x-e.x,o=t>0?T.east:T.west,r=n.y-e.y,i=r>0?T.south:T.north;return(t<0?-1*t:t)>(r<0?-1*r:r)?o:i}(k,n)),k=null}else k=V(e)},ee=function(e){X(j[e.code])},ne=function(e){document.onkeydown=ee,document.addEventListener("touchstart",Z,!1),document.addEventListener("touchend",Z,!1)};function te(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var oe=!1;if("undefined"!=typeof window){var re={get passive(){oe=!0}};window.addEventListener("testPassive",null,re),window.removeEventListener("testPassive",null,re)}var ie="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),ae=[],ce=!1,le=-1,se=void 0,ue=void 0,de=function(e){return ae.some((function(n){return!(!n.options.allowTouchMove||!n.options.allowTouchMove(e))}))},fe=function(e){var n=e||window.event;return!!de(n.target)||(n.touches.length>1||(n.preventDefault&&n.preventDefault(),!1))},he=function(e,n){if(ie){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!ae.some((function(n){return n.targetElement===e}))){var t={targetElement:e,options:n||{}};ae=[].concat(te(ae),[t]),e.ontouchstart=function(e){1===e.targetTouches.length&&(le=e.targetTouches[0].clientY)},e.ontouchmove=function(n){1===n.targetTouches.length&&function(e,n){var t=e.targetTouches[0].clientY-le;!de(e.target)&&(n&&0===n.scrollTop&&t>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(n)&&t<0?fe(e):e.stopPropagation())}(n,e)},ce||(document.addEventListener("touchmove",fe,oe?{passive:!1}:void 0),ce=!0)}}else{!function(e){setTimeout((function(){if(void 0===ue){var n=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;n&&t>0&&(ue=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===se&&(se=document.body.style.overflow,document.body.style.overflow="hidden")}))}(n);var o={targetElement:e,options:n||{}};ae=[].concat(te(ae),[o])}},pe=function(e){document.querySelector(".game .score .value").style.visibility="visible",document.querySelector(".game .overlay").style.display="none",document.querySelector(".game .overlay .start").style.display="none",document.querySelector(".game .overlay .dead").style.display="none",document.querySelector(".game .overlay .dead .score").innerText="",document.querySelector(".game .overlay .dead .score").style.display="none"},me=function(e){var n=e.detail.score;document.querySelector(".game .score .value").style.visibility="hidden",document.querySelector(".game .overlay").style.display="block",document.querySelector(".game .overlay .start").style.display="block",document.querySelector(".game .overlay .dead").style.display="block",document.querySelector(".game .overlay .dead .score").style.display="block",document.querySelector(".game .overlay .dead .score").innerText="MUCH POINTS: ".concat(n),document.querySelector(".game .score .value").innerText="0"},ge=function(e){var n=e.detail.score,t=document.querySelector(".game .score .value");n>0?(t.innerText=n,t.style.visibility="visible"):(t.innerText="0",t.style.visibility="hidden")};document.onreadystatechange=function(){var e=document.querySelector(".game .score .value");e.innerText="0",e.style.visibility="hidden";var n,t,r=document.getElementById("wormallies"),i=document.querySelector(".game .overlay");(n=i).addEventListener("click",(function(e){n.style.display="none"})),n.addEventListener("touchstart",(function(e){t={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}})),n.addEventListener("touchend",(function(e){e.changedTouches[0].clientX===t.x&&e.changedTouches[0].clientY===t.y&&(t=null,n.style.dispaly="none")}));var a,c,l;!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){},t=(y=p({},g,{},e)).canvas;ne();var r=o.Grid.empty(y);b=r.cells,I=y.handler||t,t.width=y.width,t.height=y.height,y.width=r.config.width,y.height=r.config.height,x=t.getContext("2d"),o.Grid.render(b,x,y),O=[o.Grid.center(b)],v=Q(b),w=Q(b),q(),F(),n(b,r.config),s(G,y)}({canvas:r,handler:(l={},f.that(l),l.on("wormallies.start",pe),l.on("wormallies.score",ge),l.on("wormallies.die",me),l),width:window.innerWidth<=800?window.innerWidth-50:800,cellSize:(c=window,c.innerWidth<=800?50:c.innerWidth<=1200?30:c.innerWidth<=1500?20:16)},(function(e,n){a=n,i.width=a.width,i.height=a.height})),function(e,n){document.querySelector(".game .overlay .dead").style.display="none",n.width=e.width,n.height=e.height,n.style="\n    ".concat(n.style,";\n    width: ").concat(e.width,"px;\n    height: ").concat(e.height,"px;\n  ")}(a,document.querySelector(".game .overlay")),he(r)}}]);
//# sourceMappingURL=main.js.map