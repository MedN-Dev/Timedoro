<template>
   <v-layout row justify-center>
      <v-flex xs12 md8>
        <v-card dark color="secondary">
          <timer></timer>
        </v-card>
      </v-flex>
    </v-layout>
    
</template>

<script>
import { mapGetters } from 'vuex';
import timer from '@/components/Timer';

export default {
  data() {
    return {
    };
  },
  components: { timer },
  computed: {
    ...mapGetters([]),
  },
};
</script>

