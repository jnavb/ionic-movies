import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiMovies } from '../../providers/api-movies'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  movieSearch: Array<Object> = null;
  moviesInTheather: Array<Object> = [];
  moviesPopular: Array<Object> = [];

  constructor(public navCtrl: NavController, public api : ApiMovies) {}

  getMovies(event) {
    let query = event.target.value;

    if (!query) {
      this.movieSearch = null;
      return;
    }
    query = query.trim();
    if(query == '') {
      return;
    }

    this.api.movieSearch(query)
      .subscribe(movies => {this.movieSearch = movies});
  }

  pushMovieDetail(movie) {
    this.navCtrl.push("MovieDetailsPage", {movie: movie});
  }

  clearMoviesList() {
    this.movieSearch = null;
  }

  ionViewDidLoad() {
    this.searchMoviesInTheathers();
    this.searchPopularMovies();
  }

  searchMoviesInTheathers() {
    let dateToday = new Date();
    let today = dateToday.toISOString().substring(0,10);
    
    dateToday.setDate(dateToday.getDate() - 7);
    let sevenDaysAgo = dateToday.toISOString().substring(0,10);

    this.api.inTheathers(sevenDaysAgo, today)
      .subscribe(res => {this.moviesInTheather = res.slice(0,res.length/2)})
  }

  searchPopularMovies() {
    this.api.popularMovies()
      .subscribe(res => {this.moviesPopular = res.slice(0,res.length/2)})
  }
}
