<template>
	<div 
		v-bind:class="[buttonWrapperClass]" 
		v-on:click="$emit('click')"
	>
		<button v-bind:class="[buttonClass]">{{content}}</button>
	</div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    content: {
      type: String,
      default: ''
    },
    buttonClass: {
      type: String,
      default: ''
    },
    buttonWrapperClass: {
      type: String,
      default: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 10px 0;
  width: 200px;
  margin: 10px auto;
  color: #ffffff;
  font-size: 18px;
  border-radius: 100px;
  border: none;
  display: block;
  background: linear-gradient(to top right, #ffbc8f, #ff82c4, #ff4ff1);
  box-shadow: 7px 7px 11px -5px rgba(0, 0, 0, 0.75);
  outline: none;
  cursor: pointer;
}
.button--small {
  width: 100px;
  margin: 10px 10px;
}
</style>
