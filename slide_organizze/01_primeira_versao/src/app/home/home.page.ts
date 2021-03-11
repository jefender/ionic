import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.navigateForward("login");
  }
  formulario() {
    this.navCtrl.navigateForward("formulario");
  }
}