<template>
  <div class="login">
    <Header/>
    <Headline content="Please login with your VI credentials!"/>
    <TextInput label="E-Mail"/>
    <TextInput label="Password"/>
    <LoginButton/>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import Header from "./Header.vue";
import Headline from "./Headline.vue";
import LoginButton from "./LoginButton.vue";

export default {
  name: "Login",
  components: {
    TextInput,
    Header,
    Headline,
    LoginButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
