<template>
  <v-app>    
    <main>
      <v-content>
        <v-container fluid fill-height class='main'>
          <router-view></router-view>
        </v-container>
      </v-content>      
    </main>
    <v-footer class="footer px-5 py-2" dark color="secondary" fixed>
      <v-spacer></v-spacer>
      <dialog-screen class="px-2" />
       <settings class="px-2" />
    </v-footer>
  </v-app>
</template>

<script>
import dialogScreen from '@/components/Dialog';
import settings from '@/components/Settings';

export default {
  data() {
    return {
    };
  },
  components: { dialogScreen, settings },
};

</script>
<style>
  body, html, .main {
    background-color: #666;
  }
  
  .pomodoros {
    padding: 10px;
    min-height: 70px;
  }
  .pomodoros .tomato {
    margin: 5px;
  }
  .counter {
    font-size: 6rem;
    text-align: center;
  }

  .counter .progress-circular__info {
    color: #fff;
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

  .footer, .footer a {
    color: #fff;
    font-size: 1.1rem;
    text-decoration: none;
  }

  .dialog {
    background-color: #666;
    color: #fff;
    font-size: 1.2rem;
  }

  .dialog a, .dialog strong {
    color: #b2ff59;
  }

  @media (max-width:499px)
  {

  }

</style>

