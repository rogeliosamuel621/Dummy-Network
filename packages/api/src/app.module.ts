import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/schemas/user.schema';
import { ConfigModule } from '@nestjs/config';
import { MONGO_URI } from './config';

import { LoggerMiddleware } from './middlewares/jwt.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MongooseModule.forRoot(MONGO_URI, {
			useCreateIndex: true,
		}),
		UserModule,
		PostModule,
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
			.forRoutes('post')
			.apply(LoggerMiddleware)
			.exclude('user/(*)');
	}
}
