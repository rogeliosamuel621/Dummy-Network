import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterUserDto, LoginUserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as argon from 'argon2';
import { IDataForToken } from './interfaces/';
import { AuthService } from '../auth/auth.services';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		private authServices: AuthService
	) {}

	async register(user: RegisterUserDto): Promise<IDataForToken> {
		try {
			const hash: string = await argon.hash(user.password, {
				type: argon.argon2i,
			});
			user.password = hash;

			const newUser: UserDocument = new this.userModel(user);
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

	//correctData -> WrongEmail? -> WrongPassword? -> OK
	async login(user: LoginUserDto): Promise<IDataForToken> {
		try {
			const isUser = await this.userModel.findOne(
				{
					email: user.email,
				},
				'password _id'
			);

			if (isUser) {
				return {
					err: { msg: 'WRONG EMAIL', statusCode: 401 },
					id: null,
				};
			}

			const passwordsMatch: boolean = await this.authServices.verifyPassword(
				isUser.password,
				user.password
			);

			if (!passwordsMatch) {
				return {
					err: { msg: 'PASSWORDS DOES NOT MATCH', statusCode: 401 },
					id: null,
				};
			}

			return {
				err: null,
				id: isUser._id,
			};
		} catch (e) {
			console.log(e);
			return {
				err: { msg: 'SOMETHING WERE WRONG', statusCode: 500 },
				id: null,
			};
		}
	}
}
