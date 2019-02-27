<template>
  <div :class="`headline headline--h${level} ${headlineClass}`">
    <h2 class="headline__content">{{ content }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    content: {
      type: String,
      default: ''
    },
    headlineClass: {
      type: String,
      default: ''
    },
    level: {
      type: Number,
      default: 1
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headline__content {
  clear: left;
  color: #fff;
  font-weight: 200;
  font-size: 30px;
  text-align: center;
  margin: 0 20px 20px 20px;
}

.headline--h2 .headline__content {
	font-size: 24px;
}

.headline--topLeft {
  margin-top: 20px;
}

.headline--topLeft .headline__content {
  text-align: left;
}
</style>
