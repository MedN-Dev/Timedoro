<template>
  <v-app>    
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
  };

</script>
<style>
  .main {
    background-color: red;
  }
  .counter {
    font-size: 10rem;
    text-align: center;
  }
  .buttons {
    font-size: 2rem;
    text-align: center;
  }
  .button {
   cursor: pointer;
   padding: 10px;
  }
  .button a {
    text-decoration: none;
    color: #fff;
  }
  .button:hover {
    background-color: red;
  }
</style>

