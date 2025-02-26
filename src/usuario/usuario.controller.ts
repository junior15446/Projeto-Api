import { Body, Controller, Post, Get } from "@nestjs/common"
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";

@Controller('/usuarios')
export class UsuarioController{

    constructor(private clsUsuariosArmazenados: UsuarioArmazenados){
    }

    @Post()
    async criaUsuario(@Body() dadosUsuario){

        var validacoes = this.clsUsuariosArmazenados.validaUsuario(dadosUsuario);
        if(validacoes.length > 0){
            return {status: "Erro", 
            validacoes: validacoes
            };
        }
        var novoUsuario = new UsuarioEntity(dadosUsuario.id,
             dadosUsuario.nome, dadosUsuario.idade, 
             dadosUsuario.cidade, dadosUsuario.email, 
             dadosUsuario.senha, dadosUsuario.telefone);
        this.clsUsuariosArmazenados.AdicionarUsuarios(novoUsuario);

        var Usuario = {
            dadosUsuario : dadosUsuario,
            status: "Usuario Criado"};
        
        return Usuario;
        
    }

    @Get()
    async listaUsuarios(){
        return this.clsUsuariosArmazenados.Usuarios;
    }
    
  }

  

