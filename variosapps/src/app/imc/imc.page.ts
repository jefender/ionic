import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  altura: number;
  peso: number;
  imc: number=0;
  categoria: string="Categoria";
  obesidade: string="Obesidade";

  constructor() { }

  ngOnInit() {
  }

  calcular(){
    this.imc = parseFloat((this.peso / (this.altura * this.altura)).toFixed(1));
    
    if(this.imc < 18.5){
      this.categoria = "Magresa"
    }else if(this.imc < 24.9){
      this.categoria = "Normal"
    }else if(this.imc < 29.9){
      this.categoria = "SobrePeso"
    }else if(this.imc < 39.9){
      this.categoria = "Obesidade"
    }else if(this.imc > 40){
      this.categoria = "Obesidade Grave"
    }
    

    switch(this.categoria){
      case "Magresa":
        this.obesidade = "0"
        break
      case "Normal":
        this.obesidade = "0"
        break
      case "SobrePeso":
        this.obesidade = "1"
        break
      case "Obesidade":
        this.obesidade = "2"
        break
      case "Obesidade Grave":
        this.obesidade = "3"
        break
    
    }

  }

  limpar(){
    this.altura = 0;
    this.peso = 0;
    this.imc = 0;
    this.categoria = "Categoria";
    this.obesidade = "Obesidade";
  }

}
