import { Component, OnInit } from '@angular/core';
import { BancoService } from '../service/banco.service';
import { GeralService } from '../service/geral.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  valorTotal; id_user: any;
  nome: any;
  valoresRecebido: any;

  constructor(public geralCtrl: GeralService, public banco: BancoService) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.valorTotal = JSON.parse(localStorage.getItem('total'));
    this.nome = JSON.parse(localStorage.getItem('user')).nome;
    this.id_user = JSON.parse(localStorage.getItem('user')).id;
    this.carregarValores();
  }

  alterar(){
  }

  deletar(){
  }

  carregarValores(){
    let id = {id: this.id_user};
    this.banco.allValor(id)
    .then((resposta: any) =>{
      this.valoresRecebido = resposta;
    })
    .catch((resposta) =>{
      this.geralCtrl.alertaSimples("Servidor não encontrado, Tente mais tarde!");
    });
  }
}
