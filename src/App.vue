<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
body {
  margin: 0;
}
#app {
  background: linear-gradient(to top right, #a39dff, #55a7fc, #50e9be);
  height: 100vh;
  font-family: "Quicksand", sans-serif;
}
</style>
