import { Module } from '@nestjs/common';
import { CatModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [UserModule, CatModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
