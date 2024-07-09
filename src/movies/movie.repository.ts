// movie.repository.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movies.interface'; 


export class MovieRepository {
  private movies: Movie[] = [];

  findAll(): Movie[] {
    return this.movies;
  }

  findById(id: number): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  create(movieData: Partial<Movie>): Movie {
    const newMovie: Movie = {
      id: this.movies.length + 1,
      ...movieData,
    };
    this.movies.push(newMovie);
    return newMovie;
  }

  update(id: number, movieData: Partial<Movie>): Movie {
    const index = this.movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
      this.movies[index] = {
        ...this.movies[index],
        ...movieData,
      };
      return this.movies[index];
    }
    throw new NotFoundException(`Movie with ID ${id} not found`);
  }

  delete(id: number): void {
    const initialLength = this.movies.length;
    this.movies = this.movies.filter(movie => movie.id !== id);
    if (this.movies.length === initialLength) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
  }
}
