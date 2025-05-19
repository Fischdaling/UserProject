"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_utils_1 = require("../src/user/user-utils");
let mockUser;
let mockUser1;
let mockUser2;
let mockUser3;
const userArr = [];
let mockMedia;
beforeEach(() => {
    mockUser = {
        username: "TestUser",
        profile: {},
        account: {
            id: "123",
            accountStatus: "active",
        },
        email: "test@mail.com",
        passwordHash: "asdfghjklöä",
    };
    mockUser1 = {
        username: "alice",
        email: "alice@example.com",
        passwordHash: "hashedPassword123",
        profile: {
            bio: "Loves photography and travel",
            location: "New York",
            birthdate: new Date("2000-02-15"),
        },
        account: {
            id: "account1",
            accountStatus: "active",
        },
    };
    mockUser2 = {
        username: "bob",
        email: "bob@example.com",
        passwordHash: "hashedPassword456",
        profile: {
            location: "London",
            birthdate: new Date("1990-02-15"),
            gender: "male",
            interests: ["coding", "gaming"],
        },
        account: {
            id: "account2",
            accountStatus: "suspended",
        },
    };
    mockUser3 = {
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
    mockMedia = {
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
    userArr.length = 0;
    userArr.push(mockUser, mockUser1, mockUser2, mockUser3);
});
describe("add Media To User", () => {
    it("should add the Profile picture to the Profile of the user", () => {
        expect((0, user_utils_1.addMediaToUser)(mockUser, mockMedia)).toEqual(mockUser);
    });
    it("should update the Profile picture to the Profile of the user", () => {
        mockUser.profile.profilePic = {
            url: "NOTUEL",
        };
        expect((0, user_utils_1.addMediaToUser)(mockUser, mockMedia)).toEqual(mockUser);
    });
});
describe("filter Users By Location", () => {
    it("should return all Users at the same location", () => {
        expect((0, user_utils_1.filterUsersByLocation)(userArr, "London")).toEqual([
            mockUser2,
            mockUser3,
        ]);
    });
    it("should return noone if location has no users", () => {
        expect((0, user_utils_1.filterUsersByLocation)(userArr, "Österreich")).toEqual([]);
    });
});
describe("calculate Total Age", () => {
    it("should calculate all Ages and add them together", () => {
        // Calculate ages inside the test to ensure they're properly computed.
        const age1 = mockUser1.profile.birthdate
            ? new Date().getFullYear() - mockUser1.profile.birthdate.getFullYear()
            : 0;
        const age2 = mockUser2.profile.birthdate
            ? new Date().getFullYear() - mockUser2.profile.birthdate.getFullYear()
            : 0;
        const age = age1 + age2;
        // Expect the total age calculation to match the sum of individual ages.
        expect((0, user_utils_1.calculateTotalAge)(userArr)).toEqual(age-1);
    });
});
