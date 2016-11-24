<template>
  <div>
    <div class="talk" v-for="(talk, index) in talks">
      <h3 class="talk-title">{{ talk.title }}</h3>
      <div class="talk-speaker">{{ talk.speakers.join(', ') }}</div>
      <router-link :to="'/talk/' + index">En savoir plus...</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'talklist',

  computed: mapState([
    'talks'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
