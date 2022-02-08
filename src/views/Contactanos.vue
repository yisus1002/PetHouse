<template >
    <div>
       <v-container> Contactanos</v-container>
    </div>
</template>
<script>
import { mapState } from "vuex"



export default {
    name:'Contactanos',
    data(){ return{

    }},
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