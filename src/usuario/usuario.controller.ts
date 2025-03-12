import { Body, Controller, Post, Get, Put, Param, Delete } from "@nestjs/common"
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";
import { AlteraUsuarioDto } from "./dto/alteraUsuario.dto";
import { v4 as uuid } from "uuid";
import { CriaUsuarioDto } from "./dto/usuario.dto";
import { ListaUsuarioDTO } from "./dto/consulta.dto";

@Controller('/usuarios')

export class UsuarioController{
    constructor(private clsUsuarioArmazenados: UsuarioArmazenados){
    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDto){  
      

        var novoUsuario = new UsuarioEntity(uuid(),dadosUsuario.nome,

                                            dadosUsuario.idade,dadosUsuario.cidade,dadosUsuario.email,

                                            dadosUsuario.telefone,dadosUsuario.senha);

        this.clsUsuarioArmazenados.AdicionarUsuarios(novoUsuario);

        var usuario = {

            dadosUsuario : novoUsuario,

            status: "Usuario Criado"
        }

        return usuario;
    }

    @Get()

    async listaUsuarios(){

        const usuariosListados = this.clsUsuarioArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.email
            )
        );
        return listaRetorno;
    }

   
    @Put('/:id')

    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AlteraUsuarioDto){
        const usuarioAtualizado = await this.clsUsuarioArmazenados.atualizaUsuario(id, novosDados);

        return { usuario: usuarioAtualizado,
        mensagem: "Usuário atualizado com sucesso"}
    }

    @Delete('/:id')

    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuarioArmazenados.removeUsuario(id);

        return {
            usuario: usuarioRemovido,
            mensagem: "Usuário removido com sucesso"
        }
    }
}


 



