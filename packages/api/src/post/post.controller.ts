import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {
	@Get('posts')
	getAllPosts(): string {
		return 'All posts';
	}
}
