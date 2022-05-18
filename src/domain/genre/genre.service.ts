import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
import GenreRepository from './genre.repository';

@Injectable()
export class GenreService {
  constructor(
    @Inject(GenreRepository)
    private genreRepository: GenreRepository,
  ) {}

  create(createGenreDto: CreateGenreDto) {
    const genreFound = this.genreRepository.findByName(createGenreDto.name);

    if (genreFound) throw new BadRequestException('This genre already exists');

    return this.genreRepository.create(createGenreDto);
  }

  findAll() {
    return this.genreRepository.findAll();
  }

  findOne(id: string): Genre | undefined {
    return this.genreRepository.findById(id);
  }

  update(id: string, updateGenreDto: UpdateGenreDto): void {
    const genreFound = this.genreRepository.findById(id);

    if (!genreFound)
      throw new BadRequestException('This genre does not exists');

    this.genreRepository.update(id, updateGenreDto);
  }

  remove(id: string) {
    const genreFound = this.genreRepository.findById(id);

    if (!genreFound)
      throw new BadRequestException('This genre does not exists');

    return this.genreRepository.delete(id);
  }

  findByName(name: string): Genre | undefined {
    return this.genreRepository.findByName(name);
  }
}
