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

  public email: string; password: string; repassword: string; reEmail: string; name: string; lastname: string; telefone: string;

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
}
