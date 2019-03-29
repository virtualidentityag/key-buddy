/* eslint-disable no-console */

function requestPermission() {
	return Notification.requestPermission(function (status) {
		console.log('Notification permission status:', status);
		subscribeUser();
	});
}

function subscribeUser() {
	console.log('Subscribe user 1');
	if ('serviceWorker' in navigator) {
		console.log('Subscribe user 2', navigator.serviceWorker);
		navigator.serviceWorker.ready.then(function (reg) {
				console.log('Subscribe user 3', reg);

				reg.pushManager.subscribe({
					userVisibleOnly: true
				}).then(function (sub) {
					console.log('Endpoint URL: ', sub);
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