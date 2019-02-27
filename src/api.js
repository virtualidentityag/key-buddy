/* eslint-disable no-console */
import 'firebase/firestore'
const fb = require('./firebaseConfig.js')

const getUser = function (uid) {
	if (!fb.userCollection) {
		throw new ReferenceError('Could not find "userCollection" in your firebaseConfig.js!');
	}
	return fb.userCollection.doc(uid).get()
		.then(res => {
			return res.data();
		})
		.catch(function (error) {
			console.error('Error writing user: ', error);
		});
};

const setUser = function (uid, user) {
	return fb.userCollection.doc(uid).update(user).then(() => {
		return getUser(uid);
	});
};

const getOffice = function (id) {
	if (!fb.officeCollection) {
		throw new ReferenceError('Could not find "officeCollection" in your firebaseConfig.js!');
	}
	return fb.officeCollection.doc(id).get()
		.then(res => {
			return res.data();
		})
		.catch(function (error) {
			console.error('Error writing office: ', error);
		});
};

const updateKey = function (hasKey, uid) {
	let promise = new Promise((resolve, reject) => {
		let currentUser = {};
		let office = {};

		return getUser(uid).then(u => {
			currentUser = u;

			return getOffice(currentUser.office.id).then(o => {
				office = o;
				
				// only update if value has changed
				if (currentUser.key !== hasKey) {
					currentUser.key = hasKey;
					if (hasKey) {
						// user now has a key -> increase keys in office
						office.keys++;
						if (currentUser.inOffice) {
							office.keysInOffice++;
						}
					} else {
						// user now does not have a key anymore -> decrease keys in office
						office.keys--;
						if (currentUser.inOffice) {
							office.keysInOffice--;
						}
					}
					return updateUserAndOffice(uid, currentUser, currentUser.office.id, office, resolve, reject);
				}
			})
		});
	});
	return promise;
};

const updatePresence = function (isPresent, uid) {
	let promise = new Promise((resolve, reject) => {
		let currentUser = {};
		let office = {};

		return getUser(uid).then(u => {
			currentUser = u;

			return getOffice(currentUser.office.id).then(o => {
				office = o;

				// only update if value has changed
				if (currentUser.inOffice !== isPresent) {
					currentUser.inOffice = isPresent;
					if (currentUser.key && isPresent) {
						// user checked in -> increase present keys in office
						office.keysInOffice++;
					} else if (currentUser.key && !isPresent) {
						// user checked out -> decrease present keys in office
						office.keysInOffice--;
					}
					
					if (isPresent) {
						office.usersInOffice++;
					} else {
						office.usersInOffice--;
					}
					return updateUserAndOffice(uid, currentUser, currentUser.office.id, office, resolve, reject);
				}
			})
		});
	});
	return promise;
};

const updateUserAndOffice = function(userId, user, officeId, office, resolve, reject) {
	return Promise.all([
		fb.userCollection.doc(userId).update(user),
		fb.officeCollection.doc(officeId).update(office)
	])
	.then(() => {
		resolve({
			user: user,
			office: office
		});
	})
	.catch(err => {
		reject(err);
	})
};

export {
	getUser,
	setUser,
	getOffice,
	updateKey,
	updatePresence
}