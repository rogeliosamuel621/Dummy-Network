import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { RegisterUserDto } from './dto/user.dto';
import { UserService } from './user.services';
import { IDataForToken, IPayload } from './interfaces';
import { AuthService } from '../auth/auth.services';

@Controller('user')
export class UserController {
	constructor(
		private userServices: UserService,
		private authServices: AuthService
	) {}

	//data? -> register -> create token -> return token
	@Post('register')
	async register(
		@Body() registerUserDto: RegisterUserDto,
		@Res() res: Response
	): Promise<Response> {
		const { err, id }: IDataForToken = await this.userServices.register(
			registerUserDto
		);

		if (err) {
			return res.status(err.statusCode).json({ msg: err.msg });
		}

		const token = this.authServices.signToken({ id });

		return res.status(201).json({ msg: 'USER REGISTERED', data: token });
	}
}
