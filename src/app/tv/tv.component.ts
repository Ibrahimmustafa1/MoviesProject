import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  search:any=null;
  TvShows:any[]=[];
  imgpre:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _trendingService: TrendingService) { 
    _trendingService.getTrending('tv').subscribe(res =>{
      this.TvShows = res.results; 
    })
    _trendingService.val.subscribe(res =>{
      this.search = this._trendingService.val.getValue()
    })
  }

  ngOnInit(): void {
  }

}
