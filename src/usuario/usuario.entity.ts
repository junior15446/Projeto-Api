export class UsuarioEntity{
    id: string;
    nome: string;
    idade: Number;
    cidade: string;
    email: string;
    senha: string;
    telefone: string;
    constructor(id: string,nome: string,idade: Number,cidade: string,email: string,senha: string,telefone: string){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
    }
}