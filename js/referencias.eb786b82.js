(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-4e410830"],{"2e6c":function(t,n,e){},"3cd8":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo"}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[e("h3",{domProps:{innerHTML:t._s(t.titulo)}}),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},r=[],i={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=i,o=(e("8385"),e("2877")),c=Object(o["a"])(s,a,r,!1,null,null,null);n["default"]=c.exports},4408:function(t,n,e){"use strict";e("2e6c")},"4e82":function(t,n,e){"use strict";var a=e("23e7"),r=e("1c0b"),i=e("7b0b"),s=e("d039"),o=e("a640"),c=[],l=c.sort,u=s((function(){c.sort(void 0)})),f=s((function(){c.sort(null)})),d=o("sort"),p=u||!f||!d;a({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},"7c1e":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"curso-main-container referencias"},[e("BannerInterno",{attrs:{icono:"fas fa-book",subTitulo:"Referencias bibliográficas",titulo:"Unidad 3. Dominio de la Plataforma LMS y Herramientas Digitales"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n,a){return e("div",{key:n.link,staticClass:"referencias__item d-flex"},[e("span",{staticClass:"py-4 d-block me-3",domProps:{innerHTML:t._s(a+1)}}),e("div",{staticClass:"py-4 w-100"},[e("span",{domProps:{innerHTML:t._s(n.referencia)}}),n.link?e("a",{staticClass:"ms-1",attrs:{href:n.link,target:"_blank"}},[e("span",{domProps:{innerHTML:t._s(n.link)}}),e("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):t._e()])])})),0)],1)},r=[],i=e("2909"),s=(e("4e82"),e("3cd8")),o=e("ff6a"),c={name:"Referencias",components:{BannerInterno:s["default"]},mixins:[o["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var t=this,n=Object(i["a"])(this.referenciasData).sort((function(n,e){var a=t.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),r=t.quitarAcentos(e.referencia.split(" ")[0].toLowerCase());return a<r?-1:a>r?1:0}));return n}}},l=c,u=(e("4408"),e("2877")),f=Object(u["a"])(l,a,r,!1,null,null,null);n["default"]=f.exports},8385:function(t,n,e){"use strict";e("d36b")},d36b:function(t,n,e){}}]);
//# sourceMappingURL=referencias.eb786b82.js.map