import { Controller, Get, Req, Body, Post, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { CatServices } from './cats.service';
import { ICats, Cats } from './cats';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatServices) {}

  @Get('all')
  getAll(): ICats[] {
    return this.catService.getAllCats();
  }

  @Get('one')
  getOne(@Body() body: { id: number }): ICats {
    return this.catService.getOneCat(body.id);
  }

  @Post('create')
  create(@Body() createCatDto: ICats): void {
    this.catService.createCat(createCatDto);
  }
}
