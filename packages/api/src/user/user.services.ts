import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as argon from 'argon2';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async register(user: RegisterUserDto): Promise<string> {
		try {
			const hash: string = await argon.hash(user.password, {
				type: argon.argon2i,
			});
			user.password = hash;

			const newUser = new this.userModel(user);
			await newUser.save();

			return 'USER REGISTERED';
		} catch (e) {
			if (e.code === 11000) {
				return 'EMAIL ALREADY TAKEN';
			}
			return 'SOMETHING WERE WRONG';
		}
	}
}
