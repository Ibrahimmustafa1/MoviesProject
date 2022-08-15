import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  search:any=null;
  imgpre:string='https://image.tmdb.org/t/p/w500/';
  actors:any[]=[];
  constructor(private service: TrendingService) { 
    service.getTrending('person').subscribe(res=>{
    this.actors = res.results
  
    
    })

    service.val.subscribe(res=>{
      this.search=service.val.getValue();
    })
  }
    
  ngOnInit(): void {
  }

}
