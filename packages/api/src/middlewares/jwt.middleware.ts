import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../auth/auth.services';
import { User, UserDocument } from '../user/schemas/user.schema';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		private authServices: AuthService
	) {}
	use(req: Request, res: Response, next: NextFunction) {
		const token = req.headers['authorization'];

		if (!token) {
			return res.status(401).json({
				statusCode: 401,
				message: 'NO TOKEN PROVIDED',
			});
		}

		try {
			const decoded: any = this.authServices.verifyToken(token);

			console.log(decoded);

			const user = this.userModel.findById(decoded._id, '_id');

			if (!user) {
				return res.status(401).json({
					statusCode: 401,
					message: 'UNAUTHORIZED',
				});
			}

			// req.user = decoded as IDecoded;
			return next();
		} catch (err) {
			// MODE === 'dev' ? console.log(err) : null;

			return res.status(500).json({
				statusCode: 500,
				message: 'INTERNAL SERVER ERROR',
			});
		}
	}
}
