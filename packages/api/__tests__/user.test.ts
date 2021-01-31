import * as req from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UserModule } from '../src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../src/user/schemas/user.schema';
import { UserService } from '../src/user/user.services';
import { RegisterUserDto } from '../src/user/dto/user.dto';

describe('Users', () => {
	let app: INestApplication;
	let userServices: UserService;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [
				MongooseModule.forRoot('mongodb://localhost/dummy-network', {
					useCreateIndex: true,
				}),
				UserModule,
			],
		})
			.overrideProvider(UserService)
			.useValue(userServices)
			.compile();

		app = moduleRef.createNestApplication();
		await app.init();
	});

	test('/POST register', async () => {
		const mockUser: RegisterUserDto = {
			email: 'adminTest@gmail.com',
			password: '123456',
			username: 'admin test',
		};

		const res = await req(app.getHttpServer())
			.post('/user/register')
			.send(mockUser);

		console.log(res.body);
		expect(res.status).toBe(201);
	});

	afterAll(async () => {
		await app.close();
	});
});
