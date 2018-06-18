import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { StuffPage } from '../stuff/stuff';
import { HomePage } from '../home/home';
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
              this.navCtrl.push(HomePage);
            },
            err => {
              this.showAlertError(String(err.error.errors.name),String(err.error.errors.email),String(err.error.errors.password));
            });
  	 console.log('User add');
  }


  showAlertError(ms1,ms2,ms3) {

    // console.log("Ms 1:"+ typeof ms1);
    // console.log("Ms 2:"+ms2);
    // console.log("Ms 3:"+ms3);

    if(ms1 == "undefined"){
      ms1 = '';
    }

    if(ms2 == "undefined"){
      ms2 = '';
    }

    if(ms3 == "undefined"){
      ms3 = '';
    }

    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: ms1+"<br>"+ms2+"<br>"+ms3,
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
