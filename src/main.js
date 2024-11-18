"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_utils_1 = require("./user/user-utils");
// What are pre-commit hooks, and why are they useful?
// pre commit hooks allow us to format and check our code automatically before commiting
var mockUser = {
    username: "TestUser",
    profile: {},
    account: {
        id: "123",
        accountStatus: "active",
    },
    email: "test@mail.com",
    passwordHash: "asdfghjklöä",
};
var mockUser1 = {
    username: "alice",
    email: "alice@example.com",
    passwordHash: "hashedPassword123",
    profile: {
        bio: "Loves photography and travel",
        location: "New York",
        birthdate: new Date("2000-02-15"), //24
    },
    account: {
        id: "account1",
        accountStatus: "active",
    },
};
var mockUser2 = {
    username: "bob",
    email: "bob@example.com",
    passwordHash: "hashedPassword456",
    profile: {
        location: "London",
        birthdate: new Date("1990-02-15"), // 34
        gender: "male",
        interests: ["coding", "gaming"],
    },
    account: {
        id: "account2",
        accountStatus: "suspended",
    },
};
var mockUser3 = {
    username: "carol",
    email: "carol@example.com",
    passwordHash: "hashedPassword789",
    profile: {
        location: "London",
        profilePic: {
            url: "https://example.com/carol.jpg",
            altText: "Profile picture of Carol",
            metadata: {
                size: 2048,
                format: "jpg",
                dimensions: { width: 100, height: 100 },
            },
        },
    },
    account: {
        id: "account3",
        accountStatus: "deleted",
    },
};
var userArr = [mockUser, mockUser1, mockUser2, mockUser3];
var mockMedia = {
    url: "URL",
    altText: "A Picture",
    metadata: {
        dimensions: {
            height: 123,
            width: 123,
        },
        format: "png",
        size: 123,
    },
};
console.log("---------------------------------------------------------------------------------------------------------");
var userWithPic = (0, user_utils_1.addMediaToUser)(mockUser, mockMedia);
console.log(userWithPic);
console.log("---------------------------------------------------------------------------------------------------------");
var usersLivingInSameLocation = (0, user_utils_1.filterUsersByLocation)(userArr, "LONDON");
console.log(usersLivingInSameLocation);
console.log("---------------------------------------------------------------------------------------------------------");
var allAges = (0, user_utils_1.calculateTotalAge)(userArr);
console.log(allAges); // 58
