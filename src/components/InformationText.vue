<template>
  <div class="informationText">
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "InformationText",
  props: {
    content: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #fff;
  text-align: center;
  margin: 40px 20px;
}
</style>
