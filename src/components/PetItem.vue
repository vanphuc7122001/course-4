<template>
  <div class="container mt-3">
    <div class="card text-center">
    <img class="card-img-top rounded mx-auto d-block mt-3" :src="petItem.image" alt="" style="width: 200px; height: 200px;">
    <div class="card-body">
        <h4 class="card-title">{{ petItem.name }}</h4>
        <p class="card-text">{{ petItem.type }}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    props:{
        petItem:{
            type: Object
        }
    }
}
</script>

<style>

</style>