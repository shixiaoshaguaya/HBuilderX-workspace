(function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./",i(i.s="535a")})({"0148":function(t,e,i){"use strict";i.r(e);var n=i("4d9e"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"0d55":function(t,e,i){"use strict";i.r(e);var n=i("27bb"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},1218:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={imtAudio:i("1d7a").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[i("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[i("v-uni-image",{staticClass:t._$g(3,"sc"),attrs:{src:t._$g(3,"a-src"),_i:3},on:{click:function(e){return t.$handleViewEvent(e)}}}),i("v-uni-view",{staticClass:t._$g(4,"sc"),attrs:{_i:4}},[t._v("\u6b4c\u66f2\u64ad\u653e")])],1)],1),i("imt-audio",{attrs:{_i:5},on:{prev:function(e){return t.$handleViewEvent(e)},next:function(e){return t.$handleViewEvent(e)}}}),t._l(t._$g(6,"f"),(function(e,n,a,r){return i("v-uni-view",{key:e,staticClass:t._$g("6-"+r,"sc"),class:t._$g("6-"+r,"c"),attrs:{_i:"6-"+r},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v(t._$g("6-"+r,"t0-0"))])}))],2)},r=[]},1390:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"body{background:#f5f5f5}.content{padding:20upx}.list{font-size:28upx;line-height:88upx;padding-left:30upx;background:#fff;-webkit-border-radius:10upx;border-radius:10upx;margin-top:20upx;color:#333}.active{background:#169af3;color:#fff}.search-box-icon{padding-top:15px;width:26px;height:26px}.hot-title{font-size:20px;margin-left:20upx;font-weight:700;margin-top:30upx}",""]),t.exports=e},"1d7a":function(t,e,i){"use strict";i.r(e);var n=i("44dd"),a=i("25ba");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("b054");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"40b6ba66",null,!1,n["a"],s);e["default"]=c.exports},"22dc":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[i("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[i("v-uni-image",{staticClass:t._$g(3,"sc"),attrs:{src:t._$g(3,"a-src"),_i:3},on:{click:function(e){return t.$handleViewEvent(e)}}}),i("v-uni-view",{staticClass:t._$g(4,"sc"),attrs:{_i:4}},[t._v("\u6b4c\u66f2\u64ad\u653e")])],1)],1),i("v-uni-audio",{attrs:{src:"http://m7.music.126.net/20201216145858/9bad5035c1e8f2c16e4fb8bdf117a3e7/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3216893992/9c48/3a94/c011/dd36dbbc99f7c09a1937d4651436548c.mp3",controls:!0,name:"\u666e\u901a\u7684\u4e0d\u666e\u901a\u5973\u5b69",author:"\u8721\u7b14\u5c0f\u65b0",_i:5}})],1)},r=[]},"24fb":function(t,e,i){"use strict";function n(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"===typeof btoa){var r=a(n),s=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(s).concat([r]).join("\n")}return[i].join("\n")}function a(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(i," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=n(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"===typeof t&&(t=[[null,t,""]]);var a={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(a[s]=!0)}for(var o=0;o<t.length;o++){var c=[].concat(t[o]);n&&a[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},"25ba":function(t,e,i){"use strict";i.r(e);var n=i("eb67"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"27bb":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{wxsProps:{}}},components:{}};e.default=n},"2c3f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".carousel{width:100%;height:440upx}\r\n\r\n/* \u63a8\u8350\u6b4c\u5355 start */.hot-ico{width:30upx;height:30upx;margin-top:15upx}.hot{width:100%;white-space:nowrap}.single-poster{display:inline-block;margin-left:20upx}.poster-wapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.poster{width:200upx;height:200upx}.movie-name{width:200upx;margin-top:10upx;font-size:14px;font-weight:700;\r\n\t/* name\u8d85\u51fa\u5219\u7701\u7565 */white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r\n\r\n/* \u63a8\u8350\u6b4c\u5355 end */\r\n\r\n/* \u6392\u884c\u699c start */.top{padding-left:30upx;padding-right:20upx;float:left;height:300upx;width:200upx}.top-img{height:200upx;width:200upx}.top-update{position:relative;top:-55upx;color:#0205bb}.top-name{position:relative;top:-55upx}\r\n\r\n/* \u6392\u884c\u699c end */.status-bar{height:var(--status-bar-height);width:100%}.search-box{width:100%;height:90upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 25upx}.search-box-icon{padding-top:15px;width:26px;height:26px}.search-input{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;margin:0 25upx;padding:0 15upx;border-bottom:1px solid #d7d7d7}.search-input .input{width:100%;height:100%;font-size:20px}.hot-search-title{width:100%;height:60upx;margin-top:60upx;line-height:60upx;margin-left:25upx}.hot-search-list{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff}.hot-search-list .search-list{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 25upx;margin-top:25upx}.search-list-left{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search-rank{width:100upx;height:100upx;text-align:center;font-size:20px;line-height:100upx;color:#ababab}.search-list-title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:20upx}.search-list-name{font-size:16px;font-weight:500;color:#505050;width:450upx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-msg{font-size:12px;color:#ababab;margin-top:10upx;width:450upx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-right{font-size:10px;color:#c5c5c5;padding-right:25upx}.last{width:100%;height:80upx;text-align:center;font-size:12px;color:#ababab;padding-top:10upx;line-height:60upx;background-color:#fff}.icon{width:30upx;height:30upx}",""]),t.exports=e},"2c99":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{wxsProps:{}}},components:{}};e.default=n},"3b7e":function(t,e,i){"use strict";i.r(e);var n=i("2c99"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"3bf8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".mv{width:700upx;height:400upx;margin:25upx}.mv-name{font-size:16px;color:#696969;width:100%;height:80upx;line-height:80upx;padding:0 40upx;border-bottom:1px solid #eee}.status-bar{height:var(--status-bar-height);width:100%}.search-box{width:100%;height:90upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 25upx}.search-box-icon{padding-top:15px;width:26px;height:26px}.search-input{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;margin:0 25upx;padding:0 15upx;border-bottom:1px solid #d7d7d7}.search-input .input{width:100%;height:100%;font-size:20px}.hot-search-title{width:100%;height:60upx;margin-top:60upx;line-height:60upx;margin-left:25upx}.hot-search-list{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff}.hot-search-list .search-list{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 25upx;margin-top:25upx}.search-list-left{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search-rank{width:100upx;height:100upx;text-align:center;font-size:20px;line-height:100upx;color:#ababab}.search-list-title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:20upx}.search-list-name{font-size:16px;font-weight:500;color:#505050;width:450upx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-msg{font-size:12px;color:#ababab;margin-top:10upx;width:450upx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-right{font-size:10px;color:#c5c5c5;padding-right:25upx}.last{width:100%;height:80upx;text-align:center;font-size:12px;color:#ababab;padding-top:10upx;line-height:60upx;background-color:#fff}.icon{width:30upx;height:30upx}",""]),t.exports=e},"3d03":function(t,e,i){var n=i("972c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("f979201a",n,!0,{sourceMap:!1,shadowMode:!1})},"3fc2":function(t,e,i){"use strict";var n=i("7bfe"),a=i.n(n);a.a},"44dd":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[i("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[t._v(t._$g(2,"t0-0"))]),i("v-uni-slider",{staticClass:t._$g(3,"sc"),attrs:{activeColor:t._$g(3,"a-activeColor"),"block-size":"16",value:t._$g(3,"a-value"),max:t._$g(3,"a-max"),_i:3},on:{changing:function(e){return t.$handleViewEvent(e)},change:function(e){return t.$handleViewEvent(e)}}}),i("v-uni-view",{staticClass:t._$g(4,"sc"),attrs:{_i:4}},[t._v(t._$g(4,"t0-0"))])],1),i("v-uni-view",{staticClass:t._$g(5,"sc"),style:t._$g(5,"s"),attrs:{_i:5}},[t._$g(6,"i")?i("v-uni-view",{staticClass:t._$g(6,"sc"),style:t._$g(6,"s"),attrs:{_i:6},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("\ue601")]):t._e(),i("v-uni-view",{staticClass:t._$g(7,"sc"),class:t._$g(7,"c"),style:t._$g(7,"s"),attrs:{_i:7},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v(t._$g(7,"t0-0"))]),t._$g(8,"i")?i("v-uni-view",{staticClass:t._$g(8,"sc"),style:t._$g(8,"s"),attrs:{_i:8},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("\ue601")]):t._e()],1)],1)},r=[]},"4d9e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{wxsProps:{}}},components:{}};e.default=n},"4e7b":function(t,e,i){"use strict";i.r(e);var n=i("22dc"),a=i("0d55");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("a4b8");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},"535a":function(t,e,i){"use strict";function n(){function t(t){var e=i("f2d2");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}i("8f6b"),"undefined"!==typeof plus?n():document.addEventListener("plusready",n)},5483:function(t,e,i){var n=i("fae7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("00d3fd28",n,!0,{sourceMap:!1,shadowMode:!1})},5542:function(t,e,i){var n=i("3bf8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("3a5e69ca",n,!0,{sourceMap:!1,shadowMode:!1})},5635:function(t,e,i){var n=i("71da");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("0d0ea18d",n,!0,{sourceMap:!1,shadowMode:!1})},5987:function(t,e,i){"use strict";i.r(e);var n=i("b425"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"5ad6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@font-face{font-family:icon;src:url(//at.alicdn.com/t/font_1104838_fxzimc34xw.eot);src:url(//at.alicdn.com/t/font_1104838_fxzimc34xw.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_1104838_fxzimc34xw.woff2) format("woff2"),url(//at.alicdn.com/t/font_1104838_fxzimc34xw.woff) format("woff"),url(//at.alicdn.com/t/font_1104838_fxzimc34xw.ttf) format("truetype"),url(//at.alicdn.com/t/font_1104838_fxzimc34xw.svg#iconfont) format("svg")}.imt-audio[data-v-40b6ba66]{padding:30upx 0;background:#fff;-webkit-border-radius:20upx;border-radius:20upx}.audio-wrapper[data-v-40b6ba66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.audio-number[data-v-40b6ba66]{width:120upx;font-size:24upx;line-height:1;color:#333;text-align:center}.audio-slider[data-v-40b6ba66]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:0}.audio-control-wrapper[data-v-40b6ba66]{margin-top:20upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-family:icon!important}.audio-control[data-v-40b6ba66]{font-size:32upx;line-height:1;border:4upx solid;-webkit-border-radius:50%;border-radius:50%;padding:16upx}.audio-control-next[data-v-40b6ba66]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.audio-control-switch[data-v-40b6ba66]{font-size:40upx;margin:0 100upx}.audioLoading[data-v-40b6ba66]{-webkit-animation:loading-data-v-40b6ba66 2s;animation:loading-data-v-40b6ba66 2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes loading-data-v-40b6ba66{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-data-v-40b6ba66{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"5bf5":function(t,e,i){"use strict";var n=i("3d03"),a=i.n(n);a.a},"5c23":function(t,e,i){var n=i("2c3f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("7108d922",n,!0,{sourceMap:!1,shadowMode:!1})},"6c0c":function(t,e,i){var n=i("5ad6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("35e56bab",n,!0,{sourceMap:!1,shadowMode:!1})},7008:function(t,e,i){"use strict";i.r(e);var n=i("a6a5"),a=i("5987");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("3fc2");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},"71da":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"body{background:#f5f5f5}.content{padding:20upx}.list{font-size:28upx;line-height:88upx;padding-left:30upx;background:#fff;-webkit-border-radius:10upx;border-radius:10upx;margin-top:20upx;color:#333}.active{background:#169af3;color:#fff}.search-box-icon{padding-top:15px;width:26px;height:26px}.hot-title{font-size:20px;margin-left:20upx;font-weight:700;margin-top:20upx}",""]),t.exports=e},"7bfe":function(t,e,i){var n=i("7f80");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("4ee01cfa",n,!0,{sourceMap:!1,shadowMode:!1})},"7d9f":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}})],1)},r=[]},"7f7e":function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},a=0;a<e.length;a++){var r=e[a],s=r[0],o=r[1],c=r[2],u=r[3],l={id:t+":"+a,css:o,media:c,sourceMap:u};n[s]?n[s].parts.push(l):i.push(n[s]={id:s,parts:[l]})}return i}i.r(e),i.d(e,"default",(function(){return b}));var a="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,u=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(t,e,i,a){u=i,f=a||{};var s=n(t,e);return x(s),function(e){for(var i=[],a=0;a<s.length;a++){var o=s[a],c=r[o.id];c.refs--,i.push(c)}e?(s=n(t,e),x(s)):s=[];for(a=0;a<i.length;a++){c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete r[c.id]}}}}function x(t){for(var e=0;e<t.length;e++){var i=t[e],n=r[i.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](i.parts[a]);for(;a<i.parts.length;a++)n.parts.push(v(i.parts[a]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(v(i.parts[a]));r[i.id]={id:i.id,refs:1,parts:s}}}}function g(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function v(t){var e,i,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(u)return l;n.parentNode.removeChild(n)}if(p){var a=c++;n=o||(o=g()),e=h.bind(null,n,a,!1),i=h.bind(null,n,a,!0)}else n=g(),e=_.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}();function h(t,e,i,n){var a=i?"":M(n.css);if(t.styleSheet)t.styleSheet.cssText=w(e,a);else{var r=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function _(t,e){var i=M(e.css),n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),f.ssrId&&t.setAttribute(d,e.id),a&&(i+="\n/*# sourceURL="+a.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,k=/var\(--status-bar-height\)/gi,y=/var\(--window-top\)/gi,$=/var\(--window-bottom\)/gi,C=/var\(--window-left\)/gi,j=/var\(--window-right\)/gi,z=!1;function M(t){if(!uni.canIUse("css.var")){!1===z&&(z=plus.navigator.getStatusbarHeight());var e={statusBarHeight:z,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(k,e.statusBarHeight+"px").replace(y,e.top+"px").replace($,e.bottom+"px").replace(C,"0px").replace(j,"0px")}return t.replace(/\{[\s\S]+?\}/g,(function(t){return t.replace(m,(function(t,e){return uni.upx2px(e)+"px"}))}))}},"7f80":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".status-bar{height:var(--status-bar-height);width:100%}.search-box{width:100%;height:90upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 25upx}.search-box-icon{padding-top:15px;width:26px;height:26px}.search-input{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;margin:0 25upx;padding:0 15upx;border-bottom:1px solid #d7d7d7}.search-input .input{width:100%;height:100%;font-size:20px}.hot-search-title{width:100%;height:60upx;margin-top:60upx;line-height:60upx;margin-left:25upx}.hot-search-list{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fff}.hot-search-list .search-list{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 25upx;margin-top:25upx}.search-list-left{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search-rank{width:100upx;height:100upx;text-align:center;font-size:20px;line-height:100upx;color:#ababab}.search-list-title{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:20upx}.search-list-name{font-size:16px;font-weight:500;color:#505050;width:450upx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-msg{font-size:12px;color:#ababab;margin-top:10upx;width:450upx;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-list-right{font-size:10px;color:#c5c5c5;padding-right:25upx}.last{width:100%;height:80upx;text-align:center;font-size:12px;color:#ababab;padding-top:10upx;line-height:60upx;background-color:#fff}.icon{width:30upx;height:30upx}",""]),t.exports=e},"87be":function(t,e,i){"use strict";i.r(e);var n=i("fbf5"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"8f6b":function(t,e,i){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"music",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(i("a1e5").default)})),__definePage("pages/Video/Video",(function(){return Vue.extend(i("a648").default)})),__definePage("pages/me/me",(function(){return Vue.extend(i("d2b6").default)})),__definePage("pages/search/search",(function(){return Vue.extend(i("7008").default)})),__definePage("pages/play/play",(function(){return Vue.extend(i("dc5a").default)})),__definePage("pages/play/play2",(function(){return Vue.extend(i("4e7b").default)}))},"92c5":function(t,e,i){"use strict";var n=i("5c23"),a=i.n(n);a.a},"95de":function(t,e,i){"use strict";i.r(e);var n=i("cbe1"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"972c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".page-fill{width:100%;height:100%}\r\n\r\n/* \u5934\u90e8\u4e2a\u4eba\u4fe1\u606f start */.header{\r\n\r\n\r\npadding:120upx 30upx 40upx 30upx;\r\nbackground-color:#ffd655;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.face{width:120upx;height:120upx;-webkit-border-radius:50%;border-radius:50%}.info-wapper{width:80%;margin-left:40upx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.nickname{color:#6a5018;font-size:18px;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;width:15%}.settings{width:40upx;height:40upx}\r\n\r\n/* \u5934\u90e8\u4e2a\u4eba\u4fe1\u606f end */\r\n\r\n/* \u4e2d\u95f4\u7684 NEXT \u5927LOGO start */.body{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.bin-next{font-size:160upx;color:#f7f7f7}\r\n\r\n/* \u4e2d\u95f4\u7684 NEXT \u5927LOGO end */",""]),t.exports=e},"9d03":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[i("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[i("v-uni-input",{staticClass:t._$g(3,"sc"),attrs:{type:"text","placeholder-style":"color:#ababab;",_i:3},on:{click:function(e){return t.$handleViewEvent(e)}}})],1),i("v-uni-text",{staticClass:t._$g(4,"sc"),attrs:{_i:4}})],1),i("v-uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}},[i("v-uni-view",{staticClass:t._$g(6,"sc"),attrs:{_i:6}},[i("v-uni-view",{staticClass:t._$g(7,"sc"),attrs:{_i:7}},[t._v("\u6700\u65b0MV")])],1)],1),t._l(t._$g(8,"f"),(function(e,n,a,r){return i("v-uni-view",{key:e,attrs:{_i:"8-"+r}},[i("v-uni-video",{staticClass:t._$g("9-"+r,"sc"),attrs:{src:t._$g("9-"+r,"a-src"),poster:t._$g("9-"+r,"a-poster"),controls:!0,direction:"90",_i:"9-"+r}}),i("v-uni-view",{staticClass:t._$g("10-"+r,"sc"),attrs:{_i:"10-"+r}},[t._v(t._$g("10-"+r,"t0-0"))])],1)}))],2)},r=[]},a1e5:function(t,e,i){"use strict";i.r(e);var n=i("aed4"),a=i("3b7e");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("92c5");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},a4b8:function(t,e,i){"use strict";var n=i("5635"),a=i.n(n);a.a},a648:function(t,e,i){"use strict";i.r(e);var n=i("9d03"),a=i("87be");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("e193");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},a6a5:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}}),i("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[i("v-uni-image",{staticClass:t._$g(3,"sc"),attrs:{src:t._$g(3,"a-src"),_i:3},on:{click:function(e){return t.$handleViewEvent(e)}}}),i("v-uni-view",{staticClass:t._$g(4,"sc"),attrs:{_i:4}},[i("v-uni-input",{staticClass:t._$g(5,"sc"),attrs:{type:"text",value:"",focus:"true","placeholder-style":"color:#ababab;",_i:5}})],1),i("v-uni-text",{staticClass:t._$g(6,"sc"),attrs:{_i:6}})],1),i("v-uni-view",{staticClass:t._$g(7,"sc"),attrs:{_i:7}},[t._v("\u70ed\u641c\u699c")]),i("v-uni-view",{staticClass:t._$g(8,"sc"),attrs:{_i:8}},t._l(t._$g(9,"f"),(function(e,n,a,r){return i("v-uni-view",{key:e,staticClass:t._$g("9-"+r,"sc"),attrs:{_i:"9-"+r}},[i("v-uni-view",{staticClass:t._$g("10-"+r,"sc"),attrs:{_i:"10-"+r}},[i("v-uni-view",{staticClass:t._$g("11-"+r,"sc"),attrs:{_i:"11-"+r}},[t._v(t._$g("11-"+r,"t0-0"))]),i("v-uni-view",{staticClass:t._$g("12-"+r,"sc"),attrs:{_i:"12-"+r}},[i("v-uni-view",{staticClass:t._$g("13-"+r,"sc"),attrs:{_i:"13-"+r}},[t._v(t._$g("13-"+r,"t0-0"))]),i("v-uni-view",{staticClass:t._$g("14-"+r,"sc"),attrs:{_i:"14-"+r}},[t._v(t._$g("14-"+r,"t0-0"))])],1)],1),i("v-uni-view",{staticClass:t._$g("15-"+r,"sc"),attrs:{_i:"15-"+r}},[i("v-uni-image",{staticClass:t._$g("16-"+r,"sc"),attrs:{src:t._$g("16-"+r,"a-src"),_i:"16-"+r}}),t._v(t._$g("15-"+r,"t1-0"))],1)],1)})),1),i("v-uni-view",{staticClass:t._$g(17,"sc"),attrs:{_i:17}},[t._v("\u6ca1\u6709\u5566\xa0~")])],1)},r=[]},aed4:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("v-uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[i("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[i("v-uni-input",{staticClass:t._$g(3,"sc"),attrs:{type:"text","placeholder-style":"color:#ababab;",_i:3},on:{click:function(e){return t.$handleViewEvent(e)}}})],1),i("v-uni-text",{staticClass:t._$g(4,"sc"),attrs:{_i:4}})],1),i("v-uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}},[i("v-uni-view",{staticClass:t._$g(6,"sc"),attrs:{_i:6}},[i("v-uni-view",{staticClass:t._$g(7,"sc"),attrs:{_i:7}},[t._v("\u63a8\u8350\u65b0\u97f3\u4e50")])],1)],1),i("v-uni-swiper",{staticClass:t._$g(8,"sc"),attrs:{"indicator-dots":!0,autoplay:!0,_i:8}},t._l(t._$g(9,"f"),(function(e,n,a,r){return i("v-uni-swiper-item",{key:e,attrs:{_i:"9-"+r},on:{click:function(e){return t.$handleViewEvent(e)}}},[i("v-uni-image",{staticClass:t._$g("10-"+r,"sc"),attrs:{src:t._$g("10-"+r,"a-src"),_i:"10-"+r}})],1)})),1),i("v-uni-view",{staticClass:t._$g(11,"sc"),attrs:{_i:11}},[i("v-uni-view",{staticClass:t._$g(12,"sc"),attrs:{_i:12}},[i("v-uni-view",{staticClass:t._$g(13,"sc"),attrs:{_i:13}},[t._v("\u63a8\u8350\u6b4c\u5355")])],1)],1),i("v-uni-scroll-view",{staticClass:t._$g(14,"sc"),attrs:{"scroll-x":"true",_i:14}},t._l(t._$g(15,"f"),(function(e,n,a,r){return i("v-uni-view",{key:e,staticClass:t._$g("15-"+r,"sc"),attrs:{_i:"15-"+r}},[i("v-uni-view",{staticClass:t._$g("16-"+r,"sc"),attrs:{_i:"16-"+r}},[i("v-uni-image",{staticClass:t._$g("17-"+r,"sc"),attrs:{src:t._$g("17-"+r,"a-src"),_i:"17-"+r}}),i("v-uni-view",{staticClass:t._$g("18-"+r,"sc"),attrs:{_i:"18-"+r}},[t._v(t._$g("18-"+r,"t0-0"))])],1)],1)})),1),i("v-uni-view",{staticClass:t._$g(19,"sc"),attrs:{_i:19}},[i("v-uni-view",{staticClass:t._$g(20,"sc"),attrs:{_i:20}},[i("v-uni-view",{staticClass:t._$g(21,"sc"),attrs:{_i:21}},[t._v("\u6392\u884c\u699c")])],1)],1),i("v-uni-view",{attrs:{_i:22}},t._l(t._$g(23,"f"),(function(e,n,a,r){return i("v-uni-view",{key:e,staticClass:t._$g("23-"+r,"sc"),attrs:{_i:"23-"+r}},[i("v-uni-view",{staticClass:t._$g("24-"+r,"sc"),attrs:{_i:"24-"+r}},[i("v-uni-image",{staticClass:t._$g("25-"+r,"sc"),attrs:{src:t._$g("25-"+r,"a-src"),_i:"25-"+r}}),i("v-uni-view",{staticClass:t._$g("26-"+r,"sc"),attrs:{_i:"26-"+r}},[t._v(t._$g("26-"+r,"t0-0"))]),i("v-uni-view",{staticClass:t._$g("27-"+r,"sc"),attrs:{_i:"27-"+r}},[t._v(t._$g("27-"+r,"t0-0"))])],1)],1)})),1)],1)},r=[]},b054:function(t,e,i){"use strict";var n=i("6c0c"),a=i.n(n);a.a},b425:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{wxsProps:{}}},components:{}};e.default=n},b536:function(t,e,i){var n=i("1390");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("7f7e").default;a("45399862",n,!0,{sourceMap:!1,shadowMode:!1})},cbe1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("1d7a"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{wxsProps:{}}},components:{imtAudio:n.default}};e.default=r},d076:function(t,e,i){"use strict";var n=i("b536"),a=i.n(n);a.a},d2b6:function(t,e,i){"use strict";i.r(e);var n=i("7d9f"),a=i("0148");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("5bf5");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},dc5a:function(t,e,i){"use strict";i.r(e);var n=i("1218"),a=i("95de");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d076");var s,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},e193:function(t,e,i){"use strict";var n=i("5542"),a=i.n(n);a.a},eb67:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:["src","autoplay","continue","control","color"],data:function(){return{wxsProps:{}}},components:{}};e.default=n},f0c5:function(t,e,i){"use strict";function n(t,e,i,n,a,r,s,o,c,u){var l,f="function"===typeof t?t.options:t;if(c){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(f.components,p)&&(f.components[p]=c[p])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=i,f._compiled=!0),n&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(f.functional){f._injectStyles=l;var b=f.render;f.render=function(t,e){return l.call(e),b(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,l):[l]}return{exports:t,options:f}}i.d(e,"a",(function(){return n}))},f2d2:function(t,e,i){"use strict";i.r(e);var n=i("5483"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},fae7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\u6bcf\u4e2a\u9875\u9762\u516c\u5171css */.page{width:100%;height:100%;background-color:#fff\n\t/* position: absolute; */}.page-block{background-color:#fff}.super-hot{margin-top:12upx;padding:20upx}.hot-title-wapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.hot-title{font-size:20px;margin-left:20upx;font-weight:700}",""]),t.exports=e},fbf5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{wxsProps:{}}},components:{}};e.default=n}});