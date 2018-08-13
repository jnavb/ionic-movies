import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Api } from '../../providers/api'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  api: Api = new Api();
  movieList: Array<Object> = null;

  constructor(public navCtrl: NavController) {}

  getMovies(event) {
  	let query = event.target.value;

    if (!query) {
      this.movieList = null;
      return;
    }

    query = query.trim();
    if(query == '') {
      return;
    }

    this.api.searchMovie(query)
      .then(movies => this.movieList = movies);
  }

  pushMovieDetail(movie) {
    this.navCtrl.push("MovieDetailsPage", {movie: movie});
  }

  clearMoviesList(event) {
  	this.movieList = null;
  }

}
