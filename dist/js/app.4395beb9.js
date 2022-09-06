(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-133bfbf3":"d683561a","chunk-2d2383db":"c9539f11","chunk-3231fcdb":"c72cdff1","chunk-98bb55d0":"4807f690","chunk-7e634f28":"859f7d8c","chunk-2d0d3c32":"2f10684b","chunk-2d0e5f4e":"38ed9663","chunk-283ba7dd":"66180550"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11c0":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return a})),n.d(t,"getters",(function(){return i})),n.d(t,"actions",(function(){return c}));n("d3b7"),n("e9c4");var r=n("e06e"),o={currentUser:sessionStorage.getItem("authUser")},a={SET_CURRENT_USER:function(e,t){e.currentUser=t,u("auth.currentUser",t)}},i={loggedIn:function(e){return!!e.currentUser}},c={init:function(e){e.state;var t=e.dispatch;t("validate")},logIn:function(e){var t=e.commit,n=e.dispatch,o=e.getters,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.email,c=a.password;return o.loggedIn?n("validate"):Object(r["a"])().loginUser(i,c).then((function(e){var n=e;return t("SET_CURRENT_USER",n),n}))},logOut:function(e){var t=this,n=e.commit;return n("SET_CURRENT_USER",null),new Promise((function(e,n){Object(r["a"])().logout().then((function(t){e(!0)})).catch((function(e){n(t._handleError(e))}))}))},register:function(e){var t=e.commit,n=e.dispatch,o=e.getters,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.username,c=a.email,u=a.password;return o.loggedIn?n("validate"):Object(r["a"])().registerUser(i,c,u).then((function(e){var n=e;return t("SET_CURRENT_USER",n),n}))},resetPassword:function(e){e.commit;var t=e.dispatch,n=e.getters,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.email;return n.loggedIn?t("validate"):Object(r["a"])().forgetPassword(a).then((function(e){var t=e.data;return t}))},validate:function(e){var t=e.commit,n=e.state;if(!n.currentUser)return Promise.resolve(null);var o=Object(r["a"])().getAuthenticatedUser();return t("SET_CURRENT_USER",o),o}};function u(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}},1811:function(e){e.exports=JSON.parse('{"t-menu":"Menú","t-pages":"Paginas","t-contacts":"Contactos","t-company":"Empresas","t-users":"Usuarios","t-suppliers":"Provedores","t-sales":"Ventas","t-dashboard":"Tablero","t-invoice":"Facturas","t-budget":"Presupuesto","t-services":"Servicios","t-spents":"Gastos","t-payroll":"Nóminas","t-inventory":"Inventarios","t-products":"Productos","t-wharehouse":"Almacenes","t-assets":"Activos","t-checkin":"Entradas","t-checkout":"Salidas","t-teams":"Equipo","t-zone":"Mi zona","t-employees":"Empleados","t-lacks":"Ausencias","t-work-schedule":"Control de Horarios","t-inbox":"Correo","t-task":"Tareas","t-projects":"Proyectos","t-crm":"CRM","t-accounting":"Contabilidad","t-analytics":"Analitica","t-target":"Objetivo","t-systems":"Sistemas"}')},2208:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o})),n.d(t,"actions",(function(){return a}));var r={type:null,message:null},o={success:function(e,t){e.type="alert-success",e.message=t},error:function(e,t){e.type="alert-danger",e.message=t},clear:function(e){e.type=null,e.message=null}},a={success:function(e,t){var n=e.commit;n("success",t)},error:function(e,t){var n=e.commit;n("error",t)},clear:function(e){var t=e.commit;t("clear")}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,i){var c=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(c)}var a={name:"App",components:{}},i=n("6b0d"),c=n.n(i);const u=c()(a,[["render",o]]);var s=u,d=n("a18c"),f=n("f5af"),l=n.n(f),m=(n("e829"),n("9225")),p=n("86b6"),h=n("b80d"),g=n("8264"),b=n.n(g),v=n("ae27"),E=n.n(v),y=n("795b"),C=n("4edd"),O=n("6aae"),A=(n("f3b6"),n("a6e4"),n("9483"));Object(A["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _=n("e06e");n("2909"),n("d3b7"),n("8a79"),n("4de4"),n("b0c0"),n("e9c4"),n("ac1f"),n("466d"),n("1276"),n("d81d"),JSON.parse(localStorage.getItem("users"));var P={apiKey:"AIzaSyCw2nAzHE4Sudkseo8Zmz8UKwwY_utEQ9Y",authDomain:"arprobackend.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",VUE_APP_APIKEY:"AIzaSyCw2nAzHE4Sudkseo8Zmz8UKwwY_utEQ9Y",VUE_APP_APPId:"1:128716387786:web:2ac7a5416ce2376ddfcb33",VUE_APP_AUTHDOMAIN:"arprobackend.firebaseapp.com",VUE_APP_DATABASEURL:"https://arprobackend-default-rtdb.firebaseio.com",VUE_APP_DEFAULT_AUTH:"firebase",VUE_APP_I18N_FALLBACK_LOCALE:"sp",VUE_APP_I18N_LOCALE:"sp",VUE_APP_MEASUREMENTID:"",VUE_APP_MESSAGINGSENDERID:"128716387786",VUE_APP_PORT:"8085",VUE_APP_PROJECTId:"arprobackend",VUE_APP_STORAGEBUCKET:"arprobackend.appspot.com",VUE_APP_URL:"http://localhost:8085/",BASE_URL:"/"}).VUE_APP_VUE_APP_DATABASEURL,projectId:"arprobackend",storageBucket:"arprobackend.appspot.com",messagingSenderId:"128716387786",appId:"1:128716387786:web:2ac7a5416ce2376ddfcb33",measurementId:""};Object(_["b"])(P),l.a.init({easing:"ease-out-back",duration:1e3}),Object(r["createApp"])(s).use(p["a"]).use(d["a"]).use(E.a).use(h["a"]).component(C["a"].type,C["a"]).use(y["a"]).use(O["a"]).use(m["a"]).use(b.a).mount("#app")},"86b6":function(e,t,n){"use strict";var r=n("5502"),o=n("5530"),a=(n("d3b7"),n("159b"),n("ddb0"),n("d81d"),n("ac1f"),n("1276"),n("5319"),n("bba4")),i=n.n(a),c={},u={modules:{}};function s(e,t){if(1===t.length)return e;var n=t.shift();return e.modules[n]=Object(o["a"])({modules:{},namespaced:!0},e.modules[n]),s(e.modules[n],t)}(function(){var e=n("cfa9");e.keys().forEach((function(t){var n=e(t);if(c[t]!==n){c[t]=n;var r=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(i.a),a=s(u,r),d=a.modules;d[r.pop()]=Object(o["a"])({namespaced:!0},n)}}))})();var d=u.modules,f=Object(r["a"])({modules:d,strict:!1});t["a"]=f},"8c90":function(e){e.exports=JSON.parse('{"title":"ARPROapp - Aplicaciones Progresivas y Responsivas","description":"ARPROapp te ayuda a simplificar la gestión del negocio, automatizando tareas administrativas."}')},"8dd5":function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return l})),n.d(t,"actions",(function(){return m})),n.d(t,"mutations",(function(){return p}));n("e9c4"),n("d3b7");function r(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var o={login:a,logout:i,register:c,getAll:u};function a(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("/users/authenticate",n).then(s).then((function(e){return e.token&&localStorage.setItem("user",JSON.stringify(e)),e}))}function i(){localStorage.removeItem("user")}function c(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/users/register",t).then(s)}function u(){var e={method:"GET",headers:r()};return fetch("/users",e).then(s)}function s(e){return e.text().then((function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&(i(),location.reload(!0));var r=n&&n.message||e.statusText;return Promise.reject(r)}return n}))}var d=n("a18c"),f=JSON.parse(localStorage.getItem("user")),l=f?{status:{loggeduser:!0},user:f}:{status:{},user:null},m={login:function(e,t){var n=e.dispatch,r=e.commit,a=t.email,i=t.password;r("loginRequest",{email:a}),o.login(a,i).then((function(e){r("loginSuccess",e),d["a"].push("/")}),(function(e){r("loginFailure",e),n("notification/error",e,{root:!0})}))},logout:function(e){var t=e.commit;o.logout(),t("logout")},registeruser:function(e,t){var n=e.dispatch,r=e.commit;r("registerRequest",t),o.register(t).then((function(e){r("registerSuccess",e),n("notification/success","Registration successful",{root:!0}),d["a"].push("/login")}),(function(e){r("registerFailure",e),n("notification/error",e,{root:!0})}))}},p={loginRequest:function(e,t){e.status={loggingIn:!0},e.user=t},loginSuccess:function(e,t){e.status={loggeduser:!0},e.user=t},loginFailure:function(e){e.status={},e.user=null},logout:function(e){e.status={},e.user=null},registerRequest:function(e){e.status={registering:!0}},registerSuccess:function(e){e.status={}},registerFailure:function(e){e.status={}}}},9225:function(e,t,n){"use strict";n("d3b7"),n("159b"),n("ddb0"),n("ac1f"),n("466d");var r=n("47e2");function o(){var e=n("a35b"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n)}})),t}var a={short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"}},i={en:a,es:a,de:a,"en-GB":a};t["a"]=Object(r["a"])({locale:"sp",fallbackLocale:"sp",messages:o(),dateTimeFormats:i})},a18c:function(e,t,n){"use strict";var r=n("b85c"),o=n("1da1"),a=(n("96cf"),n("d3b7"),n("caad"),n("3ca3"),n("ddb0"),n("d9e2"),n("6c02")),i=n("86b6"),c=n("5530"),u=[{path:"/",name:"default",meta:{title:"starter",authRequired:!0},component:function(){return n.e("chunk-133bfbf3").then(n.bind(null,"e706"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-7e634f28"),n.e("chunk-2d0e5f4e")]).then(n.bind(null,"9760"))},meta:{title:"Login",beforeResolve:function(e,t,n){i["a"].getters["auth/loggedIn"]?n({name:"default"}):n()}}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-7e634f28"),n.e("chunk-2d0d3c32")]).then(n.bind(null,"5dc0"))},meta:{title:"Register",beforeResolve:function(e,t,n){i["a"].getters["auth/loggedIn"]?n({name:"default"}):n()}}},{path:"/forgot-password",name:"Forgot password",component:function(){return Promise.all([n.e("chunk-7e634f28"),n.e("chunk-3231fcdb"),n.e("chunk-283ba7dd")]).then(n.bind(null,"c8f9"))},meta:{title:"Forgot Password",beforeResolve:function(e,t,n){i["a"].getters["auth/loggedIn"]?n({name:"default"}):n()}}},{path:"/logout",name:"logout",meta:{title:"Logout",authRequired:!0,beforeResolve:function(e,t,n){i["a"].dispatch("auth/logOut");var r=t.matched.some((function(e){return e.push("/login")}));n(r?{name:"default"}:Object(c["a"])({},t))}},component:function(){return Promise.all([n.e("chunk-3231fcdb"),n.e("chunk-98bb55d0")]).then(n.bind(null,"7416"))}}],s=n("8c90"),d=Object(a["a"])({history:Object(a["b"])(),routes:u,mode:"history",scrollBehavior:function(e,t,n){return n||{top:0,left:0}}});d.beforeEach((function(e,t,n){{var r=e.matched.some((function(e){return e.meta.authRequired}));if(!r)return n();if(i["a"].getters["auth/loggedIn"])return i["a"].dispatch("auth/validate").then((function(e){e?n():o()}));function o(){n({name:"login",query:{redirectFrom:e.fullPath}})}o()}})),d.beforeResolve(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,o){var a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,a=Object(r["a"])(t.matched),e.prev=2,c=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.value,e.next=3,new Promise((function(e,a){r.meta&&r.meta.beforeResolve?r.meta.beforeResolve(t,n,(function(){arguments.length?(o.apply(void 0,arguments),a(new Error("Redirected"))):e()})):e()}));case 3:case"end":return e.stop()}}),e)})),a.s();case 5:if((i=a.n()).done){e.next=9;break}return e.delegateYield(c(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e["catch"](2),a.e(e.t1);case 14:return e.prev=14,a.f(),e.finish(14);case 17:e.next=22;break;case 19:return e.prev=19,e.t2=e["catch"](0),e.abrupt("return");case 22:document.title=t.meta.title+" | "+s.title,o();case 24:case"end":return e.stop()}}),e,null,[[0,19],[2,11,14,17]])})));return function(t,n,r){return e.apply(this,arguments)}}());t["a"]=d},a35b:function(e,t,n){var r={"./en.json":"e312","./sp.json":"1811"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="a35b"},c21a:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"mutations",(function(){return o})),n.d(t,"actions",(function(){return a}));var r={layoutType:"vertical",layoutWidth:"fluid",sidebarSize:"lg",topbar:"light",mode:"light",position:"fixed",sidebarView:"dark",sidebarColor:"dark"},o={CHANGE_LAYOUT:function(e,t){e.layoutType=t},CHANGE_LAYOUT_WIDTH:function(e,t){e.layoutWidth=t},CHANGE_SIDEBAR_TYPE:function(e,t){e.sidebarSize=t},CHANGE_TOPBAR:function(e,t){e.topbar=t},CHANGE_MODE:function(e,t){e.mode=t},CHANGE_POSITION:function(e,t){e.position=t},CHANGE_SIDEBAR_VIEW:function(e,t){e.sidebarView=t},CHANGE_SIDEBAR_COLOR:function(e,t){e.sidebarColor=t}},a={changeLayoutType:function(e,t){var n=e.commit,r=t.layoutType;n("CHANGE_LAYOUT",r),document.body.removeAttribute("style")},changeLayoutWidth:function(e,t){var n=e.commit,r=t.layoutWidth;n("CHANGE_LAYOUT_WIDTH",r)},changeSidebarSize:function(e,t){var n=e.commit,r=t.sidebarSize;n("CHANGE_SIDEBAR_TYPE",r)},changeTopbar:function(e,t){var n=e.commit,r=t.topbar;n("CHANGE_TOPBAR",r)},changeMode:function(e,t){var n=e.commit,r=t.mode;n("CHANGE_MODE",r)},changePosition:function(e,t){var n=e.commit,r=t.position;n("CHANGE_POSITION",r)},changeSidebarView:function(e,t){var n=e.commit,r=t.sidebarView;n("CHANGE_SIDEBAR_VIEW",r)},changeSidebarColor:function(e,t){var n=e.commit,r=t.sidebarColor;n("CHANGE_SIDEBAR_COLOR",r)}}},c775:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"getters",(function(){return o})),n.d(t,"mutations",(function(){return a})),n.d(t,"actions",(function(){return i}));n("c740"),n("a434"),n("7db0"),n("d3b7");var r={itemsCart:[],totalCart:0,qtyCart:0},o={getCartItems:function(e){return e.itemsCart},getotalCartSum:function(e){return e.totalCart},getQuantity:function(e){return e.qtyCart}},a={addProductToCart:function(e,t){var n=t,r=e.itemsCart.findIndex((function(e){return e.productId===n.id}));if(r>=0)e.itemsCart[r].qtyCart++;else{var o={productId:n.id,title:n.title,image:n.picture,price:n.price,qtyCart:1,brand:n.brand,partnumber:n.partnumber};e.itemsCart.push(o)}e.qtyCart++,e.totalCart+=n.price},removeProductFromCart:function(e,t){var n=t,r=e.itemsCart.findIndex((function(e){return e.productId===n})),o=e.itemsCart[r];e.itemsCart.splice(r,1),e.qtyCart-=o.qtyCart,e.totalCart-=o.price*o.qtyCart},decrementItemFromCart:function(e,t){var n=t,r=e.itemsCart.findIndex((function(e){return e.productId===n})),o=e.itemsCart[r];o.qtyCart<=1?(e.itemsCart.splice(r,1),e.qtyCart-=o.qtyCart,e.totalCart-=o.price*o.qtyCart):(e.itemsCart[r].qtyCart--,e.qtyCart--,e.totalCart-=o.price)},clearItemsFromCart:function(e){e.itemsCart=[],e.qtyCart=0,e.totalCart=0}},i={addToCart:function(e,t){var n=t.id,r=e.rootGetters["product/getProductss"],o=r.find((function(e){return e.id===n}));e.commit("addProductToCart",o)},removeFromCart:function(e,t){e.commit("removeProductFromCart",t.id)},decrementItem:function(e,t){e.commit("decrementItemFromCart",t.id)},clearItems:function(e){e.commit("clearItemsFromCart")}}},cfa9:function(e,t,n){var r={"./auth.js":"11c0","./authfack.js":"8dd5","./cart.js":"c775","./layout.js":"c21a","./notification.js":"2208"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="cfa9"},e06e:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d}));var r=n("d4ec"),o=n("bee2"),a=n("ade3"),i=(n("d3b7"),n("e9c4"),n("4f60")),c=(n("256a"),n("1862"),function(){function e(t){var n=this;Object(r["a"])(this,e),Object(a["a"])(this,"registerUser",(function(e,t,r){return new Promise((function(o,a){i["a"].auth().createUserWithEmailAndPassword(t,r).then((function(t){var n=i["a"].auth().currentUser.updateProfile({displayName:e});o(n)}),(function(e){a(n._handleError(e))}))}))})),Object(a["a"])(this,"loginUser",(function(e,t){return new Promise((function(r,o){i["a"].auth().signInWithEmailAndPassword(e,t).then((function(){var e=i["a"].auth().currentUser;r(e)}),(function(e){o(n._handleError(e))}))}))})),Object(a["a"])(this,"forgetPassword",(function(e){return new Promise((function(t,r){i["a"].auth().sendPasswordResetEmail(e,{url:window.location.protocol+"//"+window.location.host+"/login"}).then((function(){t(!0)})).catch((function(e){r(n._handleError(e))}))}))})),Object(a["a"])(this,"logout",(function(){return new Promise((function(e,t){i["a"].auth().signOut().then((function(){e(!0)})).catch((function(e){t(n._handleError(e))}))}))})),Object(a["a"])(this,"setLoggeedInUser",(function(e){sessionStorage.setItem("authUser",JSON.stringify(e))})),Object(a["a"])(this,"getAuthenticatedUser",(function(){return sessionStorage.getItem("authUser")?JSON.parse(sessionStorage.getItem("authUser")):null})),t&&(i["a"].initializeApp(t),i["a"].auth().onAuthStateChanged((function(e){e?sessionStorage.setItem("authUser",JSON.stringify(e)):sessionStorage.removeItem("authUser")})))}return Object(o["a"])(e,[{key:"_handleError",value:function(e){var t=e.message;return t}}]),e}()),u=null,s=function(e){return u||(u=new c(e)),u},d=function(){return u}},e312:function(e){e.exports=JSON.parse('{"t-menu":"Menu","t-pages":"Pages"}')},f3b6:function(e,t,n){}});
//# sourceMappingURL=app.4395beb9.js.map