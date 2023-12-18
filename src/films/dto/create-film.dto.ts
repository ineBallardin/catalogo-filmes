import { z } from 'zod';

// export class CreateFilmDto {
//   @IsString()
//   title: string;
//   @IsString()
//   synopsis: string;
//   @IsNumber()
//   year: number;
//   @IsNumber()
//   duration: number;
//   @IsArray()
//   genres: string[];
//   @IsArray()
//   artists: string[];
//   @IsString()
//   contentRating: 'Livre | "+12" | "+14" | "+16" | "+18"';
// }

export const createFilmSchema = z.object({
  title: z
    .string({ required_error: 'Campo título é obrigatório' })
    .trim()
    .min(1, 'Campo título não pode ficar vazio.'),
  synopsis: z
    .string({ required_error: 'Campo sinopse é obrigatório' })
    .trim()
    .min(1, 'Campo sinopse não pode ficar vazio.'),
  year: z
    .number({ required_error: 'Campo ano é obrigatório' })
    .int()
    .min(1900, 'Número inválido')
    .max(3000, 'Número inválido'),
  duration: z
    .number({ required_error: 'Campo duração é obrigatório' })
    .int()
    .min(0, 'Número inválido')
    .max(600, 'Número inválido'),
  genres: z
    .string()
    .array()
    .nonempty({ message: 'Campo gênero não pode ficar vazio.' }),
  artists: z
    .string()
    .array()
    .nonempty({ message: 'Campo artistas não pode ficar vazio.' }),
  contentRating: z.enum(['Livre', '+12', '+14', '+16', '+18']),
});

export type CreateFilmDto = z.infer<typeof createFilmSchema>;
