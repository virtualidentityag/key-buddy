<template>
  <div class="backButton" v-on:click="back()">
    <div class="backButton__arrow"></div>
    <button>Back</button>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    back() {
		this.$router.go(-1);
	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backButton {
  color: #ffffff;
  padding: 10px 15px;
}
.backButton button {
  display: inline-block;
  color: #ffffff;
  font-size: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.backButton__arrow {
  margin-right: 5px;
  display: inline-block;
  cursor: pointer;
}
.backButton__arrow::before {
  content: '←';
  font-size: 32px;
  color: #ffffff;
  font-weight: 700;
}
</style>
