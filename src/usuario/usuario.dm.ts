import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioArmazenados {
  #usuarios: UsuarioEntity[] = [];

  AdicionarUsuarios(usuario: UsuarioEntity) {
    this.#usuarios.push(usuario);
  }

  async removeUsuario(id: string) {
    const usuario = this.buscaPorID(id);

    this.#usuarios = this.#usuarios.filter(usuario => usuario.id !== id);
    return usuario;
  }

  validaUsuario(dadosUsuario: UsuarioEntity) {
    const validacoes: string[] = [];
    if (dadosUsuario.id == null) {
      validacoes.push("ID não pode ser null");
    }
    if (dadosUsuario.nome == null) {
      validacoes.push("Nome não pode ser null");
    }
    if (dadosUsuario.idade == null) {
      validacoes.push("Idade não pode ser null");
    }
    if (dadosUsuario.cidade == null) {
      validacoes.push("Cidade não pode ser null");
    }
    if (dadosUsuario.email == null) {
      validacoes.push("Email não pode ser null");
    }
    if (dadosUsuario.senha == null) {
      validacoes.push("Senha não pode ser null");
    }
    if (dadosUsuario.telefone == null) {
      validacoes.push("Telefone não pode ser null");
    }
    return validacoes;
  }

  buscaPorID(id: string){
    const possivelUsuario = this.#usuarios.find(
        usuaruioSalvo => usuaruioSalvo.id === id);

        if(!possivelUsuario){
            throw new Error("Usuário não encontrado");
        }
        return possivelUsuario;
  }

  atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>) {
    const usuario = this.buscaPorID(id);
    
    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }
  
    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      
      if (chave === 'id') {
        return;
      }
      if (usuario[chave] === valor) {
        return; 
      }

      usuario[chave] = valor;

    });
    
    return usuario;
  }
  


  async validaEmail(email: string): Promise<boolean> {
    const possivelUsuario = this.#usuarios.find(usuario => usuario.email === email);
    return possivelUsuario !== undefined;
  }

  get Usuarios(){
    return this.#usuarios;
}


}
