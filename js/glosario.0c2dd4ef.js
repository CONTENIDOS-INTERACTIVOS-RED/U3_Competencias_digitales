(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario","chunk-4e410830"],{"13d5":function(t,n,r){"use strict";var a=r("23e7"),e=r("d58f").left,i=r("a640"),o=r("2d00"),s=r("605d"),c=i("reduce"),u=!s&&o>79&&o<83;a({target:"Array",proto:!0,forced:!c||u},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,n,r){var a=r("da84"),e=r("fdbc"),i=r("17c2"),o=r("9112");for(var s in e){var c=a[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,n,r){"use strict";var a=r("b727").forEach,e=r("a640"),i=e("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"3cd8":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo"}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[r("h3",{domProps:{innerHTML:t._s(t.titulo)}}),r("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},e=[],i={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=i,s=(r("8385"),r("2877")),c=Object(s["a"])(o,a,e,!1,null,null,null);n["default"]=c.exports},"4e82":function(t,n,r){"use strict";var a=r("23e7"),e=r("1c0b"),i=r("7b0b"),o=r("d039"),s=r("a640"),c=[],u=c.sort,l=o((function(){c.sort(void 0)})),f=o((function(){c.sort(null)})),d=s("sort"),b=l||!f||!d;a({target:"Array",proto:!0,forced:b},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),e(t))}})},"56e2":function(t,n,r){},7716:function(t,n,r){"use strict";r("56e2")},8385:function(t,n,r){"use strict";r("d36b")},b64b:function(t,n,r){var a=r("23e7"),e=r("7b0b"),i=r("df75"),o=r("d039"),s=o((function(){i(1)}));a({target:"Object",stat:!0,forced:s},{keys:function(t){return i(e(t))}})},c92c:function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"curso-main-container glosario"},[r("BannerInterno",{attrs:{icono:"fas fa-atlas",subTitulo:"GLOSARIO",titulo:"Unidad 3. Dominio de la Plataforma LMS y Herramientas Digitales"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return r("div",{key:"letra-"+n.letra,staticClass:"glosario__letra-item mb-2"},[r("div",{staticClass:"glosario__letra-item__letra me-4"},[r("div",{staticClass:"glosario__letra-item__letra__icono"},[r("span",[t._v(t._s(n.letra))])])]),r("div",{staticClass:"glosario__letra-item__texto"},t._l(n.terminos,(function(n){return r("p",{staticClass:"mt-3 mb-4"},[t._m(0,!0),r("strong",{domProps:{innerHTML:t._s(n.terminoHtml||n.termino)}}),r("strong",[t._v(": ")]),r("span",{domProps:{innerHTML:t._s(n.significado)}})])})),0)])})),0)],1)},e=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("strong",[r("i",{staticClass:"lista-ul__vineta"})])}],i=r("2909"),o=(r("d3b7"),r("159b"),r("fb6a"),r("13d5"),r("4e82"),r("b64b"),r("d81d"),r("7db0"),r("3cd8")),s=r("ff6a"),c={name:"Glosario",components:{BannerInterno:o["default"]},mixins:[s["a"]],computed:{glosarioData:function(){return this.$config.glosario},orderedData:function(){var t=this,n=Object(i["a"])(this.glosarioData);n.forEach((function(t){t.significado=t.significado.charAt(0).toLowerCase()+t.significado.slice(1)}));var r=Object(i["a"])(n).reduce((function(n,r){var a=t.quitarAcentos(r.termino.toLowerCase())[0];return n[a]?n[a].terminos.push(r):n[a]={letra:a,terminos:[r]},n}),{}),a=Object.keys(r).sort(),e=[];return a.forEach((function(n){var a=r[n],i=a.terminos;if(i.length>1){var o=[],s=a.terminos.map((function(t){return t.termino})).sort((function(n,r){var a=t.quitarAcentos(n).toLowerCase(),e=t.quitarAcentos(r).toLowerCase();return a<e?-1:e<a?1:0}));s.forEach((function(t){o.push(i.find((function(n){return n.termino===t})))})),i=o}e.push({letra:a.letra.toUpperCase(),terminos:i})})),e}}},u=c,l=(r("7716"),r("2877")),f=Object(l["a"])(u,a,e,!1,null,null,null);n["default"]=f.exports},d36b:function(t,n,r){},d58f:function(t,n,r){var a=r("1c0b"),e=r("7b0b"),i=r("44ad"),o=r("50c4"),s=function(t){return function(n,r,s,c){a(r);var u=e(n),l=i(u),f=o(u.length),d=t?f-1:0,b=t?-1:1;if(s<2)while(1){if(d in l){c=l[d],d+=b;break}if(d+=b,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=b)d in l&&(c=r(c,l[d],d,u));return c}};t.exports={left:s(!1),right:s(!0)}}}]);
//# sourceMappingURL=glosario.0c2dd4ef.js.map