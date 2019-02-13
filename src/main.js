import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
const fb = require('./firebaseConfig.js');
import {store} from './store.js'
import router from './router/index'

Vue.config.productionTip = false;

let app;

fb.auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            store,
            router,
            render: h => h(App)
        }).$mount('#app');
    }
});
