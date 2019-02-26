<template>
  <div id="login">
    <Header></Header>
    <!--loading screen goes here-->
    <!-- key logo goes here -->
    <div class="login__wrapper container">
      <headline content="Please login with your credentials!"></headline>
      <transition name="fade">
        <div v-if="performingRequest" class="loading">
          <Loading/>
        </div>
      </transition>
      <bar bar-class="bar--flat"/>
      <form>
        <text-input v-model.trim="loginForm.email" type="text" label="Email"></text-input>
        <text-input v-model.trim="loginForm.password" type="password" label="Password"></text-input>
        <Button content="Login" v-on:click="login"></Button>
      </form>
      <transition name="fade">
        <div v-if="errorMsg !== ''" class="error-msg">
          <p>{{ errorMsg }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const fb = require("../firebaseConfig.js");
import Header from "../components/Header.vue";
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import Headline from "../components/Headline.vue";
import Bar from "../components/Bar.vue";
import Loading from "../components/Loading.vue";

export default {
  components: {
    Header,
    Button,
    TextInput,
    Headline,
    Bar,
    Loading
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      performingRequest: false,
      errorMsg: ""
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
          this.$store.commit("setCurrentUser", user.user);
          this.$store.dispatch("fetchUserProfile");
          this.performingRequest = false;
          this.$router.push("/keyQuestion");
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
.login__wrapper .headline,
.login__wrapper .bar,
.login__wrapper form,
.login__wrapper .textInput,
.login__wrapper .loginButton {
  grid-column: 1 / 13;
}
</style>
