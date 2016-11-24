<template>
  <div class="talk">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="talk">
      <h3 class="talk-title">{{ talk.title }}</h3>
      <div class="talk-speaker">{{ talk.speakers.join(', ') }}</div>
      <div class="talk-description">{{ talk.description }}</div>
    </div>
    <div v-else class="ui large label">Aucun talk avec cet ID</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'talk',

  data () {
    return {
      error: null
    }
  },

  computed: mapState([
    'talk'
  ]),

  watch: {
    '$route': 'fetchData'
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      this.$store.dispatch('getTalk', parseInt(this.$route.params.id))
    }
  }
}
</script>

<style scoped>
.talks {
  margin: 0 50px;
}

.talk {
  padding-bottom: 1rem;
  text-align: center;
  vertical-align: top;
  border: .125rem solid #eee;
  margin-bottom: 10px;
}

.talk-title {

}

.talk-speaker {
  margin-bottom: 20px;
}

a {
  color: #276a91;
}

a.button {
  font-size: 1rem;
  color: #fff;
  background: #276a91;
  border-color: transparent;
  padding: .4em 1em;
  border-radius: .1875rem;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
