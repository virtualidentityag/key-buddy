<template>
    <div id="login">
        <Header></Header>
        <!--loading screen goes here-->
        <!-- key logo goes here -->
        <div class="login__wrapper container">
            <headline content="Please login with your credentials!"></headline>
            <transition name="fade">
                <div v-if="performingRequest" class="loading">
                    <p>Loading...</p>
                </div>
            </transition>
            <bar bar-class="bar--flat"/>
            <form @submit.prevent v-if="showLoginForm">
                <text-input
                        v-model.trim="loginForm.email"
                        id="login-email"
                        type="text"
                        label="Email"
                ></text-input>
                <text-input
                        v-model.trim="loginForm.password"
                        id="login-password"
                        type="password"
                        label="Password"
                ></text-input>
                <Button
                        content="Login"
                        v-on:click="login"
                ></Button>
                <a @click="toggleForm">Create an Account</a>
            </form>
            <form @submit.prevent v-else>
                <headline content="Sign up!"></headline>

                <text-input 
                        v-model.trim="signupForm.name" 
                        type="text" 
                        label="Name" 
                        id="signup-name"
                ></text-input>

                <text-input 
                        v-model.trim="signupForm.email" 
                        type="text" 
                        label="Email"
                        id="signup-email"
                ></text-input>

                <text-input 
                        v-model.trim="signupForm.password" 
                        type="password" 
                        label="Password" 
                        id="signup-password"
                ></text-input>

                <Button content="Sign Up" v-on:click="signup"></Button>

                <a @click="toggleForm">Back to Log In</a>
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
    const fb = require('../firebaseConfig.js');
    import Header from '../components/Header.vue';
    import Button from '../components/Button.vue';
    import TextInput from '../components/TextInput.vue';
    import Headline from '../components/Headline.vue';
    import Bar from '../components/Bar.vue';

    export default {
        components: {
            Header,
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
                signupForm: {
                    name: '',
                    title: '',
                    email: '',
                    password: ''
                },
                showLoginForm: true,
                performingRequest: false,
                errorMsg: ''
            };
        },
        methods: {
            toggleForm() {
                this.showLoginForm = !this.showLoginForm
            },
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
            },
            signup() {
                fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user.user)

                    // create user obj
                    fb.userCollection.doc(user.user.uid).set({
                        name: this.signupForm.name,
                        email: this.signupForm.email,
                        inOffice: false,
                        key: false,
                        notification: false,
                        office: fb.db.doc('office/CCJYuzWkVnb0llrobdHM')
                    }).then(() => {
                        this.$store.dispatch('fetchUserProfile')
                        this.$router.push('/keyQuestion')
                    }).catch(err => {
                        // eslint-disable-next-line
                        console.log(err)
                    })
                }).catch(err => {
                    // eslint-disable-next-line
                    console.log(err)
                })
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
