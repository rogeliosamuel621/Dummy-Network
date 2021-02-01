import { Module } from '@nestjs/common';
import { AuthService } from './auth.services';

@Module({
	providers: [AuthService],
})
export class AuthModule {}
