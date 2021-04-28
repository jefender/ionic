import { Component, OnInit } from '@angular/core';
import { GeralService } from '../service/geral.service';
import { ValidacaoService } from '../service/validacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public cep; endereco; complemento; bairro; cidade; estado: string;

  public email: string; password: string; repassword: string; reEmail: string; name: string; lastname: string; telefone: string; dataNascimento = "01/01/2000"; genero = "m";

  constructor(public geralCtrl: GeralService, public validacaoCtr: ValidacaoService) { }

  ngOnInit() {
  }

  exibirCep(cep){
    this.geralCtrl.carregarCep(cep)
    .then ((response:any) =>{
      this.endereco = response.logradouro;
      this.complemento = response.complemento;
      this.bairro = response.bairro;
      this.cidade = response.localidade;
      this.estado = response.uf;
    })
    .catch((response) =>{
      alert("Confirme o CEP informado!!")
    });
  }

  formataData(){
    var data = this.dataNascimento.split('T');
    this.dataNascimento = data[0];
  }

  maskTelefone(valor: string) {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d)/, "($1");
    valor = valor.toString().replace(/(.{3})(\d)/, "$1)$2");
    if (valor.length == 9) {
      valor = valor.replace(/(.{1})$/, "-$1");
    } else if (valor.length == 10) {
      valor = valor.replace(/(.{2})$/, "-$1");
    } else if (valor.length == 11) {
      valor = valor.replace(/(.{3})$/, "-$1");
    } else if (valor.length == 12) {
      valor = valor.replace(/(.{4})$/, "-$1");
    } else if (valor.length > 12) {
      valor = valor.replace(/(.{4})$/, "-$1");
    }
    this.telefone = valor;
    this.validacaoCtr.validarTelefone(valor);
  }

  // validarCelular() {​​​​​​​​
  //   if (this.validacao.validacaoCelular(this.celular) == false) {​​​​​​​​
  //   this.erroCelular = true;
  //       }​​​​​​​​
  //   else {​​​​​​​​
  //   this.celularValido = this.celular;
  //   this.celularValido = this.celularValido.replace("(", "");
  //   this.celularValido = this.celularValido.replace(")", "");
  //   this.celularValido = this.celularValido.replace("-", "");
  //   this.erroCelular = false;
  //       }​​​​​​​​
  //     }​​​​​​​​  código para limpar no numero antes de ir para o banco
}
