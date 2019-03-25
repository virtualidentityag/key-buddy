/* eslint-disable no-console */
import 'firebase/firestore'
const fb = require('./firebaseConfig.js')

/* return the current user */
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

/* update the current user, then return updated user */
const setUser = function (uid, user) {
	return fb.userCollection.doc(uid).update(user).then(() => {
		return getUser(uid);
	});
};

/* return office by id */
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

/* 
 * update key status to boolean hasKey:
 *   - true = user owns a key
 *   - false = user doen't own a key
 * get user, check if key status changed, update key status of user
 * get office, update number of keys which exist for this office
 * if user is in office, update number of keys that are currently in the office
 * 
 * return promise of { user, office }
 */
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
				} else {
					resolve({
						user: currentUser,
						office: office
					});
				}
			})
		});
	});
	return promise;
};

/*
 * update presence of user in office to isPresent:
 *   - true: user is in office
 * 	 - false: user is out of office
 * get user, update presence status
 * get office, if user has a key, update number of keys in office
 * update number of users in office
 * 
 * return promise of { user, office }
 */
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

/* 
 * update user and office in DB
 * return an object { user, office } as a promise
 */
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