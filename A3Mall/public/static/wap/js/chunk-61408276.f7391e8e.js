(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61408276"],{"0ed1":function(t,e,r){"use strict";r.r(e);var a,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar",{attrs:{title:"团购列表","left-arrow":"",fixed:!0,"z-index":9999,transparent:!0,"background-color":"#b91922"},on:{"click-left":t.prev}}),r("div",{staticClass:"navbar"},[r("div",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(e){return t.tabClick(0)}}},[t._v(" 综合排序 ")]),r("div",{staticClass:"nav-item",class:{current:1===t.filterIndex},on:{click:function(e){return t.tabClick(1)}}},[t._v(" 销量优先 ")]),r("div",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(e){return t.tabClick(2)}}},[r("span",[t._v("价格")]),r("div",{staticClass:"arrow-box"},[r("span",{staticClass:"icon iconfont icon-arrow-up",class:{active:1===t.priceOrder&&2===t.filterIndex,"icon-arrow-up-active":1===t.priceOrder&&2===t.filterIndex}},[t._v("")]),r("span",{staticClass:"icon iconfont icon-arrow-down",class:{active:2===t.priceOrder&&2===t.filterIndex,"icon-arrow-down-active":2===t.priceOrder&&2===t.filterIndex}},[t._v("")])])])]),r("div",{staticStyle:{height:"100px","background-color":"#b91922"}}),r("div",{staticClass:"pull-refresh-box"},[t.isEmpty?r("van-empty",{attrs:{image:t.emptyImage,description:t.emptyDescription}}):t._e(),t.isEmpty?t._e():r("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[r("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.loadGoods},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("div",{staticClass:"goods-list-box"},t._l(t.list,(function(e,a){return r("div",{key:a,staticClass:"goods-list-item-box",on:{click:function(r){return t.$router.push({path:"/regiment/view/"+e.id})}}},[r("div",{staticClass:"goods-list-item-wrap"},[r("span",[r("img",{attrs:{src:e.photo}})]),r("span",[t._v(t._s(e.title))]),r("span",[t._v("￥"+t._s(e.price))])])])})),0)])],1)],1)],1)},n=[],s=(r("99af"),r("b0c0"),r("ade3")),o=(r("91d5"),r("f0ca")),c=(r("2994"),r("2bdd")),l=(r("ab71"),r("58e6")),d=r("3050"),f={name:"Regiment",components:(a={},Object(s["a"])(a,d["a"].name,d["a"]),Object(s["a"])(a,l["a"].name,l["a"]),Object(s["a"])(a,c["a"].name,c["a"]),Object(s["a"])(a,o["a"].name,o["a"]),a),data:function(){return{isEmpty:!1,emptyImage:"search",emptyDescription:"您搜索的关键字暂无内容",filterIndex:0,priceOrder:1,list:[],loading:!1,finished:!1,refreshing:!1,page:1}},created:function(){},methods:{tabClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,this.finished=!1,this.refreshing=!0,this.loading=!0,this.loadGoods())},loadGoods:function(){var t=this;this.isEmpty=!1,this.refreshing&&(this.list=[],this.refreshing=!1,this.page=1),this.$http.getRegimentList({page:this.page,type:this.filterIndex,sort:this.priceOrder}).then((function(e){void 0==e.data.list&&1==t.page?(t.isEmpty=!0,t.emptyImage="search",t.emptyDescription="该分类下暂无内容"):1==e.status?(t.list=t.list.concat(e.data.list),t.loading=!1,t.page++):-1==e.status&&(void 0==e.data&&1==t.page?(t.isEmpty=!0,t.emptyImage="search",t.emptyDescription="该分类下暂无内容"):(t.loading=!1,t.finished=!0))})).catch((function(e){t.isEmpty=!0,t.emptyImage="network",t.emptyDescription="网络出错，请检查网络是否连接"}))},onRefresh:function(){var t=this;this.finished=!1,this.loading=!0,setTimeout((function(){t.loadGoods()}),1500)},prev:function(){this.$tools.prev()}}},p=f,u=(r("4ea1"),r("2877")),h=Object(u["a"])(p,i,n,!1,null,"2de52fff",null);e["default"]=h.exports},"201f":function(t,e,r){},3050:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{wrap:t.placeholder}},[r("div",{staticClass:"nav-bar",class:{"nav-bar-fixed":t.fixed,"nav-bar-transparent":t.transparent},style:t.obj},[t.leftArrow?r("div",{staticClass:"nav-bar-left",on:{click:t.left}},[r("i",{staticClass:"icon iconfont",class:{"nav-bar-icon":t.transparent},staticStyle:{"font-size":"18px"}},[t._v("")])]):t._e(),r("div",{staticClass:"nav-bar-middle",class:{"nav-bar-title":t.transparent}},[t._v(t._s(t.title))]),t.rightArrow?r("div",{staticClass:"nav-bar-right",on:{click:t.right}},["share"==t.rightIcon?r("i",{staticClass:"icon iconfont",class:{"nav-bar-icon":t.transparent},staticStyle:{"font-size":"18px"}},[t._v("")]):t._e(),"delete"==t.rightIcon?r("i",{staticClass:"icon iconfont",class:{"nav-bar-icon":t.transparent},staticStyle:{"font-size":"16px"}},[t._v("")]):t._e()]):t._e()])])},i=[],n=(r("a9e3"),{name:"NavBar",props:{title:{type:String,default:""},zIndex:{type:Number,default:0},fixed:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},backgroundColor:{type:String,default:""},placeholder:{type:Boolean,default:!1},leftArrow:{type:Boolean,default:!1},rightArrow:{type:Boolean,default:!1},rightIcon:{type:String,default:""}},data:function(){return{obj:{}}},mounted:function(){this.zIndex>0&&(this.obj={"z-index":this.zIndex}),""!=this.backgroundColor&&Object.assign(this.obj,{"background-color":this.backgroundColor})},methods:{left:function(){this.$emit("click-left")},right:function(){this.$emit("click-right")}}}),s=n,o=(r("f18a"),r("2877")),c=Object(o["a"])(s,a,i,!1,null,"646e11e8",null);e["a"]=c.exports},3971:function(t,e,r){},"4ea1":function(t,e,r){"use strict";var a=r("201f"),i=r.n(a);i.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),i=r("5899"),n="["+i+"]",s=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,r){var a=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var n,s;return i&&"function"==typeof(n=e.constructor)&&n!==r&&a(s=n.prototype)&&s!==r.prototype&&i(t,s),t}},"72cf":function(t,e,r){},"91d5":function(t,e,r){"use strict";r("68ef"),r("72cf")},a9e3:function(t,e,r){"use strict";var a=r("83ab"),i=r("da84"),n=r("94ca"),s=r("6eeb"),o=r("5135"),c=r("c6b6"),l=r("7156"),d=r("c04e"),f=r("d039"),p=r("7c73"),u=r("241c").f,h=r("06cf").f,g=r("9bf2").f,v=r("58a8").trim,m="Number",x=i[m],y=x.prototype,b=c(p(y))==m,E=function(t){var e,r,a,i,n,s,o,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(r=l.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(n=l.slice(2),s=n.length,o=0;o<s;o++)if(c=n.charCodeAt(o),c<48||c>i)return NaN;return parseInt(n,a)}return+l};if(n(m,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var I,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(b?f((function(){y.valueOf.call(r)})):c(r)!=m)?l(new x(E(e)),r,k):E(e)},C=a?u(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)o(x,I=C[w])&&!o(k,I)&&g(k,I,h(x,I));k.prototype=y,y.constructor=k,s(i,m,k)}},f0ca:function(t,e,r){"use strict";var a=r("d282"),i={render:function(){var t=arguments[0],e=function(e,r,a){return t("stop",{attrs:{"stop-color":e,offset:r+"%","stop-opacity":a}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:"c",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[e("#FFF",0,.5),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"d",x1:"64.022%",y1:"96.956%",x2:"64.022%",y2:"0%"}},[e("#F2F3F5",0,.3),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:"h",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[e("#EBEDF0",0),e("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:"i",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"k",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"m",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:"n",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("radialGradient",{attrs:{id:"g",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[e("#EBEDF0",0),e("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#c)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M40.5 5a8.504 8.504 0 018.13 6.009l.12-.005L49 11a8 8 0 11-1 15.938V27H34v-.174a6.5 6.5 0 11-1.985-12.808A8.5 8.5 0 0140.5 5z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M96.016 0a4.108 4.108 0 013.934 2.868l.179-.004c2.138 0 3.871 1.71 3.871 3.818 0 2.109-1.733 3.818-3.871 3.818-.164 0-.325-.01-.484-.03v.03h-6.774v-.083a3.196 3.196 0 01-.726.083C90.408 10.5 89 9.111 89 7.398c0-1.636 1.284-2.976 2.911-3.094a3.555 3.555 0 01-.008-.247c0-2.24 1.842-4.057 4.113-4.057z",fill:"url(#d)",transform:"translate(2 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#c)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#g)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#h)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#i)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#k)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#k)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#m)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#n)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},n=Object(a["a"])("empty"),s=n[0],o=n[1],c=["error","search","default"];e["a"]=s({props:{description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,e=this.slots("image");if(e)return e;if("network"===this.image)return t(i);var r=this.image;return-1!==c.indexOf(r)&&(r="https://img.yzcdn.cn/vant/empty-image-"+r+".png"),t("img",{attrs:{src:r}})},genImage:function(){var t=this.$createElement;return t("div",{class:o("image")},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,e=this.slots("description")||this.description;if(e)return t("p",{class:o("description")},[e])},genBottom:function(){var t=this.$createElement,e=this.slots();if(e)return t("div",{class:o("bottom")},[e])}},render:function(){var t=arguments[0];return t("div",{class:o()},[this.genImage(),this.genDescription(),this.genBottom()])}})},f18a:function(t,e,r){"use strict";var a=r("3971"),i=r.n(a);i.a}}]);