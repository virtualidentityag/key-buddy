<template>
    <div class="header">
        <header>
            <nav>
                <ul class="header__container">
                    <li class="header__link header__link--left">
                        <router-link to="/" class="header__link">home</router-link>
                    </li>
                    <li class="header__link header__link--right">
                        <router-link to="/settings" class="header__link">settings</router-link>
                        <a @click="logout" href="javascript:void(0)" class="header__link">logout</a>
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
	.header {
		border-bottom: 1px solid #fff;
	}
    .header__container {
        display: flex;
        justify-content: space-between;
        max-width: 768px;
        margin: 0 auto;
        padding: 15px 15px 15px 10px;
    }

    .header__link {
        list-style: none;
        padding: 0 5px;
        color: #fff;
        text-decoration: none;
    }

	.header__link--left {
		grid-column: 1 / 6;
	}

	.header__link--right {
		grid-column: 6 / 13;
        text-align: right;
	}
</style>
