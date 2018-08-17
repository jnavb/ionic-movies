import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Movie } from '../models/movie'

@Injectable()
export class ApiMovies {
	private readonly apiKey: string = '0e2f98aac2e4f9385a1e270de87cd877';
	private readonly baseUrl: string = 'https://api.themoviedb.org/3/'

	constructor(public http: HttpClient) {
	}

	movieSearch = (query: string) => {
		let params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('query', query)
			.set('language', 'en-US')
			.set('page', '1')
			.set('include_adult', 'false');

		return this.http.get(`${this.baseUrl}search/movie?`, { params })
			.map((json:any) => json.results);
	}

	movieDetail = (id: number) => {
		let params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('language', 'en-US');

		return this.http.get(`${this.baseUrl}movie/${id}`, { params })
	} 

	popularMovies = () => {
		let params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('language', 'en-US')
			.set('page', '1');

		return this.http.get<Movie[]>(`${this.baseUrl}movie/popular?`,{ params })
			.map((json:any) => json.results);
	}

	inTheathers = (dateGte:string, dateLte: string) => {
		let params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('primary_release_date.gte', dateGte)
			.set('primary_release_date.lte', dateLte)
			.set('language', 'en-US')
			.set('page', '1')
			.set('include_adult', 'false')
			.set('include_video', 'false')
			.set('sort_by', 'release_date.desc');
		
		return this.http.get<Movie[]>(`${this.baseUrl}discover/movie?`, { params })
			.map((json:any) => json.results)
	}

	popularActors = () => {
		let params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('language', 'en-US')
			.set('page', '1');

		return this.http.get(`${this.baseUrl}person/popular?`, { params })
			.map((json:any) => json.results);
	}
	actorSearch = (personId:string) => {
		let params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('query', personId)
			.set('language', 'en-US')
			.set('page', '1')
			.set('include_adult', 'false');

		return this.http.get(`${this.baseUrl}search/person?`, { params })
			.map((json:any) => json.results);
	}
}