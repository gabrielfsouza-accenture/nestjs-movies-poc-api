import { Test, TestingModule } from '@nestjs/testing';
import { genreServiceMockFactory, MockType } from '../../test/test-helper';
import { Genre } from './entities/genre.entity';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';

describe('GenreController', () => {
  let controller: GenreController;
  let service: MockType<GenreService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: GenreService,
          useFactory: genreServiceMockFactory,
        },
      ],
      controllers: [GenreController],
    }).compile();

    controller = module.get<GenreController>(GenreController);
    service = module.get(GenreService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a genre', () => {
      jest.spyOn(service, 'create');

      controller.create({ name: 'Genre 1' });

      expect(service.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll', () => {
    it('should find all genres', () => {
      const genres = [
        { id: '1', name: 'Genre 1' },
        { id: '2', name: 'Genre 2' },
        { id: '3', name: 'Genre 3' },
      ] as Genre[];

      jest.spyOn(service, 'findAll').mockReturnValue(genres);
      expect(controller.findAll()).toStrictEqual(genres);
    });
  });

  describe('findById', () => {
    it('should find a genre by id', () => {
      const genre = new Genre({ id: '1', name: 'Genre 1' });

      jest.spyOn(service, 'findOne').mockReturnValue(genre);

      expect(controller.findOne('1')).toStrictEqual(genre);
    });
  });

  describe('update', () => {
    it('should update a genre', () => {
      jest.spyOn(service, 'update');

      controller.update('1', { name: 'Genre 2' });

      expect(service.update).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove', () => {
    it('should delete a genre', () => {
      jest.spyOn(service, 'remove');

      controller.remove('id');

      expect(service.remove).toHaveBeenCalledTimes(1);
    });
  });
});
