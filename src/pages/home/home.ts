import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {FacebookPage} from '../facebook/facebook';
import {SecondPage} from '../second/second';
import {ToastController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	aboutPage=AboutPage;
	
	facebookPage=FacebookPage;
    
  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
	  

  }
pushPage(){
		  this.navCtrl.push(SecondPage)
	  }
	  presentToast()
	  {
		 let toast = this.toastCtrl.create({
message: 'User was added sucessfully',
showCloseButton:true,
closeButtonText:'ok',
position:'middle'
		 });
toast.present();		 
	  }
}
