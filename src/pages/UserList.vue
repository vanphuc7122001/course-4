<template>
    <div class="user-list">
        <h1 class="text-center text-primary">This is userList</h1>
        <div class="mb-2" v-for="(userItem, index) in userList" :key="index">
            <UserItem :userItem="userItem"/>
        </div>

    </div>
</template>

<script>
import UserItem from "../components/UserItem.vue";
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user')
export default {
    components:{
        UserItem
    },
    computed:{
    ...mapState({
      userList : state => state.userList
    })
  }
}
</script>

<style>

</style>