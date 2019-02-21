<template>
    <div id="app">
        <Header></Header>
        <router-view/>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
body {
  margin: 0;
}
#app {
    background: linear-gradient(to top right, #a39dff, #55a7fc, #50e9be);
    font-family: "Quicksand", sans-serif;
    height: 100vh;
}
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0;
  grid-auto-rows: minmax(0, auto);
}
</style>
