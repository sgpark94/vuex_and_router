(function(e){function t(t){for(var r,o,l=t[0],s=t[1],c=t[2],u=0,f=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"eedab5de","chunk-2d21ab19":"b76d23fa","chunk-f5e8a58a":"a684991e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-f5e8a58a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-2d21ab19":"31d6cfe0","chunk-f5e8a58a":"eec0ceea"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){c=f[l],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"EventBus",(function(){return B}));n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{iconfont:"md"});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{attrs:{router:"",to:{name:"home"},exact:""}},[n("v-list-tile-action",[n("v-icon",[e._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Home")])],1)],1),!1===e.isLogin?n("v-list-tile",{attrs:{router:"",to:{name:"login"},exact:""}},[n("v-list-tile-action",[n("v-icon",[e._v("person")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Login")])],1)],1):n("v-list-tile",{attrs:{router:"",to:{name:"mypage"},exact:""}},[n("v-list-tile-action",[n("v-icon",[e._v("contact_mail")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Mypage")])],1)],1)],1)],1),n("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Application")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e.isLogin?n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",flat:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("more_vert")])],1)]}}],null,!1,1731369886)},[n("v-list",[n("v-list-tile",{attrs:{router:"",to:{name:"mypage"}}},[n("v-list-tile-title",[e._v("Mypage")])],1),n("v-list-tile",{on:{click:function(t){return e.$store.dispatch("logout")}}},[n("v-list-tile-title",[e._v("Logout")])],1)],1)],1):n("v-btn",{attrs:{flat:"",icon:"",router:"",to:{name:"login"}}},[e._v("Log In")])],1)],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[e._v("© 2017")])])],1)},i=[],l=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={data:function(){return{drawer:null}},props:{source:String},computed:u({},Object(s["c"])(["isLogin"]))},p=f,d=n("2877"),v=n("6544"),g=n.n(v),m=n("7496"),b=n("8336"),h=n("549c"),y=n("553a"),w=n("132d"),O=n("8860"),_=n("ba95"),L=n("40fe"),j=n("5d23"),k=n("e449"),E=n("f774"),P=n("9910"),S=n("71d9"),T=n("2a7f"),V=n("706c"),x=Object(d["a"])(p,a,i,!1,null,null,null),C=x.exports;g()(x,{VApp:m["a"],VBtn:b["a"],VContent:h["a"],VFooter:y["a"],VIcon:w["a"],VList:O["a"],VListTile:_["a"],VListTileAction:L["a"],VListTileContent:j["a"],VListTileTitle:j["b"],VMenu:k["a"],VNavigationDrawer:E["a"],VSpacer:P["a"],VToolbar:S["a"],VToolbarItems:T["a"],VToolbarSideIcon:V["a"],VToolbarTitle:T["b"]});var A=n("8c4f");r["a"].use(s["a"]);var I=new s["a"].Store({state:{userInfo:null,allUsers:[{id:"1",name:"test1",email:"test1@gmail.com",password:"123"},{id:"2",name:"test2",email:"test2@gmail.com",password:"456"}],isLogin:!1,isLoginError:!1},mutations:{loginSuccess:function(e,t){e.isLogin=!0,e.isLoginError=!1,e.userInfo=t},loginError:function(e){e.isLogin=!1,e.isLoginError=!0},logout:function(e){e.isLogin=!1,e.isLoginError=!1,e.userInfo=null}},actions:{login:function(e,t){var n=e.state,r=e.commit,o=null;n.allUsers.forEach((function(e){e.email===t.email&&(o=e)})),null===o||o.password!==t.password?r("loginError"):(r("loginSuccess",o),N.push({name:"mypage"}))},logout:function(e){var t=e.commit;t("logout"),N.push({name:"home"})}}});r["a"].use(A["a"]);var D=function(e,t,n){!0===I.state.isLogin?(alert("이미 로그인을 하였습니다."),n("/")):n()},M=function(e,t,n){!1===I.state.isLogin?(alert("로그인이 필요한 기능입니다."),n("/")):n()},N=new A["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",beforeEnter:D,component:function(){return n.e("chunk-f5e8a58a").then(n.bind(null,"a55b"))}},{path:"/mypage",name:"mypage",beforeEnter:M,component:function(){return n.e("chunk-2d21ab19").then(n.bind(null,"bd34"))}}]});r["a"].config.productionTip=!1;var B=new r["a"];new r["a"]({router:N,store:I,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.b3a1f856.js.map