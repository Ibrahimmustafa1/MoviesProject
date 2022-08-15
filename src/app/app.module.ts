import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { PeopleComponent } from './people/people.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { YtsMovieDetailsComponent } from './yts-movie-details/yts-movie-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvshowDeetailsComponent } from './tvshow-deetails/tvshow-deetails.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ReversePipe } from './reverse.pipe'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeHeaderComponent } from './home-header/home-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    TvComponent,
    NetworkComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ErrorpageComponent,
    PeopleComponent,
    FilterPipe,
    YtsMovieDetailsComponent,
    MovieDetailsComponent,
    TvshowDeetailsComponent,
    ActorDetailsComponent,
    ReversePipe,
    HomeHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule,NgxPaginationModule,BrowserAnimationsModule,CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
