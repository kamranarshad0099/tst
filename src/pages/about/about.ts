import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ContactPage} from'../contact/contact';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	contactPage=ContactPage;

  constructor(public navCtrl: NavController) {

  }

}
