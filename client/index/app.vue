<template>
  <div class="container">
    <div class="header">Github Events
      <button class="refresh-btn refresh-icon" @click="handleRefresh"></button>
    </div>
    <div class="content">
      <div class="event" v-for="event in events" :key="event.id">
        <a :href="'/detail/'+event.id">
          <div class="event-title">
            <img :src="event.avatar" alt="" />
            <span>
              <p>{{event.name}}</p>
              <p>{{event.created_at}}</p>
            </span>
            <i class="fa fa-caret-right" />
          </div>
          <p>{{event.type}} In
            <b>{{event.repo}}</b>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import * as actions from './action'

export default {
  name: 'Index',
  asyncState({ store }) {
    //   store.registerModule('index', indexStore)
    return store.dispatch('fetchEvents')
  },
  methods: {
    handleRefresh() {
      this.fetchEvents()
    },
    ...mapActions(Object.keys(actions))
  },
  computed: {
    ...mapState({
      events: state => state.events
    })
  }
}
</script>
