<template>
    <div>
        <h1>Imagenes</h1>
        <v-container>
        
       <div v-for="data in datas" :key="data.id">
        <v-layout>\
            <v-flex xs2 sm6>
            <v-card>
           <h3>{{ data.id }}</h3>
           <v-img :src="data.url"></v-img>
        </v-card>
         <br>
        </v-flex>
        </v-layout>
       </div>
    </v-container>
    </div>
   </template>
   
   <script>
     export default {
       name: "DataPost",
       // creacion de hook
   
       data () {
         return{
           datas: []
         }
       },
       
       created(){
         // se debe agregar un segundo parametro en fetch para que llame un post por que por default traeria un get
         fetch('https://api.thecatapi.com/v1/images/search?limit=10')
         .then(response => response.json())
         .then(data => this.datas = data)
         //.then(response => response.json())
         //.then(json => console.log(json))
       }
  
     };
   </script>