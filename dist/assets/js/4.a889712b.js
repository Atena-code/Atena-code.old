(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(t,a,s){},198:function(t,a,s){"use strict";var n=s(2),i=s(12),r=s(199),e="".startsWith;n(n.P+n.F*s(200)("startsWith"),"String",{startsWith:function(t){var a=r(this,t,"startsWith"),s=i(Math.min(arguments.length>1?arguments[1]:void 0,a.length)),n=String(t);return e?e.call(a,n,s):a.slice(s,s+n.length)===n}})},199:function(t,a,s){var n=s(60),i=s(15);t.exports=function(t,a,s){if(n(a))throw TypeError("String#"+s+" doesn't accept regex!");return String(i(t))}},200:function(t,a,s){var n=s(1)("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(s){try{return a[n]=!1,!"/./"[t](a)}catch(t){}}return!0}},201:function(t,a,s){"use strict";s(181)},269:function(t,a,s){"use strict";s.r(a);s(198),s(26);var n={data:function(){return{particlesBgComp:null}},computed:{bgProps:function(){if(this.particlesBgComp)return{bg:!0,type:"cobweb",color:"#ae751e"}},data:function(){return this.$page.frontmatter}},mounted:function(){var t=this;Promise.all([s.e(0),s.e(3)]).then(s.bind(null,268)).then((function(a){t.particlesBgComp=a.ParticlesBg}))}},i=(s(201),s(0)),r=Object(i.a)(n,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[t.particlesBgComp?a(t.particlesBgComp,t._b({tag:"component"},"component",t.bgProps,!1)):t._e(),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.$withBase(t.data.avatar),alt:""}})]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"bio"},[a("div",{staticClass:"head"},[a("span",[t._v("\n            "+t._s(t.data.head)+"\n          ")])]),t._v(" "),a("div",{staticClass:"info"},[a("span",[t._v("\n            "+t._s(t.data.info)+"\n          ")])]),t._v(" "),a("div",{staticClass:"description"},[a("Content")],1)]),t._v(" "),a("div",{staticClass:"interests"},[t._v("\n        "+t._s(t.data.interests)+"\n      ")]),t._v(" "),a("div",{staticClass:"actions"},t._l(t.data.actions,(function(s){return a("div",[a("a",{staticClass:"button",attrs:{href:s.link,target:s.link.startsWith("/")?"":"_blank"}},[t._v("\n            "+t._s(s.text)+"\n          ")])])})),0)]),t._v(" "),t.data.footer?a("div",{staticClass:"footer"}):t._e()])],1)}),[],!1,null,null,null);a.default=r.exports}}]);