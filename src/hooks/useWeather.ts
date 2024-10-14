import axios from "axios"
import { SearchType } from "../types";

export default function useWeather() {
    const fetchWeather = async (search : SearchType) => {
        const appId = '199abb3740064dfe2e30c424e10d0574';
        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},
            ${search.country}&appid=${appId}`;

            const data = await axios(geoURL)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        fetchWeather
    }
}
