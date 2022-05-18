import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { GenreService } from '../genre/genre.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import MovieRepository from './movie.repository';

@Injectable()
export class MovieService {
  constructor(
    @Inject(MovieRepository)
    private movieRepository: MovieRepository,
    @Inject(GenreService)
    private genreService: GenreService,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    const genre = this.genreService.findOne(createMovieDto.genreId);

    if (!genre) throw new BadRequestException('Genre does not exists');

    return this.movieRepository.create({ name: createMovieDto.name, genre });
  }

  findAll() {
    return this.movieRepository.findAll();
  }

  findOne(id: string): Movie | undefined {
    return this.movieRepository.findById(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto): void {
    const genre = this.genreService.findOne(updateMovieDto.genreId);

    if (!genre) throw new BadRequestException('Genre does not exists');

    const movieFound = this.movieRepository.findById(id);

    if (!movieFound)
      throw new BadRequestException('This movie does not exists');

    return this.movieRepository.update(id, {
      name: updateMovieDto.name,
      genre,
    });
  }

  remove(id: string) {
    const movieFound = this.movieRepository.findById(id);

    if (!movieFound)
      throw new BadRequestException('This movie does not exists');

    return this.movieRepository.delete(id);
  }

  findByName(name: string): Movie | undefined {
    return this.movieRepository.findByName(name);
  }

  findByGenre(genreId: string): Movie[] {
    const genre = this.genreService.findOne(genreId);

    if (!genre) throw new BadRequestException('Genre does not exists');
    return this.movieRepository.findByGenre(genre);
  }
}
