import { Genre } from '../genre/entities/genre.entity';
import { CreateMovieRepositoryDto } from './dto/create-movie-repository';
import { UpdateMovieRepositoryDto } from './dto/update-movie-repository.dto';
import { Movie } from './entities/movie.entity';

export default class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [];
  }

  create(props: CreateMovieRepositoryDto): void {
    const movie = new Movie({ name: props.name, genre: props.genre });

    this.movies.push(movie);
  }

  findAll(): Movie[] {
    return this.movies;
  }

  findById(id: string): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  update(id: string, props: UpdateMovieRepositoryDto): void {
    const movieFound = this.findById(id);

    if (movieFound) {
      movieFound.name = props.name;
    }
  }

  delete(id: string): void {
    const movieIndexFound = this.movies.findIndex((movie) => movie.id === id);
    if (movieIndexFound !== -1) this.movies.splice(movieIndexFound, 1);
  }

  findByName(name: string): Movie | undefined {
    return this.movies.find((movie) => movie.name === name);
  }

  findByGenre(genre: Genre): Movie[] {
    return this.movies.filter((movie) => movie.genre === genre);
  }
}
