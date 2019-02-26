<template>
  <div class="loading">
    <div class="loading__circle"></div>
    <div class="loading__circle"></div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
  position: relative;
  left: 40vw;
}
.loading__circle {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: movingCircles 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading__circle:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes movingCircles {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
