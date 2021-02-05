import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipesOptions } from './utils/validationPipesOptions';
import { PORT } from './config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe(validationPipesOptions));
	await app.listen(PORT);
}
bootstrap();
