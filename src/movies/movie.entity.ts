// movie.entity.ts (TypeORM example)
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Movie as MovieInterface } from './movies.interface';

@Entity()
export class Movie implements MovieInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  director: string;
}
