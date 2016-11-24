<template>
  <div class="center">
    <router-link tag="button" :class="[ prevClass(), 'ui', 'primary', 'button' ]" 
      :to="{ name: 'talk', params: { id: prevTalk() } }">
      <i class="left arrow icon"></i>
    </router-link>
    <router-link tag="button" class="ui primary button" 
      :to="{ name: 'talk', params: { id: nextTalk() } }">
      <i class="right arrow icon"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'nav',

  methods: {
    prevClass () {
      return parseInt(this.$route.params.id) > 0 ? '' : 'hide'
    },
    nextTalk () {
      return parseInt(this.$route.params.id) + 1
    },
    prevTalk () {
      return parseInt(this.$route.params.id) - 1
    }
  }
}
</script>

<style scoped>
.hide {
  display: none;
}
</style>
