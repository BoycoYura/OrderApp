import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage} from '../home/home';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  data = {
      "name": "",
      "email": "",
      "password": "",
      "password_confirmation": ""
    };

  private apiUrl = 'http://localhost:8000/api/register';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private httpClient: HttpClient,
    public alertCtrl: AlertController) 
    {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
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

  getWhat(){
    this.httpClient.post(this.apiUrl,this.data)
    .subscribe(
            res => {
              console.log(res);
              this.showAlertOk();
              this.navCtrl.push(HomePage);
            },
            err => {
              this.data.password = '';
              this.data.password_confirmation = '';
              this.showAlertError();
            });
  	 console.log('User Logined');
  }

}