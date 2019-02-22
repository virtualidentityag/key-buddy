import Vue from 'vue';
import Vuex from 'vuex';
import { updateKey as _updateKey } from './api.js';

const fb = require('./firebaseConfig.js');

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {}
    },
    actions: {
        fetchUserProfile({commit, state}) {
            fb.userCollection.doc(state.currentUser.uid).get().then(res => {
                commit('setUserProfile', res.data());
            });
        },
        clearData({commit}) {
            commit('setCurrentUser', null);
            commit('setUserProfile', {});
		},
		updateKey({ commit, state }, data) {
			let hasKey = !!data;
			_updateKey(hasKey, state.currentUser.uid).then((res) => {
				commit('setUserProfile', res.user);
				commit('setOffice', res.office);
			});
		}
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
		},
		setOffice(state, val) {
			state.office = val
		}
    }
});