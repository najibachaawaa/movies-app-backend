import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieRepository } from './movie.repository'; // Adjust path as necessary

@Module({
  controllers: [MoviesController],
  providers: [
    MoviesService,
    MovieRepository, // Ensure MovieRepository is included as a provider
  ],
  exports: [MoviesService], // Export MoviesService if needed in other modules
})
export class MoviesModule {}
