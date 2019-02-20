<template>
  <div class="keyQuestion">
    <div class="keyQuestion__wrapper">
      <Headline content="Do you have a key to the office?"/>
      <div class="keyQuestion__buttonWrapper">
        <Button button-class="keyQuestion__button--small" content="YES"/>
        <Button button-class="keyQuestion__button--small" content="NO"/>
      </div>
      <InformationText content="You can also change this in the settings later."/>
      <Bar bar-class="keyQuestion__bar--position"/>
    </div>
  </div>
</template>

<script>
import Headline from "./Headline.vue";
import Button from "./Button.vue";
import Bar from "./Bar.vue";
import InformationText from "./InformationText.vue";

export default {
  name: "KeyQuestion",
  components: {
    Headline,
    Button,
    Bar,
    InformationText
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.keyQuestion {
  height: 100vh;
}
.keyQuestion__wrapper {
  margin-top: 55%;
}
.keyQuestion__buttonWrapper {
  display: flex;
  justify-content: center;
}
</style>
