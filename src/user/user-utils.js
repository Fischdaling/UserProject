"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMediaToUser = addMediaToUser;
exports.filterUsersByLocation = filterUsersByLocation;
exports.calculateTotalAge = calculateTotalAge;
// Add avatar to the user if not already present
function addMediaToUser(user, media) {
    user.profile.profilePic = media;
    return user;
}
// Filter users by location
function filterUsersByLocation(users, location) {
    var _a;
    const usersInSameLocation = [];
    for (const user of users) {
        if (((_a = user.profile.location) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) == location.trim().toLowerCase()) {
            usersInSameLocation.push(user);
        }
    }
    return usersInSameLocation;
}
function calculateTotalAge(users) {
    let totalAge = 0;
    for (const user of users) {
        if (user.profile.birthdate) {
            const age = new Date().getFullYear() - user.profile.birthdate.getFullYear();
            totalAge += age;
        }
    }
    return totalAge;
}
