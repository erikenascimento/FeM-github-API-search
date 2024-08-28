export default interface IUserData {
	// To use at CardBio
	avatar_url: string;
	name: string;
	login: string;
	created_at: Date;
	// To use at CardDescription
	bio: string | null;
	// To use at CardAccountnumbers
	public_repos: number;
	followers: number;
	following: number;
	// To use at CardAddress
	location: string | null;
	blog: string | null;
	twitter_username: string | null;
	company: string | null;
}
