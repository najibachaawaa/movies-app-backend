import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieRepository } from './movie.repository'; 
@Module({
  controllers: [MoviesController],
  providers: [
    MoviesService,
    MovieRepository, 
  ],
  exports: [MoviesService],
})
export class MoviesModule {}
