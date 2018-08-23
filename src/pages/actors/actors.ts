import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiMovies } from '../../services/api-movies'
import { Actor } from '../../models/actor'

@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html',
})
export class ActorsPage {
	private listFromSearch: Array<Actor> = null;
	private actorsPopular: Array<Actor> = [];

	constructor(private navCtrl: NavController, private api: ApiMovies) {
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
