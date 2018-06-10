import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
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

  constructor(public viewCtrl: ViewController) {
    console.log('Hello ContactUsComponent Component');
    this.text = 'Hello World';
  }

  toback() {
    this.viewCtrl.dismiss();
  }

}
