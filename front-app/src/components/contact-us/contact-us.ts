import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUsComponent {

  text: string;
  userOrder;

  private apiUrl = 'http://localhost:8000/api/orders';

  constructor(public viewCtrl: ViewController, private httpClient: HttpClient,params: NavParams,public alertCtrl: AlertController) {
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

  addOrder(){
    this.data.customer_id = this.userOrder;
    this.httpClient.post(this.apiUrl,this.data).subscribe(
            res => {
              console.log(res);
              console.log('Order add sucessfull');
              this.showAlertOk();
            },
            err => {
              console.log("Error occured");
              this.showAlertOk();
            });
  	 console.log('User add');
  }

  toback() {
    this.viewCtrl.dismiss();
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'You entered incorrect data, try again.!',
      buttons: ['Try Again']
    });
    alert.present();
  }

  showAlertOk() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'You order was add success!',
      buttons: ['Continue']
    });
    alert.present();
  }

}
