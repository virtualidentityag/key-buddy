import Vue from 'vue';
import Vuex from 'vuex';
import {
	setUser as _setUser,
	updateKey as _updateKey,
	updatePresence as _updatePresence
} from './api.js';

const fb = require('./firebaseConfig.js');

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentUser: null,
		userProfile: {},
		office: {}
    },
    actions: {
        fetchUserProfile({ commit, state }) {
			return fb.userCollection.doc(state.currentUser.uid).get().then(res => {
				commit('setUserProfile', res.data());
				return res.data();
            });
		},
		fetchOffice({ commit, state, dispatch }) {
			if (state.userProfile && state.userProfile.office && state.userProfile.office.id) {
				return fb.officeCollection.doc(state.userProfile.office.id).get().then(res => {
					commit('setOffice', res.data());
					return res.data();
				});
			} else {
				return dispatch('fetchUserProfile').then(() => {
					return fb.officeCollection.doc(state.userProfile.office.id).get().then(res => {
						commit('setOffice', res.data());
						return res.data();
					});
				});
			}
		},
        clearData({commit}) {
            commit('setCurrentUser', null);
            commit('setUserProfile', {});
            commit('setOffice', {});
		},
		// TODO: update operations need caching 
		// otherwise they interfere each other 
		// (e.g. if you quickly switch the notifications and key toggles in the settings)
		updateUser({ commit, state }, data) {
			return _setUser(state.currentUser.uid, data).then((res) => {
				commit('setUserProfile', res.user);
				return res;
			});
		},
		updateKey({commit, state}, data) {
			let hasKey = !!data;
			return _updateKey(hasKey, state.currentUser.uid).then((res) => {
				commit('setUserProfile', res.user);
				commit('setOffice', res.office);
				return res;
			});
		},
		updatePresence({ commit, state }, data) {
			let isPresent = !!data;
			return _updatePresence(isPresent, state.currentUser.uid).then((res) => {
				commit('setUserProfile', res.user);
				commit('setOffice', res.office);
				return res;
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