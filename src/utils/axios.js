import axios from 'axios';
import env from 'react-dotenv';

export const APIKEY = env.API_KEY;
const BASEURL = 'http://api.openweathermap.org/data/2.5';

class Axios {
	constructor(baseUrl, apiKey = null) {
		this._baseUrl = baseUrl;
		this._apiKey = apiKey;
		this._instance = axios.create({
			baseURL: `${baseUrl}`
		});
	}

	get baseUrl() {
		return this._baseUrl;
	}

	get apiKey() {
		return this._apiKey;
	}

	async getData(urlParams) {
		const response = await this._instance.get('urlParams');
		return response.data;
	}
}

export const weather = new Axios(BASEURL);
