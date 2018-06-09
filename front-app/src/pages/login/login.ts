import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { StuffPage } from '../stuff/stuff';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController,private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   getWhat(){
    this.httpClient.post(this.apiUrl,this.data).subscribe(
            res => {
              var serialObj = JSON.stringify(res);
              localStorage.setItem("myKey", serialObj);
              this.navCtrl.push(StuffPage);
            },
            err => {
              console.log("Error occured");
            });
  	 console.log('User add');
  }

}
