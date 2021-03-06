import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from  '@angular/forms'
import { ContactUsComponent } from '../components/contact-us/contact-us';
import { OrderInfoComponent } from '../components/order-info/order-info';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { StuffPage } from '../pages/stuff/stuff';
import { SearchPipe } from './search-pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    StuffPage,
    OrderInfoComponent,
    ContactUsComponent,
    SearchPipe,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    StuffPage,
    OrderInfoComponent,
    ContactUsComponent,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
