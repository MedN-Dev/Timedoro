<template>
        <v-dialog v-model="dialog" width="600px">

      <a href="#" color="secondary" dark slot="activator">About</a>
      <v-card>
        <v-toolbar dark color="secondary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>About</v-toolbar-title>
        </v-toolbar>
      </v-card>
      <v-card-text>
        <p>
          This app was developed by <a href="http://gcj.io">Gustavo Caetano</a>, using amazing <a href="http://vuetifyjs.com">Vue.js</a>.
        </p>        
        <p>Tomato icon made by Freepik from <a href="http://www.flaticon.com">www.flaticon.com</a> </p>
        <p>You may use this app for free forever. If you like it and want to buy me a beer, here's my bitcoin address <strong>18vxL859Nvi3C3FaMdWSKKB6vpzcC88GrR</strong> :)
        </p>
      </v-card-text>
   
    </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      };
    },
  };

</script>
<style>
  
</style>

