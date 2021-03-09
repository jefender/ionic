import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodizio',
  templateUrl: './rodizio.page.html',
  styleUrls: ['./rodizio.page.scss'],
})
export class RodizioPage implements OnInit {
  private placa: String;
  private dia: String="..";
  private final: String;

  constructor() { }

  ngOnInit() {
  }

verificar(){
this.final = this.placa.charAt(this.placa.length-1);

if(this.final == "1" || this.final =="2"){
this.dia = "Segunda-Feira"
}
else if (this.final == "3" || this.final == "4"){
  this.dia = "Terça-Feira"
}
else if (this.final == "5" || this.final == "6"){
  this.dia = "Quarta-Feira"
}
else if (this.final == "7" || this.final == "8"){
  this.dia = "Quinta-Feira"
}
else{
  this.dia = "Sexta-Feira"
}

}

}
