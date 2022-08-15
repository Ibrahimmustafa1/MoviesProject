import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-yts-movie-details',
  templateUrl: './yts-movie-details.component.html',
  styleUrls: ['./yts-movie-details.component.scss']
})
export class YtsMovieDetailsComponent implements OnInit {
 movieDetalis:any
 id:any
  constructor(private _TrendingService: TrendingService,private _ActivatedRoute:ActivatedRoute) { 
   this.id= _ActivatedRoute.snapshot.params.x
    _TrendingService.getmoviesytsMovieDetails(this.id).subscribe(res => {
      this.movieDetalis =res;
 
    })
  }

  ngOnInit(): void {
  }

}
