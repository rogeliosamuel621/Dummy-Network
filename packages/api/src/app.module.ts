import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
<<<<<<< HEAD
		MongooseModule.forRoot('mongodb://localhost/dummy-network', {
=======
		MongooseModule.forRoot('mongodb://localhost/nest', {
>>>>>>> bcaa6ca82c8fe33b84ae98edac0135861a1086eb
			useCreateIndex: true,
		}),
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
