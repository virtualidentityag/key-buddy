<template>
  <div class="headline" v-bind:class="[headlineClass]">
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
export default {
  name: "Headline",
  props: {
    content: String,
    headlineClass: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  clear: left;
  color: #fff;
  font-weight: 200;
  font-size: 30px;
  text-align: center;
  margin: 0 20px 20px 20px;
}
.home__headline--topLeft {
  width: 200px;
  margin-top: 20px;
}
</style>
