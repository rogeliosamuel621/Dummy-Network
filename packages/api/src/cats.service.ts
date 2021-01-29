import { Injectable } from '@nestjs/common';
import { Cats, ICats } from './cats';

@Injectable()
export class CatServices {
  private cats: ICats[] = Cats;

  getAllCats(): ICats[] {
    return this.cats;
  }

  getOneCat(id: number): ICats {
    return this.cats[id];
  }

  createCat(cat: ICats) {
    this.cats.push(cat);
  }
}
