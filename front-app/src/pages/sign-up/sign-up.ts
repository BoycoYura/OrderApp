import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

  articles: Observable<any>;

  private apiUrl = 'http://localhost:8000/api/articles';

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  getWhat(){

  	console.log("function is working");
  	this.articles = this.httpClient.get(this.apiUrl);
  	this.articles
    .subscribe(data => {
      console.log('Articles: ', data);
    });
//   	console.log(this.httpClient.get(this.apiUrl,{headers: headers}).toPromise()
// .then(response => response.json().data));
  }

 //  	getArticles(){
  		
 //  	
	// }
}