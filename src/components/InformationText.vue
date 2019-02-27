<template>
  <div :class="`informationText ${informationTextClass}`">
    <p class="informationText__content">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'InformationText',
  props: {
    content: {
      type: String,
      default: ''
	},
    informationTextClass: {
      type: String,
      default: ''
	}
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.informationText__content {
  color: #fff;
  text-align: center;
  margin: 5% 20px;
}
.informationText--alignLeft .informationText__content {
  text-align: left;
}
</style>
