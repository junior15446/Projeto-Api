import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";



@Injectable()
    export class UsuarioArmazenados{
          #usuarios: UsuarioEntity[] = [];

        AdicionarUsuarios(usuario: UsuarioEntity){
            this.#usuarios.push(usuario);
        }

        validaUsuario(dadosUsuario){
            var validacoes: string[] = [];
            if(!(dadosUsuario.id != null)){
                validacoes.push("ID não pode ser null");
            }
            if(!(dadosUsuario.nome != null)){
                validacoes.push("Nome não pode ser null");
            }
            if(!(dadosUsuario.idade != null)){
                validacoes.push("Idade não pode ser null");
            }
            if(!(dadosUsuario.cidade != null)){
                validacoes.push("Cidade não pode ser null");
            }
            if(!(dadosUsuario.email != null)){
                validacoes.push("Email não pode ser null");
            }
            if(!(dadosUsuario.senha != null)){
                validacoes.push("Senha não pode ser null");
            }
            if(!(dadosUsuario.telefone != null)){
                validacoes.push("Telefone não pode ser null");
            }
            return validacoes;
        }

        get Usuarios(){
            return this.#usuarios;
        }

    }
