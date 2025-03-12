import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from './emailUnico';

export class AlteraUsuarioDto {
  
  @IsString()
  @IsNotEmpty({ message: "NOME não pode ser null" })
  @IsOptional()
  nome: string;

  @IsInt()
  @IsOptional()
  idade: number;

  @IsString()
  @IsOptional()
  cidade: string;

  @IsEmail(undefined, { message: "Email é inválido" })
  @EmailUnico({message: "Email já cadastrado"})
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  telefone: string;

  @MinLength(6, { message: "Senha deve ter no mínimo 6 caracteres" })
  @IsOptional()
  senha: string;
}
