import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the OrderInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-info',
  templateUrl: 'order-info.html'
})
export class OrderInfoComponent {

  articles: Observable<any>;

  AllOrders : Observable<any>;

  text: string;

  orderName;
  orderType;
  orderClothe;
  orderPay;
  orderStatus;
  orderPrice;
  userID;
  UserOrd;
  AdminState;

  data = {
    "status": "Обработан",
    "price": ""
  }; 

  private apiUrl = 'http://localhost:8000/api/orders/';

  constructor(public viewCtrl: ViewController, private httpClient: HttpClient,params: NavParams) {
    {
      this.userID = params.get('userId');

      var returnObj = JSON.parse(localStorage.getItem("myKey"));
      this.AdminState = returnObj.data.is_admin;
      console.log('Admin State:'+ this.AdminState);
    }
  }

  updateOrder(){
    this.httpClient.put(this.apiUrl + this.userID, this.data).subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            });
     console.log('User update');
  }

  getID(){
    alert();
  }

  toback() {
    this.viewCtrl.dismiss();
  }

  UpdateController(){
    var returnObj = JSON.parse(localStorage.getItem("myKey"));

    if(returnObj.data.is_admin == '1'){
      alert('Welcome admin');
    }
  }

  getOrder(){
    console.log("function is working");
    this.articles = this.httpClient.get(this.apiUrl+ this.userID);
    this.articles.subscribe(data => {
       JSON.stringify(data);
       this.orderName = data.name;
       this.orderType = data.service_type;
       this.orderClothe = data.clothe_type;
       this.orderPay = data.pay_type;
       this.orderStatus = data.status;
       this.orderPrice = data.price;
       this.UserOrd = data.customer_id;
     });
  }

    ngOnInit() {
      this.getOrder(); 

      setInterval(() => {
      this.getOrder(); 
      }, 10000);
    }

}
