import {EventEmitter, Injectable, Output} from '@angular/core';
import {BackendService} from "./backend.service";
import {monthMap} from "../constants/global-constants";
import {WeatherDateTime} from "../models/weather-date-time";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _backendService: BackendService) {}

  @Output() getWeather: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  getWeatherDetails$( backendURL: string, params?: string) {
    return this._backendService.doGet(backendURL);
  }

  getDateTimeDetails(dateTimeStamp: string){
    let strippedDateTime: WeatherDateTime = new WeatherDateTime();
    strippedDateTime.date = dateTimeStamp.substr(8,2);
    strippedDateTime.month = monthMap.get(dateTimeStamp.substr(5,2));
    strippedDateTime.time = dateTimeStamp.substr(11,5)
    return strippedDateTime;
  }

  stripTime(){

  }


}
