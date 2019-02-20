<template>
    <div class="header">
        <header>
            <nav>
                <ul>
                    <li class="header__key">
                        <router-link to="/" class="header__link">home</router-link>
                    </li>
                    <li class="header__logout">
                        <a @click="logout" href="javascript:void(0)" class="header__link">Logout</a>
                    </li>
                    <li class="header__settings">
                        <router-link to="/settings" class="header__link">settings</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    const fb = require('../firebaseConfig.js');

    export default {
        name: 'Header',
        methods: {
            logout() {
                fb.auth.signOut().then(() => {
                    this.$store.dispatch('clearData');
                    this.$router.push('/login');
                }).catch(err => {
                    // eslint-disable-next-line
                    console.log(err);
                })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        margin: 0;
        padding: 15px 15px 30px 10px;
        border-bottom: 1px solid #fff;
    }

    li {
        float: left;
        list-style: none;
        padding: 0 5px;
    }

    .header__link {
        color: #fff;
        text-decoration: none;
    }

    .header__logout,
    .header__settings {
        float: right;
    }
</style>
