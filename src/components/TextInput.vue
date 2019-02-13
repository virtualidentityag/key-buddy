<template>
  <div class="inputWrapper">
    <label>{{label}}</label>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputWrapper {
  position: relative;
  display: block;
  top: 210px;
  text-align: center;
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
  font-family: "Quicksand", sans-serif;
}
</style>
