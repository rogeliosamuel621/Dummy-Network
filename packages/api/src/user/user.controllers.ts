import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { RegisterUserDto } from './dto/user.dto';
import { UserService } from './user.services';
import { IDataForToken } from './interfaces';

@Controller('user')
export class UserController {
	constructor(private userServices: UserService) {}

	//data? -> register -> create token -> return token
	@Post('register')
	async register(
		@Body() registerUserDto: RegisterUserDto,
		@Res() res: Response
	): Promise<any> {
		const { err, id }: IDataForToken = await this.userServices.register(
			registerUserDto
		);
	}
}
