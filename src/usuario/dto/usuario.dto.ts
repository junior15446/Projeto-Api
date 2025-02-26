import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CriaUsuarioDto {
  
  @IsString()
  @IsNotEmpty({ message: "NOME não pode ser null" })
  nome: string;

  @IsInt()
  idade: number;

  @IsString()
  cidade: string;

  @IsEmail(undefined, { message: "Email é inválido" })
  email: string;

  @IsString()
  telefone: string;

  @MinLength(6, { message: "Senha deve ter no mínimo 6 caracteres" })
  senha: string;
}
