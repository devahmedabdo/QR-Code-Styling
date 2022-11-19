import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { GenerateComponent } from './views/generate/generate.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import { SwiperModule } from 'swiper/angular';
import { HistoryComponent } from './views/history/history.component';
import { LoaderComponent } from './layout/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenerateComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FontAwesomeModule,

    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,

    MatProgressSpinnerModule,

    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
