<template>
	<div class="inputWrapper">
		<label>{{label}}</label>
		<input 
			:type="type" 
			v-bind:value="value" 
			v-on:input="$emit('input', $event.target.value)">
	</div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputWrapper {
  position: relative;
  display: block;
  text-align: center;
  margin-top: 10px;
}
label {
  color: #fff;
  position: absolute;
  margin-left: 20px;
  bottom: 57.5px;
}
input {
  border-radius: 100px;
  border: 2px solid #fff;
  padding: 10px 25px;
  background: rgba(0, 0, 0, 0);
  margin: 15px auto;
  color: #fff;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
  outline: none;
}
</style>
