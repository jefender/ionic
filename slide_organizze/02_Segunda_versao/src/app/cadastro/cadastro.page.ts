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

  public logout:boolean=false;

  public cep; endereco; numero; complemento; bairro; cidade; estado: string;

  public email: string; password: string; repassword: string; reEmail: string; name: string; lastname: string; telefone: string; dataNascimento = "01/01/2000"; genero = "m";

  public usuario;

  public userLocal;

  constructor(public bancoCtrl: BancoService, public geralCtrl: GeralService, public validacaoCtr: ValidacaoService, public cameractrl: CameraService) { }

  ngOnInit() {
    this.carregarUser();
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

    if(this.logout ==true){
      this.inserirUser();
    }else{
      this.atualizarUsuario();
    }
  }

  inserirUser(){
    this.usuario = { email: this.email, senha: this.password, nome:this.name, sobrenome:this.lastname, telefone:this.telefone, sexo:this.genero, nasc: this.dataNascimento, cep:this.cep, endereco:this.endereco, numero:this.numero, complemento:this.complemento, bairro:this.bairro, cidade:this.cidade, foto: this.cameractrl.photo };

    this.bancoCtrl.adicionarUsuario(this.usuario)
    .then ((resposta: any)=>{
      switch(resposta.Resp){
        case '1':
          this.geralCtrl.alertaSimples("Usuário já cadastrado")
          break
        case '0':
          this.geralCtrl.alertaSimples("Usuário Cadastrado com sucesso")
          this.geralCtrl.carregarTela('login')
          break
      }
    })
    .catch((resposta) =>{
      this.geralCtrl.alertaSimples("Servidor não encontrado");
    });
  }

  atualizarUsuario(){
    this.usuario = {id_user:JSON.parse(localStorage.getItem('user')).id,email: this.email, senha: this.password, nome:this.name, sobrenome:this.lastname, telefone:this.telefone, sexo:this.genero, nasc: this.dataNascimento, cep:this.cep, endereco:this.endereco, numero:this.numero, complemento:this.complemento, bairro:this.bairro, cidade:this.cidade, foto: this.cameractrl.photo, nomefoto:JSON.parse(localStorage.getItem('user')).imagem};

    console.log(this.usuario)
    this.bancoCtrl.alterarUsuario(this.usuario)
    .then((resposta: any) => {
      switch (resposta.Resp) {
        case '1':
          this.userLocal= {
            id: resposta.id,
            email: resposta.email,
            senha: resposta.senha,
            nome:resposta.nome,
            sobrenome:resposta.sobrenome,
            telefone:resposta.telefone,
            sexo:resposta.sexo,
            nasc:resposta.nasc,
            cep:resposta.cep,
            endereco:resposta.endereco,
            numero:resposta.numero,
            complemento:resposta.complemento,
            bairro:resposta.bairro,
            cidade:resposta.cidade,
            imagem:resposta.imagem,
            receita:resposta.receita
          };
          localStorage.setItem('user',  JSON.stringify(this.userLocal) );
          localStorage.setItem('total', resposta.receita);
          this.geralCtrl.alertaSimples('Usuário Atualizado');
          this.geralCtrl.carregarTela('principal')
          break;
      }
    })
    .catch((resposta) => {
      this.geralCtrl.alertaSimples('Servidor não encontrado. Tente mais tarde!')
    });
  }

  carregarUser(){
    if(localStorage.getItem('user')==null || localStorage.getItem('user')==''){
      this.logout=true;
    }else{
      this.logout=false;
      this.email = JSON.parse(localStorage.getItem('user')).email;
      this.reEmail = JSON.parse(localStorage.getItem('user')).email;
      this.password = JSON.parse(localStorage.getItem('user')).senha;
      this.repassword = JSON.parse(localStorage.getItem('user')).senha;
      this.name = JSON.parse(localStorage.getItem('user')).nome;
      this.lastname = JSON.parse(localStorage.getItem('user')).sobrenome;
      this.telefone = JSON.parse(localStorage.getItem('user')).telefone;
      this.genero = JSON.parse(localStorage.getItem('user')).sexo;
      this.dataNascimento = JSON.parse(localStorage.getItem('user')).nasc;
      this.cep = JSON.parse(localStorage.getItem('user')).cep;
      this.numero = JSON.parse(localStorage.getItem('user')).numero;
      this.endereco = JSON.parse(localStorage.getItem('user')).endereco;
      this.complemento = JSON.parse(localStorage.getItem('user')).complemento;
      this.bairro = JSON.parse(localStorage.getItem('user')).bairro;
      this.cidade = JSON.parse(localStorage.getItem('user')).cidade;
      this.cameractrl.photoPadrao = 'http://localhost/organizze/imagens/'+JSON.parse(localStorage.getItem('user')).imagem+".jpg";
    }
  }

}
