(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{380:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e46b6ba2",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";var r=n(380);n.n(r).a},382:function(t,e,n){(e=n(14)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},384:function(t,e,n){var content=n(390);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6759f5ab",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(381);var r=n(69),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.a=component.exports},389:function(t,e,n){"use strict";var r=n(384);n.n(r).a},390:function(t,e,n){(e=n(14)(!1)).push([t.i,".selected-car{background-color:#8fbc8f!important}.btn-toggle{flex-direction:column}.boxshadow{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}",""]),t.exports=e},403:function(t,e,n){"use strict";n.r(e);n(7),n(10),n(8),n(30),n(189),n(12),n(13),n(11),n(33),n(68),n(9);var r=n(2),o=n(385),c=n(75);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"index-page",components:{Logo:o.a},data:function(){return{selectedCar:null,text:"",property:"",selection:{index:-1,name:"",seats:void 0,convertible:!1,trimLevels:void 0,wheels:void 0,paint:void 0,extras:void 0},showOptions:void 0}},computed:v(v({},Object(c.d)({cars:function(t){return t.interface.cars}})),Object(c.c)({getTrimLevels:"interface/getTrimLevels",getWheels:"interface/getWheels",getPaint:"interface/getPaint",getExtras:"interface/getExtras"})),methods:{selectCar:function(t){this.selectedCar==t+1?this.resetSelection():this.selectedCar=t+1,this.selectedCar&&(this.selection.index=t,this.selection.name=this.cars[t].name,this.selection.seats=this.cars[t].seats,this.selection.convertible=this.cars[t].convertible),this.resetOptions()},resetSelection:function(){this.selectedCar=null,this.selection={name:"",seats:void 0,convertible:!1,trimLevels:void 0,wheels:void 0,paint:void 0,extras:void 0}},resetOptions:function(){this.selection.trimLevels=void 0,this.selection.wheels=void 0,this.selection.paint=void 0,this.selection.extras=void 0},showTrimLevels:function(){"trim"==this.showOptions?this.showOptions=void 0:this.showOptions="trim",this.showOptions||this.resetOptions()},showWheels:function(){"wheels"==this.showOptions?this.showOptions=void 0:this.showOptions="wheels",this.showOptions||this.resetOptions()},showPaints:function(){"paint"==this.showOptions?this.showOptions=void 0:this.showOptions="paint",this.showOptions||this.resetOptions()},showExtras:function(){"extras"==this.showOptions?this.showOptions=void 0:this.showOptions="extras",this.showOptions||this.resetOptions()},selectTrimLevel:function(t){this.selection.trimLevels},selectWheel:function(t){this.selection.wheels},selectPaint:function(t){this.selection.paint},selectExtras:function(t){this.selection.extras},carNameBtnClass:function(t){var e="ma-2";return t==this.selectedCar&&(e="ma-2 selected-car"),e},currencyFormat:function(t){return"$"+t.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},h=(n(389),n(69)),f=n(93),m=n.n(f),w=n(378),_=n(404),x=n(181),y=n(399),O=n(373),k=n(370),C=n(178),T=n(371),j=n(400),L=n(372),P=n(401),E=n(46),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[t.cars&&t.cars.length>0?n("v-card",{staticClass:"mx-auto"},[n("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}},[t._v("Cars")]),t._v(" "),n("v-toolbar",{attrs:{color:"indigo",dark:""}},[n("v-row",{attrs:{justify:"space-between"}},[n("v-spacer"),t._v(" "),n("v-btn-toggle",{attrs:{tile:"",color:"green accent-3",group:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}},t._l(t.cars,(function(e,r){return n("v-btn",{key:"btnname-"+r,staticClass:"ma-2",on:{click:function(e){return t.selectCar(r)}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-car")]),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[t._v(t._s(e.name))])],1)})),1),t._v(" "),n("v-spacer")],1)],1),t._v(" "),t.selectedCar?n("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[n("v-row",{staticStyle:{background:"#37474F"},attrs:{justify:"space-between"}},[n("v-col",{attrs:{xs12:""}},[n("v-container",{attrs:{fluid:""}},[n("span",{staticClass:"pl-5"},[n("b",[t._v(t._s(t.selection.name))])]),t._v(" "),n("span",{staticClass:"pl-5"},[t._v("Seats: "+t._s(t.selection.seats))]),t._v(" "),n("span",{staticClass:"pl-5"},[t._v(t._s(t.selection.convertible?"convertible":""))])])],1)],1),t._v(" "),n("v-row",{staticClass:"boxshadow",staticStyle:{background:"#546E7A"},attrs:{justify:"space-between"}},[n("v-col",{attrs:{xs12:"",justify:"space-between"}},[n("v-spacer"),t._v(" "),n("v-btn-toggle",{staticClass:"property",attrs:{tile:"",color:"lime accent-3",group:""},model:{value:t.property,callback:function(e){t.property=e},expression:"property"}},[n("v-btn",{staticClass:"text-left property",on:{click:function(e){return t.showTrimLevels()}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-seal")]),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[t._v("Trim Levels")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-btn",{staticClass:"text-left property",on:{click:function(e){return t.showWheels()}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-adjust")]),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[t._v("Wheels")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-btn",{staticClass:"text-left property",on:{click:function(e){return t.showPaints()}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-format-paint")]),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[t._v("Paint")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-btn",{staticClass:"text-left property",on:{click:function(e){return t.showExtras()}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-playlist-plus")]),t._v(" "),n("span",{staticClass:"hidden-md-and-down"},[t._v("Extras")]),t._v(" "),n("v-spacer")],1)],1),t._v(" "),n("v-spacer")],1)],1),t._v(" "),n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{xs12:""}},[n("v-container",{attrs:{fluid:""}},["trim"==t.showOptions?n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{xs12:""}},[n("h3",{staticClass:"pl-0 mb-3"},[t._v("Trim Levels")]),t._v(" "),t._l(t.getTrimLevels(t.selection.index),(function(e,r){return n("v-btn",{key:"trim-"+r,staticClass:"text-left mb-3",attrs:{block:""},on:{click:function(n){return t.selectTrimLevel(e.name)}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("span",[t._v(t._s(t.currencyFormat(e.price)))])],1)}))],2)],1):t._e(),t._v(" "),"wheels"==t.showOptions?n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{xs12:""}},[n("h3",{staticClass:"pl-0 mb-3"},[t._v("Wheels")]),t._v(" "),t._l(t.getWheels(t.selection.index),(function(e,r){return n("v-btn",{key:"whell-"+r,staticClass:"text-left mb-3",attrs:{block:""},on:{click:function(n){return t.selectWheel(e.name)}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("span",[t._v(t._s(t.currencyFormat(e.price)))])],1)}))],2)],1):t._e(),t._v(" "),"paint"==t.showOptions?n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{xs12:""}},[n("h3",{staticClass:"pl-0 mb-3"},[t._v("Paint")]),t._v(" "),t._l(t.getPaint(t.selection.index),(function(e,r){return n("v-btn",{key:"paint-"+r,staticClass:"text-left mb-3",attrs:{block:""},on:{click:function(n){return t.selectPaint(e.name)}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("span",[t._v(t._s(t.currencyFormat(e.price)))])],1)}))],2)],1):t._e(),t._v(" "),"extras"==t.showOptions?n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{xs12:""}},[n("h3",{staticClass:"pl-0 mb-3"},[t._v("Extras")]),t._v(" "),t._l(t.getExtras(t.selection.index),(function(e,r){return n("v-btn",{key:"extra-"+r,staticClass:"text-left mb-3",attrs:{block:""},on:{click:function(n){return t.selectExtras(e.name)}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("span",[t._v(t._s(t.currencyFormat(e.price)))])],1)}))],2)],1):t._e()],1)],1)],1)],1):t._e()],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:w.a,VBtnToggle:_.a,VCard:x.a,VCol:y.a,VContainer:O.a,VFlex:k.a,VIcon:C.a,VLayout:T.a,VRow:j.a,VSpacer:L.a,VSystemBar:P.a,VToolbar:E.a})}}]);