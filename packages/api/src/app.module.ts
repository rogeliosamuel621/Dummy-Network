import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatServices } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatServices],
})
export class AppModule {}
