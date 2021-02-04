import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user/schemas/user.schema';

import { LoggerMiddleware } from './middlewares/jwt.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MongooseModule.forRoot('mongodb://localhost/dummy-network', {
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
			// .apply(LoggerMiddleware)
			// .forRoutes('user')
			.apply(LoggerMiddleware)
			.exclude('user/(*)');
	}
}
