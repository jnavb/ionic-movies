export interface Actor {
	adult: boolean;
	id: number;
	name: string;
	popularity: string;
	profile_path: string;
	known_for?: {
			vote_average: number;
			vote_count: number;
			id: number;
			video: boolean;
			media_type: string;
	}[];
}