(function(){function k(e,t,n){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e._chain&&(e=e._wrapped),t._chain&&(t=t._wrapped);if(e.isEqual&&x.isFunction(e.isEqual))return e.isEqual(t);if(t.isEqual&&x.isFunction(t.isEqual))return t.isEqual(e);var r=f.call(e);if(r!=f.call(t))return!1;switch(r){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var i=n.length;while(i--)if(n[i]==e)return!0;n.push(e);var s=0,o=!0;if(r=="[object Array]"){s=e.length,o=s==t.length;if(o)while(s--)if(!(o=s in e==s in t&&k(e[s],t[s],n)))break}else{if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return!1;for(var u in e)if(x.has(e,u)){s++;if(!(o=x.has(t,u)&&k(e[u],t[u],n)))break}if(o){for(u in t)if(x.has(t,u)&&!(s--))break;o=!s}}return n.pop(),o}var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.unshift,f=i.toString,l=i.hasOwnProperty,c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind,x=function(e){return new H(e)};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.3.3";var T=x.each=x.forEach=function(e,t,r){if(e==null)return;if(c&&e.forEach===c)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(i in e&&t.call(r,e[i],i,e)===n)return}else for(var o in e)if(x.has(e,o)&&t.call(r,e[o],o,e)===n)return};x.map=x.collect=function(e,t,n){var r=[];return e==null?r:h&&e.map===h?e.map(t,n):(T(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),e.length===+e.length&&(r.length=e.length),r)},x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(p&&e.reduce===p)return r&&(t=x.bind(t,r)),i?e.reduce(t,n):e.reduce(t);T(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduceRight===d)return r&&(t=x.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=x.toArray(e).reverse();return r&&!i&&(t=x.bind(t,r)),i?x.reduce(s,t,n,r):x.reduce(s,t)},x.find=x.detect=function(e,t,n){var r;return N(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},x.filter=x.select=function(e,t,n){var r=[];return e==null?r:v&&e.filter===v?e.filter(t,n):(T(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},x.reject=function(e,t,n){var r=[];return e==null?r:(T(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)}),r)},x.every=x.all=function(e,t,r){var i=!0;return e==null?i:m&&e.every===m?e.every(t,r):(T(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var N=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=!1;return e==null?i:g&&e.some===g?e.some(t,r):(T(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};x.include=x.contains=function(e,t){var n=!1;return e==null?n:y&&e.indexOf===y?e.indexOf(t)!=-1:(n=N(e,function(e){return e===t}),n)},x.invoke=function(e,t){var n=u.call(arguments,2);return x.map(e,function(e){return(x.isFunction(t)?t||e:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,function(e){return e[t]})},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0])return Math.max.apply(Math,e);if(!t&&x.isEmpty(e))return-Infinity;var r={computed:-Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0])return Math.min.apply(Math,e);if(!t&&x.isEmpty(e))return Infinity;var r={computed:Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},x.shuffle=function(e){var t=[],n;return T(e,function(e,r,i){n=Math.floor(Math.random()*(r+1)),t[r]=t[n],t[n]=e}),t},x.sortBy=function(e,t,n){var r=x.isFunction(t)?t:function(e){return e[t]};return x.pluck(x.map(e,function(e,t,i){return{value:e,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;return n===void 0?1:r===void 0?-1:n<r?-1:n>r?1:0}),"value")},x.groupBy=function(e,t){var n={},r=x.isFunction(t)?t:function(e){return e[t]};return T(e,function(e,t){var i=r(e,t);(n[i]||(n[i]=[])).push(e)}),n},x.sortedIndex=function(e,t,n){n||(n=x.identity);var r=n(t),i=0,s=e.length;while(i<s){var o=i+s>>1;n(e[o])<r?i=o+1:s=o}return i},x.toArray=function(e){return e?x.isArray(e)?u.call(e):x.isArguments(e)?u.call(e):e.toArray&&x.isFunction(e.toArray)?e.toArray():x.values(e):[]},x.size=function(e){return x.isArray(e)?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return t!=null&&!n?u.call(e,0,t):e[0]},x.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},x.last=function(e,t,n){return t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},x.rest=x.tail=function(e,t,n){return u.call(e,t==null||n?1:t)},x.compact=function(e){return x.filter(e,function(e){return!!e})},x.flatten=function(e,t){return function n(e,r){return T(e,function(e){x.isArray(e)?t?o.apply(r,e):n(e,r):r.push(e)}),r}(e,[])},x.without=function(e){return x.difference(e,u.call(arguments,1))},x.uniq=x.unique=function(e,t,n){var r=n?x.map(e,n):e,i=[];return e.length<3&&(t=!0),x.reduce(r,function(n,r,s){if(t?x.last(n)!==r||!n.length:!x.include(n,r))n.push(r),i.push(e[s]);return n},[]),i},x.union=function(){return x.uniq(x.flatten(arguments,!0))},x.intersection=x.intersect=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})},x.difference=function(e){var t=x.flatten(u.call(arguments,1),!0);return x.filter(e,function(e){return!x.include(t,e)})},x.zip=function(){var e=u.call(arguments),t=x.max(x.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=x.pluck(e,""+r);return n},x.indexOf=function(e,t,n){if(e==null)return-1;var r,i;if(n)return r=x.sortedIndex(e,t),e[r]===t?r:-1;if(y&&e.indexOf===y)return e.indexOf(t);for(r=0,i=e.length;r<i;r++)if(r in e&&e[r]===t)return r;return-1},x.lastIndexOf=function(e,t){if(e==null)return-1;if(b&&e.lastIndexOf===b)return e.lastIndexOf(t);var n=e.length;while(n--)if(n in e&&e[n]===t)return n;return-1},x.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var C=function(){};x.bind=function(t,n){var r,i;if(t.bind===S&&S)return S.apply(t,u.call(arguments,1));if(!x.isFunction(t))throw new TypeError;return i=u.call(arguments,2),r=function(){if(this instanceof r){C.prototype=t.prototype;var e=new C,s=t.apply(e,i.concat(u.call(arguments)));return Object(s)===s?s:e}return t.apply(n,i.concat(u.call(arguments)))}},x.bindAll=function(e){var t=u.call(arguments,1);return t.length==0&&(t=x.functions(e)),T(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))},x.throttle=function(e,t){var n,r,i,s,o,u,a=x.debounce(function(){o=s=!1},t);return function(){n=this,r=arguments;var f=function(){i=null,o&&e.apply(n,r),a()};return i||(i=setTimeout(f,t)),s?o=!0:(s=!0,u=e.apply(n,r)),a(),u}},x.debounce=function(e,t,n){var r;return function(){var i=this,s=arguments,o=function(){r=null,n||e.apply(i,s)},u=n&&!r;clearTimeout(r),r=setTimeout(o,t),u&&e.apply(i,s)}},x.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments))}},x.wrap=function(e,t){return function(){var n=[e].concat(u.call(arguments,0));return t.apply(this,n)}},x.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)x.has(e,n)&&(t[t.length]=n);return t},x.values=function(e){return x.map(e,x.identity)},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return T(u.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={};return T(x.flatten(u.call(arguments,1)),function(n){n in e&&(t[n]=e[n])}),t},x.defaults=function(e){return T(u.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e},x.isEqual=function(e,t){return k(e,t,[])},x.isEmpty=function(e){if(e==null)return!0;if(x.isArray(e)||x.isString(e))return e.length===0;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!!e&&e.nodeType==1},x.isArray=w||function(e){return f.call(e)=="[object Array]"},x.isObject=function(e){return e===Object(e)},x.isArguments=function(e){return f.call(e)=="[object Arguments]"},x.isArguments(arguments)||(x.isArguments=function(e){return!!e&&!!x.has(e,"callee")}),x.isFunction=function(e){return f.call(e)=="[object Function]"},x.isString=function(e){return f.call(e)=="[object String]"},x.isNumber=function(e){return f.call(e)=="[object Number]"},x.isFinite=function(e){return x.isNumber(e)&&isFinite(e)},x.isNaN=function(e){return e!==e},x.isBoolean=function(e){return e===!0||e===!1||f.call(e)=="[object Boolean]"},x.isDate=function(e){return f.call(e)=="[object Date]"},x.isRegExp=function(e){return f.call(e)=="[object RegExp]"},x.isNull=function(e){return e===null},x.isUndefined=function(e){return e===void 0},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)},x.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},x.result=function(e,t){if(e==null)return null;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){T(x.functions(e),function(t){j(t,x[t]=e[t])})};var L=0;x.uniqueId=function(e){var t=L++;return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/.^/,O={"\\":"\\","'":"'",r:"\r",n:"\n",t:"	",u2028:"\u2028",u2029:"\u2029"};for(var M in O)O[O[M]]=M;var _=/\\|'|\r|\n|\t|\u2028|\u2029/g,D=/\\(\\|'|r|n|t|u2028|u2029)/g,P=function(e){return e.replace(D,function(e,t){return O[t]})};x.template=function(e,t,n){n=x.defaults(n||{},x.templateSettings);var r="__p+='"+e.replace(_,function(e){return"\\"+O[e]}).replace(n.escape||A,function(e,t){return"'+\n((__t=("+P(t)+"))==null?'':_.escape(__t))+\n'"}).replace(n.interpolate||A,function(e,t){return"'+\n((__t=("+P(t)+"))==null?'':__t)+\n'"}).replace(n.evaluate||A,function(e,t){return"';\n"+P(t)+"\n;__p+='"})+"';\n";n.variable||(r="with(obj||{}){\n"+r+"}\n"),r="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'')};\n"+r+"return __p;\n";var i=new Function(n.variable||"obj","_",r);if(t)return i(t,x);var s=function(e){return i.call(this,e,x)};return s.source="function("+(n.variable||"obj")+"){\n"+r+"}",s},x.chain=function(e){return x(e).chain()};var H=function(e){this._wrapped=e};x.prototype=H.prototype;var B=function(e,t){return t?x(e).chain():e},j=function(e,t){H.prototype[e]=function(){var e=u.call(arguments);return a.call(e,this._wrapped),B(t.apply(x,e),this._chain)}};x.mixin(x),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];H.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],B(n,this._chain)}}),T(["concat","join","slice"],function(e){var t=r[e];H.prototype[e]=function(){return B(t.apply(this._wrapped,arguments),this._chain)}}),H.prototype.chain=function(){return this._chain=!0,this},H.prototype.value=function(){return this._wrapped}}).call(this)