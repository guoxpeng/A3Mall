(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-express"],{"206d":function(t,e,i){"use strict";i.r(e);var a=i("99e1"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"20c5":function(t,e,i){"use strict";i.r(e);var a=i("70d2"),r=i("206d");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("d842");var s,o=i("f0c5"),d=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"234d34e7",null,!1,a["a"],s);e["default"]=d.exports},"54f5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.money[data-v-234d34e7]{color:#fc4141}.top[data-v-234d34e7]{background-color:#fff;position:relative}.top[data-v-234d34e7]:before{position:absolute;right:0;bottom:0;left:0;height:%?4?%;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:%?160?%;content:""}.top .status[data-v-234d34e7]{width:95%;margin:0 auto}.top .address[data-v-234d34e7]{font-size:%?28?%;width:92%;margin:0 auto}.top .address .info[data-v-234d34e7]{height:%?60?%;line-height:%?60?%}.top .address .info uni-text[data-v-234d34e7]:first-child{padding-right:%?20?%}.top .address .address-info[data-v-234d34e7]{height:%?60?%;line-height:%?40?%}.order[data-v-234d34e7]{background-color:#fff;margin-top:%?30?%;padding-bottom:%?20?%}.order .title[data-v-234d34e7]{width:100%;margin:0 auto;color:#666;font-size:%?30?%;height:%?80?%;line-height:%?80?%;border-bottom:%?2?% solid #eee}.order .title uni-text[data-v-234d34e7]{padding-left:%?30?%}.order .list[data-v-234d34e7]{width:100%}.order .list .list-box[data-v-234d34e7]{width:92%;height:auto!important;height:%?80?%;min-height:%?80?%;line-height:%?80?%;margin:0 auto;font-size:%?26?%;color:#333;border-bottom:%?2?% solid #ebedf0}.order .list .list-box uni-view[data-v-234d34e7]{display:inline-block}.order .list .list-box uni-view[data-v-234d34e7]:first-child{float:left}.order .list .list-box uni-view[data-v-234d34e7]:last-child{float:right}.order .list .list-box uni-textarea[data-v-234d34e7]{height:%?150?%}',""]),t.exports=e},"70d2":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={navbar:i("cbc9").default,uniSteps:i("a97b").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("navbar",{attrs:{iSimmersive:!1,"title-color":"#ffffff",background:"#1b43c4",placeholder:!0,title:"物流信息"}}),t.isError?i("info"):t._e(),t.isError?t._e():i("v-uni-view",[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"address"},[i("v-uni-view",{staticClass:"info"},[i("v-uni-text",[t._v("收件人："+t._s(t.order.accept_name))]),i("v-uni-text",[t._v("手机号："+t._s(t.order.mobile))])],1),i("v-uni-view",{staticClass:"address-info"},[t._v(t._s(t.order.region)+" "+t._s(t.order.address))])],1)],1),i("v-uni-view",{staticClass:"order"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v("订单信息")])],1),i("v-uni-view",{staticClass:"list clear"},[i("v-uni-view",{staticClass:"list-box clear"},[i("v-uni-view",[t._v("订单编号：")]),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.order.order_no))])],1),t.order.express.expName?i("v-uni-view",{staticClass:"list-box clear"},[i("v-uni-view",[t._v("快递名称：")]),i("v-uni-view",[t._v(t._s(t.order.express.expName||""))])],1):t._e(),i("v-uni-view",{staticClass:"list-box clear"},[i("v-uni-view",[t._v("快递单号：")]),i("v-uni-view",[t._v(t._s(t.order.express.number||""))])],1),i("v-uni-view",{staticClass:"list-box clear"},[i("v-uni-view",[t._v("物流耗时：")]),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.order.express.takeTime||""))])],1),i("v-uni-view",{staticClass:"list-box clear"},[i("v-uni-view",[t._v("更新时间：")]),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.order.express.updateTime||""))])],1)],1),i("uni-steps",{attrs:{options:t.stepsOptions,direction:"column","active-color":"#07c160",active:t.active}})],1)],1)],1)},n=[]},"99e1":function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(i("2e8c")),n=a(i("a97b")),s={components:{info:r.default,uniSteps:n.default},data:function(){return{isError:!1,active:0,orderId:0,order:{express:{expName:"",number:"",takeTime:"",updateTime:""},accept_name:"",address:"",create_time:"",mobile:"",order_no:"",region:""},stepsOptions:[]}},onLoad:function(t){var e=this;this.isError=!1,this.orderId=t.id,this.$http.getOrderExpress({id:this.orderId}).then((function(t){t.status?(e.order=t.data,t.data.express.list.forEach((function(t,i){e.stepsOptions.push({title:t.time,desc:t.status})}))):e.$utils.msg(t.info)})).catch((function(t){e.isError=!0,e.$utils.msg("网络出错，请检查网络是否连接")}))},methods:{}};e.default=s},d842:function(t,e,i){"use strict";var a=i("f854"),r=i.n(a);r.a},f854:function(t,e,i){var a=i("54f5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("08cb84b0",a,!0,{sourceMap:!1,shadowMode:!1})}}]);