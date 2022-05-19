import { IsString, ValidateNested } from 'class-validator';
import { Genre } from '../../genre/entities/genre.entity';

export class CreateMovieRepositoryDto {
  @IsString()
  name: string;

  @ValidateNested()
  genre: Genre;
}
