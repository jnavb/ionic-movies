export class Api {
	private readonly API_KEY: string = '0e2f98aac2e4f9385a1e270de87cd877';

	constructor() {}

	movieSearch = (query: string) => {
		return fetch(`https://api.themoviedb.org/3/search/movie?
			query=${query}
			&api_key=${this.API_KEY}
			&language=en-US
			&page=1
			&include_adult=false`)
			.then(data => data.json())
			.then(json => json.results);
	}

	movieDetail = (id: number) => {
		return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`)
			.then(data => data.json());
	} 
}

