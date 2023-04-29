<template>
  <div class="container">
    <div class="card text-center" style="width: 400px;">
      <img class="card-img-top rounded mx-auto d-block mt-3" :src="userItem.imgUrl" alt="" style="width: 200px; height: 250px;">
      <div class="card-body">
        <h4 class="card-title">STT : {{ userItem.id }}</h4>
        <p class="card-text">{{userItem.name}}</p>
        <router-link :to="`users/${ userItem.id }`">Go to Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        userItem: {
            type: Object
        }
    }
}
</script>

<style>

</style>