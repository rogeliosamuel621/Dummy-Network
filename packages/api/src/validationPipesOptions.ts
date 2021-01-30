import { ValidationPipeOptions } from '@nestjs/common';

export const validationPipesOptions: ValidationPipeOptions = {
	disableErrorMessages: false,
	transform: true,
};
