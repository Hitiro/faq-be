import { IsNotEmpty } from 'class-validator';

export class CreateFaqDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descricao: string;
}
