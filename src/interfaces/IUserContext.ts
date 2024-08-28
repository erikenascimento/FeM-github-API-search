import IUserData from "./IUserData";

export default interface IUserContext {
	userData: IUserData | null;
	loading: boolean;
	error: string | null;
	fetchUser: (username: string) => Promise<void>;
}
