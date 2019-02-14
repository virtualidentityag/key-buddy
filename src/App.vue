<template>
  <div id="app">
    <Login/>
    <!-- <InitialQuestion/> -->
  </div>
</template>

<script>
import Login from "./components/Login.vue";
// import InitialQuestion from "./components/InitialQuestion.vue";

export default {
  name: "app",
  components: {
    Login
    // InitialQuestion
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
  font-family: "Quicksand", sans-serif;
}
</style>
