<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import router from './router/index'

    export default {
        name: 'app',
        router: router
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
