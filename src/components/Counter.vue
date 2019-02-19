<template>
  <div class="counter">
    <span class="counter__number">{{ number }}</span>
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    content: String,
    number: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  color: #fff;
  display: flex;
  margin: 0 auto;
  width: 250px;
}
.counter h2 {
  font-weight: 100;
  font-size: 20px;
  margin-left: 10px;
}
.counter__number {
  color: #ffb593;
  font-weight: 900;
  font-size: 36px;
  margin: auto 0;
}
</style>