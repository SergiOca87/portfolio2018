parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Jlio":[function(require,module,exports) {
var e=document.querySelector(".menu-wrap"),c=document.querySelector(".full-screen-menu-close"),n=function(){document.querySelector(".full-screen-menu").classList.toggle("full-screen-menu-active"),document.querySelector("section").classList.toggle("blurry-background")};e.addEventListener("click",n),c.addEventListener("click",n);
},{}],"BsDQ":[function(require,module,exports) {
"use strict";require("./navbar.js");var e=document.querySelectorAll(".portfolio-grid .portfolio-item-wrap"),t=Array.from(document.querySelectorAll(".portfolio-filters button")),i=document.querySelector("#websites-filter");t.forEach(function(e){e.addEventListener("click",r)});var o=function(e){var t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)};function r(t){var i=t.target.id;document.querySelector("#websites-filter").classList.remove("active");var o=!0,r=!1,s=void 0;try{for(var l,n=function(){var e=l.value;return e.className==="portfolio-item-wrap "+i||e.className==="portfolio-item-wrap "+i+" hidden"||e.className==="portfolio-item-wrap "+i+" filter-description"||e.className==="portfolio-item-wrap "+i+" filter-description hidden"?(e.classList.add("hidden"),setTimeout(function(){e.style.display="flex",e.classList.remove("hidden")},500),"continue"):"showAll"===t.target.id?(e.classList.add("hidden"),e.classList.contains("filter-description")?setTimeout(function(){e.style.display="none"},500):setTimeout(function(){e.style.display="flex",e.classList.remove("hidden")},500),"continue"):(e.classList.add("hidden"),void setTimeout(function(){e.style.display="none"},500))},a=e[Symbol.iterator]();!(o=(l=a.next()).done);o=!0)n()}catch(c){r=!0,s=c}finally{try{o||null==a.return||a.return()}finally{if(r)throw s}}}o(i),i.classList.add("active");
},{"./navbar.js":"Jlio"}]},{},["BsDQ"], null)
//# sourceMappingURL=/portfolio.eeeb91cd.map