(function(e){function a(a){for(var t,o,i=a[0],l=a[1],c=a[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);m&&m(a);while(v.length)v.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,a=0;a<r.length;a++){for(var s=r[a],t=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(t=!1)}t&&(r.splice(a--,1),e=o(o.s=s[0]))}return e}var t={},n={app:0},r=[];function o(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,a,s){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)o.d(s,t,function(a){return e[a]}.bind(null,t));return s},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/vue-v-model/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var m=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,a,s){e.exports=s("56d7")},"56d7":function(e,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var t=s("4d6b"),n=s.n(t),r=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"textarea"},domProps:{value:e.message},on:{input:function(a){a.target.composing||(e.message=a.target.value)}}}),s("p",[e._v("message:"+e._s(e.message))]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message1,expression:"message1"}],domProps:{value:e.message1},on:{input:function(a){a.target.composing||(e.message1=a.target.value)}}}),s("p",[e._v("message1:"+e._s(e.message1))]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message2,expression:"message2"}],attrs:{type:"checkbox",name:"hobby",value:"篮球"},domProps:{checked:Array.isArray(e.message2)?e._i(e.message2,"篮球")>-1:e.message2},on:{change:function(a){var s=e.message2,t=a.target,n=!!t.checked;if(Array.isArray(s)){var r="篮球",o=e._i(s,r);t.checked?o<0&&(e.message2=s.concat([r])):o>-1&&(e.message2=s.slice(0,o).concat(s.slice(o+1)))}else e.message2=n}}}),e._v("篮球 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message2,expression:"message2"}],attrs:{type:"checkbox",name:"hobby",value:"足球"},domProps:{checked:Array.isArray(e.message2)?e._i(e.message2,"足球")>-1:e.message2},on:{change:function(a){var s=e.message2,t=a.target,n=!!t.checked;if(Array.isArray(s)){var r="足球",o=e._i(s,r);t.checked?o<0&&(e.message2=s.concat([r])):o>-1&&(e.message2=s.slice(0,o).concat(s.slice(o+1)))}else e.message2=n}}}),e._v("足球 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message2,expression:"message2"}],attrs:{type:"checkbox",name:"hobby",value:"羽毛球"},domProps:{checked:Array.isArray(e.message2)?e._i(e.message2,"羽毛球")>-1:e.message2},on:{change:function(a){var s=e.message2,t=a.target,n=!!t.checked;if(Array.isArray(s)){var r="羽毛球",o=e._i(s,r);t.checked?o<0&&(e.message2=s.concat([r])):o>-1&&(e.message2=s.slice(0,o).concat(s.slice(o+1)))}else e.message2=n}}}),e._v("羽毛球 ")]),s("p",[e._v("message2:"+e._s(e.message2))])]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message3,expression:"message3"}],attrs:{type:"radio",value:"青菜"},domProps:{checked:e._q(e.message3,"青菜")},on:{change:function(a){e.message3="青菜"}}}),e._v("青菜 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message3,expression:"message3"}],attrs:{type:"radio",value:"胡萝卜"},domProps:{checked:e._q(e.message3,"胡萝卜")},on:{change:function(a){e.message3="胡萝卜"}}}),e._v("胡萝卜 ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message3,expression:"message3"}],attrs:{type:"radio",value:"土豆"},domProps:{checked:e._q(e.message3,"土豆")},on:{change:function(a){e.message3="土豆"}}}),e._v("土豆 ")]),s("p",[e._v("message3:"+e._s(e.message3))]),s("span",[e._v("地区")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.message4,expression:"message4"}],on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.message4=a.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[e._v("-")]),s("option",[e._v("北京")]),s("option",[e._v("浙江")]),s("option",[e._v("上海")])]),s("p",[e._v("message4:"+e._s(e.message4))]),s("span",[e._v("地区")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.message5,expression:"message5"}],on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.message5=a.target.multiple?s:s[0]}}},e._l(e.options,(function(a){return s("option",{key:a.value,domProps:{value:a.value}},[e._v(e._s(a.text))])})),0),s("p",[e._v("message5:"+e._s(e.message5))])])},o=[],i={data:function(){return{message:void 0,message1:void 0,message2:[],message3:void 0,message4:void 0,message5:void 0,options:[{text:"北京",value:"beijing"},{text:"浙江",value:"zhejaing"},{text:"上海",value:"shanghai"}]}}},l=i,c=(s("ca01"),s("2877")),m=Object(c["a"])(l,r,o,!1,null,null,null),u=m.exports;n.a.config.productionTip=!1;var v=new n.a({el:"#app",components:{Child:u},template:"\n    <div>\n\n    <Child/>\n    </div>"});console.log(v)},ca01:function(e,a,s){"use strict";var t=s("cf92"),n=s.n(t);n.a},cf92:function(e,a,s){}});
//# sourceMappingURL=app.dac5ee2f.js.map