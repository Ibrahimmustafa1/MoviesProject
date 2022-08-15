import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-tvshow-deetails',
  templateUrl: './tvshow-deetails.component.html',
  styleUrls: ['./tvshow-deetails.component.scss']
})
export class TvshowDeetailsComponent implements OnInit {
  id:any
  tvdata:any
  imgpre:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _trendingService: TrendingService,private _ActivatedRoute:ActivatedRoute) { 
   this.id= _ActivatedRoute.snapshot.params.id;
   _trendingService.gettvShowdetails(this.id).subscribe((res)=>{ 
    this.tvdata=res
   })

   
  }

  ngOnInit(): void {
  }

}
