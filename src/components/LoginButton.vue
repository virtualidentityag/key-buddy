<template>
  <div class="loginButton">
    <button>LOGIN</button>
  </div>
</template>

<script>
export default {
  name: 'LoginButton'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 10px 75px;
  margin: 10px auto;
  color: #ffffff;
  font-size: 18px;
  border-radius: 100px;
  border: none;
  position: relative;
  display: block;
  top: 210px;
  background: linear-gradient(to top right, #ffbc8f, #ff82c4, #ff4ff1);
  box-shadow: 7px 7px 11px -5px rgba(0, 0, 0, 0.75);
}
</style>
