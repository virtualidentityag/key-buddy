<template>
    <div class="settings">
		<back-button/>
		<headline 
			content="Settings"
		>
		</headline>
		<bar/>

		<div class="settings__row container">
			<headline 
				content="Notifications"
				headline-class="headline--topLeft"
				:level="2"
			>
			</headline>
			<input-toggle :checked="hasNotifications" v-on:toggle="toggleNotifications"/>
		</div>

		<div class="settings__row container">
			<headline 
				content="Key owner"
				headline-class="headline--topLeft"
				:level="2"
			>
			</headline>
			<input-toggle :checked="hasKey" v-on:toggle="toggleKey"/>
		</div>
    </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import Headline from '../components/Headline.vue';
import Bar from '../components/Bar.vue';
import InputToggle from '../components/InputToggle.vue';

export default {
    name: 'Settings',
    components: {
		BackButton,
		Headline,
		Bar,
		InputToggle
	},
	data() {
		return {
			// TODO: get user data, set hasNotifications and hasKey
			hasNotifications: false,
			hasKey: false,
			performingRequest: false
		};
	},
	methods: {
		toggleNotifications() {
			// TODO: toggle user notifications
			this.updateUser();
		},
		toggleKey() {
			// TODO: toggle user key
			this.updateUser();
		},
		updateUser() {
			// TODO: update user in database
		}
	}
}
</script>

<style>
.settings {
    background: linear-gradient(to top right, #20223b, #17362c);   
	min-height: 100vh;
}

.settings .settings__row .headline {
	grid-column: 1 / 9;
}

.settings .settings__row .inputToggle {
	grid-column: 9 / 13;
}
</style>