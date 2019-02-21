<template>
  <div class="home">
    <Header></Header>
	<div class="home__container container">
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
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Headline from '../components/Headline.vue';
import Bar from '../components/Bar.vue';
import InformationText from '../components/InformationText.vue';
import InputToggle from '../components/InputToggle.vue';
import Counter from '../components/Counter.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Headline,
    Bar,
    InformationText,
    InputToggle,
    Counter
  }
};
</script>
<style>
.home__container {
  padding: 15px;
}

.home .header {
  grid-column: 1 / 13;
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
