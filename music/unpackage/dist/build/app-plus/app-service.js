(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0148":function(t,s,e){"use strict";e.r(s);var a=e("2407"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},"0cc1":function(t,s,e){"use strict";var a;e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return a}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:t._$s(0,"sc","imt-audio"),attrs:{_i:0}},[e("view",{staticClass:t._$s(1,"sc","audio-wrapper"),attrs:{_i:1}},[e("view",{staticClass:t._$s(2,"sc","audio-number"),attrs:{_i:2}},[t._v(t._$s(2,"t0-0",t._s(t.format(t.current))))]),e("slider",{staticClass:t._$s(3,"sc","audio-slider"),attrs:{activeColor:t._$s(3,"a-activeColor",t.color),value:t._$s(3,"a-value",t.current),max:t._$s(3,"a-max",t.duration),_i:3},on:{changing:function(s){t.seek=!0,t.current=s.detail.value},change:function(s){return t.audio.seek(s.detail.value)}}}),e("view",{staticClass:t._$s(4,"sc","audio-number"),attrs:{_i:4}},[t._v(t._$s(4,"t0-0",t._s(t.format(t.duration))))])]),e("view",{staticClass:t._$s(5,"sc","audio-control-wrapper"),style:t._$s(5,"s",{color:t.color}),attrs:{_i:5}},[t._$s(6,"i",t.control)?e("view",{staticClass:t._$s(6,"sc","audio-control audio-control-prev"),style:t._$s(6,"s",{borderColor:t.color}),attrs:{_i:6},on:{click:t.prev}}):t._e(),e("view",{staticClass:t._$s(7,"sc","audio-control audio-control-switch"),class:t._$s(7,"c",{audioLoading:t.loading}),style:t._$s(7,"s",{borderColor:t.color}),attrs:{_i:7},on:{click:function(s){t.audio.paused?t.play():t.audio.pause()}}},[t._v(t._$s(7,"t0-0",t._s(t.loading?"\ue600":t.paused?"\ue865":"\ue612")))]),t._$s(8,"i",t.control)?e("view",{staticClass:t._$s(8,"sc","audio-control audio-control-next"),style:t._$s(8,"s",{borderColor:t.color}),attrs:{_i:8},on:{click:t.next}}):t._e()])])},r=[]},"0d55":function(t,s,e){"use strict";e.r(s);var a=e("4659"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},1218:function(t,s,e){"use strict";e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return a}));var a={imtAudio:e("1d7a").default},i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:t._$s(0,"sc","page"),attrs:{_i:0}},[a("view",{staticClass:t._$s(1,"sc","page-block super-hot"),attrs:{_i:1}},[a("view",{staticClass:t._$s(2,"sc","hot-title-wapper"),attrs:{_i:2}},[a("image",{staticClass:t._$s(3,"sc","search-box-icon"),attrs:{src:t._$s(3,"a-src",e("94aa")),_i:3},on:{click:function(s){return t.goBack()}}}),a("view",{staticClass:t._$s(4,"sc","hot-title"),attrs:{_i:4}})])]),a("imt-audio",{attrs:{autoplay:!0,continue:!0,src:t.audio[t.now],duration:t.audio[t.now].duration,_i:5},on:{prev:function(s){t.now=0===t.now?t.audio.length-1:t.now-1},next:function(s){t.now=t.now===t.audio.length-1?0:t.now+1}}}),t._l(t._$s(6,"f",{forItems:t.audio}),(function(s,e,i,r){return a("view",{key:t._$s(6,"f",{forIndex:i,key:e}),staticClass:t._$s("6-"+r,"sc","list"),class:t._$s("6-"+r,"c",{active:e===t.now}),attrs:{_i:"6-"+r},on:{click:function(s){t.now=e}}},[t._v(t._$s("6-"+r,"t0-0",t._s(e+1)))])}))],2)},r=[]},1444:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={};s.default=a},"1d7a":function(t,s,e){"use strict";e.r(s);var a=e("0cc1"),i=e("25ba");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);var n,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);s["default"]=o.exports},"22dc":function(t,s,e){"use strict";var a;e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return a}));var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:t._$s(0,"sc","page"),attrs:{_i:0}},[a("view",{staticClass:t._$s(1,"sc","page-block super-hot"),attrs:{_i:1}},[a("view",{staticClass:t._$s(2,"sc","hot-title-wapper"),attrs:{_i:2}},[a("image",{staticClass:t._$s(3,"sc","search-box-icon"),attrs:{src:t._$s(3,"a-src",e("94aa")),_i:3},on:{click:function(s){return t.goBack()}}}),a("view",{staticClass:t._$s(4,"sc","hot-title"),attrs:{_i:4}})])]),a("audio",{attrs:{_i:5}})])},r=[]},2407:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{}},methods:{}};s.default=a},"25ba":function(t,s,e){"use strict";e.r(s);var a=e("e2f7"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},2711:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{mvList:[],mvurlList:[]}},onLoad:function(){var t=this,s=t.serverUrl;uni.request({url:s+"/mv/first?limit=10",method:"GET",success:function(s){if(200==s.data.code){for(var e=s.data.data,a=0;a<e.length;a++){var i=e[a].id;t.hqmvurl(i,a)}t.mvList=e}}})},methods:{goSearch:function(){uni.navigateTo({url:"../search/search"})},hqmvurl:function(t,s){var e=this,a=e.serverUrl;uni.request({url:a+"/mv/url?id="+t,method:"GET",success:function(t){if(200==t.data.code){var a=t.data.data.url;e.mvurlList[s]=a}}})}}};s.default=a},"3b7e":function(t,s,e){"use strict";e.r(s);var a=e("4b9e"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},4659:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{}},onLoad:function(){},methods:{goBack:function(){history.back()}}};s.default=a},"4b9e":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{newsongList:[],hotSuperheroList:[],topList:[]}},onLoad:function(){var t=this,s=t.serverUrl;uni.request({url:s+"/personalized/newsong?limit=6",method:"GET",success:function(s){if(200==s.data.code){var e=s.data.result;t.newsongList=e}}}),uni.request({url:s+"/personalized?limit=6",method:"GET",success:function(s){if(200==s.data.code){var e=s.data.result;t.hotSuperheroList=e}}}),uni.request({url:s+"/toplist",method:"GET",success:function(s){if(200==s.data.code){var e=s.data.list;t.topList=e}}})},methods:{goSearch:function(){uni.navigateTo({url:"../search/search"})},goPlay:function(t){uni.navigateTo({url:"../play/play2"})}}};s.default=a},"4e7b":function(t,s,e){"use strict";e.r(s);var a=e("22dc"),i=e("0d55");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);var n,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);s["default"]=o.exports},"535a":function(t,s,e){"use strict";e("8235");var a=r(e("8bbf")),i=r(e("ee12"));function r(t){return t&&t.__esModule?t:{default:t}}function n(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function c(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?n(Object(e),!0).forEach((function(s){o(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function o(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}a.default.config.productionTip=!1,a.default.prototype.serverUrl="http://81.68.83.24:3000",a.default.prototype.getGlobalUser=function(t){var s=uni.getStorageSync("globalUser");return null!=s&&""!=s&&void 0!=s?s:null},i.default.mpType="app";var u=new a.default(c({},i.default));u.$mount()},5987:function(t,s,e){"use strict";e.r(s);var a=e("a09f"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},"5a6a":function(t,s,e){"use strict";e.r(s);var a=e("1444"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},7008:function(t,s,e){"use strict";e.r(s);var a=e("a6a5"),i=e("5987");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);var n,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);s["default"]=o.exports},"7d9f":function(t,s,e){"use strict";var a;e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return a}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:t._$s(0,"sc","page page-fill"),attrs:{_i:0}},[e("view",{staticClass:t._$s(1,"sc","header"),attrs:{_i:1}})])},r=[]},8235:function(t,s,e){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var s=this.constructor;return this.then((function(e){return s.resolve(t()).then((function(){return e}))}),(function(e){return s.resolve(t()).then((function(){throw e}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(e("a1e5").default)})),__definePage("pages/Video/Video",(function(){return Vue.extend(e("a648").default)})),__definePage("pages/me/me",(function(){return Vue.extend(e("d2b6").default)})),__definePage("pages/search/search",(function(){return Vue.extend(e("7008").default)})),__definePage("pages/play/play",(function(){return Vue.extend(e("dc5a").default)})),__definePage("pages/play/play2",(function(){return Vue.extend(e("4e7b").default)}))},"87be":function(t,s,e){"use strict";e.r(s);var a=e("2711"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},"8bbf":function(t,s){t.exports=Vue},"94aa":function(t,s){t.exports="/static/images/arrows.png"},"95de":function(t,s,e){"use strict";e.r(s);var a=e("a0c3"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(s,t,(function(){return a[t]}))}(r);s["default"]=i.a},"9d03":function(t,s,e){"use strict";var a;e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return a}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:t._$s(0,"sc","page"),attrs:{_i:0}},[e("view",{staticClass:t._$s(1,"sc","search-box"),attrs:{_i:1}},[e("view",{staticClass:t._$s(2,"sc","search-input"),attrs:{_i:2}},[e("input",{staticClass:t._$s(3,"sc","input"),attrs:{_i:3},on:{click:t.goSearch}})]),e("text",{staticClass:t._$s(4,"sc","search-box-icon text-black cuIcon-people"),attrs:{_i:4}})]),e("view",{staticClass:t._$s(5,"sc","page-block super-hot"),attrs:{_i:5}},[e("view",{staticClass:t._$s(6,"sc","hot-title-wapper"),attrs:{_i:6}},[e("view",{staticClass:t._$s(7,"sc","hot-title"),attrs:{_i:7}})])]),t._l(t._$s(8,"f",{forItems:t.mvurlList}),(function(s,a,i,r){return e("view",{key:t._$s(8,"f",{forIndex:i,key:"8-"+r})},[e("video",{staticClass:t._$s("9-"+r,"sc","mv"),attrs:{src:t._$s("9-"+r,"a-src",s),poster:t._$s("9-"+r,"a-poster",t.mvList[a].cover),_i:"9-"+r}}),e("view",{staticClass:t._$s("10-"+r,"sc","mv-name"),attrs:{_i:"10-"+r}},[t._v(t._$s("10-"+r,"t0-0",t._s(t.mvList[a].name)))])])}))],2)},r=[]},a09f:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{searchList:[],keywords:""}},onLoad:function(){var t=this,s=t.serverUrl;uni.request({url:s+"/search/hot/detail",method:"POST",success:function(s){if(200==s.data.code){var e=s.data.data;t.searchList=e}}})},methods:{goBack:function(){history.back()}}};s.default=a},a0c3:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=i(e("1d7a"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{audio:["http://m7.music.126.net/20201216145858/9bad5035c1e8f2c16e4fb8bdf117a3e7/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3216893992/9c48/3a94/c011/dd36dbbc99f7c09a1937d4651436548c.mp3"],songid:[],now:0}},onLoad:function(t){var s=this,e=s.songid.length;s.songid[e]=t.songid;for(var a=0;a<s.songid.length;a++){var i=s.songid[a];s.hqsongurl(i)}},methods:{goBack:function(){history.back()},hqsongurl:function(t){var s=this,e=s.serverUrl;uni.request({url:e+"/song/url?id="+t,method:"GET",success:function(t){if(200==t.data.code){var e=s.audio.length,a=t.data.data[0].url;s.audio[e]=a}}})}},components:{imtAudio:a.default}};s.default=r},a1e5:function(t,s,e){"use strict";e.r(s);var a=e("aed4"),i=e("3b7e");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);var n,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);s["default"]=o.exports},a648:function(t,s,e){"use strict";e.r(s);var a=e("9d03"),i=e("87be");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);var n,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);s["default"]=o.exports},a6a5:function(t,s,e){"use strict";var a;e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return a}));var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[a("view",{staticClass:t._$s(1,"sc","status-bar"),attrs:{_i:1}}),a("view",{staticClass:t._$s(2,"sc","search-box"),attrs:{_i:2}},[a("image",{staticClass:t._$s(3,"sc","search-box-icon"),attrs:{src:t._$s(3,"a-src",e("94aa")),_i:3},on:{click:function(s){return t.goBack()}}}),a("view",{staticClass:t._$s(4,"sc","search-input"),attrs:{_i:4}},[a("input",{staticClass:t._$s(5,"sc","input"),attrs:{_i:5}})]),a("text",{staticClass:t._$s(6,"sc","search-box-icon text-black cuIcon-people"),attrs:{_i:6}})]),a("view",{staticClass:t._$s(7,"sc","hot-search-title"),attrs:{_i:7}}),a("view",{staticClass:t._$s(8,"sc","hot-search-list"),attrs:{_i:8}},t._l(t._$s(9,"f",{forItems:t.searchList}),(function(s,e,i,r){return a("view",{key:t._$s(9,"f",{forIndex:i,key:e}),staticClass:t._$s("9-"+r,"sc","search-list"),attrs:{_i:"9-"+r}},[a("view",{staticClass:t._$s("10-"+r,"sc","search-list-left"),attrs:{_i:"10-"+r}},[a("view",{staticClass:t._$s("11-"+r,"sc","search-rank"),attrs:{_i:"11-"+r}},[t._v(t._$s("11-"+r,"t0-0",t._s(e+1)))]),a("view",{staticClass:t._$s("12-"+r,"sc","search-list-title"),attrs:{_i:"12-"+r}},[a("view",{staticClass:t._$s("13-"+r,"sc","search-list-name"),attrs:{_i:"13-"+r}},[t._v(t._$s("13-"+r,"t0-0",t._s(s.searchWord)))]),a("view",{staticClass:t._$s("14-"+r,"sc","search-list-msg"),attrs:{_i:"14-"+r}},[t._v(t._$s("14-"+r,"t0-0",t._s(s.content)))])])]),a("view",{staticClass:t._$s("15-"+r,"sc","search-list-right"),attrs:{_i:"15-"+r}},[a("image",{staticClass:t._$s("16-"+r,"sc","icon"),attrs:{src:t._$s("16-"+r,"a-src",s.iconUrl),_i:"16-"+r}}),t._v(t._$s("15-"+r,"t1-0",t._s(s.score)))])])})),0),a("view",{staticClass:t._$s(17,"sc","last"),attrs:{_i:17}})])},r=[]},aed4:function(t,s,e){"use strict";var a;e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return r})),e.d(s,"a",(function(){return a}));var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:t._$s(0,"sc","page"),attrs:{_i:0}},[e("view",{staticClass:t._$s(1,"sc","search-box"),attrs:{_i:1}},[e("view",{staticClass:t._$s(2,"sc","search-input"),attrs:{_i:2}},[e("input",{staticClass:t._$s(3,"sc","input"),attrs:{_i:3},on:{click:t.goSearch}})]),e("text",{staticClass:t._$s(4,"sc","search-box-icon text-black cuIcon-people"),attrs:{_i:4}})]),e("view",{staticClass:t._$s(5,"sc","page-block super-hot"),attrs:{_i:5}},[e("view",{staticClass:t._$s(6,"sc","hot-title-wapper"),attrs:{_i:6}},[e("view",{staticClass:t._$s(7,"sc","hot-title"),attrs:{_i:7}})])]),e("swiper",{staticClass:t._$s(8,"sc","carousel"),attrs:{_i:8}},t._l(t._$s(9,"f",{forItems:t.newsongList}),(function(s,a,i,r){return e("swiper-item",{key:t._$s(9,"f",{forIndex:i,key:"9-"+r}),attrs:{_i:"9-"+r},on:{click:function(e){return t.goPlay(s.id)}}},[e("image",{staticClass:t._$s("10-"+r,"sc","carousel"),attrs:{src:t._$s("10-"+r,"a-src",s.picUrl),_i:"10-"+r}})])})),0),e("view",{staticClass:t._$s(11,"sc","page-block super-hot"),attrs:{_i:11}},[e("view",{staticClass:t._$s(12,"sc","hot-title-wapper"),attrs:{_i:12}},[e("view",{staticClass:t._$s(13,"sc","hot-title"),attrs:{_i:13}})])]),e("scroll-view",{staticClass:t._$s(14,"sc","page-block hot"),attrs:{_i:14}},t._l(t._$s(15,"f",{forItems:t.hotSuperheroList}),(function(s,a,i,r){return e("view",{key:t._$s(15,"f",{forIndex:i,key:"15-"+r}),staticClass:t._$s("15-"+r,"sc","single-poster"),attrs:{_i:"15-"+r}},[e("view",{staticClass:t._$s("16-"+r,"sc","poster-wapper"),attrs:{_i:"16-"+r}},[e("image",{staticClass:t._$s("17-"+r,"sc","poster"),attrs:{src:t._$s("17-"+r,"a-src",s.picUrl),_i:"17-"+r}}),e("view",{staticClass:t._$s("18-"+r,"sc","movie-name"),attrs:{_i:"18-"+r}},[t._v(t._$s("18-"+r,"t0-0",t._s(s.name)))])])])})),0),e("view",{staticClass:t._$s(19,"sc","page-block super-hot"),attrs:{_i:19}},[e("view",{staticClass:t._$s(20,"sc","hot-title-wapper"),attrs:{_i:20}},[e("view",{staticClass:t._$s(21,"sc","hot-title"),attrs:{_i:21}})])]),e("view",t._l(t._$s(23,"f",{forItems:t.topList}),(function(s,a,i,r){return e("view",{key:t._$s(23,"f",{forIndex:i,key:"23-"+r}),staticClass:t._$s("23-"+r,"sc","top"),attrs:{_i:"23-"+r}},[e("view",{staticClass:t._$s("24-"+r,"sc","top-div"),attrs:{_i:"24-"+r}},[e("image",{staticClass:t._$s("25-"+r,"sc","top-img"),attrs:{src:t._$s("25-"+r,"a-src",s.coverImgUrl),_i:"25-"+r}}),e("view",{staticClass:t._$s("26-"+r,"sc","top-update"),attrs:{_i:"26-"+r}},[t._v(t._$s("26-"+r,"t0-0",t._s(s.updateFrequency)))]),e("view",{staticClass:t._$s("27-"+r,"sc","top-name"),attrs:{_i:"27-"+r}},[t._v(t._$s("27-"+r,"t0-0",t._s(s.name)))])])])})),0)])},r=[]},d2b6:function(t,s,e){"use strict";e.r(s);var a=e("7d9f"),i=e("0148");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);var n,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);s["default"]=o.exports},dc5a:function(t,s,e){"use strict";e.r(s);var a=e("1218"),i=e("95de");for(var r in i)"default"!==r&&function(t){e.d(s,t,(function(){return i[t]}))}(r);var n,c=e("f0c5"),o=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],n);s["default"]=o.exports},e2f7:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{audio:uni.createInnerAudioContext(),current:0,duration:0,paused:!0,loading:!1,seek:!1}},props:{src:String,autoplay:Boolean,continue:Boolean,control:{type:Boolean,default:!0},color:{type:String,default:"#169af3"}},methods:{prev:function(){this.$emit("prev")},next:function(){this.$emit("next")},format:function(t){return"0".repeat(2-String(Math.floor(t/60)).length)+Math.floor(t/60)+":"+"0".repeat(2-String(Math.floor(t%60)).length)+Math.floor(t%60)},play:function(){this.audio.play(),this.loading=!0}},created:function(){var t=this;this.src&&(this.audio.src=this.src,this.autoplay&&this.play()),this.audio.obeyMuteSwitch=!1,this.audio.onTimeUpdate((function(){t.seek||(t.current=t.audio.currentTime),t.duration||(t.duration=t.audio.duration)})),this.audio.onPlay((function(){t.paused=!1,t.loading=!1})),this.audio.onPause((function(){t.paused=!0})),this.audio.onEnded((function(){t.continue?t.next():(t.paused=!0,t.current=0)})),this.audio.onSeeked((function(){t.seek=!1}))},beforeDestroy:function(){this.audio.destroy()},watch:{src:function(t,s){this.audio.src=t,this.current=0,this.duration=0,(s||this.autoplay)&&this.play()}}};s.default=a},ee12:function(t,s,e){"use strict";e.r(s);var a=e("5a6a");for(var i in a)"default"!==i&&function(t){e.d(s,t,(function(){return a[t]}))}(i);var r,n,c,o,u=e("f0c5"),l=Object(u["a"])(a["default"],r,n,!1,null,null,null,!1,c,o);s["default"]=l.exports},f0c5:function(t,s,e){"use strict";function a(t,s,e,a,i,r,n,c,o,u){var l,f="function"===typeof t?t.options:t;if(o){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var _ in o)d.call(o,_)&&!d.call(f.components,_)&&(f.components[_]=o[_])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),s&&(f.render=s,f.staticRenderFns=e,f._compiled=!0),a&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),n?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},f._ssrRegister=l):i&&(l=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,s){return l.call(s),v(t,s)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:f}}e.d(s,"a",(function(){return a}))}},[["535a","app-config"]]]);