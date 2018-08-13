import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/api'
import { Movie } from '../../models/movie'
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
	movieHeader: Movie;
  api: Api = new Api();
  movieDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.movieHeader = navParams.data.movie;
  }

  ionViewDidLoad() {
    if(this.movieHeader)
      this.getDetail(this.movieHeader.id);
  }

  getDetail(id: number) {
    this.api.movieDetail(id)
      .then(res => this.movieDetail = res)
      .then(a => console.log('HEADER', this.movieHeader, 'DETAIL', this.movieDetail));  
  }

}
