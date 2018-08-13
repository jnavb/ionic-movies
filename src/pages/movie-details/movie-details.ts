import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
	movieHeader: Object = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.movieHeader = navParams.data.movie;
  }

  ionViewDidLoad() {
  }

}
