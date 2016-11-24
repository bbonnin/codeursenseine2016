<template>
  <div>
    <h1>Talks</h1>

    <!--<div class="filter">
      <div class="ui icon input">
        <input type="text" v-model="filter" placeholder="Rechercher...">
        <i v-if="filter"  class="remove link icon" @click="resetFilter()"></i>
      </div>
    </div>-->

    <div class="centered">
      <div v-if="filteredTalks.length > 0" class="ui blue large label">
        <i class="announcement icon"></i> {{ filteredTalks.length }} talks
      </div>
    </div>
    
    <!--<div class="talk" v-for="talk in filteredTalks">-->
    <div class="talk" v-for="talk in talks">
      <h3 class="talk-title">{{ talk.title }}</h3>
      <div class="ui label">{{ talk.datetime | moment }}</div>
      <div class="talk-speaker">{{ talk.speakers.join(', ') }}</div>
    </div>
    
  </div>
</template>

<script>
import moment from 'moment'

export default {

  props: [ 'talks' ],

  data () {
    return {
      filter: ''
    }
  },

  computed: {
    filteredTalks () {
      let lcFilter = this.filter.toLowerCase()
      return this.talks.filter(function (talk) {
        let lcTitle = talk.title.toLowerCase()
        return lcTitle.indexOf(lcFilter) >= 0
      })
    }
  },

  methods: {
    resetFilter () {
      this.filter = ''
    }
  },

  filters: {
    moment (date) {
      return moment(date, 'YYYY/MM/DDThh:mm').format('DD/MM/YYYY h:mm')
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
