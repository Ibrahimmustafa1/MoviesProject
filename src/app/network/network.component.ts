import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  token: any = localStorage.getItem('userToken')
  favorites: any
  search: any = null
  constructor(private _trendingService: TrendingService) {
    _trendingService.GetFavorite(this.token).subscribe((res) => {
      this.favorites = res.Favorites;
    
    })
    this._trendingService.val.subscribe((res) => {
      this.search = this._trendingService.val.getValue()
    })
  }

  ngOnInit(): void {
  }

}
