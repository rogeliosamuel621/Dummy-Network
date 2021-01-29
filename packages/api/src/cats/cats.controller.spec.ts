import { CatsController } from './cats.controller';
import { CatServices } from './cats.service';
import { Cats, ICats } from './cats';

describe('CatsController', () => {
	let catsController: CatsController;
	let catsService: CatServices;

	beforeEach(() => {
		catsService = new CatServices();
		catsController = new CatsController(catsService);
	});

	describe('findAll', () => {
		test('should return an array of cats', async () => {
			jest.spyOn(catsService, 'getAllCats').mockImplementation(() => Cats);

			expect(await catsController.getAll()).toBe(Cats);
		});
	});
});
