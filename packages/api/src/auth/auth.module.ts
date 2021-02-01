import { Module } from '@nestjs/common';
import { AuthService } from './auth.services';

@Module({
	providers: [AuthService],
	exports: [AuthService],
})
export class AuthModule {}
