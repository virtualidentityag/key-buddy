import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Settings from '@/components/Settings'
import StartScreen from '@/components/StartScreen'
import KeyQuestion from '@/components/KeyQuestion'
import firebase from 'firebase'

Vue.use(Router);

const router = new Router({
    routes: [{
            path: '*',
            redirect: '/'
        },
        {
            path: '/keyQuestion',
            name: 'KeyQuestion',
            component: KeyQuestion,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/start',
            name: 'Start',
            component: StartScreen
        }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    const currentUser = firebase.auth().currentUser;

    if (requiresAuth && !currentUser) {
        next('/login');
    } else {
        next();
    }
});

export default router