import { Module } from '@nestjs/common';
import { UserController } from './user.controllers';
import { UserService } from './user.services';
import { User, UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import {} from './schemas/user.schema';
@Module({
	exports: [],
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		AuthModule,
	],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
