import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public erroEmail; erroEmailConfirm; erroSenha; erroSenhaConfirm; erroNome; erroSobrenome; erroTelefone: boolean = false;

  constructor(public navCtrl: NavController, public controleAlerta: AlertController) { }

  ngOnInit() {
  }

  async alertaSimples(){
    const alert = await this.controleAlerta.create({
      header: 'APP',
      subHeader: 'Organizze',
      message: 'Precisamos programar esse botão',
      buttons: ['OK']
    });
    await alert.present();
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
