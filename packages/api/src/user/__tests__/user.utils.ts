import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod: MongoMemoryServer;

const rootMongooseTestModule = (
	options: MongooseModuleOptions = { useCreateIndex: true }
) =>
	MongooseModule.forRootAsync({
		useFactory: async () => {
			mongod = new MongoMemoryServer();
			const mongoUri = await mongod.getUri();
			return {
				uri: mongoUri,
				...options,
			};
		},
	});

const closeInMongodConnection = async () => {
	if (mongod) await mongod.stop();
};

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

export { FakeUser, closeInMongodConnection, rootMongooseTestModule };
