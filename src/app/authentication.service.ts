import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
import { Location } from "@angular/common";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private _HttpClient: HttpClient, private _router: Router, private _Location: Location) {

    if (localStorage.getItem('userToken') !== null) {

      if (this._Location.path() != ``) {
        // if user reload the website will be in the same page  
        this._router.navigate([`${this._Location.path()}`])
      }

   else this._router.navigate(['/home'])

      
      this.getuserdata();
    }
    
  }
  userData: any = new BehaviorSubject(null);
  username: any = new BehaviorSubject(null);
  getuserdata() {
    let token: any = localStorage.getItem('userToken');
    this.userData.next(jwtDecode(token));
    this.username.next(this.userData.getValue().first_name + ' ' + this.userData.getValue().last_name);
  }
  register(formdata: any): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formdata);
  }
  login(formdata: any): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin', formdata);
  }
  getusersdetails(): Observable<any> {
    return this._HttpClient.get(`https://route-egypt-api.herokuapp.com//getAllUsers`)
  }
  logout(){
    localStorage.removeItem("userToken");
    this.userData.next(null);
  }

}
