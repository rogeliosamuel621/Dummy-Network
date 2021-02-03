import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

import { LoggerMiddleware } from './middlewares/jwt.middleware';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost/dummy-network', {
			useCreateIndex: true,
		}),
		UserModule,
		PostModule,
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
