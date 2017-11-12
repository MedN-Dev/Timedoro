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
  .pomodoros {
    padding: 10px;
  }
  .pomodoros .tomato {
    margin: 5px;
  }
  .counter {
    font-size: 10rem;
    text-align: center;
  }
  .msg {
    font-size: 3rem;
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

  @media (max-width:499px)
  {
    .counter {
      font-size: 8rem;
    }
  }

</style>

