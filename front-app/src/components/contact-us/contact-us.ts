import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
/**
 * Generated class for the ContactUsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUsComponent {

  text: string;

  userOrder;

  private apiUrl = 'http://localhost:8000/api/orders';

  constructor(public viewCtrl: ViewController, private httpClient: HttpClient,params: NavParams) {
    this.userOrder = params.get('userOrd');
  }

  data = {
    "name": "",
    "service_type": "",
    "clothe_type": "",
    "pay_type": "",
    "status": "На обработке",
    "customer_id": "",
  };

  // updateArt(){
  //   this.httpClient.put(this.apiUrl,this.data).subscribe(
  //           res => {
  //             alert(res);
  //           },
  //           err => {
  //             console.log("Error occured");
  //           });
  //    console.log('User update');
  // }

  addOrder(){
    this.data.customer_id = this.userOrder;
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

  toback() {
    this.viewCtrl.dismiss();
  }

}
