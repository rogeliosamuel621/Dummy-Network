import { IPayload } from './jwt.interfaces';

export interface IDataForToken extends IPayload {
	err?: { msg: string; statusCode: number };
}
