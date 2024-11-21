import { Media, User } from "./user-models";

// Add avatar to the user if not already present
export function addMediaToUser(user: User, media: Media): User {
  user.profile.profilePic = media;
  return user;
}

// Filter users by location
export function filterUsersByLocation(users: User[], location: string): User[] {
  const usersInSameLocation: User[] = [];
  for (const user of users) {
    if (
      user.profile.location?.trim().toLowerCase() ==
      location.trim().toLowerCase()
    ) {
      usersInSameLocation.push(user);
    }
  }
  return usersInSameLocation;
}

export function calculateTotalAge(users: User[]): number {
  let totalAge: number = 0;
  for (const user of users) {
    if (user.profile.birthdate) {
      const age =
        new Date().getFullYear() - user.profile.birthdate.getFullYear();
      totalAge += age;
    }
  }
  return totalAge;
}
