<template>
  <div class="login">
    <Header/>
    <div class="login__wrapper">
      <Headline content="Please login with your VI credentials!"/>
      <Bar/>
      <TextInput label="E-Mail"/>
      <TextInput label="Password"/>
      <Button content="LOGIN"/>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import Header from "./Header.vue";
import Headline from "./Headline.vue";
import Button from "./Button.vue";
import Bar from "./Bar.vue";

export default {
  name: "Login",
  components: {
    TextInput,
    Header,
    Headline,
    Button,
    Bar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  height: 100%;
}
.login__wrapper {
  padding-top: 50%;
}
</style>
