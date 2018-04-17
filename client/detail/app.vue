<template>
<div class="container">
    <div class="header header-with-btn"><button class="btn" @click="goBack"><i class="fa fa-arrow-left" /></button>{{detail.name}}</div>
    <div class="content">
        <div class="detail">
            <img :src="detail.avatar" alt="" />
            <p>Title: {{detail.title}}</p>
            <p>Created at: {{detail.created_at}}</p>
            <p>{{detail.message}}</p>
        </div>
    </div>
</div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import * as actions from './action'
    import detailStore from './store'

    export default {
        name: 'Detail',
        asyncState({store}) {
            // store.registerModule('detail', detailStore)
            return store.dispatch('fetchDetail', store.state.id)
        },
        computed: {
            ...mapState({
                detail: state => state.detail
            })
        },
        methods: {
            goBack(){
                window.history.back()
            },
            ...mapActions(Object.keys(actions))
        }
    }
</script>
