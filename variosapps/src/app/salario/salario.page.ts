import { Component, OnInit } from '@angular/core';
// import { builtinModules } from 'module';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.page.html',
  styleUrls: ['./salario.page.scss'],
})
export class SalarioPage implements OnInit {

  salario: number;
  bonus: number=0.05;
  bonificacao: number = 0;
  vc: number= 0 ;
  totalBonificacao: number = 0;
  inss: number = 0;
  vt: number = 0;
  va: number = 0;
  totalDesconto: number = 0;
  totalReceber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calcular(){
  this.bonificacao = this.salario*this.bonus;
  this.vc= this.salario*0.05;
  this.totalBonificacao = this.bonificacao + this.vc;
  this.inss = this.salario * 0.07;
  this.vt = this.salario * 0.06;
  this.va = this.salario * 0.045;
  this.totalDesconto = this.inss + this.vt + this.va;
  this.totalReceber = this.salario + this.totalBonificacao - this.totalDesconto;

  
  }

}

