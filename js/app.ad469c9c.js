(function(e){function t(t){for(var r,u,l=t[0],s=t[1],i=t[2],f=0,p=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/json-as-xlsx/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var c=s;a.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t,n){e.exports=n("56d7")},2:function(e,t){},3:function(e,t){},"41f5":function(e,t,n){"use strict";t.__esModule=!0;var r=n("1146");e.exports=function(e,t){void 0===t&&(t={});var n=t.extraLength||1,o=t.writeOptions||{},a=r.utils.book_new();return e.forEach((function(e,t){var o=0,u=[],l=[];e.content.forEach((function(t){var n={};e.columns.forEach((function(e,r){var a="function"===typeof e.value?e.value(t):t[e.value];n[e.label]=a,o=r+1})),u.push(n)}));for(var s=r.utils.json_to_sheet(u),i=r.utils.decode_range(s["!ref"]||""),c=i.s.c;c<=i.e.c;c++){var f=r.utils.encode_col(c)+"1";l.push(f)}s["!cols"]=[];var p=0;while(p<o){var h=l[p],v={width:s[h].v.length+n};for(var d in s)if(s.hasOwnProperty(d)&&h.charAt(0)===d.charAt(0)&&d.length===h.length){var b=s[d].v;"number"===typeof b&&(b=""+b),b&&b.length>=v.width&&(v.width=b.length+n)}s["!cols"].push(v),p++}r.utils.book_append_sheet(a,s,""+(e.sheet||"Sheet "+(t+1)))})),"buffer"==o.type?r.write(a,o):r.writeFile(a,(t.fileName||"Spreadsheet")+".xlsx",o)}},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Testing json-as-xlsx")]),n("button",{on:{click:e.downloadFile}},[e._v("Download")]),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("span",[e._v("Visit this project on: ")]),n("a",{attrs:{href:"https://github.com/LuisEnMarroquin/json-as-xlsx",target:"_blank"}},[e._v("GitHub")])])}];const u=n("41f5");var l={name:"App",methods:{downloadFile:()=>{let e=[{sheet:"Adults",columns:[{label:"User",value:"user"},{label:"Age",value:e=>e.age+" years"},{label:"Phone",value:e=>e.more&&e.more.phone||""}],content:[{user:"Andrea",age:20,more:{phone:"11111111"}},{user:"Luis",age:21,more:{phone:"12345678"}}]},{sheet:"Children",columns:[{label:"User",value:"user"},{label:"Age",value:e=>e.age+" years"},{label:"Phone",value:e=>e.more&&e.more.phone||""}],content:[{user:"Manuel",age:16,more:{phone:"99999999"}},{user:"Ana",age:17,more:{phone:"87654321"}}]}],t={fileName:"MySpreadsheet"};u(e,t)}}},s=l,i=(n("034f"),n("2877")),c=Object(i["a"])(s,o,a,!1,null,null,null),f=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.ad469c9c.js.map