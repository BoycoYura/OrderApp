import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';
import { StuffPage } from '../stuff/stuff';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private apiUrl = 'http://localhost:8000/api/logout';

  user_data = {};
  userName;

  constructor(public navCtrl: NavController,private httpClient: HttpClient) {
	  var returnObj = JSON.parse(localStorage.getItem("myKey"));
    this.user_data = returnObj;
    this.userName = returnObj.data.name;
  }

  toRegisterPage(){
  	this.navCtrl.push(SignUpPage);
  }

  toLoginPage(){
  	this.navCtrl.push(LoginPage);
  }

  toStuffPage(){
    this.navCtrl.push(StuffPage);
  }

  logout(){
    this.httpClient.post(this.apiUrl,this.user_data).subscribe(
      res => {
        console.log(res);
        this.userName = ''
        console.log('User Loggout');
      },
      err => {
        console.log("Error occured");
      });

  }

}
