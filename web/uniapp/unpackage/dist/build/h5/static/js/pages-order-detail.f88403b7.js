(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail"],{2723:function(t,i,e){var o=e("85a2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("27f5fee8",o,!0,{sourceMap:!1,shadowMode:!1})},"2fa9":function(t,i,e){"use strict";e.r(i);var o=e("35b2"),a=e("4d48");for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("747e");var s,r=e("f0c5"),d=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"98778506",null,!1,o["a"],s);i["default"]=d.exports},"35b2":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}));var o={navbar:e("44ff").default,uniSteps:e("e529").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"wrap"},[e("navbar",{attrs:{iSimmersive:!1,"title-color":"#ffffff",background:"#1b43c4",placeholder:!0,title:"订单详情"}}),t.isError?e("info"):t._e(),t.isError?t._e():e("v-uni-view",[1==t.order.shipping_type?e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"status"},[e("uni-steps",{attrs:{options:t.stepsOptions,"active-color":"#07c160",active:t.active}})],1),e("v-uni-view",{staticClass:"address"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-text",[t._v("收件人："+t._s(t.order.accept_name))]),e("v-uni-text",[t._v("手机号："+t._s(t.order.mobile))])],1),e("v-uni-view",{staticClass:"address-info"},[t._v(t._s(t.order.region)+" "+t._s(t.order.address))])],1)],1):t._e(),2==t.order.shipping_type?e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"status"},[e("uni-steps",{attrs:{options:t.stepsShopOptions,"active-color":"#07c160",active:t.active}})],1)],1):t._e(),2==t.order.shipping_type?e("v-uni-view",{staticClass:"order"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("核销信息")])],1),e("v-uni-view",{staticClass:"shop-box"},[e("v-uni-view",{staticClass:"qrcode"},[e("v-uni-image",{attrs:{src:t.order.qrcode}})],1),e("v-uni-view",{staticClass:"code"},[t._v(t._s(t.order.code))])],1),e("v-uni-view",{staticClass:"shop-address"},[e("v-uni-view",[t._v("门店名称："+t._s(t.order.shop_name))]),e("v-uni-view",[t._v("营业时间："+t._s(t.order.day_time))]),e("v-uni-view",[t._v("门店电话："+t._s(t.order.phone))])],1),e("v-uni-view",{staticClass:"shop-address"},[e("v-uni-view",[t._v("取件地址：")]),e("v-uni-view",[e("v-uni-text",[t._v(t._s(t.order.area_name))]),e("v-uni-text",[t._v(t._s(t.order.shop_address))])],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"goods"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("共"+t._s(t.order.item.length)+"件商品")])],1),e("v-uni-view",{staticClass:"goods-box"},t._l(t.order.item,(function(i,o){return e("v-uni-view",{key:o,staticClass:"goods-item clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoods(i.goods_id)}}},[e("v-uni-view",{staticClass:"goods-img"},[e("v-uni-image",{attrs:{src:i.thumb_image}})],1),e("v-uni-view",{staticClass:"goods-info"},[e("v-uni-view",{staticClass:"t"},[e("v-uni-text",[t._v(t._s(i.title))]),e("v-uni-text",[t._v("￥"+t._s(i.sell_price))])],1),e("v-uni-view",{staticClass:"b"},[e("v-uni-text",[t._v(t._s(i.spec))]),e("v-uni-text",[t._v("× "+t._s(i.nums))])],1)],1)],1)})),1)],1),e("v-uni-view",{staticClass:"order"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("订单信息")])],1),e("v-uni-view",{staticClass:"list clear"},[e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("订单编号：")]),e("v-uni-view",{staticClass:"money"},[t._v(t._s(t.order.order_no))])],1),e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("下单时间：")]),e("v-uni-view",[t._v(t._s(t.order.create_time))])],1),e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("订单类型：")]),e("v-uni-view",[t._v(t._s(t.order.type))])],1),e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("支付状态：")]),e("v-uni-view",{staticClass:"money"},[t._v(t._s(t.order.pay_status))])],1),e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("支付方式：")]),e("v-uni-view",{staticClass:"money"},[t._v(t._s(t.order.pay_type))])],1)],1)],1),e("v-uni-view",{staticClass:"order"},[e("v-uni-view",{staticClass:"list clear"},[e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("商品金额：")]),e("v-uni-view",[t._v(t._s(t.order.real_amount))])],1),e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("运费金额：")]),e("v-uni-view",[t._v(t._s(t.order.payable_freight))])],1),e("v-uni-view",{staticClass:"list-box clear"},[e("v-uni-view",[t._v("订单总额：")]),e("v-uni-view",{staticClass:"money"},[t._v(t._s(t.order.order_amount))])],1)],1)],1),1==t.order.order_status?e("v-uni-view",{staticClass:"order"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("支付方式")])],1),e("v-uni-view",{staticClass:"payment-box"},t._l(t.providerList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"payment-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectPayment(i.id)}}},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont pay",class:i.class,attrs:{id:i.id}})],1),e("v-uni-view",{class:{activeColor:t.payment==i.id}},[t._v(t._s(i.name)),"balance"==i.id?e("v-uni-text",{staticStyle:{"padding-left":"15rpx","padding-top":"2rpx","font-size":"24rpx"}},[t._v("可用余额: ￥"+t._s(t.order.users_price)+"元")]):t._e()],1),e("v-uni-view",{class:{active:t.payment==i.id}},[e("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1)})),1)],1):t._e(),4!=t.active?e("v-uni-view",[e("v-uni-view",{staticClass:"operation-placeholder"}),e("v-uni-view",{staticClass:"operation"},[1==t.order.order_status?e("v-uni-text",{staticClass:"cancel",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel.apply(void 0,arguments)}}},[t._v("取消订单")]):t._e(),1==t.order.order_status?e("v-uni-text",{staticClass:"pay",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPay.apply(void 0,arguments)}}},[t._v("立即付款")]):t._e(),2==t.order.order_status||3==t.order.order_status||4==t.order.order_status?e("v-uni-text",{staticClass:"confirm",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirm.apply(void 0,arguments)}}},[t._v("确认收货")]):t._e(),2==t.order.order_status||3==t.order.order_status||4==t.order.order_status?e("v-uni-text",{staticClass:"refund",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.refund.apply(void 0,arguments)}}},[t._v("申请退款")]):t._e(),5==t.order.order_status?e("v-uni-text",{staticClass:"evaluate",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.evaluate.apply(void 0,arguments)}}},[t._v("待评价")]):t._e()],1)],1):t._e()],1)],1)},n=[]},"4d48":function(t,i,e){"use strict";e.r(i);var o=e("9e89"),a=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=a.a},"747e":function(t,i,e){"use strict";var o=e("2723"),a=e.n(o);a.a},"85a2":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.shop-address[data-v-98778506]{width:92%;margin:0 auto;padding:%?20?% 0 0 0;font-size:%?28?%;color:#333}.shop-address uni-text[data-v-98778506]{padding-right:%?20?%}.shop-box[data-v-98778506]{width:100%;background-color:#fff}.shop-box .qrcode[data-v-98778506]{width:80%;height:%?370?%;background-color:#f5eff0;margin:%?40?% auto 0 auto;border-radius:%?20?%;position:relative}.shop-box .qrcode uni-image[data-v-98778506]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:0 auto;display:block;width:%?300?%;height:%?300?%}.shop-box .code[data-v-98778506]{width:80%;height:%?100?%;line-height:%?100?%;font-size:%?50?%;text-align:center;margin:0 auto %?20?% auto;background-color:#1b43c4;color:#fff;border-radius:%?20?%;position:relative}.shop-box .code[data-v-98778506]:before{width:%?34?%;height:%?34?%;display:inline-block;content:" ";position:absolute;right:%?-18?%;top:%?-14?%;border-radius:50%;background-color:#fff}.shop-box .code[data-v-98778506]:after{width:%?34?%;height:%?34?%;display:inline-block;content:" ";position:absolute;left:%?-18?%;top:%?-14?%;border-radius:50%;background-color:#fff}.top[data-v-98778506]{background-color:#fff;position:relative}.top[data-v-98778506]:before{position:absolute;right:0;bottom:0;left:0;height:%?4?%;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:%?160?%;content:""}.top .status[data-v-98778506]{width:100%;margin:0 auto;padding:%?10?% 0}.top .address[data-v-98778506]{font-size:%?28?%;width:92%;margin:0 auto}.top .address .info[data-v-98778506]{height:%?60?%;line-height:%?60?%}.top .address .info span[data-v-98778506]:first-child{padding-right:%?20?%}.top .address .address-info[data-v-98778506]{height:%?60?%;line-height:%?40?%}.goods[data-v-98778506]{background-color:#fff;margin-top:%?30?%;padding-bottom:%?20?%}.goods .title[data-v-98778506]{width:100%;margin:0 auto;color:#666;font-size:%?28?%;height:%?80?%;line-height:%?80?%;border-bottom:%?2?% solid #eee}.goods .title uni-text[data-v-98778506]{padding-left:%?20?%}.goods .goods-box[data-v-98778506]{padding:0 %?32?%}.goods .goods-box .goods-item[data-v-98778506]{padding-top:%?20?%}.goods .goods-box .goods-item .goods-img[data-v-98778506]{width:%?154?%;height:%?154?%;display:inline-block;float:left}.goods .goods-box .goods-item .goods-img uni-image[data-v-98778506]{width:100%;height:100%}.goods .goods-box .goods-item .goods-info[data-v-98778506]{display:inline-block;width:72%;font-size:%?28?%;float:right}.goods .goods-box .goods-item .goods-info .t[data-v-98778506]{width:100%;height:%?90?%}.goods .goods-box .goods-item .goods-info .t uni-text[data-v-98778506]:first-child{float:left;display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;width:70%}.goods .goods-box .goods-item .goods-info .t uni-text[data-v-98778506]:last-child{width:30%;float:right;text-align:right}.goods .goods-box .goods-item .goods-info .b[data-v-98778506]{width:100%;height:%?80?%;font-size:%?26?%}.goods .goods-box .goods-item .goods-info .b uni-text[data-v-98778506]:first-child{float:left;color:#999}.goods .goods-box .goods-item .goods-info .b uni-text[data-v-98778506]:last-child{float:right;color:#666}.order[data-v-98778506]{background-color:#fff;margin-top:%?30?%;padding-bottom:%?20?%}.order .title[data-v-98778506]{width:100%;margin:0 auto;color:#666;font-size:%?30?%;height:%?80?%;line-height:%?80?%;border-bottom:%?2?% solid #eee}.order .title uni-text[data-v-98778506]{padding-left:%?30?%}.order .list[data-v-98778506]{width:100%}.order .list .list-box[data-v-98778506]{width:92%;height:auto!important;height:%?80?%;min-height:%?80?%;line-height:%?80?%;margin:0 auto;font-size:%?26?%;color:#333;border-bottom:%?2?% solid #ebedf0}.order .list .list-box uni-view[data-v-98778506]{display:inline-block}.order .list .list-box uni-view[data-v-98778506]:first-child{float:left}.order .list .list-box uni-view[data-v-98778506]:last-child{float:right}.order .list .list-box uni-textarea[data-v-98778506]{height:%?150?%}.operation-placeholder[data-v-98778506]{width:100%;height:%?140?%;line-height:%?140?%}.operation[data-v-98778506]{width:100%;height:%?110?%;line-height:%?110?%;text-align:right;background-color:#fff;position:fixed;left:0;bottom:0;border-top:%?2?% solid #eee}.operation uni-text[data-v-98778506]{font-size:%?28?%;text-align:center;border-radius:%?30?%;background-color:#fff;padding:%?16?% %?30?%;margin-right:%?20?%}.operation uni-text.cancel[data-v-98778506]{color:#333;border:%?2?% solid #ddd}.operation uni-text.pay[data-v-98778506]{background-color:#e93323;color:#fff}.operation .confirm[data-v-98778506]{color:#fff;background-color:#1b43c4}.operation .refund[data-v-98778506]{color:#1b43c4;background-color:#fff;border:1px solid #1b43c4}.operation .evaluate[data-v-98778506]{color:#fff;background-color:#009688}.payment-box .payment-item[data-v-98778506]{padding:%?20?% %?32?%;border-bottom:%?2?% solid #eee}.payment-box .payment-item uni-view[data-v-98778506]{display:inline}.payment-box .payment-item uni-view[data-v-98778506]:first-child{font-size:%?28?%}.payment-box .payment-item uni-view:first-child uni-text[data-v-98778506]{width:%?40?%;height:%?40?%;line-height:%?40?%;text-align:center;border-radius:50%;padding:%?4?%}.payment-box .payment-item uni-view[data-v-98778506]:nth-child(2){font-size:%?28?%;padding-left:%?20?%}.payment-box .payment-item uni-view:nth-child(2) i[data-v-98778506]{font-size:%?24?%;font-style:normal;color:#999;padding-left:%?20?%}.payment-box .payment-item uni-view[data-v-98778506]:nth-child(3){float:right;display:none;color:#999}.payment-box .payment-item uni-view.active[data-v-98778506]{display:block}.payment-box .payment-item uni-view.activeColor[data-v-98778506]{color:red}.payment-box #wechat[data-v-98778506]{position:relative;top:%?2?%;width:%?40?%;height:%?40?%;display:inline-block;color:#fff;background-color:#41b035}.payment-box #alipay[data-v-98778506]{position:relative;top:%?2?%;width:%?40?%;height:%?40?%;display:inline-block;color:#fff;background-color:#1296db}.payment-box #appleiap[data-v-98778506]{position:relative;top:%?2?%;width:%?40?%;height:%?40?%;display:inline-block;color:#333;background-color:#fff;border:1px solid #eee}.payment-box #balance[data-v-98778506]{position:relative;top:%?2?%;width:%?40?%;height:%?40?%;background-repeat:no-repeat;background-size:%?40?% %?40?%;display:inline-block;color:#fff;background-color:#fe960f}.payment-box .check[data-v-98778506]{position:relative;top:%?12?%;width:%?40?%;height:%?40?%;display:inline-block}',""]),t.exports=i},"9e89":function(t,i,e){"use strict";var o=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("544c")),n=o(e("e529")),s=o(e("44ff")),r=o(e("9b17")),d={components:{MallInfo:a.default,uniSteps:n.default,navbar:s.default},data:function(){return{isError:!1,orderId:0,active:0,stepsOptions:[{title:"待付款"},{title:"待发货"},{title:"待收货"},{title:"待评价"},{title:"己完成"}],stepsShopOptions:[{title:"待付款"},{title:"待发货"},{title:"待取货"},{title:"待评价"},{title:"己完成"}],payment:"wechat",order:{accept_name:"",address:"",create_time:"",item:[],mobile:"",order_amount:"",order_no:"",pay_status:"",pay_type:"",payable_freight:"",payable_amount:"",promotions:"",real_amount:"",region:"",type:"",users_price:"0.00",order_status:1,shipping_type:0,qrcode:"",code:"",area_name:"",shop_name:"",phone:"",shop_address:"",day_time:""},providerList:[]}},onLoad:function(t){var i=this;this.isError=!1,this.orderId=t.id,this.$http.getOrderDetail({id:this.orderId}).then((function(t){i.isError=!1,t.status?(i.active=t.data.active,i.order=t.data):i.isError=!0})).catch((function(t){i.isError=!0})),r.default.getPaymentList().then((function(t){i.providerList=t}))},onBackPress:function(t){return this.$utils.navigateTo("order/list",{id:1}),!0},methods:{goGoods:function(t){this.$utils.navigateTo("goods/view",{id:t})},selectPayment:function(t){this.payment=t},goPay:function(){var t=this;this.$utils.showLoading(),this.$http.getOrderDetailPayment({order_id:this.orderId,payment_id:this.payment,source:r.default.getPaymentType(),url:document.location.href}).then((function(i){t.$utils.hideLoading(),i.status?r.default.setPayType("order").crreateOrder(i.data):t.$utils.msg(i.info)})).catch((function(i){t.$utils.hideLoading(),t.$utils.msg("网络出错，请检查网络是否连接")}))},confirm:function(){this.$utils.navigateTo("order/confirm_delivery",{id:this.orderId})},refund:function(){this.$utils.navigateTo("order/refund",{id:this.orderId})},evaluate:function(){this.$utils.navigateTo("order/evaluate",{id:this.orderId})},cancel:function(){var t=this;this.$utils.showLoading(),this.$http.getOrderDetailCancel({order_id:this.orderId}).then((function(i){t.$utils.hideLoading(),i.status?(t.$utils.msg(i.info),t.$utils.navigateTo("order/list",{id:1})):t.$utils.msg(i.info)})).catch((function(i){t.$utils.hideLoading(),t.$utils.msg("网络出错，请检查网络是否连接")}))}}};i.default=d}}]);