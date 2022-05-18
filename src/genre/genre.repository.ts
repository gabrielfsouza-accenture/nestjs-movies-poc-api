import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

export default class GenreRepository {
  private genres: Genre[];

  constructor() {
    this.genres = [];
  }

  create(props: CreateGenreDto): void {
    const genre = new Genre({ name: props.name });

    this.genres.push(genre);
  }

  findAll(): Genre[] {
    return this.genres;
  }

  findById(id: string): Genre | undefined {
    return this.genres.find((genre) => genre.id === id);
  }

  update(id: string, props: UpdateGenreDto): void {
    const genreFound = this.findById(id);

    if (genreFound) {
      genreFound.name = props.name;
    }
  }

  delete(id: string): void {
    const genreIndexFound = this.genres.findIndex((genre) => genre.id === id);
    if (genreIndexFound !== -1) this.genres.splice(genreIndexFound, 1);
  }

  findByName(name: string): Genre | undefined {
    return this.genres.find((genre) => genre.name === name);
  }
}
