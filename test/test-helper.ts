import GenreRepository from 'src/domain/genre/genre.repository';
import { GenreService } from 'src/domain/genre/genre.service';
import { MovieService } from 'src/domain/movie/movie.service';

export type MockType<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]?: jest.Mock<{}>;
};

export const genreServiceMockFactory: () => MockType<GenreService> = jest.fn(
  () => ({
    create: jest.fn((entity) => entity),
    findAll: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    update: jest.fn((entity) => entity),
    remove: jest.fn((entity) => entity),
    findByName: jest.fn((entity) => entity),
  }),
);

export const genreRepositoryMockFactory: () => MockType<GenreRepository> =
  jest.fn(() => ({
    create: jest.fn((entity) => entity),
    findAll: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    update: jest.fn((entity) => entity),
    delete: jest.fn((entity) => entity),
    findByName: jest.fn((entity) => entity),
  }));

export const movieServiceMockFactory: () => MockType<MovieService> = jest.fn(
  () => ({
    create: jest.fn((entity) => entity),
    findAll: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    update: jest.fn((entity) => entity),
    remove: jest.fn((entity) => entity),
    findByName: jest.fn((entity) => entity),
    findByGenre: jest.fn((entity) => entity),
  }),
);
