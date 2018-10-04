import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SAMPLE_RESP} from "../../constants/global-constants";
import {Weather} from "../../models/weather";
import {WeatherService} from "../../services/weather.service";
import {WeatherDateTime} from "../../models/weather-date-time";
import {noop} from "rxjs";

@Component({
  selector: 'weather-date-table',
  templateUrl: './date-table.component.html',
  styleUrls: ['./date-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTableComponent implements OnInit {

  constructor(private weatherService: WeatherService,
              private ref: ChangeDetectorRef) {
    setTimeout (() => {
      this.ref.detectChanges();
    },0);
  }

  weather: Weather;
  columnHeaders: Array<string> = [];
  rowHeaders: Array<string> = [];
  rowData: any = [];
  weatherDate: WeatherDateTime;

  ngOnInit() {
    this.weatherService.getWeatherDetails$(SAMPLE_RESP).subscribe(
      (isSuccess:Weather) => {
        this.weather = isSuccess;
        this.weather.list.forEach(
          item =>{
            this.weatherDate = this.weatherService.getDateTimeDetails(item.dt_txt);
            let itemDate = this.weatherDate.date.concat(' ').concat(this.weatherDate.month);
            this.columnHeaders.includes(itemDate)?noop():this.columnHeaders.push(itemDate);
            this.rowHeaders.includes(this.weatherDate.time)?noop():this.rowHeaders.push(this.weatherDate.time);
            this.rowData.push({[itemDate] : [[item]]});
          }
        );
        this.rowHeaders = this.rowHeaders.sort();
        console.log(this.rowData.includes(this.columnHeaders[0]));
        //this.rowData = this.rowData.sort();
       /* let rowGroup = this.groupBy(this.rowData, 'date');
        console.log(rowGroup);
        this.columnHeaders.forEach(
          (column, i) => {
            let tempArray = new Array(this.rowHeaders.length).fill('-');
            isNullOrUndefined(rowGroup[column]) ?  noop() : this.rowHeaders[column] = rowGroup[column].item;
          }
        );*/
        console.log(this.rowData);
        return isSuccess;
      },
      isFailure => {
        return isFailure;
      }
    );
  }

  groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

}
