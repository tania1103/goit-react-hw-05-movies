/*! For license information please see 225.93b65805.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[225],{225:function(t,e,r){r.r(e),r.d(e,{default:function(){return C}});var n,o,i,a,c,u,s,l=r(5861),h=r(9439),f=r(854),p=r(168),d=r(5867),g=d.ZP.li(n||(n=(0,p.Z)(["\n  display: flex;\n  width: 100%;\n  padding: 20px;\n  border: 1px solid rgba(227, 227, 227, 1);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n"]))),v=d.ZP.div(o||(o=(0,p.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  gap: 15px;\n  margin-bottom: 20px;\n"]))),y=d.ZP.img(i||(i=(0,p.Z)(["\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  margin-right: 16px;\n"]))),m=d.ZP.h3(a||(a=(0,p.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 21px;\n  line-height: 16px;\n  font-weight: 700;\n"]))),w=d.ZP.h5(c||(c=(0,p.Z)(["\n  font-weight: 300;\n  font-size: 15px;\n"]))),x=d.ZP.span(u||(u=(0,p.Z)(["\n  font-weight: 400;\n  font-size: 15px;\n"]))),b=r(184),_=function(t){var e=t.review,r=e.author_details,n=r.avatar_path,o=r.name,i=e.author,a=e.created_at,c=e.content,u=new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(g,{children:(0,b.jsxs)("article",{children:[(0,b.jsxs)(v,{children:[(0,b.jsx)(y,{src:"https://image.tmdb.org/t/p/w45".concat(n),alt:"".concat(o," profile")}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(m,{children:["A review by ",i]}),(0,b.jsxs)(w,{children:["Written by ",(0,b.jsx)(x,{children:i})," on ",u]})]})]}),(0,b.jsx)("p",{children:c})]})})})},j=r(2791),L=r(1087),E=r(7689),Z=r(5139),P=d.ZP.ul(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 15px;\n"]))),k=r(2896),O=r(5984),N=r(4404);function S(){S=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new O(n||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="executing",d="completed",g={};function v(){}function y(){}function m(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(N([])));b&&b!==r&&n.call(b,a)&&(w=b);var _=m.prototype=v.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=Z(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function Z(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,Z(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=m,o(_,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},j(L.prototype),s(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(_),s(_,u,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}var C=function(){var t=(0,j.useState)([]),e=(0,h.Z)(t,2),r=e[0],n=e[1],o=(0,j.useState)(!1),i=(0,h.Z)(o,2),a=i[0],c=i[1],u=(0,j.useState)(""),s=(0,h.Z)(u,2),p=s[0],d=s[1],g=(0,L.lr)(),v=(0,h.Z)(g,2),y=v[0],m=v[1],w=Number(y.get("review_page")),x=Number(y.get("total_reviews")),C=(0,E.UO)().movieId;(0,j.useEffect)((function(){var t,e=new AbortController,r=e.signal;return w||(y.set("review_page",1),m(y)),function(){(t=t||(0,l.Z)(S().mark((function t(){var e,o,i;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(""),c(!0),t.prev=2,t.next=5,(0,Z.Hx)(C,r,w);case 5:e=t.sent,o=e.results,i=e.total_results,n(o),y.set("total_reviews",i),m(y),t.next=17;break;case 12:if(t.prev=12,t.t0=t.catch(2),"ERR_CANCELED"!==t.t0.code){t.next=16;break}return t.abrupt("return");case 16:d(t.t0.message);case 17:return t.prev=17,c(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,12,17,20]])})))).apply(this,arguments)}(),function(){e.abort()}}),[C,w,y,m]);return(0,b.jsxs)(b.Fragment,{children:[p&&(0,b.jsx)(k.Z,{messageCode:"error",errorCode:p}),a&&(0,b.jsx)(f.a,{}),r.length>0?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(P,{children:r.map((function(t){return(0,b.jsx)(_,{review:t},(0,O.x0)())}))}),(0,b.jsx)(N.t,{currentPage:w,itemsPerPage:20,onPageChange:function(){y.set("review_page",w+1),m(y)},totalItems:x,customClassNames:{}})]}):(0,b.jsx)(k.Z,{messageCode:"reviews"})]})}}}]);
//# sourceMappingURL=225.93b65805.chunk.js.map