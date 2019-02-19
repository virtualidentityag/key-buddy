<template>
  <div id='login'>
    <!--loading screen goes here-->
    <!-- key logo goes here -->
    <div class='login__wrapper'>
      <Headline content='Please login with your credentials!'></Headline>
      <transition name='fade'>
        <div v-if='performingRequest' class='loading'>
          <p>Loading...</p>
        </div>
      </transition>
      <Bar/>
      <form>
        <Text-input v-model.trim='loginForm.email' type='text' label='Email'></Text-input>
        <Text-input v-model.trim='loginForm.password' type='password' label='Password'></Text-input>
        <Button v-on:login='login' content='Login'></Button>
      </form>
      <transition name='fade'>
        <div v-if="errorMsg !== ''" class='error-msg'>
          <p>{{ errorMsg }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const fb = require('../firebaseConfig.js');
import Button from './Button.vue';
import TextInput from './TextInput.vue';
import Headline from './Headline.vue';
import Bar from './Bar.vue';

export default {
  components: {
    Button,
    TextInput,
    Headline,
    Bar
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      performingRequest: false,
      errorMsg: ''
    };
  },
  methods: {
    login() {
      this.performingRequest = true;

      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(user => {
          this.$store.commit('setCurrentUser', user.user);
          this.$store.dispatch('fetchUserProfile');
          this.performingRequest = false;
          this.$router.push('/');
        })
        .catch(err => {
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    }
  }
};
</script>

<style>
.login__wrapper {
  padding-top: 50%;
}
</style>
