import { Component, } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ModalController } from 'ionic-angular';
import { ContactUsComponent } from '../../components/contact-us/contact-us';
import { OrderInfoComponent } from '../../components/order-info/order-info';
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

  AllOrders : Observable<any>;

  private apiUrl = 'http://localhost:8000/api/orders';

  data = {
      "name": "",
      "service_type": "",
      "clothe_type": "",
      "pay_type": "",
      "status": "",
      "price": "",
      "customer_id": "",
    };  

  constructor(
    public navCtrl: NavController, 
    public app: App,
    private httpClient: HttpClient, 
    public modalCtrl: ModalController
  ) {

	  var returnObj = JSON.parse(localStorage.getItem("myKey"));
	  this.user_name = returnObj.data;
  	console.log('LocalData:'+ returnObj.data.name);
  }

  addOrder(){
    this.httpClient.post(this.apiUrl,this.data).subscribe(
            res => {
              console.log(res);
              console.log('Order add sucessfull');
            },
            err => {
              console.log("Error occured");
            });
  	 console.log('User add');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffPage');
  }

  presentModal() {
    const modal = this.modalCtrl.create(ContactUsComponent);
    modal.present();
  }

  openInfo(id) {
    const modal = this.modalCtrl.create(OrderInfoComponent,{ userId: id });
    modal.present();
  }

  getOrders(){
     console.log("function is working");
     this.articles = this.httpClient.get(this.apiUrl);
     this.articles.subscribe(data => {
        console.log('Orders: ', data);
        this.AllOrders = data;
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
  this.getOrders(); 

  setInterval(() => {
  this.getOrders(); 
  }, 3000);
 }

  
}

