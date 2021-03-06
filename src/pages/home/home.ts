import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiMovies } from '../../services/api-movies'
import { Movie } from '../../models/movie'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private searchQuery: string = '';
  private movieSearch: Array<Movie> = null;
  private moviesInTheather: Array<Movie> = [];
  private moviesPopular: Array<Movie> = [];

  constructor(private navCtrl: NavController, private api : ApiMovies) {}

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
