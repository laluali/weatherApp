import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {WeatherService} from "../../../services/weather.service";
import {isNullOrUndefined} from "util";
import {WeatherDateTime} from "../../../models/weather-date-time";

@Directive({
  selector: '[weatherDateStripper]'
})
export class DateStripperDirective{

  @Input() weatherDateStripper: string;
  @Input() isDate: boolean;
  @Input() isTime: boolean;
  private currentDate: WeatherDateTime;

  constructor(private  el: ElementRef,
              private weatherService: WeatherService) {
    setTimeout (() => {
      this.currentDate = this.weatherService.getDateTimeDetails(this.weatherDateStripper);
      if(!isNullOrUndefined(this.isTime)){
        this.el.nativeElement.innerHTML = this.currentDate.time.bold();
      }else if(!isNullOrUndefined(this.isDate)){
        this.el.nativeElement.innerHTML = this.currentDate.date.bold().concat(' ').concat(this.currentDate.month);
      }
    }, 0)
  }

}
