(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Video/Video"],{1257:function(t,e,r){"use strict";r.r(e);var n=r("85d9"),a=r("bf6c");for(var u in a)"default"!==u&&function(t){r.d(e,t,(function(){return a[t]}))}(u);r("f32f");var c,i=r("f0c5"),f=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=f.exports},"174d":function(t,e,r){"use strict";(function(t){r("8235");n(r("66fd"));var e=n(r("1257"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},"54cb":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{mvList:[],mvurlList:[]}},onLoad:function(){var e=this,r=e.serverUrl;t.request({url:r+"/mv/first?limit=10",method:"GET",success:function(t){if(200==t.data.code){var r=t.data.data;e.mvList=r;for(var n=0;n<r.length;n++){var a=r[n].id;e.hqmvurl(a,n)}}}})},methods:{hqmvurl:function(e,r){var n=this,a=n.serverUrl;t.request({url:a+"/mv/url?id="+e,method:"POST",success:function(t){if(200==t.data.code){var e=t.data.data.url;n.mvList[r].briefDesc=e}}})},goserarchmv:function(e){t.navigateTo({url:"../searchmv/searchmv?value="+e})},SearchMV:function(t){var e=this,r=t.detail.value;e.Search(r)},Search:function(t){var e=this;e.goserarchmv(t)}}};e.default=r}).call(this,r("543d")["default"])},"85d9":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},bf6c:function(t,e,r){"use strict";r.r(e);var n=r("54cb"),a=r.n(n);for(var u in n)"default"!==u&&function(t){r.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},f32f:function(t,e,r){"use strict";var n=r("f729"),a=r.n(n);a.a},f729:function(t,e,r){}},[["174d","common/runtime","common/vendor"]]]);