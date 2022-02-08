<template >
    <div>
        <v-container>
            Preguntas
        </v-container>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    
    name:'Preguntas',
    data(){
        return{

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
<style lang="">
    
</style>