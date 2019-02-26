/* eslint-disable no-console */

function requestPermission() {
	return Notification.requestPermission(function (status) {
		console.log('Notification permission status:', status);
		subscribeUser();
	});
}

function subscribeUser() {
	console.log('subscribe 1');
	if ('serviceWorker' in navigator) {
		console.log('subscribe 2', navigator.serviceWorker);
		navigator.serviceWorker.ready.then(function (reg) {
			console.log('subscribe 3', reg);

			reg.pushManager.subscribe({
				userVisibleOnly: true
			}).then(function (sub) {
				console.log('Endpoint URL: ', sub, sub.endpoint);
				addPushNotificationListener(reg);
			}).catch(function (e) {
				if (Notification.permission === 'denied') {
					console.warn('Permission for notifications was denied');
				} else {
					console.error('Unable to subscribe to push', e);
				}
			});
		})
		.catch(err => {
			console.log(err);
		})
	}
}

function addPushNotificationListener(el) {
	// https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#handling_the_push_event_in_the_service_worker
	console.log('add event listener', el);
	el.addEventListener('push', function (e) {
		console.log('RECEIVED PUSH!!', e);
		var options = {
			body: 'This notification was generated from a push!',
			icon: 'images/example.png',
			vibrate: [100, 50, 100],
			data: {
				dateOfArrival: Date.now(),
				primaryKey: '2'
			},
			actions: [{
					action: 'explore',
					title: 'Explore this new world',
					icon: 'images/checkmark.png'
				},
				{
					action: 'close',
					title: 'Close',
					icon: 'images/xmark.png'
				},
			]
		};
		e.waitUntil(
			self.registration.showNotification('Hello world!', options)
		);
	});
}

function displayNotification(title, text) {
	if (Notification.permission == 'granted') {
		navigator.serviceWorker.getRegistration().then(reg => {
			var options = {
				body: text || ''
			};
			reg.showNotification(title, options);
		});
	}
}

export {
	requestPermission,
	addPushNotificationListener,
	displayNotification
}