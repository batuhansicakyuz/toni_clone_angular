import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstSection } from './firstsection/firstsection.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { SecondSection } from './secondsection/secondsection.component';
import { ThirdSection } from './thirdsection/thirdsection.component';
import { FourthSection } from './fourthsection/fourthsection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
