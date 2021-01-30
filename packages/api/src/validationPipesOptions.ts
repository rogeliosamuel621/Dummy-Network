import { ValidationPipeOptions } from '@nestjs/common';

export const validationPipesOptions: ValidationPipeOptions = {
	disableErrorMessages: true,
	transform: true,
};
