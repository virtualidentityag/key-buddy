<template>
    <div id="login">
        <!--loading screen goes here-->
        <transition name="fade">
            <div v-if="performingRequest" class="loading">
                <p>Loading...</p>
            </div>
        </transition>
        <form>
            <Text-input  v-model.trim="loginForm.email" type="text" label="Email"></Text-input>
            <Text-input  v-model.trim="loginForm.password" type="password" label="Password"></Text-input>
            <Button v-on:login="login" content="Login"></Button>
        </form>
        <transition name="fade">
            <div v-if="errorMsg !== ''" class="error-msg">
                <p>{{ errorMsg }}</p>
            </div>
        </transition>
        <p>
            <router-link to="/">Back to home</router-link>
        </p>
    </div>
</template>

<script>
    const fb = require('../firebaseConfig.js');
    import Button from './Button.vue';
    import TextInput from './TextInput.vue';
    export default {
        components: {
          Button,
          TextInput
        },
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                performingRequest: false,
                errorMsg: ''
            }
        },
        methods: {
            login() {
                this.performingRequest = true;

                fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user.user);
                    this.$store.dispatch('fetchUserProfile');
                    this.performingRequest = false;
                    this.$router.push('/');
                }).catch(err => {
                    this.performingRequest = false;
                    this.errorMsg = err.message;
                })
            }
        }
    }
</script>

<style>
    .input {
        margin-top: 30px;
    }
</style>
