<template>
  <v-flex xs12>
    <v-card-text class="counter">{{ time }}</v-card-text>
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
      {{state}}    
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
    ...mapMutations(['startTime', 'reset', 'setStage', 'setPomodoros', 'nextTimer']),
  },
  computed: {
    ...mapGetters(['timer', 'time', 'state', 'pomodoros', 'stage']),
    startButton() {
      if (this.timer.playing === false) {
        return 'Play';
      }
      return 'Pause';
    },
  },
  watch: {
    time(current) {
      if (current === '00:00') {
        if (this.stage === 'pomodoro') {
          // if second pomodoro in a row - long break
          if (this.pomodoros % 2 === 0) {
            this.setStage('long');
          } else {
            // if first pomodoro in a row - short break
            this.setStage('short');
          }
        } else {
          // coming out of a short
          this.setStage('pomodoro');
          this.setPomodoros(this.pomodoros + 1);
        }
        this.nextTimer();
      }
    },
  },
  mounted() {

  },
};
</script>

