<template>
  <v-flex xs12>
    <v-card-text class="counter">{{ pomodoro }}</v-card-text>
    <v-layout row wrap class="buttons">
      <v-flex xs6>
        <v-card dark raised color="green darken-3" class="button">
          <div @click="startTime">{{ startButton }}</div> 
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark color="primary" class="button">
          <div @click="reset">Reset</div> 
        </v-card>
      </v-flex>    
    </v-layout>    
  </v-flex>  
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';


export default {
  data() {
    return {
      config: {
      },
    };
  },
  methods: {
    ...mapMutations(['startTime', 'reset']),
  },
  computed: {
    ...mapGetters(['timer', 'pomodoro']),
    startButton() {
      if (this.timer.playing === false) {
        return 'Play';
      }
      return 'Pause';
    },
  },
  mounted() {
  },
};
</script>

