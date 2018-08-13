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
  	let query = event.target.value.trim();
   
    if (!query) {
      this.movieList = null;
      return;
    }

    this.api.searchMovie(query)
      .then(movies => this.movieList = movies);

  }

  clearMoviesList(event) {
  	this.movieList = null;
  }

}
