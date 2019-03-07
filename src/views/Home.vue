<template>
    <div class="home">
        <Header></Header>
        <div class="home__container container">
            <headline
                    content="Are you in the office right now?"
                    headline-class="headline--topLeft"
            ></headline>
            <input-toggle
                    :checked="isPresent"
                    v-on:toggle="togglePresence"
            ></input-toggle>
            <bar></bar>
            <counter
                    :number="office.keysInOffice"
                    content="Keys are currently in the office"
            ></counter>
            <counter
                    :number="office.usersInOffice"
                    content="People are currently in the office"
            ></counter>
            <information-text
                    content="Make sure to check in every morning and check out every evening to ensure the system is up-to-date!"
                    information-text-class="informationText--alignLeft"
            ></information-text>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header.vue';
    import Headline from '../components/Headline.vue';
    import Bar from '../components/Bar.vue';
    import InformationText from '../components/InformationText.vue';
    import InputToggle from '../components/InputToggle.vue';
    import Counter from '../components/Counter.vue';
    import {mapState} from 'vuex';

    export default {
        name: 'Home',
        components: {
            Header,
            Headline,
            Bar,
            InformationText,
            InputToggle,
            Counter
        },
        data() {
            return {
                performingRequest: false,
                currentUser: {},
                isPresent: false,
                keysInOffice: 0,
                usersInOffice: 0
            };
        },
        created: function () {
            this.$store.dispatch('fetchUserProfile')
                .then(res => {
                    this.currentUser = res;
                    this.isPresent = this.currentUser.inOffice;
                })
            this.$store.dispatch('fetchOffice')
                .then(res => {
                    this.keysInOffice = res.keysInOffice;
                    this.usersInOffice = res.usersInOffice;
                })
        },
        computed: {
            ...mapState(['office'])
        },
        methods: {
            togglePresence() {
                this.performingRequest = true;
                this.isPresent = !this.isPresent;
                this.$store.dispatch('updatePresence', this.isPresent)
                    .then(res => {
                        this.currentUser = res.user;
                        this.isPresent = res.user.inOffice;
                        this.keysInOffice = res.office.keysInOffice;
                        this.usersInOffice = res.office.usersInOffice;
                    })
                this.performingRequest = false;
            }
        }
    };
</script>
<style>
    .home__container {
        display: grid;
        grid-template-rows: auto min-content min-content min-content auto;
        padding: 15px;
    }

    .home .header {
        grid-column: 1 / 13;
    }

    .home .headline {
        grid-column: 1 / 9;
        align-self: end;
    }

    .home .inputToggle {
        grid-column: 9 / 13;
    }

    .home .bar {
        grid-column: 1 / 13;
    }

    .home .informationText {
        grid-column: 1 / 13;
        align-self: start;
    }

    .home .counter {
        grid-column: 1 / 13;
    }
</style>
