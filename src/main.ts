import {addMediaToUser,filterUsersByLocation,calculateTotalAge} from "./user/user-utils";
import {User,Media,Account,Profile} from "./user/user-models";

const mockUser:User = {
    username:"TestUser",
    profile:{

    },
    account:{
        id:"123",
        accountStatus:"active"
    },
    email:"test@mail.com",
    passwordHash:"asdfghjklöä"
}
const mockUser1:User = {
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

const mockUser2:User = {
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

const mockUser3:User = {
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

const userArr:User[] = [mockUser,mockUser1, mockUser2, mockUser3]

const mockMedia:Media = {
    url:"URL",
    altText: "A Picture",
    metadata:{
        dimensions: {
            height: 123,
            width: 123
        },
        format: "png",
        size: 123
    }

}

console.log("---------------------------------------------------------------------------------------------------------");
const userWithPic = addMediaToUser(mockUser, mockMedia);
console.log(userWithPic);

console.log("---------------------------------------------------------------------------------------------------------");
const usersLivingInSameLocation:User[] = filterUsersByLocation(userArr, "LONDON");
console.log(usersLivingInSameLocation);

console.log("---------------------------------------------------------------------------------------------------------");
const allAges:number = calculateTotalAge(userArr);
console.log(allAges); // 58

console.log(mockUser.profile)