(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-index"],{"3bbc":function(t,e,n){"use strict";n.r(e);var i=n("d371"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"4fe9":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.news-list-box[data-v-ef5dfc5c]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap}.news-list-box .news-wrap[data-v-ef5dfc5c]{width:95%;margin:0 auto;position:relative}.news-list-box .news-item-box[data-v-ef5dfc5c]{position:relative;border-radius:%?20?%;background-color:#fff;height:%?210?%;margin:%?20?% 0}.news-list-box .news-item-box .news-box[data-v-ef5dfc5c]{padding-right:%?270?%;position:relative;height:%?210?%}.news-list-box .news-item-box .news-box uni-text[data-v-ef5dfc5c]:first-child{display:block;margin-left:%?30?%;line-height:%?50?%;padding-top:%?10?%;font-size:%?28?%;color:#666;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}.news-list-box .news-item-box .news-box uni-text[data-v-ef5dfc5c]:last-child{width:100%;position:absolute;bottom:%?10?%;left:0;height:%?30?%;line-height:%?30?%;text-indent:%?30?%;font-size:%?26?%;color:#999}.news-list-box .news-item-box .pic[data-v-ef5dfc5c]{position:absolute;top:%?16?%;right:%?20?%}.news-list-box .news-item-box .pic uni-image[data-v-ef5dfc5c]{width:%?180?%;height:%?180?%}',""]),t.exports=e},"5ac2":function(t,e,n){"use strict";n.r(e);var i=n("bfa0"),a=n("3bbc");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("8f4b");var o,l=n("f0c5"),c=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"ef5dfc5c",null,!1,i["a"],o);e["default"]=c.exports},"8f4b":function(t,e,n){"use strict";var i=n("e97a"),a=n.n(i);a.a},bfa0:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={navbar:n("a9f4").default,mescrollBody:n("16dd").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("navbar",{attrs:{iSimmersive:!1,placeholder:!0,title:"资讯中心"},model:{value:t.screenHeight,callback:function(e){t.screenHeight=e},expression:"screenHeight"}}),n("mescroll-body",{ref:"mescrollRef",attrs:{height:t.screenHeight+"px"},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"news-list-box"},[n("v-uni-view",{staticClass:"news-wrap"},t._l(t.result,(function(e,i){return n("v-uni-view",{key:i,staticClass:"news-item-box clear",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.$utils.navigateTo("news/view",{id:e.id})}}},[n("v-uni-view",{staticClass:"news-box"},[n("v-uni-text",[t._v(t._s(e.title))]),n("v-uni-text",[t._v(t._s(e.create_time))])],1),n("v-uni-view",{staticClass:"pic"},[n("v-uni-image",{attrs:{src:e.photo}})],1)],1)})),1)],1)],1)],1)},s=[]},d371:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ffb3")),s=i(n("a9f4")),o={mixins:[a.default],components:{navbar:s.default},data:function(){return{screenHeight:0,result:[]}},methods:{downCallback:function(){var t=this;setTimeout((function(){t.mescroll.resetUpScroll()}),1200)},triggerDownScroll:function(){this.mescroll.triggerDownScroll()},upCallback:function(t){var e=this;this.$http.getNewsList({page:t.num}).then((function(n){e.mescroll.endByPage(n.data.list.length,n.data.total),1==n.status?(1==t.num&&(e.result=[]),e.result=e.result.concat(n.data.list)):-1==n.status&&e.mescroll.endErr()})).catch((function(t){e.mescroll.endErr()}))}}};e.default=o},e97a:function(t,e,n){var i=n("4fe9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4096942a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);