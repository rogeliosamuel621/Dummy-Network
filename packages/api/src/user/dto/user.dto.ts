import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
	@IsNotEmpty()
	@IsString()
	username: string;

	@IsEmail()
	email: string;

	@IsString()
	@MinLength(6)
	password: string;
}
