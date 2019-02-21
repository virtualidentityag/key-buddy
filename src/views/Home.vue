<template>
  <div class="home container">
    <headline 
		content="Are you in the office right now?" 
		headline-class="headline--topLeft"
	/>
    <input-toggle/>
    <bar/>
    <counter 
		:number="3" 
		content="Keys are currently in the office"
	/>
    <counter 
		:number="23" 
		content="People are currently in the office"
	/>
    <information-text
		content="Make sure to check in every morning and check out every evening to ensure the system is up-to-date!"
		information-text-class="informationText--alignLeft"
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
.home {
  padding: 15px;
}

.home .headline {
  grid-column: 1 / 9;
}

.home .inputToggle {
  grid-column: 9 / 13;
}

.home .bar {
  grid-column: 1 / 13;
}

.home .informationText {
  grid-column: 1 / 13;
}

.home .counter {
  grid-column: 1 / 13;
}
</style>
