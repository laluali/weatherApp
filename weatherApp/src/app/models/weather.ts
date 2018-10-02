import {WeatherDetail} from "./weather-detail";

export class Weather {
  "city":{
    "id":string,
    "name":string,
    "coord":{
      "lon":number,
      "lat":number},
    "country":string,
  };
  "cod":string;
  "message":number;
  "cnt":number;
  "list":WeatherDetail[];
}

