import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { RegisterUserDto } from './dto/user.dto';
import { UserService } from './user.services';
@Controller('user')
export class UserController {
	constructor(private userServices: UserService) {}

	@Post('register')
	async register(
		@Body() registerUserDto: RegisterUserDto,
		@Res() res: Response
	): Promise<Response> {
		const msg: string = await this.userServices.register(registerUserDto);
		return res.json(msg);
	}
}
