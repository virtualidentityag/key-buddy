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

const messaging = fb.messaging;
    messaging
        .requestPermission()
        .then(() => {
                // eslint-disable-next-line
            console.log("Notification permission granted.");
            return messaging.getToken();
        })
        .then((token) => {
            // eslint-disable-next-line
          console.log('Token: ' + token);
        })
        .catch(function (err) {
                // eslint-disable-next-line
        console.log("Unable to get permission to notify.", err);
    });