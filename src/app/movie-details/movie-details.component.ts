import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id:any
  movie_details:any
  imgpre:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _ActivatedRoute:ActivatedRoute,private _trendingService: TrendingService) {
   this.id= _ActivatedRoute.snapshot.params.id
   this._trendingService.getmoviedetails(this.id).subscribe(results=>{
    this.movie_details=results
   
    
   })
   }

  ngOnInit(): void {
  }

}
