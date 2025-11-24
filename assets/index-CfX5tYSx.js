(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var Lh={exports:{}},Zo={};var mx;function OS(){if(mx)return Zo;mx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,r,c){var u=null;if(c!==void 0&&(u=""+c),r.key!==void 0&&(u=""+r.key),"key"in r){c={};for(var h in r)h!=="key"&&(c[h]=r[h])}else c=r;return r=c.ref,{$$typeof:o,type:a,key:u,ref:r!==void 0?r:null,props:c}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var gx;function IS(){return gx||(gx=1,Lh.exports=OS()),Lh.exports}var cn=IS(),Nh={exports:{}},st={};var xx;function PS(){if(xx)return st;xx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function v(I,se,Se){this.props=I,this.context=se,this.refs=b,this.updater=Se||M}v.prototype.isReactComponent={},v.prototype.setState=function(I,se){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,se,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=v.prototype;function D(I,se,Se){this.props=I,this.context=se,this.refs=b,this.updater=Se||M}var O=D.prototype=new L;O.constructor=D,E(O,v.prototype),O.isPureReactComponent=!0;var H=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function w(I,se,Se){var Te=Se.ref;return{$$typeof:o,type:I,key:se,ref:Te!==void 0?Te:null,props:Se}}function C(I,se){return w(I.type,se,I.props)}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ne(I){var se={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Se){return se[Se]})}var le=/\/+/g;function me(I,se){return typeof I=="object"&&I!==null&&I.key!=null?ne(""+I.key):se.toString(36)}function fe(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(se){I.status==="pending"&&(I.status="fulfilled",I.value=se)},function(se){I.status==="pending"&&(I.status="rejected",I.reason=se)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,se,Se,Te,Oe){var ie=typeof I;(ie==="undefined"||ie==="boolean")&&(I=null);var ce=!1;if(I===null)ce=!0;else switch(ie){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(I.$$typeof){case o:case e:ce=!0;break;case x:return ce=I._init,z(ce(I._payload),se,Se,Te,Oe)}}if(ce)return Oe=Oe(I),ce=Te===""?"."+me(I,0):Te,H(Oe)?(Se="",ce!=null&&(Se=ce.replace(le,"$&/")+"/"),z(Oe,se,Se,"",function(ke){return ke})):Oe!=null&&(k(Oe)&&(Oe=C(Oe,Se+(Oe.key==null||I&&I.key===Oe.key?"":(""+Oe.key).replace(le,"$&/")+"/")+ce)),se.push(Oe)),1;ce=0;var Ce=Te===""?".":Te+":";if(H(I))for(var Fe=0;Fe<I.length;Fe++)Te=I[Fe],ie=Ce+me(Te,Fe),ce+=z(Te,se,Se,ie,Oe);else if(Fe=y(I),typeof Fe=="function")for(I=Fe.call(I),Fe=0;!(Te=I.next()).done;)Te=Te.value,ie=Ce+me(Te,Fe++),ce+=z(Te,se,Se,ie,Oe);else if(ie==="object"){if(typeof I.then=="function")return z(fe(I),se,Se,Te,Oe);throw se=String(I),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return ce}function j(I,se,Se){if(I==null)return I;var Te=[],Oe=0;return z(I,Te,"","",function(ie){return se.call(Se,ie,Oe++)}),Te}function Y(I){if(I._status===-1){var se=I._result;se=se(),se.then(function(Se){(I._status===0||I._status===-1)&&(I._status=1,I._result=Se)},function(Se){(I._status===0||I._status===-1)&&(I._status=2,I._result=Se)}),I._status===-1&&(I._status=0,I._result=se)}if(I._status===1)return I._result.default;throw I._result}var xe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},_e={map:j,forEach:function(I,se,Se){j(I,function(){se.apply(this,arguments)},Se)},count:function(I){var se=0;return j(I,function(){se++}),se},toArray:function(I){return j(I,function(se){return se})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return st.Activity=g,st.Children=_e,st.Component=v,st.Fragment=n,st.Profiler=r,st.PureComponent=D,st.StrictMode=a,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,st.__COMPILER_RUNTIME={__proto__:null,c:function(I){return P.H.useMemoCache(I)}},st.cache=function(I){return function(){return I.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(I,se,Se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Te=E({},I.props),Oe=I.key;if(se!=null)for(ie in se.key!==void 0&&(Oe=""+se.key),se)!$.call(se,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&se.ref===void 0||(Te[ie]=se[ie]);var ie=arguments.length-2;if(ie===1)Te.children=Se;else if(1<ie){for(var ce=Array(ie),Ce=0;Ce<ie;Ce++)ce[Ce]=arguments[Ce+2];Te.children=ce}return w(I.type,Oe,Te)},st.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},st.createElement=function(I,se,Se){var Te,Oe={},ie=null;if(se!=null)for(Te in se.key!==void 0&&(ie=""+se.key),se)$.call(se,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Oe[Te]=se[Te]);var ce=arguments.length-2;if(ce===1)Oe.children=Se;else if(1<ce){for(var Ce=Array(ce),Fe=0;Fe<ce;Fe++)Ce[Fe]=arguments[Fe+2];Oe.children=Ce}if(I&&I.defaultProps)for(Te in ce=I.defaultProps,ce)Oe[Te]===void 0&&(Oe[Te]=ce[Te]);return w(I,ie,Oe)},st.createRef=function(){return{current:null}},st.forwardRef=function(I){return{$$typeof:h,render:I}},st.isValidElement=k,st.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:Y}},st.memo=function(I,se){return{$$typeof:d,type:I,compare:se===void 0?null:se}},st.startTransition=function(I){var se=P.T,Se={};P.T=Se;try{var Te=I(),Oe=P.S;Oe!==null&&Oe(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,xe)}catch(ie){xe(ie)}finally{se!==null&&Se.types!==null&&(se.types=Se.types),P.T=se}},st.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},st.use=function(I){return P.H.use(I)},st.useActionState=function(I,se,Se){return P.H.useActionState(I,se,Se)},st.useCallback=function(I,se){return P.H.useCallback(I,se)},st.useContext=function(I){return P.H.useContext(I)},st.useDebugValue=function(){},st.useDeferredValue=function(I,se){return P.H.useDeferredValue(I,se)},st.useEffect=function(I,se){return P.H.useEffect(I,se)},st.useEffectEvent=function(I){return P.H.useEffectEvent(I)},st.useId=function(){return P.H.useId()},st.useImperativeHandle=function(I,se,Se){return P.H.useImperativeHandle(I,se,Se)},st.useInsertionEffect=function(I,se){return P.H.useInsertionEffect(I,se)},st.useLayoutEffect=function(I,se){return P.H.useLayoutEffect(I,se)},st.useMemo=function(I,se){return P.H.useMemo(I,se)},st.useOptimistic=function(I,se){return P.H.useOptimistic(I,se)},st.useReducer=function(I,se,Se){return P.H.useReducer(I,se,Se)},st.useRef=function(I){return P.H.useRef(I)},st.useState=function(I){return P.H.useState(I)},st.useSyncExternalStore=function(I,se,Se){return P.H.useSyncExternalStore(I,se,Se)},st.useTransition=function(){return P.H.useTransition()},st.version="19.2.0",st}var _x;function dp(){return _x||(_x=1,Nh.exports=PS()),Nh.exports}var ul=dp(),Oh={exports:{}},Qo={},Ih={exports:{}},Ph={};var vx;function BS(){return vx||(vx=1,(function(o){function e(z,j){var Y=z.length;z.push(j);e:for(;0<Y;){var xe=Y-1>>>1,_e=z[xe];if(0<r(_e,j))z[xe]=j,z[Y]=_e,Y=xe;else break e}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var j=z[0],Y=z.pop();if(Y!==j){z[0]=Y;e:for(var xe=0,_e=z.length,I=_e>>>1;xe<I;){var se=2*(xe+1)-1,Se=z[se],Te=se+1,Oe=z[Te];if(0>r(Se,Y))Te<_e&&0>r(Oe,Se)?(z[xe]=Oe,z[Te]=Y,xe=Te):(z[xe]=Se,z[se]=Y,xe=se);else if(Te<_e&&0>r(Oe,Y))z[xe]=Oe,z[Te]=Y,xe=Te;else break e}}return j}function r(z,j){var Y=z.sortIndex-j.sortIndex;return Y!==0?Y:z.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();o.unstable_now=function(){return u.now()-h}}var p=[],d=[],x=1,g=null,_=3,y=!1,M=!1,E=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var j=n(d);j!==null;){if(j.callback===null)a(d);else if(j.startTime<=z)a(d),j.sortIndex=j.expirationTime,e(p,j);else break;j=n(d)}}function H(z){if(E=!1,O(z),!M)if(n(p)!==null)M=!0,N||(N=!0,ne());else{var j=n(d);j!==null&&fe(H,j.startTime-z)}}var N=!1,P=-1,$=5,w=-1;function C(){return b?!0:!(o.unstable_now()-w<$)}function k(){if(b=!1,N){var z=o.unstable_now();w=z;var j=!0;try{e:{M=!1,E&&(E=!1,L(P),P=-1),y=!0;var Y=_;try{t:{for(O(z),g=n(p);g!==null&&!(g.expirationTime>z&&C());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,_=g.priorityLevel;var _e=xe(g.expirationTime<=z);if(z=o.unstable_now(),typeof _e=="function"){g.callback=_e,O(z),j=!0;break t}g===n(p)&&a(p),O(z)}else a(p);g=n(p)}if(g!==null)j=!0;else{var I=n(d);I!==null&&fe(H,I.startTime-z),j=!1}}break e}finally{g=null,_=Y,y=!1}j=void 0}}finally{j?ne():N=!1}}}var ne;if(typeof D=="function")ne=function(){D(k)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=k,ne=function(){me.postMessage(null)}}else ne=function(){v(k,0)};function fe(z,j){P=v(function(){z(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(z){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var Y=_;_=j;try{return z()}finally{_=Y}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=_;_=z;try{return j()}finally{_=Y}},o.unstable_scheduleCallback=function(z,j,Y){var xe=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xe+Y:xe):Y=xe,z){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Y+_e,z={id:x++,callback:j,priorityLevel:z,startTime:Y,expirationTime:_e,sortIndex:-1},Y>xe?(z.sortIndex=Y,e(d,z),n(p)===null&&z===n(d)&&(E?(L(P),P=-1):E=!0,fe(H,Y-xe))):(z.sortIndex=_e,e(p,z),M||y||(M=!0,N||(N=!0,ne()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var j=_;return function(){var Y=_;_=j;try{return z.apply(this,arguments)}finally{_=Y}}}})(Ph)),Ph}var yx;function zS(){return yx||(yx=1,Ih.exports=BS()),Ih.exports}var Bh={exports:{}},On={};var Sx;function FS(){if(Sx)return On;Sx=1;var o=dp();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)d+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function c(p,d,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:p,containerInfo:d,implementation:x}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,On.createPortal=function(p,d){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,x)},On.flushSync=function(p){var d=u.T,x=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=x,a.d.f()}},On.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},On.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},On.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var x=d.as,g=h(x,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;x==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):x==="script"&&a.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},On.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var x=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},On.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var x=d.as,g=h(x,d.crossOrigin);a.d.L(p,x,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},On.preloadModule=function(p,d){if(typeof p=="string")if(d){var x=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},On.requestFormReset=function(p){a.d.r(p)},On.unstable_batchedUpdates=function(p,d){return p(d)},On.useFormState=function(p,d,x){return u.H.useFormState(p,d,x)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.2.0",On}var bx;function HS(){if(bx)return Bh.exports;bx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Bh.exports=FS(),Bh.exports}var Mx;function VS(){if(Mx)return Qo;Mx=1;var o=zS(),e=dp(),n=HS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function d(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),t;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var S=!1,A=f.child;A;){if(A===s){S=!0,s=f,l=m;break}if(A===l){S=!0,l=f,s=m;break}A=A.sibling}if(!S){for(A=m.child;A;){if(A===s){S=!0,s=m,l=f;break}if(A===l){S=!0,l=m,s=f;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function x(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=x(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case H:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case O:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case $:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var fe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xe=[],_e=-1;function I(t){return{current:t}}function se(t){0>_e||(t.current=xe[_e],xe[_e]=null,_e--)}function Se(t,i){_e++,xe[_e]=t.current,t.current=i}var Te=I(null),Oe=I(null),ie=I(null),ce=I(null);function Ce(t,i){switch(Se(ie,i),Se(Oe,t),Se(Te,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=zg(i),t=Fg(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(Te),Se(Te,t)}function Fe(){se(Te),se(Oe),se(ie)}function ke(t){t.memoizedState!==null&&Se(ce,t);var i=Te.current,s=Fg(i,t.type);i!==s&&(Se(Oe,t),Se(Te,s))}function lt(t){Oe.current===t&&(se(Te),se(Oe)),ce.current===t&&(se(ce),qo._currentValue=Y)}var rn,ht;function Dt(t){if(rn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);rn=i&&i[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+t+ht}var F=!1;function dt(t,i){if(!t||F)return"";F=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(re){var te=re}Reflect.construct(t,[],pe)}else{try{pe.call()}catch(re){te=re}t.call(pe.prototype)}}else{try{throw Error()}catch(re){te=re}(pe=t())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(re){if(re&&te&&typeof re.stack=="string")return[re.stack,te.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],A=m[1];if(S&&A){var B=S.split(`
`),J=A.split(`
`);for(f=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;f<J.length&&!J[f].includes("DetermineComponentFrameRoot");)f++;if(l===B.length||f===J.length)for(l=B.length-1,f=J.length-1;1<=l&&0<=f&&B[l]!==J[f];)f--;for(;1<=l&&0<=f;l--,f--)if(B[l]!==J[f]){if(l!==1||f!==1)do if(l--,f--,0>f||B[l]!==J[f]){var ue=`
`+B[l].replace(" at new "," at ");return t.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",t.displayName)),ue}while(1<=l&&0<=f);break}}}finally{F=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Dt(s):""}function gt(t,i){switch(t.tag){case 26:case 27:case 5:return Dt(t.type);case 16:return Dt("Lazy");case 13:return t.child!==i&&i!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return Dt("Activity");default:return""}}function zt(t){try{var i="",s=null;do i+=gt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var He=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,at=o.unstable_shouldYield,U=o.unstable_requestPaint,T=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,ve=o.unstable_UserBlockingPriority,oe=o.unstable_NormalPriority,We=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,Qe=o.log,Xe=o.unstable_setDisableYieldValue,ye=null,Me=null;function qe(t){if(typeof Qe=="function"&&Xe(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(ye,t)}catch{}}var Ve=Math.clz32?Math.clz32:V,Ne=Math.log,nt=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Ne(t)/nt|0)|0}var we=256,Ae=262144,Re=4194304;function be(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?f=be(l):(S&=A,S!==0?f=be(S):s||(s=A&~t,s!==0&&(f=be(s))))):(A=l&~m,A!==0?f=be(A):S!==0?f=be(S):s||(s=l&~t,s!==0&&(f=be(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Pe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function it(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(){var t=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),t}function Ut(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Nn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jn(t,i,s,l,f,m){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(s=S&~s;0<s;){var ue=31-Ve(s),pe=1<<ue;A[ue]=0,B[ue]=-1;var te=J[ue];if(te!==null)for(J[ue]=null,ue=0;ue<te.length;ue++){var re=te[ue];re!==null&&(re.lane&=-536870913)}s&=~pe}l!==0&&Tl(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(S&~i))}function Tl(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ve(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function io(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ve(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function ao(t,i){var s=i&-i;return s=(s&42)!==0?1:Si(s),(s&(t.suspendedLanes|i))!==0?0:s}function Si(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ds(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function so(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:lx(t.type))}function ro(t,i){var s=j.p;try{return j.p=t,i()}finally{j.p=s}}var $n=Math.random().toString(36).slice(2),un="__reactFiber$"+$n,gn="__reactProps$"+$n,Ki="__reactContainer$"+$n,Ws="__reactEvents$"+$n,Eu="__reactListeners$"+$n,Au="__reactHandles$"+$n,El="__reactResources$"+$n,ps="__reactMarker$"+$n;function oo(t){delete t[un],delete t[gn],delete t[Ws],delete t[Eu],delete t[Au]}function Ua(t){var i=t[un];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ki]||s[un]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=qg(t);t!==null;){if(s=t[un])return s;t=qg(t)}return i}t=s,s=t.parentNode}return null}function R(t){if(t=t[un]||t[Ki]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function X(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ae(t){var i=t[El];return i||(i=t[El]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ee(t){t[ps]=!0}var q=new Set,Ee={};function De(t,i){Ie(t,i),Ie(t+"Capture",i)}function Ie(t,i){for(Ee[t]=i,t=0;t<i.length;t++)q.add(i[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function je(t){return He.call(tt,t)?!0:He.call($e,t)?!1:Be.test(t)?tt[t]=!0:($e[t]=!0,!1)}function ct(t,i,s){if(je(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function wt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Lt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,m.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Kt(t){if(!t._valueTracker){var i=Bt(t)?"checked":"value";t._valueTracker=Je(t,i,""+t[i])}}function Et(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Bt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Sn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var La=/[\n"\\]/g;function Qt(t){return t.replace(La,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zi(t,i,s,l,f,m,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Tt(i)):t.value!==""+Tt(i)&&(t.value=""+Tt(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?bn(t,S,Tt(i)):s!=null?bn(t,S,Tt(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Tt(A):t.removeAttribute("name")}function Jt(t,i,s,l,f,m,S,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Kt(t);return}s=s!=null?""+Tt(s):"",i=i!=null?""+Tt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Kt(t)}function bn(t,i,s){i==="number"&&Sn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function xn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Tt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Mn(t,i,s){if(i!=null&&(i=""+Tt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Tt(s):""}function Rn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(fe(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Tt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Kt(t)}function Oi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ip(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Qi.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Pp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ip(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Ip(t,m,i[m])}function Ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(t){return Uv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var Cu=null;function wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qs=null,Ys=null;function Bp(t){var i=R(t);if(i&&(t=i.stateNode)){var s=t[gn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Zi(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Qt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[gn]||null;if(!f)throw Error(a(90));Zi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Et(l)}break e;case"textarea":Mn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&xn(t,!!s.multiple,i,!1)}}}var Du=!1;function zp(t,i,s){if(Du)return t(i,s);Du=!0;try{var l=t(i);return l}finally{if(Du=!1,(qs!==null||Ys!==null)&&(dc(),qs&&(i=qs,t=Ys,Ys=qs=null,Bp(i),t)))for(i=0;i<t.length;i++)Bp(t[i])}}function lo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[gn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if($i)try{var co={};Object.defineProperty(co,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Uu=!1}var Na=null,Lu=null,Rl=null;function Fp(){if(Rl)return Rl;var t,i=Lu,s=i.length,l,f="value"in Na?Na.value:Na.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[m-l];l++);return Rl=f.slice(t,1<l?1-l:void 0)}function Cl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Hp(){return!1}function Wn(t){function i(s,l,f,m,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wl:Hp,this.isPropagationStopped=Hp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Wn(ms),uo=g({},ms,{view:0,detail:0}),Lv=Wn(uo),Nu,Ou,fo,Ul=g({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Nu=t.screenX-fo.screenX,Ou=t.screenY-fo.screenY):Ou=Nu=0,fo=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Vp=Wn(Ul),Nv=g({},Ul,{dataTransfer:0}),Ov=Wn(Nv),Iv=g({},uo,{relatedTarget:0}),Iu=Wn(Iv),Pv=g({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=Wn(Pv),zv=g({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Wn(zv),Hv=g({},ms,{data:0}),Gp=Wn(Hv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=kv[t])?!!i[t]:!1}function Pu(){return Xv}var Wv=g({},uo,{key:function(t){if(t.key){var i=Vv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=Wn(Wv),Yv=g({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Wn(Yv),jv=g({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),Kv=Wn(jv),Zv=g({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Wn(Zv),Jv=g({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=Wn(Jv),ey=g({},ms,{newState:0,oldState:0}),ty=Wn(ey),ny=[9,13,27,32],Bu=$i&&"CompositionEvent"in window,ho=null;$i&&"documentMode"in document&&(ho=document.documentMode);var iy=$i&&"TextEvent"in window&&!ho,Xp=$i&&(!Bu||ho&&8<ho&&11>=ho),Wp=" ",qp=!1;function Yp(t,i){switch(t){case"keyup":return ny.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function ay(t,i){switch(t){case"compositionend":return jp(i);case"keypress":return i.which!==32?null:(qp=!0,Wp);case"textInput":return t=i.data,t===Wp&&qp?null:t;default:return null}}function sy(t,i){if(js)return t==="compositionend"||!Bu&&Yp(t,i)?(t=Fp(),Rl=Lu=Na=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xp&&i.locale!=="ko"?null:i.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ry[t.type]:i==="textarea"}function Zp(t,i,s,l){qs?Ys?Ys.push(l):Ys=[l]:qs=l,i=yc(i,"onChange"),0<i.length&&(s=new Dl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var po=null,mo=null;function oy(t){Lg(t,0)}function Ll(t){var i=X(t);if(Et(i))return t}function Qp(t,i){if(t==="change")return i}var Jp=!1;if($i){var zu;if($i){var Fu="oninput"in document;if(!Fu){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),Fu=typeof $p.oninput=="function"}zu=Fu}else zu=!1;Jp=zu&&(!document.documentMode||9<document.documentMode)}function em(){po&&(po.detachEvent("onpropertychange",tm),mo=po=null)}function tm(t){if(t.propertyName==="value"&&Ll(mo)){var i=[];Zp(i,mo,t,wu(t)),zp(oy,i)}}function ly(t,i,s){t==="focusin"?(em(),po=i,mo=s,po.attachEvent("onpropertychange",tm)):t==="focusout"&&em()}function cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(mo)}function uy(t,i){if(t==="click")return Ll(i)}function fy(t,i){if(t==="input"||t==="change")return Ll(i)}function hy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:hy;function go(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!He.call(i,f)||!ei(t[f],i[f]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,i){var s=nm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=nm(s)}}function am(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?am(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Sn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Sn(t.document)}return i}function Hu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var dy=$i&&"documentMode"in document&&11>=document.documentMode,Ks=null,Vu=null,xo=null,Gu=!1;function rm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Gu||Ks==null||Ks!==Sn(l)||(l=Ks,"selectionStart"in l&&Hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&go(xo,l)||(xo=l,l=yc(Vu,"onSelect"),0<l.length&&(i=new Dl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Ks)))}function gs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Zs={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},ku={},om={};$i&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function xs(t){if(ku[t])return ku[t];if(!Zs[t])return t;var i=Zs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in om)return ku[t]=i[s];return t}var lm=xs("animationend"),cm=xs("animationiteration"),um=xs("animationstart"),py=xs("transitionrun"),my=xs("transitionstart"),gy=xs("transitioncancel"),fm=xs("transitionend"),hm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function bi(t,i){hm.set(t,i),De(i,[t])}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],Qs=0,Wu=0;function Ol(){for(var t=Qs,i=Wu=Qs=0;i<t;){var s=ci[i];ci[i++]=null;var l=ci[i];ci[i++]=null;var f=ci[i];ci[i++]=null;var m=ci[i];if(ci[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}m!==0&&dm(s,f,m)}}function Il(t,i,s,l){ci[Qs++]=t,ci[Qs++]=i,ci[Qs++]=s,ci[Qs++]=l,Wu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function qu(t,i,s,l){return Il(t,i,s,l),Pl(t)}function _s(t,i){return Il(t,null,null,i),Pl(t)}function dm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Ve(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function Pl(t){if(50<Fo)throw Fo=0,nh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Js={};function xy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,i,s,l){return new xy(t,i,s,l)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,i){var s=t.alternate;return s===null?(s=ti(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function pm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Bl(t,i,s,l,f,m){var S=0;if(l=t,typeof t=="function")Yu(t)&&(S=1);else if(typeof t=="string")S=bS(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=ti(31,s,i,f),t.elementType=w,t.lanes=m,t;case E:return vs(s.children,f,m,i);case b:S=8,f|=24;break;case v:return t=ti(12,s,i,f|2),t.elementType=v,t.lanes=m,t;case H:return t=ti(13,s,i,f),t.elementType=H,t.lanes=m,t;case N:return t=ti(19,s,i,f),t.elementType=N,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:S=10;break e;case L:S=9;break e;case O:S=11;break e;case P:S=14;break e;case $:S=16,l=null;break e}S=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ti(S,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function vs(t,i,s,l){return t=ti(7,t,l,i),t.lanes=s,t}function ju(t,i,s){return t=ti(6,t,null,i),t.lanes=s,t}function mm(t){var i=ti(18,null,null,0);return i.stateNode=t,i}function Ku(t,i,s){return i=ti(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var gm=new WeakMap;function ui(t,i){if(typeof t=="object"&&t!==null){var s=gm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:zt(i)},gm.set(t,i),i)}return{value:t,source:i,stack:zt(i)}}var $s=[],er=0,zl=null,_o=0,fi=[],hi=0,Oa=null,Ii=1,Pi="";function ta(t,i){$s[er++]=_o,$s[er++]=zl,zl=t,_o=i}function xm(t,i,s){fi[hi++]=Ii,fi[hi++]=Pi,fi[hi++]=Oa,Oa=t;var l=Ii;t=Pi;var f=32-Ve(l)-1;l&=~(1<<f),s+=1;var m=32-Ve(i)+f;if(30<m){var S=f-f%5;m=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Ii=1<<32-Ve(i)+f|s<<f|l,Pi=m+t}else Ii=1<<m|s<<f|l,Pi=t}function Zu(t){t.return!==null&&(ta(t,1),xm(t,1,0))}function Qu(t){for(;t===zl;)zl=$s[--er],$s[er]=null,_o=$s[--er],$s[er]=null;for(;t===Oa;)Oa=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null,Ii=fi[--hi],fi[hi]=null}function _m(t,i){fi[hi++]=Ii,fi[hi++]=Pi,fi[hi++]=Oa,Ii=i.id,Pi=i.overflow,Oa=t}var Cn=null,$t=null,At=!1,Ia=null,di=!1,Ju=Error(a(519));function Pa(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(ui(i,t)),Ju}function vm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[un]=t,i[gn]=l,s){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(s=0;s<Vo.length;s++)_t(Vo[s],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":_t("invalid",i),Jt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_t("invalid",i);break;case"textarea":_t("invalid",i),Rn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Pg(i.textContent,s)?(l.popover!=null&&(_t("beforetoggle",i),_t("toggle",i)),l.onScroll!=null&&_t("scroll",i),l.onScrollEnd!=null&&_t("scrollend",i),l.onClick!=null&&(i.onclick=Ji),i=!0):i=!1,i||Pa(t,!0)}function ym(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Cn=Cn.return}}function tr(t){if(t!==Cn)return!1;if(!At)return ym(t),At=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||xh(t.type,t.memoizedProps)),s=!s),s&&$t&&Pa(t),ym(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=Wg(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=Wg(t)}else i===27?(i=$t,Za(t.type)?(t=bh,bh=null,$t=t):$t=i):$t=Cn?mi(t.stateNode.nextSibling):null;return!0}function ys(){$t=Cn=null,At=!1}function $u(){var t=Ia;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ia=null),t}function vo(t){Ia===null?Ia=[t]:Ia.push(t)}var ef=I(null),Ss=null,na=null;function Ba(t,i,s){Se(ef,i._currentValue),i._currentValue=s}function ia(t){t._currentValue=ef.current,se(ef)}function tf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function nf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var B=0;B<i.length;B++)if(A.context===i[B]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),tf(m.return,s,t),l||(S=null);break e}m=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),tf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function nr(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=f.type;ei(f.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(f===ce.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(qo):t=[qo])}f=f.return}t!==null&&nf(i,t,s,l),i.flags|=262144}function Fl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Ss=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Sm(Ss,t)}function Hl(t,i){return Ss===null&&bs(t),Sm(t,i)}function Sm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},na===null){if(t===null)throw Error(a(308));na=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else na=na.next=i;return s}var _y=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},vy=o.unstable_scheduleCallback,yy=o.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new _y,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&vy(yy,function(){t.controller.abort()})}var So=null,sf=0,ir=0,ar=null;function Sy(t,i){if(So===null){var s=So=[];sf=0,ir=lh(),ar={status:"pending",value:void 0,then:function(l){s.push(l)}}}return sf++,i.then(bm,bm),i}function bm(){if(--sf===0&&So!==null){ar!==null&&(ar.status="fulfilled");var t=So;So=null,ir=0,ar=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function by(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Mm=z.S;z.S=function(t,i){rg=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Sy(t,i),Mm!==null&&Mm(t,i)};var Ms=I(null);function rf(){var t=Ms.current;return t!==null?t:Zt.pooledCache}function Vl(t,i){i===null?Se(Ms,Ms.current):Se(Ms,i.pool)}function Tm(){var t=rf();return t===null?null:{parent:fn._currentValue,pool:t}}var sr=Error(a(460)),of=Error(a(474)),Gl=Error(a(542)),kl={then:function(){}};function Em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Am(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Ji,Ji),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Cm(t),t;default:if(typeof i.status=="string")i.then(Ji,Ji);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Cm(t),t}throw Es=i,sr}}function Ts(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Es=s,sr):s}}var Es=null;function Rm(){if(Es===null)throw Error(a(459));var t=Es;return Es=null,t}function Cm(t){if(t===sr||t===Gl)throw Error(a(483))}var rr=null,bo=0;function Xl(t){var i=bo;return bo+=1,rr===null&&(rr=[]),Am(rr,t,i)}function Mo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Wl(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function wm(t){function i(W,G){if(t){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function s(W,G){if(!t)return null;for(;G!==null;)i(W,G),G=G.sibling;return null}function l(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function f(W,G){return W=ea(W,G),W.index=0,W.sibling=null,W}function m(W,G,Z){return W.index=Z,t?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function S(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function A(W,G,Z,he){return G===null||G.tag!==6?(G=ju(Z,W.mode,he),G.return=W,G):(G=f(G,Z),G.return=W,G)}function B(W,G,Z,he){var Ke=Z.type;return Ke===E?ue(W,G,Z.props.children,he,Z.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===$&&Ts(Ke)===G.type)?(G=f(G,Z.props),Mo(G,Z),G.return=W,G):(G=Bl(Z.type,Z.key,Z.props,null,W.mode,he),Mo(G,Z),G.return=W,G)}function J(W,G,Z,he){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=Ku(Z,W.mode,he),G.return=W,G):(G=f(G,Z.children||[]),G.return=W,G)}function ue(W,G,Z,he,Ke){return G===null||G.tag!==7?(G=vs(Z,W.mode,he,Ke),G.return=W,G):(G=f(G,Z),G.return=W,G)}function pe(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ju(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return Z=Bl(G.type,G.key,G.props,null,W.mode,Z),Mo(Z,G),Z.return=W,Z;case M:return G=Ku(G,W.mode,Z),G.return=W,G;case $:return G=Ts(G),pe(W,G,Z)}if(fe(G)||ne(G))return G=vs(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return pe(W,Xl(G),Z);if(G.$$typeof===D)return pe(W,Hl(W,G),Z);Wl(W,G)}return null}function te(W,G,Z,he){var Ke=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ke!==null?null:A(W,G,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return Z.key===Ke?B(W,G,Z,he):null;case M:return Z.key===Ke?J(W,G,Z,he):null;case $:return Z=Ts(Z),te(W,G,Z,he)}if(fe(Z)||ne(Z))return Ke!==null?null:ue(W,G,Z,he,null);if(typeof Z.then=="function")return te(W,G,Xl(Z),he);if(Z.$$typeof===D)return te(W,G,Hl(W,Z),he);Wl(W,Z)}return null}function re(W,G,Z,he,Ke){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return W=W.get(Z)||null,A(G,W,""+he,Ke);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case y:return W=W.get(he.key===null?Z:he.key)||null,B(G,W,he,Ke);case M:return W=W.get(he.key===null?Z:he.key)||null,J(G,W,he,Ke);case $:return he=Ts(he),re(W,G,Z,he,Ke)}if(fe(he)||ne(he))return W=W.get(Z)||null,ue(G,W,he,Ke,null);if(typeof he.then=="function")return re(W,G,Z,Xl(he),Ke);if(he.$$typeof===D)return re(W,G,Z,Hl(G,he),Ke);Wl(G,he)}return null}function ze(W,G,Z,he){for(var Ke=null,Nt=null,Ge=G,ut=G=0,Mt=null;Ge!==null&&ut<Z.length;ut++){Ge.index>ut?(Mt=Ge,Ge=null):Mt=Ge.sibling;var Ot=te(W,Ge,Z[ut],he);if(Ot===null){Ge===null&&(Ge=Mt);break}t&&Ge&&Ot.alternate===null&&i(W,Ge),G=m(Ot,G,ut),Nt===null?Ke=Ot:Nt.sibling=Ot,Nt=Ot,Ge=Mt}if(ut===Z.length)return s(W,Ge),At&&ta(W,ut),Ke;if(Ge===null){for(;ut<Z.length;ut++)Ge=pe(W,Z[ut],he),Ge!==null&&(G=m(Ge,G,ut),Nt===null?Ke=Ge:Nt.sibling=Ge,Nt=Ge);return At&&ta(W,ut),Ke}for(Ge=l(Ge);ut<Z.length;ut++)Mt=re(Ge,W,ut,Z[ut],he),Mt!==null&&(t&&Mt.alternate!==null&&Ge.delete(Mt.key===null?ut:Mt.key),G=m(Mt,G,ut),Nt===null?Ke=Mt:Nt.sibling=Mt,Nt=Mt);return t&&Ge.forEach(function(ts){return i(W,ts)}),At&&ta(W,ut),Ke}function et(W,G,Z,he){if(Z==null)throw Error(a(151));for(var Ke=null,Nt=null,Ge=G,ut=G=0,Mt=null,Ot=Z.next();Ge!==null&&!Ot.done;ut++,Ot=Z.next()){Ge.index>ut?(Mt=Ge,Ge=null):Mt=Ge.sibling;var ts=te(W,Ge,Ot.value,he);if(ts===null){Ge===null&&(Ge=Mt);break}t&&Ge&&ts.alternate===null&&i(W,Ge),G=m(ts,G,ut),Nt===null?Ke=ts:Nt.sibling=ts,Nt=ts,Ge=Mt}if(Ot.done)return s(W,Ge),At&&ta(W,ut),Ke;if(Ge===null){for(;!Ot.done;ut++,Ot=Z.next())Ot=pe(W,Ot.value,he),Ot!==null&&(G=m(Ot,G,ut),Nt===null?Ke=Ot:Nt.sibling=Ot,Nt=Ot);return At&&ta(W,ut),Ke}for(Ge=l(Ge);!Ot.done;ut++,Ot=Z.next())Ot=re(Ge,W,ut,Ot.value,he),Ot!==null&&(t&&Ot.alternate!==null&&Ge.delete(Ot.key===null?ut:Ot.key),G=m(Ot,G,ut),Nt===null?Ke=Ot:Nt.sibling=Ot,Nt=Ot);return t&&Ge.forEach(function(NS){return i(W,NS)}),At&&ta(W,ut),Ke}function qt(W,G,Z,he){if(typeof Z=="object"&&Z!==null&&Z.type===E&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:e:{for(var Ke=Z.key;G!==null;){if(G.key===Ke){if(Ke=Z.type,Ke===E){if(G.tag===7){s(W,G.sibling),he=f(G,Z.props.children),he.return=W,W=he;break e}}else if(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===$&&Ts(Ke)===G.type){s(W,G.sibling),he=f(G,Z.props),Mo(he,Z),he.return=W,W=he;break e}s(W,G);break}else i(W,G);G=G.sibling}Z.type===E?(he=vs(Z.props.children,W.mode,he,Z.key),he.return=W,W=he):(he=Bl(Z.type,Z.key,Z.props,null,W.mode,he),Mo(he,Z),he.return=W,W=he)}return S(W);case M:e:{for(Ke=Z.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){s(W,G.sibling),he=f(G,Z.children||[]),he.return=W,W=he;break e}else{s(W,G);break}else i(W,G);G=G.sibling}he=Ku(Z,W.mode,he),he.return=W,W=he}return S(W);case $:return Z=Ts(Z),qt(W,G,Z,he)}if(fe(Z))return ze(W,G,Z,he);if(ne(Z)){if(Ke=ne(Z),typeof Ke!="function")throw Error(a(150));return Z=Ke.call(Z),et(W,G,Z,he)}if(typeof Z.then=="function")return qt(W,G,Xl(Z),he);if(Z.$$typeof===D)return qt(W,G,Hl(W,Z),he);Wl(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(s(W,G.sibling),he=f(G,Z),he.return=W,W=he):(s(W,G),he=ju(Z,W.mode,he),he.return=W,W=he),S(W)):s(W,G)}return function(W,G,Z,he){try{bo=0;var Ke=qt(W,G,Z,he);return rr=null,Ke}catch(Ge){if(Ge===sr||Ge===Gl)throw Ge;var Nt=ti(29,Ge,null,W.mode);return Nt.lanes=he,Nt.return=W,Nt}finally{}}}var As=wm(!0),Dm=wm(!1),za=!1;function lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(It&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Pl(t),dm(t,null,s),i}return Il(t,l,i,s),Pl(t)}function To(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,io(t,s)}}function uf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var ff=!1;function Eo(){if(ff){var t=ar;if(t!==null)throw t}}function Ao(t,i,s,l){ff=!1;var f=t.updateQueue;za=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var B=A,J=B.next;B.next=null,S===null?m=J:S.next=J,S=B;var ue=t.alternate;ue!==null&&(ue=ue.updateQueue,A=ue.lastBaseUpdate,A!==S&&(A===null?ue.firstBaseUpdate=J:A.next=J,ue.lastBaseUpdate=B))}if(m!==null){var pe=f.baseState;S=0,ue=J=B=null,A=m;do{var te=A.lane&-536870913,re=te!==A.lane;if(re?(bt&te)===te:(l&te)===te){te!==0&&te===ir&&(ff=!0),ue!==null&&(ue=ue.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ze=t,et=A;te=i;var qt=s;switch(et.tag){case 1:if(ze=et.payload,typeof ze=="function"){pe=ze.call(qt,pe,te);break e}pe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=et.payload,te=typeof ze=="function"?ze.call(qt,pe,te):ze,te==null)break e;pe=g({},pe,te);break e;case 2:za=!0}}te=A.callback,te!==null&&(t.flags|=64,re&&(t.flags|=8192),re=f.callbacks,re===null?f.callbacks=[te]:re.push(te))}else re={lane:te,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ue===null?(J=ue=re,B=pe):ue=ue.next=re,S|=te;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;re=A,A=re.next,re.next=null,f.lastBaseUpdate=re,f.shared.pending=null}}while(!0);ue===null&&(B=pe),f.baseState=B,f.firstBaseUpdate=J,f.lastBaseUpdate=ue,m===null&&(f.shared.lanes=0),Wa|=S,t.lanes=S,t.memoizedState=pe}}function Um(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Lm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Um(s[t],i)}var or=I(null),ql=I(0);function Nm(t,i){t=ha,Se(ql,t),Se(or,i),ha=t|i.baseLanes}function hf(){Se(ql,ha),Se(or,or.current)}function df(){ha=ql.current,se(or),se(ql)}var ni=I(null),pi=null;function Va(t){var i=t.alternate;Se(on,on.current&1),Se(ni,t),pi===null&&(i===null||or.current!==null||i.memoizedState!==null)&&(pi=t)}function pf(t){Se(on,on.current),Se(ni,t),pi===null&&(pi=t)}function Om(t){t.tag===22?(Se(on,on.current),Se(ni,t),pi===null&&(pi=t)):Ga()}function Ga(){Se(on,on.current),Se(ni,ni.current)}function ii(t){se(ni),pi===t&&(pi=null),se(on)}var on=I(0);function Yl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||yh(s)||Sh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var aa=0,ot=null,Xt=null,hn=null,jl=!1,lr=!1,Rs=!1,Kl=0,Ro=0,cr=null,My=0;function an(){throw Error(a(321))}function mf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ei(t[s],i[s]))return!1;return!0}function gf(t,i,s,l,f,m){return aa=m,ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=t===null||t.memoizedState===null?x0:Uf,Rs=!1,m=s(l,f),Rs=!1,lr&&(m=Pm(i,s,l,f)),Im(t),m}function Im(t){z.H=Do;var i=Xt!==null&&Xt.next!==null;if(aa=0,hn=Xt=ot=null,jl=!1,Ro=0,cr=null,i)throw Error(a(300));t===null||dn||(t=t.dependencies,t!==null&&Fl(t)&&(dn=!0))}function Pm(t,i,s,l){ot=t;var f=0;do{if(lr&&(cr=null),Ro=0,lr=!1,25<=f)throw Error(a(301));if(f+=1,hn=Xt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=_0,m=i(s,l)}while(lr);return m}function Ty(){var t=z.H,i=t.useState()[0];return i=typeof i.then=="function"?Co(i):i,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ot.flags|=1024),i}function xf(){var t=Kl!==0;return Kl=0,t}function _f(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function vf(t){if(jl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}jl=!1}aa=0,hn=Xt=ot=null,lr=!1,Ro=Kl=0,cr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ot.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(Xt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=hn===null?ot.memoizedState:hn.next;if(i!==null)hn=i,Xt=t;else{if(t===null)throw ot.alternate===null?Error(a(467)):Error(a(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},hn===null?ot.memoizedState=hn=t:hn=hn.next=t}return hn}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var i=Ro;return Ro+=1,cr===null&&(cr=[]),t=Am(cr,t,i),i=ot,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?x0:Uf),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===D)return wn(t)}throw Error(a(438,String(t)))}function yf(t){var i=null,s=ot.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ot.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Zl(),ot.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=C;return i.index++,s}function sa(t,i){return typeof i=="function"?i(t):i}function Jl(t){var i=ln();return Sf(i,Xt,t)}function Sf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var A=S=null,B=null,J=i,ue=!1;do{var pe=J.lane&-536870913;if(pe!==J.lane?(bt&pe)===pe:(aa&pe)===pe){var te=J.revertLane;if(te===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),pe===ir&&(ue=!0);else if((aa&te)===te){J=J.next,te===ir&&(ue=!0);continue}else pe={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=pe,S=m):B=B.next=pe,ot.lanes|=te,Wa|=te;pe=J.action,Rs&&s(m,pe),m=J.hasEagerState?J.eagerState:s(m,pe)}else te={lane:pe,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=te,S=m):B=B.next=te,ot.lanes|=pe,Wa|=pe;J=J.next}while(J!==null&&J!==i);if(B===null?S=m:B.next=A,!ei(m,t.memoizedState)&&(dn=!0,ue&&(s=ar,s!==null)))throw s;t.memoizedState=m,t.baseState=S,t.baseQueue=B,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function bf(t){var i=ln(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do m=t(m,S.action),S=S.next;while(S!==f);ei(m,i.memoizedState)||(dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Bm(t,i,s){var l=ot,f=ln(),m=At;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!ei((Xt||f).memoizedState,s);if(S&&(f.memoizedState=s,dn=!0),f=f.queue,Ef(Hm.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,ur(9,{destroy:void 0},Fm.bind(null,l,f,s,i),null),Zt===null)throw Error(a(349));m||(aa&127)!==0||zm(l,i,s)}return s}function zm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ot.updateQueue,i===null?(i=Zl(),ot.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Fm(t,i,s,l){i.value=s,i.getSnapshot=l,Vm(i)&&Gm(t)}function Hm(t,i,s){return s(function(){Vm(i)&&Gm(t)})}function Vm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ei(t,s)}catch{return!0}}function Gm(t){var i=_s(t,2);i!==null&&Zn(i,t,2)}function Mf(t){var i=Bn();if(typeof t=="function"){var s=t;if(t=s(),Rs){qe(!0);try{s()}finally{qe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},i}function km(t,i,s,l){return t.baseState=s,Sf(t,Xt,typeof l=="function"?l:sa)}function Ey(t,i,s,l,f){if(tc(t))throw Error(a(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};z.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Xm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Xm(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=z.T,S={};z.T=S;try{var A=s(f,l),B=z.S;B!==null&&B(S,A),Wm(t,i,A)}catch(J){Tf(t,i,J)}finally{m!==null&&S.types!==null&&(m.types=S.types),z.T=m}}else try{m=s(f,l),Wm(t,i,m)}catch(J){Tf(t,i,J)}}function Wm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){qm(t,i,l)},function(l){return Tf(t,i,l)}):qm(t,i,s)}function qm(t,i,s){i.status="fulfilled",i.value=s,Ym(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Xm(t,s)))}function Tf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Ym(i),i=i.next;while(i!==l)}t.action=null}function Ym(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function jm(t,i){return i}function Km(t,i){if(At){var s=Zt.formState;if(s!==null){e:{var l=ot;if(At){if($t){t:{for(var f=$t,m=di;f.nodeType!==8;){if(!m){f=null;break t}if(f=mi(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){$t=mi(f.nextSibling),l=f.data==="F!";break e}}Pa(l)}l=!1}l&&(i=s[0])}}return s=Bn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:i},s.queue=l,s=p0.bind(null,ot,l),l.dispatch=s,l=Mf(!1),m=Df.bind(null,ot,!1,l.queue),l=Bn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=Ey.bind(null,ot,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Zm(t){var i=ln();return Qm(i,Xt,t)}function Qm(t,i,s){if(i=Sf(t,i,jm)[0],t=Jl(sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Co(i)}catch(S){throw S===sr?Gl:S}else l=i;i=ln();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(ot.flags|=2048,ur(9,{destroy:void 0},Ay.bind(null,f,s),null)),[l,m,t]}function Ay(t,i){t.action=i}function Jm(t){var i=ln(),s=Xt;if(s!==null)return Qm(i,s,t);ln(),i=i.memoizedState,s=ln();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function ur(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ot.updateQueue,i===null&&(i=Zl(),ot.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function $m(){return ln().memoizedState}function $l(t,i,s,l){var f=Bn();ot.flags|=t,f.memoizedState=ur(1|i,{destroy:void 0},s,l===void 0?null:l)}function ec(t,i,s,l){var f=ln();l=l===void 0?null:l;var m=f.memoizedState.inst;Xt!==null&&l!==null&&mf(l,Xt.memoizedState.deps)?f.memoizedState=ur(i,m,s,l):(ot.flags|=t,f.memoizedState=ur(1|i,m,s,l))}function e0(t,i){$l(8390656,8,t,i)}function Ef(t,i){ec(2048,8,t,i)}function Ry(t){ot.flags|=4;var i=ot.updateQueue;if(i===null)i=Zl(),ot.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function t0(t){var i=ln().memoizedState;return Ry({ref:i,nextImpl:t}),function(){if((It&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function n0(t,i){return ec(4,2,t,i)}function i0(t,i){return ec(4,4,t,i)}function a0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function s0(t,i,s){s=s!=null?s.concat([t]):null,ec(4,4,a0.bind(null,i,t),s)}function Af(){}function r0(t,i){var s=ln();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&mf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function o0(t,i){var s=ln();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&mf(i,l[1]))return l[0];if(l=t(),Rs){qe(!0);try{t()}finally{qe(!1)}}return s.memoizedState=[l,i],l}function Rf(t,i,s){return s===void 0||(aa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=lg(),ot.lanes|=t,Wa|=t,s)}function l0(t,i,s,l){return ei(s,i)?s:or.current!==null?(t=Rf(t,s,l),ei(t,i)||(dn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(bt&261930)===0?(dn=!0,t.memoizedState=s):(t=lg(),ot.lanes|=t,Wa|=t,i)}function c0(t,i,s,l,f){var m=j.p;j.p=m!==0&&8>m?m:8;var S=z.T,A={};z.T=A,Df(t,!1,i,s);try{var B=f(),J=z.S;if(J!==null&&J(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ue=by(B,l);wo(t,i,ue,ri(t))}else wo(t,i,l,ri(t))}catch(pe){wo(t,i,{then:function(){},status:"rejected",reason:pe},ri())}finally{j.p=m,S!==null&&A.types!==null&&(S.types=A.types),z.T=S}}function Cy(){}function Cf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=u0(t).queue;c0(t,f,i,Y,s===null?Cy:function(){return f0(t),s(l)})}function u0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function f0(t){var i=u0(t);i.next===null&&(i=t.alternate.memoizedState),wo(t,i.next.queue,{},ri())}function wf(){return wn(qo)}function h0(){return ln().memoizedState}function d0(){return ln().memoizedState}function wy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ri();t=Fa(s);var l=Ha(i,t,s);l!==null&&(Zn(l,i,s),To(l,i,s)),i={cache:af()},t.payload=i;return}i=i.return}}function Dy(t,i,s){var l=ri();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},tc(t)?m0(i,s):(s=qu(t,i,s,l),s!==null&&(Zn(s,t,l),g0(s,i,l)))}function p0(t,i,s){var l=ri();wo(t,i,s,l)}function wo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(tc(t))m0(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,A=m(S,s);if(f.hasEagerState=!0,f.eagerState=A,ei(A,S))return Il(t,i,f,0),Zt===null&&Ol(),!1}catch{}finally{}if(s=qu(t,i,f,l),s!==null)return Zn(s,t,l),g0(s,i,l),!0}return!1}function Df(t,i,s,l){if(l={lane:2,revertLane:lh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(i)throw Error(a(479))}else i=qu(t,s,l,2),i!==null&&Zn(i,t,2)}function tc(t){var i=t.alternate;return t===ot||i!==null&&i===ot}function m0(t,i){lr=jl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function g0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,io(t,s)}}var Do={readContext:wn,use:Ql,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Do.useEffectEvent=an;var x0={readContext:wn,use:Ql,useCallback:function(t,i){return Bn().memoizedState=[t,i===void 0?null:i],t},useContext:wn,useEffect:e0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,$l(4194308,4,a0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return $l(4194308,4,t,i)},useInsertionEffect:function(t,i){$l(4,2,t,i)},useMemo:function(t,i){var s=Bn();i=i===void 0?null:i;var l=t();if(Rs){qe(!0);try{t()}finally{qe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Bn();if(s!==void 0){var f=s(i);if(Rs){qe(!0);try{s(i)}finally{qe(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Dy.bind(null,ot,t),[l.memoizedState,t]},useRef:function(t){var i=Bn();return t={current:t},i.memoizedState=t},useState:function(t){t=Mf(t);var i=t.queue,s=p0.bind(null,ot,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Af,useDeferredValue:function(t,i){var s=Bn();return Rf(s,t,i)},useTransition:function(){var t=Mf(!1);return t=c0.bind(null,ot,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ot,f=Bn();if(At){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Zt===null)throw Error(a(349));(bt&127)!==0||zm(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,e0(Hm.bind(null,l,m,t),[t]),l.flags|=2048,ur(9,{destroy:void 0},Fm.bind(null,l,m,s,i),null),s},useId:function(){var t=Bn(),i=Zt.identifierPrefix;if(At){var s=Pi,l=Ii;s=(l&~(1<<32-Ve(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Kl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=My++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:wf,useFormState:Km,useActionState:Km,useOptimistic:function(t){var i=Bn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Df.bind(null,ot,!0,s),s.dispatch=i,[t,i]},useMemoCache:yf,useCacheRefresh:function(){return Bn().memoizedState=wy.bind(null,ot)},useEffectEvent:function(t){var i=Bn(),s={impl:t};return i.memoizedState=s,function(){if((It&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Uf={readContext:wn,use:Ql,useCallback:r0,useContext:wn,useEffect:Ef,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:Jl,useRef:$m,useState:function(){return Jl(sa)},useDebugValue:Af,useDeferredValue:function(t,i){var s=ln();return l0(s,Xt.memoizedState,t,i)},useTransition:function(){var t=Jl(sa)[0],i=ln().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Bm,useId:h0,useHostTransitionStatus:wf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,i){var s=ln();return km(s,Xt,t,i)},useMemoCache:yf,useCacheRefresh:d0};Uf.useEffectEvent=t0;var _0={readContext:wn,use:Ql,useCallback:r0,useContext:wn,useEffect:Ef,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:bf,useRef:$m,useState:function(){return bf(sa)},useDebugValue:Af,useDeferredValue:function(t,i){var s=ln();return Xt===null?Rf(s,t,i):l0(s,Xt.memoizedState,t,i)},useTransition:function(){var t=bf(sa)[0],i=ln().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:Bm,useId:h0,useHostTransitionStatus:wf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,i){var s=ln();return Xt!==null?km(s,Xt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:yf,useCacheRefresh:d0};_0.useEffectEvent=t0;function Lf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Nf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ri(),f=Fa(l);f.payload=i,s!=null&&(f.callback=s),i=Ha(t,f,l),i!==null&&(Zn(i,t,l),To(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ri(),f=Fa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ha(t,f,l),i!==null&&(Zn(i,t,l),To(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ri(),l=Fa(s);l.tag=2,i!=null&&(l.callback=i),i=Ha(t,l,s),i!==null&&(Zn(i,t,s),To(i,t,s))}};function v0(t,i,s,l,f,m,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!go(s,l)||!go(f,m):!0}function y0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Nf.enqueueReplaceState(i,i.state,null)}function Cs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function S0(t){Nl(t)}function b0(t){console.error(t)}function M0(t){Nl(t)}function nc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function T0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Of(t,i,s){return s=Fa(s),s.tag=3,s.payload={element:null},s.callback=function(){nc(t,i)},s}function E0(t){return t=Fa(t),t.tag=3,t}function A0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){T0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){T0(i,s,l),typeof f!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Uy(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&nr(i,s,f,!0),s=ni.current,s!==null){switch(s.tag){case 31:case 13:return pi===null?pc():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===kl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),sh(t,l,f)),!1;case 22:return s.flags|=65536,l===kl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),sh(t,l,f)),!1}throw Error(a(435,s.tag))}return sh(t,l,f),pc(),!1}if(At)return i=ni.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ju&&(t=Error(a(422),{cause:l}),vo(ui(t,s)))):(l!==Ju&&(i=Error(a(423),{cause:l}),vo(ui(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=ui(l,s),f=Of(t.stateNode,l,f),uf(t,f),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:l});if(m=ui(m,s),zo===null?zo=[m]:zo.push(m),sn!==4&&(sn=2),i===null)return!0;l=ui(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Of(s.stateNode,l,t),uf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qa===null||!qa.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=E0(f),A0(f,t,s,l),uf(s,f),!1}s=s.return}while(s!==null);return!1}var If=Error(a(461)),dn=!1;function Dn(t,i,s,l){i.child=t===null?Dm(i,null,s,l):As(i,t.child,s,l)}function R0(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return bs(i),l=gf(t,i,s,S,m,f),A=xf(),t!==null&&!dn?(_f(t,i,f),ra(t,i,f)):(At&&A&&Zu(i),i.flags|=1,Dn(t,i,l,f),i.child)}function C0(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!Yu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,w0(t,i,m,l,f)):(t=Bl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!kf(t,f)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(S,l)&&t.ref===i.ref)return ra(t,i,f)}return i.flags|=1,t=ea(m,l),t.ref=i.ref,t.return=i,i.child=t}function w0(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(go(m,l)&&t.ref===i.ref)if(dn=!1,i.pendingProps=l=m,kf(t,f))(t.flags&131072)!==0&&(dn=!0);else return i.lanes=t.lanes,ra(t,i,f)}return Pf(t,i,s,l,f)}function D0(t,i,s,l){var f=l.children,m=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return U0(t,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(i,m!==null?m.cachePool:null),m!==null?Nm(i,m):hf(),Om(i);else return l=i.lanes=536870912,U0(t,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(Vl(i,m.cachePool),Nm(i,m),Ga(),i.memoizedState=null):(t!==null&&Vl(i,null),hf(),Ga());return Dn(t,i,f,s),i.child}function Uo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function U0(t,i,s,l,f){var m=rf();return m=m===null?null:{parent:fn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},t!==null&&Vl(i,null),hf(),Om(i),t!==null&&nr(t,i,l,!0),i.childLanes=f,null}function ic(t,i){return i=sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function L0(t,i,s){return As(i,t.child,null,s),t=ic(i,i.pendingProps),t.flags|=2,ii(i),i.memoizedState=null,t}function Ly(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(At){if(l.mode==="hidden")return t=ic(i,l),i.lanes=536870912,Uo(null,t);if(pf(i),(t=$t)?(t=Xg(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Ii,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},s=mm(t),s.return=i,i.child=s,Cn=i,$t=null)):t=null,t===null)throw Pa(i);return i.lanes=536870912,null}return ic(i,l)}var m=t.memoizedState;if(m!==null){var S=m.dehydrated;if(pf(i),f)if(i.flags&256)i.flags&=-257,i=L0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(dn||nr(t,i,s,!1),f=(s&t.childLanes)!==0,dn||f){if(l=Zt,l!==null&&(S=ao(l,s),S!==0&&S!==m.retryLane))throw m.retryLane=S,_s(t,S),Zn(l,t,S),If;pc(),i=L0(t,i,s)}else t=m.treeContext,$t=mi(S.nextSibling),Cn=i,At=!0,Ia=null,di=!1,t!==null&&_m(i,t),i=ic(i,l),i.flags|=4096;return i}return t=ea(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function ac(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Pf(t,i,s,l,f){return bs(i),s=gf(t,i,s,l,void 0,f),l=xf(),t!==null&&!dn?(_f(t,i,f),ra(t,i,f)):(At&&l&&Zu(i),i.flags|=1,Dn(t,i,s,f),i.child)}function N0(t,i,s,l,f,m){return bs(i),i.updateQueue=null,s=Pm(i,l,s,f),Im(t),l=xf(),t!==null&&!dn?(_f(t,i,m),ra(t,i,m)):(At&&l&&Zu(i),i.flags|=1,Dn(t,i,s,m),i.child)}function O0(t,i,s,l,f){if(bs(i),i.stateNode===null){var m=Js,S=s.contextType;typeof S=="object"&&S!==null&&(m=wn(S)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Nf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},lf(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?wn(S):Js,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Lf(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&Nf.enqueueReplaceState(m,m.state,null),Ao(i,l,m,f),Eo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var A=i.memoizedProps,B=Cs(s,A);m.props=B;var J=m.context,ue=s.contextType;S=Js,typeof ue=="object"&&ue!==null&&(S=wn(ue));var pe=s.getDerivedStateFromProps;ue=typeof pe=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ue||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||J!==S)&&y0(i,m,l,S),za=!1;var te=i.memoizedState;m.state=te,Ao(i,l,m,f),Eo(),J=i.memoizedState,A||te!==J||za?(typeof pe=="function"&&(Lf(i,s,pe,l),J=i.memoizedState),(B=za||v0(i,s,B,l,te,J,S))?(ue||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=J),m.props=l,m.state=J,m.context=S,l=B):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,cf(t,i),S=i.memoizedProps,ue=Cs(s,S),m.props=ue,pe=i.pendingProps,te=m.context,J=s.contextType,B=Js,typeof J=="object"&&J!==null&&(B=wn(J)),A=s.getDerivedStateFromProps,(J=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==pe||te!==B)&&y0(i,m,l,B),za=!1,te=i.memoizedState,m.state=te,Ao(i,l,m,f),Eo();var re=i.memoizedState;S!==pe||te!==re||za||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof A=="function"&&(Lf(i,s,A,l),re=i.memoizedState),(ue=za||v0(i,s,ue,l,te,re,B)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(J||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,re,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,re,B)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=re),m.props=l,m.state=re,m.context=B,l=ue):(typeof m.componentDidUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&te===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,ac(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=As(i,t.child,null,f),i.child=As(i,null,s,f)):Dn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=ra(t,i,f),t}function I0(t,i,s,l){return ys(),i.flags|=256,Dn(t,i,s,l),i.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(t){return{baseLanes:t,cachePool:Tm()}}function Ff(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=si),t}function P0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(At){if(f?Va(i):Ga(),(t=$t)?(t=Xg(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Ii,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},s=mm(t),s.return=i,i.child=s,Cn=i,$t=null)):t=null,t===null)throw Pa(i);return Sh(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(Ga(),f=i.mode,A=sc({mode:"hidden",children:A},f),l=vs(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=zf(s),l.childLanes=Ff(t,S,s),i.memoizedState=Bf,Uo(null,l)):(Va(i),Hf(i,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(m)i.flags&256?(Va(i),i.flags&=-257,i=Vf(t,i,s)):i.memoizedState!==null?(Ga(),i.child=t.child,i.flags|=128,i=null):(Ga(),A=l.fallback,f=i.mode,l=sc({mode:"visible",children:l.children},f),A=vs(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,As(i,t.child,null,s),l=i.child,l.memoizedState=zf(s),l.childLanes=Ff(t,S,s),i.memoizedState=Bf,i=Uo(null,l));else if(Va(i),Sh(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var J=S.dgst;S=J,l=Error(a(419)),l.stack="",l.digest=S,vo({value:l,source:null,stack:null}),i=Vf(t,i,s)}else if(dn||nr(t,i,s,!1),S=(s&t.childLanes)!==0,dn||S){if(S=Zt,S!==null&&(l=ao(S,s),l!==0&&l!==B.retryLane))throw B.retryLane=l,_s(t,l),Zn(S,t,l),If;yh(A)||pc(),i=Vf(t,i,s)}else yh(A)?(i.flags|=192,i.child=t.child,i=null):(t=B.treeContext,$t=mi(A.nextSibling),Cn=i,At=!0,Ia=null,di=!1,t!==null&&_m(i,t),i=Hf(i,l.children),i.flags|=4096);return i}return f?(Ga(),A=l.fallback,f=i.mode,B=t.child,J=B.sibling,l=ea(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,J!==null?A=ea(J,A):(A=vs(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,Uo(null,l),l=i.child,A=t.child.memoizedState,A===null?A=zf(s):(f=A.cachePool,f!==null?(B=fn._currentValue,f=f.parent!==B?{parent:B,pool:B}:f):f=Tm(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Ff(t,S,s),i.memoizedState=Bf,Uo(t.child,l)):(Va(i),s=t.child,t=s.sibling,s=ea(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function Hf(t,i){return i=sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function sc(t,i){return t=ti(22,t,null,i),t.lanes=0,t}function Vf(t,i,s){return As(i,t.child,null,s),t=Hf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function B0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),tf(t.return,i,s)}function Gf(t,i,s,l,f,m){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=m)}function z0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var S=on.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,Se(on,S),Dn(t,i,l,s),l=At?_o:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B0(t,s,i);else if(t.tag===19)B0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Yl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Gf(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Yl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Gf(i,!0,s,null,m,l);break;case"together":Gf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ra(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Wa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(nr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ea(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ea(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function kf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function Ny(t,i,s){switch(i.tag){case 3:Ce(i,i.stateNode.containerInfo),Ba(i,fn,t.memoizedState.cache),ys();break;case 27:case 5:ke(i);break;case 4:Ce(i,i.stateNode.containerInfo);break;case 10:Ba(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,pf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Va(i),i.flags|=128,null):(s&i.child.childLanes)!==0?P0(t,i,s):(Va(i),t=ra(t,i,s),t!==null?t.sibling:null);Va(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(nr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return z0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(on,on.current),l)break;return null;case 22:return i.lanes=0,D0(t,i,s,i.pendingProps);case 24:Ba(i,fn,t.memoizedState.cache)}return ra(t,i,s)}function F0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)dn=!0;else{if(!kf(t,s)&&(i.flags&128)===0)return dn=!1,Ny(t,i,s);dn=(t.flags&131072)!==0}else dn=!1,At&&(i.flags&1048576)!==0&&xm(i,_o,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ts(i.elementType),i.type=t,typeof t=="function")Yu(t)?(l=Cs(t,l),i.tag=1,i=O0(null,i,t,l,s)):(i.tag=0,i=Pf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===O){i.tag=11,i=R0(null,i,t,l,s);break e}else if(f===P){i.tag=14,i=C0(null,i,t,l,s);break e}}throw i=me(t)||t,Error(a(306,i,""))}}return i;case 0:return Pf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Cs(l,i.pendingProps),O0(t,i,l,f,s);case 3:e:{if(Ce(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,cf(t,i),Ao(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Ba(i,fn,l),l!==m.cache&&nf(i,[fn],s,!0),Eo(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=I0(t,i,l,s);break e}else if(l!==f){f=ui(Error(a(424)),i),vo(f),i=I0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=mi(t.firstChild),Cn=i,At=!0,Ia=null,di=!0,s=Dm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ys(),l===f){i=ra(t,i,s);break e}Dn(t,i,l,s)}i=i.child}return i;case 26:return ac(t,i),t===null?(s=Zg(i.type,null,i.pendingProps,null))?i.memoizedState=s:At||(s=i.type,t=i.pendingProps,l=Sc(ie.current).createElement(s),l[un]=i,l[gn]=t,Un(l,s,t),ee(l),i.stateNode=l):i.memoizedState=Zg(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ke(i),t===null&&At&&(l=i.stateNode=Yg(i.type,i.pendingProps,ie.current),Cn=i,di=!0,f=$t,Za(i.type)?(bh=f,$t=mi(l.firstChild)):$t=f),Dn(t,i,i.pendingProps.children,s),ac(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&At&&((f=l=$t)&&(l=cS(l,i.type,i.pendingProps,di),l!==null?(i.stateNode=l,Cn=i,$t=mi(l.firstChild),di=!1,f=!0):f=!1),f||Pa(i)),ke(i),f=i.type,m=i.pendingProps,S=t!==null?t.memoizedProps:null,l=m.children,xh(f,m)?l=null:S!==null&&xh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=gf(t,i,Ty,null,null,s),qo._currentValue=f),ac(t,i),Dn(t,i,l,s),i.child;case 6:return t===null&&At&&((t=s=$t)&&(s=uS(s,i.pendingProps,di),s!==null?(i.stateNode=s,Cn=i,$t=null,t=!0):t=!1),t||Pa(i)),null;case 13:return P0(t,i,s);case 4:return Ce(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=As(i,null,l,s):Dn(t,i,l,s),i.child;case 11:return R0(t,i,i.type,i.pendingProps,s);case 7:return Dn(t,i,i.pendingProps,s),i.child;case 8:return Dn(t,i,i.pendingProps.children,s),i.child;case 12:return Dn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ba(i,i.type,l.value),Dn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,bs(i),f=wn(f),l=l(f),i.flags|=1,Dn(t,i,l,s),i.child;case 14:return C0(t,i,i.type,i.pendingProps,s);case 15:return w0(t,i,i.type,i.pendingProps,s);case 19:return z0(t,i,s);case 31:return Ly(t,i,s);case 22:return D0(t,i,s,i.pendingProps);case 24:return bs(i),l=wn(fn),t===null?(f=rf(),f===null&&(f=Zt,m=af(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},lf(i),Ba(i,fn,f)):((t.lanes&s)!==0&&(cf(t,i),Ao(i,null,null,s),Eo()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ba(i,fn,l)):(l=m.cache,Ba(i,fn,l),l!==f.cache&&nf(i,[fn],s,!0))),Dn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function oa(t){t.flags|=4}function Xf(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw Es=kl,of}else t.flags&=-16777217}function H0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tx(i))if(hg())t.flags|=8192;else throw Es=kl,of}function rc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?kt():536870912,t.lanes|=i,pr|=i)}function Lo(t,i){if(!At)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function en(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Oy(t,i,s){var l=i.pendingProps;switch(Qu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(i),null;case 1:return en(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ia(fn),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(tr(i)?oa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$u())),en(i),null;case 26:var f=i.type,m=i.memoizedState;return t===null?(oa(i),m!==null?(en(i),H0(i,m)):(en(i),Xf(i,f,null,l,s))):m?m!==t.memoizedState?(oa(i),en(i),H0(i,m)):(en(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&oa(i),en(i),Xf(i,f,t,l,s)),null;case 27:if(lt(i),s=ie.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return en(i),null}t=Te.current,tr(i)?vm(i):(t=Yg(f,l,s),i.stateNode=t,oa(i))}return en(i),null;case 5:if(lt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return en(i),null}if(m=Te.current,tr(i))vm(i);else{var S=Sc(ie.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}m[un]=i,m[gn]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;e:switch(Un(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&oa(i)}}return en(i),Xf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ie.current,tr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Cn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[un]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Pg(t.nodeValue,s)),t||Pa(i,!0)}else t=Sc(t).createTextNode(l),t[un]=i,i.stateNode=t}return en(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=tr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[un]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),t=!1}else s=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ii(i),i):(ii(i),null);if((i.flags&128)!==0)throw Error(a(558))}return en(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=tr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[un]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;en(i),f=!1}else f=$u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ii(i),i):(ii(i),null)}return ii(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),rc(i,i.updateQueue),en(i),null);case 4:return Fe(),t===null&&hh(i.stateNode.containerInfo),en(i),null;case 10:return ia(i.type),en(i),null;case 19:if(se(on),l=i.memoizedState,l===null)return en(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)Lo(l,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Yl(t),m!==null){for(i.flags|=128,Lo(l,!1),t=m.updateQueue,i.updateQueue=t,rc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)pm(s,t),s=s.sibling;return Se(on,on.current&1|2),At&&ta(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>fc&&(i.flags|=128,f=!0,Lo(l,!1),i.lanes=4194304)}else{if(!f)if(t=Yl(m),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,rc(i,t),Lo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!At)return en(i),null}else 2*T()-l.renderingStartTime>fc&&s!==536870912&&(i.flags|=128,f=!0,Lo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(t=l.last,t!==null?t.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=on.current,Se(on,f?s&1|2:s&1),At&&ta(i,l.treeForkCount),t):(en(i),null);case 22:case 23:return ii(i),df(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(en(i),i.subtreeFlags&6&&(i.flags|=8192)):en(i),s=i.updateQueue,s!==null&&rc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&se(Ms),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ia(fn),en(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Iy(t,i){switch(Qu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ia(fn),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return lt(i),null;case 31:if(i.memoizedState!==null){if(ii(i),i.alternate===null)throw Error(a(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ii(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return se(on),null;case 4:return Fe(),null;case 10:return ia(i.type),null;case 22:case 23:return ii(i),df(),t!==null&&se(Ms),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ia(fn),null;case 25:return null;default:return null}}function V0(t,i){switch(Qu(i),i.tag){case 3:ia(fn),Fe();break;case 26:case 27:case 5:lt(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&ii(i);break;case 13:ii(i);break;case 19:se(on);break;case 10:ia(i.type);break;case 22:case 23:ii(i),df(),t!==null&&se(Ms);break;case 24:ia(fn)}}function No(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,S=s.inst;l=m(),S.destroy=l}s=s.next}while(s!==f)}}catch(A){Ht(i,i.return,A)}}function ka(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=i;var B=s,J=A;try{J()}catch(ue){Ht(f,B,ue)}}}l=l.next}while(l!==m)}}catch(ue){Ht(i,i.return,ue)}}function G0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Lm(i,s)}catch(l){Ht(t,t.return,l)}}}function k0(t,i,s){s.props=Cs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Ht(t,i,l)}}function Oo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Ht(t,i,f)}}function Bi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Ht(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ht(t,i,f)}else s.current=null}function X0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Ht(t,t.return,f)}}function Wf(t,i,s){try{var l=t.stateNode;iS(l,t.type,s,i),l[gn]=i}catch(f){Ht(t,t.return,f)}}function W0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ji));else if(l!==4&&(l===27&&Za(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Yf(t,i,s),t=t.sibling;t!==null;)Yf(t,i,s),t=t.sibling}function oc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Za(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(oc(t,i,s),t=t.sibling;t!==null;)oc(t,i,s),t=t.sibling}function q0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Un(i,l,s),i[un]=t,i[gn]=s}catch(m){Ht(t,t.return,m)}}var la=!1,pn=!1,jf=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Py(t,i){if(t=t.containerInfo,mh=Cc,t=sm(t),Hu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var S=0,A=-1,B=-1,J=0,ue=0,pe=t,te=null;t:for(;;){for(var re;pe!==s||f!==0&&pe.nodeType!==3||(A=S+f),pe!==m||l!==0&&pe.nodeType!==3||(B=S+l),pe.nodeType===3&&(S+=pe.nodeValue.length),(re=pe.firstChild)!==null;)te=pe,pe=re;for(;;){if(pe===t)break t;if(te===s&&++J===f&&(A=S),te===m&&++ue===l&&(B=S),(re=pe.nextSibling)!==null)break;pe=te,te=pe.parentNode}pe=re}s=A===-1||B===-1?null:{start:A,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(gh={focusedElem:t,selectionRange:s},Cc=!1,Tn=i;Tn!==null;)if(i=Tn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Tn=t;else for(;Tn!==null;){switch(i=Tn,m=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ze=Cs(s.type,f);t=l.getSnapshotBeforeUpdate(ze,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(et){Ht(s,s.return,et)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)vh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Tn=t;break}Tn=i.return}}function j0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ua(t,s),l&4&&No(5,s);break;case 1:if(ua(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Ht(s,s.return,S)}else{var f=Cs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ht(s,s.return,S)}}l&64&&G0(s),l&512&&Oo(s,s.return);break;case 3:if(ua(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Lm(t,i)}catch(S){Ht(s,s.return,S)}}break;case 27:i===null&&l&4&&q0(s);case 26:case 5:ua(t,s),i===null&&l&4&&X0(s),l&512&&Oo(s,s.return);break;case 12:ua(t,s);break;case 31:ua(t,s),l&4&&Q0(t,s);break;case 13:ua(t,s),l&4&&J0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Wy.bind(null,s),fS(t,s))));break;case 22:if(l=s.memoizedState!==null||la,!l){i=i!==null&&i.memoizedState!==null||pn,f=la;var m=pn;la=l,(pn=i)&&!m?fa(t,s,(s.subtreeFlags&8772)!==0):ua(t,s),la=f,pn=m}break;case 30:break;default:ua(t,s)}}function K0(t){var i=t.alternate;i!==null&&(t.alternate=null,K0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&oo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,qn=!1;function ca(t,i,s){for(s=s.child;s!==null;)Z0(t,i,s),s=s.sibling}function Z0(t,i,s){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(ye,s)}catch{}switch(s.tag){case 26:pn||Bi(s,i),ca(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:pn||Bi(s,i);var l=tn,f=qn;Za(s.type)&&(tn=s.stateNode,qn=!1),ca(t,i,s),ko(s.stateNode),tn=l,qn=f;break;case 5:pn||Bi(s,i);case 6:if(l=tn,f=qn,tn=null,ca(t,i,s),tn=l,qn=f,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(s.stateNode)}catch(m){Ht(s,i,m)}else try{tn.removeChild(s.stateNode)}catch(m){Ht(s,i,m)}break;case 18:tn!==null&&(qn?(t=tn,Gg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),br(t)):Gg(tn,s.stateNode));break;case 4:l=tn,f=qn,tn=s.stateNode.containerInfo,qn=!0,ca(t,i,s),tn=l,qn=f;break;case 0:case 11:case 14:case 15:ka(2,s,i),pn||ka(4,s,i),ca(t,i,s);break;case 1:pn||(Bi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&k0(s,i,l)),ca(t,i,s);break;case 21:ca(t,i,s);break;case 22:pn=(l=pn)||s.memoizedState!==null,ca(t,i,s),pn=l;break;default:ca(t,i,s)}}function Q0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{br(t)}catch(s){Ht(i,i.return,s)}}}function J0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{br(t)}catch(s){Ht(i,i.return,s)}}function By(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Y0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Y0),i;default:throw Error(a(435,t.tag))}}function lc(t,i){var s=By(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=qy.bind(null,t,l);l.then(f,f)}})}function Yn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,S=i,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){tn=A.stateNode,qn=!1;break e}break;case 5:tn=A.stateNode,qn=!1;break e;case 3:case 4:tn=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(tn===null)throw Error(a(160));Z0(m,S,f),tn=null,qn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)$0(i,t),i=i.sibling}var Mi=null;function $0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(i,t),jn(t),l&4&&(ka(3,t,t.return),No(3,t),ka(5,t,t.return));break;case 1:Yn(i,t),jn(t),l&512&&(pn||s===null||Bi(s,s.return)),l&64&&la&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Mi;if(Yn(i,t),jn(t),l&512&&(pn||s===null||Bi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ps]||m[un]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Un(m,l,s),m[un]=t,ee(m),l=m;break e;case"link":var S=$g("link","href",f).get(l+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(m=S[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break t}}m=f.createElement(l),Un(m,l,s),f.head.appendChild(m);break;case"meta":if(S=$g("meta","content",f).get(l+(s.content||""))){for(A=0;A<S.length;A++)if(m=S[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break t}}m=f.createElement(l),Un(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[un]=t,ee(m),l=m}t.stateNode=l}else ex(f,t.type,t.stateNode);else t.stateNode=Jg(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?ex(f,t.type,t.stateNode):Jg(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Wf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Yn(i,t),jn(t),l&512&&(pn||s===null||Bi(s,s.return)),s!==null&&l&4&&Wf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Yn(i,t),jn(t),l&512&&(pn||s===null||Bi(s,s.return)),t.flags&32){f=t.stateNode;try{Oi(f,"")}catch(ze){Ht(t,t.return,ze)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Wf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(jf=!0);break;case 6:if(Yn(i,t),jn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ze){Ht(t,t.return,ze)}}break;case 3:if(Tc=null,f=Mi,Mi=bc(i.containerInfo),Yn(i,t),Mi=f,jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{br(i.containerInfo)}catch(ze){Ht(t,t.return,ze)}jf&&(jf=!1,eg(t));break;case 4:l=Mi,Mi=bc(t.stateNode.containerInfo),Yn(i,t),jn(t),Mi=l;break;case 12:Yn(i,t),jn(t);break;case 31:Yn(i,t),jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,lc(t,l)));break;case 13:Yn(i,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(uc=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,lc(t,l)));break;case 22:f=t.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,J=la,ue=pn;if(la=J||f,pn=ue||B,Yn(i,t),pn=ue,la=J,jn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||B||la||pn||ws(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(m=B.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var pe=B.memoizedProps.style,te=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;A.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ze){Ht(B,B.return,ze)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=f?"":B.memoizedProps}catch(ze){Ht(B,B.return,ze)}}}else if(i.tag===18){if(s===null){B=i;try{var re=B.stateNode;f?kg(re,!0):kg(B.stateNode,!1)}catch(ze){Ht(B,B.return,ze)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,lc(t,s))));break;case 19:Yn(i,t),jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,lc(t,l)));break;case 30:break;case 21:break;default:Yn(i,t),jn(t)}}function jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(W0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=qf(t);oc(t,m,f);break;case 5:var S=s.stateNode;s.flags&32&&(Oi(S,""),s.flags&=-33);var A=qf(t);oc(t,A,S);break;case 3:case 4:var B=s.stateNode.containerInfo,J=qf(t);Yf(t,J,B);break;default:throw Error(a(161))}}catch(ue){Ht(t,t.return,ue)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;eg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ua(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)j0(t,i.alternate,i),i=i.sibling}function ws(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ka(4,i,i.return),ws(i);break;case 1:Bi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&k0(i,i.return,s),ws(i);break;case 27:ko(i.stateNode);case 26:case 5:Bi(i,i.return),ws(i);break;case 22:i.memoizedState===null&&ws(i);break;case 30:ws(i);break;default:ws(i)}t=t.sibling}}function fa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:fa(f,m,s),No(4,m);break;case 1:if(fa(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(J){Ht(l,l.return,J)}if(l=m,f=l.updateQueue,f!==null){var A=l.stateNode;try{var B=f.shared.hiddenCallbacks;if(B!==null)for(f.shared.hiddenCallbacks=null,f=0;f<B.length;f++)Um(B[f],A)}catch(J){Ht(l,l.return,J)}}s&&S&64&&G0(m),Oo(m,m.return);break;case 27:q0(m);case 26:case 5:fa(f,m,s),s&&l===null&&S&4&&X0(m),Oo(m,m.return);break;case 12:fa(f,m,s);break;case 31:fa(f,m,s),s&&S&4&&Q0(f,m);break;case 13:fa(f,m,s),s&&S&4&&J0(f,m);break;case 22:m.memoizedState===null&&fa(f,m,s),Oo(m,m.return);break;case 30:break;default:fa(f,m,s)}i=i.sibling}}function Kf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&yo(s))}function Zf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yo(t))}function Ti(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)tg(t,i,s,l),i=i.sibling}function tg(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ti(t,i,s,l),f&2048&&No(9,i);break;case 1:Ti(t,i,s,l);break;case 3:Ti(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yo(t)));break;case 12:if(f&2048){Ti(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,S=m.id,A=m.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ht(i,i.return,B)}}else Ti(t,i,s,l);break;case 31:Ti(t,i,s,l);break;case 13:Ti(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Ti(t,i,s,l):Io(t,i):m._visibility&2?Ti(t,i,s,l):(m._visibility|=2,fr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Kf(S,i);break;case 24:Ti(t,i,s,l),f&2048&&Zf(i.alternate,i);break;default:Ti(t,i,s,l)}}function fr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=t,S=i,A=s,B=l,J=S.flags;switch(S.tag){case 0:case 11:case 15:fr(m,S,A,B,f),No(8,S);break;case 23:break;case 22:var ue=S.stateNode;S.memoizedState!==null?ue._visibility&2?fr(m,S,A,B,f):Io(m,S):(ue._visibility|=2,fr(m,S,A,B,f)),f&&J&2048&&Kf(S.alternate,S);break;case 24:fr(m,S,A,B,f),f&&J&2048&&Zf(S.alternate,S);break;default:fr(m,S,A,B,f)}i=i.sibling}}function Io(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Io(s,l),f&2048&&Kf(l.alternate,l);break;case 24:Io(s,l),f&2048&&Zf(l.alternate,l);break;default:Io(s,l)}i=i.sibling}}var Po=8192;function hr(t,i,s){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)ng(t,i,s),t=t.sibling}function ng(t,i,s){switch(t.tag){case 26:hr(t,i,s),t.flags&Po&&t.memoizedState!==null&&MS(s,Mi,t.memoizedState,t.memoizedProps);break;case 5:hr(t,i,s);break;case 3:case 4:var l=Mi;Mi=bc(t.stateNode.containerInfo),hr(t,i,s),Mi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Po,Po=16777216,hr(t,i,s),Po=l):hr(t,i,s));break;default:hr(t,i,s)}}function ig(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Bo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,sg(l,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,cc(t)):Bo(t);break;default:Bo(t)}}function cc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Tn=l,sg(l,t)}ig(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ka(8,i,i.return),cc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,cc(i));break;default:cc(i)}t=t.sibling}}function sg(t,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:ka(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Tn=l;else e:for(s=t;Tn!==null;){l=Tn;var f=l.sibling,m=l.return;if(K0(l),l===s){Tn=null;break e}if(f!==null){f.return=m,Tn=f;break e}Tn=m}}}var zy={getCacheForType:function(t){var i=wn(fn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return wn(fn).controller.signal}},Fy=typeof WeakMap=="function"?WeakMap:Map,It=0,Zt=null,xt=null,bt=0,Ft=0,ai=null,Xa=!1,dr=!1,Qf=!1,ha=0,sn=0,Wa=0,Ds=0,Jf=0,si=0,pr=0,zo=null,Kn=null,$f=!1,uc=0,rg=0,fc=1/0,hc=null,qa=null,_n=0,Ya=null,mr=null,da=0,eh=0,th=null,og=null,Fo=0,nh=null;function ri(){return(It&2)!==0&&bt!==0?bt&-bt:z.T!==null?lh():so()}function lg(){if(si===0)if((bt&536870912)===0||At){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),si=t}else si=536870912;return t=ni.current,t!==null&&(t.flags|=32),si}function Zn(t,i,s){(t===Zt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(gr(t,0),ja(t,bt,si,!1)),Nn(t,s),((It&2)===0||t!==Zt)&&(t===Zt&&((It&2)===0&&(Ds|=s),sn===4&&ja(t,bt,si,!1)),zi(t))}function cg(t,i,s){if((It&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Pe(t,i),f=l?Gy(t,i):ah(t,i,!0),m=l;do{if(f===0){dr&&!l&&ja(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!Hy(s)){f=ah(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var A=t;f=zo;var B=A.current.memoizedState.isDehydrated;if(B&&(gr(A,S).flags|=256),S=ah(A,S,!1),S!==2){if(Qf&&!B){A.errorRecoveryDisabledLanes|=m,Ds|=m,f=4;break e}m=Kn,Kn=f,m!==null&&(Kn===null?Kn=m:Kn.push.apply(Kn,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){gr(t,0),ja(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ja(l,i,si,!Xa);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=uc+300-T(),10<f)){if(ja(l,i,si,!Xa),ge(l,0,!0)!==0)break e;da=i,l.timeoutHandle=Hg(ug.bind(null,l,s,Kn,hc,$f,i,si,Ds,pr,Xa,m,"Throttled",-0,0),f);break e}ug(l,s,Kn,hc,$f,i,si,Ds,pr,Xa,m,null,-0,0)}}break}while(!0);zi(t)}function ug(t,i,s,l,f,m,S,A,B,J,ue,pe,te,re){if(t.timeoutHandle=-1,pe=i.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},ng(i,m,pe);var ze=(m&62914560)===m?uc-T():(m&4194048)===m?rg-T():0;if(ze=TS(pe,ze),ze!==null){da=m,t.cancelPendingCommit=ze(_g.bind(null,t,i,m,s,l,f,S,A,B,ue,pe,null,te,re)),ja(t,m,S,!J);return}}_g(t,i,m,s,l,f,S,A,B)}function Hy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!ei(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ja(t,i,s,l){i&=~Jf,i&=~Ds,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Ve(f),S=1<<m;l[m]=-1,f&=~S}s!==0&&Tl(t,s,i)}function dc(){return(It&6)===0?(Ho(0),!1):!0}function ih(){if(xt!==null){if(Ft===0)var t=xt.return;else t=xt,na=Ss=null,vf(t),rr=null,bo=0,t=xt;for(;t!==null;)V0(t.alternate,t),t=t.return;xt=null}}function gr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,rS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),da=0,ih(),Zt=t,xt=s=ea(t.current,null),bt=i,Ft=0,ai=null,Xa=!1,dr=Pe(t,i),Qf=!1,pr=si=Jf=Ds=Wa=sn=0,Kn=zo=null,$f=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ve(l),m=1<<f;i|=t[f],l&=~m}return ha=i,Ol(),s}function fg(t,i){ot=null,z.H=Do,i===sr||i===Gl?(i=Rm(),Ft=3):i===of?(i=Rm(),Ft=4):Ft=i===If?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ai=i,xt===null&&(sn=1,nc(t,ui(i,t.current)))}function hg(){var t=ni.current;return t===null?!0:(bt&4194048)===bt?pi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===pi:!1}function dg(){var t=z.H;return z.H=Do,t===null?Do:t}function pg(){var t=z.A;return z.A=zy,t}function pc(){sn=4,Xa||(bt&4194048)!==bt&&ni.current!==null||(dr=!0),(Wa&134217727)===0&&(Ds&134217727)===0||Zt===null||ja(Zt,bt,si,!1)}function ah(t,i,s){var l=It;It|=2;var f=dg(),m=pg();(Zt!==t||bt!==i)&&(hc=null,gr(t,i)),i=!1;var S=sn;e:do try{if(Ft!==0&&xt!==null){var A=xt,B=ai;switch(Ft){case 8:ih(),S=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(i=!0);var J=Ft;if(Ft=0,ai=null,xr(t,A,B,J),s&&dr){S=0;break e}break;default:J=Ft,Ft=0,ai=null,xr(t,A,B,J)}}Vy(),S=sn;break}catch(ue){fg(t,ue)}while(!0);return i&&t.shellSuspendCounter++,na=Ss=null,It=l,z.H=f,z.A=m,xt===null&&(Zt=null,bt=0,Ol()),S}function Vy(){for(;xt!==null;)mg(xt)}function Gy(t,i){var s=It;It|=2;var l=dg(),f=pg();Zt!==t||bt!==i?(hc=null,fc=T()+500,gr(t,i)):dr=Pe(t,i);e:do try{if(Ft!==0&&xt!==null){i=xt;var m=ai;t:switch(Ft){case 1:Ft=0,ai=null,xr(t,i,m,1);break;case 2:case 9:if(Em(m)){Ft=0,ai=null,gg(i);break}i=function(){Ft!==2&&Ft!==9||Zt!==t||(Ft=7),zi(t)},m.then(i,i);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Em(m)?(Ft=0,ai=null,gg(i)):(Ft=0,ai=null,xr(t,i,m,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var A=xt;if(S?tx(S):A.stateNode.complete){Ft=0,ai=null;var B=A.sibling;if(B!==null)xt=B;else{var J=A.return;J!==null?(xt=J,mc(J)):xt=null}break t}}Ft=0,ai=null,xr(t,i,m,5);break;case 6:Ft=0,ai=null,xr(t,i,m,6);break;case 8:ih(),sn=6;break e;default:throw Error(a(462))}}ky();break}catch(ue){fg(t,ue)}while(!0);return na=Ss=null,z.H=l,z.A=f,It=s,xt!==null?0:(Zt=null,bt=0,Ol(),sn)}function ky(){for(;xt!==null&&!at();)mg(xt)}function mg(t){var i=F0(t.alternate,t,ha);t.memoizedProps=t.pendingProps,i===null?mc(t):xt=i}function gg(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=N0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=N0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:vf(i);default:V0(s,i),i=xt=pm(i,ha),i=F0(s,i,ha)}t.memoizedProps=t.pendingProps,i===null?mc(t):xt=i}function xr(t,i,s,l){na=Ss=null,vf(i),rr=null,bo=0;var f=i.return;try{if(Uy(t,f,i,s,bt)){sn=1,nc(t,ui(s,t.current)),xt=null;return}}catch(m){if(f!==null)throw xt=f,m;sn=1,nc(t,ui(s,t.current)),xt=null;return}i.flags&32768?(At||l===1?t=!0:dr||(bt&536870912)!==0?t=!1:(Xa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ni.current,l!==null&&l.tag===13&&(l.flags|=16384))),xg(i,t)):mc(i)}function mc(t){var i=t;do{if((i.flags&32768)!==0){xg(i,Xa);return}t=i.return;var s=Oy(i.alternate,i,ha);if(s!==null){xt=s;return}if(i=i.sibling,i!==null){xt=i;return}xt=i=t}while(i!==null);sn===0&&(sn=5)}function xg(t,i){do{var s=Iy(t.alternate,t);if(s!==null){s.flags&=32767,xt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){xt=t;return}xt=t=s}while(t!==null);sn=6,xt=null}function _g(t,i,s,l,f,m,S,A,B){t.cancelPendingCommit=null;do gc();while(_n!==0);if((It&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Wu,Jn(t,s,m,S,A,B),t===Zt&&(xt=Zt=null,bt=0),mr=i,Ya=t,da=s,eh=m,th=f,og=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Yy(oe,function(){return Mg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=j.p,j.p=2,S=It,It|=4;try{Py(t,i,s)}finally{It=S,j.p=f,z.T=l}}_n=1,vg(),yg(),Sg()}}function vg(){if(_n===1){_n=0;var t=Ya,i=mr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=j.p;j.p=2;var f=It;It|=4;try{$0(i,t);var m=gh,S=sm(t.containerInfo),A=m.focusedElem,B=m.selectionRange;if(S!==A&&A&&A.ownerDocument&&am(A.ownerDocument.documentElement,A)){if(B!==null&&Hu(A)){var J=B.start,ue=B.end;if(ue===void 0&&(ue=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ue,A.value.length);else{var pe=A.ownerDocument||document,te=pe&&pe.defaultView||window;if(te.getSelection){var re=te.getSelection(),ze=A.textContent.length,et=Math.min(B.start,ze),qt=B.end===void 0?et:Math.min(B.end,ze);!re.extend&&et>qt&&(S=qt,qt=et,et=S);var W=im(A,et),G=im(A,qt);if(W&&G&&(re.rangeCount!==1||re.anchorNode!==W.node||re.anchorOffset!==W.offset||re.focusNode!==G.node||re.focusOffset!==G.offset)){var Z=pe.createRange();Z.setStart(W.node,W.offset),re.removeAllRanges(),et>qt?(re.addRange(Z),re.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),re.addRange(Z))}}}}for(pe=[],re=A;re=re.parentNode;)re.nodeType===1&&pe.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<pe.length;A++){var he=pe[A];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}Cc=!!mh,gh=mh=null}finally{It=f,j.p=l,z.T=s}}t.current=i,_n=2}}function yg(){if(_n===2){_n=0;var t=Ya,i=mr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=j.p;j.p=2;var f=It;It|=4;try{j0(t,i.alternate,i)}finally{It=f,j.p=l,z.T=s}}_n=3}}function Sg(){if(_n===4||_n===3){_n=0,U();var t=Ya,i=mr,s=da,l=og;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,mr=Ya=null,bg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(qa=null),ds(s),i=i.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,f=j.p,j.p=2,z.T=null;try{for(var m=t.onRecoverableError,S=0;S<l.length;S++){var A=l[S];m(A.value,{componentStack:A.stack})}}finally{z.T=i,j.p=f}}(da&3)!==0&&gc(),zi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===nh?Fo++:(Fo=0,nh=t):Fo=0,Ho(0)}}function bg(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,yo(i)))}function gc(){return vg(),yg(),Sg(),Mg()}function Mg(){if(_n!==5)return!1;var t=Ya,i=eh;eh=0;var s=ds(da),l=z.T,f=j.p;try{j.p=32>s?32:s,z.T=null,s=th,th=null;var m=Ya,S=da;if(_n=0,mr=Ya=null,da=0,(It&6)!==0)throw Error(a(331));var A=It;if(It|=4,ag(m.current),tg(m,m.current,S,s),It=A,Ho(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(ye,m)}catch{}return!0}finally{j.p=f,z.T=l,bg(t,i)}}function Tg(t,i,s){i=ui(s,i),i=Of(t.stateNode,i,2),t=Ha(t,i,2),t!==null&&(Nn(t,2),zi(t))}function Ht(t,i,s){if(t.tag===3)Tg(t,t,s);else for(;i!==null;){if(i.tag===3){Tg(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qa===null||!qa.has(l))){t=ui(s,t),s=E0(2),l=Ha(i,s,2),l!==null&&(A0(s,l,i,t),Nn(l,2),zi(l));break}}i=i.return}}function sh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Fy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Qf=!0,f.add(s),t=Xy.bind(null,t,i,s),i.then(t,t))}function Xy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Zt===t&&(bt&s)===s&&(sn===4||sn===3&&(bt&62914560)===bt&&300>T()-uc?(It&2)===0&&gr(t,0):Jf|=s,pr===bt&&(pr=0)),zi(t)}function Eg(t,i){i===0&&(i=kt()),t=_s(t,i),t!==null&&(Nn(t,i),zi(t))}function Wy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Eg(t,s)}function qy(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Eg(t,s)}function Yy(t,i){return jt(t,i)}var xc=null,_r=null,rh=!1,_c=!1,oh=!1,Ka=0;function zi(t){t!==_r&&t.next===null&&(_r===null?xc=_r=t:_r=_r.next=t),_c=!0,rh||(rh=!0,Ky())}function Ho(t,i){if(!oh&&_c){oh=!0;do for(var s=!1,l=xc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var S=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-Ve(42|t)+1)-1,m&=f&~(S&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,wg(l,m))}else m=bt,m=ge(l,l===Zt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Pe(l,m)||(s=!0,wg(l,m));l=l.next}while(s);oh=!1}}function jy(){Ag()}function Ag(){_c=rh=!1;var t=0;Ka!==0&&sS()&&(t=Ka);for(var i=T(),s=null,l=xc;l!==null;){var f=l.next,m=Rg(l,i);m===0?(l.next=null,s===null?xc=f:s.next=f,f===null&&(_r=s)):(s=l,(t!==0||(m&3)!==0)&&(_c=!0)),l=f}_n!==0&&_n!==5||Ho(t),Ka!==0&&(Ka=0)}function Rg(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var S=31-Ve(m),A=1<<S,B=f[S];B===-1?((A&s)===0||(A&l)!==0)&&(f[S]=it(A,i)):B<=i&&(t.expiredLanes|=A),m&=~A}if(i=Zt,s=bt,s=ge(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ye(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Pe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ye(l),ds(s)){case 2:case 8:s=ve;break;case 32:s=oe;break;case 268435456:s=Ue;break;default:s=oe}return l=Cg.bind(null,t),s=jt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ye(l),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,i){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(gc()&&t.callbackNode!==s)return null;var l=bt;return l=ge(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(cg(t,l,i),Rg(t,T()),t.callbackNode!=null&&t.callbackNode===s?Cg.bind(null,t):null)}function wg(t,i){if(gc())return null;cg(t,i,!0)}function Ky(){oS(function(){(It&6)!==0?jt(de,jy):Ag()})}function lh(){if(Ka===0){var t=ir;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),Ka=t}return Ka}function Dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Al(""+t)}function Ug(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Zy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=Dg((f[gn]||null).action),S=l.submitter;S&&(i=(i=S[gn]||null)?Dg(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var A=new Dl("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var B=S?Ug(f,S):new FormData(f);Cf(s,{pending:!0,data:B,method:f.method,action:m},null,B)}}else typeof m=="function"&&(A.preventDefault(),B=S?Ug(f,S):new FormData(f),Cf(s,{pending:!0,data:B,method:f.method,action:m},m,B))},currentTarget:f}]})}}for(var ch=0;ch<Xu.length;ch++){var uh=Xu[ch],Qy=uh.toLowerCase(),Jy=uh[0].toUpperCase()+uh.slice(1);bi(Qy,"on"+Jy)}bi(lm,"onAnimationEnd"),bi(cm,"onAnimationIteration"),bi(um,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(py,"onTransitionRun"),bi(my,"onTransitionStart"),bi(gy,"onTransitionCancel"),bi(fm,"onTransitionEnd"),Ie("onMouseEnter",["mouseout","mouseover"]),Ie("onMouseLeave",["mouseout","mouseover"]),Ie("onPointerEnter",["pointerout","pointerover"]),Ie("onPointerLeave",["pointerout","pointerover"]),De("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),De("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),De("onBeforeInput",["compositionend","keypress","textInput","paste"]),De("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Lg(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var A=l[S],B=A.instance,J=A.currentTarget;if(A=A.listener,B!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=J;try{m(f)}catch(ue){Nl(ue)}f.currentTarget=null,m=B}else for(S=0;S<l.length;S++){if(A=l[S],B=A.instance,J=A.currentTarget,A=A.listener,B!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=J;try{m(f)}catch(ue){Nl(ue)}f.currentTarget=null,m=B}}}}function _t(t,i){var s=i[Ws];s===void 0&&(s=i[Ws]=new Set);var l=t+"__bubble";s.has(l)||(Ng(i,t,2,!1),s.add(l))}function fh(t,i,s){var l=0;i&&(l|=4),Ng(s,t,l,i)}var vc="_reactListening"+Math.random().toString(36).slice(2);function hh(t){if(!t[vc]){t[vc]=!0,q.forEach(function(s){s!=="selectionchange"&&($y.has(s)||fh(s,!1,t),fh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[vc]||(i[vc]=!0,fh("selectionchange",!1,i))}}function Ng(t,i,s,l){switch(lx(i)){case 2:var f=RS;break;case 8:f=CS;break;default:f=Rh}s=f.bind(null,i,s,t),f=void 0,!Uu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function dh(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=l.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=Ua(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){l=m=S;continue e}A=A.parentNode}}l=l.return}zp(function(){var J=m,ue=wu(s),pe=[];e:{var te=hm.get(t);if(te!==void 0){var re=Dl,ze=t;switch(t){case"keypress":if(Cl(s)===0)break e;case"keydown":case"keyup":re=qv;break;case"focusin":ze="focus",re=Iu;break;case"focusout":ze="blur",re=Iu;break;case"beforeblur":case"afterblur":re=Iu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=Kv;break;case lm:case cm:case um:re=Bv;break;case fm:re=Qv;break;case"scroll":case"scrollend":re=Lv;break;case"wheel":re=$v;break;case"copy":case"cut":case"paste":re=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=kp;break;case"toggle":case"beforetoggle":re=ty}var et=(i&4)!==0,qt=!et&&(t==="scroll"||t==="scrollend"),W=et?te!==null?te+"Capture":null:te;et=[];for(var G=J,Z;G!==null;){var he=G;if(Z=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Z===null||W===null||(he=lo(G,W),he!=null&&et.push(Go(G,he,Z))),qt)break;G=G.return}0<et.length&&(te=new re(te,ze,null,s,ue),pe.push({event:te,listeners:et}))}}if((i&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",re=t==="mouseout"||t==="pointerout",te&&s!==Cu&&(ze=s.relatedTarget||s.fromElement)&&(Ua(ze)||ze[Ki]))break e;if((re||te)&&(te=ue.window===ue?ue:(te=ue.ownerDocument)?te.defaultView||te.parentWindow:window,re?(ze=s.relatedTarget||s.toElement,re=J,ze=ze?Ua(ze):null,ze!==null&&(qt=c(ze),et=ze.tag,ze!==qt||et!==5&&et!==27&&et!==6)&&(ze=null)):(re=null,ze=J),re!==ze)){if(et=Vp,he="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(et=kp,he="onPointerLeave",W="onPointerEnter",G="pointer"),qt=re==null?te:X(re),Z=ze==null?te:X(ze),te=new et(he,G+"leave",re,s,ue),te.target=qt,te.relatedTarget=Z,he=null,Ua(ue)===J&&(et=new et(W,G+"enter",ze,s,ue),et.target=Z,et.relatedTarget=qt,he=et),qt=he,re&&ze)t:{for(et=eS,W=re,G=ze,Z=0,he=W;he;he=et(he))Z++;he=0;for(var Ke=G;Ke;Ke=et(Ke))he++;for(;0<Z-he;)W=et(W),Z--;for(;0<he-Z;)G=et(G),he--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){et=W;break t}W=et(W),G=et(G)}et=null}else et=null;re!==null&&Og(pe,te,re,et,!1),ze!==null&&qt!==null&&Og(pe,qt,ze,et,!0)}}e:{if(te=J?X(J):window,re=te.nodeName&&te.nodeName.toLowerCase(),re==="select"||re==="input"&&te.type==="file")var Nt=Qp;else if(Kp(te))if(Jp)Nt=fy;else{Nt=cy;var Ge=ly}else re=te.nodeName,!re||re.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&Ru(J.elementType)&&(Nt=Qp):Nt=uy;if(Nt&&(Nt=Nt(t,J))){Zp(pe,Nt,s,ue);break e}Ge&&Ge(t,te,J),t==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&bn(te,"number",te.value)}switch(Ge=J?X(J):window,t){case"focusin":(Kp(Ge)||Ge.contentEditable==="true")&&(Ks=Ge,Vu=J,xo=null);break;case"focusout":xo=Vu=Ks=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,rm(pe,s,ue);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":rm(pe,s,ue)}var ut;if(Bu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else js?Yp(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(Xp&&s.locale!=="ko"&&(js||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&js&&(ut=Fp()):(Na=ue,Lu="value"in Na?Na.value:Na.textContent,js=!0)),Ge=yc(J,Mt),0<Ge.length&&(Mt=new Gp(Mt,t,null,s,ue),pe.push({event:Mt,listeners:Ge}),ut?Mt.data=ut:(ut=jp(s),ut!==null&&(Mt.data=ut)))),(ut=iy?ay(t,s):sy(t,s))&&(Mt=yc(J,"onBeforeInput"),0<Mt.length&&(Ge=new Gp("onBeforeInput","beforeinput",null,s,ue),pe.push({event:Ge,listeners:Mt}),Ge.data=ut)),Zy(pe,t,J,s,ue)}Lg(pe,i)})}function Go(t,i,s){return{instance:t,listener:i,currentTarget:s}}function yc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=lo(t,s),f!=null&&l.unshift(Go(t,f,m)),f=lo(t,i),f!=null&&l.push(Go(t,f,m))),t.tag===3)return l;t=t.return}return[]}function eS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,i,s,l,f){for(var m=i._reactName,S=[];s!==null&&s!==l;){var A=s,B=A.alternate,J=A.stateNode;if(A=A.tag,B!==null&&B===l)break;A!==5&&A!==26&&A!==27||J===null||(B=J,f?(J=lo(s,m),J!=null&&S.unshift(Go(s,J,B))):f||(J=lo(s,m),J!=null&&S.push(Go(s,J,B)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var tS=/\r\n?/g,nS=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(tS,`
`).replace(nS,"")}function Pg(t,i){return i=Ig(i),Ig(t)===i}function Wt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Oi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Oi(t,""+l);break;case"className":wt(t,"class",l);break;case"tabIndex":wt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,s,l);break;case"style":Pp(t,l,m);break;case"data":if(i!=="object"){wt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Al(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Wt(t,i,"name",f.name,f,null),Wt(t,i,"formEncType",f.formEncType,f,null),Wt(t,i,"formMethod",f.formMethod,f,null),Wt(t,i,"formTarget",f.formTarget,f,null)):(Wt(t,i,"encType",f.encType,f,null),Wt(t,i,"method",f.method,f,null),Wt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Al(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Ji);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Al(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":_t("beforetoggle",t),_t("toggle",t),ct(t,"popover",l);break;case"xlinkActuate":Lt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Lt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Lt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Lt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Lt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Lt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Lt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ct(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Dv.get(s)||s,ct(t,s,l))}}function ph(t,i,s,l,f,m){switch(s){case"style":Pp(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Oi(t,l):(typeof l=="number"||typeof l=="bigint")&&Oi(t,""+l);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ee.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[gn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ct(t,s,l)}}}function Un(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,m,S,s,null)}}f&&Wt(t,i,"srcSet",s.srcSet,s,null),l&&Wt(t,i,"src",s.src,s,null);return;case"input":_t("invalid",t);var A=m=S=f=null,B=null,J=null;for(l in s)if(s.hasOwnProperty(l)){var ue=s[l];if(ue!=null)switch(l){case"name":f=ue;break;case"type":S=ue;break;case"checked":B=ue;break;case"defaultChecked":J=ue;break;case"value":m=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:Wt(t,i,l,ue,s,null)}}Jt(t,m,A,B,J,S,f,!1);return;case"select":_t("invalid",t),l=S=m=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:Wt(t,i,f,A,s,null)}i=m,s=S,t.multiple=!!l,i!=null?xn(t,!!l,i,!1):s!=null&&xn(t,!!l,s,!0);return;case"textarea":_t("invalid",t),m=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Wt(t,i,S,A,s,null)}Rn(t,l,f,m);return;case"option":for(B in s)if(s.hasOwnProperty(B)&&(l=s[B],l!=null))switch(B){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Wt(t,i,B,l,s,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(l=0;l<Vo.length;l++)_t(Vo[l],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(l=s[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,J,l,s,null)}return;default:if(Ru(i)){for(ue in s)s.hasOwnProperty(ue)&&(l=s[ue],l!==void 0&&ph(t,i,ue,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Wt(t,i,A,l,s,null))}function iS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,A=null,B=null,J=null,ue=null;for(re in s){var pe=s[re];if(s.hasOwnProperty(re)&&pe!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":B=pe;default:l.hasOwnProperty(re)||Wt(t,i,re,null,l,pe)}}for(var te in l){var re=l[te];if(pe=s[te],l.hasOwnProperty(te)&&(re!=null||pe!=null))switch(te){case"type":m=re;break;case"name":f=re;break;case"checked":J=re;break;case"defaultChecked":ue=re;break;case"value":S=re;break;case"defaultValue":A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:re!==pe&&Wt(t,i,te,re,l,pe)}}Zi(t,S,A,B,J,ue,m,f);return;case"select":re=S=A=te=null;for(m in s)if(B=s[m],s.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":re=B;default:l.hasOwnProperty(m)||Wt(t,i,m,null,l,B)}for(f in l)if(m=l[f],B=s[f],l.hasOwnProperty(f)&&(m!=null||B!=null))switch(f){case"value":te=m;break;case"defaultValue":A=m;break;case"multiple":S=m;default:m!==B&&Wt(t,i,f,m,l,B)}i=A,s=S,l=re,te!=null?xn(t,!!s,te,!1):!!l!=!!s&&(i!=null?xn(t,!!s,i,!0):xn(t,!!s,s?[]:"",!1));return;case"textarea":re=te=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Wt(t,i,A,null,l,f)}for(S in l)if(f=l[S],m=s[S],l.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":te=f;break;case"defaultValue":re=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Wt(t,i,S,f,l,m)}Mn(t,te,re);return;case"option":for(var ze in s)if(te=s[ze],s.hasOwnProperty(ze)&&te!=null&&!l.hasOwnProperty(ze))switch(ze){case"selected":t.selected=!1;break;default:Wt(t,i,ze,null,l,te)}for(B in l)if(te=l[B],re=s[B],l.hasOwnProperty(B)&&te!==re&&(te!=null||re!=null))switch(B){case"selected":t.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Wt(t,i,B,te,l,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in s)te=s[et],s.hasOwnProperty(et)&&te!=null&&!l.hasOwnProperty(et)&&Wt(t,i,et,null,l,te);for(J in l)if(te=l[J],re=s[J],l.hasOwnProperty(J)&&te!==re&&(te!=null||re!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(a(137,i));break;default:Wt(t,i,J,te,l,re)}return;default:if(Ru(i)){for(var qt in s)te=s[qt],s.hasOwnProperty(qt)&&te!==void 0&&!l.hasOwnProperty(qt)&&ph(t,i,qt,void 0,l,te);for(ue in l)te=l[ue],re=s[ue],!l.hasOwnProperty(ue)||te===re||te===void 0&&re===void 0||ph(t,i,ue,te,l,re);return}}for(var W in s)te=s[W],s.hasOwnProperty(W)&&te!=null&&!l.hasOwnProperty(W)&&Wt(t,i,W,null,l,te);for(pe in l)te=l[pe],re=s[pe],!l.hasOwnProperty(pe)||te===re||te==null&&re==null||Wt(t,i,pe,te,l,re)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,S=f.initiatorType,A=f.duration;if(m&&A&&Bg(S)){for(S=0,A=f.responseEnd,l+=1;l<s.length;l++){var B=s[l],J=B.startTime;if(J>A)break;var ue=B.transferSize,pe=B.initiatorType;ue&&Bg(pe)&&(B=B.responseEnd,S+=ue*(B<A?1:(A-J)/(B-J)))}if(--l,i+=8*(m+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var mh=null,gh=null;function Sc(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function xh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _h=null;function sS(){var t=window.event;return t&&t.type==="popstate"?t===_h?!1:(_h=t,!0):(_h=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(lS)}:Hg;function lS(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function Gg(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),br(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ko(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ko(s);for(var m=s.firstChild;m;){var S=m.nextSibling,A=m.nodeName;m[ps]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=S}}else s==="body"&&ko(t.ownerDocument.body);s=f}while(s);br(i)}function kg(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function vh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":vh(s),oo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function cS(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ps])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function uS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=mi(t.nextSibling),t===null))return null;return t}function Xg(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=mi(t.nextSibling),t===null))return null;return t}function yh(t){return t.data==="$?"||t.data==="$~"}function Sh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var bh=null;function Wg(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return mi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function qg(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function Yg(t,i,s){switch(i=Sc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ko(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);oo(t)}var gi=new Map,jg=new Set;function bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=j.d;j.d={f:hS,r:dS,D:pS,C:mS,L:gS,m:xS,X:vS,S:_S,M:yS};function hS(){var t=pa.f(),i=dc();return t||i}function dS(t){var i=R(t);i!==null&&i.tag===5&&i.type==="form"?f0(i):pa.r(t)}var vr=typeof document>"u"?null:document;function Kg(t,i,s){var l=vr;if(l&&typeof i=="string"&&i){var f=Qt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),jg.has(f)||(jg.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Un(i,"link",t),ee(i),l.head.appendChild(i)))}}function pS(t){pa.D(t),Kg("dns-prefetch",t,null)}function mS(t,i){pa.C(t,i),Kg("preconnect",t,i)}function gS(t,i,s){pa.L(t,i,s);var l=vr;if(l&&t&&i){var f='link[rel="preload"][as="'+Qt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Qt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Qt(s.imageSizes)+'"]')):f+='[href="'+Qt(t)+'"]';var m=f;switch(i){case"style":m=yr(t);break;case"script":m=Sr(t)}gi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),gi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Xo(m))||i==="script"&&l.querySelector(Wo(m))||(i=l.createElement("link"),Un(i,"link",t),ee(i),l.head.appendChild(i)))}}function xS(t,i){pa.m(t,i);var s=vr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Qt(l)+'"][href="'+Qt(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Sr(t)}if(!gi.has(m)&&(t=g({rel:"modulepreload",href:t},i),gi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wo(m)))return}l=s.createElement("link"),Un(l,"link",t),ee(l),s.head.appendChild(l)}}}function _S(t,i,s){pa.S(t,i,s);var l=vr;if(l&&t){var f=ae(l).hoistableStyles,m=yr(t);i=i||"default";var S=f.get(m);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(Xo(m)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=gi.get(m))&&Mh(t,s);var B=S=l.createElement("link");ee(B),Un(B,"link",t),B._p=new Promise(function(J,ue){B.onload=J,B.onerror=ue}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Mc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(m,S)}}}function vS(t,i){pa.X(t,i);var s=vr;if(s&&t){var l=ae(s).hoistableScripts,f=Sr(t),m=l.get(f);m||(m=s.querySelector(Wo(f)),m||(t=g({src:t,async:!0},i),(i=gi.get(f))&&Th(t,i),m=s.createElement("script"),ee(m),Un(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function yS(t,i){pa.M(t,i);var s=vr;if(s&&t){var l=ae(s).hoistableScripts,f=Sr(t),m=l.get(f);m||(m=s.querySelector(Wo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=gi.get(f))&&Th(t,i),m=s.createElement("script"),ee(m),Un(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Zg(t,i,s,l){var f=(f=ie.current)?bc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=yr(s.href),s=ae(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=yr(s.href);var m=ae(f).hoistableStyles,S=m.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,S),(m=f.querySelector(Xo(t)))&&!m._p&&(S.instance=m,S.state.loading=5),gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},gi.set(t,s),m||SS(f,t,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Sr(s),s=ae(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function yr(t){return'href="'+Qt(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function Qg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function SS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Un(i,"link",s),ee(i),t.head.appendChild(i))}function Sr(t){return'[src="'+Qt(t)+'"]'}function Wo(t){return"script[async]"+t}function Jg(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Qt(s.href)+'"]');if(l)return i.instance=l,ee(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ee(l),Un(l,"style",f),Mc(l,s.precedence,t),i.instance=l;case"stylesheet":f=yr(s.href);var m=t.querySelector(Xo(f));if(m)return i.state.loading|=4,i.instance=m,ee(m),m;l=Qg(s),(f=gi.get(f))&&Mh(l,f),m=(t.ownerDocument||t).createElement("link"),ee(m);var S=m;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Un(m,"link",l),i.state.loading|=4,Mc(m,s.precedence,t),i.instance=m;case"script":return m=Sr(s.src),(f=t.querySelector(Wo(m)))?(i.instance=f,ee(f),f):(l=s,(f=gi.get(m))&&(l=g({},s),Th(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),ee(f),Un(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Mc(l,s.precedence,t));return i.instance}function Mc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===i)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Mh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Th(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Tc=null;function $g(t,i,s){if(Tc===null){var l=new Map,f=Tc=new Map;f.set(s,l)}else f=Tc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[ps]||m[un]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=t+S;var A=l.get(S);A?A.push(m):l.set(S,[m])}}return l}function ex(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function bS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function tx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function MS(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=yr(l.href),m=i.querySelector(Xo(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Ec.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=m,ee(m);return}m=i.ownerDocument||i,l=Qg(l),(f=gi.get(f))&&Mh(l,f),m=m.createElement("link"),ee(m);var S=m;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Un(m,"link",l),s.instance=m}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ec.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Eh=0;function TS(t,i){return t.stylesheets&&t.count===0&&Rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend){var m=t.unsuspend;t.unsuspend=null,m()}},6e4+i);0<t.imgBytes&&Eh===0&&(Eh=62500*aS());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend)){var m=t.unsuspend;t.unsuspend=null,m()}},(t.imgBytes>Eh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ac=null;function Rc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ac=new Map,i.forEach(ES,t),Ac=null,Ec.call(t))}function ES(t,i){if(!(i.state.loading&4)){var s=Ac.get(t);if(s)var l=s.get(null);else{s=new Map,Ac.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),m=s.get(S)||l,m===l&&s.set(null,f),s.set(S,f),this.count++,l=Ec.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var qo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function AS(t,i,s,l,f,m,S,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function nx(t,i,s,l,f,m,S,A,B,J,ue,pe){return t=new AS(t,i,s,S,B,J,ue,pe,A),i=1,m===!0&&(i|=24),m=ti(3,null,null,i),t.current=m,m.stateNode=t,i=af(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},lf(m),t}function ix(t){return t?(t=Js,t):Js}function ax(t,i,s,l,f,m){f=ix(f),l.context===null?l.context=f:l.pendingContext=f,l=Fa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ha(t,l,i),s!==null&&(Zn(s,t,i),To(s,t,i))}function sx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Ah(t,i){sx(t,i),(t=t.alternate)&&sx(t,i)}function rx(t){if(t.tag===13||t.tag===31){var i=_s(t,67108864);i!==null&&Zn(i,t,67108864),Ah(t,67108864)}}function ox(t){if(t.tag===13||t.tag===31){var i=ri();i=Si(i);var s=_s(t,i);s!==null&&Zn(s,t,i),Ah(t,i)}}var Cc=!0;function RS(t,i,s,l){var f=z.T;z.T=null;var m=j.p;try{j.p=2,Rh(t,i,s,l)}finally{j.p=m,z.T=f}}function CS(t,i,s,l){var f=z.T;z.T=null;var m=j.p;try{j.p=8,Rh(t,i,s,l)}finally{j.p=m,z.T=f}}function Rh(t,i,s,l){if(Cc){var f=Ch(l);if(f===null)dh(t,i,l,wc,s),cx(t,l);else if(DS(f,t,i,s,l))l.stopPropagation();else if(cx(t,l),i&4&&-1<wS.indexOf(t)){for(;f!==null;){var m=R(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=be(m.pendingLanes);if(S!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-Ve(S);A.entanglements[1]|=B,S&=~B}zi(m),(It&6)===0&&(fc=T()+500,Ho(0))}}break;case 31:case 13:A=_s(m,2),A!==null&&Zn(A,m,2),dc(),Ah(m,2)}if(m=Ch(l),m===null&&dh(t,i,l,wc,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else dh(t,i,l,null,s)}}function Ch(t){return t=wu(t),wh(t)}var wc=null;function wh(t){if(wc=null,t=Ua(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return wc=t,null}function lx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case de:return 2;case ve:return 8;case oe:case We:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Dh=!1,Qa=null,Ja=null,$a=null,Yo=new Map,jo=new Map,es=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cx(t,i){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(i.pointerId)}}function Ko(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=R(i),i!==null&&rx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function DS(t,i,s,l,f){switch(i){case"focusin":return Qa=Ko(Qa,t,i,s,l,f),!0;case"dragenter":return Ja=Ko(Ja,t,i,s,l,f),!0;case"mouseover":return $a=Ko($a,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return Yo.set(m,Ko(Yo.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,jo.set(m,Ko(jo.get(m)||null,t,i,s,l,f)),!0}return!1}function ux(t){var i=Ua(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ro(t.priority,function(){ox(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,ro(t.priority,function(){ox(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ch(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Cu=l,s.target.dispatchEvent(l),Cu=null}else return i=R(s),i!==null&&rx(i),t.blockedOn=s,!1;i.shift()}return!0}function fx(t,i,s){Dc(t)&&s.delete(i)}function US(){Dh=!1,Qa!==null&&Dc(Qa)&&(Qa=null),Ja!==null&&Dc(Ja)&&(Ja=null),$a!==null&&Dc($a)&&($a=null),Yo.forEach(fx),jo.forEach(fx)}function Uc(t,i){t.blockedOn===i&&(t.blockedOn=null,Dh||(Dh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,US)))}var Lc=null;function hx(t){Lc!==t&&(Lc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Lc===t&&(Lc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(wh(l||s)===null)continue;break}var m=R(s);m!==null&&(t.splice(i,3),i-=3,Cf(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function br(t){function i(B){return Uc(B,t)}Qa!==null&&Uc(Qa,t),Ja!==null&&Uc(Ja,t),$a!==null&&Uc($a,t),Yo.forEach(i),jo.forEach(i);for(var s=0;s<es.length;s++){var l=es[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<es.length&&(s=es[0],s.blockedOn===null);)ux(s),s.blockedOn===null&&es.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],S=f[gn]||null;if(typeof m=="function")S||hx(s);else if(S){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[gn]||null)A=S.formAction;else if(wh(f)!==null)continue}else A=S.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),hx(s)}}}function dx(){function t(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Uh(t){this._internalRoot=t}Nc.prototype.render=Uh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ri();ax(s,l,t,i,null,null)},Nc.prototype.unmount=Uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ax(t.current,2,null,t,null,null),dc(),i[Ki]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var i=so();t={blockedOn:null,target:t,priority:i};for(var s=0;s<es.length&&i!==0&&i<es[s].priority;s++);es.splice(s,0,t),s===0&&ux(t)}};var px=e.version;if(px!=="19.2.0")throw Error(a(527,px,"19.2.0"));j.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=d(i),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var LS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{ye=Oc.inject(LS),Me=Oc}catch{}}return Qo.createRoot=function(t,i){if(!r(t))throw Error(a(299));var s=!1,l="",f=S0,m=b0,S=M0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=nx(t,1,!1,null,null,s,l,null,f,m,S,dx),t[Ki]=i.current,hh(t),new Uh(i)},Qo.hydrateRoot=function(t,i,s){if(!r(t))throw Error(a(299));var l=!1,f="",m=S0,S=b0,A=M0,B=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(B=s.formState)),i=nx(t,1,!0,i,s??null,l,f,B,m,S,A,dx),i.context=ix(null),s=i.current,l=ri(),l=Si(l),f=Fa(l),f.callback=null,Ha(s,f,l),s=l,i.current.lanes=s,Nn(i,s),zi(i),t[Ki]=i.current,hh(t),new Nc(i)},Qo.version="19.2.0",Qo}var Tx;function GS(){if(Tx)return Oh.exports;Tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Oh.exports=VS(),Oh.exports}var kS=GS();const pp="181",XS=0,Ex=1,WS=2,q_=1,qS=2,ba=3,Ca=0,Qn=1,Vi=2,Ea=0,Fr=1,Ax=2,Rx=3,Cx=4,YS=5,Fs=100,jS=101,KS=102,ZS=103,QS=104,JS=200,$S=201,eb=202,tb=203,Sd=204,bd=205,nb=206,ib=207,ab=208,sb=209,rb=210,ob=211,lb=212,cb=213,ub=214,Md=0,Td=1,Ed=2,Gr=3,Ad=4,Rd=5,Cd=6,wd=7,Y_=0,fb=1,hb=2,fs=0,db=1,pb=2,mb=3,gb=4,xb=5,_b=6,vb=7,wx="attached",yb="detached",j_=300,kr=301,Xr=302,Dd=303,Ud=304,vu=306,Wr=1e3,Gi=1001,du=1002,Gn=1003,K_=1004,ll=1005,Vn=1006,ou=1007,Ma=1008,Wi=1009,Z_=1010,Q_=1011,pl=1012,mp=1013,ks=1014,Di=1015,Qr=1016,gp=1017,xp=1018,ml=1020,J_=35902,$_=35899,ev=1021,tv=1022,vi=1023,gl=1026,xl=1027,_p=1028,vp=1029,yp=1030,Sp=1031,bp=1033,lu=33776,cu=33777,uu=33778,fu=33779,Ld=35840,Nd=35841,Od=35842,Id=35843,Pd=36196,Bd=37492,zd=37496,Fd=37808,Hd=37809,Vd=37810,Gd=37811,kd=37812,Xd=37813,Wd=37814,qd=37815,Yd=37816,jd=37817,Kd=37818,Zd=37819,Qd=37820,Jd=37821,$d=36492,ep=36494,tp=36495,np=36283,ip=36284,ap=36285,sp=36286,_l=2300,vl=2301,zh=2302,Dx=2400,Ux=2401,Lx=2402,Sb=2500,bb=0,nv=1,rp=2,Mb=3200,Tb=3201,iv=0,Eb=1,cs="",Ln="srgb",Xn="srgb-linear",pu="linear",Yt="srgb",Mr=7680,Nx=519,Ab=512,Rb=513,Cb=514,av=515,wb=516,Db=517,Ub=518,Lb=519,op=35044,Ox="300 es",ki=2e3,mu=2001;function sv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Nb(){const o=yl("canvas");return o.style.display="block",o}const Ix={};function gu(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ze(...o){const e="THREE."+o.shift();console.warn(e,...o)}function vt(...o){const e="THREE."+o.shift();console.error(e,...o)}function Sl(...o){const e=o.join(" ");e in Ix||(Ix[e]=!0,Ze(...o))}function Ob(o,e,n){return new Promise(function(a,r){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const r=a[e];if(r!==void 0){const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const r=a.slice(0);for(let c=0,u=r.length;c<u;c++)r[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Px=1234567;const fl=Math.PI/180,qr=180/Math.PI;function Ui(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function yt(o,e,n){return Math.max(e,Math.min(n,o))}function Mp(o,e){return(o%e+e)%e}function Ib(o,e,n,a,r){return a+(o-e)*(r-a)/(n-e)}function Pb(o,e,n){return o!==e?(n-o)/(e-o):0}function hl(o,e,n){return(1-n)*o+n*e}function Bb(o,e,n,a){return hl(o,e,1-Math.exp(-n*a))}function zb(o,e=1){return e-Math.abs(Mp(o,e*2)-e)}function Fb(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function Hb(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function Vb(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Gb(o,e){return o+Math.random()*(e-o)}function kb(o){return o*(.5-Math.random())}function Xb(o){o!==void 0&&(Px=o);let e=Px+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wb(o){return o*fl}function qb(o){return o*qr}function Yb(o){return(o&o-1)===0&&o!==0}function jb(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Kb(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zb(o,e,n,a,r){const c=Math.cos,u=Math.sin,h=c(n/2),p=u(n/2),d=c((e+a)/2),x=u((e+a)/2),g=c((e-a)/2),_=u((e-a)/2),y=c((a-e)/2),M=u((a-e)/2);switch(r){case"XYX":o.set(h*x,p*g,p*_,h*d);break;case"YZY":o.set(p*_,h*x,p*g,h*d);break;case"ZXZ":o.set(p*g,p*_,h*x,h*d);break;case"XZX":o.set(h*x,p*M,p*y,h*d);break;case"YXY":o.set(p*y,h*x,p*M,h*d);break;case"ZYZ":o.set(p*M,p*y,h*x,h*d);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ci(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Qb={DEG2RAD:fl,RAD2DEG:qr,generateUUID:Ui,clamp:yt,euclideanModulo:Mp,mapLinear:Ib,inverseLerp:Pb,lerp:hl,damp:Bb,pingpong:zb,smoothstep:Fb,smootherstep:Hb,randInt:Vb,randFloat:Gb,randFloatSpread:kb,seededRandom:Xb,degToRad:Wb,radToDeg:qb,isPowerOfTwo:Yb,ceilPowerOfTwo:jb,floorPowerOfTwo:Kb,setQuaternionFromProperEuler:Zb,normalize:Vt,denormalize:Ci};class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,r=e.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(yt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),r=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*r+e.x,this.y=c*r+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(e=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=r}static slerpFlat(e,n,a,r,c,u,h){let p=a[r+0],d=a[r+1],x=a[r+2],g=a[r+3],_=c[u+0],y=c[u+1],M=c[u+2],E=c[u+3];if(h<=0){e[n+0]=p,e[n+1]=d,e[n+2]=x,e[n+3]=g;return}if(h>=1){e[n+0]=_,e[n+1]=y,e[n+2]=M,e[n+3]=E;return}if(g!==E||p!==_||d!==y||x!==M){let b=p*_+d*y+x*M+g*E;b<0&&(_=-_,y=-y,M=-M,E=-E,b=-b);let v=1-h;if(b<.9995){const L=Math.acos(b),D=Math.sin(L);v=Math.sin(v*L)/D,h=Math.sin(h*L)/D,p=p*v+_*h,d=d*v+y*h,x=x*v+M*h,g=g*v+E*h}else{p=p*v+_*h,d=d*v+y*h,x=x*v+M*h,g=g*v+E*h;const L=1/Math.sqrt(p*p+d*d+x*x+g*g);p*=L,d*=L,x*=L,g*=L}}e[n]=p,e[n+1]=d,e[n+2]=x,e[n+3]=g}static multiplyQuaternionsFlat(e,n,a,r,c,u){const h=a[r],p=a[r+1],d=a[r+2],x=a[r+3],g=c[u],_=c[u+1],y=c[u+2],M=c[u+3];return e[n]=h*M+x*g+p*y-d*_,e[n+1]=p*M+x*_+d*g-h*y,e[n+2]=d*M+x*y+h*_-p*g,e[n+3]=x*M-h*g-p*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,r){return this._x=e,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,r=e._y,c=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(a/2),x=h(r/2),g=h(c/2),_=p(a/2),y=p(r/2),M=p(c/2);switch(u){case"XYZ":this._x=_*x*g+d*y*M,this._y=d*y*g-_*x*M,this._z=d*x*M+_*y*g,this._w=d*x*g-_*y*M;break;case"YXZ":this._x=_*x*g+d*y*M,this._y=d*y*g-_*x*M,this._z=d*x*M-_*y*g,this._w=d*x*g+_*y*M;break;case"ZXY":this._x=_*x*g-d*y*M,this._y=d*y*g+_*x*M,this._z=d*x*M+_*y*g,this._w=d*x*g-_*y*M;break;case"ZYX":this._x=_*x*g-d*y*M,this._y=d*y*g+_*x*M,this._z=d*x*M-_*y*g,this._w=d*x*g+_*y*M;break;case"YZX":this._x=_*x*g+d*y*M,this._y=d*y*g+_*x*M,this._z=d*x*M-_*y*g,this._w=d*x*g-_*y*M;break;case"XZY":this._x=_*x*g-d*y*M,this._y=d*y*g-_*x*M,this._z=d*x*M+_*y*g,this._w=d*x*g+_*y*M;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,r=Math.sin(a);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],r=n[4],c=n[8],u=n[1],h=n[5],p=n[9],d=n[2],x=n[6],g=n[10],_=a+h+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(x-p)*y,this._y=(c-d)*y,this._z=(u-r)*y}else if(a>h&&a>g){const y=2*Math.sqrt(1+a-h-g);this._w=(x-p)/y,this._x=.25*y,this._y=(r+u)/y,this._z=(c+d)/y}else if(h>g){const y=2*Math.sqrt(1+h-a-g);this._w=(c-d)/y,this._x=(r+u)/y,this._y=.25*y,this._z=(p+x)/y}else{const y=2*Math.sqrt(1+g-a-h);this._w=(u-r)/y,this._x=(c+d)/y,this._y=(p+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,r=e._y,c=e._z,u=e._w,h=n._x,p=n._y,d=n._z,x=n._w;return this._x=a*x+u*h+r*d-c*p,this._y=r*x+u*p+c*h-a*d,this._z=c*x+u*d+a*p-r*h,this._w=u*x-a*h-r*p-c*d,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,r=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,r=-r,c=-c,u=-u,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),x=Math.sin(d);p=Math.sin(p*d)/x,n=Math.sin(n*d)/x,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(r*Math.sin(e),r*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,a=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*r,this.y=c[1]*n+c[4]*a+c[7]*r,this.z=c[2]*n+c[5]*a+c[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*r+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*r+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*r+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*r+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,r=this.z,c=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*r-h*a),x=2*(h*n-c*r),g=2*(c*a-u*n);return this.x=n+p*d+u*g-h*x,this.y=a+p*x+h*d-c*g,this.z=r+p*g+c*x-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,r=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*r,this.y=c[1]*n+c[5]*a+c[9]*r,this.z=c[2]*n+c[6]*a+c[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,r=e.y,c=e.z,u=n.x,h=n.y,p=n.z;return this.x=r*p-c*h,this.y=c*u-a*p,this.z=a*h-r*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(yt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,r=this.z-e.z;return n*n+a*a+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const r=Math.sin(n)*e;return this.x=r*Math.sin(a),this.y=Math.cos(n)*e,this.z=r*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new K,Bx=new hs;class ft{constructor(e,n,a,r,c,u,h,p,d){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d)}set(e,n,a,r,c,u,h,p,d){const x=this.elements;return x[0]=e,x[1]=r,x[2]=h,x[3]=n,x[4]=c,x[5]=p,x[6]=a,x[7]=u,x[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],d=a[1],x=a[4],g=a[7],_=a[2],y=a[5],M=a[8],E=r[0],b=r[3],v=r[6],L=r[1],D=r[4],O=r[7],H=r[2],N=r[5],P=r[8];return c[0]=u*E+h*L+p*H,c[3]=u*b+h*D+p*N,c[6]=u*v+h*O+p*P,c[1]=d*E+x*L+g*H,c[4]=d*b+x*D+g*N,c[7]=d*v+x*O+g*P,c[2]=_*E+y*L+M*H,c[5]=_*b+y*D+M*N,c[8]=_*v+y*O+M*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],x=e[8];return n*u*x-n*h*d-a*c*x+a*h*p+r*c*d-r*u*p}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],x=e[8],g=x*u-h*d,_=h*p-x*c,y=d*c-u*p,M=n*g+a*_+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(r*d-x*a)*E,e[2]=(h*a-r*u)*E,e[3]=_*E,e[4]=(x*n-r*p)*E,e[5]=(r*c-h*n)*E,e[6]=y*E,e[7]=(a*p-d*n)*E,e[8]=(u*n-a*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,r,c,u,h){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*h)+u+e,-r*d,r*p,-r*(-d*u+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Hh.makeScale(e,n)),this}rotate(e){return this.premultiply(Hh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hh=new ft,zx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const o={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(r,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Yt&&(r.r=Aa(r.r),r.g=Aa(r.g),r.b=Aa(r.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[c].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,c){return this.convert(r,this.workingColorSpace,c)},colorSpaceToWorking:function(r,c){return this.convert(r,c,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cs?pu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,c=this.workingColorSpace){return r.fromArray(this.spaces[c].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,c,u){return r.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,c){return Sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,c)},toWorkingColorSpace:function(r,c){return Sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Xn]:{primaries:e,whitePoint:a,transfer:pu,toXYZ:zx,fromXYZ:Fx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:a,transfer:Yt,toXYZ:zx,fromXYZ:Fx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),o}const Ct=Jb();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Tr;class $b{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Tr===void 0&&(Tr=yl("canvas")),Tr.width=e.width,Tr.height=e.height;const r=Tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),a=Tr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const r=a.getImageData(0,0,e.width,e.height),c=r.data;for(let u=0;u<c.length;u++)c[u]=Aa(c[u]/255)*255;return a.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Aa(n[a]/255)*255):n[a]=Aa(n[a]);return{data:n,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let u=0,h=r.length;u<h;u++)r[u].isDataTexture?c.push(Vh(r[u].image)):c.push(Vh(r[u]))}else c=Vh(r);a.url=c}return n||(e.images[this.uuid]=a),a}}function Vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?$b.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let tM=0;const Gh=new K;class An extends Jr{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,a=Gi,r=Gi,c=Vn,u=Ma,h=vi,p=Wi,d=An.DEFAULT_ANISOTROPY,x=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ui(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){Ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=j_;An.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,a=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,r){return this.x=e,this.y=n,this.z=a,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,r=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,r,c;const p=e.elements,d=p[0],x=p[4],g=p[8],_=p[1],y=p[5],M=p[9],E=p[2],b=p[6],v=p[10];if(Math.abs(x-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-b)<.01){if(Math.abs(x+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+b)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,O=(y+1)/2,H=(v+1)/2,N=(x+_)/4,P=(g+E)/4,$=(M+b)/4;return D>O&&D>H?D<.01?(a=0,r=.707106781,c=.707106781):(a=Math.sqrt(D),r=N/a,c=P/a):O>H?O<.01?(a=.707106781,r=0,c=.707106781):(r=Math.sqrt(O),a=N/r,c=$/r):H<.01?(a=.707106781,r=.707106781,c=0):(c=Math.sqrt(H),a=P/c,r=$/c),this.set(a,r,c,n),this}let L=Math.sqrt((b-M)*(b-M)+(g-E)*(g-E)+(_-x)*(_-x));return Math.abs(L)<.001&&(L=1),this.x=(b-M)/L,this.y=(g-E)/L,this.z=(_-x)/L,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(yt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nM extends Jr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:a.depth},c=new An(r);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let r=0,c=this.textures.length;r<c;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Tp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends nM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class rv extends An{constructor(e=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iM extends An{constructor(e=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(c,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ic.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ic.copy(a.boundingBox)),Ic.applyMatrix4(e.matrixWorld),this.union(Ic)}const r=e.children;for(let c=0,u=r.length;c<u;c++)this.expandByObject(r[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Pc.subVectors(this.max,Jo),Er.subVectors(e.a,Jo),Ar.subVectors(e.b,Jo),Rr.subVectors(e.c,Jo),ns.subVectors(Ar,Er),is.subVectors(Rr,Ar),Us.subVectors(Er,Rr);let n=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Us.z,Us.y,ns.z,0,-ns.x,is.z,0,-is.x,Us.z,0,-Us.x,-ns.y,ns.x,0,-is.y,is.x,0,-Us.y,Us.x,0];return!kh(n,Er,Ar,Rr,Pc)||(n=[1,0,0,0,1,0,0,0,1],!kh(n,Er,Ar,Rr,Pc))?!1:(Bc.crossVectors(ns,is),n=[Bc.x,Bc.y,Bc.z],kh(n,Er,Ar,Rr,Pc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new K,new K,new K,new K,new K,new K,new K,new K],Ei=new K,Ic=new Da,Er=new K,Ar=new K,Rr=new K,ns=new K,is=new K,Us=new K,Jo=new K,Pc=new K,Bc=new K,Ls=new K;function kh(o,e,n,a,r){for(let c=0,u=o.length-3;c<=u;c+=3){Ls.fromArray(o,c);const h=r.x*Math.abs(Ls.x)+r.y*Math.abs(Ls.y)+r.z*Math.abs(Ls.z),p=e.dot(Ls),d=n.dot(Ls),x=a.dot(Ls);if(Math.max(-Math.max(p,d,x),Math.min(p,d,x))>h)return!1}return!0}const aM=new Da,$o=new K,Xh=new K;class Yi{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):aM.setFromPoints(e).getCenter(a);let r=0;for(let c=0,u=e.length;c<u;c++)r=Math.max(r,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector($o,r/a),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Xh)),this.expandByPoint($o.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ga=new K,Wh=new K,zc=new K,as=new K,qh=new K,Fc=new K,Yh=new K;class yu{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ga.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,n),ga.distanceToSquared(e))}distanceSqToSegment(e,n,a,r){Wh.copy(e).add(n).multiplyScalar(.5),zc.copy(n).sub(e).normalize(),as.copy(this.origin).sub(Wh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(zc),h=as.dot(this.direction),p=-as.dot(zc),d=as.lengthSq(),x=Math.abs(1-u*u);let g,_,y,M;if(x>0)if(g=u*p-h,_=u*h-p,M=c*x,g>=0)if(_>=-M)if(_<=M){const E=1/x;g*=E,_*=E,y=g*(g+u*_+2*h)+_*(u*g+_+2*p)+d}else _=c,g=Math.max(0,-(u*_+h)),y=-g*g+_*(_+2*p)+d;else _=-c,g=Math.max(0,-(u*_+h)),y=-g*g+_*(_+2*p)+d;else _<=-M?(g=Math.max(0,-(-u*c+h)),_=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+d):_<=M?(g=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+d):(g=Math.max(0,-(u*c+h)),_=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+_*(_+2*p)+d);else _=u>0?-c:c,g=Math.max(0,-(u*_+h)),y=-g*g+_*(_+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Wh).addScaledVector(zc,_),y}intersectSphere(e,n){ga.subVectors(e.center,this.origin);const a=ga.dot(this.direction),r=ga.dot(ga)-a*a,c=e.radius*e.radius;if(r>c)return null;const u=Math.sqrt(c-r),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,r,c,u,h,p;const d=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(a=(e.min.x-_.x)*d,r=(e.max.x-_.x)*d):(a=(e.max.x-_.x)*d,r=(e.min.x-_.x)*d),x>=0?(c=(e.min.y-_.y)*x,u=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,u=(e.min.y-_.y)*x),a>u||c>r||((c>a||isNaN(a))&&(a=c),(u<r||isNaN(r))&&(r=u),g>=0?(h=(e.min.z-_.z)*g,p=(e.max.z-_.z)*g):(h=(e.max.z-_.z)*g,p=(e.min.z-_.z)*g),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,n,a,r,c){qh.subVectors(n,e),Fc.subVectors(a,e),Yh.crossVectors(qh,Fc);let u=this.direction.dot(Yh),h;if(u>0){if(r)return null;h=1}else if(u<0)h=-1,u=-u;else return null;as.subVectors(this.origin,e);const p=h*this.direction.dot(Fc.crossVectors(as,Fc));if(p<0)return null;const d=h*this.direction.dot(qh.cross(as));if(d<0||p+d>u)return null;const x=-h*as.dot(Yh);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,a,r,c,u,h,p,d,x,g,_,y,M,E,b){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,r,c,u,h,p,d,x,g,_,y,M,E,b)}set(e,n,a,r,c,u,h,p,d,x,g,_,y,M,E,b){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=r,v[1]=c,v[5]=u,v[9]=h,v[13]=p,v[2]=d,v[6]=x,v[10]=g,v[14]=_,v[3]=y,v[7]=M,v[11]=E,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),c=1/Cr.setFromMatrixColumn(e,1).length(),u=1/Cr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,r=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=u*x,y=u*g,M=h*x,E=h*g;n[0]=p*x,n[4]=-p*g,n[8]=d,n[1]=y+M*d,n[5]=_-E*d,n[9]=-h*p,n[2]=E-_*d,n[6]=M+y*d,n[10]=u*p}else if(e.order==="YXZ"){const _=p*x,y=p*g,M=d*x,E=d*g;n[0]=_+E*h,n[4]=M*h-y,n[8]=u*d,n[1]=u*g,n[5]=u*x,n[9]=-h,n[2]=y*h-M,n[6]=E+_*h,n[10]=u*p}else if(e.order==="ZXY"){const _=p*x,y=p*g,M=d*x,E=d*g;n[0]=_-E*h,n[4]=-u*g,n[8]=M+y*h,n[1]=y+M*h,n[5]=u*x,n[9]=E-_*h,n[2]=-u*d,n[6]=h,n[10]=u*p}else if(e.order==="ZYX"){const _=u*x,y=u*g,M=h*x,E=h*g;n[0]=p*x,n[4]=M*d-y,n[8]=_*d+E,n[1]=p*g,n[5]=E*d+_,n[9]=y*d-M,n[2]=-d,n[6]=h*p,n[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*d,M=h*p,E=h*d;n[0]=p*x,n[4]=E-_*g,n[8]=M*g+y,n[1]=g,n[5]=u*x,n[9]=-h*x,n[2]=-d*x,n[6]=y*g+M,n[10]=_-E*g}else if(e.order==="XZY"){const _=u*p,y=u*d,M=h*p,E=h*d;n[0]=p*x,n[4]=-g,n[8]=d*x,n[1]=_*g+E,n[5]=u*x,n[9]=y*g-M,n[2]=M*g-y,n[6]=h*x,n[10]=E*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,rM)}lookAt(e,n,a){const r=this.elements;return oi.subVectors(e,n),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ss.crossVectors(a,oi),ss.lengthSq()===0&&(Math.abs(a.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ss.crossVectors(a,oi)),ss.normalize(),Hc.crossVectors(oi,ss),r[0]=ss.x,r[4]=Hc.x,r[8]=oi.x,r[1]=ss.y,r[5]=Hc.y,r[9]=oi.y,r[2]=ss.z,r[6]=Hc.z,r[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,r=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],d=a[12],x=a[1],g=a[5],_=a[9],y=a[13],M=a[2],E=a[6],b=a[10],v=a[14],L=a[3],D=a[7],O=a[11],H=a[15],N=r[0],P=r[4],$=r[8],w=r[12],C=r[1],k=r[5],ne=r[9],le=r[13],me=r[2],fe=r[6],z=r[10],j=r[14],Y=r[3],xe=r[7],_e=r[11],I=r[15];return c[0]=u*N+h*C+p*me+d*Y,c[4]=u*P+h*k+p*fe+d*xe,c[8]=u*$+h*ne+p*z+d*_e,c[12]=u*w+h*le+p*j+d*I,c[1]=x*N+g*C+_*me+y*Y,c[5]=x*P+g*k+_*fe+y*xe,c[9]=x*$+g*ne+_*z+y*_e,c[13]=x*w+g*le+_*j+y*I,c[2]=M*N+E*C+b*me+v*Y,c[6]=M*P+E*k+b*fe+v*xe,c[10]=M*$+E*ne+b*z+v*_e,c[14]=M*w+E*le+b*j+v*I,c[3]=L*N+D*C+O*me+H*Y,c[7]=L*P+D*k+O*fe+H*xe,c[11]=L*$+D*ne+O*z+H*_e,c[15]=L*w+D*le+O*j+H*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],r=e[8],c=e[12],u=e[1],h=e[5],p=e[9],d=e[13],x=e[2],g=e[6],_=e[10],y=e[14],M=e[3],E=e[7],b=e[11],v=e[15];return M*(+c*p*g-r*d*g-c*h*_+a*d*_+r*h*y-a*p*y)+E*(+n*p*y-n*d*_+c*u*_-r*u*y+r*d*x-c*p*x)+b*(+n*d*g-n*h*y-c*u*g+a*u*y+c*h*x-a*d*x)+v*(-r*h*x-n*p*g+n*h*_+r*u*g-a*u*_+a*p*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],r=e[2],c=e[3],u=e[4],h=e[5],p=e[6],d=e[7],x=e[8],g=e[9],_=e[10],y=e[11],M=e[12],E=e[13],b=e[14],v=e[15],L=g*b*d-E*_*d+E*p*y-h*b*y-g*p*v+h*_*v,D=M*_*d-x*b*d-M*p*y+u*b*y+x*p*v-u*_*v,O=x*E*d-M*g*d+M*h*y-u*E*y-x*h*v+u*g*v,H=M*g*p-x*E*p-M*h*_+u*E*_+x*h*b-u*g*b,N=n*L+a*D+r*O+c*H;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/N;return e[0]=L*P,e[1]=(E*_*c-g*b*c-E*r*y+a*b*y+g*r*v-a*_*v)*P,e[2]=(h*b*c-E*p*c+E*r*d-a*b*d-h*r*v+a*p*v)*P,e[3]=(g*p*c-h*_*c-g*r*d+a*_*d+h*r*y-a*p*y)*P,e[4]=D*P,e[5]=(x*b*c-M*_*c+M*r*y-n*b*y-x*r*v+n*_*v)*P,e[6]=(M*p*c-u*b*c-M*r*d+n*b*d+u*r*v-n*p*v)*P,e[7]=(u*_*c-x*p*c+x*r*d-n*_*d-u*r*y+n*p*y)*P,e[8]=O*P,e[9]=(M*g*c-x*E*c-M*a*y+n*E*y+x*a*v-n*g*v)*P,e[10]=(u*E*c-M*h*c+M*a*d-n*E*d-u*a*v+n*h*v)*P,e[11]=(x*h*c-u*g*c-x*a*d+n*g*d+u*a*y-n*h*y)*P,e[12]=H*P,e[13]=(x*E*r-M*g*r+M*a*_-n*E*_-x*a*b+n*g*b)*P,e[14]=(M*h*r-u*E*r-M*a*p+n*E*p+u*a*b-n*h*b)*P,e[15]=(u*g*r-x*h*r+x*a*p-n*g*p-u*a*_+n*h*_)*P,this}scale(e){const n=this.elements,a=e.x,r=e.y,c=e.z;return n[0]*=a,n[4]*=r,n[8]*=c,n[1]*=a,n[5]*=r,n[9]*=c,n[2]*=a,n[6]*=r,n[10]*=c,n[3]*=a,n[7]*=r,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),r=Math.sin(n),c=1-a,u=e.x,h=e.y,p=e.z,d=c*u,x=c*h;return this.set(d*u+a,d*h-r*p,d*p+r*h,0,d*h+r*p,x*h+a,x*p-r*u,0,d*p-r*h,x*p+r*u,c*p*p+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,r,c,u){return this.set(1,a,c,0,e,1,u,0,n,r,1,0,0,0,0,1),this}compose(e,n,a){const r=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,d=c+c,x=u+u,g=h+h,_=c*d,y=c*x,M=c*g,E=u*x,b=u*g,v=h*g,L=p*d,D=p*x,O=p*g,H=a.x,N=a.y,P=a.z;return r[0]=(1-(E+v))*H,r[1]=(y+O)*H,r[2]=(M-D)*H,r[3]=0,r[4]=(y-O)*N,r[5]=(1-(_+v))*N,r[6]=(b+L)*N,r[7]=0,r[8]=(M+D)*P,r[9]=(b-L)*P,r[10]=(1-(_+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,a){const r=this.elements;let c=Cr.set(r[0],r[1],r[2]).length();const u=Cr.set(r[4],r[5],r[6]).length(),h=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),e.x=r[12],e.y=r[13],e.z=r[14],Ai.copy(this);const d=1/c,x=1/u,g=1/h;return Ai.elements[0]*=d,Ai.elements[1]*=d,Ai.elements[2]*=d,Ai.elements[4]*=x,Ai.elements[5]*=x,Ai.elements[6]*=x,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,n.setFromRotationMatrix(Ai),a.x=c,a.y=u,a.z=h,this}makePerspective(e,n,a,r,c,u,h=ki,p=!1){const d=this.elements,x=2*c/(n-e),g=2*c/(a-r),_=(n+e)/(n-e),y=(a+r)/(a-r);let M,E;if(p)M=c/(u-c),E=u*c/(u-c);else if(h===ki)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===mu)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=x,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,r,c,u,h=ki,p=!1){const d=this.elements,x=2/(n-e),g=2/(a-r),_=-(n+e)/(n-e),y=-(a+r)/(a-r);let M,E;if(p)M=1/(u-c),E=u/(u-c);else if(h===ki)M=-2/(u-c),E=-(u+c)/(u-c);else if(h===mu)M=-1/(u-c),E=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=x,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Cr=new K,Ai=new mt,sM=new K(0,0,0),rM=new K(1,1,1),ss=new K,Hc=new K,oi=new K,Hx=new mt,Vx=new hs;class qi{constructor(e=0,n=0,a=0,r=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,r=this._order){return this._x=e,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const r=e.elements,c=r[0],u=r[4],h=r[8],p=r[1],d=r[5],x=r[9],g=r[2],_=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,d),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Hx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hx,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oM=0;const Gx=new K,wr=new hs,xa=new mt,Vc=new K,el=new K,lM=new K,cM=new hs,kx=new K(1,0,0),Xx=new K(0,1,0),Wx=new K(0,0,1),qx={type:"added"},uM={type:"removed"},Dr={type:"childadded",child:null},jh={type:"childremoved",child:null};class nn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new K,n=new qi,a=new hs,r=new K(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new ft}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(kx,e)}rotateY(e){return this.rotateOnAxis(Xx,e)}rotateZ(e){return this.rotateOnAxis(Wx,e)}translateOnAxis(e,n){return Gx.copy(e).applyQuaternion(this.quaternion),this.position.add(Gx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kx,e)}translateY(e){return this.translateOnAxis(Xx,e)}translateZ(e){return this.translateOnAxis(Wx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Vc.copy(e):Vc.set(e,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(el,Vc,this.up):xa.lookAt(Vc,el,this.up),this.quaternion.setFromRotationMatrix(xa),r&&(xa.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(xa),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qx),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uM),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qx),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let c=0,u=r.length;c<u;c++)r[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,x=p.length;d<x;d++){const g=p[d];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(c(e.materials,this.material[p]));r.material=h}else r.material=c(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(c(e.animations,p))}}if(n){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),x=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),x.length>0&&(a.images=x),g.length>0&&(a.shapes=g),_.length>0&&(a.skeletons=_),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(h){const p=[];for(const d in h){const x=h[d];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const r=e.children[a];this.add(r.clone())}return this}}nn.DEFAULT_UP=new K(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new K,_a=new K,Kh=new K,va=new K,Ur=new K,Lr=new K,Yx=new K,Zh=new K,Qh=new K,Jh=new K,$h=new Pt,ed=new Pt,td=new Pt;class wi{constructor(e=new K,n=new K,a=new K){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,r){r.subVectors(a,n),Ri.subVectors(e,n),r.cross(Ri);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(e,n,a,r,c){Ri.subVectors(r,n),_a.subVectors(a,n),Kh.subVectors(e,n);const u=Ri.dot(Ri),h=Ri.dot(_a),p=Ri.dot(Kh),d=_a.dot(_a),x=_a.dot(Kh),g=u*d-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(d*p-h*x)*_,M=(u*x-h*p)*_;return c.set(1-y-M,M,y)}static containsPoint(e,n,a,r){return this.getBarycoord(e,n,a,r,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,n,a,r,c,u,h,p){return this.getBarycoord(e,n,a,r,va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,va.x),p.addScaledVector(u,va.y),p.addScaledVector(h,va.z),p)}static getInterpolatedAttribute(e,n,a,r,c,u){return $h.setScalar(0),ed.setScalar(0),td.setScalar(0),$h.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,a),td.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector($h,c.x),u.addScaledVector(ed,c.y),u.addScaledVector(td,c.z),u}static isFrontFacing(e,n,a,r){return Ri.subVectors(a,n),_a.subVectors(e,n),Ri.cross(_a).dot(r)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,r){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,a,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ri.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,r,c){return wi.getInterpolation(e,this.a,this.b,this.c,n,a,r,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,r=this.b,c=this.c;let u,h;Ur.subVectors(r,a),Lr.subVectors(c,a),Zh.subVectors(e,a);const p=Ur.dot(Zh),d=Lr.dot(Zh);if(p<=0&&d<=0)return n.copy(a);Qh.subVectors(e,r);const x=Ur.dot(Qh),g=Lr.dot(Qh);if(x>=0&&g<=x)return n.copy(r);const _=p*g-x*d;if(_<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(a).addScaledVector(Ur,u);Jh.subVectors(e,c);const y=Ur.dot(Jh),M=Lr.dot(Jh);if(M>=0&&y<=M)return n.copy(c);const E=y*d-p*M;if(E<=0&&d>=0&&M<=0)return h=d/(d-M),n.copy(a).addScaledVector(Lr,h);const b=x*M-y*g;if(b<=0&&g-x>=0&&y-M>=0)return Yx.subVectors(c,r),h=(g-x)/(g-x+(y-M)),n.copy(r).addScaledVector(Yx,h);const v=1/(b+E+_);return u=E*v,h=_*v,n.copy(a).addScaledVector(Ur,u).addScaledVector(Lr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function nd(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class rt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,a,r=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=a,Ct.colorSpaceToWorking(this,r),this}setHSL(e,n,a,r=Ct.workingColorSpace){if(e=Mp(e,1),n=yt(n,0,1),a=yt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=nd(u,c,e+1/3),this.g=nd(u,c,e),this.b=nd(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,r),this}setStyle(e,n=Ln){function a(c){c!==void 0&&parseFloat(c)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=r[1],h=r[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=r[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const a=lv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return Ct.workingToColorSpace(Pn.copy(this),e),Math.round(yt(Pn.r*255,0,255))*65536+Math.round(yt(Pn.g*255,0,255))*256+Math.round(yt(Pn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(Pn.copy(this),n);const a=Pn.r,r=Pn.g,c=Pn.b,u=Math.max(a,r,c),h=Math.min(a,r,c);let p,d;const x=(h+u)/2;if(h===u)p=0,d=0;else{const g=u-h;switch(d=x<=.5?g/(u+h):g/(2-u-h),u){case a:p=(r-c)/g+(r<c?6:0);break;case r:p=(c-a)/g+2;break;case c:p=(a-r)/g+4;break}p/=6}return e.h=p,e.s=d,e.l=x,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Ln){Ct.workingToColorSpace(Pn.copy(this),e);const n=Pn.r,a=Pn.g,r=Pn.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(e,n,a){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+n,rs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(rs),e.getHSL(Gc);const a=hl(rs.h,Gc.h,n),r=hl(rs.s,Gc.s,n),c=hl(rs.l,Gc.l,n);return this.setHSL(a,r,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,r=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*r,this.g=c[1]*n+c[4]*a+c[7]*r,this.b=c[2]*n+c[5]*a+c[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new rt;rt.NAMES=lv;let fM=0;class Xi extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Fr,this.side=Ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=bd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){Ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(a.blending=this.blending),this.side!==Ca&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Sd&&(a.blendSrc=this.blendSrc),this.blendDst!==bd&&(a.blendDst=this.blendDst),this.blendEquation!==Fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=r(e.textures),u=r(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let c=0;c!==r;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vs extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new K,kc=new Rt;let hM=0;class kn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=op,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[e+r]=n.array[a+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)kc.fromBufferAttribute(this,n),kc.applyMatrix3(e),this.setXY(n,kc.x,kc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix3(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ci(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Vt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ci(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ci(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ci(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ci(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array),c=Vt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=r,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==op&&(e.usage=this.usage),e}}class cv extends kn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class uv extends kn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ra extends kn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let dM=0;const xi=new mt,id=new nn,Nr=new K,li=new Da,tl=new Da,En=new K;class Li extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?uv:cv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ft().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,a){return xi.makeTranslation(e,n,a),this.applyMatrix4(xi),this}scale(e,n,a){return xi.makeScale(e,n,a),this.applyMatrix4(xi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,c=e.length;r<c;r++){const u=e[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ra(a,3))}else{const a=Math.min(e.length,n.count);for(let r=0;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,r=n.length;a<r;a++){const c=n[a];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const a=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(li.min,tl.min),li.expandByPoint(En),En.addVectors(li.max,tl.max),li.expandByPoint(En)):(li.expandByPoint(tl.min),li.expandByPoint(tl.max))}li.getCenter(a);let r=0;for(let c=0,u=e.count;c<u;c++)En.fromBufferAttribute(e,c),r=Math.max(r,a.distanceToSquared(En));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let d=0,x=h.count;d<x;d++)En.fromBufferAttribute(h,d),p&&(Nr.fromBufferAttribute(e,d),En.add(Nr)),r=Math.max(r,a.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let $=0;$<a.count;$++)h[$]=new K,p[$]=new K;const d=new K,x=new K,g=new K,_=new Rt,y=new Rt,M=new Rt,E=new K,b=new K;function v($,w,C){d.fromBufferAttribute(a,$),x.fromBufferAttribute(a,w),g.fromBufferAttribute(a,C),_.fromBufferAttribute(c,$),y.fromBufferAttribute(c,w),M.fromBufferAttribute(c,C),x.sub(d),g.sub(d),y.sub(_),M.sub(_);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(E.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(k),b.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(k),h[$].add(E),h[w].add(E),h[C].add(E),p[$].add(b),p[w].add(b),p[C].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let $=0,w=L.length;$<w;++$){const C=L[$],k=C.start,ne=C.count;for(let le=k,me=k+ne;le<me;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const D=new K,O=new K,H=new K,N=new K;function P($){H.fromBufferAttribute(r,$),N.copy(H);const w=h[$];D.copy(w),D.sub(H.multiplyScalar(H.dot(w))).normalize(),O.crossVectors(N,w);const k=O.dot(p[$])<0?-1:1;u.setXYZW($,D.x,D.y,D.z,k)}for(let $=0,w=L.length;$<w;++$){const C=L[$],k=C.start,ne=C.count;for(let le=k,me=k+ne;le<me;le+=3)P(e.getX(le+0)),P(e.getX(le+1)),P(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,y=a.count;_<y;_++)a.setXYZ(_,0,0,0);const r=new K,c=new K,u=new K,h=new K,p=new K,d=new K,x=new K,g=new K;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),b=e.getX(_+2);r.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),x.subVectors(u,c),g.subVectors(r,c),x.cross(g),h.fromBufferAttribute(a,M),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,b),h.add(x),p.add(x),d.add(x),a.setXYZ(M,h.x,h.y,h.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(b,d.x,d.y,d.z)}else for(let _=0,y=n.count;_<y;_+=3)r.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),x.subVectors(u,c),g.subVectors(r,c),x.cross(g),a.setXYZ(_+0,x.x,x.y,x.z),a.setXYZ(_+1,x.x,x.y,x.z),a.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)En.fromBufferAttribute(e,n),En.normalize(),e.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function e(h,p){const d=h.array,x=h.itemSize,g=h.normalized,_=new d.constructor(p.length*x);let y=0,M=0;for(let E=0,b=p.length;E<b;E++){h.isInterleavedBufferAttribute?y=p[E]*h.data.stride+h.offset:y=p[E]*x;for(let v=0;v<x;v++)_[M++]=d[y++]}return new kn(_,x,g)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Li,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=e(p,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const p=[],d=c[h];for(let x=0,g=d.length;x<g;x++){const _=d[x],y=e(_,a);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];e.data.attributes[p]=d.toJSON(e.data)}const r={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],x=[];for(let g=0,_=d.length;g<_;g++){const y=d[g];x.push(y.toJSON(e.data))}x.length>0&&(r[p]=x,c=!0)}c&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const r=e.attributes;for(const d in r){const x=r[d];this.setAttribute(d,x.clone(n))}const c=e.morphAttributes;for(const d in c){const x=[],g=c[d];for(let _=0,y=g.length;_<y;_++)x.push(g[_].clone(n));this.morphAttributes[d]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,x=u.length;d<x;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jx=new mt,Ns=new yu,Xc=new Yi,Kx=new K,Wc=new K,qc=new K,Yc=new K,ad=new K,jc=new K,Zx=new K,Kc=new K;class yi extends nn{constructor(e=new Li,n=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,r=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,e);const h=this.morphTargetInfluences;if(c&&h){jc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const x=h[p],g=c[p];x!==0&&(ad.fromBufferAttribute(g,e),u?jc.addScaledVector(ad,x):jc.addScaledVector(ad.sub(n),x))}n.add(jc)}return n}raycast(e,n){const a=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Xc.copy(a.boundingSphere),Xc.applyMatrix4(c),Ns.copy(e.ray).recast(e.near),!(Xc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Xc,Kx)===null||Ns.origin.distanceToSquared(Kx)>(e.far-e.near)**2))&&(jx.copy(c).invert(),Ns.copy(e.ray).applyMatrix4(jx),!(a.boundingBox!==null&&Ns.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ns)))}_computeIntersections(e,n,a){let r;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,d=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const b=_[M],v=u[b.materialIndex],L=Math.max(b.start,y.start),D=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let O=L,H=D;O<H;O+=3){const N=h.getX(O),P=h.getX(O+1),$=h.getX(O+2);r=Zc(this,v,e,a,d,x,g,N,P,$),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=b.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let b=M,v=E;b<v;b+=3){const L=h.getX(b),D=h.getX(b+1),O=h.getX(b+2);r=Zc(this,u,e,a,d,x,g,L,D,O),r&&(r.faceIndex=Math.floor(b/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const b=_[M],v=u[b.materialIndex],L=Math.max(b.start,y.start),D=Math.min(p.count,Math.min(b.start+b.count,y.start+y.count));for(let O=L,H=D;O<H;O+=3){const N=O,P=O+1,$=O+2;r=Zc(this,v,e,a,d,x,g,N,P,$),r&&(r.faceIndex=Math.floor(O/3),r.face.materialIndex=b.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),E=Math.min(p.count,y.start+y.count);for(let b=M,v=E;b<v;b+=3){const L=b,D=b+1,O=b+2;r=Zc(this,u,e,a,d,x,g,L,D,O),r&&(r.faceIndex=Math.floor(b/3),n.push(r))}}}}function pM(o,e,n,a,r,c,u,h){let p;if(e.side===Qn?p=a.intersectTriangle(u,c,r,!0,h):p=a.intersectTriangle(r,c,u,e.side===Ca,h),p===null)return null;Kc.copy(h),Kc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Kc);return d<n.near||d>n.far?null:{distance:d,point:Kc.clone(),object:o}}function Zc(o,e,n,a,r,c,u,h,p,d){o.getVertexPosition(h,Wc),o.getVertexPosition(p,qc),o.getVertexPosition(d,Yc);const x=pM(o,e,n,a,Wc,qc,Yc,Zx);if(x){const g=new K;wi.getBarycoord(Zx,Wc,qc,Yc,g),r&&(x.uv=wi.getInterpolatedAttribute(r,h,p,d,g,new Rt)),c&&(x.uv1=wi.getInterpolatedAttribute(c,h,p,d,g,new Rt)),u&&(x.normal=wi.getInterpolatedAttribute(u,h,p,d,g,new K),x.normal.dot(a.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new K,materialIndex:0};wi.getNormal(Wc,qc,Yc,_.normal),x.face=_,x.barycoord=g}return x}class bl extends Li{constructor(e=1,n=1,a=1,r=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:r,heightSegments:c,depthSegments:u};const h=this;r=Math.floor(r),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],x=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,r,u,2),M("x","z","y",1,-1,e,a,-n,r,u,3),M("x","y","z",1,-1,e,n,a,r,c,4),M("x","y","z",-1,-1,e,n,-a,r,c,5),this.setIndex(p),this.setAttribute("position",new Ra(d,3)),this.setAttribute("normal",new Ra(x,3)),this.setAttribute("uv",new Ra(g,2));function M(E,b,v,L,D,O,H,N,P,$,w){const C=O/P,k=H/$,ne=O/2,le=H/2,me=N/2,fe=P+1,z=$+1;let j=0,Y=0;const xe=new K;for(let _e=0;_e<z;_e++){const I=_e*k-le;for(let se=0;se<fe;se++){const Se=se*C-ne;xe[E]=Se*L,xe[b]=I*D,xe[v]=me,d.push(xe.x,xe.y,xe.z),xe[E]=0,xe[b]=0,xe[v]=N>0?1:-1,x.push(xe.x,xe.y,xe.z),g.push(se/P),g.push(1-_e/$),j+=1}}for(let _e=0;_e<$;_e++)for(let I=0;I<P;I++){const se=_+I+fe*_e,Se=_+I+fe*(_e+1),Te=_+(I+1)+fe*(_e+1),Oe=_+(I+1)+fe*_e;p.push(se,Se,Oe),p.push(Se,Te,Oe),Y+=6}h.addGroup(y,Y,w),y+=Y,_+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yr(o){const e={};for(const n in o){e[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=r.clone():Array.isArray(r)?e[n][a]=r.slice():e[n][a]=r}}return e}function Fn(o){const e={};for(let n=0;n<o.length;n++){const a=Yr(o[n]);for(const r in a)e[r]=a[r]}return e}function mM(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function fv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const gM={clone:Yr,merge:Fn};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wa extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=mM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class hv extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new K,Qx=new Rt,Jx=new Rt;class Hn extends hv{constructor(e=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,n){return this.getViewBounds(e,Qx,Jx),n.subVectors(Jx,Qx)}setViewOffset(e,n,a,r,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fl*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,c=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*r/p,n-=u.offsetY*a/d,r*=u.width/p,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,Ir=1;class vM extends nn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Or,Ir,e,n);r.layers=this.layers,this.add(r);const c=new Hn(Or,Ir,e,n);c.layers=this.layers,this.add(c);const u=new Hn(Or,Ir,e,n);u.layers=this.layers,this.add(u);const h=new Hn(Or,Ir,e,n);h.layers=this.layers,this.add(h);const p=new Hn(Or,Ir,e,n);p.layers=this.layers,this.add(p);const d=new Hn(Or,Ir,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,r,c,u,h,p]=n;for(const d of n)this.remove(d);if(e===ki)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===mu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,d,x]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,r),e.render(n,c),e.setRenderTarget(a,1,r),e.render(n,u),e.setRenderTarget(a,2,r),e.render(n,h),e.setRenderTarget(a,3,r),e.render(n,p),e.setRenderTarget(a,4,r),e.render(n,d),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,r),e.render(n,x),e.setRenderTarget(g,_,y),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class dv extends An{constructor(e=[],n=kr,a,r,c,u,h,p,d,x){super(e,n,a,r,c,u,h,p,d,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yM extends Xs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},r=[a,a,a,a,a,a];this.texture=new dv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bl(5,5,5),c=new wa({name:"CubemapFromEquirect",uniforms:Yr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:Ea});c.uniforms.tEquirect.value=n;const u=new yi(r,c),h=n.minFilter;return n.minFilter===Ma&&(n.minFilter=Vn),new vM(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,r=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,r);e.setRenderTarget(c)}}class Gs extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let r=null,c=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const E of e.hand.values()){const b=n.getJointPose(E,a),v=this._getHandJoint(d,E);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const x=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=x.position.distanceTo(g.position),y=.02,M=.005;d.inputState.pinching&&_>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(r=n.getPose(e.targetRaySpace,a),r===null&&c!==null&&(r=c),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return h!==null&&(h.visible=r!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Gs;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class bM extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class MM{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=op,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let r=0,c=this.stride;r<c;r++)this.array[e+r]=n.array[a+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new K;class Ep{constructor(e,n,a,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.applyMatrix4(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.applyNormalMatrix(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)zn.fromBufferAttribute(this,n),zn.transformDirection(e),this.setXYZ(n,zn.x,zn.y,zn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Ci(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Vt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ci(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ci(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ci(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ci(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this}setXYZW(e,n,a,r,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Vt(n,this.array),a=Vt(a,this.array),r=Vt(r,this.array),c=Vt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=r,this.data.array[e+3]=c,this}clone(e){if(e===void 0){gu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return new kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ep(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){gu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const r=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[r+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $x=new K,e_=new Pt,t_=new Pt,TM=new K,n_=new mt,Qc=new K,rd=new Yi,i_=new mt,od=new yu;class EM extends yi{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wx,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Da),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Qc),this.boundingBox.expandByPoint(Qc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let a=0;a<n.count;a++)this.getVertexPosition(a,Qc),this.boundingSphere.expandByPoint(Qc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const a=this.material,r=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rd.copy(this.boundingSphere),rd.applyMatrix4(r),e.ray.intersectsSphere(rd)!==!1&&(i_.copy(r).invert(),od.copy(e.ray).applyMatrix4(i_),!(this.boundingBox!==null&&od.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,od)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,n=this.geometry.attributes.skinWeight;for(let a=0,r=n.count;a<r;a++){e.fromBufferAttribute(n,a);const c=1/e.manhattanLength();c!==1/0?e.multiplyScalar(c):e.set(1,0,0,0),n.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wx?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yb?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const a=this.skeleton,r=this.geometry;e_.fromBufferAttribute(r.attributes.skinIndex,e),t_.fromBufferAttribute(r.attributes.skinWeight,e),$x.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let c=0;c<4;c++){const u=t_.getComponent(c);if(u!==0){const h=e_.getComponent(c);n_.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),n.addScaledVector(TM.copy($x).applyMatrix4(n_),u)}}return n.applyMatrix4(this.bindMatrixInverse)}}class pv extends nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ap extends An{constructor(e=null,n=1,a=1,r,c,u,h,p,d=Gn,x=Gn,g,_){super(null,u,h,p,d,x,r,c,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const a_=new mt,AM=new mt;class Rp{constructor(e=[],n=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,r=this.bones.length;a<r;a++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const a=new mt;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,n=this.boneInverses,a=this.boneMatrices,r=this.boneTexture;for(let c=0,u=e.length;c<u;c++){const h=e[c]?e[c].matrixWorld:AM;a_.multiplyMatrices(h,n[c]),a_.toArray(a,c*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Rp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const a=new Ap(n,e,e,vi,Di);return a.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=a,this}getBoneByName(e){for(let n=0,a=this.bones.length;n<a;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let a=0,r=e.bones.length;a<r;a++){const c=e.bones[a];let u=n[c];u===void 0&&(Ze("Skeleton: No bone found with UUID:",c),u=new pv),this.bones.push(u),this.boneInverses.push(new mt().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,a=this.boneInverses;for(let r=0,c=n.length;r<c;r++){const u=n[r];e.bones.push(u.uuid);const h=a[r];e.boneInverses.push(h.toArray())}return e}}class lp extends kn{constructor(e,n,a,r=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new mt,s_=new mt,Jc=[],r_=new Da,RM=new mt,nl=new yi,il=new Yi;class CM extends yi{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new lp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<a;r++)this.setMatrixAt(r,RM)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Da),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Pr),r_.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(r_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Pr),il.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(il)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,r=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=r[u+h]}raycast(e,n){const a=this.matrixWorld,r=this.count;if(nl.geometry=this.geometry,nl.material=this.material,nl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),il.copy(this.boundingSphere),il.applyMatrix4(a),e.ray.intersectsSphere(il)!==!1))for(let c=0;c<r;c++){this.getMatrixAt(c,Pr),s_.multiplyMatrices(a,Pr),nl.matrixWorld=s_,nl.raycast(e,Jc);for(let u=0,h=Jc.length;u<h;u++){const p=Jc[u];p.instanceId=c,p.object=this,n.push(p)}Jc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new lp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const a=n.morphTargetInfluences,r=a.length+1;this.morphTexture===null&&(this.morphTexture=new Ap(new Float32Array(r*this.count),r,this.count,_p,Di));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,p=r*e;c[p]=h,c.set(a,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ld=new K,wM=new K,DM=new ft;class zs{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,r){return this.normal.set(e,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const r=ld.subVectors(a,n).cross(wM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(ld),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||DM.getNormalMatrix(e),r=this.coplanarPoint(ld).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Yi,UM=new Rt(.5,.5),$c=new K;class Cp{constructor(e=new zs,n=new zs,a=new zs,r=new zs,c=new zs,u=new zs){this.planes=[e,n,a,r,c,u]}set(e,n,a,r,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(r),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ki,a=!1){const r=this.planes,c=e.elements,u=c[0],h=c[1],p=c[2],d=c[3],x=c[4],g=c[5],_=c[6],y=c[7],M=c[8],E=c[9],b=c[10],v=c[11],L=c[12],D=c[13],O=c[14],H=c[15];if(r[0].setComponents(d-u,y-x,v-M,H-L).normalize(),r[1].setComponents(d+u,y+x,v+M,H+L).normalize(),r[2].setComponents(d+h,y+g,v+E,H+D).normalize(),r[3].setComponents(d-h,y-g,v-E,H-D).normalize(),a)r[4].setComponents(p,_,b,O).normalize(),r[5].setComponents(d-p,y-_,v-b,H-O).normalize();else if(r[4].setComponents(d-p,y-_,v-b,H-O).normalize(),n===ki)r[5].setComponents(d+p,y+_,v+b,H+O).normalize();else if(n===mu)r[5].setComponents(p,_,b,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const n=UM.distanceTo(e.center);return Os.radius=.7071067811865476+n,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const n=this.planes,a=e.center,r=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if($c.x=r.normal.x>0?e.max.x:e.min.x,$c.y=r.normal.y>0?e.max.y:e.min.y,$c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($c)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mv extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xu=new K,_u=new K,o_=new mt,al=new yu,eu=new Yi,cd=new K,l_=new K;class wp extends nn{constructor(e=new Li,n=new mv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let r=1,c=n.count;r<c;r++)xu.fromBufferAttribute(n,r-1),_u.fromBufferAttribute(n,r),a[r]=a[r-1],a[r]+=xu.distanceTo(_u);e.setAttribute("lineDistance",new Ra(a,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),eu.copy(a.boundingSphere),eu.applyMatrix4(r),eu.radius+=c,e.ray.intersectsSphere(eu)===!1)return;o_.copy(r).invert(),al.copy(e.ray).applyMatrix4(o_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,x=a.index,_=a.attributes.position;if(x!==null){const y=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let E=y,b=M-1;E<b;E+=d){const v=x.getX(E),L=x.getX(E+1),D=tu(this,e,al,p,v,L,E);D&&n.push(D)}if(this.isLineLoop){const E=x.getX(M-1),b=x.getX(y),v=tu(this,e,al,p,E,b,M-1);v&&n.push(v)}}else{const y=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=y,b=M-1;E<b;E+=d){const v=tu(this,e,al,p,E,E+1,E);v&&n.push(v)}if(this.isLineLoop){const E=tu(this,e,al,p,M-1,y,M-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function tu(o,e,n,a,r,c,u){const h=o.geometry.attributes.position;if(xu.fromBufferAttribute(h,r),_u.fromBufferAttribute(h,c),n.distanceSqToSegment(xu,_u,cd,l_)>a)return;cd.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(cd);if(!(d<e.near||d>e.far))return{distance:d,point:l_.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const c_=new K,u_=new K;class LM extends wp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let r=0,c=n.count;r<c;r+=2)c_.fromBufferAttribute(n,r),u_.fromBufferAttribute(n,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+c_.distanceTo(u_);e.setAttribute("lineDistance",new Ra(a,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NM extends wp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class gv extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const f_=new mt,cp=new yu,nu=new Yi,iu=new K;class OM extends nn{constructor(e=new Li,n=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,r=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),nu.copy(a.boundingSphere),nu.applyMatrix4(r),nu.radius+=c,e.ray.intersectsSphere(nu)===!1)return;f_.copy(r).invert(),cp.copy(e.ray).applyMatrix4(f_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,g=a.attributes.position;if(d!==null){const _=Math.max(0,u.start),y=Math.min(d.count,u.start+u.count);for(let M=_,E=y;M<E;M++){const b=d.getX(M);iu.fromBufferAttribute(g,b),h_(iu,b,p,r,e,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(g.count,u.start+u.count);for(let M=_,E=y;M<E;M++)iu.fromBufferAttribute(g,M),h_(iu,M,p,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=r.length;c<u;c++){const h=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function h_(o,e,n,a,r,c,u){const h=cp.distanceSqToPoint(o);if(h<n){const p=new K;cp.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;c.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class xv extends An{constructor(e,n,a=ks,r,c,u,h=Gn,p=Gn,d,x=gl,g=1){if(x!==gl&&x!==xl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,r,c,u,h,p,x,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _v extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Su extends Li{constructor(e=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:r};const c=e/2,u=n/2,h=Math.floor(a),p=Math.floor(r),d=h+1,x=p+1,g=e/h,_=n/p,y=[],M=[],E=[],b=[];for(let v=0;v<x;v++){const L=v*_-u;for(let D=0;D<d;D++){const O=D*g-c;M.push(O,-L,0),E.push(0,0,1),b.push(D/h),b.push(1-v/p)}}for(let v=0;v<p;v++)for(let L=0;L<h;L++){const D=L+d*v,O=L+d*(v+1),H=L+1+d*(v+1),N=L+1+d*v;y.push(D,O,N),y.push(O,H,N)}this.setIndex(y),this.setAttribute("position",new Ra(M,3)),this.setAttribute("normal",new Ra(E,3)),this.setAttribute("uv",new Ra(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dp extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iv,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ji extends Dp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class IM extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function au(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function BM(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function zM(o){function e(r,c){return o[r]-o[c]}const n=o.length,a=new Array(n);for(let r=0;r!==n;++r)a[r]=r;return a.sort(e),a}function d_(o,e,n){const a=o.length,r=new o.constructor(a);for(let c=0,u=0;u!==a;++c){const h=n[c]*e;for(let p=0;p!==e;++p)r[u++]=o[h+p]}return r}function vv(o,e,n,a){let r=1,c=o[0];for(;c!==void 0&&c[a]===void 0;)c=o[r++];if(c===void 0)return;let u=c[a];if(u!==void 0)if(Array.isArray(u))do u=c[a],u!==void 0&&(e.push(c.time),n.push(...u)),c=o[r++];while(c!==void 0);else if(u.toArray!==void 0)do u=c[a],u!==void 0&&(e.push(c.time),u.toArray(n,n.length)),c=o[r++];while(c!==void 0);else do u=c[a],u!==void 0&&(e.push(c.time),n.push(u)),c=o[r++];while(c!==void 0)}class Ml{constructor(e,n,a,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let a=this._cachedIndex,r=n[a],c=n[a-1];e:{t:{let u;n:{i:if(!(e<r)){for(let h=a+2;;){if(r===void 0){if(e<c)break i;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===h)break;if(c=r,r=n[++a],e<r)break t}u=n.length;break n}if(!(e>=c)){const h=n[1];e<h&&(a=2,c=h);for(let p=a-2;;){if(c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===p)break;if(r=c,c=n[--a-1],e>=c)break t}u=a,a=0;break n}break e}for(;a<u;){const h=a+u>>>1;e<n[h]?u=h:a=h+1}if(r=n[a],c=n[a-1],c===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,c,r)}return this.interpolate_(a,c,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r;for(let u=0;u!==r;++u)n[u]=a[c+u];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class FM extends Ml{constructor(e,n,a,r){super(e,n,a,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dx,endingEnd:Dx}}intervalChanged_(e,n,a){const r=this.parameterPositions;let c=e-2,u=e+1,h=r[c],p=r[u];if(h===void 0)switch(this.getSettings_().endingStart){case Ux:c=e,h=2*n-a;break;case Lx:c=r.length-2,h=n+r[c]-r[c+1];break;default:c=e,h=a}if(p===void 0)switch(this.getSettings_().endingEnd){case Ux:u=e,p=2*a-n;break;case Lx:u=1,p=a+r[1]-r[0];break;default:u=e-1,p=n}const d=(a-n)*.5,x=this.valueSize;this._weightPrev=d/(n-h),this._weightNext=d/(p-a),this._offsetPrev=c*x,this._offsetNext=u*x}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,x=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(a-n)/(r-n),E=M*M,b=E*M,v=-_*b+2*_*E-_*M,L=(1+_)*b+(-1.5-2*_)*E+(-.5+_)*M+1,D=(-1-y)*b+(1.5+y)*E+.5*M,O=y*b-y*E;for(let H=0;H!==h;++H)c[H]=v*u[x+H]+L*u[d+H]+D*u[p+H]+O*u[g+H];return c}}class HM extends Ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=e*h,d=p-h,x=(a-n)/(r-n),g=1-x;for(let _=0;_!==h;++_)c[_]=u[d+_]*g+u[p+_]*x;return c}}class VM extends Ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ni{constructor(e,n,a,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=au(n,this.TimeBufferType),this.values=au(a,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:au(e.times,Array),values:au(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(a.interpolation=r)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new VM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new HM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new FM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case _l:n=this.InterpolantFactoryMethodDiscrete;break;case vl:n=this.InterpolantFactoryMethodLinear;break;case zh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Ze("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let a=0,r=n.length;a!==r;++a)n[a]*=e}return this}trim(e,n){const a=this.times,r=a.length;let c=0,u=r-1;for(;c!==r&&a[c]<e;)++c;for(;u!==-1&&a[u]>n;)--u;if(++u,c!==0||u!==r){c>=u&&(u=Math.max(u,1),c=u-1);const h=this.getValueSize();this.times=a.slice(c,u),this.values=this.values.slice(c*h,u*h)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(vt("KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,r=this.values,c=a.length;c===0&&(vt("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let h=0;h!==c;h++){const p=a[h];if(typeof p=="number"&&isNaN(p)){vt("KeyframeTrack: Time is not a valid number.",this,h,p),e=!1;break}if(u!==null&&u>p){vt("KeyframeTrack: Out of order keys.",this,h,p,u),e=!1;break}u=p}if(r!==void 0&&BM(r))for(let h=0,p=r.length;h!==p;++h){const d=r[h];if(isNaN(d)){vt("KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),r=this.getInterpolation()===zh,c=e.length-1;let u=1;for(let h=1;h<c;++h){let p=!1;const d=e[h],x=e[h+1];if(d!==x&&(h!==1||d!==e[0]))if(r)p=!0;else{const g=h*a,_=g-a,y=g+a;for(let M=0;M!==a;++M){const E=n[g+M];if(E!==n[_+M]||E!==n[y+M]){p=!0;break}}}if(p){if(h!==u){e[u]=e[h];const g=h*a,_=u*a;for(let y=0;y!==a;++y)n[_+y]=n[g+y]}++u}}if(c>0){e[u]=e[c];for(let h=c*a,p=u*a,d=0;d!==a;++d)n[p+d]=n[h+d];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=n.slice(0,u*a)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),a=this.constructor,r=new a(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=vl;class $r extends Ni{constructor(e,n,a){super(e,n,a)}}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=_l;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class yv extends Ni{constructor(e,n,a,r){super(e,n,a,r)}}yv.prototype.ValueTypeName="color";class jr extends Ni{constructor(e,n,a,r){super(e,n,a,r)}}jr.prototype.ValueTypeName="number";class GM extends Ml{constructor(e,n,a,r){super(e,n,a,r)}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=(a-n)/(r-n);let d=e*h;for(let x=d+h;d!==x;d+=4)hs.slerpFlat(c,0,u,d-h,u,d,p);return c}}class Kr extends Ni{constructor(e,n,a,r){super(e,n,a,r)}InterpolantFactoryMethodLinear(e){return new GM(this.times,this.values,this.getValueSize(),e)}}Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends Ni{constructor(e,n,a){super(e,n,a)}}eo.prototype.ValueTypeName="string";eo.prototype.ValueBufferType=Array;eo.prototype.DefaultInterpolation=_l;eo.prototype.InterpolantFactoryMethodLinear=void 0;eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends Ni{constructor(e,n,a,r){super(e,n,a,r)}}Zr.prototype.ValueTypeName="vector";class kM{constructor(e="",n=-1,a=[],r=Sb){this.name=e,this.tracks=a,this.duration=n,this.blendMode=r,this.uuid=Ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],a=e.tracks,r=1/(e.fps||1);for(let u=0,h=a.length;u!==h;++u)n.push(WM(a[u]).scale(r));const c=new this(e.name,e.duration,n,e.blendMode);return c.uuid=e.uuid,c.userData=JSON.parse(e.userData||"{}"),c}static toJSON(e){const n=[],a=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let c=0,u=a.length;c!==u;++c)n.push(Ni.toJSON(a[c]));return r}static CreateFromMorphTargetSequence(e,n,a,r){const c=n.length,u=[];for(let h=0;h<c;h++){let p=[],d=[];p.push((h+c-1)%c,h,(h+1)%c),d.push(0,1,0);const x=zM(p);p=d_(p,1,x),d=d_(d,1,x),!r&&p[0]===0&&(p.push(c),d.push(d[0])),u.push(new jr(".morphTargetInfluences["+n[h].name+"]",p,d).scale(1/a))}return new this(e,-1,u)}static findByName(e,n){let a=e;if(!Array.isArray(e)){const r=e;a=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<a.length;r++)if(a[r].name===n)return a[r];return null}static CreateClipsFromMorphTargetSequences(e,n,a){const r={},c=/^([\w-]*?)([\d]+)$/;for(let h=0,p=e.length;h<p;h++){const d=e[h],x=d.name.match(c);if(x&&x.length>1){const g=x[1];let _=r[g];_||(r[g]=_=[]),_.push(d)}}const u=[];for(const h in r)u.push(this.CreateFromMorphTargetSequence(h,r[h],n,a));return u}static parseAnimation(e,n){if(Ze("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return vt("AnimationClip: No animation in JSONLoader data."),null;const a=function(g,_,y,M,E){if(y.length!==0){const b=[],v=[];vv(y,b,v,M),b.length!==0&&E.push(new g(_,b,v))}},r=[],c=e.name||"default",u=e.fps||30,h=e.blendMode;let p=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const _=d[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)y[_[M].morphTargets[E]]=-1;for(const E in y){const b=[],v=[];for(let L=0;L!==_[M].morphTargets.length;++L){const D=_[M];b.push(D.time),v.push(D.morphTarget===E?1:0)}r.push(new jr(".morphTargetInfluence["+E+"]",b,v))}p=y.length*u}else{const y=".bones["+n[g].name+"]";a(Zr,y+".position",_,"pos",r),a(Kr,y+".quaternion",_,"rot",r),a(Zr,y+".scale",_,"scl",r)}}return r.length===0?null:new this(c,p,r,h)}resetDuration(){const e=this.tracks;let n=0;for(let a=0,r=e.length;a!==r;++a){const c=this.tracks[a];n=Math.max(n,c.times[c.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let a=0;a<this.tracks.length;a++)e.push(this.tracks[a].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function XM(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return yv;case"quaternion":return Kr;case"bool":case"boolean":return $r;case"string":return eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function WM(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=XM(o.type);if(o.times===void 0){const n=[],a=[];vv(o.keys,n,a,"value"),o.times=n,o.values=a}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Ta={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class qM{constructor(e,n,a){const r=this;let c=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(x){h++,c===!1&&r.onStart!==void 0&&r.onStart(x,u,h),c=!0},this.itemEnd=function(x){u++,r.onProgress!==void 0&&r.onProgress(x,u,h),u===h&&(c=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(x){r.onError!==void 0&&r.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,g){return d.push(x,g),this},this.removeHandler=function(x){const g=d.indexOf(x);return g!==-1&&d.splice(g,2),this},this.getHandler=function(x){for(let g=0,_=d.length;g<_;g+=2){const y=d[g],M=d[g+1];if(y.global&&(y.lastIndex=0),y.test(x))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const YM=new qM;class to{constructor(e){this.manager=e!==void 0?e:YM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(r,c){a.load(e,r,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}to.DEFAULT_MATERIAL_NAME="__DEFAULT";const ya={};class jM extends Error{constructor(e,n){super(e),this.response=n}}class Sv extends to{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=Ta.get(`file:${e}`);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(ya[e]!==void 0){ya[e].push({onLoad:n,onProgress:a,onError:r});return}ya[e]=[],ya[e].push({onLoad:n,onProgress:a,onError:r});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,p=this.responseType;fetch(u).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const x=ya[e],g=d.body.getReader(),_=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const b=new ReadableStream({start(v){L();function L(){g.read().then(({done:D,value:O})=>{if(D)v.close();else{E+=O.byteLength;const H=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let N=0,P=x.length;N<P;N++){const $=x[N];$.onProgress&&$.onProgress(H)}v.enqueue(O),L()}},D=>{v.error(D)})}}});return new Response(b)}else throw new jM(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(p){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(x=>new DOMParser().parseFromString(x,h));case"json":return d.json();default:if(h==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(h),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return d.arrayBuffer().then(M=>y.decode(M))}}}).then(d=>{Ta.add(`file:${e}`,d);const x=ya[e];delete ya[e];for(let g=0,_=x.length;g<_;g++){const y=x[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const x=ya[e];if(x===void 0)throw this.manager.itemError(e),d;delete ya[e];for(let g=0,_=x.length;g<_;g++){const y=x[g];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Br=new WeakMap;class KM extends to{constructor(e){super(e)}load(e,n,a,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ta.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let g=Br.get(u);g===void 0&&(g=[],Br.set(u,g)),g.push({onLoad:n,onError:r})}return u}const h=yl("img");function p(){x(),n&&n(this);const g=Br.get(this)||[];for(let _=0;_<g.length;_++){const y=g[_];y.onLoad&&y.onLoad(this)}Br.delete(this),c.manager.itemEnd(e)}function d(g){x(),r&&r(g),Ta.remove(`image:${e}`);const _=Br.get(this)||[];for(let y=0;y<_.length;y++){const M=_[y];M.onError&&M.onError(g)}Br.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function x(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ta.add(`image:${e}`,h),c.manager.itemStart(e),h.src=e,h}}class ZM extends to{constructor(e){super(e)}load(e,n,a,r){const c=new An,u=new KM(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},a,r),c}}class bu extends nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ud=new mt,p_=new K,m_=new K;class Up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;p_.setFromMatrixPosition(e.matrixWorld),n.position.copy(p_),m_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(m_),n.updateMatrixWorld(),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QM extends Up{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,a=qr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||n.far;(a!==n.fov||r!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=r,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class JM extends bu{constructor(e,n,a=0,r=Math.PI/3,c=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=a,this.angle=r,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new QM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const g_=new mt,sl=new K,fd=new K;class $M extends Up{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,r=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),sl.setFromMatrixPosition(e.matrixWorld),a.position.copy(sl),fd.copy(a.position),fd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(fd),a.updateMatrixWorld(),r.makeTranslation(-sl.x,-sl.y,-sl.z),g_.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(g_,a.coordinateSystem,a.reversedDepth)}}class eT extends bu{constructor(e,n,a=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lp extends hv{constructor(e=-1,n=1,a=1,r=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=r,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,r,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=x*this.view.offsetY,p=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class tT extends Up{constructor(){super(new Lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bv extends bu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new tT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nT extends bu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class dl{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const hd=new WeakMap;class iT extends to{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,a,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=Ta.get(`image-bitmap:${e}`);if(u!==void 0){if(c.manager.itemStart(e),u.then){u.then(d=>{if(hd.has(u)===!0)r&&r(hd.get(u)),c.manager.itemError(e),c.manager.itemEnd(e);else return n&&n(d),c.manager.itemEnd(e),d});return}return setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0),u}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader,h.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const p=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(c.options,{colorSpaceConversion:"none"}))}).then(function(d){return Ta.add(`image-bitmap:${e}`,d),n&&n(d),c.manager.itemEnd(e),d}).catch(function(d){r&&r(d),hd.set(p,d),Ta.remove(`image-bitmap:${e}`),c.manager.itemError(e),c.manager.itemEnd(e)});Ta.add(`image-bitmap:${e}`,p),c.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class aT extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Np="\\[\\]\\.:\\/",sT=new RegExp("["+Np+"]","g"),Op="[^"+Np+"]",rT="[^"+Np.replace("\\.","")+"]",oT=/((?:WC+[\/:])*)/.source.replace("WC",Op),lT=/(WCOD+)?/.source.replace("WCOD",rT),cT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Op),uT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Op),fT=new RegExp("^"+oT+lT+cT+uT+"$"),hT=["material","materials","bones","map"];class dT{constructor(e,n,a){const r=a||Gt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,r=this._bindings[a];r!==void 0&&r.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let r=this._targetGroup.nCachedObjects_,c=a.length;r!==c;++r)a[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class Gt{constructor(e,n,a){this.path=n,this.parsedPath=a||Gt.parseTrackName(n),this.node=Gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new Gt.Composite(e,n,a):new Gt(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sT,"")}static parseTrackName(e){const n=fT.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=a.nodeName&&a.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const c=a.nodeName.substring(r+1);hT.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,r),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const p=a(h.children);if(p)return p}return null},r=a(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)e[n++]=a[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let r=0,c=a.length;r!==c;++r)a[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,r=n.propertyName;let c=n.propertyIndex;if(e||(e=Gt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let x=0;x<e.length;x++)if(e[x].name===d){d=x;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(d!==void 0){if(e[d]===void 0){vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const u=e[r];if(u===void 0){const d=n.nodeName;vt("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=r;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Gt.Composite=dT;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function x_(o,e,n,a){const r=pT(a);switch(n){case ev:return o*e;case _p:return o*e/r.components*r.byteLength;case vp:return o*e/r.components*r.byteLength;case yp:return o*e*2/r.components*r.byteLength;case Sp:return o*e*2/r.components*r.byteLength;case tv:return o*e*3/r.components*r.byteLength;case vi:return o*e*4/r.components*r.byteLength;case bp:return o*e*4/r.components*r.byteLength;case lu:case cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uu:case fu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Id:return Math.max(o,16)*Math.max(e,8)/4;case Ld:case Od:return Math.max(o,8)*Math.max(e,8)/2;case Pd:case Bd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case $d:case ep:case tp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ap:case sp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pT(o){switch(o){case Wi:case Z_:return{byteLength:1,components:1};case pl:case Q_:case Qr:return{byteLength:2,components:1};case gp:case xp:return{byteLength:2,components:4};case ks:case mp:case Di:return{byteLength:4,components:1};case J_:case $_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);function Mv(){let o=null,e=!1,n=null,a=null;function r(c,u){n(c,u),a=o.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(a=o.requestAnimationFrame(r),e=!0)},stop:function(){o.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function mT(o){const e=new WeakMap;function n(h,p){const d=h.array,x=h.usage,g=d.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,d,x),h.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,p,d){const x=p.array,g=p.updateRanges;if(o.bindBuffer(d,h),g.length===0)o.bufferSubData(d,0,x);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];o.bufferSubData(d,E.start*x.BYTES_PER_ELEMENT,x,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:r,remove:c,update:u}}var gT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ST=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ET=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qT="gl_FragColor = linearToOutputTexel( gl_FragColor );",YT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$T=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:gT,alphahash_pars_fragment:xT,alphamap_fragment:_T,alphamap_pars_fragment:vT,alphatest_fragment:yT,alphatest_pars_fragment:ST,aomap_fragment:bT,aomap_pars_fragment:MT,batching_pars_vertex:TT,batching_vertex:ET,begin_vertex:AT,beginnormal_vertex:RT,bsdfs:CT,iridescence_fragment:wT,bumpmap_pars_fragment:DT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:NT,clipping_planes_vertex:OT,color_fragment:IT,color_pars_fragment:PT,color_pars_vertex:BT,color_vertex:zT,common:FT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:VT,displacementmap_pars_vertex:GT,displacementmap_vertex:kT,emissivemap_fragment:XT,emissivemap_pars_fragment:WT,colorspace_fragment:qT,colorspace_pars_fragment:YT,envmap_fragment:jT,envmap_common_pars_fragment:KT,envmap_pars_fragment:ZT,envmap_pars_vertex:QT,envmap_physical_pars_fragment:lE,envmap_vertex:JT,fog_vertex:$T,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:aE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:rE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:fE,lights_phong_pars_fragment:hE,lights_physical_fragment:dE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:xE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:vE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:SE,map_fragment:bE,map_pars_fragment:ME,map_particle_fragment:TE,map_particle_pars_fragment:EE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:RE,morphinstance_vertex:CE,morphcolor_vertex:wE,morphnormal_vertex:DE,morphtarget_pars_vertex:UE,morphtarget_vertex:LE,normal_fragment_begin:NE,normal_fragment_maps:OE,normal_pars_fragment:IE,normal_pars_vertex:PE,normal_vertex:BE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:FE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:GE,opaque_fragment:kE,packing:XE,premultiplied_alpha_fragment:WE,project_vertex:qE,dithering_fragment:YE,dithering_pars_fragment:jE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:JE,shadowmap_vertex:$E,shadowmask_pars_fragment:e1,skinbase_vertex:t1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:a1,specularmap_fragment:s1,specularmap_pars_fragment:r1,tonemapping_fragment:o1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:u1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:x1,backgroundCube_frag:_1,cube_vert:v1,cube_frag:y1,depth_vert:S1,depth_frag:b1,distanceRGBA_vert:M1,distanceRGBA_frag:T1,equirect_vert:E1,equirect_frag:A1,linedashed_vert:R1,linedashed_frag:C1,meshbasic_vert:w1,meshbasic_frag:D1,meshlambert_vert:U1,meshlambert_frag:L1,meshmatcap_vert:N1,meshmatcap_frag:O1,meshnormal_vert:I1,meshnormal_frag:P1,meshphong_vert:B1,meshphong_frag:z1,meshphysical_vert:F1,meshphysical_frag:H1,meshtoon_vert:V1,meshtoon_frag:G1,points_vert:k1,points_frag:X1,shadow_vert:W1,shadow_frag:q1,sprite_vert:Y1,sprite_frag:j1},Le={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Hi={basic:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new rt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new rt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Fn([Le.common,Le.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Fn([Le.lights,Le.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:Fn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const su={r:0,b:0,g:0},Is=new qi,K1=new mt;function Z1(o,e,n,a,r,c,u){const h=new rt(0);let p=c===!0?0:1,d,x,g=null,_=0,y=null;function M(D){let O=D.isScene===!0?D.background:null;return O&&O.isTexture&&(O=(D.backgroundBlurriness>0?n:e).get(O)),O}function E(D){let O=!1;const H=M(D);H===null?v(h,p):H&&H.isColor&&(v(H,1),O=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?a.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(o.autoClear||O)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(D,O){const H=M(O);H&&(H.isCubeTexture||H.mapping===vu)?(x===void 0&&(x=new yi(new bl(1,1,1),new wa({name:"BackgroundCubeMaterial",uniforms:Yr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,P,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(x)),Is.copy(O.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(Is)),x.material.toneMapped=Ct.getTransfer(H.colorSpace)!==Yt,(g!==H||_!==H.version||y!==o.toneMapping)&&(x.material.needsUpdate=!0,g=H,_=H.version,y=o.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(d===void 0&&(d=new yi(new Su(2,2),new wa({name:"BackgroundMaterial",uniforms:Yr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=H,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.toneMapped=Ct.getTransfer(H.colorSpace)!==Yt,H.matrixAutoUpdate===!0&&H.updateMatrix(),d.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||_!==H.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=H,_=H.version,y=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function v(D,O){D.getRGB(su,fv(o)),a.buffers.color.setClear(su.r,su.g,su.b,O,u)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,O=1){h.set(D),p=O,v(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(h,p)},render:E,addToRenderList:b,dispose:L}}function Q1(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=_(null);let c=r,u=!1;function h(C,k,ne,le,me){let fe=!1;const z=g(le,ne,k);c!==z&&(c=z,d(c.object)),fe=y(C,le,ne,me),fe&&M(C,le,ne,me),me!==null&&e.update(me,o.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,O(C,k,ne,le),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function p(){return o.createVertexArray()}function d(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,k,ne){const le=ne.wireframe===!0;let me=a[C.id];me===void 0&&(me={},a[C.id]=me);let fe=me[k.id];fe===void 0&&(fe={},me[k.id]=fe);let z=fe[le];return z===void 0&&(z=_(p()),fe[le]=z),z}function _(C){const k=[],ne=[],le=[];for(let me=0;me<n;me++)k[me]=0,ne[me]=0,le[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:le,object:C,attributes:{},index:null}}function y(C,k,ne,le){const me=c.attributes,fe=k.attributes;let z=0;const j=ne.getAttributes();for(const Y in j)if(j[Y].location>=0){const _e=me[Y];let I=fe[Y];if(I===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),_e===void 0||_e.attribute!==I||I&&_e.data!==I.data)return!0;z++}return c.attributesNum!==z||c.index!==le}function M(C,k,ne,le){const me={},fe=k.attributes;let z=0;const j=ne.getAttributes();for(const Y in j)if(j[Y].location>=0){let _e=fe[Y];_e===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor));const I={};I.attribute=_e,_e&&_e.data&&(I.data=_e.data),me[Y]=I,z++}c.attributes=me,c.attributesNum=z,c.index=le}function E(){const C=c.newAttributes;for(let k=0,ne=C.length;k<ne;k++)C[k]=0}function b(C){v(C,0)}function v(C,k){const ne=c.newAttributes,le=c.enabledAttributes,me=c.attributeDivisors;ne[C]=1,le[C]===0&&(o.enableVertexAttribArray(C),le[C]=1),me[C]!==k&&(o.vertexAttribDivisor(C,k),me[C]=k)}function L(){const C=c.newAttributes,k=c.enabledAttributes;for(let ne=0,le=k.length;ne<le;ne++)k[ne]!==C[ne]&&(o.disableVertexAttribArray(ne),k[ne]=0)}function D(C,k,ne,le,me,fe,z){z===!0?o.vertexAttribIPointer(C,k,ne,me,fe):o.vertexAttribPointer(C,k,ne,le,me,fe)}function O(C,k,ne,le){E();const me=le.attributes,fe=ne.getAttributes(),z=k.defaultAttributeValues;for(const j in fe){const Y=fe[j];if(Y.location>=0){let xe=me[j];if(xe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),xe!==void 0){const _e=xe.normalized,I=xe.itemSize,se=e.get(xe);if(se===void 0)continue;const Se=se.buffer,Te=se.type,Oe=se.bytesPerElement,ie=Te===o.INT||Te===o.UNSIGNED_INT||xe.gpuType===mp;if(xe.isInterleavedBufferAttribute){const ce=xe.data,Ce=ce.stride,Fe=xe.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<Y.locationSize;ke++)v(Y.location+ke,ce.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<Y.locationSize;ke++)b(Y.location+ke);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let ke=0;ke<Y.locationSize;ke++)D(Y.location+ke,I/Y.locationSize,Te,_e,Ce*Oe,(Fe+I/Y.locationSize*ke)*Oe,ie)}else{if(xe.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)v(Y.location+ce,xe.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ce=0;ce<Y.locationSize;ce++)b(Y.location+ce);o.bindBuffer(o.ARRAY_BUFFER,Se);for(let ce=0;ce<Y.locationSize;ce++)D(Y.location+ce,I/Y.locationSize,Te,_e,I*Oe,I/Y.locationSize*ce*Oe,ie)}}else if(z!==void 0){const _e=z[j];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(Y.location,_e);break;case 3:o.vertexAttrib3fv(Y.location,_e);break;case 4:o.vertexAttrib4fv(Y.location,_e);break;default:o.vertexAttrib1fv(Y.location,_e)}}}}L()}function H(){$();for(const C in a){const k=a[C];for(const ne in k){const le=k[ne];for(const me in le)x(le[me].object),delete le[me];delete k[ne]}delete a[C]}}function N(C){if(a[C.id]===void 0)return;const k=a[C.id];for(const ne in k){const le=k[ne];for(const me in le)x(le[me].object),delete le[me];delete k[ne]}delete a[C.id]}function P(C){for(const k in a){const ne=a[k];if(ne[C.id]===void 0)continue;const le=ne[C.id];for(const me in le)x(le[me].object),delete le[me];delete ne[C.id]}}function $(){w(),u=!0,c!==r&&(c=r,d(c.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:$,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:N,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:b,disableUnusedAttributes:L}}function J1(o,e,n){let a;function r(d){a=d}function c(d,x){o.drawArrays(a,d,x),n.update(x,a,1)}function u(d,x,g){g!==0&&(o.drawArraysInstanced(a,d,x,g),n.update(x,a,g))}function h(d,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];n.update(y,a,1)}function p(d,x,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)u(d[M],x[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,x,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E]*_[E];n.update(M,a,1)}}this.setMode=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function $1(o,e,n,a){let r;function c(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==vi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const $=P===Qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Wi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Di&&!$)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const x=p(d);x!==d&&(Ze("WebGLRenderer:",d,"not supported, using",x,"instead."),d=x);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=M>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:O,vertexTextures:H,maxSamples:N}}function e3(o){const e=this;let n=null,a=0,r=!1,c=!1;const u=new zs,h=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||a!==0||r;return r=_,a=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){n=x(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,E=g.clipIntersection,b=g.clipShadows,v=o.get(g);if(!r||M===null||M.length===0||c&&!b)c?x(null):d();else{const L=c?0:a,D=L*4;let O=v.clippingState||null;p.value=O,O=x(M,_,D,y);for(let H=0;H!==D;++H)O[H]=n[H];v.clippingState=O,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function x(g,_,y,M){const E=g!==null?g.length:0;let b=null;if(E!==0){if(b=p.value,M!==!0||b===null){const v=y+E*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(b===null||b.length<v)&&(b=new Float32Array(v));for(let D=0,O=y;D!==E;++D,O+=4)u.copy(g[D]).applyMatrix4(L,h),u.normal.toArray(b,O),b[O+3]=u.constant}p.value=b,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,b}}function t3(o){let e=new WeakMap;function n(u,h){return h===Dd?u.mapping=kr:h===Ud&&(u.mapping=Xr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Dd||h===Ud)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new yM(p.height);return d.fromEquirectangularTexture(o,u),e.set(u,d),u.addEventListener("dispose",r),n(d.texture,u.mapping)}else return null}}return u}function r(u){const h=u.target;h.removeEventListener("dispose",r);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const us=4,__=[.125,.215,.35,.446,.526,.582],Hs=20,n3=256,rl=new Lp,v_=new rt;let dd=null,pd=0,md=0,gd=!1;const i3=new K;class y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,r=100,c={}){const{size:u=256,position:h=i3}=c;dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,r,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Qr,format:vi,colorSpace:Xn,depthBuffer:!1},r=S_(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a3(c)),this._blurMaterial=r3(c,e,n),this._ggxMaterial=s3(c,e,n)}return r}_compileMaterial(e){const n=new yi(new Li,e);this._renderer.compile(n,rl)}_sceneToCubeUV(e,n,a,r,c){const p=new Hn(90,1,n,a),d=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(v_),g.toneMapping=fs,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yi(new bl,new Vs({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,b=E.material;let v=!1;const L=e.background;L?L.isColor&&(b.color.copy(L),e.background=null,v=!0):(b.color.copy(v_),v=!0);for(let D=0;D<6;D++){const O=D%3;O===0?(p.up.set(0,d[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[D],c.y,c.z)):O===1?(p.up.set(0,0,d[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[D],c.z)):(p.up.set(0,d[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[D]));const H=this._cubeSize;zr(r,O*H,D>2?H:0,H,H),g.setRenderTarget(r),v&&g.render(E,p),g.render(e,p)}g.toneMapping=y,g.autoClear=_,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,r=e.mapping===kr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b_());const c=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;zr(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,rl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let c=1;c<r;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const r=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-x*x),_=.05+d*.95,y=g*_,{_lodMax:M}=this,E=this._sizeLods[a],b=3*E*(a>M-us?a-M+us:0),v=4*(this._cubeSize-E);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=M-n,zr(c,b,v,3*E,2*E),r.setRenderTarget(c),r.render(h,rl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=M-a,zr(e,b,v,3*E,2*E),r.setRenderTarget(e),r.render(h,rl)}_blur(e,n,a,r,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,r,"latitudinal",c),this._halfBlur(u,e,a,a,r,"longitudinal",c)}_halfBlur(e,n,a,r,c,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[r];g.material=d;const _=d.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Hs-1),E=c/M,b=isFinite(c)?1+Math.floor(x*E):Hs;b>Hs&&Ze(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Hs}`);const v=[];let L=0;for(let P=0;P<Hs;++P){const $=P/E,w=Math.exp(-$*$/2);v.push(w),P===0?L+=w:P<b&&(L+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/L;_.envMap.value=e.texture,_.samples.value=b,_.weights.value=v,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=M,_.mipInt.value=D-a;const O=this._sizeLods[r],H=3*O*(r>D-us?r-D+us:0),N=4*(this._cubeSize-O);zr(n,H,N,3*O,2*O),p.setRenderTarget(n),p.render(g,rl)}}function a3(o){const e=[],n=[],a=[];let r=o;const c=o-us+1+__.length;for(let u=0;u<c;u++){const h=Math.pow(2,r);e.push(h);let p=1/h;u>o-us?p=__[u-o+us-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),x=-d,g=1+d,_=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,E=3,b=2,v=1,L=new Float32Array(E*M*y),D=new Float32Array(b*M*y),O=new Float32Array(v*M*y);for(let N=0;N<y;N++){const P=N%3*2/3-1,$=N>2?0:-1,w=[P,$,0,P+2/3,$,0,P+2/3,$+1,0,P,$,0,P+2/3,$+1,0,P,$+1,0];L.set(w,E*M*N),D.set(_,b*M*N);const C=[N,N,N,N,N,N];O.set(C,v*M*N)}const H=new Li;H.setAttribute("position",new kn(L,E)),H.setAttribute("uv",new kn(D,b)),H.setAttribute("faceIndex",new kn(O,v)),a.push(new yi(H,null)),r>us&&r--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function S_(o,e,n){const a=new Xs(o,e,n);return a.texture.mapping=vu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function zr(o,e,n,a,r){o.viewport.set(e,n,a,r),o.scissor.set(e,n,a,r)}function s3(o,e,n){return new wa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function r3(o,e,n){const a=new Float32Array(Hs),r=new K(0,1,0);return new wa({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function b_(){return new wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function M_(){return new wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o3(o){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===Dd||p===Ud,x=p===kr||p===Xr;if(d||x){let g=e.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new y_(o)),g=d?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return d&&y&&y.height>0||x&&y&&r(y)?(n===null&&(n=new y_(o)),g=d?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function r(h){let p=0;const d=6;for(let x=0;x<d;x++)h[x]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function l3(o){const e={};function n(a){if(e[a]!==void 0)return e[a];const r=o.getExtension(a);return e[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&Sl("WebGLRenderer: "+a+" extension not supported."),r}}}function c3(o,e,n,a){const r={},c=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete r[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(g,_){return r[_.id]===!0||(_.addEventListener("dispose",u),r[_.id]=!0,n.memory.geometries++),_}function p(g){const _=g.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function d(g){const _=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let D=0,O=L.length;D<O;D+=3){const H=L[D+0],N=L[D+1],P=L[D+2];_.push(H,N,N,P,P,H)}}else if(M!==void 0){const L=M.array;E=M.version;for(let D=0,O=L.length/3-1;D<O;D+=3){const H=D+0,N=D+1,P=D+2;_.push(H,N,N,P,P,H)}}else return;const b=new(sv(_)?uv:cv)(_,1);b.version=E;const v=c.get(g);v&&e.remove(v),c.set(g,b)}function x(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&d(g)}else d(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:x}}function u3(o,e,n){let a;function r(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,y){o.drawElements(a,y,c,_*u),n.update(y,a,1)}function d(_,y,M){M!==0&&(o.drawElementsInstanced(a,y,c,_*u,M),n.update(y,a,M))}function x(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,_,0,M);let b=0;for(let v=0;v<M;v++)b+=y[v];n.update(b,a,1)}function g(_,y,M,E){if(M===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<_.length;v++)d(_[v]/u,y[v],E[v]);else{b.multiDrawElementsInstancedWEBGL(a,y,0,c,_,0,E,0,M);let v=0;for(let L=0;L<M;L++)v+=y[L]*E[L];n.update(v,a,1)}}this.setMode=r,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function f3(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=h*(c/3);break;case o.LINES:n.lines+=h*(c/2);break;case o.LINE_STRIP:n.lines+=h*(c-1);break;case o.LINE_LOOP:n.lines+=h*c;break;case o.POINTS:n.points+=h*c;break;default:vt("WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:a}}function h3(o,e,n){const a=new WeakMap,r=new Pt;function c(u,h,p){const d=u.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let _=a.get(h);if(_===void 0||_.count!==g){let C=function(){$.dispose(),a.delete(h),h.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let O=0;M===!0&&(O=1),E===!0&&(O=2),b===!0&&(O=3);let H=h.attributes.position.count*O,N=1;H>e.maxTextureSize&&(N=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*N*4*g),$=new rv(P,H,N,g);$.type=Di,$.needsUpdate=!0;const w=O*4;for(let k=0;k<g;k++){const ne=v[k],le=L[k],me=D[k],fe=H*N*4*k;for(let z=0;z<ne.count;z++){const j=z*w;M===!0&&(r.fromBufferAttribute(ne,z),P[fe+j+0]=r.x,P[fe+j+1]=r.y,P[fe+j+2]=r.z,P[fe+j+3]=0),E===!0&&(r.fromBufferAttribute(le,z),P[fe+j+4]=r.x,P[fe+j+5]=r.y,P[fe+j+6]=r.z,P[fe+j+7]=0),b===!0&&(r.fromBufferAttribute(me,z),P[fe+j+8]=r.x,P[fe+j+9]=r.y,P[fe+j+10]=r.z,P[fe+j+11]=me.itemSize===4?r.w:1)}}_={count:g,texture:$,size:new Rt(H,N)},a.set(h,_),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let M=0;for(let b=0;b<d.length;b++)M+=d[b];const E=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function d3(o,e,n,a){let r=new WeakMap;function c(p){const d=a.render.frame,x=p.geometry,g=e.get(p,x);if(r.get(g)!==d&&(e.update(g),r.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),r.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const _=p.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return g}function u(){r=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const Tv=new An,T_=new xv(1,1),Ev=new rv,Av=new iM,Rv=new dv,E_=[],A_=[],R_=new Float32Array(16),C_=new Float32Array(9),w_=new Float32Array(4);function no(o,e,n){const a=o[0];if(a<=0||a>0)return o;const r=e*n;let c=E_[r];if(c===void 0&&(c=new Float32Array(r),E_[r]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,o[u].toArray(c,h)}return c}function vn(o,e){if(o.length!==e.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==e[n])return!1;return!0}function yn(o,e){for(let n=0,a=e.length;n<a;n++)o[n]=e[n]}function Tu(o,e){let n=A_[e];n===void 0&&(n=new Int32Array(e),A_[e]=n);for(let a=0;a!==e;++a)n[a]=o.allocateTextureUnit();return n}function p3(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function m3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2fv(this.addr,e),yn(n,e)}}function g3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vn(n,e))return;o.uniform3fv(this.addr,e),yn(n,e)}}function x3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4fv(this.addr,e),yn(n,e)}}function _3(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(n,e)}else{if(vn(n,a))return;w_.set(a),o.uniformMatrix2fv(this.addr,!1,w_),yn(n,a)}}function v3(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(n,e)}else{if(vn(n,a))return;C_.set(a),o.uniformMatrix3fv(this.addr,!1,C_),yn(n,a)}}function y3(o,e){const n=this.cache,a=e.elements;if(a===void 0){if(vn(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(n,e)}else{if(vn(n,a))return;R_.set(a),o.uniformMatrix4fv(this.addr,!1,R_),yn(n,a)}}function S3(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function b3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2iv(this.addr,e),yn(n,e)}}function M3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;o.uniform3iv(this.addr,e),yn(n,e)}}function T3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4iv(this.addr,e),yn(n,e)}}function E3(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function A3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vn(n,e))return;o.uniform2uiv(this.addr,e),yn(n,e)}}function R3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vn(n,e))return;o.uniform3uiv(this.addr,e),yn(n,e)}}function C3(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vn(n,e))return;o.uniform4uiv(this.addr,e),yn(n,e)}}function w3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let c;this.type===o.SAMPLER_2D_SHADOW?(T_.compareFunction=av,c=T_):c=Tv,n.setTexture2D(e||c,r)}function D3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(e||Av,r)}function U3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(e||Rv,r)}function L3(o,e,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(e||Ev,r)}function N3(o){switch(o){case 5126:return p3;case 35664:return m3;case 35665:return g3;case 35666:return x3;case 35674:return _3;case 35675:return v3;case 35676:return y3;case 5124:case 35670:return S3;case 35667:case 35671:return b3;case 35668:case 35672:return M3;case 35669:case 35673:return T3;case 5125:return E3;case 36294:return A3;case 36295:return R3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return w3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return U3;case 36289:case 36303:case 36311:case 36292:return L3}}function O3(o,e){o.uniform1fv(this.addr,e)}function I3(o,e){const n=no(e,this.size,2);o.uniform2fv(this.addr,n)}function P3(o,e){const n=no(e,this.size,3);o.uniform3fv(this.addr,n)}function B3(o,e){const n=no(e,this.size,4);o.uniform4fv(this.addr,n)}function z3(o,e){const n=no(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function F3(o,e){const n=no(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function H3(o,e){const n=no(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function V3(o,e){o.uniform1iv(this.addr,e)}function G3(o,e){o.uniform2iv(this.addr,e)}function k3(o,e){o.uniform3iv(this.addr,e)}function X3(o,e){o.uniform4iv(this.addr,e)}function W3(o,e){o.uniform1uiv(this.addr,e)}function q3(o,e){o.uniform2uiv(this.addr,e)}function Y3(o,e){o.uniform3uiv(this.addr,e)}function j3(o,e){o.uniform4uiv(this.addr,e)}function K3(o,e,n){const a=this.cache,r=e.length,c=Tu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==r;++u)n.setTexture2D(e[u]||Tv,c[u])}function Z3(o,e,n){const a=this.cache,r=e.length,c=Tu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==r;++u)n.setTexture3D(e[u]||Av,c[u])}function Q3(o,e,n){const a=this.cache,r=e.length,c=Tu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==r;++u)n.setTextureCube(e[u]||Rv,c[u])}function J3(o,e,n){const a=this.cache,r=e.length,c=Tu(n,r);vn(a,c)||(o.uniform1iv(this.addr,c),yn(a,c));for(let u=0;u!==r;++u)n.setTexture2DArray(e[u]||Ev,c[u])}function $3(o){switch(o){case 5126:return O3;case 35664:return I3;case 35665:return P3;case 35666:return B3;case 35674:return z3;case 35675:return F3;case 35676:return H3;case 5124:case 35670:return V3;case 35667:case 35671:return G3;case 35668:case 35672:return k3;case 35669:case 35673:return X3;case 5125:return W3;case 36294:return q3;case 36295:return Y3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return K3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return Q3;case 36289:case 36303:case 36311:case 36292:return J3}}class eA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=N3(n.type)}}class tA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$3(n.type)}}class nA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const r=this.seq;for(let c=0,u=r.length;c!==u;++c){const h=r[c];h.setValue(e,n[h.id],a)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function D_(o,e){o.seq.push(e),o.map[e.id]=e}function iA(o,e,n){const a=o.name,r=a.length;for(xd.lastIndex=0;;){const c=xd.exec(a),u=xd.lastIndex;let h=c[1];const p=c[2]==="]",d=c[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===r){D_(n,d===void 0?new eA(h,o,e):new tA(h,o,e));break}else{let g=n.map[h];g===void 0&&(g=new nA(h),D_(n,g)),n=g}}}class hu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const c=e.getActiveUniform(n,r),u=e.getUniformLocation(n,c.name);iA(c,u,this)}}setValue(e,n,a,r){const c=this.map[n];c!==void 0&&c.setValue(e,a,r)}setOptional(e,n,a){const r=n[a];r!==void 0&&this.setValue(e,a,r)}static upload(e,n,a,r){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,r)}}static seqWithValue(e,n){const a=[];for(let r=0,c=e.length;r!==c;++r){const u=e[r];u.id in n&&a.push(u)}return a}}function U_(o,e,n){const a=o.createShader(e);return o.shaderSource(a,n),o.compileShader(a),a}const aA=37297;let sA=0;function rA(o,e){const n=o.split(`
`),a=[],r=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=r;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const L_=new ft;function oA(o){Ct._getMatrix(L_,Ct.workingColorSpace,o);const e=`mat3( ${L_.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(o)){case pu:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function N_(o,e,n){const a=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+rA(o.getShaderSource(e),h)}else return c}function lA(o,e){const n=oA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function cA(o,e){let n;switch(e){case db:n="Linear";break;case pb:n="Reinhard";break;case mb:n="Cineon";break;case gb:n="ACESFilmic";break;case _b:n="AgX";break;case vb:n="Neutral";break;case xb:n="Custom";break;default:Ze("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ru=new K;function uA(){Ct.getLuminanceCoefficients(ru);const o=ru.x.toFixed(4),e=ru.y.toFixed(4),n=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function hA(o){const e=[];for(const n in o){const a=o[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function dA(o,e){const n={},a=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const c=o.getActiveAttrib(e,r),u=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:o.getAttribLocation(e,u),locationSize:h}}return n}function cl(o){return o!==""}function O_(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(o){return o.replace(pA,gA)}const mA=new Map;function gA(o,e){let n=pt[e];if(n===void 0){const a=mA.get(e);if(a!==void 0)n=pt[a],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return up(n)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(o){return o.replace(xA,_A)}function _A(o,e,n,a){let r="";for(let c=parseInt(e);c<parseInt(n);c++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function B_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===qS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ba&&(e="SHADOWMAP_TYPE_VSM"),e}function yA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case kr:case Xr:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Y_:e="ENVMAP_BLENDING_MULTIPLY";break;case fb:e="ENVMAP_BLENDING_MIX";break;case hb:e="ENVMAP_BLENDING_ADD";break}return e}function MA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function TA(o,e,n,a){const r=o.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=vA(n),d=yA(n),x=SA(n),g=bA(n),_=MA(n),y=fA(n),M=hA(c),E=r.createProgram();let b,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(cl).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(cl).join(`
`),v.length>0&&(v+=`
`)):(b=[B_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),v=[B_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fs?"#define TONE_MAPPING":"",n.toneMapping!==fs?pt.tonemapping_pars_fragment:"",n.toneMapping!==fs?cA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,lA("linearToOutputTexel",n.outputColorSpace),uA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cl).join(`
`)),u=up(u),u=O_(u,n),u=I_(u,n),h=up(h),h=O_(h,n),h=I_(h,n),u=P_(u),h=P_(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",n.glslVersion===Ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+b+u,O=L+v+h,H=U_(r,r.VERTEX_SHADER,D),N=U_(r,r.FRAGMENT_SHADER,O);r.attachShader(E,H),r.attachShader(E,N),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(k){if(o.debug.checkShaderErrors){const ne=r.getProgramInfoLog(E)||"",le=r.getShaderInfoLog(H)||"",me=r.getShaderInfoLog(N)||"",fe=ne.trim(),z=le.trim(),j=me.trim();let Y=!0,xe=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,H,N);else{const _e=N_(r,H,"vertex"),I=N_(r,N,"fragment");vt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+_e+`
`+I)}else fe!==""?Ze("WebGLProgram: Program Info Log:",fe):(z===""||j==="")&&(xe=!1);xe&&(k.diagnostics={runnable:Y,programLog:fe,vertexShader:{log:z,prefix:b},fragmentShader:{log:j,prefix:v}})}r.deleteShader(H),r.deleteShader(N),$=new hu(r,E),w=dA(r,E)}let $;this.getUniforms=function(){return $===void 0&&P(this),$};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(E,aA)),C},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=N,this}let EA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,r=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new RA(e),n.set(e,a)),a}}class RA{constructor(e){this.id=EA++,this.code=e,this.usedTimes=0}}function CA(o,e,n,a,r,c,u){const h=new ov,p=new AA,d=new Set,x=[],g=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return d.add(w),w===0?"uv":`uv${w}`}function b(w,C,k,ne,le){const me=ne.fog,fe=le.geometry,z=w.isMeshStandardMaterial?ne.environment:null,j=(w.isMeshStandardMaterial?n:e).get(w.envMap||z),Y=j&&j.mapping===vu?j.image.height:null,xe=M[w.type];w.precision!==null&&(y=r.getMaxPrecision(w.precision),y!==w.precision&&Ze("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const _e=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,I=_e!==void 0?_e.length:0;let se=0;fe.morphAttributes.position!==void 0&&(se=1),fe.morphAttributes.normal!==void 0&&(se=2),fe.morphAttributes.color!==void 0&&(se=3);let Se,Te,Oe,ie;if(xe){const Ut=Hi[xe];Se=Ut.vertexShader,Te=Ut.fragmentShader}else Se=w.vertexShader,Te=w.fragmentShader,p.update(w),Oe=p.getVertexShaderID(w),ie=p.getFragmentShaderID(w);const ce=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),Fe=le.isInstancedMesh===!0,ke=le.isBatchedMesh===!0,lt=!!w.map,rn=!!w.matcap,ht=!!j,Dt=!!w.aoMap,F=!!w.lightMap,dt=!!w.bumpMap,gt=!!w.normalMap,zt=!!w.displacementMap,He=!!w.emissiveMap,jt=!!w.metalnessMap,Ye=!!w.roughnessMap,at=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,Q=w.iridescence>0,de=w.sheen>0,ve=w.transmission>0,oe=at&&!!w.anisotropyMap,We=U&&!!w.clearcoatMap,Ue=U&&!!w.clearcoatNormalMap,Qe=U&&!!w.clearcoatRoughnessMap,Xe=Q&&!!w.iridescenceMap,ye=Q&&!!w.iridescenceThicknessMap,Me=de&&!!w.sheenColorMap,qe=de&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Ne=!!w.specularColorMap,nt=!!w.specularIntensityMap,V=ve&&!!w.transmissionMap,we=ve&&!!w.thicknessMap,Ae=!!w.gradientMap,Re=!!w.alphaMap,be=w.alphaTest>0,ge=!!w.alphaHash,Pe=!!w.extensions;let it=fs;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(it=o.toneMapping);const kt={shaderID:xe,shaderType:w.type,shaderName:w.name,vertexShader:Se,fragmentShader:Te,defines:w.defines,customVertexShaderID:Oe,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:ke,batchingColor:ke&&le._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&le.instanceColor!==null,instancingMorph:Fe&&le.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Xn,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:rn,envMap:ht,envMapMode:ht&&j.mapping,envMapCubeUVHeight:Y,aoMap:Dt,lightMap:F,bumpMap:dt,normalMap:gt,displacementMap:_&&zt,emissiveMap:He,normalMapObjectSpace:gt&&w.normalMapType===Eb,normalMapTangentSpace:gt&&w.normalMapType===iv,metalnessMap:jt,roughnessMap:Ye,anisotropy:at,anisotropyMap:oe,clearcoat:U,clearcoatMap:We,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,dispersion:T,iridescence:Q,iridescenceMap:Xe,iridescenceThicknessMap:ye,sheen:de,sheenColorMap:Me,sheenRoughnessMap:qe,specularMap:Ve,specularColorMap:Ne,specularIntensityMap:nt,transmission:ve,transmissionMap:V,thicknessMap:we,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===Fr&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:be,alphaHash:ge,combine:w.combine,mapUv:lt&&E(w.map.channel),aoMapUv:Dt&&E(w.aoMap.channel),lightMapUv:F&&E(w.lightMap.channel),bumpMapUv:dt&&E(w.bumpMap.channel),normalMapUv:gt&&E(w.normalMap.channel),displacementMapUv:zt&&E(w.displacementMap.channel),emissiveMapUv:He&&E(w.emissiveMap.channel),metalnessMapUv:jt&&E(w.metalnessMap.channel),roughnessMapUv:Ye&&E(w.roughnessMap.channel),anisotropyMapUv:oe&&E(w.anisotropyMap.channel),clearcoatMapUv:We&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&E(w.sheenRoughnessMap.channel),specularMapUv:Ve&&E(w.specularMap.channel),specularColorMapUv:Ne&&E(w.specularColorMap.channel),specularIntensityMapUv:nt&&E(w.specularIntensityMap.channel),transmissionMapUv:V&&E(w.transmissionMap.channel),thicknessMapUv:we&&E(w.thicknessMap.channel),alphaMapUv:Re&&E(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(gt||at),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!fe.attributes.uv&&(lt||Re),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:le.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===Yt,decodeVideoTextureEmissive:He&&w.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(w.emissiveMap.colorSpace)===Yt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vi,flipSided:w.side===Qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||ke)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return kt.vertexUv1s=d.has(1),kt.vertexUv2s=d.has(2),kt.vertexUv3s=d.has(3),d.clear(),kt}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(L(C,w),D(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function L(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function O(w){const C=M[w.type];let k;if(C){const ne=Hi[C];k=gM.clone(ne.uniforms)}else k=w.uniforms;return k}function H(w,C){let k;for(let ne=0,le=x.length;ne<le;ne++){const me=x[ne];if(me.cacheKey===C){k=me,++k.usedTimes;break}}return k===void 0&&(k=new TA(o,C,w,c),x.push(k)),k}function N(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function P(w){p.remove(w)}function $(){p.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:O,acquireProgram:H,releaseProgram:N,releaseShaderCache:P,programs:x,dispose:$}}function wA(){let o=new WeakMap;function e(u){return o.has(u)}function n(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function a(u){o.delete(u)}function r(u,h,p){o.get(u)[h]=p}function c(){o=new WeakMap}return{has:e,get:n,remove:a,update:r,dispose:c}}function DA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function z_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function F_(){const o=[];let e=0;const n=[],a=[],r=[];function c(){e=0,n.length=0,a.length=0,r.length=0}function u(g,_,y,M,E,b){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:b},o[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=y,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=E,v.group=b),e++,v}function h(g,_,y,M,E,b){const v=u(g,_,y,M,E,b);y.transmission>0?a.push(v):y.transparent===!0?r.push(v):n.push(v)}function p(g,_,y,M,E,b){const v=u(g,_,y,M,E,b);y.transmission>0?a.unshift(v):y.transparent===!0?r.unshift(v):n.unshift(v)}function d(g,_){n.length>1&&n.sort(g||DA),a.length>1&&a.sort(_||z_),r.length>1&&r.sort(_||z_)}function x(){for(let g=e,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:c,push:h,unshift:p,finish:x,sort:d}}function UA(){let o=new WeakMap;function e(a,r){const c=o.get(a);let u;return c===void 0?(u=new F_,o.set(a,[u])):r>=c.length?(u=new F_,c.push(u)):u=c[r],u}function n(){o=new WeakMap}return{get:e,dispose:n}}function LA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new rt};break;case"SpotLight":n={position:new K,direction:new K,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=n,n}}}function NA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let OA=0;function IA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function PA(o){const e=new LA,n=NA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new K);const r=new K,c=new mt,u=new mt;function h(d){let x=0,g=0,_=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let y=0,M=0,E=0,b=0,v=0,L=0,D=0,O=0,H=0,N=0,P=0;d.sort(IA);for(let w=0,C=d.length;w<C;w++){const k=d[w],ne=k.color,le=k.intensity,me=k.distance,fe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=ne.r*le,g+=ne.g*le,_+=ne.b*le;else if(k.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(k.sh.coefficients[z],le);P++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const j=k.shadow,Y=n.get(k);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=fe,a.directionalShadowMatrix[y]=k.shadow.matrix,L++}a.directional[y]=z,y++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(ne).multiplyScalar(le),z.distance=me,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,a.spot[E]=z;const j=k.shadow;if(k.map&&(a.spotLightMap[H]=k.map,H++,j.updateMatrices(k),k.castShadow&&N++),a.spotLightMatrix[E]=j.matrix,k.castShadow){const Y=n.get(k);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,a.spotShadow[E]=Y,a.spotShadowMap[E]=fe,O++}E++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(ne).multiplyScalar(le),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),a.rectArea[b]=z,b++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const j=k.shadow,Y=n.get(k);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,a.pointShadow[M]=Y,a.pointShadowMap[M]=fe,a.pointShadowMatrix[M]=k.shadow.matrix,D++}a.point[M]=z,M++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(le),z.groundColor.copy(k.groundColor).multiplyScalar(le),a.hemi[v]=z,v++}}b>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Le.LTC_FLOAT_1,a.rectAreaLTC2=Le.LTC_FLOAT_2):(a.rectAreaLTC1=Le.LTC_HALF_1,a.rectAreaLTC2=Le.LTC_HALF_2)),a.ambient[0]=x,a.ambient[1]=g,a.ambient[2]=_;const $=a.hash;($.directionalLength!==y||$.pointLength!==M||$.spotLength!==E||$.rectAreaLength!==b||$.hemiLength!==v||$.numDirectionalShadows!==L||$.numPointShadows!==D||$.numSpotShadows!==O||$.numSpotMaps!==H||$.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=b,a.point.length=M,a.hemi.length=v,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=O+H-N,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=P,$.directionalLength=y,$.pointLength=M,$.spotLength=E,$.rectAreaLength=b,$.hemiLength=v,$.numDirectionalShadows=L,$.numPointShadows=D,$.numSpotShadows=O,$.numSpotMaps=H,$.numLightProbes=P,a.version=OA++)}function p(d,x){let g=0,_=0,y=0,M=0,E=0;const b=x.matrixWorldInverse;for(let v=0,L=d.length;v<L;v++){const D=d[v];if(D.isDirectionalLight){const O=a.directional[g];O.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(b),g++}else if(D.isSpotLight){const O=a.spot[y];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(b),O.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(b),y++}else if(D.isRectAreaLight){const O=a.rectArea[M];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(b),u.identity(),c.copy(D.matrixWorld),c.premultiply(b),u.extractRotation(c),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const O=a.point[_];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(b),_++}else if(D.isHemisphereLight){const O=a.hemi[E];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(b),E++}}}return{setup:h,setupView:p,state:a}}function H_(o){const e=new PA(o),n=[],a=[];function r(x){d.camera=x,n.length=0,a.length=0}function c(x){n.push(x)}function u(x){a.push(x)}function h(){e.setup(n)}function p(x){e.setupView(n,x)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function BA(o){let e=new WeakMap;function n(r,c=0){const u=e.get(r);let h;return u===void 0?(h=new H_(o),e.set(r,[h])):c>=u.length?(h=new H_(o),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HA(o,e,n){let a=new Cp;const r=new Rt,c=new Rt,u=new Pt,h=new IM({depthPacking:Tb}),p=new PM,d={},x=n.maxTextureSize,g={[Ca]:Qn,[Qn]:Ca,[Vi]:Vi},_=new wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:zA,fragmentShader:FA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Li;M.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new yi(M,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q_;let v=this.type;this.render=function(N,P,$){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ne=o.state;ne.setBlending(Ea),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const le=v!==ba&&this.type===ba,me=v===ba&&this.type!==ba;for(let fe=0,z=N.length;fe<z;fe++){const j=N[fe],Y=j.shadow;if(Y===void 0){Ze("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const xe=Y.getFrameExtents();if(r.multiply(xe),c.copy(Y.mapSize),(r.x>x||r.y>x)&&(r.x>x&&(c.x=Math.floor(x/xe.x),r.x=c.x*xe.x,Y.mapSize.x=c.x),r.y>x&&(c.y=Math.floor(x/xe.y),r.y=c.y*xe.y,Y.mapSize.y=c.y)),Y.map===null||le===!0||me===!0){const I=this.type!==ba?{minFilter:Gn,magFilter:Gn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Xs(r.x,r.y,I),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const _e=Y.getViewportCount();for(let I=0;I<_e;I++){const se=Y.getViewport(I);u.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),ne.viewport(u),Y.updateMatrices(j,I),a=Y.getFrustum(),O(P,$,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===ba&&L(Y,$),Y.needsUpdate=!1}v=this.type,b.needsUpdate=!1,o.setRenderTarget(w,C,k)};function L(N,P){const $=e.update(E);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xs(r.x,r.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(P,null,$,_,E,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(P,null,$,y,E,null)}function D(N,P,$,w){let C=null;const k=$.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)C=k;else if(C=$.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ne=C.uuid,le=P.uuid;let me=d[ne];me===void 0&&(me={},d[ne]=me);let fe=me[le];fe===void 0&&(fe=C.clone(),me[le]=fe,P.addEventListener("dispose",H)),C=fe}if(C.visible=P.visible,C.wireframe=P.wireframe,w===ba?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:g[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,$.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=o.properties.get(C);ne.light=$}return C}function O(N,P,$,w,C){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===ba)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,N.matrixWorld);const le=e.update(N),me=N.material;if(Array.isArray(me)){const fe=le.groups;for(let z=0,j=fe.length;z<j;z++){const Y=fe[z],xe=me[Y.materialIndex];if(xe&&xe.visible){const _e=D(N,xe,w,C);N.onBeforeShadow(o,N,P,$,le,_e,Y),o.renderBufferDirect($,null,le,_e,N,Y),N.onAfterShadow(o,N,P,$,le,_e,Y)}}}else if(me.visible){const fe=D(N,me,w,C);N.onBeforeShadow(o,N,P,$,le,fe,null),o.renderBufferDirect($,null,le,fe,N,null),N.onAfterShadow(o,N,P,$,le,fe,null)}}const ne=N.children;for(let le=0,me=ne.length;le<me;le++)O(ne[le],P,$,w,C)}function H(N){N.target.removeEventListener("dispose",H);for(const $ in d){const w=d[$],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const VA={[Md]:Td,[Ed]:Cd,[Ad]:wd,[Gr]:Rd,[Td]:Md,[Cd]:Ed,[wd]:Ad,[Rd]:Gr};function GA(o,e){function n(){let V=!1;const we=new Pt;let Ae=null;const Re=new Pt(0,0,0,0);return{setMask:function(be){Ae!==be&&!V&&(o.colorMask(be,be,be,be),Ae=be)},setLocked:function(be){V=be},setClear:function(be,ge,Pe,it,kt){kt===!0&&(be*=it,ge*=it,Pe*=it),we.set(be,ge,Pe,it),Re.equals(we)===!1&&(o.clearColor(be,ge,Pe,it),Re.copy(we))},reset:function(){V=!1,Ae=null,Re.set(-1,0,0,0)}}}function a(){let V=!1,we=!1,Ae=null,Re=null,be=null;return{setReversed:function(ge){if(we!==ge){const Pe=e.get("EXT_clip_control");ge?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),we=ge;const it=be;be=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(ge){ge?ce(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(ge){Ae!==ge&&!V&&(o.depthMask(ge),Ae=ge)},setFunc:function(ge){if(we&&(ge=VA[ge]),Re!==ge){switch(ge){case Md:o.depthFunc(o.NEVER);break;case Td:o.depthFunc(o.ALWAYS);break;case Ed:o.depthFunc(o.LESS);break;case Gr:o.depthFunc(o.LEQUAL);break;case Ad:o.depthFunc(o.EQUAL);break;case Rd:o.depthFunc(o.GEQUAL);break;case Cd:o.depthFunc(o.GREATER);break;case wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=ge}},setLocked:function(ge){V=ge},setClear:function(ge){be!==ge&&(we&&(ge=1-ge),o.clearDepth(ge),be=ge)},reset:function(){V=!1,Ae=null,Re=null,be=null,we=!1}}}function r(){let V=!1,we=null,Ae=null,Re=null,be=null,ge=null,Pe=null,it=null,kt=null;return{setTest:function(Ut){V||(Ut?ce(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(Ut){we!==Ut&&!V&&(o.stencilMask(Ut),we=Ut)},setFunc:function(Ut,Nn,Jn){(Ae!==Ut||Re!==Nn||be!==Jn)&&(o.stencilFunc(Ut,Nn,Jn),Ae=Ut,Re=Nn,be=Jn)},setOp:function(Ut,Nn,Jn){(ge!==Ut||Pe!==Nn||it!==Jn)&&(o.stencilOp(Ut,Nn,Jn),ge=Ut,Pe=Nn,it=Jn)},setLocked:function(Ut){V=Ut},setClear:function(Ut){kt!==Ut&&(o.clearStencil(Ut),kt=Ut)},reset:function(){V=!1,we=null,Ae=null,Re=null,be=null,ge=null,Pe=null,it=null,kt=null}}}const c=new n,u=new a,h=new r,p=new WeakMap,d=new WeakMap;let x={},g={},_=new WeakMap,y=[],M=null,E=!1,b=null,v=null,L=null,D=null,O=null,H=null,N=null,P=new rt(0,0,0),$=0,w=!1,C=null,k=null,ne=null,le=null,me=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=j>=2);let xe=null,_e={};const I=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),Se=new Pt().fromArray(I),Te=new Pt().fromArray(se);function Oe(V,we,Ae,Re){const be=new Uint8Array(4),ge=o.createTexture();o.bindTexture(V,ge),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pe=0;Pe<Ae;Pe++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,Re,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(we+Pe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return ge}const ie={};ie[o.TEXTURE_2D]=Oe(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=Oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=Oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=Oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ce(o.DEPTH_TEST),u.setFunc(Gr),dt(!1),gt(Ex),ce(o.CULL_FACE),Dt(Ea);function ce(V){x[V]!==!0&&(o.enable(V),x[V]=!0)}function Ce(V){x[V]!==!1&&(o.disable(V),x[V]=!1)}function Fe(V,we){return g[V]!==we?(o.bindFramebuffer(V,we),g[V]=we,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function ke(V,we){let Ae=y,Re=!1;if(V){Ae=_.get(we),Ae===void 0&&(Ae=[],_.set(we,Ae));const be=V.textures;if(Ae.length!==be.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,Pe=be.length;ge<Pe;ge++)Ae[ge]=o.COLOR_ATTACHMENT0+ge;Ae.length=be.length,Re=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Re=!0);Re&&o.drawBuffers(Ae)}function lt(V){return M!==V?(o.useProgram(V),M=V,!0):!1}const rn={[Fs]:o.FUNC_ADD,[jS]:o.FUNC_SUBTRACT,[KS]:o.FUNC_REVERSE_SUBTRACT};rn[ZS]=o.MIN,rn[QS]=o.MAX;const ht={[JS]:o.ZERO,[$S]:o.ONE,[eb]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[rb]:o.SRC_ALPHA_SATURATE,[ab]:o.DST_COLOR,[nb]:o.DST_ALPHA,[tb]:o.ONE_MINUS_SRC_COLOR,[bd]:o.ONE_MINUS_SRC_ALPHA,[sb]:o.ONE_MINUS_DST_COLOR,[ib]:o.ONE_MINUS_DST_ALPHA,[ob]:o.CONSTANT_COLOR,[lb]:o.ONE_MINUS_CONSTANT_COLOR,[cb]:o.CONSTANT_ALPHA,[ub]:o.ONE_MINUS_CONSTANT_ALPHA};function Dt(V,we,Ae,Re,be,ge,Pe,it,kt,Ut){if(V===Ea){E===!0&&(Ce(o.BLEND),E=!1);return}if(E===!1&&(ce(o.BLEND),E=!0),V!==YS){if(V!==b||Ut!==w){if((v!==Fs||O!==Fs)&&(o.blendEquation(o.FUNC_ADD),v=Fs,O=Fs),Ut)switch(V){case Fr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ax:o.blendFunc(o.ONE,o.ONE);break;case Rx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:vt("WebGLState: Invalid blending: ",V);break}else switch(V){case Fr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ax:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Rx:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cx:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",V);break}L=null,D=null,H=null,N=null,P.set(0,0,0),$=0,b=V,w=Ut}return}be=be||we,ge=ge||Ae,Pe=Pe||Re,(we!==v||be!==O)&&(o.blendEquationSeparate(rn[we],rn[be]),v=we,O=be),(Ae!==L||Re!==D||ge!==H||Pe!==N)&&(o.blendFuncSeparate(ht[Ae],ht[Re],ht[ge],ht[Pe]),L=Ae,D=Re,H=ge,N=Pe),(it.equals(P)===!1||kt!==$)&&(o.blendColor(it.r,it.g,it.b,kt),P.copy(it),$=kt),b=V,w=!1}function F(V,we){V.side===Vi?Ce(o.CULL_FACE):ce(o.CULL_FACE);let Ae=V.side===Qn;we&&(Ae=!Ae),dt(Ae),V.blending===Fr&&V.transparent===!1?Dt(Ea):Dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Re=V.stencilWrite;h.setTest(Re),Re&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),He(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function gt(V){V!==XS?(ce(o.CULL_FACE),V!==k&&(V===Ex?o.cullFace(o.BACK):V===WS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),k=V}function zt(V){V!==ne&&(z&&o.lineWidth(V),ne=V)}function He(V,we,Ae){V?(ce(o.POLYGON_OFFSET_FILL),(le!==we||me!==Ae)&&(o.polygonOffset(we,Ae),le=we,me=Ae)):Ce(o.POLYGON_OFFSET_FILL)}function jt(V){V?ce(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=o.TEXTURE0+fe-1),xe!==V&&(o.activeTexture(V),xe=V)}function at(V,we,Ae){Ae===void 0&&(xe===null?Ae=o.TEXTURE0+fe-1:Ae=xe);let Re=_e[Ae];Re===void 0&&(Re={type:void 0,texture:void 0},_e[Ae]=Re),(Re.type!==V||Re.texture!==we)&&(xe!==Ae&&(o.activeTexture(Ae),xe=Ae),o.bindTexture(V,we||ie[V]),Re.type=V,Re.texture=we)}function U(){const V=_e[xe];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function de(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ve(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function We(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ue(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Qe(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Xe(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ye(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Me(V){Se.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Se.copy(V))}function qe(V){Te.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Te.copy(V))}function Ve(V,we){let Ae=d.get(we);Ae===void 0&&(Ae=new WeakMap,d.set(we,Ae));let Re=Ae.get(V);Re===void 0&&(Re=o.getUniformBlockIndex(we,V.name),Ae.set(V,Re))}function Ne(V,we){const Re=d.get(we).get(V);p.get(we)!==Re&&(o.uniformBlockBinding(we,Re,V.__bindingPointIndex),p.set(we,Re))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},xe=null,_e={},g={},_=new WeakMap,y=[],M=null,E=!1,b=null,v=null,L=null,D=null,O=null,H=null,N=null,P=new rt(0,0,0),$=0,w=!1,C=null,k=null,ne=null,le=null,me=null,Se.set(0,0,o.canvas.width,o.canvas.height),Te.set(0,0,o.canvas.width,o.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ce,disable:Ce,bindFramebuffer:Fe,drawBuffers:ke,useProgram:lt,setBlending:Dt,setMaterial:F,setFlipSided:dt,setCullFace:gt,setLineWidth:zt,setPolygonOffset:He,setScissorTest:jt,activeTexture:Ye,bindTexture:at,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:Xe,texImage3D:ye,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:Ue,texStorage3D:Qe,texSubImage2D:de,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:We,scissor:Me,viewport:qe,reset:nt}}function kA(o,e,n,a,r,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Rt,x=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,T){return y?new OffscreenCanvas(U,T):yl("canvas")}function E(U,T,Q){let de=1;const ve=at(U);if((ve.width>Q||ve.height>Q)&&(de=Q/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const oe=Math.floor(de*ve.width),We=Math.floor(de*ve.height);g===void 0&&(g=M(oe,We));const Ue=T?M(oe,We):g;return Ue.width=oe,Ue.height=We,Ue.getContext("2d").drawImage(U,0,0,oe,We),Ze("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+oe+"x"+We+")."),Ue}else return"data"in U&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),U;return U}function b(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(U,T,Q,de,ve=!1){if(U!==null){if(o[U]!==void 0)return o[U];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let oe=T;if(T===o.RED&&(Q===o.FLOAT&&(oe=o.R32F),Q===o.HALF_FLOAT&&(oe=o.R16F),Q===o.UNSIGNED_BYTE&&(oe=o.R8)),T===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(oe=o.R8UI),Q===o.UNSIGNED_SHORT&&(oe=o.R16UI),Q===o.UNSIGNED_INT&&(oe=o.R32UI),Q===o.BYTE&&(oe=o.R8I),Q===o.SHORT&&(oe=o.R16I),Q===o.INT&&(oe=o.R32I)),T===o.RG&&(Q===o.FLOAT&&(oe=o.RG32F),Q===o.HALF_FLOAT&&(oe=o.RG16F),Q===o.UNSIGNED_BYTE&&(oe=o.RG8)),T===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(oe=o.RG8UI),Q===o.UNSIGNED_SHORT&&(oe=o.RG16UI),Q===o.UNSIGNED_INT&&(oe=o.RG32UI),Q===o.BYTE&&(oe=o.RG8I),Q===o.SHORT&&(oe=o.RG16I),Q===o.INT&&(oe=o.RG32I)),T===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(oe=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(oe=o.RGB16UI),Q===o.UNSIGNED_INT&&(oe=o.RGB32UI),Q===o.BYTE&&(oe=o.RGB8I),Q===o.SHORT&&(oe=o.RGB16I),Q===o.INT&&(oe=o.RGB32I)),T===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(oe=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(oe=o.RGBA16UI),Q===o.UNSIGNED_INT&&(oe=o.RGBA32UI),Q===o.BYTE&&(oe=o.RGBA8I),Q===o.SHORT&&(oe=o.RGBA16I),Q===o.INT&&(oe=o.RGBA32I)),T===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(oe=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(oe=o.R11F_G11F_B10F)),T===o.RGBA){const We=ve?pu:Ct.getTransfer(de);Q===o.FLOAT&&(oe=o.RGBA32F),Q===o.HALF_FLOAT&&(oe=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(oe=We===Yt?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(oe=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(oe=o.RGB5_A1)}return(oe===o.R16F||oe===o.R32F||oe===o.RG16F||oe===o.RG32F||oe===o.RGBA16F||oe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function O(U,T){let Q;return U?T===null||T===ks||T===ml?Q=o.DEPTH24_STENCIL8:T===Di?Q=o.DEPTH32F_STENCIL8:T===pl&&(Q=o.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ks||T===ml?Q=o.DEPTH_COMPONENT24:T===Di?Q=o.DEPTH_COMPONENT32F:T===pl&&(Q=o.DEPTH_COMPONENT16),Q}function H(U,T){return b(U)===!0||U.isFramebufferTexture&&U.minFilter!==Gn&&U.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function N(U){const T=U.target;T.removeEventListener("dispose",N),$(T),T.isVideoTexture&&x.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),C(T)}function $(U){const T=a.get(U);if(T.__webglInit===void 0)return;const Q=U.source,de=_.get(Q);if(de){const ve=de[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(U),Object.keys(de).length===0&&_.delete(Q)}a.remove(U)}function w(U){const T=a.get(U);o.deleteTexture(T.__webglTexture);const Q=U.source,de=_.get(Q);delete de[T.__cacheKey],u.memory.textures--}function C(U){const T=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let ve=0;ve<T.__webglFramebuffer[de].length;ve++)o.deleteFramebuffer(T.__webglFramebuffer[de][ve]);else o.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)o.deleteFramebuffer(T.__webglFramebuffer[de]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=U.textures;for(let de=0,ve=Q.length;de<ve;de++){const oe=a.get(Q[de]);oe.__webglTexture&&(o.deleteTexture(oe.__webglTexture),u.memory.textures--),a.remove(Q[de])}a.remove(U)}let k=0;function ne(){k=0}function le(){const U=k;return U>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),k+=1,U}function me(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function fe(U,T){const Q=a.get(U);if(U.isVideoTexture&&jt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const de=U.image;if(de===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Q,U,T);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+T)}function z(U,T){const Q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){ie(Q,U,T);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+T)}function j(U,T){const Q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){ie(Q,U,T);return}n.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+T)}function Y(U,T){const Q=a.get(U);if(U.version>0&&Q.__version!==U.version){ce(Q,U,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+T)}const xe={[Wr]:o.REPEAT,[Gi]:o.CLAMP_TO_EDGE,[du]:o.MIRRORED_REPEAT},_e={[Gn]:o.NEAREST,[K_]:o.NEAREST_MIPMAP_NEAREST,[ll]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[ou]:o.LINEAR_MIPMAP_NEAREST,[Ma]:o.LINEAR_MIPMAP_LINEAR},I={[Ab]:o.NEVER,[Lb]:o.ALWAYS,[Rb]:o.LESS,[av]:o.LEQUAL,[Cb]:o.EQUAL,[Ub]:o.GEQUAL,[wb]:o.GREATER,[Db]:o.NOTEQUAL};function se(U,T){if(T.type===Di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===ou||T.magFilter===ll||T.magFilter===Ma||T.minFilter===Vn||T.minFilter===ou||T.minFilter===ll||T.minFilter===Ma)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xe[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xe[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xe[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,_e[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,_e[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gn||T.minFilter!==ll&&T.minFilter!==Ma||T.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Se(U,T){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",N));const de=T.source;let ve=_.get(de);ve===void 0&&(ve={},_.set(de,ve));const oe=me(T);if(oe!==U.__cacheKey){ve[oe]===void 0&&(ve[oe]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ve[oe].usedTimes++;const We=ve[U.__cacheKey];We!==void 0&&(ve[U.__cacheKey].usedTimes--,We.usedTimes===0&&w(T)),U.__cacheKey=oe,U.__webglTexture=ve[oe].texture}return Q}function Te(U,T,Q){return Math.floor(Math.floor(U/Q)/T)}function Oe(U,T,Q,de){const oe=U.updateRanges;if(oe.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,Q,de,T.data);else{oe.sort((ye,Me)=>ye.start-Me.start);let We=0;for(let ye=1;ye<oe.length;ye++){const Me=oe[We],qe=oe[ye],Ve=Me.start+Me.count,Ne=Te(qe.start,T.width,4),nt=Te(Me.start,T.width,4);qe.start<=Ve+1&&Ne===nt&&Te(qe.start+qe.count-1,T.width,4)===Ne?Me.count=Math.max(Me.count,qe.start+qe.count-Me.start):(++We,oe[We]=qe)}oe.length=We+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),Xe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ye=0,Me=oe.length;ye<Me;ye++){const qe=oe[ye],Ve=Math.floor(qe.start/4),Ne=Math.ceil(qe.count/4),nt=Ve%T.width,V=Math.floor(Ve/T.width),we=Ne,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),n.texSubImage2D(o.TEXTURE_2D,0,nt,V,we,Ae,Q,de,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xe)}}function ie(U,T,Q){let de=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=o.TEXTURE_3D);const ve=Se(U,T),oe=T.source;n.bindTexture(de,U.__webglTexture,o.TEXTURE0+Q);const We=a.get(oe);if(oe.version!==We.__version||ve===!0){n.activeTexture(o.TEXTURE0+Q);const Ue=Ct.getPrimaries(Ct.workingColorSpace),Qe=T.colorSpace===cs?null:Ct.getPrimaries(T.colorSpace),Xe=T.colorSpace===cs||Ue===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ye=E(T.image,!1,r.maxTextureSize);ye=Ye(T,ye);const Me=c.convert(T.format,T.colorSpace),qe=c.convert(T.type);let Ve=D(T.internalFormat,Me,qe,T.colorSpace,T.isVideoTexture);se(de,T);let Ne;const nt=T.mipmaps,V=T.isVideoTexture!==!0,we=We.__version===void 0||ve===!0,Ae=oe.dataReady,Re=H(T,ye);if(T.isDepthTexture)Ve=O(T.format===xl,T.type),we&&(V?n.texStorage2D(o.TEXTURE_2D,1,Ve,ye.width,ye.height):n.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Me,qe,null));else if(T.isDataTexture)if(nt.length>0){V&&we&&n.texStorage2D(o.TEXTURE_2D,Re,Ve,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Ne=nt[be],V?Ae&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Me,qe,Ne.data):n.texImage2D(o.TEXTURE_2D,be,Ve,Ne.width,Ne.height,0,Me,qe,Ne.data);T.generateMipmaps=!1}else V?(we&&n.texStorage2D(o.TEXTURE_2D,Re,Ve,ye.width,ye.height),Ae&&Oe(T,ye,Me,qe)):n.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Me,qe,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&we&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ve,nt[0].width,nt[0].height,ye.depth);for(let be=0,ge=nt.length;be<ge;be++)if(Ne=nt[be],T.format!==vi)if(Me!==null)if(V){if(Ae)if(T.layerUpdates.size>0){const Pe=x_(Ne.width,Ne.height,T.format,T.type);for(const it of T.layerUpdates){const kt=Ne.data.subarray(it*Pe/Ne.data.BYTES_PER_ELEMENT,(it+1)*Pe/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,it,Ne.width,Ne.height,1,Me,kt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,ye.depth,Me,Ne.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,Ve,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ae&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,ye.depth,Me,qe,Ne.data):n.texImage3D(o.TEXTURE_2D_ARRAY,be,Ve,Ne.width,Ne.height,ye.depth,0,Me,qe,Ne.data)}else{V&&we&&n.texStorage2D(o.TEXTURE_2D,Re,Ve,nt[0].width,nt[0].height);for(let be=0,ge=nt.length;be<ge;be++)Ne=nt[be],T.format!==vi?Me!==null?V?Ae&&n.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Me,Ne.data):n.compressedTexImage2D(o.TEXTURE_2D,be,Ve,Ne.width,Ne.height,0,Ne.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ae&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Me,qe,Ne.data):n.texImage2D(o.TEXTURE_2D,be,Ve,Ne.width,Ne.height,0,Me,qe,Ne.data)}else if(T.isDataArrayTexture)if(V){if(we&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ve,ye.width,ye.height,ye.depth),Ae)if(T.layerUpdates.size>0){const be=x_(ye.width,ye.height,T.format,T.type);for(const ge of T.layerUpdates){const Pe=ye.data.subarray(ge*be/ye.data.BYTES_PER_ELEMENT,(ge+1)*be/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Me,qe,Pe)}T.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Me,qe,ye.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,Me,qe,ye.data);else if(T.isData3DTexture)V?(we&&n.texStorage3D(o.TEXTURE_3D,Re,Ve,ye.width,ye.height,ye.depth),Ae&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Me,qe,ye.data)):n.texImage3D(o.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,Me,qe,ye.data);else if(T.isFramebufferTexture){if(we)if(V)n.texStorage2D(o.TEXTURE_2D,Re,Ve,ye.width,ye.height);else{let be=ye.width,ge=ye.height;for(let Pe=0;Pe<Re;Pe++)n.texImage2D(o.TEXTURE_2D,Pe,Ve,be,ge,0,Me,qe,null),be>>=1,ge>>=1}}else if(nt.length>0){if(V&&we){const be=at(nt[0]);n.texStorage2D(o.TEXTURE_2D,Re,Ve,be.width,be.height)}for(let be=0,ge=nt.length;be<ge;be++)Ne=nt[be],V?Ae&&n.texSubImage2D(o.TEXTURE_2D,be,0,0,Me,qe,Ne):n.texImage2D(o.TEXTURE_2D,be,Ve,Me,qe,Ne);T.generateMipmaps=!1}else if(V){if(we){const be=at(ye);n.texStorage2D(o.TEXTURE_2D,Re,Ve,be.width,be.height)}Ae&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me,qe,ye)}else n.texImage2D(o.TEXTURE_2D,0,Ve,Me,qe,ye);b(T)&&v(de),We.__version=oe.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ce(U,T,Q){if(T.image.length!==6)return;const de=Se(U,T),ve=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Q);const oe=a.get(ve);if(ve.version!==oe.__version||de===!0){n.activeTexture(o.TEXTURE0+Q);const We=Ct.getPrimaries(Ct.workingColorSpace),Ue=T.colorSpace===cs?null:Ct.getPrimaries(T.colorSpace),Qe=T.colorSpace===cs||We===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let ge=0;ge<6;ge++)!Xe&&!ye?Me[ge]=E(T.image[ge],!0,r.maxCubemapSize):Me[ge]=ye?T.image[ge].image:T.image[ge],Me[ge]=Ye(T,Me[ge]);const qe=Me[0],Ve=c.convert(T.format,T.colorSpace),Ne=c.convert(T.type),nt=D(T.internalFormat,Ve,Ne,T.colorSpace),V=T.isVideoTexture!==!0,we=oe.__version===void 0||de===!0,Ae=ve.dataReady;let Re=H(T,qe);se(o.TEXTURE_CUBE_MAP,T);let be;if(Xe){V&&we&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,qe.width,qe.height);for(let ge=0;ge<6;ge++){be=Me[ge].mipmaps;for(let Pe=0;Pe<be.length;Pe++){const it=be[Pe];T.format!==vi?Ve!==null?V?Ae&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,it.width,it.height,Ve,it.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,nt,it.width,it.height,0,it.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,it.width,it.height,Ve,Ne,it.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,nt,it.width,it.height,0,Ve,Ne,it.data)}}}else{if(be=T.mipmaps,V&&we){be.length>0&&Re++;const ge=at(Me[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){V?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Me[ge].width,Me[ge].height,Ve,Ne,Me[ge].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Me[ge].width,Me[ge].height,0,Ve,Ne,Me[ge].data);for(let Pe=0;Pe<be.length;Pe++){const kt=be[Pe].image[ge].image;V?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,kt.width,kt.height,Ve,Ne,kt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,nt,kt.width,kt.height,0,Ve,Ne,kt.data)}}else{V?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve,Ne,Me[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,nt,Ve,Ne,Me[ge]);for(let Pe=0;Pe<be.length;Pe++){const it=be[Pe];V?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,Ve,Ne,it.image[ge]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,nt,Ve,Ne,it.image[ge])}}}b(T)&&v(o.TEXTURE_CUBE_MAP),oe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Ce(U,T,Q,de,ve,oe){const We=c.convert(Q.format,Q.colorSpace),Ue=c.convert(Q.type),Qe=D(Q.internalFormat,We,Ue,Q.colorSpace),Xe=a.get(T),ye=a.get(Q);if(ye.__renderTarget=T,!Xe.__hasExternalTextures){const Me=Math.max(1,T.width>>oe),qe=Math.max(1,T.height>>oe);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?n.texImage3D(ve,oe,Qe,Me,qe,T.depth,0,We,Ue,null):n.texImage2D(ve,oe,Qe,Me,qe,0,We,Ue,null)}n.bindFramebuffer(o.FRAMEBUFFER,U),He(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,ve,ye.__webglTexture,0,zt(T)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,ve,ye.__webglTexture,oe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(U,T,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const de=T.depthTexture,ve=de&&de.isDepthTexture?de.type:null,oe=O(T.stencilBuffer,ve),We=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=zt(T);He(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue,oe,T.width,T.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue,oe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,oe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,U)}else{const de=T.textures;for(let ve=0;ve<de.length;ve++){const oe=de[ve],We=c.convert(oe.format,oe.colorSpace),Ue=c.convert(oe.type),Qe=D(oe.internalFormat,We,Ue,oe.colorSpace),Xe=zt(T);Q&&He(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,Qe,T.width,T.height):He(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe,Qe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ke(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=a.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ve=de.__webglTexture,oe=zt(T);if(T.depthTexture.format===gl)He(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(T.depthTexture.format===xl)He(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function lt(U){const T=a.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const de=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=de}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const de=U.texture.mipmaps;de&&de.length>0?ke(T.__webglFramebuffer[0],U):ke(T.__webglFramebuffer,U)}else if(Q){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=o.createRenderbuffer(),Fe(T.__webglDepthbuffer[de],U,!1);else{const ve=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,oe)}}else{const de=U.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Fe(T.__webglDepthbuffer,U,!1);else{const ve=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,oe)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function rn(U,T,Q){const de=a.get(U);T!==void 0&&Ce(de.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&lt(U)}function ht(U){const T=U.texture,Q=a.get(U),de=a.get(T);U.addEventListener("dispose",P);const ve=U.textures,oe=U.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=T.version,u.memory.textures++),oe){Q.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ue]=[];for(let Qe=0;Qe<T.mipmaps.length;Qe++)Q.__webglFramebuffer[Ue][Qe]=o.createFramebuffer()}else Q.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)Q.__webglFramebuffer[Ue]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(We)for(let Ue=0,Qe=ve.length;Ue<Qe;Ue++){const Xe=a.get(ve[Ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=o.createTexture(),u.memory.textures++)}if(U.samples>0&&He(U)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ve.length;Ue++){const Qe=ve[Ue];Q.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ue]);const Xe=c.convert(Qe.format,Qe.colorSpace),ye=c.convert(Qe.type),Me=D(Qe.internalFormat,Xe,ye,Qe.colorSpace,U.isXRRenderTarget===!0),qe=zt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Me,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(Q.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(oe){n.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),se(o.TEXTURE_CUBE_MAP,T);for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)Ce(Q.__webglFramebuffer[Ue][Qe],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe);else Ce(Q.__webglFramebuffer[Ue],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);b(T)&&v(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Ue=0,Qe=ve.length;Ue<Qe;Ue++){const Xe=ve[Ue],ye=a.get(Xe);let Me=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Me,ye.__webglTexture),se(Me,Xe),Ce(Q.__webglFramebuffer,U,Xe,o.COLOR_ATTACHMENT0+Ue,Me,0),b(Xe)&&v(Me)}n.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ue,de.__webglTexture),se(Ue,T),T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)Ce(Q.__webglFramebuffer[Qe],U,T,o.COLOR_ATTACHMENT0,Ue,Qe);else Ce(Q.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ue,0);b(T)&&v(Ue),n.unbindTexture()}U.depthBuffer&&lt(U)}function Dt(U){const T=U.textures;for(let Q=0,de=T.length;Q<de;Q++){const ve=T[Q];if(b(ve)){const oe=L(U),We=a.get(ve).__webglTexture;n.bindTexture(oe,We),v(oe),n.unbindTexture()}}}const F=[],dt=[];function gt(U){if(U.samples>0){if(He(U)===!1){const T=U.textures,Q=U.width,de=U.height;let ve=o.COLOR_BUFFER_BIT;const oe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=a.get(U),Ue=T.length>1;if(Ue)for(let Xe=0;Xe<T.length;Xe++)n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Qe=U.texture.mipmaps;Qe&&Qe.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Xe=0;Xe<T.length;Xe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Xe]);const ye=a.get(T[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,Q,de,0,0,Q,de,ve,o.NEAREST),p===!0&&(F.length=0,dt.length=0,F.push(o.COLOR_ATTACHMENT0+Xe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(F.push(oe),dt.push(oe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,dt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let Xe=0;Xe<T.length;Xe++){n.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,We.__webglColorRenderbuffer[Xe]);const ye=a.get(T[Xe]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,ye,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function zt(U){return Math.min(r.maxSamples,U.samples)}function He(U){const T=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(U){const T=u.render.frame;x.get(U)!==T&&(x.set(U,T),U.update())}function Ye(U,T){const Q=U.colorSpace,de=U.format,ve=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Xn&&Q!==cs&&(Ct.getTransfer(Q)===Yt?(de!==vi||ve!==Wi)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",Q)),T}function at(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=le,this.resetTextureUnits=ne,this.setTexture2D=fe,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=rn,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=He}function XA(o,e){function n(a,r=cs){let c;const u=Ct.getTransfer(r);if(a===Wi)return o.UNSIGNED_BYTE;if(a===gp)return o.UNSIGNED_SHORT_4_4_4_4;if(a===xp)return o.UNSIGNED_SHORT_5_5_5_1;if(a===J_)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===$_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Z_)return o.BYTE;if(a===Q_)return o.SHORT;if(a===pl)return o.UNSIGNED_SHORT;if(a===mp)return o.INT;if(a===ks)return o.UNSIGNED_INT;if(a===Di)return o.FLOAT;if(a===Qr)return o.HALF_FLOAT;if(a===ev)return o.ALPHA;if(a===tv)return o.RGB;if(a===vi)return o.RGBA;if(a===gl)return o.DEPTH_COMPONENT;if(a===xl)return o.DEPTH_STENCIL;if(a===_p)return o.RED;if(a===vp)return o.RED_INTEGER;if(a===yp)return o.RG;if(a===Sp)return o.RG_INTEGER;if(a===bp)return o.RGBA_INTEGER;if(a===lu||a===cu||a===uu||a===fu)if(u===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ld||a===Nd||a===Od||a===Id)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Id)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Pd||a===Bd||a===zd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Pd||a===Bd)return u===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===zd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Fd||a===Hd||a===Vd||a===Gd||a===kd||a===Xd||a===Wd||a===qd||a===Yd||a===jd||a===Kd||a===Zd||a===Qd||a===Jd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Fd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Vd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===kd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Wd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===qd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Yd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===jd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Kd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Zd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Qd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Jd)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$d||a===ep||a===tp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===$d)return u===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===tp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===np||a===ip||a===ap||a===sp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===np)return c.COMPRESSED_RED_RGTC1_EXT;if(a===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ml?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new _v(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new wa({vertexShader:WA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yi(new Su(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Jr{constructor(e,n){super();const a=this;let r=null,c=1,u=null,h="local-floor",p=1,d=null,x=null,g=null,_=null,y=null,M=null;const E=typeof XRWebGLBinding<"u",b=new YA,v={},L=n.getContextAttributes();let D=null,O=null;const H=[],N=[],P=new Rt;let $=null;const w=new Hn;w.viewport=new Pt;const C=new Hn;C.viewport=new Pt;const k=[w,C],ne=new aT;let le=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=H[ie];return ce===void 0&&(ce=new sd,H[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=H[ie];return ce===void 0&&(ce=new sd,H[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=H[ie];return ce===void 0&&(ce=new sd,H[ie]=ce),ce.getHandSpace()};function fe(ie){const ce=N.indexOf(ie.inputSource);if(ce===-1)return;const Ce=H[ce];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,d||u),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let ie=0;ie<H.length;ie++){const ce=N[ie];ce!==null&&(N[ie]=null,H[ie].disconnect(ce))}le=null,me=null,b.reset();for(const ie in v)delete v[ie];e.setRenderTarget(D),y=null,_=null,g=null,r=null,O=null,Oe.stop(),a.isPresenting=!1,e.setPixelRatio($),e.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,a.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,a.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),L.xrCompatible!==!0&&await n.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Fe=null,ke=null;L.depth&&(ke=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=L.stencil?xl:gl,Fe=L.stencil?ml:ks);const lt={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(lt),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Xs(_.textureWidth,_.textureHeight,{format:vi,type:Wi,depthTexture:new xv(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ce={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(r,n,Ce),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Xs(y.framebufferWidth,y.framebufferHeight,{format:vi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(h),Oe.setContext(r),Oe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(ie){for(let ce=0;ce<ie.removed.length;ce++){const Ce=ie.removed[ce],Fe=N.indexOf(Ce);Fe>=0&&(N[Fe]=null,H[Fe].disconnect(Ce))}for(let ce=0;ce<ie.added.length;ce++){const Ce=ie.added[ce];let Fe=N.indexOf(Ce);if(Fe===-1){for(let lt=0;lt<H.length;lt++)if(lt>=N.length){N.push(Ce),Fe=lt;break}else if(N[lt]===null){N[lt]=Ce,Fe=lt;break}if(Fe===-1)break}const ke=H[Fe];ke&&ke.connect(Ce)}}const Y=new K,xe=new K;function _e(ie,ce,Ce){Y.setFromMatrixPosition(ce.matrixWorld),xe.setFromMatrixPosition(Ce.matrixWorld);const Fe=Y.distanceTo(xe),ke=ce.projectionMatrix.elements,lt=Ce.projectionMatrix.elements,rn=ke[14]/(ke[10]-1),ht=ke[14]/(ke[10]+1),Dt=(ke[9]+1)/ke[5],F=(ke[9]-1)/ke[5],dt=(ke[8]-1)/ke[0],gt=(lt[8]+1)/lt[0],zt=rn*dt,He=rn*gt,jt=Fe/(-dt+gt),Ye=jt*-dt;if(ce.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ye),ie.translateZ(jt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ke[10]===-1)ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const at=rn+jt,U=ht+jt,T=zt-Ye,Q=He+(Fe-Ye),de=Dt*ht/U*at,ve=F*ht/U*at;ie.projectionMatrix.makePerspective(T,Q,de,ve,at,U),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function I(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ce=ie.near,Ce=ie.far;b.texture!==null&&(b.depthNear>0&&(ce=b.depthNear),b.depthFar>0&&(Ce=b.depthFar)),ne.near=C.near=w.near=ce,ne.far=C.far=w.far=Ce,(le!==ne.near||me!==ne.far)&&(r.updateRenderState({depthNear:ne.near,depthFar:ne.far}),le=ne.near,me=ne.far),ne.layers.mask=ie.layers.mask|6,w.layers.mask=ne.layers.mask&3,C.layers.mask=ne.layers.mask&5;const Fe=ie.parent,ke=ne.cameras;I(ne,Fe);for(let lt=0;lt<ke.length;lt++)I(ke[lt],Fe);ke.length===2?_e(ne,w,C):ne.projectionMatrix.copy(w.projectionMatrix),se(ie,ne,Fe)};function se(ie,ce,Ce){Ce===null?ie.matrix.copy(ce.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ce.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=qr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(ie){p=ie,_!==null&&(_.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ne)},this.getCameraTexture=function(ie){return v[ie]};let Se=null;function Te(ie,ce){if(x=ce.getViewerPose(d||u),M=ce,x!==null){const Ce=x.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Fe=!1;Ce.length!==ne.cameras.length&&(ne.cameras.length=0,Fe=!0);for(let ht=0;ht<Ce.length;ht++){const Dt=Ce[ht];let F=null;if(y!==null)F=y.getViewport(Dt);else{const gt=g.getViewSubImage(_,Dt);F=gt.viewport,ht===0&&(e.setRenderTargetTextures(O,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(O))}let dt=k[ht];dt===void 0&&(dt=new Hn,dt.layers.enable(ht),dt.viewport=new Pt,k[ht]=dt),dt.matrix.fromArray(Dt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Dt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(F.x,F.y,F.width,F.height),ht===0&&(ne.matrix.copy(dt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Fe===!0&&ne.cameras.push(dt)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const ht=g.getDepthInformation(Ce[0]);ht&&ht.isValid&&ht.texture&&b.init(ht,r.renderState)}if(ke&&ke.includes("camera-access")&&E){e.state.unbindTexture(),g=a.getBinding();for(let ht=0;ht<Ce.length;ht++){const Dt=Ce[ht].camera;if(Dt){let F=v[Dt];F||(F=new _v,v[Dt]=F);const dt=g.getCameraImage(Dt);F.sourceTexture=dt}}}}for(let Ce=0;Ce<H.length;Ce++){const Fe=N[Ce],ke=H[Ce];Fe!==null&&ke!==void 0&&ke.update(Fe,ce,d||u)}Se&&Se(ie,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Oe=new Mv;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}}const Ps=new qi,KA=new mt;function ZA(o,e){function n(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function a(b,v){v.color.getRGB(b.fogColor.value,fv(o)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function r(b,v,L,D,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(b,v):v.isMeshToonMaterial?(c(b,v),g(b,v)):v.isMeshPhongMaterial?(c(b,v),x(b,v)):v.isMeshStandardMaterial?(c(b,v),_(b,v),v.isMeshPhysicalMaterial&&y(b,v,O)):v.isMeshMatcapMaterial?(c(b,v),M(b,v)):v.isMeshDepthMaterial?c(b,v):v.isMeshDistanceMaterial?(c(b,v),E(b,v)):v.isMeshNormalMaterial?c(b,v):v.isLineBasicMaterial?(u(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?p(b,v,L,D):v.isSpriteMaterial?d(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,n(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,n(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,n(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===Qn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,n(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===Qn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,n(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,n(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,O=L.envMapRotation;D&&(b.envMap.value=D,Ps.copy(O),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),b.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(Ps)),b.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,b.aoMapTransform))}function u(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,n(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function p(b,v,L,D){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*L,b.scale.value=D*.5,v.map&&(b.map.value=v.map,n(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,n(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,n(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,n(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function x(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function g(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function _(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function y(b,v,L){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,b.specularIntensityMapTransform))}function M(b,v){v.matcap&&(b.matcap.value=v.matcap)}function E(b,v){const L=e.get(v).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function QA(o,e,n,a){let r={},c={},u=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,D){const O=D.program;a.uniformBlockBinding(L,O)}function d(L,D){let O=r[L.id];O===void 0&&(M(L),O=x(L),r[L.id]=O,L.addEventListener("dispose",b));const H=D.program;a.updateUBOMapping(L,H);const N=e.render.frame;c[L.id]!==N&&(_(L),c[L.id]=N)}function x(L){const D=g();L.__bindingPointIndex=D;const O=o.createBuffer(),H=L.__size,N=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,H,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,O),O}function g(){for(let L=0;L<h;L++)if(u.indexOf(L)===-1)return u.push(L),L;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const D=r[L.id],O=L.uniforms,H=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let N=0,P=O.length;N<P;N++){const $=Array.isArray(O[N])?O[N]:[O[N]];for(let w=0,C=$.length;w<C;w++){const k=$[w];if(y(k,N,w,H)===!0){const ne=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let fe=0;fe<le.length;fe++){const z=le[fe],j=E(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ne+me,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,me),me+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ne,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,D,O,H){const N=L.value,P=D+"_"+O;if(H[P]===void 0)return typeof N=="number"||typeof N=="boolean"?H[P]=N:H[P]=N.clone(),!0;{const $=H[P];if(typeof N=="number"||typeof N=="boolean"){if($!==N)return H[P]=N,!0}else if($.equals(N)===!1)return $.copy(N),!0}return!1}function M(L){const D=L.uniforms;let O=0;const H=16;for(let P=0,$=D.length;P<$;P++){const w=Array.isArray(D[P])?D[P]:[D[P]];for(let C=0,k=w.length;C<k;C++){const ne=w[C],le=Array.isArray(ne.value)?ne.value:[ne.value];for(let me=0,fe=le.length;me<fe;me++){const z=le[me],j=E(z),Y=O%H,xe=Y%j.boundary,_e=Y+xe;O+=xe,_e!==0&&H-_e<j.storage&&(O+=H-_e),ne.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=O,O+=j.storage}}}const N=O%H;return N>0&&(O+=H-N),L.__size=O,L.__cache={},this}function E(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",L),D}function b(L){const D=L.target;D.removeEventListener("dispose",b);const O=u.indexOf(D.__bindingPointIndex);u.splice(O,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete c[D.id]}function v(){for(const L in r)o.deleteBuffer(r[L]);u=[],r={},c={}}return{bind:p,update:d,dispose:v}}const JA=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Sa=null;function $A(){return Sa===null&&(Sa=new Ap(JA,32,32,yp,Qr),Sa.minFilter=Vn,Sa.magFilter=Vn,Sa.wrapS=Gi,Sa.wrapT=Gi,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class e2{constructor(e={}){const{canvas:n=Nb(),context:a=null,depth:r=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const M=new Set([bp,Sp,vp]),E=new Set([Wi,ks,pl,ml,gp,xp]),b=new Uint32Array(4),v=new Int32Array(4);let L=null,D=null;const O=[],H=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1;this._outputColorSpace=Ln;let $=0,w=0,C=null,k=-1,ne=null;const le=new Pt,me=new Pt;let fe=null;const z=new rt(0);let j=0,Y=n.width,xe=n.height,_e=1,I=null,se=null;const Se=new Pt(0,0,Y,xe),Te=new Pt(0,0,Y,xe);let Oe=!1;const ie=new Cp;let ce=!1,Ce=!1;const Fe=new mt,ke=new K,lt=new Pt,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Dt(){return C===null?_e:1}let F=a;function dt(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:r,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pp}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),F===null){const X="webgl2";if(F=dt(X,R),F===null)throw dt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let gt,zt,He,jt,Ye,at,U,T,Q,de,ve,oe,We,Ue,Qe,Xe,ye,Me,qe,Ve,Ne,nt,V,we;function Ae(){gt=new l3(F),gt.init(),nt=new XA(F,gt),zt=new $1(F,gt,e,nt),He=new GA(F,gt),zt.reversedDepthBuffer&&_&&He.buffers.depth.setReversed(!0),jt=new f3(F),Ye=new wA,at=new kA(F,gt,He,Ye,zt,nt,jt),U=new t3(N),T=new o3(N),Q=new mT(F),V=new Q1(F,Q),de=new c3(F,Q,jt,V),ve=new d3(F,de,Q,jt),qe=new h3(F,zt,at),Xe=new e3(Ye),oe=new CA(N,U,T,gt,zt,V,Xe),We=new ZA(N,Ye),Ue=new UA,Qe=new BA(gt),Me=new Z1(N,U,T,He,ve,y,p),ye=new HA(N,ve,zt),we=new QA(F,jt,zt,He),Ve=new J1(F,gt,jt),Ne=new u3(F,gt,jt),jt.programs=oe.programs,N.capabilities=zt,N.extensions=gt,N.properties=Ye,N.renderLists=Ue,N.shadowMap=ye,N.state=He,N.info=jt}Ae();const Re=new jA(N,F);this.xr=Re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(Y,xe,!1))},this.getSize=function(R){return R.set(Y,xe)},this.setSize=function(R,X,ae=!0){if(Re.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,xe=X,n.width=Math.floor(R*_e),n.height=Math.floor(X*_e),ae===!0&&(n.style.width=R+"px",n.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Y*_e,xe*_e).floor()},this.setDrawingBufferSize=function(R,X,ae){Y=R,xe=X,_e=ae,n.width=Math.floor(R*ae),n.height=Math.floor(X*ae),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,X,ae,ee){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,X,ae,ee),He.viewport(le.copy(Se).multiplyScalar(_e).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,X,ae,ee){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,X,ae,ee),He.scissor(me.copy(Te).multiplyScalar(_e).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(R){He.setScissorTest(Oe=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ae=!0){let ee=0;if(R){let q=!1;if(C!==null){const Ee=C.texture.format;q=M.has(Ee)}if(q){const Ee=C.texture.type,De=E.has(Ee),Ie=Me.getClearColor(),Be=Me.getClearAlpha(),$e=Ie.r,tt=Ie.g,je=Ie.b;De?(b[0]=$e,b[1]=tt,b[2]=je,b[3]=Be,F.clearBufferuiv(F.COLOR,0,b)):(v[0]=$e,v[1]=tt,v[2]=je,v[3]=Be,F.clearBufferiv(F.COLOR,0,v))}else ee|=F.COLOR_BUFFER_BIT}X&&(ee|=F.DEPTH_BUFFER_BIT),ae&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Me.dispose(),Ue.dispose(),Qe.dispose(),Ye.dispose(),U.dispose(),T.dispose(),ve.dispose(),V.dispose(),we.dispose(),oe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",io),Re.removeEventListener("sessionend",ao),Si.stop()};function be(R){R.preventDefault(),gu("WebGLRenderer: Context Lost."),P=!0}function ge(){gu("WebGLRenderer: Context Restored."),P=!1;const R=jt.autoReset,X=ye.enabled,ae=ye.autoUpdate,ee=ye.needsUpdate,q=ye.type;Ae(),jt.autoReset=R,ye.enabled=X,ye.autoUpdate=ae,ye.needsUpdate=ee,ye.type=q}function Pe(R){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const X=R.target;X.removeEventListener("dispose",it),kt(X)}function kt(R){Ut(R),Ye.remove(R)}function Ut(R){const X=Ye.get(R).programs;X!==void 0&&(X.forEach(function(ae){oe.releaseProgram(ae)}),R.isShaderMaterial&&oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ae,ee,q,Ee){X===null&&(X=rn);const De=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Eu(R,X,ae,ee,q);He.setMaterial(ee,De);let Be=ae.index,$e=1;if(ee.wireframe===!0){if(Be=de.getWireframeAttribute(ae),Be===void 0)return;$e=2}const tt=ae.drawRange,je=ae.attributes.position;let ct=tt.start*$e,wt=(tt.start+tt.count)*$e;Ee!==null&&(ct=Math.max(ct,Ee.start*$e),wt=Math.min(wt,(Ee.start+Ee.count)*$e)),Be!==null?(ct=Math.max(ct,0),wt=Math.min(wt,Be.count)):je!=null&&(ct=Math.max(ct,0),wt=Math.min(wt,je.count));const Lt=wt-ct;if(Lt<0||Lt===1/0)return;V.setup(q,ee,Ie,ae,Be);let Tt,Bt=Ve;if(Be!==null&&(Tt=Q.get(Be),Bt=Ne,Bt.setIndex(Tt)),q.isMesh)ee.wireframe===!0?(He.setLineWidth(ee.wireframeLinewidth*Dt()),Bt.setMode(F.LINES)):Bt.setMode(F.TRIANGLES);else if(q.isLine){let Je=ee.linewidth;Je===void 0&&(Je=1),He.setLineWidth(Je*Dt()),q.isLineSegments?Bt.setMode(F.LINES):q.isLineLoop?Bt.setMode(F.LINE_LOOP):Bt.setMode(F.LINE_STRIP)}else q.isPoints?Bt.setMode(F.POINTS):q.isSprite&&Bt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,Kt=q._multiDrawCounts,Et=q._multiDrawCount,Sn=Be?Q.get(Be).bytesPerElement:1,La=Ye.get(ee).currentProgram.getUniforms();for(let Qt=0;Qt<Et;Qt++)La.setValue(F,"_gl_DrawID",Qt),Bt.render(Je[Qt]/Sn,Kt[Qt])}else if(q.isInstancedMesh)Bt.renderInstances(ct,Lt,q.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Kt=Math.min(ae.instanceCount,Je);Bt.renderInstances(ct,Lt,Kt)}else Bt.render(ct,Lt)};function Nn(R,X,ae){R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,gn(R,X,ae),R.side=Ca,R.needsUpdate=!0,gn(R,X,ae),R.side=Vi):gn(R,X,ae)}this.compile=function(R,X,ae=null){ae===null&&(ae=R),D=Qe.get(ae),D.init(X),H.push(D),ae.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(D.pushLight(q),q.castShadow&&D.pushShadow(q))}),R!==ae&&R.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(D.pushLight(q),q.castShadow&&D.pushShadow(q))}),D.setupLights();const ee=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Ie=Ee[De];Nn(Ie,ae,q),ee.add(Ie)}else Nn(Ee,ae,q),ee.add(Ee)}),D=H.pop(),ee},this.compileAsync=function(R,X,ae=null){const ee=this.compile(R,X,ae);return new Promise(q=>{function Ee(){if(ee.forEach(function(De){Ye.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){q(R);return}setTimeout(Ee,10)}gt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Jn=null;function Tl(R){Jn&&Jn(R)}function io(){Si.stop()}function ao(){Si.start()}const Si=new Mv;Si.setAnimationLoop(Tl),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(R){Jn=R,Re.setAnimationLoop(R),R===null?Si.stop():Si.start()},Re.addEventListener("sessionstart",io),Re.addEventListener("sessionend",ao),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,X,C),D=Qe.get(R,H.length),D.init(X),H.push(D),Fe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ie.setFromProjectionMatrix(Fe,ki,X.reversedDepth),Ce=this.localClippingEnabled,ce=Xe.init(this.clippingPlanes,Ce),L=Ue.get(R,O.length),L.init(),O.push(L),Re.enabled===!0&&Re.isPresenting===!0){const Ee=N.xr.getDepthSensingMesh();Ee!==null&&ds(Ee,X,-1/0,N.sortObjects)}ds(R,X,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(I,se),ht=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,ht&&Me.addToRenderList(L,R),this.info.render.frame++,ce===!0&&Xe.beginShadows();const ae=D.state.shadowsArray;ye.render(ae,R,X),ce===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=L.opaque,q=L.transmissive;if(D.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(q.length>0)for(let De=0,Ie=Ee.length;De<Ie;De++){const Be=Ee[De];ro(ee,q,R,Be)}ht&&Me.render(R);for(let De=0,Ie=Ee.length;De<Ie;De++){const Be=Ee[De];so(L,R,Be,Be.viewport)}}else q.length>0&&ro(ee,q,R,X),ht&&Me.render(R),so(L,R,X);C!==null&&w===0&&(at.updateMultisampleRenderTarget(C),at.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(N,R,X),V.resetDefaultState(),k=-1,ne=null,H.pop(),H.length>0?(D=H[H.length-1],ce===!0&&Xe.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?L=O[O.length-1]:L=null};function ds(R,X,ae,ee){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){ee&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Fe);const De=ve.update(R),Ie=R.material;Ie.visible&&L.push(R,De,Ie,ae,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const De=ve.update(R),Ie=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),lt.copy(De.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ie)){const Be=De.groups;for(let $e=0,tt=Be.length;$e<tt;$e++){const je=Be[$e],ct=Ie[je.materialIndex];ct&&ct.visible&&L.push(R,De,ct,ae,lt.z,je)}}else Ie.visible&&L.push(R,De,Ie,ae,lt.z,null)}}const Ee=R.children;for(let De=0,Ie=Ee.length;De<Ie;De++)ds(Ee[De],X,ae,ee)}function so(R,X,ae,ee){const{opaque:q,transmissive:Ee,transparent:De}=R;D.setupLightsView(ae),ce===!0&&Xe.setGlobalState(N.clippingPlanes,ae),ee&&He.viewport(le.copy(ee)),q.length>0&&$n(q,X,ae),Ee.length>0&&$n(Ee,X,ae),De.length>0&&$n(De,X,ae),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function ro(R,X,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[ee.id]===void 0&&(D.state.transmissionRenderTarget[ee.id]=new Xs(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Qr:Wi,minFilter:Ma,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ee=D.state.transmissionRenderTarget[ee.id],De=ee.viewport||le;Ee.setSize(De.z*N.transmissionResolutionScale,De.w*N.transmissionResolutionScale);const Ie=N.getRenderTarget(),Be=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Ee),N.getClearColor(z),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),ht&&Me.render(ae);const tt=N.toneMapping;N.toneMapping=fs;const je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),D.setupLightsView(ee),ce===!0&&Xe.setGlobalState(N.clippingPlanes,ee),$n(R,ae,ee),at.updateMultisampleRenderTarget(Ee),at.updateRenderTargetMipmap(Ee),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let wt=0,Lt=X.length;wt<Lt;wt++){const Tt=X[wt],{object:Bt,geometry:Je,material:Kt,group:Et}=Tt;if(Kt.side===Vi&&Bt.layers.test(ee.layers)){const Sn=Kt.side;Kt.side=Qn,Kt.needsUpdate=!0,un(Bt,ae,ee,Je,Kt,Et),Kt.side=Sn,Kt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Ee),at.updateRenderTargetMipmap(Ee))}N.setRenderTarget(Ie,Be,$e),N.setClearColor(z,j),je!==void 0&&(ee.viewport=je),N.toneMapping=tt}function $n(R,X,ae){const ee=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ee=R.length;q<Ee;q++){const De=R[q],{object:Ie,geometry:Be,group:$e}=De;let tt=De.material;tt.allowOverride===!0&&ee!==null&&(tt=ee),Ie.layers.test(ae.layers)&&un(Ie,X,ae,Be,tt,$e)}}function un(R,X,ae,ee,q,Ee){R.onBeforeRender(N,X,ae,ee,q,Ee),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(N,X,ae,ee,R,Ee),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Qn,q.needsUpdate=!0,N.renderBufferDirect(ae,X,ee,q,R,Ee),q.side=Ca,q.needsUpdate=!0,N.renderBufferDirect(ae,X,ee,q,R,Ee),q.side=Vi):N.renderBufferDirect(ae,X,ee,q,R,Ee),R.onAfterRender(N,X,ae,ee,q,Ee)}function gn(R,X,ae){X.isScene!==!0&&(X=rn);const ee=Ye.get(R),q=D.state.lights,Ee=D.state.shadowsArray,De=q.state.version,Ie=oe.getParameters(R,q.state,Ee,X,ae),Be=oe.getProgramCacheKey(Ie);let $e=ee.programs;ee.environment=R.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(R.isMeshStandardMaterial?T:U).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,$e===void 0&&(R.addEventListener("dispose",it),$e=new Map,ee.programs=$e);let tt=$e.get(Be);if(tt!==void 0){if(ee.currentProgram===tt&&ee.lightsStateVersion===De)return Ws(R,Ie),tt}else Ie.uniforms=oe.getUniforms(R),R.onBeforeCompile(Ie,N),tt=oe.acquireProgram(Ie,Be),$e.set(Be,tt),ee.uniforms=Ie.uniforms;const je=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Xe.uniform),Ws(R,Ie),ee.needsLights=El(R),ee.lightsStateVersion=De,ee.needsLights&&(je.ambientLightColor.value=q.state.ambient,je.lightProbe.value=q.state.probe,je.directionalLights.value=q.state.directional,je.directionalLightShadows.value=q.state.directionalShadow,je.spotLights.value=q.state.spot,je.spotLightShadows.value=q.state.spotShadow,je.rectAreaLights.value=q.state.rectArea,je.ltc_1.value=q.state.rectAreaLTC1,je.ltc_2.value=q.state.rectAreaLTC2,je.pointLights.value=q.state.point,je.pointLightShadows.value=q.state.pointShadow,je.hemisphereLights.value=q.state.hemi,je.directionalShadowMap.value=q.state.directionalShadowMap,je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,je.spotShadowMap.value=q.state.spotShadowMap,je.spotLightMatrix.value=q.state.spotLightMatrix,je.spotLightMap.value=q.state.spotLightMap,je.pointShadowMap.value=q.state.pointShadowMap,je.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=tt,ee.uniformsList=null,tt}function Ki(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=hu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Ws(R,X){const ae=Ye.get(R);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function Eu(R,X,ae,ee,q){X.isScene!==!0&&(X=rn),at.resetTextureUnits();const Ee=X.fog,De=ee.isMeshStandardMaterial?X.environment:null,Ie=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xn,Be=(ee.isMeshStandardMaterial?T:U).get(ee.envMap||De),$e=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,tt=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!ae.morphAttributes.position,ct=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color;let Lt=fs;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Lt=N.toneMapping);const Tt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Bt=Tt!==void 0?Tt.length:0,Je=Ye.get(ee),Kt=D.state.lights;if(ce===!0&&(Ce===!0||R!==ne)){const Mn=R===ne&&ee.id===k;Xe.setState(ee,R,Mn)}let Et=!1;ee.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Kt.state.version||Je.outputColorSpace!==Ie||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==Be||ee.fog===!0&&Je.fog!==Ee||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Xe.numPlanes||Je.numIntersection!==Xe.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==je||Je.morphNormals!==ct||Je.morphColors!==wt||Je.toneMapping!==Lt||Je.morphTargetsCount!==Bt)&&(Et=!0):(Et=!0,Je.__version=ee.version);let Sn=Je.currentProgram;Et===!0&&(Sn=gn(ee,X,q));let La=!1,Qt=!1,Zi=!1;const Jt=Sn.getUniforms(),bn=Je.uniforms;if(He.useProgram(Sn.program)&&(La=!0,Qt=!0,Zi=!0),ee.id!==k&&(k=ee.id,Qt=!0),La||ne!==R){He.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Jt.setValue(F,"projectionMatrix",R.projectionMatrix),Jt.setValue(F,"viewMatrix",R.matrixWorldInverse);const Rn=Jt.map.cameraPosition;Rn!==void 0&&Rn.setValue(F,ke.setFromMatrixPosition(R.matrixWorld)),zt.logarithmicDepthBuffer&&Jt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Jt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),ne!==R&&(ne=R,Qt=!0,Zi=!0)}if(q.isSkinnedMesh){Jt.setOptional(F,q,"bindMatrix"),Jt.setOptional(F,q,"bindMatrixInverse");const Mn=q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Jt.setValue(F,"boneTexture",Mn.boneTexture,at))}q.isBatchedMesh&&(Jt.setOptional(F,q,"batchingTexture"),Jt.setValue(F,"batchingTexture",q._matricesTexture,at),Jt.setOptional(F,q,"batchingIdTexture"),Jt.setValue(F,"batchingIdTexture",q._indirectTexture,at),Jt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Jt.setValue(F,"batchingColorTexture",q._colorsTexture,at));const xn=ae.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&qe.update(q,ae,Sn),(Qt||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Jt.setValue(F,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(bn.envMap.value=Be,bn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(bn.envMapIntensity.value=X.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=$A()),Qt&&(Jt.setValue(F,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&Au(bn,Zi),Ee&&ee.fog===!0&&We.refreshFogUniforms(bn,Ee),We.refreshMaterialUniforms(bn,ee,_e,xe,D.state.transmissionRenderTarget[R.id]),hu.upload(F,Ki(Je),bn,at)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(hu.upload(F,Ki(Je),bn,at),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Jt.setValue(F,"center",q.center),Jt.setValue(F,"modelViewMatrix",q.modelViewMatrix),Jt.setValue(F,"normalMatrix",q.normalMatrix),Jt.setValue(F,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Mn=ee.uniformsGroups;for(let Rn=0,Oi=Mn.length;Rn<Oi;Rn++){const Qi=Mn[Rn];we.update(Qi,Sn),we.bind(Qi,Sn)}}return Sn}function Au(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function El(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,ae){const ee=Ye.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=X,Ye.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ae=Ye.get(R);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const ps=F.createFramebuffer();this.setRenderTarget=function(R,X=0,ae=0){C=R,$=X,w=ae;let ee=!0,q=null,Ee=!1,De=!1;if(R){const Be=Ye.get(R);if(Be.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(F.FRAMEBUFFER,null),ee=!1;else if(Be.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Be.__hasExternalTextures)at.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(Be.__boundDepthTexture!==je){if(je!==null&&Ye.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const tt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?q=tt[X][ae]:q=tt[X],Ee=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?q=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[ae]:q=tt,le.copy(R.viewport),me.copy(R.scissor),fe=R.scissorTest}else le.copy(Se).multiplyScalar(_e).floor(),me.copy(Te).multiplyScalar(_e).floor(),fe=Oe;if(ae!==0&&(q=ps),He.bindFramebuffer(F.FRAMEBUFFER,q)&&ee&&He.drawBuffers(R,q),He.viewport(le),He.scissor(me),He.setScissorTest(fe),Ee){const Be=Ye.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ae)}else if(De){const Be=X;for(let $e=0;$e<R.textures.length;$e++){const tt=Ye.get(R.textures[$e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ae,Be)}}else if(R!==null&&ae!==0){const Be=Ye.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,ae)}k=-1},this.readRenderTargetPixels=function(R,X,ae,ee,q,Ee,De,Ie=0){if(!(R&&R.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){He.bindFramebuffer(F.FRAMEBUFFER,Be);try{const $e=R.textures[Ie],tt=$e.format,je=$e.type;if(!zt.textureFormatReadable(tt)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(je)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ee&&ae>=0&&ae<=R.height-q&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ie),F.readPixels(X,ae,ee,q,nt.convert(tt),nt.convert(je),Ee))}finally{const $e=C!==null?Ye.get(C).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(R,X,ae,ee,q,Ee,De,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(X>=0&&X<=R.width-ee&&ae>=0&&ae<=R.height-q){He.bindFramebuffer(F.FRAMEBUFFER,Be);const $e=R.textures[Ie],tt=$e.format,je=$e.type;if(!zt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ie),F.readPixels(X,ae,ee,q,nt.convert(tt),nt.convert(je),0);const wt=C!==null?Ye.get(C).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,wt);const Lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ob(F,Lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.deleteBuffer(ct),F.deleteSync(Lt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ae=0){const ee=Math.pow(2,-ae),q=Math.floor(R.image.width*ee),Ee=Math.floor(R.image.height*ee),De=X!==null?X.x:0,Ie=X!==null?X.y:0;at.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,De,Ie,q,Ee),He.unbindTexture()};const oo=F.createFramebuffer(),Ua=F.createFramebuffer();this.copyTextureToTexture=function(R,X,ae=null,ee=null,q=0,Ee=null){Ee===null&&(q!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=q,q=0):Ee=0);let De,Ie,Be,$e,tt,je,ct,wt,Lt;const Tt=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(ae!==null)De=ae.max.x-ae.min.x,Ie=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,tt=ae.min.y,je=ae.isBox3?ae.min.z:0;else{const xn=Math.pow(2,-q);De=Math.floor(Tt.width*xn),Ie=Math.floor(Tt.height*xn),R.isDataArrayTexture?Be=Tt.depth:R.isData3DTexture?Be=Math.floor(Tt.depth*xn):Be=1,$e=0,tt=0,je=0}ee!==null?(ct=ee.x,wt=ee.y,Lt=ee.z):(ct=0,wt=0,Lt=0);const Bt=nt.convert(X.format),Je=nt.convert(X.type);let Kt;X.isData3DTexture?(at.setTexture3D(X,0),Kt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(at.setTexture2DArray(X,0),Kt=F.TEXTURE_2D_ARRAY):(at.setTexture2D(X,0),Kt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Et=F.getParameter(F.UNPACK_ROW_LENGTH),Sn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),La=F.getParameter(F.UNPACK_SKIP_PIXELS),Qt=F.getParameter(F.UNPACK_SKIP_ROWS),Zi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),F.pixelStorei(F.UNPACK_SKIP_ROWS,tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,je);const Jt=R.isDataArrayTexture||R.isData3DTexture,bn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const xn=Ye.get(R),Mn=Ye.get(X),Rn=Ye.get(xn.__renderTarget),Oi=Ye.get(Mn.__renderTarget);He.bindFramebuffer(F.READ_FRAMEBUFFER,Rn.__webglFramebuffer),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Qi=0;Qi<Be;Qi++)Jt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,q,je+Qi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.get(X).__webglTexture,Ee,Lt+Qi)),F.blitFramebuffer($e,tt,De,Ie,ct,wt,De,Ie,F.DEPTH_BUFFER_BIT,F.NEAREST);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Ye.has(R)){const xn=Ye.get(R),Mn=Ye.get(X);He.bindFramebuffer(F.READ_FRAMEBUFFER,oo),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ua);for(let Rn=0;Rn<Be;Rn++)Jt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xn.__webglTexture,q,je+Rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xn.__webglTexture,q),bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,Ee,Lt+Rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,Ee),q!==0?F.blitFramebuffer($e,tt,De,Ie,ct,wt,De,Ie,F.COLOR_BUFFER_BIT,F.NEAREST):bn?F.copyTexSubImage3D(Kt,Ee,ct,wt,Lt+Rn,$e,tt,De,Ie):F.copyTexSubImage2D(Kt,Ee,ct,wt,$e,tt,De,Ie);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Kt,Ee,ct,wt,Lt,De,Ie,Be,Bt,Je,Tt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Kt,Ee,ct,wt,Lt,De,Ie,Be,Bt,Tt.data):F.texSubImage3D(Kt,Ee,ct,wt,Lt,De,Ie,Be,Bt,Je,Tt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,ct,wt,De,Ie,Bt,Je,Tt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,ct,wt,Tt.width,Tt.height,Bt,Tt.data):F.texSubImage2D(F.TEXTURE_2D,Ee,ct,wt,De,Ie,Bt,Je,Tt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Sn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,La),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zi),Ee===0&&X.generateMipmaps&&F.generateMipmap(Kt),He.unbindTexture()},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),He.unbindTexture()},this.resetState=function(){$=0,w=0,C=null,He.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}function V_(o,e){if(e===bb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===rp||e===nv){let n=o.getIndex();if(n===null){const u=[],h=o.getAttribute("position");if(h!==void 0){for(let p=0;p<h.count;p++)u.push(p);o.setIndex(u),n=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const a=n.count-2,r=[];if(e===rp)for(let u=1;u<=a;u++)r.push(n.getX(0)),r.push(n.getX(u)),r.push(n.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(r.push(n.getX(u)),r.push(n.getX(u+1)),r.push(n.getX(u+2))):(r.push(n.getX(u+2)),r.push(n.getX(u+1)),r.push(n.getX(u)));r.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const c=o.clone();return c.setIndex(r),c.clearGroups(),c}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class t2 extends to{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new r2(n)}),this.register(function(n){return new o2(n)}),this.register(function(n){return new g2(n)}),this.register(function(n){return new x2(n)}),this.register(function(n){return new _2(n)}),this.register(function(n){return new c2(n)}),this.register(function(n){return new u2(n)}),this.register(function(n){return new f2(n)}),this.register(function(n){return new h2(n)}),this.register(function(n){return new s2(n)}),this.register(function(n){return new d2(n)}),this.register(function(n){return new l2(n)}),this.register(function(n){return new m2(n)}),this.register(function(n){return new p2(n)}),this.register(function(n){return new i2(n)}),this.register(function(n){return new v2(n)}),this.register(function(n){return new y2(n)})}load(e,n,a,r){const c=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const d=dl.extractUrlBase(e);u=dl.resolveURL(d,this.path)}else u=dl.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){r?r(d):console.error(d),c.manager.itemError(e),c.manager.itemEnd(e)},p=new Sv(this.manager);p.setPath(this.path),p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setWithCredentials(this.withCredentials),p.load(e,function(d){try{c.parse(d,u,function(x){n(x),c.manager.itemEnd(e)},h)}catch(x){h(x)}},a,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,a,r){let c;const u={},h={},p=new TextDecoder;if(typeof e=="string")c=JSON.parse(e);else if(e instanceof ArrayBuffer)if(p.decode(new Uint8Array(e,0,4))===Cv){try{u[St.KHR_BINARY_GLTF]=new S2(e)}catch(g){r&&r(g);return}c=JSON.parse(u[St.KHR_BINARY_GLTF].content)}else c=JSON.parse(p.decode(e));else c=e;if(c.asset===void 0||c.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new O2(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let x=0;x<this.pluginCallbacks.length;x++){const g=this.pluginCallbacks[x](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[g.name]=g,u[g.name]=!0}if(c.extensionsUsed)for(let x=0;x<c.extensionsUsed.length;++x){const g=c.extensionsUsed[x],_=c.extensionsRequired||[];switch(g){case St.KHR_MATERIALS_UNLIT:u[g]=new a2;break;case St.KHR_DRACO_MESH_COMPRESSION:u[g]=new b2(c,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:u[g]=new M2;break;case St.KHR_MESH_QUANTIZATION:u[g]=new T2;break;default:_.indexOf(g)>=0&&h[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(u),d.setPlugins(h),d.parse(a,r)}parseAsync(e,n){const a=this;return new Promise(function(r,c){a.parse(e,n,r,c)})}}function n2(){let o={};return{get:function(e){return o[e]},add:function(e,n){o[e]=n},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class i2{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let a=0,r=n.length;a<r;a++){const c=n[a];c.extensions&&c.extensions[this.name]&&c.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,c.extensions[this.name].light)}}_loadLight(e){const n=this.parser,a="light:"+e;let r=n.cache.get(a);if(r)return r;const c=n.json,p=((c.extensions&&c.extensions[this.name]||{}).lights||[])[e];let d;const x=new rt(16777215);p.color!==void 0&&x.setRGB(p.color[0],p.color[1],p.color[2],Xn);const g=p.range!==void 0?p.range:0;switch(p.type){case"directional":d=new bv(x),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new eT(x),d.distance=g;break;case"spot":d=new JM(x),d.distance=g,p.spot=p.spot||{},p.spot.innerConeAngle=p.spot.innerConeAngle!==void 0?p.spot.innerConeAngle:0,p.spot.outerConeAngle=p.spot.outerConeAngle!==void 0?p.spot.outerConeAngle:Math.PI/4,d.angle=p.spot.outerConeAngle,d.penumbra=1-p.spot.innerConeAngle/p.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+p.type)}return d.position.set(0,0,0),Fi(d,p),p.intensity!==void 0&&(d.intensity=p.intensity),d.name=n.createUniqueName(p.name||"light_"+e),r=Promise.resolve(d),n.cache.add(a,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,a=this.parser,c=a.json.nodes[e],h=(c.extensions&&c.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(p){return a._getNodeRef(n.cache,h,p)})}}class a2{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Vs}extendParams(e,n,a){const r=[];e.color=new rt(1,1,1),e.opacity=1;const c=n.pbrMetallicRoughness;if(c){if(Array.isArray(c.baseColorFactor)){const u=c.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],Xn),e.opacity=u[3]}c.baseColorTexture!==void 0&&r.push(a.assignTexture(e,"map",c.baseColorTexture,Ln))}return Promise.all(r)}}class s2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name].emissiveStrength;return c!==void 0&&(n.emissiveIntensity=c),Promise.resolve()}}class r2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];if(u.clearcoatFactor!==void 0&&(n.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(c.push(a.assignTexture(n,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const h=u.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Rt(h,h)}return Promise.all(c)}}class o2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.dispersion=c.dispersion!==void 0?c.dispersion:0,Promise.resolve()}}class l2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.iridescenceFactor!==void 0&&(n.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(n.iridescenceIOR=u.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&c.push(a.assignTexture(n,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(c)}}class c2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[];n.sheenColor=new rt(0,0,0),n.sheenRoughness=0,n.sheen=1;const u=r.extensions[this.name];if(u.sheenColorFactor!==void 0){const h=u.sheenColorFactor;n.sheenColor.setRGB(h[0],h[1],h[2],Xn)}return u.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&c.push(a.assignTexture(n,"sheenColorMap",u.sheenColorTexture,Ln)),u.sheenRoughnessTexture!==void 0&&c.push(a.assignTexture(n,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(c)}}class u2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.transmissionFactor!==void 0&&(n.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&c.push(a.assignTexture(n,"transmissionMap",u.transmissionTexture)),Promise.all(c)}}class f2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&c.push(a.assignTexture(n,"thicknessMap",u.thicknessTexture)),n.attenuationDistance=u.attenuationDistance||1/0;const h=u.attenuationColor||[1,1,1];return n.attenuationColor=new rt().setRGB(h[0],h[1],h[2],Xn),Promise.all(c)}}class h2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=r.extensions[this.name];return n.ior=c.ior!==void 0?c.ior:1.5,Promise.resolve()}}class d2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];n.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&c.push(a.assignTexture(n,"specularIntensityMap",u.specularTexture));const h=u.specularColorFactor||[1,1,1];return n.specularColor=new rt().setRGB(h[0],h[1],h[2],Xn),u.specularColorTexture!==void 0&&c.push(a.assignTexture(n,"specularColorMap",u.specularColorTexture,Ln)),Promise.all(c)}}class p2{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return n.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&c.push(a.assignTexture(n,"bumpMap",u.bumpTexture)),Promise.all(c)}}class m2{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:ji}extendMaterialParams(e,n){const a=this.parser,r=a.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const c=[],u=r.extensions[this.name];return u.anisotropyStrength!==void 0&&(n.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(n.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&c.push(a.assignTexture(n,"anisotropyMap",u.anisotropyTexture)),Promise.all(c)}}class g2{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,a=n.json,r=a.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const c=r.extensions[this.name],u=n.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,c.source,u)}}class x2{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class _2{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,a=this.parser,r=a.json,c=r.textures[e];if(!c.extensions||!c.extensions[n])return null;const u=c.extensions[n],h=r.images[u.source];let p=a.textureLoader;if(h.uri){const d=a.options.manager.getHandler(h.uri);d!==null&&(p=d)}return a.loadTextureImage(e,u.source,p)}}class v2{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,a=n.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const r=a.extensions[this.name],c=this.parser.getDependency("buffer",r.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return c.then(function(h){const p=r.byteOffset||0,d=r.byteLength||0,x=r.count,g=r.byteStride,_=new Uint8Array(h,p,d);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(x,g,_,r.mode,r.filter).then(function(y){return y.buffer}):u.ready.then(function(){const y=new ArrayBuffer(x*g);return u.decodeGltfBuffer(new Uint8Array(y),x,g,_,r.mode,r.filter),y})})}else return null}}class y2{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,a=n.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const r=n.meshes[a.mesh];for(const d of r.primitives)if(d.mode!==_i.TRIANGLES&&d.mode!==_i.TRIANGLE_STRIP&&d.mode!==_i.TRIANGLE_FAN&&d.mode!==void 0)return null;const u=a.extensions[this.name].attributes,h=[],p={};for(const d in u)h.push(this.parser.getDependency("accessor",u[d]).then(x=>(p[d]=x,p[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const x=d.pop(),g=x.isGroup?x.children:[x],_=d[0].count,y=[];for(const M of g){const E=new mt,b=new K,v=new hs,L=new K(1,1,1),D=new CM(M.geometry,M.material,_);for(let O=0;O<_;O++)p.TRANSLATION&&b.fromBufferAttribute(p.TRANSLATION,O),p.ROTATION&&v.fromBufferAttribute(p.ROTATION,O),p.SCALE&&L.fromBufferAttribute(p.SCALE,O),D.setMatrixAt(O,E.compose(b,v,L));for(const O in p)if(O==="_COLOR_0"){const H=p[O];D.instanceColor=new lp(H.array,H.itemSize,H.normalized)}else O!=="TRANSLATION"&&O!=="ROTATION"&&O!=="SCALE"&&M.geometry.setAttribute(O,p[O]);nn.prototype.copy.call(D,M),this.parser.assignFinalMaterial(D),y.push(D)}return x.isGroup?(x.clear(),x.add(...y),x):y[0]}))}}const Cv="glTF",ol=12,G_={JSON:1313821514,BIN:5130562};class S2{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,ol),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Cv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ol,c=new DataView(e,ol);let u=0;for(;u<r;){const h=c.getUint32(u,!0);u+=4;const p=c.getUint32(u,!0);if(u+=4,p===G_.JSON){const d=new Uint8Array(e,ol+u,h);this.content=a.decode(d)}else if(p===G_.BIN){const d=ol+u;this.body=e.slice(d,d+h)}u+=h}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class b2{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,h={},p={},d={};for(const x in u){const g=fp[x]||x.toLowerCase();h[g]=u[x]}for(const x in e.attributes){const g=fp[x]||x.toLowerCase();if(u[x]!==void 0){const _=a.accessors[e.attributes[x]],y=Vr[_.componentType];d[g]=y.name,p[g]=_.normalized===!0}}return n.getDependency("bufferView",c).then(function(x){return new Promise(function(g,_){r.decodeDracoFile(x,function(y){for(const M in y.attributes){const E=y.attributes[M],b=p[M];b!==void 0&&(E.normalized=b)}g(y)},h,d,Xn,_)})})}}class M2{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class T2{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class wv extends Ml{constructor(e,n,a,r){super(e,n,a,r)}copySampleValue_(e){const n=this.resultBuffer,a=this.sampleValues,r=this.valueSize,c=e*r*3+r;for(let u=0;u!==r;u++)n[u]=a[c+u];return n}interpolate_(e,n,a,r){const c=this.resultBuffer,u=this.sampleValues,h=this.valueSize,p=h*2,d=h*3,x=r-n,g=(a-n)/x,_=g*g,y=_*g,M=e*d,E=M-d,b=-2*y+3*_,v=y-_,L=1-b,D=v-_+g;for(let O=0;O!==h;O++){const H=u[E+O+h],N=u[E+O+p]*x,P=u[M+O+h],$=u[M+O]*x;c[O]=L*H+D*N+b*P+v*$}return c}}const E2=new hs;class A2 extends wv{interpolate_(e,n,a,r){const c=super.interpolate_(e,n,a,r);return E2.fromArray(c).normalize().toArray(c),c}}const _i={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},k_={9728:Gn,9729:Vn,9984:K_,9985:ou,9986:ll,9987:Ma},X_={33071:Gi,33648:du,10497:Wr},_d={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},R2={CUBICSPLINE:void 0,LINEAR:vl,STEP:_l},vd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function C2(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Dp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ca})),o.DefaultMaterial}function Bs(o,e,n){for(const a in n.extensions)o[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=n.extensions[a])}function Fi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w2(o,e,n){let a=!1,r=!1,c=!1;for(let d=0,x=e.length;d<x;d++){const g=e[d];if(g.POSITION!==void 0&&(a=!0),g.NORMAL!==void 0&&(r=!0),g.COLOR_0!==void 0&&(c=!0),a&&r&&c)break}if(!a&&!r&&!c)return Promise.resolve(o);const u=[],h=[],p=[];for(let d=0,x=e.length;d<x;d++){const g=e[d];if(a){const _=g.POSITION!==void 0?n.getDependency("accessor",g.POSITION):o.attributes.position;u.push(_)}if(r){const _=g.NORMAL!==void 0?n.getDependency("accessor",g.NORMAL):o.attributes.normal;h.push(_)}if(c){const _=g.COLOR_0!==void 0?n.getDependency("accessor",g.COLOR_0):o.attributes.color;p.push(_)}}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(d){const x=d[0],g=d[1],_=d[2];return a&&(o.morphAttributes.position=x),r&&(o.morphAttributes.normal=g),c&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function D2(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let n=0,a=e.weights.length;n<a;n++)o.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(o.morphTargetInfluences.length===n.length){o.morphTargetDictionary={};for(let a=0,r=n.length;a<r;a++)o.morphTargetDictionary[n[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function U2(o){let e;const n=o.extensions&&o.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+yd(n.attributes):e=o.indices+":"+yd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let a=0,r=o.targets.length;a<r;a++)e+=":"+yd(o.targets[a]);return e}function yd(o){let e="";const n=Object.keys(o).sort();for(let a=0,r=n.length;a<r;a++)e+=n[a]+":"+o[n[a]]+";";return e}function hp(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function L2(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const N2=new mt;class O2{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new n2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,r=-1,c=!1,u=-1;if(typeof navigator<"u"){const h=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(h)===!0;const p=h.match(/Version\/(\d+)/);r=a&&p?parseInt(p[1],10):-1,c=h.indexOf("Firefox")>-1,u=c?h.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&r<17||c&&u<98?this.textureLoader=new ZM(this.options.manager):this.textureLoader=new iT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const a=this,r=this.json,c=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const h={scene:u[0][r.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:r.asset,parser:a,userData:{}};return Bs(c,h,r),Fi(h,r),Promise.all(a._invokeAll(function(p){return p.afterRoot&&p.afterRoot(h)})).then(function(){for(const p of h.scenes)p.updateMatrixWorld();e(h)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],a=this.json.meshes||[];for(let r=0,c=n.length;r<c;r++){const u=n[r].joints;for(let h=0,p=u.length;h<p;h++)e[u[h]].isBone=!0}for(let r=0,c=e.length;r<c;r++){const u=e[r];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,a){if(e.refs[n]<=1)return a;const r=a.clone(),c=(u,h)=>{const p=this.associations.get(u);p!=null&&this.associations.set(h,p);for(const[d,x]of u.children.entries())c(x,h.children[d])};return c(a,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let a=0;a<n.length;a++){const r=e(n[a]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const a=[];for(let r=0;r<n.length;r++){const c=e(n[r]);c&&a.push(c)}return a}getDependency(e,n){const a=e+":"+n;let r=this.cache.get(a);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(c){return c.loadNode&&c.loadNode(n)});break;case"mesh":r=this._invokeOne(function(c){return c.loadMesh&&c.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(c){return c.loadBufferView&&c.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(c){return c.loadMaterial&&c.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(c){return c.loadTexture&&c.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(c){return c.loadAnimation&&c.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(c){return c!=this&&c.getDependency&&c.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(a,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const a=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(c,u){return a.getDependency(e,u)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],a=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(c,u){a.load(dl.resolveURL(n.uri,r.path),c,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(a){const r=n.byteLength||0,c=n.byteOffset||0;return a.slice(c,c+r)})}loadAccessor(e){const n=this,a=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const u=_d[r.type],h=Vr[r.componentType],p=r.normalized===!0,d=new h(r.count*u);return Promise.resolve(new kn(d,u,p))}const c=[];return r.bufferView!==void 0?c.push(this.getDependency("bufferView",r.bufferView)):c.push(null),r.sparse!==void 0&&(c.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),c.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(c).then(function(u){const h=u[0],p=_d[r.type],d=Vr[r.componentType],x=d.BYTES_PER_ELEMENT,g=x*p,_=r.byteOffset||0,y=r.bufferView!==void 0?a.bufferViews[r.bufferView].byteStride:void 0,M=r.normalized===!0;let E,b;if(y&&y!==g){const v=Math.floor(_/y),L="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let D=n.cache.get(L);D||(E=new d(h,v*y,r.count*y/x),D=new MM(E,y/x),n.cache.add(L,D)),b=new Ep(D,p,_%y/x,M)}else h===null?E=new d(r.count*p):E=new d(h,_,r.count*p),b=new kn(E,p,M);if(r.sparse!==void 0){const v=_d.SCALAR,L=Vr[r.sparse.indices.componentType],D=r.sparse.indices.byteOffset||0,O=r.sparse.values.byteOffset||0,H=new L(u[1],D,r.sparse.count*v),N=new d(u[2],O,r.sparse.count*p);h!==null&&(b=new kn(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let P=0,$=H.length;P<$;P++){const w=H[P];if(b.setX(w,N[P*p]),p>=2&&b.setY(w,N[P*p+1]),p>=3&&b.setZ(w,N[P*p+2]),p>=4&&b.setW(w,N[P*p+3]),p>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=M}return b})}loadTexture(e){const n=this.json,a=this.options,c=n.textures[e].source,u=n.images[c];let h=this.textureLoader;if(u.uri){const p=a.manager.getHandler(u.uri);p!==null&&(h=p)}return this.loadTextureImage(e,c,h)}loadTextureImage(e,n,a){const r=this,c=this.json,u=c.textures[e],h=c.images[n],p=(h.uri||h.bufferView)+":"+u.sampler;if(this.textureCache[p])return this.textureCache[p];const d=this.loadImageSource(n,a).then(function(x){x.flipY=!1,x.name=u.name||h.name||"",x.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(x.name=h.uri);const _=(c.samplers||{})[u.sampler]||{};return x.magFilter=k_[_.magFilter]||Vn,x.minFilter=k_[_.minFilter]||Ma,x.wrapS=X_[_.wrapS]||Wr,x.wrapT=X_[_.wrapT]||Wr,x.generateMipmaps=!x.isCompressedTexture&&x.minFilter!==Gn&&x.minFilter!==Vn,r.associations.set(x,{textures:e}),x}).catch(function(){return null});return this.textureCache[p]=d,d}loadImageSource(e,n){const a=this,r=this.json,c=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const u=r.images[e],h=self.URL||self.webkitURL;let p=u.uri||"",d=!1;if(u.bufferView!==void 0)p=a.getDependency("bufferView",u.bufferView).then(function(g){d=!0;const _=new Blob([g],{type:u.mimeType});return p=h.createObjectURL(_),p});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const x=Promise.resolve(p).then(function(g){return new Promise(function(_,y){let M=_;n.isImageBitmapLoader===!0&&(M=function(E){const b=new An(E);b.needsUpdate=!0,_(b)}),n.load(dl.resolveURL(g,c.path),M,void 0,y)})}).then(function(g){return d===!0&&h.revokeObjectURL(p),Fi(g,u),g.userData.mimeType=u.mimeType||L2(u.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",p),g});return this.sourceCache[e]=x,x}assignTexture(e,n,a,r){const c=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),c.extensions[St.KHR_TEXTURE_TRANSFORM]){const h=a.extensions!==void 0?a.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const p=c.associations.get(u);u=c.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(u,h),c.associations.set(u,p)}}return r!==void 0&&(u.colorSpace=r),e[n]=u,u})}assignFinalMaterial(e){const n=e.geometry;let a=e.material;const r=n.attributes.tangent===void 0,c=n.attributes.color!==void 0,u=n.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new gv,Xi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,p.sizeAttenuation=!1,this.cache.add(h,p)),a=p}else if(e.isLine){const h="LineBasicMaterial:"+a.uuid;let p=this.cache.get(h);p||(p=new mv,Xi.prototype.copy.call(p,a),p.color.copy(a.color),p.map=a.map,this.cache.add(h,p)),a=p}if(r||c||u){let h="ClonedMaterial:"+a.uuid+":";r&&(h+="derivative-tangents:"),c&&(h+="vertex-colors:"),u&&(h+="flat-shading:");let p=this.cache.get(h);p||(p=a.clone(),c&&(p.vertexColors=!0),u&&(p.flatShading=!0),r&&(p.normalScale&&(p.normalScale.y*=-1),p.clearcoatNormalScale&&(p.clearcoatNormalScale.y*=-1)),this.cache.add(h,p),this.associations.set(p,this.associations.get(a))),a=p}e.material=a}getMaterialType(){return Dp}loadMaterial(e){const n=this,a=this.json,r=this.extensions,c=a.materials[e];let u;const h={},p=c.extensions||{},d=[];if(p[St.KHR_MATERIALS_UNLIT]){const g=r[St.KHR_MATERIALS_UNLIT];u=g.getMaterialType(),d.push(g.extendParams(h,c,n))}else{const g=c.pbrMetallicRoughness||{};if(h.color=new rt(1,1,1),h.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;h.color.setRGB(_[0],_[1],_[2],Xn),h.opacity=_[3]}g.baseColorTexture!==void 0&&d.push(n.assignTexture(h,"map",g.baseColorTexture,Ln)),h.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,h.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(n.assignTexture(h,"metalnessMap",g.metallicRoughnessTexture)),d.push(n.assignTexture(h,"roughnessMap",g.metallicRoughnessTexture))),u=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,h)})))}c.doubleSided===!0&&(h.side=Vi);const x=c.alphaMode||vd.OPAQUE;if(x===vd.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,x===vd.MASK&&(h.alphaTest=c.alphaCutoff!==void 0?c.alphaCutoff:.5)),c.normalTexture!==void 0&&u!==Vs&&(d.push(n.assignTexture(h,"normalMap",c.normalTexture)),h.normalScale=new Rt(1,1),c.normalTexture.scale!==void 0)){const g=c.normalTexture.scale;h.normalScale.set(g,g)}if(c.occlusionTexture!==void 0&&u!==Vs&&(d.push(n.assignTexture(h,"aoMap",c.occlusionTexture)),c.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=c.occlusionTexture.strength)),c.emissiveFactor!==void 0&&u!==Vs){const g=c.emissiveFactor;h.emissive=new rt().setRGB(g[0],g[1],g[2],Xn)}return c.emissiveTexture!==void 0&&u!==Vs&&d.push(n.assignTexture(h,"emissiveMap",c.emissiveTexture,Ln)),Promise.all(d).then(function(){const g=new u(h);return c.name&&(g.name=c.name),Fi(g,c),n.associations.set(g,{materials:e}),c.extensions&&Bs(r,g,c),g})}createUniqueName(e){const n=Gt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,a=this.extensions,r=this.primitiveCache;function c(h){return a[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,n).then(function(p){return W_(p,h,n)})}const u=[];for(let h=0,p=e.length;h<p;h++){const d=e[h],x=U2(d),g=r[x];if(g)u.push(g.promise);else{let _;d.extensions&&d.extensions[St.KHR_DRACO_MESH_COMPRESSION]?_=c(d):_=W_(new Li,d,n),r[x]={primitive:d,promise:_},u.push(_)}}return Promise.all(u)}loadMesh(e){const n=this,a=this.json,r=this.extensions,c=a.meshes[e],u=c.primitives,h=[];for(let p=0,d=u.length;p<d;p++){const x=u[p].material===void 0?C2(this.cache):this.getDependency("material",u[p].material);h.push(x)}return h.push(n.loadGeometries(u)),Promise.all(h).then(function(p){const d=p.slice(0,p.length-1),x=p[p.length-1],g=[];for(let y=0,M=x.length;y<M;y++){const E=x[y],b=u[y];let v;const L=d[y];if(b.mode===_i.TRIANGLES||b.mode===_i.TRIANGLE_STRIP||b.mode===_i.TRIANGLE_FAN||b.mode===void 0)v=c.isSkinnedMesh===!0?new EM(E,L):new yi(E,L),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),b.mode===_i.TRIANGLE_STRIP?v.geometry=V_(v.geometry,nv):b.mode===_i.TRIANGLE_FAN&&(v.geometry=V_(v.geometry,rp));else if(b.mode===_i.LINES)v=new LM(E,L);else if(b.mode===_i.LINE_STRIP)v=new wp(E,L);else if(b.mode===_i.LINE_LOOP)v=new NM(E,L);else if(b.mode===_i.POINTS)v=new OM(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(v.geometry.morphAttributes).length>0&&D2(v,c),v.name=n.createUniqueName(c.name||"mesh_"+e),Fi(v,c),b.extensions&&Bs(r,v,b),n.assignFinalMaterial(v),g.push(v)}for(let y=0,M=g.length;y<M;y++)n.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return c.extensions&&Bs(r,g[0],c),g[0];const _=new Gs;c.extensions&&Bs(r,_,c),n.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let n;const a=this.json.cameras[e],r=a[a.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?n=new Hn(Qb.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):a.type==="orthographic"&&(n=new Lp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),a.name&&(n.name=this.createUniqueName(a.name)),Fi(n,a),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],a=[];for(let r=0,c=n.joints.length;r<c;r++)a.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",n.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(r){const c=r.pop(),u=r,h=[],p=[];for(let d=0,x=u.length;d<x;d++){const g=u[d];if(g){h.push(g);const _=new mt;c!==null&&_.fromArray(c.array,d*16),p.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[d])}return new Rp(h,p)})}loadAnimation(e){const n=this.json,a=this,r=n.animations[e],c=r.name?r.name:"animation_"+e,u=[],h=[],p=[],d=[],x=[];for(let g=0,_=r.channels.length;g<_;g++){const y=r.channels[g],M=r.samplers[y.sampler],E=y.target,b=E.node,v=r.parameters!==void 0?r.parameters[M.input]:M.input,L=r.parameters!==void 0?r.parameters[M.output]:M.output;E.node!==void 0&&(u.push(this.getDependency("node",b)),h.push(this.getDependency("accessor",v)),p.push(this.getDependency("accessor",L)),d.push(M),x.push(E))}return Promise.all([Promise.all(u),Promise.all(h),Promise.all(p),Promise.all(d),Promise.all(x)]).then(function(g){const _=g[0],y=g[1],M=g[2],E=g[3],b=g[4],v=[];for(let D=0,O=_.length;D<O;D++){const H=_[D],N=y[D],P=M[D],$=E[D],w=b[D];if(H===void 0)continue;H.updateMatrix&&H.updateMatrix();const C=a._createAnimationTracks(H,N,P,$,w);if(C)for(let k=0;k<C.length;k++)v.push(C[k])}const L=new kM(c,void 0,v);return Fi(L,r),L})}createNodeMesh(e){const n=this.json,a=this,r=n.nodes[e];return r.mesh===void 0?null:a.getDependency("mesh",r.mesh).then(function(c){const u=a._getNodeRef(a.meshCache,r.mesh,c);return r.weights!==void 0&&u.traverse(function(h){if(h.isMesh)for(let p=0,d=r.weights.length;p<d;p++)h.morphTargetInfluences[p]=r.weights[p]}),u})}loadNode(e){const n=this.json,a=this,r=n.nodes[e],c=a._loadNodeShallow(e),u=[],h=r.children||[];for(let d=0,x=h.length;d<x;d++)u.push(a.getDependency("node",h[d]));const p=r.skin===void 0?Promise.resolve(null):a.getDependency("skin",r.skin);return Promise.all([c,Promise.all(u),p]).then(function(d){const x=d[0],g=d[1],_=d[2];_!==null&&x.traverse(function(y){y.isSkinnedMesh&&y.bind(_,N2)});for(let y=0,M=g.length;y<M;y++)x.add(g[y]);return x})}_loadNodeShallow(e){const n=this.json,a=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const c=n.nodes[e],u=c.name?r.createUniqueName(c.name):"",h=[],p=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return p&&h.push(p),c.camera!==void 0&&h.push(r.getDependency("camera",c.camera).then(function(d){return r._getNodeRef(r.cameraCache,c.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let x;if(c.isBone===!0?x=new pv:d.length>1?x=new Gs:d.length===1?x=d[0]:x=new nn,x!==d[0])for(let g=0,_=d.length;g<_;g++)x.add(d[g]);if(c.name&&(x.userData.name=c.name,x.name=u),Fi(x,c),c.extensions&&Bs(a,x,c),c.matrix!==void 0){const g=new mt;g.fromArray(c.matrix),x.applyMatrix4(g)}else c.translation!==void 0&&x.position.fromArray(c.translation),c.rotation!==void 0&&x.quaternion.fromArray(c.rotation),c.scale!==void 0&&x.scale.fromArray(c.scale);if(!r.associations.has(x))r.associations.set(x,{});else if(c.mesh!==void 0&&r.meshCache.refs[c.mesh]>1){const g=r.associations.get(x);r.associations.set(x,{...g})}return r.associations.get(x).nodes=e,x}),this.nodeCache[e]}loadScene(e){const n=this.extensions,a=this.json.scenes[e],r=this,c=new Gs;a.name&&(c.name=r.createUniqueName(a.name)),Fi(c,a),a.extensions&&Bs(n,c,a);const u=a.nodes||[],h=[];for(let p=0,d=u.length;p<d;p++)h.push(r.getDependency("node",u[p]));return Promise.all(h).then(function(p){for(let x=0,g=p.length;x<g;x++)c.add(p[x]);const d=x=>{const g=new Map;for(const[_,y]of r.associations)(_ instanceof Xi||_ instanceof An)&&g.set(_,y);return x.traverse(_=>{const y=r.associations.get(_);y!=null&&g.set(_,y)}),g};return r.associations=d(c),c})}_createAnimationTracks(e,n,a,r,c){const u=[],h=e.name?e.name:e.uuid,p=[];ls[c.path]===ls.weights?e.traverse(function(_){_.morphTargetInfluences&&p.push(_.name?_.name:_.uuid)}):p.push(h);let d;switch(ls[c.path]){case ls.weights:d=jr;break;case ls.rotation:d=Kr;break;case ls.translation:case ls.scale:d=Zr;break;default:switch(a.itemSize){case 1:d=jr;break;case 2:case 3:default:d=Zr;break}break}const x=r.interpolation!==void 0?R2[r.interpolation]:vl,g=this._getArrayFromAccessor(a);for(let _=0,y=p.length;_<y;_++){const M=new d(p[_]+"."+ls[c.path],n.array,g,x);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const a=hp(n.constructor),r=new Float32Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=n[c]*a;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const r=this instanceof Kr?A2:wv;return new r(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I2(o,e,n){const a=e.attributes,r=new Da;if(a.POSITION!==void 0){const h=n.json.accessors[a.POSITION],p=h.min,d=h.max;if(p!==void 0&&d!==void 0){if(r.set(new K(p[0],p[1],p[2]),new K(d[0],d[1],d[2])),h.normalized){const x=hp(Vr[h.componentType]);r.min.multiplyScalar(x),r.max.multiplyScalar(x)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const c=e.targets;if(c!==void 0){const h=new K,p=new K;for(let d=0,x=c.length;d<x;d++){const g=c[d];if(g.POSITION!==void 0){const _=n.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(p.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),p.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),p.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const E=hp(Vr[_.componentType]);p.multiplyScalar(E)}h.max(p)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(h)}o.boundingBox=r;const u=new Yi;r.getCenter(u.center),u.radius=r.min.distanceTo(r.max)/2,o.boundingSphere=u}function W_(o,e,n){const a=e.attributes,r=[];function c(u,h){return n.getDependency("accessor",u).then(function(p){o.setAttribute(h,p)})}for(const u in a){const h=fp[u]||u.toLowerCase();h in o.attributes||r.push(c(a[u],h))}if(e.indices!==void 0&&!o.index){const u=n.getDependency("accessor",e.indices).then(function(h){o.setIndex(h)});r.push(u)}return Ct.workingColorSpace!==Xn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),Fi(o,e),I2(o,e,n),Promise.all(r).then(function(){return e.targets!==void 0?w2(o,e.targets,n):o})}function P2({dish:o,onBack:e}){const n=ul.useRef(null),a=ul.useRef(null);return ul.useEffect(()=>{let r,c,u,h,p,d;async function x(){try{r=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}),n.current.srcObject=r,await n.current.play()}catch(_){console.error("Erreur caméra :",_)}}function g(){const _=window.innerWidth,y=window.innerHeight;c=new e2({alpha:!0,antialias:!0}),c.setSize(_,y),c.setPixelRatio(window.devicePixelRatio),a.current.innerHTML="",a.current.appendChild(c.domElement),u=new bM,h=new Hn(45,_/y,.1,100),h.position.set(0,1,4);const M=new bv(16777215,1);M.position.set(2,4,5),u.add(M);const E=new nT(16777215,.6);u.add(E),new t2().load("/models/Pasta.glb",L=>{p=L.scene,p.scale.set(1,1,1),p.position.set(0,-.8,0),u.add(p)},void 0,L=>console.error("Erreur GLB :",L));const v=()=>{d=requestAnimationFrame(v),p&&(p.rotation.y+=.005),c.render(u,h)};v()}return x(),g(),()=>{r&&r.getTracks().forEach(_=>_.stop()),d&&cancelAnimationFrame(d),c&&c.dispose()}},[]),cn.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh"},children:[cn.jsx("video",{ref:n,autoPlay:!0,playsInline:!0,muted:!0,style:{position:"absolute",width:"100%",height:"100%",objectFit:"cover"}}),cn.jsx("div",{ref:a,style:{position:"absolute",width:"100%",height:"100%",pointerEvents:"none"}}),cn.jsx("button",{onClick:e,style:{position:"absolute",top:16,left:16,padding:"8px 14px",borderRadius:"999px",border:"none",background:"rgba(0,0,0,0.5)",color:"white"},children:"← Menu"}),cn.jsxs("div",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"12px 16px",background:"rgba(200,0,0,0.7)",color:"white"},children:[cn.jsx("div",{style:{fontSize:18,fontWeight:600},children:o.name}),cn.jsx("div",{style:{fontSize:14},children:o.description}),cn.jsx("div",{style:{fontSize:16,fontWeight:700,textAlign:"right"},children:o.price})]})]})}function B2(){const[o,e]=ul.useState("home"),n="Nom du restaurant",a={name:"Penne au saumon",price:10,description:"Penne, saumon, crème fraîche, parmesan"};return o==="home"?cn.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"16px",fontFamily:"system-ui, -apple-system, sans-serif"},children:[cn.jsx("h1",{style:{fontSize:"28px",marginBottom:"24px"},children:n}),cn.jsx("button",{onClick:()=>e("menu"),style:{padding:"12px 24px",fontSize:"18px",borderRadius:"999px",border:"none",backgroundColor:"#111",color:"white",cursor:"pointer"},children:"Menu"})]}):o==="menu"?cn.jsxs("div",{style:{minHeight:"100vh",padding:"16px",fontFamily:"system-ui, -apple-system, sans-serif"},children:[cn.jsxs("header",{style:{display:"flex",alignItems:"center",marginBottom:"16px"},children:[cn.jsx("button",{onClick:()=>e("home"),style:{marginRight:"12px",border:"none",background:"transparent",fontSize:"18px",cursor:"pointer"},children:"←"}),cn.jsx("h2",{style:{fontSize:"22px",margin:0},children:"Menu"})]}),cn.jsxs("div",{style:{borderRadius:"12px",border:"1px solid #eee",padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"},onClick:()=>e("dish"),children:[cn.jsx("span",{style:{fontSize:"18px"},children:a.name}),cn.jsx("span",{style:{fontSize:"18px",fontWeight:"600"},children:a.price})]})]}):cn.jsx(P2,{dish:a,onBack:()=>e("menu")})}kS.createRoot(document.getElementById("root")).render(cn.jsx(ul.StrictMode,{children:cn.jsx(B2,{})}));
