import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
	register(user: RegisterUserDto): string {
		if (user.password.length < 6) {
			return 'PASSWORD MUST HAVE AT LEAST 6 CHARACTERS';
		}

		return 'User registered';
	}
}
