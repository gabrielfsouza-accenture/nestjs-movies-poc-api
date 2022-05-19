import { BadRequestException } from '@nestjs/common';
import { Genre } from 'src/domain/genre/entities/genre.entity';
import { v4 as uuidv4 } from 'uuid';

interface MovieProps {
  id?: string;
  name: string;
  genre: Genre;
}

export class Movie {
  id: string;
  name: string;
  genre: Genre;

  constructor(props: MovieProps) {
    this.id = props.id ?? uuidv4();
    this.name = props.name;
    this.genre = props.genre;

    this.validate();
  }

  private validate() {
    if (!this.name) throw new BadRequestException('Name is required');
    if (!this.genre) throw new BadRequestException('Genre is required');
  }
}
