<template>
	<div :class="`bar ${barClass}`">
	</div>
</template>

<script>
export default {
  name: 'Bar',
  props: {
    barClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  text-align: center;
  border-bottom: 8px solid #fff;
  width: 50px;
  margin: 50px auto;
}

@media only screen and (min-width: 768px) {
    .bar {
      margin-top: 60px;
      margin-bottom: 60px;
  }
}
</style>