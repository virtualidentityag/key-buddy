<template>
  <div class="backButton container" v-on:click="back()">
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
  margin: 0;
  padding: 10px 15px;
}
.backButton button {
  color: #ffffff;
  font-size: 14px;
}
.backButton__arrow::before {
  content: '←';
  font-size: 32px;
  color: #ffffff;
  font-weight: 700;
}
</style>
