import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Settings from '@/components/Settings'
import StartScreen from '@/components/StartScreen'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/start',
            name: 'Start',
            component: StartScreen
        }
    ]
})
