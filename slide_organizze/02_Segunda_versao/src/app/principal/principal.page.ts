import { Component, OnInit } from '@angular/core';
import { GeralService } from '../service/geral.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  valorTotal: any;
  nome: any;

  constructor(public geralCtrl: GeralService) {
    this.valorTotal = JSON.parse(localStorage.getItem('total'));
    this.nome = JSON.parse(localStorage.getItem('user')).nome;
   }

  ngOnInit() {
  }

}
