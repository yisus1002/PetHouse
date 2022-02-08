<template >
   <div>
     <v-container>
       Nosotros
     </v-container>




   </div>
</template>
<script>
import { mapState } from "vuex"




export default {
    name:'Nosotros',
    data(){
        return {
          
        }
    },
    computed:{
 ...mapState(['menuinicio']),
    },
     created(){
      this.menuinicio.estado=false;
      console.log('hola');

    },
}
</script>
<style >
    
</style>