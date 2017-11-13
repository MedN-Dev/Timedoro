<template>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <a href="#" dark slot="activator">Settings</a>
      <v-card color="grey darken-1">
        <v-toolbar dark color="secondary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>        
        <v-container fluid fill-height >
          <v-layout row justify-center>
            <v-flex xs12 md8>        
              <v-card color="secondary">     
                <v-layout row>
                   <v-flex xs4>
                    <v-subheader dark>Pomodoro lenght</v-subheader>
                  </v-flex>
                  <v-flex xs7>
                    <v-text-field
                      label="Fill with a round number of minutes"
                      single-line
                      v-model="times.pomodoro"
                      dark
                      suffix="minutes"

                    >
                    </v-text-field>
                  </v-flex> 
                </v-layout>                 
                <v-layout row>
                   <v-flex xs4>
                    <v-subheader dark>Short rest lenght</v-subheader>
                  </v-flex>
                  <v-flex xs7>
                    <v-text-field
                      label="Fill with a round number of minutes"
                      single-line
                      v-model="times.short"
                      dark
                      suffix="minutes"

                    >
                    </v-text-field>
                  </v-flex> 
                </v-layout>                 
                <v-layout row>
                   <v-flex xs4>
                    <v-subheader dark>Long rest lenght</v-subheader>
                  </v-flex>
                  <v-flex xs7>
                    <v-text-field
                      label="Fill with a round number of minutes"
                      single-line
                      v-model="times.long"
                      dark
                      suffix="minutes"

                    >
                    </v-text-field>
                  </v-flex> 
                </v-layout> 
                <v-layout row>
                  <v-flex xs4 offset-xs4 md2 offset-md8 >
                      <v-btn dark color="primary" @click="save">Save</v-btn>
                  </v-flex>
                  <v-flex xs4 md2>
                      <v-btn dark color="grey darken-1" @click.native="dialog = false">Cancel</v-btn>
              
                  </v-flex> 
                </v-layout>
              </v-card>
            </v-flex>              
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>            
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      times: {
        pomodoro: null,
        short: null,
        long: null,
      },
    };
  },
  computed: {
    ...mapGetters(['timer', 'getPomodoro', 'getShort', 'getLong']),
  },
  watch: {
    dialog(val) {
      if (val !== false) {
        this.times.pomodoro = this.getPomodoro;
        this.times.short = this.getShort;
        this.times.long = this.getLong;
      }
    },
  },
  methods: {
    ...mapMutations(['setTimes', 'reset']),
    save() {
      this.dialog = null;

      if (!Number.isInteger(Math.ceil(this.times.pomodoro))) {
        this.times.pomodoro = null;
      }
      if (!Number.isInteger(Math.ceil(this.times.short))) {
        this.times.short = null;
      }
      if (!Number.isInteger(Math.ceil(this.times.long))) {
        this.times.long = null;
      }
      this.setTimes(this.times);
      this.reset();
    },
  },
};

</script>
<style>
  
</style>

