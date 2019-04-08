<template>
    <div class="settings">
		<back-button/>
		<headline 
			content="Settings"
		>
		</headline>
		<bar/>

		<div class="settings__row">
			<headline 
				content="Notifications"
				headline-class="headline--topLeft"
				:level="2"
			>
			</headline>
			<input-toggle 
				:checked="hasNotifications" 
				v-on:toggle="toggleNotifications"
			/>
		</div>

		<div class="settings__row">
			<headline 
				content="Key owner"
				headline-class="headline--topLeft"
				:level="2"
			>
			</headline>
			<input-toggle 
				:checked="hasKey" 
				v-on:toggle="toggleKey"
			/>
		</div>
    </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import Headline from '../components/Headline.vue';
import Bar from '../components/Bar.vue';
import InputToggle from '../components/InputToggle.vue';
const fb = require('../firebaseConfig.js');

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
			currentUser: {},
			hasNotifications: false,
			hasKey: false,
			performingRequest: false
		};
	},
	created: function () {
		this.$store.dispatch('fetchUserProfile')
			.then(res => {
				this.currentUser = res;
				this.hasKey = this.currentUser.key;
				this.hasNotifications = this.currentUser.notifications;
			})
	},
	methods: {
		toggleNotifications() {
			this.performingRequest = true;
			this.hasNotifications = !this.hasNotifications;
			this.currentUser.notifications = this.hasNotifications;
			this.$store.dispatch('updateUser', this.currentUser).then(() => {
				this.performingRequest = false;
			});
		},
		toggleKey() {
			this.performingRequest = true;
			this.hasKey = !this.hasKey;
			this.currentUser.key = this.hasKey;
			this.$store.dispatch('updateKey', this.hasKey).then(() => {
				this.performingRequest = false;
			});
		}
	}
}
</script>

<style>
.settings {
  background: linear-gradient(to top right, #20223b, #17362c);   
	min-height: 100vh;
}

.settings__row {
	display: grid;
	grid-template-columns: repeat(12,1fr);
}

.settings .settings__row .headline {
	margin-top: 20px;
	grid-column: 1 / 9;
}

.settings .settings__row .inputToggle {
	margin-top: 20px;
	grid-column: 9 / 13;
}
</style>