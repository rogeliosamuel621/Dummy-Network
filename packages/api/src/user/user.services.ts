import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	register(user: RegisterUserDto): string {
		if (user.password.length < 6) {
			return 'PASSWORD MUST HAVE AT LEAST 6 CHARACTERS';
		}

		return 'User registered';
	}
}
