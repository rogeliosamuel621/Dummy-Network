import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get('all')
  getAll(@Req() req: Request): string {
    console.log(req.body);

    return 'All cats';
  }

  @Get('one')
  getOne(): string {
    return 'one cat';
  }
}
