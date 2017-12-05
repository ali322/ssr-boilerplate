<template>
<div class="container">
    <div class="header">Github Events1 <button class="refresh-btn refresh-icon" @click="handleRefresh"></button></div>
    <div class="content">
        <div class="event" v-for="event in events" :key="event.id">
            <router-link :to="{path:'/detail/'+event.id}">
                <div class="event-title">
                    <img :src="event.avatar" alt="" />
                    <span>
                    <p>{{event.name}}</p>
                    <p>{{event.created_at}}</p>
                    </span>
                    <i class="fa fa-caret-right" />
                </div>
                <p>{{event.type}} In <b>{{event.repo}}</b></p>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import { mapActions, mapState } from "vuex"
import * as actions from "./action"
import indexStore from './store'

export default {
  name: "Index",
  asyncState({ store, route }) {
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
      flag: state => {
        console.log('index', state.index)
      },
      events: state => state.index.events,
      route: "route"
    })
  }
}
</script>
