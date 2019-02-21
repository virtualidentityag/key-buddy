<template>
    <div class="header">
        <header>
            <nav>
                <ul class="header__container container">
                    <li class="header__link header__link--key">
                        <router-link to="/" class="header__link">home</router-link>
                    </li>
                    <li class="header__link header__link--settings">
                        <router-link to="/settings" class="header__link">settings</router-link>
                    </li>
                    <li class="header__link header__link--logout">
                        <a @click="logout" href="javascript:void(0)" class="header__link">Logout</a>
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
    .header__container {
        margin: 0;
        padding: 15px 15px 15px 10px;
        border-bottom: 1px solid #fff;
    }

    .header__link {
        list-style: none;
        padding: 0 5px;
        color: #fff;
        text-decoration: none;
    }

    .header__link--logout,
    .header__link--settings {
        text-align: right;
    }

	.header__link--key {
		grid-column: 1 / 4;
	}

	.header__link--settings {
		grid-column: 8 / 10;
	}

	.header__link--logout {
		grid-column: 10 / 13;
	}
</style>
