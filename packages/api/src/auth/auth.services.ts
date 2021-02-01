import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { IPayload } from 'src/user/interfaces';

@Injectable()
export class AuthService {
	signToken(payload: IPayload) {
		const token: string = sign(payload, 'jwt-secret', { expiresIn: '3h' });

		return token;
	}
}
