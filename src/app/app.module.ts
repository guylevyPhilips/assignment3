import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DetailObjectComponent } from './detail-object/detail-object.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
