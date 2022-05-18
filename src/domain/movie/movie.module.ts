import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { GenreModule } from '../genre/genre.module';
import MovieRepository from './movie.repository';

@Module({
  imports: [GenreModule],
  controllers: [MovieController],
  providers: [MovieService, MovieRepository],
  exports: [MovieService],
})
export class MovieModule {}
