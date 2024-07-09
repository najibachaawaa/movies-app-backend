import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module'; // Adjust path as necessary

@Module({
  imports: [
    MoviesModule, // Import MoviesModule or other modules needed by your app
  ],
})
export class AppModule {}
