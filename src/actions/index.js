import axios from 'axios';

const API_KEY = '63a8ae8558bc7893f0a85bbc78b2f21b';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //this returns a promise


  return {
    type: FETCH_WEATHER,
    payload: request //payload is an optional property that goes
    //a long with actions that can contain additional data that describes this action
  };
}
