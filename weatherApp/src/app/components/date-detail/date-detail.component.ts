import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SAMPLE_RESP} from "../../constants/global-constants";
import {WeatherService} from "../../services/weather.service";
import {Weather} from "../../models/weather";
import {Observable} from "rxjs";

@Component({
  selector: 'weather-date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['./date-detail.component.css']
})
export class DateDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  };
}
