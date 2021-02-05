import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { IReqUser } from 'src/middlewares/interfaces';

@Controller('post')
export class PostController {
	@Get('posts')
	getAllPosts(@Req() req: IReqUser): string {
		return 'All posts';
	}
}
