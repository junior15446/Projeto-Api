import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioArmazenados } from "../usuario.dm";
import { Injectable } from "@nestjs/common";
// import { register } from "module";
 
@Injectable()
@ValidatorConstraint({async:true})
 
export class EmailUnicoValidador implements ValidatorConstraintInterface{
    constructor(private clsUsuariosAmarzenados:UsuarioArmazenados){}
 
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
       const validarEmail = await this.clsUsuariosAmarzenados.validaEmail(value);
       return !validarEmail;
    }
}
 
export const EmailUnico = (opcaoValidacao: ValidationOptions)=>{
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: EmailUnicoValidador,
        })
    }
}