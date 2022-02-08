<template>
  <v-app>
    <Header></Header>
     <v-dialog
          v-model="loading.estado"
          hide-overlay
          persistent
          width="300"
          >
          <v-card
            color="primary"
            dark
          >
          <v-card-text>
              {{loading.titulo}}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <Snackbar></Snackbar>
    <v-main class="mt-0 ">
      <router-view/>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapState} from "vuex"

import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import Snackbar from './components/shared/Snackbar.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
    Snackbar,

  },

  data: () => ({
    
  }),
  computed:{
    ...mapState(["loading",'isloading','userLocation'])
  },

  created(){
    console.log(this.isloading, this.userLocation)
  }
};
</script>
<style >
.fontp{
  font-family: 'Coming Soon', cursive;
}
</style>