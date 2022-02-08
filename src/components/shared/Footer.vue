<template >
  <v-footer  dark padless style="z-index: 1;" >
    <v-card flat tile class="white--text text-center" width="100%" >
      <v-card-text class="d-flex  py-1 flex-wrap flex-sm-nowrap teal darken-4">
          <v-container  class="d-flex align-center justify-sm-start justify-center" >
              <h3 class=" font-italic title" >PetHouse</h3>
          </v-container>
            <v-container   class=" d-flex justify-sm-end flex-wrap justify-center">
                   <v-btn :href="icon.href " target="_blank"
                     v-for="(icon, index) of icons" :key="index" class="mx-4 white--text"  icon  >
                     <v-icon size="24px"> {{ icon.icon }} </v-icon>
                   </v-btn>
            </v-container>
      </v-card-text>
     <!-- <v-divider></v-divider>
      <v-card-text class="white--text px-4 my-3">
       <v-row cols="12">
           <v-col cols="12" sm="6">
               <h4 class="text-center  title">¿Por qué pethouse?</h4>
               <v-card-tex>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati impedit in enim molestias maxime incidunt perspiciatis assumenda, omnis tempore.
               </v-card-tex>
           </v-col>

       </v-row>
      </v-card-text> -->

      <!-- <v-divider></v-divider> -->

      <v-card-text class="py-1 white--text text-center body-2 ">
        &copy;  {{ new Date().getFullYear() }} <small> PetHouse</small>
      </v-card-text>
    </v-card>
  </v-footer>
  
</template>
<script>
export default {
    name: 'Footer',
    data(){
        return{
             icons: [
                    {icon:'mdi-facebook' , href:'https://web.facebook.com/?_rdc=1&_rdr'},
                    {icon:'mdi-twitter'  , href:'https://twitter.com/?lang=es'},
                    {icon:'mdi-linkedin' , href:'https://co.linkedin.com/'},
                    {icon:'mdi-instagram', href:'https://www.instagram.com/'},
                    ],
        }
    },
}
</script>
<style >
    
</style>