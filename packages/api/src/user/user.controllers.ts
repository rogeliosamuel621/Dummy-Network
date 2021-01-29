import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { RegisterUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
	@Post('register')
	register(@Body() registerUserDto: RegisterUserDto, @Res() res: Response) {
		return res.status(201).json(registerUserDto);
	}
}
