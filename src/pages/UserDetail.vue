<template>
  <h1>This is details</h1>
  <div class="row">
    <div class="col-5">
        <img class="rounded mx-auto d-block my-4" :src="userDetail.imgUrl" alt="" style="width: 600px;">
    </div>
    <div class="col-7">
        <p class="badge badge-info w-100">{{ userDetail.name }}</p>

        <p class="badge badge-success w-100">{{ userDetail.description }}</p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('user')


export default {

    computed:{
        ...mapState({
            userDetail: state => state.userDetail
        })
    },
    methods: {
        ...mapActions({
            getUserById: "getUserDetailByIdActions"
        })
    },
    created(){
        this.getUserById(this.$route.params.id)
    }
}
</script>

<style>

</style>