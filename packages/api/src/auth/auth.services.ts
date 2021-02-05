import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { IPayload } from 'src/user/interfaces';
import { argon2i, verify } from 'argon2';
import { IDecoded } from '../middlewares/interfaces';
import { JWT_SECRET, EXPIRES_IN } from '../config';

@Injectable()
export class AuthService {
	signToken(payload: IPayload) {
		const token: string = jwt.sign(payload, JWT_SECRET, {
			expiresIn: EXPIRES_IN,
		});

		return token;
	}

	verifyToken(token: string): IDecoded {
		const decoded: IDecoded = jwt.verify(token, JWT_SECRET) as IDecoded;

		return decoded;
	}

	async verifyPassword(hashPass: string, plainPass: string): Promise<boolean> {
		const match: boolean = await verify(hashPass, plainPass, { type: argon2i });

		return match;
	}
}
