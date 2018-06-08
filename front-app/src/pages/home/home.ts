import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toRegisterPage(){
  	this.navCtrl.push(SignUpPage);
  }

  toLoginPage(){
  	this.navCtrl.push(LoginPage);
  }

}
