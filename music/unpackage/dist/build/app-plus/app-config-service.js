
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/Video/Video","pages/me/me","pages/search/search","pages/play/play","pages/play/play2"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"music","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#bfbfbf","selectedColor":"#515151","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"发现","iconPath":"static/tabBarIco/index.png","selectedIconPath":"static/tabBarIco/index_sel.png"},{"pagePath":"pages/Video/Video","text":"视频","iconPath":"static/tabBarIco/video.png","selectedIconPath":"static/tabBarIco/video_sel.png"},{"pagePath":"pages/me/me","text":"我的","iconPath":"static/tabBarIco/me.png","selectedIconPath":"static/tabBarIco/me_sel.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"music","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/Video/Video","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":false}},{"path":"/pages/play/play","meta":{},"window":{"titleNView":false}},{"path":"/pages/play/play2","meta":{},"window":{"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
