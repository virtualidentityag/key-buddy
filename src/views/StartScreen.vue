<template>
  <div class="start">
    <Bar/>
    <Headline content="Welcome to KEY BUDDY!"/>
  </div>
</template>

<script>
import Headline from "../components/Headline.vue";
import Bar from "../components/Bar.vue";

export default {
  name: "Startscreen",
  components: {
    Headline,
    Bar
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.start .bar {
  margin-bottom: 10px;
}
.start .headline {
  width: 250px;
  margin: 0 auto;
}
</style>
