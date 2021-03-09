import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  consumo: number;
  couvert: number=5;
  dividir: number;
  taxa: number;
  total: number;
  pessoa: number;

  constructor() { }

  ngOnInit() {
  }


calcular(){
  this.taxa = (this.consumo*0.10).toFixed(2);
  this.total = (parseFloat(this.consumo) + parseFloat(this.taxa) + parseFloat(this.couvert)).toFixed(2);
  this.pessoa = (this.total / this.dividir).toFixed(2);
}

}