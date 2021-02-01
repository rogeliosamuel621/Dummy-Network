import * as req from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
	FakeUser,
	closeInMongodConnection,
	rootMongooseTestModule,
} from './user.utils';
import { UserModule } from '../user.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipesOptions } from '../../utils/validationPipesOptions';

describe('Register endpoint', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [rootMongooseTestModule(), UserModule],
		}).compile();

		app = moduleRef.createNestApplication();
		app.useGlobalPipes(new ValidationPipe(validationPipesOptions));
		await app.init();
	});
	afterAll(async () => {
		await closeInMongodConnection();
		await app.close();
	});

	test('WRONG DATA SCHEMA', async () => {
		const mockUser = new FakeUser('admingmail.com', 'admin', '123456');

		const res = await req(app.getHttpServer())
			.post('/user/register')
			.send(mockUser);

		expect(res.status).toBe(400);
		expect(res.body.message).toContain(
			'the [email] is not an email, [admingmail.com]'
		);
	});

	test('OK', async () => {
		const mockUser = new FakeUser('admin@gmail.com', 'admin', '123456');

		const res = await req(app.getHttpServer())
			.post('/user/register')
			.send(mockUser);

		expect(res.status).toBe(201);
		expect(res.body.msg).toBe('USER REGISTERED');
	});

	test('EMAIL ALREADY TAKEN', async () => {
		const mockUser = new FakeUser('admin@gmail.com', 'admin', '123456');

		const res = await req(app.getHttpServer())
			.post('/user/register')
			.send(mockUser);

		expect(res.status).toBe(400);
		expect(res.body.msg).toBe('EMAIL ALREADY TAKEN');
	});
});
