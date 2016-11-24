<template>
  <div>
    <div class="talk" v-for="(talk, index) in talks">
      <h3 class="talk-title">{{ talk.title }}</h3>
      <div class="talk-speaker">{{ talk.speakers.join(', ') }}</div>
      <router-link :to="'/talk/' + index">En savoir plus...</router-link>
      <!-- <div class="ui blue label"><i class="thumbs up icon"></i> {{ talk.votes }}</div> -->
    </div>
  </div>
</template>

<script>
import { fetchTalks } from '../api'

export default {
  name: 'talklist',

  data () {
    return {
      talks: []
    }
  },

  created () {
    fetchTalks().then((resp) => { this.talks = resp.data.talks })
  }
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
