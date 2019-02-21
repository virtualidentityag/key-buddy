<template>
  <div class="counter container">
    <span class="counter__number">{{ number }}</span>
    <h2 class="counter__description">{{ content }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Counter',
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
  margin: 0 auto;
}
.counter__description {
  grid-column: 3 / 13;
  font-weight: 100;
  font-size: 20px;
  margin-left: 10px;
}
.counter__number {
  grid-column: 1 / 3;
  color: #ffb593;
  font-weight: 900;
  font-size: 36px;
  text-align: right;
  margin: auto 0;
}
</style>