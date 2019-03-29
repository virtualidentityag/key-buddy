/* eslint-disable no-console */

import { register } from 'register-service-worker'
import { requestPermission as _requestPermission } from './notification.js'

if (process.env.NODE_ENV === 'production') {

	register(`${process.env.BASE_URL}service-worker.js`, {
		ready () {
			console.log(
				'App is being served from cache by a service worker.\n' +
				'For more details, visit https://goo.gl/AFskqB'
			)
		},
		registered (reg) {
			console.log('Service worker has been registered.', reg);
			reg.pushManager.getSubscription().then(function (sub) {
				if (sub === null) {
					// Update UI to ask user to register for Push
					console.log('Not subscribed to push service!');
					_requestPermission();
				} else {
					// We have a subscription, update the database
					console.log('Already subscribed to push service. Subscription object: ', sub);
				}
			});
		},
		cached () {
			console.log('Content has been cached for offline use.')
		},
		updatefound () {
			console.log('New content is downloading.')
		},
		updated () {
			console.log('New content is available; please refresh.')
		},
		offline () {
			console.log('No internet connection found. App is running in offline mode.')
		},
		error (error) {
			console.error('Error during service worker registration:', error)
		}
	});
}
