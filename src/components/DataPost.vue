<template>
  <div>
  <v-contanier>

     <div v-for="data in datas" :key="data.id">
      <v-layout>
      <v-flex xs12 sm12>
        <v-card>
         <h3>{{ data.id }} - {{ data.title  }}</h3>
       <p>{{ data.body }}</p>
       <br>
      </v-card>
    </v-flex>
    </v-layout>

     </div>
    
  </v-contanier>
    
  
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
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data => this.datas = data)
       //.then(response => response.json())
       //.then(json => console.log(json))
     }

   };
 </script>
