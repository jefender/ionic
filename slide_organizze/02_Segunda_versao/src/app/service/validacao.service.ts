import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  public erroEmail; erroEmailConfirm; erroSenha; erroSenhaConfirm; erroNome; erroSobrenome; erroTelefone; confirma; confirmaEmail;

  constructor() { }

  validarEmail(valor: string) {

    if (valor == undefined || valor == '' || valor.search("@") == -1 || valor.indexOf(".") == -1){
      this.erroEmail = true;
    }else{
      this.erroEmail = false;
    }
    this.confirmaEmail = valor;
  }

  validarReemail(valor: string) {

    if (valor == undefined || valor == '' || valor.search("@") == -1 || valor.indexOf(".") == -1 || valor != this.confirmaEmail){
      this.erroEmailConfirm = true;
    }else{
      this.erroEmailConfirm = false;
    }
  }

  validarPassword(valor: string) {
    if (valor == undefined || valor == '' || valor.length <= 8 || valor.match(/[0-9]/) == null || valor.match(/[@#$%&*+=ç]/) == null){
      this.erroSenha = true;
    }else{
      this.erroSenha = false;
    }
    this.confirma = valor;
  }

  validarRepassword(valor: string){
    if (valor == undefined || valor == '' || valor.length <= 8 || valor.match(/[0-9]/) == null || valor.match(/[@#$%&*+=ç]/) == null || valor != this.confirma){
      this.erroSenhaConfirm = true;
    }else{
      this.erroSenhaConfirm = false;
    }
  }

  validarName(valor: string){
    if (valor == undefined || valor == '' || valor.length <= 2 || valor.match(/[0-9]/) != null || valor.match(/[@#$%&*+=ç]/) != null){
      this.erroNome = true;
    }else{
      this.erroNome = false;
    }
  }

  validarLastname(valor: string){
    if (valor == undefined || valor == '' || valor.length <= 4 || valor.match(/[0-9]/) != null || valor.match(/[@#$%&*+=ç]/) != null){
      this.erroSobrenome = true;
    }else{
      this.erroSobrenome = false;
    }
  }

  validarTelefone(valor: string){
    if (valor == undefined || valor == '' || valor.length <= 9){
      this.erroTelefone = true;
    }else{
      this.erroTelefone = false;
      //   Se o professor não explicar em aula, perguntar como fazer:
      //   07)	Telefone
      // - Informar para o usuário digitar no formato XX-XXXX-XXXX
      // - Validar os DDDs









      
    }
  }
}
