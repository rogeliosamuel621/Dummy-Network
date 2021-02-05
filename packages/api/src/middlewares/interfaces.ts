import { Request } from 'express';

export interface IDecoded {
	id: string;
	iat: number;
	exp: number;
}

export interface IReqUser extends Request {
	user: {
		id: string;
		iat: number;
		exp: number;
	};
}
