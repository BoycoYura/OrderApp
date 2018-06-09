import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestProvider } from '../../providers/rest/rest';
import 'rxjs/add/operator/map';

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

  data = {
      "name": "",
      "email": "",
      "password": "",
      "password_confirmation": ""
    };

  private apiUrl = 'http://localhost:8000/api/register';

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient,public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

	  // this.restapiService.saveUser(this.user).then((result) => {
	  //   console.log(result);
	  // }, (err) => {
	  //   console.log(err);
	  // });


  getWhat(){
    this.httpClient.post(this.apiUrl,this.data).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            });
  	 console.log('User add');
    //
  	//   let info: any = {"email": "Joasgasghn@gmail.com"};
    //
    // const req = this.httpClient.post(this.apiUrl+'login', info)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log(typeof info);
    //       console.log(typeof JSON.stringify(info));
    //       console.log("Error occured");
    //     }
    //   );
  }


  // getWhat(){
  // 	console.log("function is working");
  // 	this.articles = this.httpClient.get(this.apiUrl);
  // 	this.articles
  //   .subscribe(data => {
  //     console.log('Articles: ', data);
  //   });
  // }
}