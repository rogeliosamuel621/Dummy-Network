import * as req from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
	FakeUser,
	closeInMongodConnection,
	rootMongooseTestModule,
} from './user.utils';
import { AppModule } from '../../app.module';

describe('Users', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [rootMongooseTestModule(), AppModule],
		}).compile();

		app = moduleRef.createNestApplication();
		await app.init();
	});
	afterAll(async () => {
		await closeInMongodConnection();
		await app.close();
	});

	test('/POST register', async () => {
		const mockUser = new FakeUser('adminTestgmail.com', 'admin test', '123456');

		const res = await req(app.getHttpServer())
			.post('/user/register')
			.send(mockUser);

		expect(res.status).toBe(400);
	});

	test('/POST register', async () => {
		const mockUser = new FakeUser(
			'adminTest@gmail.com',
			'admin test',
			'123456'
		);

		const res = await req(app.getHttpServer())
			.post('/user/register')
			.send(mockUser);

		expect(res.status).toBe(201);
	});
});
