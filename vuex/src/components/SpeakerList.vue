<template>
  <div>
    <div class="speaker" v-for="(speaker, index) in speakers">
      <h3 class="speaker-name">{{ speaker.name }}</h3>
      <div class="speaker-bio fade">{{ speaker.bio }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'speakerlist',

  computed: {
    speakers () {
      return this.$store.getters.speakers // What is done by vuex.mapGetters
    }
  }
}
</script>

<style>
.fade {
  overflow: hidden;
  position: relative;
  height: 3.6em;
}
.fade:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 1.2em;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
}
</style>
