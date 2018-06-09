import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  articles: Observable<any>;

  Allartic : Observable<any>;

  private apiUrl = 'http://localhost:8000/api/articles';

  data = {
      "title": "New article 2",
      "body": "Article body 2"
    };  

  constructor(public navCtrl: NavController, public app: App,private httpClient: HttpClient) {

	var returnObj = JSON.parse(localStorage.getItem("myKey"));
	this.user_name = returnObj.data;
  	console.log('LocalData:'+ returnObj.data.name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffPage');
  }

  getArticles(){
     console.log("function is working");
     this.articles = this.httpClient.get(this.apiUrl);
     this.articles.subscribe(data => {
        console.log('Articles: ', data);
        this.Allartic = data;
      });
  }




  updateArticles(){
    this.httpClient.put('http://localhost:8000/api/articles/8',this.data).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            });
     console.log('User update');
  }

  getID(id){
    console.log(id);
  }

  ngOnInit() {
  this.getArticles(); 

  setInterval(() => {
  this.getArticles(); 
  }, 3000);
 }

  
}

