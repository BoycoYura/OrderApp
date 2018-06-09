import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the StuffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stuff',
  templateUrl: 'stuff.html',
})
export class StuffPage {
	public userDetails: any;
	public myinfo: any;

	public user_name;

  constructor(public navCtrl: NavController, public app: App) {

	var returnObj = JSON.parse(localStorage.getItem("myKey"));
	this.user_name = returnObj.data;
  	console.log('LocalData:'+ returnObj.data.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffPage');
  }

}
