import { Component, OnInit } from '@angular/core';
import { BancoService } from '../service/banco.service';
import { GeralService } from '../service/geral.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.page.html',
  styleUrls: ['./despesa.page.scss'],
})
export class DespesaPage implements OnInit {
  public despesa; dataAtual; titulo; descricao; valor; valorTotal; idUser; tipo: any;
  public inserir: boolean = true;

  constructor(public geralCtrl: GeralService, public banco: BancoService) {
    this.idUser= JSON.parse(localStorage.getItem('user')).id;
    this.tipo="D";
    var data= new Date();
    var dia= data.getDate();
    var mes= data.getMonth() +1;
    var ano= data.getFullYear();
    this.dataAtual = ano + "/" + mes + "/" + dia;
    this.valorTotal= JSON.parse(localStorage.getItem('total'));
   }

  ngOnInit() {
  }

  salvarDespesa(){
    if(
      this.dataAtual=="" ||
      this.dataAtual==undefined ||
      this.titulo=="" ||
      this.titulo==undefined ||
      this.descricao=="" ||
      this.descricao==undefined ||
      this.valor=="" ||
      this.valor==undefined
      ){
        this.geralCtrl.alertaSimples("Por favor, preencher todos os campos")
        return false;
    }
    this.valorTotal = this.valorTotal - this.valor;

    if(this.inserir==true){
      this.inserirDespesa();
    }else{
      this.atualizarDespesa();
    }
  }

  inserirDespesa(){
    this.despesa= {
      idUsuario: this.idUser,
      data: this.dataAtual,
      titulo: this.titulo,
      descricao: this.descricao,
      valor: this.valor,
      tipo: this.tipo,
      total: this.valorTotal
    }
    this.banco.addVAlor(this.despesa)
    .then((resposta:any) =>{
      localStorage.setItem('total', JSON.stringify(this.valorTotal));
      this.geralCtrl.carregarTela('principal')
    })
    .catch((resposta) =>{
      this.geralCtrl.alertaSimples("Impossível lançar o valor")
    })
  }

  atualizarDespesa(){
  }


}
