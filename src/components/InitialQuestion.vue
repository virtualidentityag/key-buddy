<template>
  <div class="initialQuestion">
    <Header/>
    <div class="initialQuestion__wrapper">
      <Headline
        headline-class="initialQuestion__headline--position"
        content="Do you have a key to the office?"
      />
      <div class="initialQuestion__buttonWrapper">
        <Button button-class="initialQuestion__button--small" content="YES"/>
        <Button button-class="initialQuestion__button--small" content="NO"/>
      </div>
      <InformationText content="You can also change this in the settings later."/>
      <Bar bar-class="initialQuestion__bar--position"/>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Headline from "./Headline.vue";
import Button from "./Button.vue";
import Bar from "./Bar.vue";
import InformationText from "./InformationText.vue";

export default {
  name: "InitialQuestion",
  components: {
    Header,
    Headline,
    Button,
    Bar,
    InformationText
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.initialQuestion {
  height: 100vh;
}
.initialQuestion__wrapper {
  margin-top: 55%;
}
.initialQuestion__buttonWrapper {
  display: flex;
  justify-content: center;
}
</style>
