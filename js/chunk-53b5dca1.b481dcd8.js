(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53b5dca1"],{3600:function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",{staticClass:"pl-md-14 d-flex justify-center ",attrs:{fluid:""}},[e("v-container",{staticClass:" px-0 pb-0"},[e("div",{staticClass:" container-fluid mt-0 mx-auto col-sm-12 col-md-11 pt-0 px-0 white shadow rounded-lg",staticStyle:{overflow:"hidden"}},[e("h1",{staticClass:" justify-center fontp d-flex m-0 py-0 green"},[t._v("Mascotas "),e("v-icon",{staticClass:"mx-3",attrs:{color:"purple accent-3",size:"34"}},[t._v("mdi-paw")])],1),e("v-btn",{staticClass:"mx-4 mb-3 my-1",attrs:{color:"purple accent-3","x-small":"",elevation:"5",fab:"",dark:""},on:{click:t.limpiar}},[e("v-icon",[t._v("mdi-plus")])],1),e("div",{staticClass:"container-fluid table-responsive cont-table"},[e("table",{staticClass:"table table-sm table-hover "},[e("thead",[e("tr",{attrs:{id:"CabezeraC"}},[e("th",{attrs:{scope:"col"}},[t._v("fila")]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Tipo de mascota")]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Imagen")]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Ubicacion")]),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Opciones")])])]),e("tbody",{attrs:{id:"insertardM"}},t._l(t.mascota,(function(a,c){return e("tr",{key:c,staticClass:"text-start",attrs:{id:"row"+c}},[e("td",{attrs:{scope:"row"}},[e("v-container",{staticClass:" justify-center d-flex"},[t._v(" "+t._s(c+1)+" ")])],1),e("td",[e("v-container",{staticClass:" justify-center d-flex"},[t._v(" "+t._s(a.tipo_mascota)+" ")])],1),e("td",[e("v-container",{staticClass:" justify-center d-flex"},[t._v(" "+t._s(a.imagen)+" ")])],1),e("td",[e("v-container",{staticClass:" justify-center d-flex"},[t._v(" "+t._s(a.ubicacion)+" ")])],1),e("td",{staticClass:" m-0 p-0"},[e("v-container",{staticClass:"d-flex justify-center"},[e("v-btn",{attrs:{color:"red",plain:"",icon:""},on:{click:function(e){return t.modif(a.id,c)}}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1),e("v-btn",{attrs:{color:"blue",plain:"",icon:""},on:{click:function(e){return t.eliminarMascota(a.id)}}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1)],1)],1)])})),0)])])],1),e("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"text-center"},[t._v(" "+t._s(t.tituloForm))]),e("v-form",{staticClass:"p-4"},[e("v-combobox",{attrs:{"prepend-icon":"mdi-paw",required:"",items:t.items_mascota,label:"Seleccione una mascota"},model:{value:t.masco.tipo_mascota,callback:function(a){t.$set(t.masco,"tipo_mascota",a)},expression:"masco.tipo_mascota"}}),e("v-file-input",{attrs:{placeholder:"Suba una imagen",chips:"",multiple:"","show-size":"","prepend-icon":"mdi-camera",label:"Suba una imagen"},model:{value:t.masco.imagen,callback:function(a){t.$set(t.masco,"imagen",a)},expression:"masco.imagen"}}),e("v-text-field",{attrs:{label:"Ubicacion","prepend-icon":"mdi-home",required:""},model:{value:t.masco.ubicacion,callback:function(a){t.$set(t.masco,"ubicacion",a)},expression:"masco.ubicacion"}}),e("v-card-actions",{staticClass:"justify-center"},[t.bhabilitar?t._e():e("v-btn",{attrs:{color:"green",dark:"",type:"submit"},on:{click:function(a){return a.preventDefault(),t.modificarMascota.apply(null,arguments)}}},[t._v("Editar")]),t.bhabilitar?e("v-btn",{attrs:{color:"purple accent-3",dark:"",type:"submit"},on:{click:function(a){return a.preventDefault(),t.crearMascota.apply(null,arguments)}}},[t._v("guardar")]):t._e(),e("v-btn",{attrs:{color:"red",dark:""},on:{click:function(a){t.dialog=!1}}},[t._v("cancelar")])],1)],1)],1)],1)],1)],1)],1)},i=[],o=e("1da1"),s=e("5530"),n=(e("b0c0"),e("96cf"),e("bc3a")),r=e.n(n),l=e("2f62"),m={name:"Mascotas",data:function(){return{imagen:"dfgdfg",api:"https://61d654c7b7381600171814db.mockapi.io/mascota/",id:"",i:"",bhabilitar:"",dialog:!1,mascota:[],masco:{tipo_mascota:"",imagen:[""],ubicacion:""},tituloForm:"",items_mascota:["Perro","Gato"]}},computed:Object(s["a"])({},Object(l["c"])(["menuinicio","inicio"])),methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["mostrarLoading","ocultarLoading","mostrarSnacbar"])),{},{limpiar:function(){this.dialog=!0,this.bhabilitar=!0,this.tituloForm="Agregar mascota",this.masco.tipo_mascota="",this.masco.imagen=[],this.masco.ubicacion=""},getMascotas:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.mostrarLoading({titulo:"Cargando",color:"secondary"}),a.next=4,r.a.get(t.api);case 4:e=a.sent,t.mascota=e.data,a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:return a.prev=11,t.ocultarLoading(),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[0,8,11,14]])})))()},crearMascota:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""!==t.masco.tipo_mascota&&t.masco.imagen!==[]&&""!==t.masco.ubicacion){a.next=4;break}t.mostrarSnacbar({mensaje:"Faltan datos!",color:"red"}),a.next=21;break;case 4:return e=t.masco.imagen,c={tipo_mascota:t.masco.tipo_mascota,imagen:e[0].name,ubicacion:t.masco.ubicacion},a.prev=6,a.next=9,r.a.post(t.api,c);case 9:i=a.sent,console.log(i.data),t.mostrarSnacbar({mensaje:i.data.tipo_mascota+" Se ha agregado",color:"green"}),t.getMascotas(),a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](6),console.log(a.t0);case 18:return a.prev=18,t.dialog=!1,a.finish(18);case 21:case"end":return a.stop()}}),a,null,[[6,15,18,21]])})))()},modif:function(t,a){this.i=a,this.id=t,this.bhabilitar=!1,this.dialog=!0,this.tituloForm="Modificar mascota",this.masco.tipo_mascota=this.mascota[a].tipo_mascota,this.masco.ubicacion=this.mascota[a].ubicacion,this.masco.imagen=[]},modificarMascota:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e,c,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t.masco.imagen,0==e.length?(e="",e=t.mascota[t.i].imagen):e=e[0].name,console.log(e),c={tipo_mascota:t.masco.tipo_mascota,imagen:e,ubicacion:t.masco.ubicacion},a.prev=4,a.next=7,r.a.put(t.api+t.id,c);case 7:i=a.sent,console.log("mascota modificada: ",i.data),t.mostrarSnacbar({mensaje:i.data.tipo_mascota+" Se ha modificado",color:"light-blue accent-3"}),t.getMascotas(),a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](4),console.log(a.t0);case 16:return a.prev=16,t.dialog=!1,a.finish(16);case 19:case"end":return a.stop()}}),a,null,[[4,13,16,19]])})))()},eliminarMascota:function(t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.a.delete(a.api+t);case 2:c=e.sent,console.log("cliente eliminado: ",c.data),a.mostrarSnacbar({mensaje:c.data.tipo_mascota+" Se eliminado!",color:"orange darken-1"}),a.getMascotas();case 6:case"end":return e.stop()}}),e)})))()}}),created:function(){this.menuinicio.estado=!0,this.inicio.estado=!0,this.getMascotas()}},u=m,d=e("2877"),p=Object(d["a"])(u,c,i,!1,null,"e0d46e20",null);a["default"]=p.exports},b0c0:function(t,a,e){var c=e("83ab"),i=e("5e77").EXISTS,o=e("e330"),s=e("9bf2").f,n=Function.prototype,r=o(n.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,m=o(l.exec),u="name";c&&!i&&s(n,u,{configurable:!0,get:function(){try{return m(l,r(this))[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-53b5dca1.b481dcd8.js.map