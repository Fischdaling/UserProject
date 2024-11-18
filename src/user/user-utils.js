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
    var usersInSameLocation = [];
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (((_a = user.profile.location) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) ==
            location.trim().toLowerCase()) {
            usersInSameLocation.push(user);
        }
    }
    return usersInSameLocation;
}
function calculateTotalAge(users) {
    var totalAge = 0;
    for (var _i = 0, users_2 = users; _i < users_2.length; _i++) {
        var user = users_2[_i];
        if (user.profile.birthdate) {
            var age = new Date().getFullYear() - user.profile.birthdate.getFullYear();
            totalAge += age;
        }
    }
    return totalAge;
}
