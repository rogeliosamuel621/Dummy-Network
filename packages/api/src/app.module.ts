import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

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
export class AppModule {}
