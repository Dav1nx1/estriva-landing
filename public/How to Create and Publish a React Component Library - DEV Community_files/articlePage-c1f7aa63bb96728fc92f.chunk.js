/*! For license information please see articlePage-c1f7aa63bb96728fc92f.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27,3,4],{0:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return q})),n.d(t,"hydrate",(function(){return V})),n.d(t,"createElement",(function(){return v})),n.d(t,"h",(function(){return v})),n.d(t,"Fragment",(function(){return g})),n.d(t,"createRef",(function(){return y})),n.d(t,"isValidElement",(function(){return a})),n.d(t,"Component",(function(){return b})),n.d(t,"cloneElement",(function(){return F})),n.d(t,"createContext",(function(){return R})),n.d(t,"toChildArray",(function(){return A})),n.d(t,"options",(function(){return o}));var r,o,i,a,s,u,c,l,d={},f=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n){var o,i,a,s={};for(a in t)"key"==a?o=t[a]:"ref"==a?i=t[a]:s[a]=t[a];if(arguments.length>2&&(s.children=arguments.length>3?r.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return m(e,s,o,i,null)}function m(e,t,n,r,a){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==a?++i:a};return null==a&&null!=o.vnode&&o.vnode(s),s}function y(){return{current:null}}function g(e){return e.children}function b(e,t){this.props=e,this.context=t}function w(e,t){if(null==t)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?w(e):null}function k(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return k(e)}}function S(e){(!e.__d&&(e.__d=!0)&&s.push(e)&&!C.__r++||c!==o.debounceRendering)&&((c=o.debounceRendering)||u)(C)}function C(){for(var e;C.__r=s.length;)e=s.sort((function(e,t){return e.__v.__b-t.__v.__b})),s=[],e.some((function(e){var t,n,r,o,i,a;e.__d&&(i=(o=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=p({},o)).__v=o.__v+1,N(a,o,r,t.__n,void 0!==a.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?w(o):i,o.__h),P(n,o),o.__e!=i&&k(o)))}))}function x(e,t,n,r,o,i,a,s,u,c){var l,_,p,h,v,y,b,k=r&&r.__k||f,S=k.length;for(n.__k=[],l=0;l<t.length;l++)if(null!=(h=n.__k[l]=null==(h=t[l])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h||"bigint"==typeof h?m(null,h,null,null,h):Array.isArray(h)?m(g,{children:h},null,null,null):h.__b>0?m(h.type,h.props,h.key,null,h.__v):h)){if(h.__=n,h.__b=n.__b+1,null===(p=k[l])||p&&h.key==p.key&&h.type===p.type)k[l]=void 0;else for(_=0;_<S;_++){if((p=k[_])&&h.key==p.key&&h.type===p.type){k[_]=void 0;break}p=null}N(e,h,p=p||d,o,i,a,s,u,c),v=h.__e,(_=h.ref)&&p.ref!=_&&(b||(b=[]),p.ref&&b.push(p.ref,null,h),b.push(_,h.__c||v,h)),null!=v?(null==y&&(y=v),"function"==typeof h.type&&h.__k===p.__k?h.__d=u=E(h,u,e):u=L(e,h,p,k,v,u),"function"==typeof n.type&&(n.__d=u)):u&&p.__e==u&&u.parentNode!=e&&(u=w(p))}for(n.__e=y,l=S;l--;)null!=k[l]&&("function"==typeof n.type&&null!=k[l].__e&&k[l].__e==n.__d&&(n.__d=w(r,l+1)),U(k[l],k[l]));if(b)for(l=0;l<b.length;l++)M(b[l],b[++l],b[++l])}function E(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?E(r,t,n):L(n,r,r,o,r.__e,t));return t}function A(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){A(e,t)})):t.push(e)),t}function L(e,t,n,r,o,i){var a,s,u;if(void 0!==t.__d)a=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),a=null;else{for(s=i,u=0;(s=s.nextSibling)&&u<r.length;u+=2)if(s==o)break e;e.insertBefore(o,i),a=i}return void 0!==a?a:o.nextSibling}function T(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||_.test(t)?n:n+"px"}function I(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||T(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||T(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?j:O,i):e.removeEventListener(t,i?j:O,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function O(e){this.l[e.type+!1](o.event?o.event(e):e)}function j(e){this.l[e.type+!0](o.event?o.event(e):e)}function N(e,t,n,r,i,a,s,u,c){var l,d,f,_,h,v,m,y,w,k,S,C,E,A=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(l=o.__b)&&l(t);try{e:if("function"==typeof A){if(y=t.props,w=(l=A.contextType)&&r[l.__c],k=l?w?w.props.value:l.__:r,n.__c?m=(d=t.__c=n.__c).__=d.__E:("prototype"in A&&A.prototype.render?t.__c=d=new A(y,k):(t.__c=d=new b(y,k),d.constructor=A,d.render=D),w&&w.sub(d),d.props=y,d.state||(d.state={}),d.context=k,d.__n=r,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=A.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=p({},d.__s)),p(d.__s,A.getDerivedStateFromProps(y,d.__s))),_=d.props,h=d.state,f)null==A.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==A.getDerivedStateFromProps&&y!==_&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(y,k),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(y,d.__s,k)||t.__v===n.__v){d.props=y,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),d.__h.length&&s.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(y,d.__s,k),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(_,h,v)}))}if(d.context=k,d.props=y,d.__v=t,d.__P=e,S=o.__r,C=0,"prototype"in A&&A.prototype.render)d.state=d.__s,d.__d=!1,S&&S(t),l=d.render(d.props,d.state,d.context);else do{d.__d=!1,S&&S(t),l=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++C<25);d.state=d.__s,null!=d.getChildContext&&(r=p(p({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(_,h)),E=null!=l&&l.type===g&&null==l.key?l.props.children:l,x(e,Array.isArray(E)?E:[E],t,n,r,i,a,s,u,c),d.base=t.__e,t.__h=null,d.__h.length&&s.push(d),m&&(d.__E=d.__=null),d.__e=!1}else null==a&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=B(n.__e,t,n,r,i,a,s,c);(l=o.diffed)&&l(t)}catch(e){t.__v=null,(c||null!=a)&&(t.__e=u,t.__h=!!c,a[a.indexOf(u)]=null),o.__e(e,t,n)}}function P(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function B(e,t,n,o,i,a,s,u){var c,l,f,_=n.props,p=t.props,v=t.type,m=0;if("svg"===v&&(i=!0),null!=a)for(;m<a.length;m++)if((c=a[m])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,a[m]=null;break}if(null==e){if(null===v)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,p.is&&p),a=null,u=!1}if(null===v)_===p||u&&e.data===p||(e.data=p);else{if(a=a&&r.call(e.childNodes),l=(_=n.props||d).dangerouslySetInnerHTML,f=p.dangerouslySetInnerHTML,!u){if(null!=a)for(_={},m=0;m<e.attributes.length;m++)_[e.attributes[m].name]=e.attributes[m].value;(f||l)&&(f&&(l&&f.__html==l.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||I(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||I(e,i,t[i],n[i],r)}(e,p,_,i,u),f)t.__k=[];else if(m=t.props.children,x(e,Array.isArray(m)?m:[m],t,n,o,i&&"foreignObject"!==v,a,s,a?a[0]:n.__k&&w(n,0),u),null!=a)for(m=a.length;m--;)null!=a[m]&&h(a[m]);u||("value"in p&&void 0!==(m=p.value)&&(m!==e.value||"progress"===v&&!m||"option"===v&&m!==_.value)&&I(e,"value",m,_.value,!1),"checked"in p&&void 0!==(m=p.checked)&&m!==e.checked&&I(e,"checked",m,_.checked,!1))}return e}function M(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function U(e,t,n){var r,i;if(o.unmount&&o.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||M(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&U(r[i],t,"function"!=typeof e.type);n||null==e.__e||h(e.__e),e.__e=e.__d=void 0}function D(e,t,n){return this.constructor(e,n)}function q(e,t,n){var i,a,s;o.__&&o.__(e,t),a=(i="function"==typeof n)?null:n&&n.__k||t.__k,s=[],N(t,e=(!i&&n||t).__k=v(g,null,[e]),a||d,d,void 0!==t.ownerSVGElement,!i&&n?[n]:a?null:t.firstChild?r.call(t.childNodes):null,s,!i&&n?n:a?a.__e:t.firstChild,i),P(s,e)}function V(e,t){q(e,t,V)}function F(e,t,n){var o,i,a,s=p({},e.props);for(a in t)"key"==a?o=t[a]:"ref"==a?i=t[a]:s[a]=t[a];return arguments.length>2&&(s.children=arguments.length>3?r.call(arguments,2):n),m(e.type,s,o||e.key,i||e.ref,null)}function R(e,t){var n={__c:t="__cC"+l++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(S)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}r=f.slice,o={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(t){e=t}throw e}},i=0,a=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},n),this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=g,s=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,C.__r=0,l=0},192:function(e,t,n){"use strict";var r=function(e,t,n,r){var o="",i="";if(n){var a=new Date;a.setTime(a.getTime()+60*n*1e3),o="; expires="+a.toGMTString()}r&&(i="; domain="+r),document.cookie=e+"="+escape(t)+o+i+"; path=/; samesite=lax"},o=function(e){var t,n,r=e+"=",o=document.cookie.split(";");for(t=0;t<o.length;t++){for(n=o[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(r))return unescape(n.substring(r.length,n.length))}return null},i={urlPrefix:"",visitsUrl:"/ahoy/visits",eventsUrl:"/ahoy/events",page:null,platform:"Web",useBeacon:!0,startOnReady:!0,trackVisits:!0,cookies:!0,cookieDomain:null,headers:{},visitParams:{},withCredentials:!1,visitDuration:240,visitorDuration:1051200},a=window.ahoy||window.Ahoy||{};a.configure=function(e){for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t])},a.configure(a);var s,u,c,l,d=window.jQuery||window.Zepto||window.$,f=!1,_=[],p="undefined"!==typeof JSON&&"undefined"!==typeof JSON.stringify,h=[];function v(){return i.urlPrefix+i.eventsUrl}function m(){return(i.useBeacon||i.trackNow)&&(e=i.headers,0===Object.keys(e).length)&&p&&"undefined"!==typeof window.navigator.sendBeacon&&!i.withCredentials;var e}function y(e,t,n){r(e,t,n,i.cookieDomain||i.domain)}function g(e){return o(e)}function b(e){r(e,"",-1)}function w(e){g("ahoy_debug")&&window.console.log(e)}function k(){for(var e;e=_.shift();)e();f=!0}function S(e,t){var n=e.matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return n?n.apply(e,[t])?e:e.parentElement?S(e.parentElement,t):null:(w("Unable to match"),null)}function C(e,t,n){document.addEventListener(e,(function(e){var r=S(e.target,t);r&&n.call(r,e)}))}function x(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function E(){i.cookies&&p&&y("ahoy_events",JSON.stringify(h),1)}function A(){var e=document.querySelector("meta[name=csrf-token]");return e&&e.content}function L(e){var t=A();t&&e.setRequestHeader("X-CSRF-Token",t)}function T(e,t,n){if(p)if(d&&d.ajax)d.ajax({type:"POST",url:e,data:JSON.stringify(t),contentType:"application/json; charset=utf-8",dataType:"json",beforeSend:L,success:n,headers:i.headers,xhrFields:{withCredentials:i.withCredentials}});else{var r=new XMLHttpRequest;for(var o in r.open("POST",e,!0),r.withCredentials=i.withCredentials,r.setRequestHeader("Content-Type","application/json"),i.headers)i.headers.hasOwnProperty(o)&&r.setRequestHeader(o,i.headers[o]);r.onload=function(){200===r.status&&n()},L(r),r.send(JSON.stringify(t))}}function I(e){var t={events:[e]};return i.cookies&&(t.visit_token=e.visit_token,t.visitor_token=e.visitor_token),delete e.visit_token,delete e.visitor_token,t}function O(e){a.ready((function(){T(v(),I(e),(function(){for(var t=0;t<h.length;t++)if(h[t].id==e.id){h.splice(t,1);break}E()}))}))}function j(e){a.ready((function(){var t,n=I(e),r=(t=document.querySelector("meta[name=csrf-param]"))&&t.content,o=A();r&&o&&(n[r]=o),n.events_json=JSON.stringify(n.events),delete n.events,window.navigator.sendBeacon(v(),function(e){var t=new FormData;for(var n in e)e.hasOwnProperty(n)&&t.append(n,e[n]);return t}(n))}))}function N(){return i.page||window.location.pathname}function P(e){return e&&e.length>0?e:null}function B(){return function(e){for(var t in e)e.hasOwnProperty(t)&&null===e[t]&&delete e[t];return e}({tag:this.tagName.toLowerCase(),id:P(this.id),class:P(this.className),page:N(),section:M(this)})}function M(e){for(;e&&e!==document;e=e.parentNode)if(e.hasAttribute("data-section"))return e.getAttribute("data-section");return null}function U(){if(f=!1,s=a.getVisitId(),u=a.getVisitorId(),c=g("ahoy_track"),!1===i.cookies||!1===i.trackVisits)w("Visit tracking disabled"),k();else if(s&&u&&!c)w("Active visit"),k();else if(s||y("ahoy_visit",s=x(),i.visitDuration),g("ahoy_visit")){w("Visit started"),u||y("ahoy_visitor",u=x(),i.visitorDuration);var e={visit_token:s,visitor_token:u,platform:i.platform,landing_page:window.location.href,screen_width:window.screen.width,screen_height:window.screen.height,js:!0};for(var t in document.referrer.length>0&&(e.referrer=document.referrer),i.visitParams)i.visitParams.hasOwnProperty(t)&&(e[t]=i.visitParams[t]);w(e),T(i.urlPrefix+i.visitsUrl,e,(function(){b("ahoy_track"),k()}))}else w("Cookies disabled"),k()}a.ready=function(e){f?e():_.push(e)},a.getVisitId=a.getVisitToken=function(){return g("ahoy_visit")},a.getVisitorId=a.getVisitorToken=function(){return g("ahoy_visitor")},a.reset=function(){return b("ahoy_visit"),b("ahoy_visitor"),b("ahoy_events"),b("ahoy_track"),!0},a.debug=function(e){return!1===e?b("ahoy_debug"):y("ahoy_debug","t",525600),!0},a.track=function(e,t){var n={name:e,properties:t||{},time:(new Date).getTime()/1e3,id:x(),js:!0};return a.ready((function(){i.cookies&&!a.getVisitId()&&U(),a.ready((function(){w(n),n.visit_token=a.getVisitId(),n.visitor_token=a.getVisitorId(),m()?j(n):(h.push(n),E(),setTimeout((function(){O(n)}),1e3))}))})),!0},a.trackView=function(e){var t={url:window.location.href,title:document.title,page:N()};if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);a.track("$view",t)},a.trackClicks=function(e){if(void 0===e)throw new Error("Missing selector");C("click",e,(function(e){var t=B.call(this,e);t.text="input"==t.tag?this.value:(this.textContent||this.innerText||this.innerHTML).replace(/[\s\r\n]+/g," ").trim(),t.href=this.href,a.track("$click",t)}))},a.trackSubmits=function(e){if(void 0===e)throw new Error("Missing selector");C("submit",e,(function(e){var t=B.call(this,e);a.track("$submit",t)}))},a.trackChanges=function(e){if(w("trackChanges is deprecated and will be removed in 0.5.0"),void 0===e)throw new Error("Missing selector");C("change",e,(function(e){var t=B.call(this,e);a.track("$change",t)}))};try{h=JSON.parse(g("ahoy_events")||"[]")}catch(q){}for(var D=0;D<h.length;D++)O(h[D]);a.start=function(){U(),a.start=function(){}},l=function(){i.startOnReady&&a.start()},"interactive"===document.readyState||"complete"===document.readyState?setTimeout(l,0):document.addEventListener("DOMContentLoaded",l),t.a=a},238:function(e,t,n){"use strict";function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return f}));var i=!1,a=0,s=document.getElementsByClassName("js-fullscreen-code")[0],u=document.body;function c(e){"Escape"==e.key&&_(e)}function l(e){e?document.body.addEventListener("keyup",c):document.body.removeEventListener("keyup",c)}function d(e){u.style.overflow=e?"hidden":""}function f(e){if(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;){t.value.addEventListener("click",_)}}catch(o){n.e(o)}finally{n.f()}}}function _(e){var t=e.currentTarget.closest(".js-code-highlight")?e.currentTarget.closest(".js-code-highlight").cloneNode(!0):null,n=t?t.getElementsByClassName("js-fullscreen-code-action"):null;i?(d(!1),window.scrollTo(0,a),l(!1),function(e){if(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;)t.value.removeEventListener("click",_)}catch(o){n.e(o)}finally{n.f()}}}(n),s.classList.remove("is-open"),s.removeChild(s.childNodes[0]),i=!1):(d(!0),a=window.scrollY,l(!0),t.classList.add("is-fullscreen"),s.appendChild(t),s.classList.add("is-open"),f(n),i=!0)}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=function(e){var t=e.resolve,n=e.reject,r=e.waitTime,o=void 0===r?20:r,i=0;return function e(){if(3e3!==i){var r,a=(document,null!==(r=document.querySelector("meta[name='csrf-token']"))?r.content:void 0),s=document.body.dataset.user;if(s&&void 0!==a){var u=JSON.parse(s);t({currentUser:u,csrfToken:a})}else i+=o,setTimeout(e,o)}else n(new Error("Couldn't find user data on page."))}};function o(){return new Promise((function(e,t){r({resolve:e,reject:t})()}))}},49:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}function i(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)}))}}var c;function l(){return d.apply(this,arguments)}function d(){return(d=u((function*(){if(c)return c;var e=(yield n.e(146).then(n.t.bind(null,209,7))).default;return c=e}))).apply(this,arguments)}function f(e){var t,n=[],i=o(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;1===a.nodeType&&(a.classList.contains("ltag_gist-liquid-tag")&&n.push(a),n.push.apply(n,r(a.querySelectorAll(".ltag_gist-liquid-tag"))))}}catch(s){i.e(s)}finally{i.f()}return n}function _(e,t){var n,r=o(t);try{var i=function(){var t=n.value,r=t.firstElementChild;e(t,r.outerHTML,{beforeWrite:function(e){return t.childElementCount>3?"":e}}),r.remove()};for(r.s();!(n=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}}function p(e,t){var n=new MutationObserver((function(e){var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var i=n.value,a=i.type,s=i.addedNodes;"childList"===a&&s.length>0&&_(t,f(s))}}catch(u){r.e(u)}finally{r.f()}}));n.observe(e,{attributes:!1,childList:!0,subtree:!0}),InstantClick.on("change",(function(){n.disconnect()})),window.addEventListener("beforeunload",(function(){n.disconnect()}))}function h(e){return v.apply(this,arguments)}function v(){return(v=u((function*(e){var t=yield l();_(t,document.querySelectorAll(".ltag_gist-liquid-tag")),p(e,t)}))).apply(this,arguments)}n.d(t,"a",(function(){return h}))},539:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(192),i=n(15),a=n(238),s=n(12),u=n(49),c=n(35);function l(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){l(i,r,o,a,s,"next",e)}function s(e){l(i,r,o,a,s,"throw",e)}a(void 0)}))}}function f(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){var t=e.tagContainer,n=e.showSubscribeAction,r=void 0!==n&&n,o=e.appleAuth,i=void 0!==o&&o,a=t.getElementsByClassName("ltag__user-subscription-tag__signed-in")[0],s=t.getElementsByClassName("ltag__user-subscription-tag__apple-auth")[0];return r?i?(a.classList.add("hidden"),void s.classList.remove("hidden")):void a.classList.remove("hidden"):(s.classList.add("hidden"),void a.classList.add("hidden"))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getElementsByClassName("ltag__user-subscription-tag__signed-out")[0];t?n.classList.remove("hidden"):n.classList.add("hidden")}function v(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getElementsByClassName("ltag__user-subscription-tag__profile-images")[0];t?(n.classList.add("signed-in"),n.classList.remove("signed-out"),e.getElementsByClassName("ltag__user-subscription-tag__subscriber-profile-image")[0].classList.remove("hidden")):(n.classList.remove("signed-in"),n.classList.add("signed-out"),e.getElementsByClassName("ltag__user-subscription-tag__subscriber-profile-image")[0].classList.add("hidden"))}function m(e){p({tagContainer:e,showSubscribeAction:!1}),h(e,!0),v(e,!1)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];p({tagContainer:e,showSubscribeAction:!0,appleAuth:t}),h(e,!1),v(e,!0),e.querySelector(".ltag__user-subscription-tag__signed-in .crayons-btn").addEventListener("click",(function(){window.Forem.showModal({title:"Confirm subscribe",contentSelector:".user-subscription-confirmation-modal .crayons-modal__box__body",overlay:!0,onOpen:function(){document.querySelector("#window-modal .ltag__user-subscription-tag____cancel-btn").addEventListener("click",window.Forem.closeModal),document.querySelector("#window-modal .ltag__user-subscription-tag__confirmation-btn").addEventListener("click",g)}})}))}function g(){window.Forem.closeModal(),function(){var e,t=f(document.getElementsByClassName("ltag__user-subscription-tag__response-message"));try{for(t.s();!(e=t.n()).done;){e.value.classList.add("hidden")}}catch(n){t.e(n)}finally{t.f()}k(!0)}(),function(){var e,t,n;b({disabled:!0,textContent:"Submitting"});var r=null!==(e=null===(t=document.getElementById("article-body"))||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.articleId)&&void 0!==e?e:null,o=userData(),i=JSON.stringify({user_subscription:{source_type:"Article",source_id:r,subscriber_email:o.email}});return getCsrfToken().then(sendFetch("user_subscriptions",i)).then((function(e){return e.json()}))}().then((function(e){if(e.success){var t=document.getElementsByClassName("ltag__user-subscription-tag");C();var n,r=f(t);try{for(r.s();!(n=r.n()).done;){p({tagContainer:n.value,showSubscribeAction:!1})}}catch(o){r.e(o)}finally{r.f()}}else w({variant:"danger",content:e.error}),b({disabled:!1,textContent:"Subscribe"})}))}function b(e){var t,n=e.disabled,r=e.textContent,o=f(document.querySelectorAll(".ltag__user-subscription-tag__signed-in .crayons-btn"));try{for(o.s();!(t=o.n()).done;){var i=t.value;i.disabled=n,i.textContent=r}}catch(a){o.e(a)}finally{o.f()}}function w(e){var t,n=e.variant,r=e.content,o=f(document.getElementsByClassName("ltag__user-subscription-tag__response-message"));try{for(o.s();!(t=o.n()).done;){var i=t.value;i.classList.remove("hidden"),i.classList.add("crayons-notice--".concat(n)),i.textContent=r}}catch(a){o.e(a)}finally{o.f()}k(!1)}function k(e){var t,n=f(document.querySelectorAll(".ltag__user-subscription-tag__signed-in .ltag__user-subscription-tag__logged-in-text"));try{for(n.s();!(t=n.n()).done;){var r=t.value;e?r.classList.remove("hidden"):r.classList.add("hidden")}}catch(o){n.e(o)}finally{n.f()}}function S(){var e=document.getElementById("article-body").dataset.articleId,t=new URLSearchParams({source_type:"Article",source_id:e}).toString(),n={Accept:"application/json","X-CSRF-Token":window.csrfToken,"Content-Type":"application/json"};return fetch("/user_subscriptions/subscribed?".concat(t),{method:"GET",headers:n,credentials:"same-origin"}).then((function(e){if(e.ok)return e.json();console.error("Base data error: ".concat(e.status," - ").concat(e.statusText))}))}function C(){var e=document.getElementsByClassName("ltag__user-subscription-tag")[0].dataset.authorUsername;w({variant:"success",content:"You are now subscribed and may receive emails from ".concat(e)})}function x(e){var t=e.profile_image_90,n=e.username;document.querySelectorAll(".ltag__user-subscription-tag__subscriber-profile-image").forEach((function(e){e.src=t,e.alt=n}))}function E(){return(E=d((function*(){var e=document.getElementsByClassName("ltag__user-subscription-tag__container");if("logged-out"!==document.querySelector("body").dataset.userStatus){var t,n=(yield Object(c.a)()).currentUser,r=n.apple_auth,o=f(e);try{for(o.s();!(t=o.n()).done;){y(t.value,r)}}catch(s){o.e(s)}finally{o.f()}x(n),S().then((function(t){var n=t.is_subscribed;n&&C();var o,i=f(e);try{for(i.s();!(o=i.n()).done;){p({tagContainer:o.value,showSubscribeAction:!n,appleAuth:r})}}catch(s){i.e(s)}finally{i.f()}}))}else{var i,a=f(e);try{for(a.s();!(i=a.n()).done;){m(i.value)}}catch(s){a.e(s)}finally{a.f()}}}))).apply(this,arguments)}var A,L=n(8);function T(e,t,n,r,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){T(i,r,o,a,s,"next",e)}function s(e){T(i,r,o,a,s,"throw",e)}a(void 0)}))}}var O=document.querySelectorAll('[data-animated="true"]');O.length>0&&n.e(142).then(n.bind(null,549)).then((function(e){(0,e.initializePausableAnimatedImages)(O)}));var j=document.getElementsByClassName("js-fullscreen-code-action");j&&Object(a.a)(j);var N=document.getElementById("snack-zone");N&&Object(r.render)(Object(r.h)(i.Snackbar,{lifespan:3}),N),top.addSnackbarItem=i.addSnackbarItem;var P=document.getElementById("article-show-more-button");if("true"!==P.dataset.initialized){if(Object(L.isNativeAndroid)("shareText"))P.addEventListener("click",(function(){return AndroidBridge.shareText(location.href)}));else{var B=Object(s.d)({triggerElementId:"article-show-more-button",dropdownContentId:"article-show-more-dropdown",onClose:function(){document.getElementById("article-copy-link-announcer").hidden=!0}}).closeDropdown;document.querySelectorAll("#article-show-more-dropdown [href]").forEach((function(e){e.addEventListener("click",(function(e){B(e)}))}))}P.dataset.initialized="true"}null===(A=document.getElementById("copy-post-url-button"))||void 0===A||A.addEventListener("click",(function(){var e=document.getElementById("copy-post-url-button").getAttribute("data-postUrl");Object(L.copyToClipboard)(e).then((function(){document.getElementById("article-copy-link-announcer").hidden=!1}))})),getCsrfToken().then(I((function*(){var e=document.body.dataset,t=e.user,o=void 0===t?null:t,a=e.userStatus,s=document.getElementById("comment-subscription"),u="logged-in"===a;if(s)try{var c=yield n.e(141).then(n.bind(null,550)),l=c.getCommentSubscriptionStatus,d=c.setCommentSubscriptionStatus,f=c.CommentSubscription,_=document.getElementById("article-body").dataset.articleId,p="not_subscribed";if(u&&null!==o)p=(yield l(_)).config;var h=function(){var e=I((function*(e){var t=yield d(_,e);Object(i.addSnackbarItem)({message:t,addCloseButton:!0})}));return function(t){return e.apply(this,arguments)}}();Object(r.render)(Object(r.h)(f,{subscriptionType:p,positionType:"static",onSubscribe:h,onUnsubscribe:h,isLoggedIn:u}),s)}catch(v){s.innerHTML='<p className="color-accent-danger">Unable to load Comment Subscription component.<br />Try refreshing the page.</p>'}})));var M,U=document.querySelector("#comments");U&&Object(u.a)(U),function(){E.apply(this,arguments)}(),document.getElementById("comments").addEventListener("click",(function(e){var t=e.target.closest("[data-tracking-name]");t&&o.a.track("Comment section click",{page:location.href,element:t.dataset.trackingName})})),M=document.getElementById("comments"),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(o.a.track("Comment section viewable",{page:location.href}),t.disconnect())}))}),{}).observe(M)}},[[539,79,0,1]]]);
//# sourceMappingURL=articlePage-c1f7aa63bb96728fc92f.chunk.js.map