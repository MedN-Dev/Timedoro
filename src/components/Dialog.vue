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
        <div>
          This app was developed by <a href="http://gcj.io">Gustavo Caetano</a>, using amazing <a href="http://vuetifyjs.com">Vue.js</a>.
        </div>
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

