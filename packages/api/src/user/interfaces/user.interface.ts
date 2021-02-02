interface IUser {
	username?: string;
	email: string;
	password: string;
	profilePic?: string;
	bio?: string;
	posts?: any[];
	followers?: string[];
	following?: string[];
}
