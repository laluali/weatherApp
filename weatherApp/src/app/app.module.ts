import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { BodyComponent } from './components/core/body/body.component';
import { DateDetailComponent } from './components/date-detail/date-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { DateStripperDirective } from './components/core/directive/date-stripper.directive';
import { DateTableComponent } from './components/date-table/date-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DateDetailComponent,
    DateStripperDirective,
    DateTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
