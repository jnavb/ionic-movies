import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiFilmaffinity {
	private readonly baseUrl: string = 'https://filmaffinity-unofficial.herokuapp.com'

	constructor(public http: HttpClient) {
	}

	searchFilms = (query:string) => {
		let params = new HttpParams()
			.set('q', query)
			.set('lang', 'EN')

		return this.http.get(`${this.baseUrl}/api/search?`, { params });
	}

	detailFilm = (id:string) => {
		let params = new HttpParams()
			.set('lang', 'EN')

		return this.http.get(`${this.baseUrl}/api/movie/${id}`, { params });
	}
}