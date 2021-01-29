import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost/nest', {
			useCreateIndex: true,
		}),
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
