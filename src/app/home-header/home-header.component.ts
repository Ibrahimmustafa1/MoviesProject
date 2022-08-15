import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  customOptions: OwlOptions = {
    margin:10,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  movies:any
  imgpre:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _TrendingService:TrendingService) { 
    this._TrendingService.getTrending('movie').subscribe((res)=>{
      this.movies = res.results
    })
  }

  ngOnInit(): void {
  }

}
