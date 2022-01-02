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

	get instance() {
		return this._instance;
	}
}

class OpenWeatherMap extends Axios {
	constructor(baseUrl, apiKey = null) {
		super(baseUrl, apiKey);
	}

	async getCurrentByCityId(cityId) {
		const endpoint = `/weather?appid=${this.apiKey}&id=${cityId}`;
		try {
			const response = await this.instance.get(endpoint);
			return response.data;
		} catch (error) {
			return { error };
		}
	}
}

export const weather = new OpenWeatherMap(BASEURL, APIKEY);
