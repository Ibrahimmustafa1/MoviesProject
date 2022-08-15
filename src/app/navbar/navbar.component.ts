import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import jwtDecode from 'jwt-decode';
import { Router, RouterModule } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin = false;
  username :any = '';
  constructor(private _AuthService: AuthenticationService,private _router: Router,private _trendingService: TrendingService) {
    _AuthService.userData.subscribe(()=>{
      if(_AuthService.userData.getValue() != null) this.islogin=true;
      else this.islogin = false;
    })
    _AuthService.username.subscribe(()=>{
   this.username= this._AuthService.username.getValue(); 
   });
  }
  
  logout() {
    localStorage.removeItem("userToken");
    this._AuthService.userData.next(null);
    this._router.navigate(['/login']);
  }
  search(e:any){
    this._trendingService.val.next(e.target.value)    
  }
  
  ngOnInit(): void {
  }

}
