import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { RegisterUserDto } from './dto/user.dto';
import { UserService } from './user.services';
@Controller('user')
export class UserController {
	constructor(private userServices: UserService) {}

	@Post('register')
	register(
		@Body() registerUserDto: RegisterUserDto,
		@Res() res: Response
	): Response {
		const response: string = this.userServices.register(registerUserDto);
		return res.json(response);
	}
}
