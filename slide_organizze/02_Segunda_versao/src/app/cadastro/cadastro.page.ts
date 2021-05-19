import { Component, OnInit } from '@angular/core';
import { BancoService } from '../service/banco.service';
import { CameraService } from '../service/camera.service';
import { GeralService } from '../service/geral.service';
import { ValidacaoService } from '../service/validacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public cep; endereco; numero; complemento; bairro; cidade; estado: string;

  public email: string; password: string; repassword: string; reEmail: string; name: string; lastname: string; telefone: string; dataNascimento = "01/01/2000"; genero = "m";

  public usuario;

  constructor(public bancoCtrl: BancoService, public geralCtrl: GeralService, public validacaoCtr: ValidacaoService, public cameractrl: CameraService) { }

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
      this.geralCtrl.alertaSimples("Confirme o CEP informado!!");
    });
  }

  formataData(){
    var data = this.dataNascimento.split('T');
    this.dataNascimento = data[0];
  }

  // código para criar uma mascara no numero do telefone (XX)XXXXX-XXXX
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
    this.validarTelefone(valor);
  }

  // código para limpar no numero antes de ir para o banco
  validarTelefone(valor) {​​​​​​​​
    valor = this.telefone;
    valor = valor.replace("(", "");
    valor = valor.replace(")", "");
    valor = valor.replace("-", "");
  }​​​​

  salvar(){
    if(
      this.validacaoCtr.erroEmail == true ||
      this.validacaoCtr.erroEmailConfirm == true ||
      this.validacaoCtr.erroSenha == true ||
      this.validacaoCtr.erroSenhaConfirm == true ||
      this.validacaoCtr.erroNome == true ||
      this.validacaoCtr.erroSobrenome == true ||
      this.validacaoCtr.erroTelefone == true ||
      this.email == "" ||
      this.password == "" ||
      this.repassword == "" ||
      this.name == "" ||
      this.lastname == "" ||
      this.telefone == "" ||
      this.email == undefined ||
      this.password == undefined ||
      this.repassword == undefined ||
      this.name == undefined ||
      this.lastname == undefined ||
      this.telefone == undefined
      ){
      this.geralCtrl.alertaSimples("Por favor! Preencher os campos Necessários");
      return false;
      }

    this.usuario = { email: this.email, senha: this.password, nome:this.name, sobrenome:this.lastname, telefone:this.telefone, sexo:this.genero, nasc: this.dataNascimento, cep:this.cep, endereco:this.endereco, numero:this.numero, complemento:this.complemento, bairro:this.bairro, cidade:this.cidade, foto: this.cameractrl.photo };

    this.inserirUser();
  }

  inserirUser(){
    this.bancoCtrl.adicionarUsuario(this.usuario)
    .then ((resposta: any)=>{
      switch(resposta.Resp){
        case '1':
          this.geralCtrl.alertaSimples("Usuário já cadastrado")
          break
        case '0':
          this.geralCtrl.alertaSimples("Usuário Cadastrado com sucesso");
          this.geralCtrl.carregarTela('login')
          break
      }
    })
    .catch((resposta) =>{
      this.geralCtrl.alertaSimples("Servidor não encontrado");
    });
  }

  updateUser(){

  }
}
