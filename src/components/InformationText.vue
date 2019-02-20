<template>
  <div class="informationText">
    <p class="informationText__content" v-bind:class="[infomationTextClass]">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "InformationText",
  props: {
    content: String,
    infomationTextClass: String
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.informationText__content {
  color: #fff;
  text-align: center;
  margin: 40px 20px;
}
.home__informationText--alignLeft {
  text-align: left;
}
</style>
