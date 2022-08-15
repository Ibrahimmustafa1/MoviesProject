import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { AuthGuard } from './auth.guard';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvshowDeetailsComponent } from './tvshow-deetails/tvshow-deetails.component';
import { YtsMovieDetailsComponent } from './yts-movie-details/yts-movie-details.component';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch:'full'},
  {path: 'home',canActivate:[AuthGuard],component:HomeComponent},
  {path: 'about',canActivate:[AuthGuard],component:AboutComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'tv',canActivate:[AuthGuard],component:TvComponent},
  {path: 'Favourits',canActivate:[AuthGuard],component:NetworkComponent},
  {path: 'movies',canActivate:[AuthGuard],component:MoviesComponent}, 
  {path: 'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path: 'movies/movieDetails/:x',canActivate:[AuthGuard],component:YtsMovieDetailsComponent},
  {path: 'actordetails/:id',canActivate:[AuthGuard],component:ActorDetailsComponent},
  {path:'TrendingMovieDetalis/:id',canActivate:[AuthGuard],component:MovieDetailsComponent},
  {path:'TrendingtvShowsDetalis/:id',canActivate:[AuthGuard],component:TvshowDeetailsComponent},
  {path: '**',canActivate:[AuthGuard],component:ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
