import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
	@IsNotEmpty({ message: 'The [$property] is empty' })
	@IsString({ message: 'The [$property] is not an string' })
	username: string;

	@IsEmail(
		{},
		{
			message: 'the [$property] is not an email, [$value]',
		}
	)
	email: string;

	@IsString({ message: 'The [$property] is not an string' })
	@MinLength(6, {
		message:
			'[$property] is too short, min length is [$constraint1], but got [$value]',
	})
	password: string;
}
