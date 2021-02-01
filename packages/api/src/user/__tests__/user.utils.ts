import { Model } from 'mongoose';
import { UserDocument } from '../schemas/user.schema';

class FakeUser {
	email: string;
	username: string;
	password: string;
	constructor(email: string, username: string, password: string) {
		this.email = email;
		this.username = username;
		this.password = password;
	}
}

async function RemoveRegisteredUser() {
	let User: Model<UserDocument>;

	await User.findOneAndRemove({ email: 'adminTest@gmail.com' });
}

export { RemoveRegisteredUser, FakeUser };
