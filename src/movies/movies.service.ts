import { Injectable } from '@nestjs/common';
import { Movie } from './movies.interface'; // Adjust path as necessary
import { MovieRepository } from './movie.repository'; // Adjust path as necessary

@Injectable()
export class MoviesService {
  constructor(private readonly movieRepository: MovieRepository) {}

  getAllMovies(): Movie[] {
    return this.movieRepository.findAll();
  }

  getMovieById(id: number): Movie {
    return this.movieRepository.findById(id);
  }

  createMovie(movieData: Partial<Movie>): Movie {
    return this.movieRepository.create(movieData);
  }

  updateMovie(id: number, movieData: Partial<Movie>): Movie {
    return this.movieRepository.update(id, movieData);
  }

  deleteMovie(id: number): void {
    this.movieRepository.delete(id);
  }
}
