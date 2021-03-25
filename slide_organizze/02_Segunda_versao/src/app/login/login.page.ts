import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, public controleAlerta: AlertController) { }

  ngOnInit() {
  }

  carregarTela(tela) {
    this.navCtrl.navigateForward(tela);
  }

  async alertaConfirma(){
    const alert = await this.controleAlerta.create({
      header: 'Organizze',
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

}
