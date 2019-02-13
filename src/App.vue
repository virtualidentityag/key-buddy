<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    Login
  }
};
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
