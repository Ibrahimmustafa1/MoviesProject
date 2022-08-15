import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 search:any=null;
  trendinMovies:any[]=[];
  TvShows:any[]=[];
  actors:any[]=[];
  data:any
  token:any= localStorage.getItem('userToken')
  decodedToken:any=jwtDecode(this.token)
  imgpre:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _trendingService: TrendingService) { 
    _trendingService.getTrending('movie').subscribe((res)=>{
      this.trendinMovies = res.results.slice(0,10); 
    })
    _trendingService.getTrending('tv').subscribe((res)=>{
      this.TvShows = res.results.slice(0,10); 
      
      
    })
    _trendingService.getTrending('person').subscribe((res)=>{
      this.actors = res.results.slice(0,10); 
    })
    this._trendingService.val.subscribe((res)=>{
     this.search=this._trendingService.val.getValue()
    })

  }
  
  ngOnInit(): void {
  }

}
