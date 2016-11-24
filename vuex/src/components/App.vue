<template>
  <div id="app">
    <div class="center">
      <router-link tag="button" to="/talks" 
        class="large ui primary button router">Talks</router-link>
      <router-link tag="button" to="/speakers" 
        class="large ui primary button router">Speakers</router-link>
    </div>

    <transition name="fade">
      <router-view></router-view>
    </transition>
    <router-view name="nav"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  created () {
    this.$store.dispatch('fetchTalks')
    this.$store.dispatch('fetchSpeakers')
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
