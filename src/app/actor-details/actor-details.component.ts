import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';



@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {
  id: number
  actorDetails: any
  imgpre:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _TrendingService: TrendingService, private _ActivatedRoute: ActivatedRoute) {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._TrendingService.getactorDetails(this.id).subscribe(results => {
      this.actorDetails = results
     
    })
  }

  ngOnInit(): void {
  }

}
