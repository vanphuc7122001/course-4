<template>
 <h1 class="text-center text-primary">Pet List</h1>
 <div class="pet-list row">
  <div class="col-lg-4 mb-2" v-for="(petItem, index) in petList" :key="index">
    <PetItem :petItem="petItem"/>
  </div>
 </div>
</template>

<script>

import PetItem from '../components/PetItem.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('pet')

export default {
  components:{
    PetItem
  },
  computed: {
    ...mapState({
      petList: state => state.petList
    })
  }
}
</script>

<style>

</style>