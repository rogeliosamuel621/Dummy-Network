import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { RegisterUserDto } from './dto/user.dto';
import { IResponse } from './interfaces/responses.interface';
import { UserService } from './user.services';
@Controller('user')
export class UserController {
	constructor(private userServices: UserService) {}

	@Post('register')
	async register(
		@Body() registerUserDto: RegisterUserDto,
		@Res() res: Response
	): Promise<Response> {
		const { msg, statusCode }: IResponse = await this.userServices.register(
			registerUserDto
		);
		return res.status(statusCode).json({ msg });
	}
}
