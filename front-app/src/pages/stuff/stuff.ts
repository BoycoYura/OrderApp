import { Component, } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ModalController } from 'ionic-angular';
import { ContactUsComponent } from '../../components/contact-us/contact-us';
import { OrderInfoComponent } from '../../components/order-info/order-info';
import { HomePage } from '../home/home';
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

  orders: Observable<any>;
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


  constructor(public navCtrl: NavController, public app: App,private httpClient: HttpClient, public modalCtrl: ModalController) {
	  var returnObj = JSON.parse(localStorage.getItem("myKey"));
    this.user_name = returnObj.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuffPage');
  }

  presentModal(user_order) {
    const modal = this.modalCtrl.create(ContactUsComponent,{ userOrd: user_order });
    modal.present();
  }

  openInfo(id) {
    const modal = this.modalCtrl.create(OrderInfoComponent,{ userId: id });
    modal.present();
  }

  getOrders(){
     console.log("function is working");
     this.orders = this.httpClient.get(this.apiUrl);
     this.orders.subscribe(data => {
        console.log('Orders: ', data);
        this.AllOrders = data;
      });
  }

  toHome(){
    this.navCtrl.push(HomePage);
  }

  getID(id){
    console.log(id);
  }

  ngOnInit() {
  this.getOrders(); 

  setInterval(() => {
  this.getOrders(); 
  }, 10000);
 }

}

