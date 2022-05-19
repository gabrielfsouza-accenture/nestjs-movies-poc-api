import { BadRequestException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

interface GenreProps {
  id?: string;
  name: string;
}

export class Genre {
  id: string;
  name: string;

  constructor(props: GenreProps) {
    this.id = props.id ?? uuidv4();
    this.name = props.name;

    this.validate();
  }

  private validate() {
    if (!this.name) throw new BadRequestException('Name is required');
  }
}
