// App.vue
<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Accueil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/posts" class="nav-link">Tickets</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/users" class="nav-link">Users</router-link>
                </li>
            </ul>
        </nav><br />
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
<script>
export default {}
</script>