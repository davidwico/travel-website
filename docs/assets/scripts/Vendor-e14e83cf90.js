!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({10:function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,c="addEventListener",o="getAttribute",u=e[c],l=e.setTimeout,d=e.requestAnimationFrame||l,f=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],h={},A=Array.prototype.forEach,g=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[o]("class")||"")&&h[t]},v=function(e,t){g(e,t)||e.setAttribute("class",(e[o]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[o]("class")||"").replace(n," "))},z=function(e,t,n){var r=n?c:"removeEventListener";n&&z(e,t),m.forEach(function(n){e[r](n,t)})},w=function(e,r,i,s,a){var c=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,c.initCustomEvent(r,!s,!a,i),e.dispatchEvent(c),c},b=function(t,n){var i;!a&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},E=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},c=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?l:d)(a)))};return c._lsFlush=a,c}(),S=function(e,t){return t?function(){x(e)}:function(){var t=this,n=arguments;x(function(){e.apply(t,n)})}},T=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?l(i,99-e):(f||r)(r)};return function(){n=s.now(),t||(t=l(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,l(function(){r.init&&L()})}();var M=function(){var a,d,m,h,E,M,L,P,B,W,D,k,N,$,_=/^img$/i,I=/^iframe$/i,F="onscroll"in e&&!/glebot/.test(navigator.userAgent),U=0,H=0,O=-1,Q=function(e){H--,e&&e.target&&z(e.target,Q),(!e||H<0||!e.target)&&(H=0)},G=function(e,n){var r,s=e,a="hidden"==C(t.body,"visibility")||"hidden"!=C(e,"visibility");for(P-=n,D+=n,B-=n,W+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(C(s,"opacity")||1)>0)&&"visible"!=C(s,"overflow")&&(r=s.getBoundingClientRect(),a=W>r.left&&B<r.right&&D>r.top-1&&P<r.bottom+1);return a},j=function(){var e,s,c,u,l,f,p,m,A,g=n.elements;if((h=r.loadMode)&&H<8&&(e=g.length)){s=0,O++,null==N&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),k=r.expand,N=k*r.expFactor),U<N&&H<1&&O>2&&h>2&&!t.hidden?(U=N,O=0):U=h>1&&O>1&&H<6?k:0;for(;s<e;s++)if(g[s]&&!g[s]._lazyRace)if(F)if((m=g[s][o]("data-expand"))&&(f=1*m)||(f=U),A!==f&&(M=innerWidth+f*$,L=innerHeight+f,p=-1*f,A=f),c=g[s].getBoundingClientRect(),(D=c.bottom)>=p&&(P=c.top)<=L&&(W=c.right)>=p*$&&(B=c.left)<=M&&(D||W||B||P)&&(r.loadHidden||"hidden"!=C(g[s],"visibility"))&&(d&&H<3&&!m&&(h<3||O<4)||G(g[s],f))){if(Z(g[s]),l=!0,H>9)break}else!l&&d&&!u&&H<4&&O<4&&h>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(D||W||B||P||"auto"!=g[s][o](r.sizesAttr)))&&(u=a[0]||g[s]);else Z(g[s]);u&&!l&&Z(u)}},q=function(e){var t,n=0,i=r.ricTimeout,a=function(){t=!1,n=s.now(),e()},c=f&&r.ricTimeout?function(){f(a,{timeout:i}),i!==r.ricTimeout&&(i=r.ricTimeout)}:S(function(){l(a)},!0);return function(e){var r;(e=!0===e)&&(i=33),t||(t=!0,(r=125-(s.now()-n))<0&&(r=0),e||r<9&&f?c():l(c,r))}}(j),V=function(e){v(e.target,r.loadedClass),y(e.target,r.loadingClass),z(e.target,J),w(e.target,"lazyloaded")},K=S(V),J=function(e){K({target:e.target})},X=function(e){var t,n=e[o](r.srcsetAttr);(t=r.customMedia[e[o]("data-media")||e[o]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Y=S(function(e,t,n,i,s){var a,c,u,d,f,h;(f=w(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?v(e,r.autosizesClass):e.setAttribute("sizes",i)),c=e[o](r.srcsetAttr),a=e[o](r.srcAttr),s&&(u=e.parentNode,d=u&&p.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(c||a||d),f={target:e},h&&(z(e,Q,!0),clearTimeout(m),m=l(Q,2500),v(e,r.loadingClass),z(e,J,!0)),d&&A.call(u.getElementsByTagName("source"),X),c?e.setAttribute("srcset",c):a&&!d&&(I.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),s&&(c||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,y(e,r.lazyClass),x(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?Q(f):H--,V(f))},!0)}),Z=function(e){var t,n=_.test(e.nodeName),i=n&&(e[o](r.sizesAttr)||e[o]("sizes")),s="auto"==i;(!s&&d||!n||!e[o]("src")&&!e.srcset||e.complete||g(e,r.errorClass)||!g(e,r.lazyClass))&&(t=w(e,"lazyunveilread").detail,s&&R.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,Y(e,t,s,i,n))},ee=function(){if(!d)if(s.now()-E<999)l(ee,999);else{var e=T(function(){r.loadMode=3,q()});d=!0,r.loadMode=3,q(),u("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){E=s.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),$=r.hFac,u("scroll",q,!0),u("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[c]("DOMNodeInserted",q,!0),i[c]("DOMAttrModified",q,!0),setInterval(q,999)),u("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[c](e,q,!0)}),/d$|^c/.test(t.readyState)?ee():(u("load",ee),t[c]("DOMContentLoaded",q),l(ee,2e4)),n.elements.length?(j(),x._lsFlush()):q()},checkElems:q,unveil:Z}}(),R=function(){var e,n=S(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=E(e,s,r),(i=w(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=T(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),u("resize",s)},checkElems:s,updateElem:i}}(),L=function(){L.i||(L.i=!0,R._(),M._())};return n={cfg:r,autoSizer:R,loader:M,init:L,uP:b,aC:v,rC:y,hC:g,fire:w,gW:E,rAF:x}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)},8:function(e,t,n){"use strict";n(9),n(10)},9:function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s}())}(window),function(i,s,a){"use strict";s.createElement("picture");var c,o,u,l={},d=!1,f=function(){},p=s.createElement("img"),m=p.getAttribute,h=p.setAttribute,A=p.removeAttribute,g=s.documentElement,v={},y={algorithm:""},z="data-pfsrc",w=z+"set",b=navigator.userAgent,C=/rident/.test(b)||/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1>35,E="currentSrc",x=/\s+\+?\d+(e\d+)?w/,S=/(\([^)]+\))?\s*(.+)/,T=i.picturefillCFG,M="font-size:100%!important;",R=!0,L={},P={},B=i.devicePixelRatio,W={px:1,in:96},D=s.createElement("a"),k=!1,N=/^[ \t\n\r\u000c]+/,$=/^[, \t\n\r\u000c]+/,_=/^[^ \t\n\r\u000c]+/,I=/[,]+$/,F=/^\d+$/,U=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,H=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},O=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function Q(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var G=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=O(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var i;if(!(n in L))if(L[n]=!1,r&&(i=n.match(e)))L[n]=i[1]*W[i[2]];else try{L[n]=new Function("e",t(n))(W)}catch(e){}return L[n]}}(),j=function(e,t){return e.w?(e.cWidth=l.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},q=function(e){if(d){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=(t=i.elements||l.qsa(i.context||s,i.reevaluate||i.reselect?l.sel:l.selShort)).length){for(l.setupRun(i),k=!0,n=0;n<r;n++)l.fillImg(t[n],i);l.teardownRun(i)}}};i.console&&console.warn,E in p||(E="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0;v["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");function V(e,t,n,r){var i,s,a;return"saveData"===y.algorithm?e>2.7?a=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),a=e+s):a=n>1?Math.sqrt(e*t):e,a>n}function K(e,t){return e.res-t.res}function J(e,t){var n,r,i;if(e&&t)for(i=l.parseSet(t),e=l.makeUrl(e),n=0;n<i.length;n++)if(e===l.makeUrl(i[n].url)){r=i[n];break}return r}l.ns=("pf"+(new Date).getTime()).substr(0,9),l.supSrcset="srcset"in p,l.supSizes="sizes"in p,l.supPicture=!!i.HTMLPictureElement,l.supSrcset&&l.supPicture&&!l.supSizes&&(X=s.createElement("img"),p.srcset="data:,a",X.src="data:,a",l.supSrcset=p.complete===X.complete,l.supPicture=l.supSrcset&&l.supPicture);var X;for(l.supSrcset&&!l.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(l.supSizes=!0),o=l.supSrcset&&!l.supSizes,d=!0,setTimeout(q)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():d=!0,l.selShort="picture>img,img[srcset]",l.sel=l.selShort,l.cfg=y,l.DPR=B||1,l.u=W,l.types=v,l.setSize=f,l.makeUrl=O(function(e){return D.href=e,D.href}),l.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},l.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?l.matchesMedia=function(e){return!e||matchMedia(e).matches}:l.matchesMedia=l.mMQ,l.matchesMedia.apply(this,arguments)},l.mMQ=function(e){return!e||G(e)},l.calcLength=function(e){var t=G(e,!0)||!1;return t<0&&(t=!1),t},l.supportsType=function(e){return!e||v[e]},l.parseSize=O(function(e){var t=(e||"").match(S);return{media:t&&t[1],length:t&&t[2]}}),l.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(u));if(r)return n=r[0],u+=n.length,n}var r,i,s,a,c,o=e.length,u=0,l=[];function d(){var e,n,s,a,c,o,u,d,f,p=!1,m={};for(a=0;a<i.length;a++)o=(c=i[a])[c.length-1],u=c.substring(0,c.length-1),d=parseInt(u,10),f=parseFloat(u),F.test(u)&&"w"===o?((e||n)&&(p=!0),0===d?p=!0:e=d):U.test(u)&&"x"===o?((e||n||s)&&(p=!0),f<0?p=!0:n=f):F.test(u)&&"h"===o?((s||n)&&(p=!0),0===d?p=!0:s=d):p=!0;p||(m.url=r,e&&(m.w=e),n&&(m.d=n),s&&(m.h=s),s||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,l.push(m))}function f(){for(n(N),s="",a="in descriptor";;){if(c=e.charAt(u),"in descriptor"===a)if(Q(c))s&&(i.push(s),s="",a="after descriptor");else{if(","===c)return u+=1,s&&i.push(s),void d();if("("===c)s+=c,a="in parens";else{if(""===c)return s&&i.push(s),void d();s+=c}}else if("in parens"===a)if(")"===c)s+=c,a="in descriptor";else{if(""===c)return i.push(s),void d();s+=c}else if("after descriptor"===a)if(Q(c));else{if(""===c)return void d();a="in descriptor",u-=1}u+=1}}for(;;){if(n($),u>=o)return l;r=n(_),i=[],","===r.slice(-1)?(r=r.replace(I,""),d()):f()}}(e.srcset,e)),e.cands},l.getEmValue=function(){var e;if(!c&&(e=s.body)){var t=s.createElement("div"),n=g.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",g.style.cssText=M,e.style.cssText=M,e.appendChild(t),c=t.offsetWidth,e.removeChild(t),c=parseFloat(c,10),g.style.cssText=n,e.style.cssText=r}return c||16},l.calcListLength=function(e){if(!(e in P)||y.uT){var t=l.calcLength(function(e){var t,n,r,i,s,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,o=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],i=[],s=0,a=0,c=!1;function o(){n&&(r.push(n),n="")}function u(){r[0]&&(i.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return o(),u(),i;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(Q(t)){if(e.charAt(a-1)&&Q(e.charAt(a-1))||!n){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){o(),u(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<r;t++)if(s=(i=n[t])[i.length-1],u=s,c.test(u)&&parseFloat(u)>=0||o.test(u)||"0"===u||"-0"===u||"+0"===u){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),l.matchesMedia(i))return a}var u;return"100vw"}(e));P[e]=t||W.width}return P[e]},l.setRes=function(e){var t;if(e)for(var n=0,r=(t=l.parseSet(e)).length;n<r;n++)j(t[n],e.sizes);return t},l.setRes.res=j,l.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,c,o,u,d,f=t[l.ns],p=l.DPR;if(c=f.curSrc||t[E],(o=f.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[l.ns].sets)&&n[n.length-1]),(r=J(t,n))&&(t=l.makeUrl(t),e[l.ns].curSrc=t,e[l.ns].curCan=r,r.res||j(r,r.set.sizes)),r}(t,c,e[0].set))&&o.set===e[0].set&&((d=C&&!t.complete&&o.res-.1>p)||(o.cached=!0,o.res>=p&&(a=o))),!a)for(e.sort(K),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=p){a=e[i=r-1]&&(d||c!==l.makeUrl(n.url))&&V(e[i].res,n.res,p,e[i].cached)?e[i]:n;break}a&&(u=l.makeUrl(a.url),f.curSrc=u,f.curCan=a,u!==c&&l.setSrc(t,a),l.setSize(t))}},l.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},l.getSet=function(e){var t,n,r,i=!1,s=e[l.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&l.matchesMedia(n.media)&&(r=l.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},l.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[l.ns];(void 0===u.src||n.src)&&(u.src=m.call(e,"src"),u.src?h.call(e,z,u.src):A.call(e,z)),(void 0===u.srcset||n.srcset||!l.supSrcset||e.srcset)&&(r=m.call(e,"srcset"),u.srcset=r,a=!0),u.sets=[],c&&(u.pic=!0,function(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[l.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,u.sets)),u.srcset?(i={srcset:u.srcset,sizes:m.call(e,"sizes")},u.sets.push(i),(s=(o||u.src)&&x.test(u.srcset||""))||!u.src||J(u.src,i)||i.has1x||(i.srcset+=", "+u.src,i.cands.push({url:u.src,d:1,set:i}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=void 0,u.supported=!(c||i&&!l.supSrcset||s&&!l.supSizes),a&&l.supSrcset&&!u.supported&&(r?(h.call(e,w,r),e.srcset=""):A.call(e,w)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==l.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},l.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[l.ns]||(e[l.ns]={}),n=e[l.ns],(r||n.evaled!==u)&&(n.parsed&&!t.reevaluate||l.parseSets(e,e.parentNode,t),n.supported?n.evaled=u:function(e){var t,n=l.getSet(e),r=!1;"pending"!==n&&(r=u,n&&(t=l.setRes(n),l.applySetCandidate(t,e))),e[l.ns].evaled=r}(e))},l.setupRun=function(){k&&!R&&B===i.devicePixelRatio||(R=!1,B=i.devicePixelRatio,L={},P={},l.DPR=B||1,W.width=Math.max(i.innerWidth||0,g.clientWidth),W.height=Math.max(i.innerHeight||0,g.clientHeight),W.vw=W.width/100,W.vh=W.height/100,u=[W.height,W.width,B].join("-"),W.em=l.getEmValue(),W.rem=W.em)},l.supPicture?(q=f,l.fillImg=f):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(l.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=g.clientHeight;H(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){R=Math.max(i.innerWidth||0,g.clientWidth)!==W.width||g.clientHeight!==a,a=g.clientHeight,R&&l.fillImgs()},99)),H(s,"readystatechange",n)}(),l.picturefill=q,l.fillImgs=q,l.teardownRun=f,q._=l,i.picturefillCFG={pf:l,push:function(e){var t=e.shift();"function"==typeof l[t]?l[t].apply(l,e):(y[t]=e[0],k&&l.fillImgs({reselect:!0}))}};T&&T.length;)i.picturefillCFG.push(T.shift());i.picturefill=q,"object"==typeof e&&"object"==typeof e.exports?e.exports=q:void 0===(r=function(){return q}.call(t,n,t,e))||(e.exports=r),l.supPicture||(v["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){v[e]=!1,q()},n.onload=function(){v[e]=1===n.width,q()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)}});