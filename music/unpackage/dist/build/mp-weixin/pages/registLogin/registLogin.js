(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registLogin/registLogin"],{"002f":function(e,t,n){"use strict";n.r(t);var a=n("2e5c"),o=n("c274");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("a629");var c,u=n("f0c5"),l=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=l.exports},1102:function(e,t,n){},"2e5c":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"994b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},methods:{formSubmit:function(e){var t=this,n=e.detail.value.username,a=e.detail.value.password,o=/^[0-9]*$/,r=new RegExp(o);r.test(n)?t.cellphone(n,a):t.email(n,a)},cellphone:function(t,n){var a=this,o=a.serverUrl;e.request({url:o+"/login/cellphone",method:"POST",data:{phone:t,password:n},success:function(t){if(200==t.data.code){var n=t.data.account,a=t.data.profile;e.setStorageSync("globalUserAccount",n),e.setStorageSync("globalUserProfile",a),e.switchTab({url:"../me/me"})}}})},email:function(t,n){var a=this,o=a.serverUrl;e.request({url:o+"/login/",method:"POST",data:{email:t,password:n},success:function(t){if(200==t.data.code){console.log(t.data);var n=t.data.account,a=t.data.profile;e.setStorageSync("globalUserAccount",n),e.setStorageSync("globalUserProfile",a),e.switchTab({url:"../me/me"})}}})},wxLogin:function(t){var n=t.detail.userInfo;console.log(n),e.setStorageSync("globalUserProfile",n),e.switchTab({url:"../me/me"})}}};t.default=n}).call(this,n("543d")["default"])},a629:function(e,t,n){"use strict";var a=n("1102"),o=n.n(a);o.a},c274:function(e,t,n){"use strict";n.r(t);var a=n("994b"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},c706:function(e,t,n){"use strict";(function(e){n("8235");a(n("66fd"));var t=a(n("002f"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["c706","common/runtime","common/vendor"]]]);