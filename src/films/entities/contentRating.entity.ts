import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Film } from './film.entity';
import { Exclude } from 'class-transformer';

@Entity('contentRatings')
export class ContentRating {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;
  @Column()
  description: string;
  @OneToMany(() => Film, (film) => film.contentRating)
  films: Film[];
}
