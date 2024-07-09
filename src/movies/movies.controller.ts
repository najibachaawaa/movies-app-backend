// // movies.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete,ParseIntPipe,UseGuards } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movies.interface';
import { JwtAuthGuard } from '../auth/jwt.auth-guard'; 
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllMovies(): Promise<Movie[]> {
    return await this.moviesService.getAllMovies();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getMovieById(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return await this.moviesService.getMovieById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createMovie(@Body() movieData: Partial<Movie>): Promise<Movie> {
    return await this.moviesService.createMovie(movieData);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateMovie(@Param('id', ParseIntPipe) id: number, @Body() movieData: Partial<Movie>): Promise<Movie> {
    return await this.moviesService.updateMovie(id, movieData);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteMovie(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.moviesService.deleteMovie(id);
  }
}
