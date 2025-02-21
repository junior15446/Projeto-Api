import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";



@Injectable()
    export class UsuarioArmazenados{
         private usuarios: UsuarioEntity[] = [];

        AdicionarUsuarios(usuario: UsuarioEntity){
            this.usuarios.push(usuario);
        }

        get Usuarios(){
            return this.usuarios;
        }

    }
