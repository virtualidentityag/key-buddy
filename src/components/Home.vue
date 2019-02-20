<template>
  <div>
    <Headline content="Are you in the office right now?" headline-class="home__headline--topLeft"/>
    <input-toggle/>
    <Bar/>
    <Counter :number="3" content="Keys are currently in the office"/>
    <Counter :number="23" content="People are currently in the office"/>
    <information-text
      content="Make sure to check in every morning and chek out every evening to ensure the system is up-to-date!"
      informationText-class="home__informationText--position"
    />
  </div>
</template>

<script>
import Headline from './Headline.vue';
import Bar from './Bar.vue';
import InformationText from './InformationText.vue';
import InputToggle from './InputToggle.vue';
import Counter from './Counter.vue';

export default {
  name: 'Home',
  components: {
    Headline,
    Bar,
    InformationText,
    InputToggle,
    Counter
  }
};
</script>
<style>
</style>
