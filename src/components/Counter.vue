<template>
  <div class="counter">
    <span class="counter__number">{{ number }}</span>
    <h2 class="counter__description">{{ content }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    content: {
      type: String,
      default: ''
    },
    number: {
      type: Number,
      default: 0
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  display: grid;
  color: #fff;
  margin: 0 auto;
}
.counter__description {
  grid-column: 3 / 13;
  font-weight: 100;
  font-size: 20px;
  margin: 0 0 0 10px;
  align-self: center;
}
.counter__number {
  grid-column: 1 / 3;
  color: #ffb593;
  font-weight: 900;
  font-size: 50px;
  text-align: right;
  margin: auto 0;
}

@media only screen and (min-width: 768px) {
  .counter__number {
      font-size: 80px;
  }
}
</style>