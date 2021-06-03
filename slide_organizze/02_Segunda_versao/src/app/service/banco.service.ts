import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  caminho: string = 'http://localhost/organizze/php/';

  constructor(public httpCtrl:HttpClient) { }

  adicionarUsuario(usuario: any){
    let url = this.caminho + "addUser.php";
    let headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.httpCtrl.post(url, usuario, {headers: headers}).toPromise();
  }

  logar(autenticacao:any){
    let url = this.caminho + "autenticar.php";
    let headers = new HttpHeaders ({'Content-Type': 'application/json'});
    return this.httpCtrl.post(url, autenticacao, {headers: headers}).toPromise();
  }

  alterarUsuario(usuario: any){
    let url = this.caminho + 'atualizarUser.php';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.httpCtrl.post(url, usuario, {headers: headers}).toPromise();
  }
}
