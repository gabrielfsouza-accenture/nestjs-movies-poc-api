import { Genre } from '../../genre/entities/genre.entity';

export class CreateMovieRepositoryDto {
  name: string;
  genre: Genre;
}
