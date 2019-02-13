<template>
	<div class="login">
		<h1>Login</h1>
		<h4 id="WelcomeMessage"></h4>
		<button id="SignIn" v-on:click="signIn">Sign In</button>
		<br/><br/>
		<pre id="json"></pre>
	</div>
</template>

<script>
import { signIn } from '../js/login'

export default {
	name: 'Login',
	props: {
		msg: String
		},
	methods: {
		signIn: function() {
			signIn();
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
