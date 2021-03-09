import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.page.html',
  styleUrls: ['./calcular.page.scss'],
})



export class CalcularPage implements OnInit {

  valor01: number;
  valor02: number;
  resultado: number;

  constructor() { }

  ngOnInit() {
  //  alert("Página de Calular")
  }
  somar(){
    if(this.valor01==null || this.valor02==null)
    {
      alert("Digite os valores solicitados")
    }
      else
      {
    this.resultado = this.valor01 + this.valor02;
      }
  }
  subtracao(){
    if(this.valor01==null || this.valor02==null)
    {
      alert("Digite os valores solicitados")
    }
      else
      {
    this.resultado = this.valor01 - this.valor02;
      }
  }
    divisao(){
      if(this.valor01==null || this.valor02==null)
      {
        alert("Digite os valores solicitados")
      }
        else
        {
        
      this.resultado = this.valor01 / this.valor02;
 
        }
  }
    multiplicacao(){
      if(this.valor01==null || this.valor02==null)
      {
        alert("Digite os valores solicitados")
      }
        else
        {
      this.resultado = this.valor01 * this.valor02;
        }
  }
  


  

}