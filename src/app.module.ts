import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module'; 
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    MoviesModule,
    AuthModule,
     
  ],
})
export class AppModule {}
