<template>
	<div class="bar"
		v-bind:class="[barClass]">
		<span></span>
	</div>
</template>

<script>
export default {
  name: 'Bar',
  props: {
    barClass: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  text-align: center;
  border-bottom: 8px solid #fff;
  width: 50px;
  margin: 10% auto;
}
</style>