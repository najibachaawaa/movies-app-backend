// // movies.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movies.interface';// Adjust import based on your structure

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getAllMovies(): Promise<Movie[]> {
    return await this.moviesService.getAllMovies();
  }

  @Get(':id')
  async getMovieById(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return await this.moviesService.getMovieById(id);
  }

  @Post()
  async createMovie(@Body() movieData: Partial<Movie>): Promise<Movie> {
    return await this.moviesService.createMovie(movieData);
  }

  @Put(':id')
  async updateMovie(@Param('id', ParseIntPipe) id: number, @Body() movieData: Partial<Movie>): Promise<Movie> {
    return await this.moviesService.updateMovie(id, movieData);
  }

  @Delete(':id')
  async deleteMovie(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.moviesService.deleteMovie(id);
  }
}
