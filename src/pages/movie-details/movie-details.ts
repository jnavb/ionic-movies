import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ApiMovies } from '../../services/api-movies'
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
	@ViewChild('slider') slider: Slides;
  segmentPage = 'details';
  movieHeader: Movie;
  movieDetail: Movie;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiMovies) {
  this.movieHeader = navParams.data.movie;
  }

  ionViewDidLoad() {
    if(this.movieHeader)
      this.getDetail(this.movieHeader.id);
    console.log('HEADER', this.movieHeader)
    console.log('DETAIL', this.movieDetail)
  }

  getDetail(id: number) {
    this.api.movieDetail(id)
      .subscribe(res => {
        this.movieDetail = res;
        console.log('DETAIL', this.movieDetail)
      });
  }

  selectedTab(index) {
    this.slider.slideTo(index);
  }
  
  slideChanged() {
  if (this.slider.getActiveIndex().toString() !== this.segmentPage)        
    switch(this.slider.getActiveIndex()) {
      case 0:  this.segmentPage = 'details'; break;
      case 1:  this.segmentPage = 'summary'; break;    
      case 2:  this.segmentPage = 'cast'; break;    
    }
  }

}
