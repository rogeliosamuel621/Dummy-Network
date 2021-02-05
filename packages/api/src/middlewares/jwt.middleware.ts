import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response, NextFunction } from 'express';
import { AuthService } from '../auth/auth.services';
import { User, UserDocument } from '../user/schemas/user.schema';
import { IDecoded, IReqUser } from './interfaces';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		private authServices: AuthService
	) {}
	async use(req: IReqUser, res: Response, next: NextFunction) {
		const token = req.headers.authorization;

		if (!token) {
			return res.status(401).json({
				statusCode: 401,
				message: 'NO TOKEN PROVIDED',
			});
		}

		try {
			const decoded: IDecoded = this.authServices.verifyToken(token);

			const user = await this.userModel.findById(decoded.id, '_id');

			if (!user) {
				return res.status(401).json({
					statusCode: 401,
					message: 'UNAUTHORIZED',
				});
			}

			req.user = decoded;
			delete req.user.iat;
			delete req.user.exp;

			return next();
		} catch (err) {
			console.log(err);

			return res.status(500).json({
				statusCode: 500,
				message: 'INTERNAL SERVER ERROR',
			});
		}
	}
}
