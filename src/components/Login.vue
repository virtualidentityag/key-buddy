<template>
    <div id="login">
        <!--loading screen goes here-->
        <transition name="fade">
            <div v-if="performingRequest" class="loading">
                <p>Loading...</p>
            </div>
        </transition>
        <form>
            <div class="input">
                <label for="input1">Type in username: </label>
                <input v-model.trim="loginForm.email" type="text" id="input1" placeholder="Email">
            </div>
            <div class="input">
                <label for="input2">Type in email: </label>
                <input v-model.trim="loginForm.password" type="password" class="input" id="input2"
                       placeholder="*******">
            </div>
            <button @click="login">Log in</button>
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

    export default {
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