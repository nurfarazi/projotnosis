import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, private iab: InAppBrowser) {
    this.platform.ready().then(() => {
      let browser = this.iab.create('http://jeeonprototype.weebly.com/', '_self', {location: 'no', hardwareback: 'yes'});
      browser.executeScript({});
    });
  }

  onClick1() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('http://jeeonprototype.weebly.com/', '_self', {location: 'no', hardwareback: 'yes'});
      browser.executeScript({});
    });
  }

}
