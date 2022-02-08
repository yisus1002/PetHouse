<template>
 <div  >

    <v-container fluid class="pl-md-14 justify-center pt-1" > 
        <v-row  class="pl-md-4 mt-0">
          <v-col  class="mt-0 px-0" >
              <h1  class=" text-center fontJ text-xs-h1 py-0 my-0 mb-3" >
                <v-icon size="35" color="brown darken-4" >mdi-paw</v-icon>
                Bienvenido a petHouse
                <v-icon  size="35" color="brown darken-4">mdi-paw</v-icon>
              </h1>

<!-- style="border:solid 1px blue" -->
        <v-row class=" mx-0 px-0 mx-xl-auto col-xl-6 pt-1" >
          <v-col cols="12" sm="12" md="8">
              <v-sheet  class="mx-auto "  elevation="0"
              cycle>
               <v-slide-group  v-model="model"  active-class="success">
                 <v-slide-item v-for="n in  items"  :key="n.id" v-slot="{toggle }" >
                    <!-- @click="toggle" -->
                    <!-- to="/mascotas" -->
                   <v-card   @click="toggle" 
                     class="ma-1 "  width="100" >
                     <v-img  height="200"   :src="n.src" >  </v-img>
                   </v-card>
                 </v-slide-item>
               </v-slide-group>
              </v-sheet>
              <v-container class="text-center">
           <v-alert
                outlined
                type="success"
                text
              >En remodelación pronto nuevas funciones
            </v-alert>        
          <hr>
                <v-skeleton-loader 
                type="card-avatar, article, actions"  >
                </v-skeleton-loader>
                <v-btn link to="/mascotas" color="success">Mascotas</v-btn>
              </v-container>
          </v-col>

          <v-col cols="12" sm="12" md="4" >
            <v-card width="100%" height="600"            
                style="border-radius:30px" >
              <div id="map">   </div>
            </v-card>
          </v-col>


        </v-row >

        <!-- <v-row class=" mx-0 px-0 mx-xl-auto col-xl-6 pt-1 " style="border:solid 1px red;">
          <v-col cols="12" sm="6" md="7" lg="8" class="py-0 d-flex flex-wrap">
             <v-col class="mx-0 px-1  my-1"  cols="5" sm="3" md="3" lg="2" v-for="n in 5" :key="n">
                 <v-card class="mx-0"
                 elevation="2">
                     <v-img 
                    height="200"
                    ></v-img>
                </v-card>
            </v-col>    


          </v-col>

          <v-col cols="12" sm="6" md="5" lg="4" class="py-0 px-1 col-m" >

          </v-col>
        </v-row> -->

          </v-col>
        </v-row>
        
     </v-container>
    
  </div>
 
</template>

<script>
import { mapState } from "vuex"
// import Mapboxgl from 'mapbox-gl';

  export default {
    name: 'Home',
    data(){
      return{
          model: null,
     items: [
          { src: "https://www.tiendanimal.es/articulos/wp-content/uploads/2016/05/razas-de-perros-pequeno-1200x800.jpg"},
          { src: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'},
          { src: 'https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg'},
          { src: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-cuidado-de-los-perros-recien-adoptados.jpg?itok=QSZKRlln"},
          { src: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5cc2f09b5cafe89c77330566/border-collie-campo.jpg'},
          { src: 'https://s1.eestatic.com/2021/11/24/curiosidades/mascotas/629697961_216041764_1706x960.jpg'},
          { src: 'https://www.viveusa.mx/sites/default/files/field/image/perro_salchicha.jpg'},
          { src: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'},
        ],
      }
    },

    methods:{
      // getMapa(){
      //   const map = new Mapboxgl.Map({
      //       container: 'map', // container ID
      //       style: 'mapbox://styles/mapbox/streets-v11', // style URL
      //       center: [-75.872321, 8.761313], // starting position [lng, lat]
      //       zoom: 9 // starting zoom
      //       });
      // }
    },



    components: {
      // HelloWorld,
    },
    computed:{
 ...mapState(['menuinicio']),
    },
    mounted(){
      // this.getMapa()
    },
    setup() {
      
    },

    created(){
      this.menuinicio.estado=true; 

    },
  }
</script>
<style scoped>
.fontJ{
  color:rgba(61, 18, 52, 0.918);
  font-size:24px;
  font-weight:bold;
/* font-family: 'Gloria Hallelujah', cursive; */
font-family: 'Coming Soon', cursive;
}
#carimg{
  overflow:hidden;
}
#contcr{
  /* border-radius: 60px;
  border: solid 3px red;
  overflow: hidden; */
}
</style>
