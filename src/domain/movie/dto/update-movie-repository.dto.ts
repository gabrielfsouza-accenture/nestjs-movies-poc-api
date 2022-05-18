import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieRepositoryDto } from './create-movie-repository';

export class UpdateMovieRepositoryDto extends PartialType(
  CreateMovieRepositoryDto,
) {}
