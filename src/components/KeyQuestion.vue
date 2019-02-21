<template>
  <div class="keyQuestion">
    <div class="keyQuestion__wrapper container">
	<div class="keyQuestion__image"></div>
      <headline content="Do you have a key to the office?"/>
      <div class="keyQuestion__buttonWrapper">
        <Button button-class="button--small" content="YES"/>
        <Button button-class="button--small" content="NO"/>
      </div>
      <information-text content="You can also change this in the settings later."/>
      <bar/>
    </div>
  </div>
</template>

<script>
import Headline from './Headline.vue';
import Button from './Button.vue';
import Bar from './Bar.vue';
import InformationText from './InformationText.vue';

export default {
  name: 'KeyQuestion',
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
.keyQuestion__image {
  height: 30vh; /* placeholder */
}
.keyQuestion__buttonWrapper {
  display: flex;
  justify-content: center;
}
.keyQuestion__image,
.keyQuestion__buttonWrapper,
.keyQuestion .headline,
.keyQuestion .informationText,
.keyQuestion .bar {
  grid-column: 1 / 13;
}
</style>
