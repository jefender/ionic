import { Component, OnInit } from '@angular/core';
import { GeralService } from '../service/geral.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public erroEmail; erroEmailConfirm; erroSenha; erroSenhaConfirm; erroNome; erroSobrenome; erroTelefone: boolean = false;

  public cep; endereco; complemento; bairro; cidade; estado: string;

  constructor(public geralCtrl: GeralService) { }

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
}
