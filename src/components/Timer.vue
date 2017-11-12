<template>
  <v-flex xs12>
    <v-card-text class="counter">{{ time }}</v-card-text>
    <v-card-text class="msg">{{ msg }}</v-card-text>
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
    <v-layout row wrap class='pomodoros'>
      <v-flex xs12>
        <img src='../assets/tomato.png' v-for='n in pomodoros' class="tomato"/>
      </v-flex>
    </v-layout>    
  </v-flex>  
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import alarmSound from '../assets/alarm.mp3';

export default {
  data() {
    return {
      config: {
      },
    };
  },
  methods: {
    ...mapMutations(['startTime', 'reset', 'setStage', 'setPomodoros', 'nextTimer']),
    alarm() {
      const alarm = new Audio(alarmSound);
      alarm.play();
      setTimeout(() => {
        alarm.pause();
        alarm.currentTime = 0;
      }, 1000);
    },
  },
  computed: {
    ...mapGetters(['timer', 'time', 'state', 'pomodoros', 'stage']),
    startButton() {
      if (this.timer.playing === false) {
        return 'Play';
      }
      return 'Pause';
    },
    msg() {
      if (this.stage === 'short') return 'Short rest';
      if (this.stage === 'long') return 'Long rest';
      return 'Work';
    },
  },
  watch: {
    time(current) {
      if (current === '00:00') {
        if (this.stage === 'pomodoro') {
          // if second pomodoro in a row - long break
          if (this.pomodoros % 2 === 0) {
            this.setStage('short');
          } else {
            // if first pomodoro in a row - short break
            this.setStage('long');
          }
        } else {
          // coming out of a short
          this.setStage('pomodoro');
          this.setPomodoros(this.pomodoros + 1);
        }
        this.nextTimer();
        this.alarm();
      }
    },
  },
  mounted() {

  },
};
</script>

