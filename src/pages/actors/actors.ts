import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiMovies } from '../../services/api-movies'

@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html',
})
export class ActorsPage {
	public listFromSearch: Array<Object> = null;
	public actorsPopular: Array<Object> = [];

	constructor(public navCtrl: NavController, public api: ApiMovies) {
  }

  ionViewDidLoad() {
    this.searchPopularActors();
  }

  searchPopularActors() {
  	this.api.popularActors()
  		.subscribe(res => {this.actorsPopular = res.slice(0,10);});
  }
  
  getActors(event){
  	let query = event.target.value;

    if (!query) {
      this.listFromSearch = null;
      return;
    }
    query = query.trim();
    if(query == '') {
      return;
    }

    this.api.actorSearch(query)
      .subscribe(actors => {this.listFromSearch = actors});
  }

  clearSearchbar() {
  	this.listFromSearch = null;
  }

  pushActorDetail(actorId) {
  }
}
