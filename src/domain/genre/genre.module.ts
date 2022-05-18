import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import GenreRepository from './genre.repository';

@Module({
  controllers: [GenreController],
  providers: [GenreService, GenreRepository],
  exports: [GenreService],
})
export class GenreModule {}
