<template>
    <nav class="navbar navbar-expand-sm bg-dark justify-content-center">

        <!-- Links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/users">User</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/pets">Pet</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.active{
    color: red;
    border-bottom: 1px solid red;
}

.active:hover{
    color: red;
}
</style>