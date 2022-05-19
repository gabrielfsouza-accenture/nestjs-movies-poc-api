import { IsString, IsUUID } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  name: string;

  @IsUUID()
  genreId: string;
}
