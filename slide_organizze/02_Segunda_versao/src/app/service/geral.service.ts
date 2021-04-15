import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  constructor(public navCtrl: NavController, public controleAlerta: AlertController, public http: HttpClient) { }

  async alertaConfirma(){
    const alert = await this.controleAlerta.create({
      header: 'Organizze!',
      message: 'Deseja realmente sair dessa tela?',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'secundary',
          handler: () => {
            this.navCtrl.navigateForward('folder/Inbox')
          }
        },
        {
          text: 'Não',
          role: 'não',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  carregarTela(tela) {
    this.navCtrl.navigateForward(tela);
  }

  async alertaSimples(msn){
    const alert = await this.controleAlerta.create({
      header: 'APP',
      subHeader: 'Organizze',
      message: msn,
      buttons: ['OK']
    });
    await alert.present();
  }

  carregarCep(cep){
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
    let header  = new HttpHeaders ({'content-Type': 'application/json'});
    return this.http.get(url).toPromise();
  }

}
