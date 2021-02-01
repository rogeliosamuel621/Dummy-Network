import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as argon from 'argon2';
import { IDataForToken } from './interfaces/';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async register(user: RegisterUserDto): Promise<IDataForToken> {
		try {
			const hash: string = await argon.hash(user.password, {
				type: argon.argon2i,
			});
			user.password = hash;

			const newUser = new this.userModel(user);
			await newUser.save();

			newUser.password = undefined;
			user.password = undefined;

			return { err: null, id: newUser._id };
		} catch (e) {
			if (e.code === 11000) {
				return {
					err: { msg: 'EMAIL ALREADY TAKEN', statusCode: 400 },
					id: null,
				};
			}
			return {
				err: { msg: 'SOMETHING WERE WRONG', statusCode: 500 },
				id: null,
			};
		}
	}
}
