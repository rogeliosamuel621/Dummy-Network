export const MODE: boolean =
	process.env.NODE_ENV === 'production' ? true : false;
export const PORT: string = process.env.PORT || '3000';
export const MONGO_URI: string = MODE
	? process.env.MONGO_URI
	: 'mongodb://localhost/dummy-network';
export const JWT_SECRET: string = MODE ? process.env.JWT_SECRET : 'secret';
export const EXPIRES_IN: string = MODE ? process.env.EXPIRES_IN : '3h';
