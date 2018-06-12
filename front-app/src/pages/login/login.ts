import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { StuffPage } from '../stuff/stuff';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data = {
      "name": "",
      "email": "",
      "password": ""
    };

  private apiUrl = 'http://localhost:8000/api/login';

  constructor(
    public navCtrl: NavController,
    private httpClient: HttpClient,
    public alertCtrl: AlertController) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   getWhat(){
    this.httpClient.post(this.apiUrl,this.data).subscribe(
            res => {
              var serialObj = JSON.stringify(res);
              localStorage.setItem("myKey", serialObj);
              this.showAlertOk();
              this.navCtrl.push(StuffPage);
            },
            err => {
              this.showAlertError();
            });
  	 console.log('User add');
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'You entered incorrect data, try again.!',
      buttons: ['Try Again']
    });
    alert.present();
  }

  showAlertOk() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Welcome to App!',
      buttons: ['Continue']
    });
    alert.present();
  }

}
