import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
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

  data = {
    "title": "New article 2",
    "body": "Article body 2"
  };

  constructor(public viewCtrl: ViewController, private httpClient: HttpClient) {
    console.log('Hello ContactUsComponent Component');
    this.text = 'Hello World';
  }

  updateArt(){
    this.httpClient.put('http://localhost:8000/api/articles/4',this.data).subscribe(
            res => {
              alert(res);
            },
            err => {
              console.log("Error occured");
            });
     console.log('User update');
  }

  toback() {
    this.viewCtrl.dismiss();
  }

}
