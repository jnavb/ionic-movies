import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiMovies } from '../../providers/api-movies'
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
  movieDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiMovies) {
  this.movieHeader = navParams.data.movie;
  }

  ionViewDidLoad() {
    if(this.movieHeader)
      this.getDetail(this.movieHeader.id);
  }

  getDetail(id: number) {
    this.api.movieDetail(id)
      .subscribe(res => {this.movieDetail = res});
  }

}
