(()=>{"use strict";var e={122:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),s=n(645),o=n.n(s)()(a());o.push([e.id,".container {\r\n  background-color: rgba(195, 195, 195, 0.249)\r\n}\r\n\r\n.wrapper {\r\n  width: 1100px;\r\n  height: 900px;\r\n  margin: auto auto;\r\n  border: 1px solid #E3EEFF;\r\n  border-radius: 10px;\r\n  background-color: #EDF9FF;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.text-input {\r\n  background-color:#e3f9ff;\r\n  color: #1E2938;\r\n  font-family: 'Georgia';\r\n  font-style: normal;\r\n  font-size: 17px;\r\n  border: 1px solid #2e4847;\r\n  border-radius: 10px;\r\n}\r\n\r\n.keyboard {\r\n  width: 1000px;\r\n  background-color: #EDF9FF;\r\n  border-radius: 10px;\r\n}\r\n\r\n.key-row {\r\n  display: flex;\r\n}\r\n\r\n.key {\r\n  display: block;\r\n  width: 65px;\r\n  height: 65px;\r\n  border: 1px solid #2136367e;\r\n  border-radius: 10px;\r\n  background-color: #E3EEFF;\r\n  color: #1E2938;\r\n  font-family: 'Georgia';\r\n  font-style: normal;\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n.key:hover {\r\n  background-color:#E1FAFC;\r\n}\r\n\r\n.active {\r\n  background-color: #E1FAFC\r\n}\r\n\r\n.caps-active {\r\n  background-color: #E1FAFC !important; \r\n}\r\n\r\n.backspace, .capslock, .enter, .shift {\r\n  width: 130px!important; \r\n}\r\n\r\n.space {\r\n  width: 545px;\r\n}\r\n",""]);const l=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var l=0;l<this.length;l++){var i=this[l][0];null!=i&&(o[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},o=[],l=0;l<e.length;l++){var i=e[l],u=r.base?i[0]+r.base:i[0],c=s[u]||0,d="".concat(u," ").concat(c);s[u]=c+1;var y=n(d),C={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==y)t[y].references++,t[y].updater(C);else{var p=a(C,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var l=n(s[o]);t[l].references--}for(var i=r(e,a),u=0;u<s.length;u++){var c=n(s[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},158:e=>{e.exports=JSON.parse('[[{"ru":["ё","Ё"],"en":["`","~"],"tagClass":"key","eventCode":"Backquote"},{"ru":["1","!"],"en":["1","!"],"tagClass":"key","eventCode":"Digit1"},{"ru":["2","\\""],"en":["2","@"],"tagClass":"key","eventCode":"Digit2"},{"ru":["3","№"],"en":["3","#"],"tagClass":"key","eventCode":"Digit3"},{"ru":["4",";"],"en":["4","$"],"tagClass":"key","eventCode":"Digit4"},{"ru":["5","%"],"en":["5","%"],"tagClass":"key","eventCode":"Digit5"},{"ru":["6",":"],"en":["6","^"],"tagClass":"key","eventCode":"Digit6"},{"ru":["7","?"],"en":["7","&"],"tagClass":"key","eventCode":"Digit7"},{"ru":["8","*"],"en":["8","*"],"tagClass":"key","eventCode":"Digit8"},{"ru":["9","("],"en":["9","("],"tagClass":"key","eventCode":"Digit9"},{"ru":["0",")"],"en":["0",")"],"tagClass":"key","eventCode":"Digit0"},{"ru":["-","_"],"en":["-","_"],"tagClass":"key","eventCode":"Minus"},{"ru":["=","+"],"en":["=","+"],"tagClass":"key","eventCode":"Equal"},{"ru":["backspace","backspace"],"en":["backspace","backspace"],"tagClass":"key backspace","uniq":true,"eventCode":"Backspace"}],[{"ru":["tab","tab"],"en":["tab","tab"],"tagClass":"key tab","uniq":true,"eventCode":"Tab"},{"ru":["й","Й"],"en":["q","Q"],"tagClass":"key","eventCode":"KeyQ"},{"ru":["ц","Ц"],"en":["w","W"],"tagClass":"key","eventCode":"KeyW"},{"ru":["у","У"],"en":["e","E"],"tagClass":"key","eventCode":"KeyE"},{"ru":["к","К"],"en":["r","R"],"tagClass":"key","eventCode":"KeyR"},{"ru":["е","Е"],"en":["t","T"],"tagClass":"key","eventCode":"KeyT"},{"ru":["н","Н"],"en":["y","Y"],"tagClass":"key","eventCode":"KeyY"},{"ru":["г","Г"],"en":["u","U"],"tagClass":"key","eventCode":"KeyU"},{"ru":["ш","Ш"],"en":["i","I"],"tagClass":"key","eventCode":"KeyI"},{"ru":["щ","Щ"],"en":["o","O"],"tagClass":"key","eventCode":"KeyO"},{"ru":["з","З"],"en":["p","P"],"tagClass":"key","eventCode":"KeyP"},{"ru":["х","Х"],"en":["[","{"],"tagClass":"key","eventCode":"BracketLeft"},{"ru":["ъ","Ъ"],"en":["]","}"],"tagClass":"key","eventCode":"BracketRight"},{"ru":["\\\\","/"],"en":["\\\\","|"],"tagClass":"key","eventCode":"Backslash"},{"ru":["del","del"],"en":["del","del"],"uniq":true,"tagClass":"key","eventCode":"Delete"}],[{"ru":["capslock","capslock"],"en":["capslock","capslock"],"tagClass":"key capslock","uniq":true,"eventCode":"CapsLock"},{"ru":["ф","Ф"],"en":["a","A"],"tagClass":"key","eventCode":"KeyA"},{"ru":["ы","Ы"],"en":["s","S"],"tagClass":"key","eventCode":"KeyS"},{"ru":["в","В"],"en":["d","D"],"tagClass":"key","eventCode":"KeyD"},{"ru":["а","А"],"en":["f","F"],"tagClass":"key","eventCode":"KeyF"},{"ru":["п","П"],"en":["g","G"],"tagClass":"key","eventCode":"KeyG"},{"ru":["р","Р"],"en":["h","H"],"tagClass":"key","eventCode":"KeyH"},{"ru":["о","О"],"en":["j","J"],"tagClass":"key","eventCode":"KeyJ"},{"ru":["л","Л"],"en":["k","K"],"tagClass":"key","eventCode":"KeyK"},{"ru":["д","Д"],"en":["l","L"],"tagClass":"key","eventCode":"KeyL"},{"ru":["ж","Ж"],"en":[";",":"],"tagClass":"key","eventCode":"Semicolon"},{"ru":["э","Э"],"en":["\'","\\""],"tagClass":"key","eventCode":"Quote"},{"ru":["enter","enter"],"en":["enter","enter"],"tagClass":"key enter","uniq":true,"eventCode":"Enter"}],[{"ru":["shift","shift"],"en":["shift","shift"],"tagClass":"key shift","uniq":true,"eventCode":"ShiftLeft"},{"ru":["я","Я"],"en":["z","Z"],"tagClass":"key","eventCode":"KeyZ"},{"ru":["ч","Ч"],"en":["x","X"],"tagClass":"key","eventCode":"KeyX"},{"ru":["с","С"],"en":["c","C"],"tagClass":"key","eventCode":"KeyC"},{"ru":["м","М"],"en":["v","V"],"tagClass":"key","eventCode":"KeyV"},{"ru":["и","И"],"en":["b","B"],"tagClass":"key","eventCode":"KeyB"},{"ru":["т","Т"],"en":["n","N"],"tagClass":"key","eventCode":"KeyN"},{"ru":["ь","Ь"],"en":["m","M"],"tagClass":"key","eventCode":"KeyM"},{"ru":["б","Б"],"en":[",","<"],"tagClass":"key","eventCode":"Comma"},{"ru":["ю","Ю"],"en":[".",">"],"tagClass":"key","eventCode":"Period"},{"ru":[".",","],"en":["/","?"],"tagClass":"key","eventCode":"Slash"},{"ru":["↑","↑"],"en":["↑","↑"],"tagClass":"key key-up","uniq":true,"eventCode":"ArrowUp"},{"ru":["shift","shift"],"en":["shift","shift"],"tagClass":"key shift","uniq":true,"eventCode":"ShiftRight"}],[{"ru":["ctrl","ctrl"],"en":["ctrl","ctrl"],"tagClass":"key ctrl","uniq":true,"eventCode":"ControlLeft"},{"ru":["alt","alt"],"en":["alt","alt"],"tagClass":"key alt","uniq":true,"eventCode":"AltLeft"},{"ru":["____","____"],"en":["____","____"],"tagClass":"key space","uniq":true,"eventCode":"Space"},{"ru":["alt","alt"],"en":["alt","alt"],"tagClass":"key alt","uniq":true,"eventCode":"AltRight"},{"ru":["←","←"],"en":["←","←"],"tagClass":"key key-left","uniq":true,"eventCode":"ArrowLeft"},{"ru":["↓","↓"],"en":["↓","↓"],"tagClass":"key key-down","uniq":true,"eventCode":"ArrowDown"},{"ru":["→","→"],"en":["→","→"],"tagClass":"key key-right","uniq":true,"eventCode":"ArrowRight"},{"ru":["ctrl","ctrl"],"en":["ctrl","ctrl"],"tagClass":"key","uniq":true,"eventCode":"ControlRight"}]]')}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),s=n(569),o=n.n(s),l=n(565),i=n.n(l),u=n(216),c=n.n(u),d=n(589),y=n.n(d),C=n(122),p={};p.styleTagTransform=y(),p.setAttributes=i(),p.insert=o().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=c(),t()(C.Z,p),C.Z&&C.Z.locals&&C.Z.locals;const v=n(158);localStorage.getItem("lang")||localStorage.setItem("lang","ru");let g=localStorage.getItem("lang");(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("wrapper");const r=document.createElement("textarea");r.cols="100",r.rows="15",r.autofocus=!0,r.classList.add("text-input");const a=document.createElement("div");a.classList.add("keyboard"),n.appendChild(r),n.appendChild(a),t.appendChild(n),e.appendChild(t)})(),new class{constructor(e,t,n){this.parent=e,this.list=t,this.lang=n}keyContainerCreator(e){const{ru:t,en:n,tagClass:r,uniq:a,eventCode:s}=e,o=document.createElement("div");return((e,t)=>{let n=!1;t[3]&&(n=!0),e.setAttribute("data-ru_lower",`${t[0][0]}`),e.setAttribute("data-ru_upper",`${t[0][1]}`),e.setAttribute("data-en_lower",`${t[1][0]}`),e.setAttribute("data-en_upper",`${t[1][1]}`),e.setAttribute("data-event_code",`${t[4]}`),e.setAttribute("data-is_uniq",`${n}`),t[2].split(" ").forEach((t=>{e.classList.add(t)}))})(o,[t,n,r,a,s]),o}render(){this.list.forEach((e=>{const t=document.createElement("div");t.classList.add("key-row"),e.forEach((e=>{const n=this.keyContainerCreator(e);t.appendChild(n),"ru"===this.lang?n.innerHTML=n.dataset.ru_lower:n.innerHTML=n.dataset.en_lower})),this.parent.appendChild(t)}))}}(document.querySelector(".keyboard"),v,g).render();const f=document.querySelector(".text-input"),k=(document.querySelector(".keyboard"),document.querySelectorAll(".key"));let h=!1;document.addEventListener("keydown",(e=>((e,t)=>{f.focus();const n=e.code,r=document.querySelector(`[data-event_code = ${n}]`);r&&(e.ctrlKey||e.altKey||e.shiftKey?r.classList.add("active"):("capslock"!==r.innerHTML&&r.classList.add("active"),"false"===r.dataset.is_uniq&&(e.preventDefault(),f.setRangeText(r.innerHTML,f.selectionStart,f.selectionEnd),f.setSelectionRange(f.selectionStart+1,f.selectionStart+1)),"tab"===r.innerHTML&&(e.preventDefault(),f.value+="   ")))})(e))),document.addEventListener("keyup",(e=>{const t=e.code,n=document.querySelector(`[data-event_code = ${t}]`);n&&n.classList.remove("active")})),document.addEventListener("keydown",(e=>{e.shiftKey&&e.altKey&&(g="ru"===g?"en":"ru"),e.ctrlKey||e.altKey||e.shiftKey||(((e,t,n,r)=>{"CapsLock"===e.code&&(t[29].classList.toggle("caps-active"),t.forEach((e=>{"ru"!==n&&e.dataset.is_uniq?"en"!==n&&e.dataset.is_uniq||(e.innerHTML=r?e.dataset.en_lower:e.dataset.en_upper):e.innerHTML=r?e.dataset.ru_lower:e.dataset.ru_upper}))),e.shiftKey&&e.altKey&&("en"===n&&localStorage.setItem("lang","en"),"ru"===n&&localStorage.setItem("lang","ru"),r&&"en"===n&&t.forEach((e=>{e.innerHTML=e.dataset.en_upper})),r||"en"!==n||t.forEach((e=>{e.innerHTML=e.dataset.en_lower})),r&&"ru"===n&&t.forEach((e=>{e.innerHTML=e.dataset.ru_upper})),r||"ru"!==n||t.forEach((e=>{e.innerHTML=e.dataset.ru_lower})))})(e,k,g,h),"CapsLock"===e.code&&(h=!h))}))})()})();