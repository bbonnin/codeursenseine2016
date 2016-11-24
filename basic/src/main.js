import 'semantic-ui-css/semantic.css'
import Vue from 'vue'
import TalkList from './components/TalkList'
import { fetchTalks } from './api'

/* eslint-disable no-new */
new Vue({
  el: '#app',

  components: { TalkList },

  data: {
    talks: []
  },

  created () {
    fetchTalks().then((resp) => { this.talks = resp.data.talks })
  }
})
