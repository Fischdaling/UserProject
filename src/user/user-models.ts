export interface User {
  username: string;
  email: string;
  passwordHash: string;
  profile: Profile;
  account: Account;
}

export interface Profile {
  profilePic?: Media; // Profile picture media object
  bio?: string; // User's bio or description
  location?: string; // User's location
  birthdate?: Date; // User's birthdate
  gender?: "male" | "female" | "other" | "prefer not to say";
  interests?: string[]; // List of user's interests
}

export interface Account {
  id: string;
  accountStatus: "active" | "suspended" | "deleted"; // Status of the account
}

export interface Media {
  url: string; // URL to access the media file
  metadata?: {
    size: number; // File size in bytes
    format: string; // File format (e.g., "jpg", "mp4")
    dimensions?: {
      // Image or video dimensions
      width: number;
      height: number;
    };
  };
  altText?: string; // Alternative text for accessibility
  caption?: string; // Caption text for the media
  thumbnailUrl?: string; // URL for a thumbnail version of the media
}
