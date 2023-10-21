<template>
  <v-app>
    <v-app-bar
      app
      color="secundary"
      dark
    >
      <h1>Prueba Vue Js Camilo Garzon</h1>
      

      <v-spacer></v-spacer>



      <v-btn 
      v-for="(item, index) in rutas" :key="index"
      text
      @click="insertarRuta(item.ruta)">

        <span class="mr-2">{{ item.nombre }}</span>
  
      </v-btn>
  

    </v-app-bar>

    <v-main>
      <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>


//import DataPost from '../src/components/DataPost.vue'
//import Image from '../src/components/Image.vue'

export default {

  name: 'App',
  components: {
    //DataPost,
   // Image,
  

  },

  data: () => ({
    rutas:[
      {nombre:'Datos', ruta:'/Dato'},
      {nombre:'Imagenes', ruta:'/imagen'}
    ]
  }),

  methods: {
    insertarRuta(ruta){
      this.$router.push(ruta).catch(() => {})
    }
  }
};
</script>
